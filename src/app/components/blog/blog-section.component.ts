import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';

interface CategoryPreview {
  icon: string;
  color: string;
  tag: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="blog-root">
      <!-- Ambient Backlight Glowing Aura -->
      <div class="blog-bg-glow"></div>

      <div class="blog-shell">
        
        <!-- Header -->
        <div class="blog-header">
          <div class="blog-eyebrow">
            <span class="pulse-dot"></span>
            EDITORIAL CENTER
          </div>
          <h1 class="blog-title">Insights, Tech & Finance Analysis</h1>
          <p class="blog-subtitle">
            Expert strategies to scale your logistics operations, optimize your mutual fund investments, and leverage compliance tools.
          </p>
        </div>

        <!-- Sleek Empty State Coming Soon Panel -->
        <div class="blog-hero-card">
          <div class="card-glow"></div>
          
          <div class="card-content">
            <!-- Modern Lucide-style Newspaper Icon -->
            <div class="card-icon-container">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                <path d="M18 14h-8"/>
                <path d="M15 18h-5"/>
                <path d="M10 6h8v4h-8V6Z"/>
              </svg>
            </div>
            
            <h2 class="card-title">Our Editorial Hub is Launching Soon</h2>
            <p class="card-text">
              We are working with fleet operators, financial advisors, and logistics experts to compile data-backed analysis, guidebooks, and compliance advisories.
            </p>

            <!-- Newsletter Signup Input Form -->
            <form (submit)="onSubscribe($event)" class="sub-form">
              <div class="input-wrapper">
                <input 
                  type="email" 
                  [(ngModel)]="email" 
                  name="email"
                  placeholder="Enter your corporate email address" 
                  required
                  class="sub-input"
                  [disabled]="subscribed"
                />
                <button type="submit" class="sub-btn" [disabled]="subscribed || loading">
                  <span *ngIf="!loading && !subscribed">Notify Me</span>
                  <span *ngIf="loading">Subscribing...</span>
                  <span *ngIf="subscribed">Subscribed!</span>
                </button>
              </div>
            </form>
            <p class="sub-note" *ngIf="!subscribed">Be the first to receive updates. No spam, unsubscribe anytime.</p>
          </div>
        </div>

        <!-- Curated Upcoming Categories Section -->
        <div class="blog-categories-section">
          <h3 class="categories-title">Upcoming Editorial Coverage</h3>
          
          <div class="categories-grid">
            <div class="category-card" *ngFor="let cat of categories">
              <div class="cat-card-header">
                <span class="cat-pill" [style.background]="cat.color + '12'" [style.color]="cat.color" [style.borderColor]="cat.color + '22'">
                  {{ cat.tag }}
                </span>
                
                <!-- Dynamic High-Fidelity SVG Vector Icons -->
                <span class="cat-icon-svg" [style.color]="cat.color">
                  <!-- Fleet & IoT SVG Icon -->
                  <svg *ngIf="cat.tag === 'FLEET & IOT'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                  
                  <!-- Wealth Management SVG Icon -->
                  <svg *ngIf="cat.tag === 'WEALTH MANAGEMENT'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                  
                  <!-- Risk Control SVG Icon -->
                  <svg *ngIf="cat.tag === 'RISK CONTROL'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
                  </svg>
                </span>
              </div>
              <h4 class="cat-title">{{ cat.title }}</h4>
              <p class="cat-desc">{{ cat.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    /* ─── Root ──────────────────────────────────────────── */
    .blog-root {
      position: relative;
      background: #0B0F19;
      min-height: calc(100vh - 65px);
      padding: 100px 24px 120px;
      overflow: hidden;
      font-family: 'Outfit', sans-serif;
    }

    /* Ambient glow effect */
    .blog-bg-glow {
      position: absolute;
      top: -150px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0) 70%);
      pointer-events: none;
      filter: blur(80px);
      z-index: 0;
    }

    .blog-shell {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* ─── Header ────────────────────────────────────────── */
    .blog-header {
      text-align: center;
      margin-bottom: 64px;
    }
    .blog-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(59,130,246,0.06);
      border: 1px solid rgba(59,130,246,0.15);
      padding: 6px 14px;
      border-radius: 99px;
      font-size: 11.5px;
      font-weight: 700;
      color: #3B82F6;
      letter-spacing: 0.08em;
      margin-bottom: 20px;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      background: #3B82F6;
      border-radius: 99px;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.9); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.9); opacity: 0.6; }
    }
    .blog-title {
      font-size: 2.85rem;
      font-weight: 800;
      color: #F8FAFC;
      letter-spacing: -0.02em;
      margin-bottom: 16px;
    }
    .blog-subtitle {
      font-size: 16px;
      color: #94A3B8;
      max-width: 720px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* ─── Hero Center Card ──────────────────────────────── */
    .blog-hero-card {
      position: relative;
      background: rgba(15, 23, 42, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 24px;
      padding: 56px 40px;
      text-align: center;
      max-width: 800px;
      margin: 0 auto 80px;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.03);
    }
    .card-glow {
      position: absolute;
      top: 0; left: 50%; transform: translateX(-50%);
      width: 250px; height: 1px;
      background: linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.4) 50%, rgba(59,130,246,0));
      z-index: 1;
    }
    .card-icon-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 84px;
      height: 84px;
      border-radius: 20px;
      background: rgba(59,130,246,0.04);
      border: 1px solid rgba(59,130,246,0.08);
      margin-bottom: 24px;
      box-shadow: inset 0 2px 8px rgba(59,130,246,0.04);
    }
    .card-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #F1F5F9;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .card-text {
      font-size: 14.5px;
      color: #64748B;
      max-width: 580px;
      margin: 0 auto 32px;
      line-height: 1.65;
    }

    /* ─── Form ──────────────────────────────────────────── */
    .sub-form {
      max-width: 500px;
      margin: 0 auto 16px;
    }
    .input-wrapper {
      display: flex;
      background: rgba(10, 15, 30, 0.85);
      border: 1px solid rgba(255,255,255,0.07);
      padding: 6px;
      border-radius: 14px;
      transition: all 0.3s;
    }
    .input-wrapper:focus-within {
      border-color: rgba(59,130,246,0.4);
      box-shadow: 0 0 15px rgba(59,130,246,0.08);
    }
    .sub-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      padding: 0 16px;
      color: #F8FAFC;
      font-size: 13.5px;
      font-weight: 500;
      font-family: inherit;
    }
    .sub-input::placeholder {
      color: #475569;
    }
    .sub-btn {
      background: #2563EB;
      color: #FFFFFF;
      border: none;
      outline: none;
      padding: 10px 20px;
      border-radius: 9px;
      font-size: 13.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .sub-btn:hover:not(:disabled) {
      background: #1D4ED8;
      box-shadow: 0 4px 12px rgba(37,99,235,0.25);
    }
    .sub-btn:disabled {
      background: rgba(37,99,235,0.4);
      color: rgba(255,255,255,0.6);
      cursor: not-allowed;
    }
    .sub-note {
      font-size: 12px;
      color: #475569;
      margin: 0;
    }

    /* ─── Categories Preview ────────────────────────────── */
    .blog-categories-section {
      text-align: center;
    }
    .categories-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #94A3B8;
      margin-bottom: 32px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: 960px;
      margin: 0 auto;
    }
    .category-card {
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      padding: 32px 24px;
      text-align: left;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }
    .category-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.08) 50%, rgba(255,255,255,0));
      transition: background 0.3s;
    }
    .category-card:hover {
      background: rgba(20, 30, 54, 0.7);
      border-color: rgba(59, 130, 246, 0.2);
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(59, 130, 246, 0.04);
    }
    .category-card:hover::before {
      background: linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.3) 50%, rgba(59,130,246,0));
    }
    .cat-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .cat-pill {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      padding: 4px 10px;
      border: 1px solid transparent;
      border-radius: 99px;
    }
    .cat-icon-svg {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.04);
      transition: all 0.3s;
    }
    .category-card:hover .cat-icon-svg {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.1);
      transform: scale(1.05);
    }
    .cat-title {
      font-size: 15px;
      font-weight: 700;
      color: #E2E8F0;
      margin-bottom: 8px;
    }
    .cat-desc {
      font-size: 12.5px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }

    /* ─── Responsive ────────────────────────────────────── */
    @media (max-width: 960px) {
      .categories-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 700px;
      }
    }
    @media (max-width: 640px) {
      .blog-root { padding: 80px 16px 80px; }
      .blog-title { font-size: 2.15rem; }
      .blog-hero-card { padding: 40px 20px; }
      .categories-grid { grid-template-columns: 1fr; }
      .input-wrapper { flex-direction: column; gap: 8px; background: transparent; border: none; padding: 0; }
      .sub-input { background: rgba(10, 15, 30, 0.85); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; height: 46px; }
      .sub-btn { height: 46px; border-radius: 12px; }
    }
  `]
})
export class BlogSectionComponent {
  private api = inject(ApiService);
  private sessionService = inject(SessionService);
  private toastService = inject(ToastService);

  email = '';
  loading = false;
  subscribed = false;

  readonly categories: CategoryPreview[] = [
    {
      icon: '', color: '#3B82F6', tag: 'FLEET & IOT',
      title: 'Logistics Optimization',
      desc: 'Exploring telemetry innovations, fuel management strategies, and geofencing systems that increase dispatch margins.'
    },
    {
      icon: '', color: '#10B981', tag: 'WEALTH MANAGEMENT',
      title: 'Mutual Fund Operations',
      desc: 'Expert guides on AMFI-registered investments, market volatility analysis, and compounding strategies for long-term yields.'
    },
    {
      icon: '', color: '#F59E0B', tag: 'RISK CONTROL',
      title: 'Corporate Compliance',
      desc: 'Navigating NHAI certified FASTag regulations, bulk toll discounts, and business insurance protections.'
    }
  ];

  onSubscribe(event: Event): void {
    event.preventDefault();
    const cleanEmail = this.email.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) return;

    this.loading = true;

    this.api.subscribeNewsletter(cleanEmail).subscribe({
      next: (res) => {
        this.loading = false;
        this.subscribed = true;

        // Track Subscribe Form Event
        this.sessionService.trackEvent('form_submit', 'blog-newsletter-subscribe', `Subscribed email: ${cleanEmail}`);
        this.toastService.show(res.message || "Thank you! You've been successfully subscribed to our launch updates.");
        this.email = '';
      },
      error: (err: Error) => {
        this.loading = false;
        this.toastService.show(err.message || "Failed to subscribe. Please try again.", "error");
      }
    });
  }
}
