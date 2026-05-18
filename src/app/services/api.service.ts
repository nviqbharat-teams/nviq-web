import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service';

// ─── Response Types ───────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: { total: number; page: number; limit: number; totalPages: number };
}

export interface Company {
  _id: string;
  companyName: string;
  CIN: string;
  PAN: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  tagline?: string;
}

export interface Fund {
  _id: string;
  fundName: string;
  category: string;
  risk: 'Low' | 'Moderate' | 'High' | 'Very High';
  returns: string;
  description: string;
  minSIP: number;
  isFeatured: boolean;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  isActive: boolean;
  order: number;
}

export interface LiveGpsStats {
  vehiclesOnline: number;
  tripsTracked: number;
  smartAlerts: number;
  citiesCovered: number;
  updatedAt: string;
}

export type EnquirySource =
  | 'contact-form'
  | 'lead-modal'
  | 'gps-enquiry'
  | 'mf-enquiry'
  | 'fastag-enquiry'
  | 'drone-enquiry'
  | 'insurance-enquiry'
  | 'ai-enquiry'
  | 'other';

export type ProductCategory = 'gps' | 'mf' | 'insurance' | 'ai' | 'fastag' | 'other';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: EnquirySource;
  productCategory?: ProductCategory;
}

export interface ProductEnquiryPayload {
  name: string;
  email?: string;
  phone: string;
  productCategory: ProductCategory;
  // GPS / FASTag fields
  company?:      string;
  fleetSize?:    string;
  businessType?: string;
  requirement?:  string;
  // MF fields
  budget?:          string;
  goal?:            string;
  experience?:      string;
  riskPreference?:  string;
  // Insurance / AI / Other
  message?: string;
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly BASE = environment.apiUrl;
  private http = inject(HttpClient);
  private session = inject(SessionService);

  // ── Auth header ─────────────────────────────────────────────────────────────
  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('nviq_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 🏢 Company
  // ─────────────────────────────────────────────────────────────────────────

  getCompany(): Observable<ApiResponse<Company>> {
    return this.http.get<ApiResponse<Company>>(`${this.BASE}/company`)
      .pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 📊 Mutual Funds
  // ─────────────────────────────────────────────────────────────────────────

  getFunds(params?: { page?: number; limit?: number; category?: string; risk?: string }): Observable<ApiResponse<Fund[]>> {
    let p = new HttpParams();
    if (params?.page)     p = p.set('page',     params.page.toString());
    if (params?.limit)    p = p.set('limit',    params.limit.toString());
    if (params?.category) p = p.set('category', params.category);
    if (params?.risk)     p = p.set('risk',     params.risk);

    return this.http.get<ApiResponse<Fund[]>>(`${this.BASE}/funds`, { params: p })
      .pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 💼 Services
  // ─────────────────────────────────────────────────────────────────────────

  getServices(): Observable<ApiResponse<Service[]>> {
    return this.http.get<ApiResponse<Service[]>>(`${this.BASE}/services`)
      .pipe(catchError(this.handleError));
  }

  getLiveGpsStats(): Observable<ApiResponse<LiveGpsStats>> {
    return this.http.get<ApiResponse<LiveGpsStats>>(`${this.BASE}/live-stats/gps`)
      .pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 📩 Contact Form & Lead Submission (Attributed to Visitor Sessions)
  // ─────────────────────────────────────────────────────────────────────────

  submitContact(payload: ContactPayload): Observable<{ success: boolean; message: string }> {
    const body = {
      inquiryType: 'contact_us',
      fullName: payload.name,
      email: payload.email,
      phoneNumber: payload.phone || 'N/A',
      message: payload.message,
      sessionId: this.session.getSessionId(),
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : '',
      sourceElement: payload.source || 'contact-form',
      fleetSize: 0
    };

    return this.http.post<{ success: boolean; message: string }>(
      `${this.BASE}/web/inquiries`,
      body
    ).pipe(catchError(this.handleError));
  }

  submitProductEnquiry(payload: ProductEnquiryPayload): Observable<{ success: boolean; message: string }> {
    const category = payload.productCategory;
    const isFleet = category === 'gps' || category === 'fastag';
    const inquiryType = isFleet ? 'fleet_inquiry' : 'product_inquiry';

    const productMap: Record<ProductCategory, string> = {
      gps:       'gps_fleet_tracking',
      mf:        'mutual_funds',
      fastag:    'fast_tag_system',
      insurance: 'general',
      ai:        'general',
      other:     'general',
    };
    const productOfInterest = productMap[category] || 'general';

    let numVehicles = 0;
    if (isFleet && payload.fleetSize) {
      if (payload.fleetSize.includes('1-10')) numVehicles = 10;
      else if (payload.fleetSize.includes('10-50')) numVehicles = 50;
      else if (payload.fleetSize.includes('50-100')) numVehicles = 100;
      else if (payload.fleetSize.includes('100+')) numVehicles = 150;
      else numVehicles = parseInt(payload.fleetSize, 10) || 0;
    }

    let parts: string[] = [];
    if (category === 'mf') {
      if (payload.budget)         parts.push(`Budget: ${payload.budget}`);
      if (payload.goal)           parts.push(`Goal: ${payload.goal}`);
      if (payload.experience)     parts.push(`Experience: ${payload.experience}`);
      if (payload.riskPreference) parts.push(`Risk: ${payload.riskPreference}`);
    } else if (category === 'insurance' || category === 'ai') {
      if (payload.requirement)    parts.push(`Requirement: ${payload.requirement}`);
      if (payload.fleetSize)      parts.push(`Team Size: ${payload.fleetSize}`);
    } else if (isFleet) {
      if (payload.requirement)    parts.push(`Requirement: ${payload.requirement}`);
    }

    if (payload.message) parts.push(payload.message);

    const body: any = {
      inquiryType,
      fullName: payload.name,
      email: payload.email || 'no-email@nviq.in',
      phoneNumber: payload.phone,
      message: parts.join(' | ') || 'No additional details.',
      sessionId: this.session.getSessionId(),
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : '',
      sourceElement: `cta-modal-${category}`,
      productOfInterest
    };

    if (inquiryType === 'fleet_inquiry') {
      body.businessName = payload.company || 'N/A';
      body.numberOfVehicles = numVehicles;
    }

    return this.http.post<{ success: boolean; message: string }>(
      `${this.BASE}/web/inquiries`,
      body
    ).pipe(catchError(this.handleError));
  }

  subscribeNewsletter(email: string): Observable<{ success: boolean; message: string }> {
    const body = {
      email,
      sessionId: this.session.getSessionId()
    };
    return this.http.post<{ success: boolean; message: string }>(
      `${this.BASE}/web/newsletter`,
      body
    ).pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 🔐 Auth
  // ─────────────────────────────────────────────────────────────────────────

  login(email: string, password: string): Observable<{ success: boolean; token: string; data: any }> {
    return this.http.post<{ success: boolean; token: string; data: any }>(
      `${this.BASE}/auth/login`,
      { email, password }
    ).pipe(
      map(res => {
        if (res.token) localStorage.setItem('nviq_token', res.token);
        return res;
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('nviq_token');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ⚙️ Error handler
  // ─────────────────────────────────────────────────────────────────────────

  private handleError(error: any): Observable<never> {
    const msg =
      error?.error?.message ||
      error?.error?.errors?.[0]?.msg ||
      error?.message ||
      'Something went wrong. Please try again.';
    console.error('API Error:', msg);
    return throwError(() => new Error(msg));
  }
}
