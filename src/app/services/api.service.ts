import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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

export type EnquirySource =
  | 'contact-form'
  | 'lead-modal'
  | 'gps-enquiry'
  | 'mf-enquiry'
  | 'fastag-enquiry'
  | 'drone-enquiry'
  | 'other';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: EnquirySource;
  productType?: string;
}

export interface ProductEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  // GPS-specific optional fields
  company?:     string;
  fleetSize?:   string;
  vehicleType?: string;
  // MF-specific optional fields
  budget?:     string;
  goal?:       string;
  experience?: string;
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly BASE = environment.apiUrl;
  private http = inject(HttpClient);

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

  // ─────────────────────────────────────────────────────────────────────────
  // 📩 Contact Form
  // ─────────────────────────────────────────────────────────────────────────

  submitContact(payload: ContactPayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.BASE}/contact`,
      payload
    ).pipe(catchError(this.handleError));
  }

  /**
   * Product-specific enquiry submission.
   * Routes to /contact with enriched product metadata.
   * When backend adds dedicated endpoints (/gps, /mutual-fund etc.),
   * only this method needs updating — no component changes required.
   */
  submitProductEnquiry(
    productType: 'gps' | 'mf' | 'fastag' | 'drone',
    payload: ProductEnquiryPayload,
  ): Observable<{ success: boolean; message: string }> {
    const meta: Record<string, { message: string; source: EnquirySource }> = {
      gps: {
        message: '[GPS Enquiry] Interested in GPS Fleet Tracking — Rs 499/vehicle/month.',
        source:  'gps-enquiry',
      },
      mf: {
        message: '[MF Enquiry] Interested in Mutual Fund investments — SIP from ₹1,000/month.',
        source:  'mf-enquiry',
      },
      fastag: {
        message: '[FASTag Enquiry] Interested in FASTag fleet management.',
        source:  'fastag-enquiry',
      },
      drone: {
        message: '[Drone Enquiry] Interested in agricultural drone solutions.',
        source:  'drone-enquiry',
      },
    };

    const { source } = meta[productType];
    let { message } = meta[productType];
    if (productType === 'gps' && (payload.company || payload.fleetSize || payload.vehicleType)) {
      message += ` | Company: ${payload.company ?? '-'} | Fleet Size: ${payload.fleetSize ?? '-'} | Vehicle Type: ${payload.vehicleType ?? '-'}`;
    }
    if (productType === 'mf' && (payload.budget || payload.goal || payload.experience)) {
      message += ` | Budget: ${payload.budget ?? '-'} | Goal: ${payload.goal ?? '-'} | Experience: ${payload.experience ?? '-'}`;
    }
    return this.http.post<{ success: boolean; message: string }>(
      `${this.BASE}/contact`,
      { ...payload, message, source, productType },
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
