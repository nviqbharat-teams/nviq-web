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

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: 'contact-form' | 'lead-modal' | 'other';
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
