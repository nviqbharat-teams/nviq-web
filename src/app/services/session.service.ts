import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private http = inject(HttpClient);
  private readonly BASE = environment.apiUrl;
  private sessionId = '';

  constructor() {
    this.initializeSessionId();
  }

  /**
   * Retrieves the current visitor session ID.
   */
  getSessionId(): string {
    if (!this.sessionId) {
      this.initializeSessionId();
    }
    return this.sessionId;
  }

  /**
   * Set up or retrieve session ID from localStorage.
   */
  private initializeSessionId(): void {
    if (typeof window === 'undefined') return;

    let savedId = localStorage.getItem('nviq_session_id');
    if (!savedId) {
      savedId = 'sess_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
      localStorage.setItem('nviq_session_id', savedId);
      this.sessionId = savedId;
      // Initialize this new session with the backend
      this.registerSessionOnBackend(savedId);
    } else {
      this.sessionId = savedId;
    }
  }

  /**
   * Call the backend to register the visitor session with UTM & device info.
   */
  private registerSessionOnBackend(sid: string): void {
    if (typeof window === 'undefined') return;

    const initialReferrer = document.referrer || 'Direct';
    const utm = this.getUtmParams();
    const deviceInfo = this.getDeviceInfo();

    this.http.post(`${this.BASE}/web/analytics/session`, {
      sessionId: sid,
      initialReferrer,
      utm,
      deviceInfo
    }).subscribe({
      next: () => console.log('📊 Session registered successfully:', sid),
      error: (err) => console.error('❌ Failed to register session on backend:', err)
    });
  }

  /**
   * Parse UTM parameters from the URL query string.
   */
  private getUtmParams(): any {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      source:   params.get('utm_source') || '',
      medium:   params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
      term:     params.get('utm_term') || '',
      content:  params.get('utm_content') || ''
    };
  }

  /**
   * Basic device info parsing.
   */
  private getDeviceInfo(): any {
    if (typeof window === 'undefined') {
      return { browser: 'Unknown', os: 'Unknown', deviceType: 'desktop' };
    }

    const ua = navigator.userAgent;
    let browser = 'Unknown';
    let os = 'Unknown';
    let deviceType = 'desktop';

    // Browser detection
    if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Edge')) browser = 'Edge';

    // OS detection
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Macintosh')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

    // Device type
    if (/Mobi|Android|iPhone/i.test(ua)) {
      deviceType = 'mobile';
    } else if (/Tablet|iPad/i.test(ua)) {
      deviceType = 'tablet';
    }

    return { browser, os, deviceType };
  }

  /**
   * Tracks an anonymous interaction event and submits it to the backend.
   */
  trackEvent(
    eventType: 'click' | 'page_view' | 'form_view' | 'form_submit',
    elementId?: string,
    elementText?: string
  ): void {
    if (typeof window === 'undefined') return;

    const sid = this.getSessionId();
    if (!sid) return;

    const pagePath = window.location.pathname;

    this.http.post(`${this.BASE}/web/analytics/event`, {
      sessionId: sid,
      eventType,
      elementId: elementId || '',
      elementText: elementText || '',
      pagePath
    }).subscribe({
      next: () => console.log(`📈 Event logged [${eventType}]: ${elementId || pagePath}`),
      error: (err) => console.error('❌ Failed to log session event:', err)
    });
  }
}
