/**
 * angular-api.service.example.ts
 *
 * Drop this into your Angular project as:
 *   src/app/services/api.service.ts
 *
 * Usage in any component:
 *   constructor(private api: ApiService) {}
 *   this.api.getFunds().subscribe(res => this.funds = res.data);
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
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
  foundedYear?: number;
  socialLinks?: { linkedin: string; twitter: string; facebook: string; instagram: string };
}

export interface Fund {
  _id: string;
  fundName: string;
  category: string;
  risk: 'Low' | 'Moderate' | 'High' | 'Very High';
  returns: string;     // "12%" — string, matches slider
  description: string;
  minSIP: number;
  isFeatured: boolean;
  order: number;
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
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly BASE = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // ── Auth header helper ─────────────────────────────────────────────────────
  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('nviq_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 🏢 COMPANY
  // ─────────────────────────────────────────────────────────────────────────

  getCompany(): Observable<ApiResponse<Company>> {
    return this.http.get<ApiResponse<Company>>(`${this.BASE}/company`).pipe(
      catchError(this.handleError)
    );
  }

  updateCompany(id: string, data: Partial<Company> | FormData): Observable<ApiResponse<Company>> {
    return this.http.put<ApiResponse<Company>>(
      `${this.BASE}/company/${id}`,
      data,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 📊 MUTUAL FUNDS
  // ─────────────────────────────────────────────────────────────────────────

  getFunds(params?: {
    page?: number;
    limit?: number;
    category?: string;
    risk?: string;
    featured?: boolean;
  }): Observable<ApiResponse<Fund[]>> {
    let httpParams = new HttpParams();
    if (params?.page)     httpParams = httpParams.set('page',     params.page.toString());
    if (params?.limit)    httpParams = httpParams.set('limit',    params.limit.toString());
    if (params?.category) httpParams = httpParams.set('category', params.category);
    if (params?.risk)     httpParams = httpParams.set('risk',     params.risk);
    if (params?.featured) httpParams = httpParams.set('featured', 'true');

    return this.http.get<ApiResponse<Fund[]>>(`${this.BASE}/funds`, { params: httpParams }).pipe(
      catchError(this.handleError)
    );
  }

  getFund(id: string): Observable<ApiResponse<Fund>> {
    return this.http.get<ApiResponse<Fund>>(`${this.BASE}/funds/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createFund(fund: Omit<Fund, '_id'>): Observable<ApiResponse<Fund>> {
    return this.http.post<ApiResponse<Fund>>(
      `${this.BASE}/funds`,
      fund,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  updateFund(id: string, fund: Partial<Fund>): Observable<ApiResponse<Fund>> {
    return this.http.put<ApiResponse<Fund>>(
      `${this.BASE}/funds/${id}`,
      fund,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  deleteFund(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(
      `${this.BASE}/funds/${id}`,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 💼 SERVICES
  // ─────────────────────────────────────────────────────────────────────────

  getServices(page = 1, limit = 10): Observable<ApiResponse<Service[]>> {
    const params = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<ApiResponse<Service[]>>(`${this.BASE}/services`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  createService(data: FormData): Observable<ApiResponse<Service>> {
    return this.http.post<ApiResponse<Service>>(
      `${this.BASE}/services`,
      data,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  updateService(id: string, data: Partial<Service> | FormData): Observable<ApiResponse<Service>> {
    return this.http.put<ApiResponse<Service>>(
      `${this.BASE}/services/${id}`,
      data,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  deleteService(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(
      `${this.BASE}/services/${id}`,
      { headers: this.authHeaders() }
    ).pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 📩 CONTACT
  // ─────────────────────────────────────────────────────────────────────────

  submitContact(payload: ContactPayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.BASE}/contact`,
      payload
    ).pipe(catchError(this.handleError));
  }

  getContacts(page = 1, status?: string): Observable<ApiResponse<any[]>> {
    let params = new HttpParams().set('page', page).set('limit', 20);
    if (status) params = params.set('status', status);
    return this.http.get<ApiResponse<any[]>>(
      `${this.BASE}/contact`,
      { headers: this.authHeaders(), params }
    ).pipe(catchError(this.handleError));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 🔐 AUTH
  // ─────────────────────────────────────────────────────────────────────────

  login(email: string, password: string): Observable<{ success: boolean; token: string }> {
    return this.http.post<{ success: boolean; token: string }>(
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

  isLoggedIn(): boolean {
    return !!localStorage.getItem('nviq_token');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ⚙️ Error Handler
  // ─────────────────────────────────────────────────────────────────────────

  private handleError(error: any) {
    const msg =
      error?.error?.message ||
      error?.error?.errors?.[0]?.msg ||
      error?.message ||
      'Something went wrong. Please try again.';
    console.error('API Error:', msg);
    return throwError(() => new Error(msg));
  }
}
