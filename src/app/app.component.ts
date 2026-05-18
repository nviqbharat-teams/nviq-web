import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutSectionComponent } from './components/about/about-section.component';
import { BlogSectionComponent } from './components/blog/blog-section.component';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeadModalComponent } from './components/lead-modal/lead-modal.component';
import { RabbitLoaderComponent } from './components/rabbit-loader/rabbit-loader.component';

import { NavService } from './services/nav.service';
import { SessionService } from './services/session.service';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HomeSliderComponent,
    ProductsPageComponent,
    ProductDetailComponent,
    AboutSectionComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    LeadModalComponent,
    RabbitLoaderComponent,

  ],
  template: `
    <!-- Loading screen -->
    <div *ngIf="loading">
      <app-rabbit-loader [duration]="3600" [fullScreen]="true"></app-rabbit-loader>
    </div>

    <!-- App shell -->
    <ng-container *ngIf="!loading">

      <app-navbar></app-navbar>

      <!-- NavService SPA pages (URL = "/") -->
      <main *ngIf="!isRouterPage" class="app-main" [class.home-main]="page === 'home'">
        <div *ngIf="page === 'home'"           class="pw" [class.pw-exit]="transitioning"><app-home-slider></app-home-slider></div>
        <div *ngIf="page === 'products'"       class="pw" [class.pw-exit]="transitioning"><app-products-page></app-products-page></div>
        <div *ngIf="page === 'product-detail'" class="pw" [class.pw-exit]="transitioning">
          <app-product-detail></app-product-detail>
        </div>
        <div *ngIf="page === 'about'"   class="pw" [class.pw-exit]="transitioning"><app-about-section></app-about-section></div>
        <div *ngIf="page === 'blog'"    class="pw" [class.pw-exit]="transitioning"><app-blog-section></app-blog-section></div>
        <div *ngIf="page === 'contact'" class="pw" [class.pw-exit]="transitioning"><app-contact-section></app-contact-section></div>
      </main>

      <!-- Router pages (URL = "/mutual-fund", "/products/gps-tracking", etc.) -->
      <main *ngIf="isRouterPage" class="app-main">
        <router-outlet></router-outlet>
      </main>

      <app-footer *ngIf="page !== 'home' || isRouterPage"></app-footer>
      <app-lead-modal
        [open]="nav.modalOpen()"
        [productType]="nav.product()"
        (closeModal)="nav.closeModal()">
      </app-lead-modal>

      <!-- Premium Glassmorphism Toast Overlay -->
      <div *ngIf="toastService.toast() as t" 
           class="global-toast" 
           [class]="'toast-' + t.type"
           (click)="toastService.clear()">
        <div class="toast-content">
          <svg *ngIf="t.type === 'success'" class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <svg *ngIf="t.type === 'error'" class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          <span class="toast-msg">{{ t.message }}</span>
        </div>
        <button class="toast-close" (click)="toastService.clear(); $event.stopPropagation()">&times;</button>
      </div>
    </ng-container>
  `,
  styles: [`
    .app-main {
      padding-top: 65px;
      min-height: calc(100vh - 88px);
      background: #0A0A0A;
      perspective: 1200px;
    }
    .home-main { padding-top: 0; min-height: 100vh; }

    .pw {
      animation: pwEnter 0.55s cubic-bezier(0.22,1,0.36,1) both;
      transform-origin: center top;
      will-change: opacity, transform;
    }
    .pw-exit {
      animation: pwExit 0.28s cubic-bezier(0.4,0,1,1) both;
      pointer-events: none;
    }
    @keyframes pwEnter {
      from { opacity: 0; transform: translateY(28px) rotateX(4deg); }
      to   { opacity: 1; transform: none; }
    }
    @keyframes pwExit {
      from { opacity: 1; transform: none; }
      to   { opacity: 0; transform: translateY(-14px) rotateX(-3deg); }
    }

    /* ─── Premium Glassmorphism Global Toast ──────────────── */
    .global-toast {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 14px 20px;
      border-radius: 14px;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.1);
      cursor: pointer;
      max-width: 400px;
      animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .toast-success {
      border-color: rgba(34, 197, 94, 0.3);
      box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(34, 197, 94, 0.06);
    }
    .toast-error {
      border-color: rgba(239, 68, 68, 0.3);
      box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(239, 68, 68, 0.06);
    }
    .toast-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .toast-icon {
      flex-shrink: 0;
    }
    .toast-msg {
      color: #F8FAFC;
      font-size: 13.5px;
      font-weight: 600;
      line-height: 1.4;
      font-family: 'Outfit', sans-serif;
    }
    .toast-close {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.3);
      font-size: 18px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      transition: color 0.15s;
    }
    .toast-close:hover {
      color: #fff;
    }
    @keyframes toastSlideIn {
      from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  loading      = true;
  isRouterPage = false;
  transitioning = false;

  private timer:     ReturnType<typeof setTimeout> | null = null;
  private transTimer: ReturnType<typeof setTimeout> | null = null;
  private routerSub?: Subscription;

  constructor(public nav: NavService, private router: Router, private sessionService: SessionService, public toastService: ToastService) {}

  get page() { return this.nav.page(); }

  ngOnInit(): void {
    this.timer = setTimeout(() => { this.loading = false; }, 4000);

    // Initial page view event
    this.sessionService.trackEvent('page_view', 'app-initial-load', this.router.url);

    // Determine if current URL is a router-managed page (anything other than "/")
    this.isRouterPage = this.router.url !== '/';
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isRouterPage = (e as NavigationEnd).urlAfterRedirects !== '/';
      this.sessionService.trackEvent('page_view', 'page-navigation', (e as NavigationEnd).urlAfterRedirects);
    });

    // Wrap NavService.go to flash exit animation before switching page and log SPA page navigation
    const origGo = this.nav.go.bind(this.nav);
    (this.nav as any).go = (page: any, product?: any) => {
      this.transitioning = true;
      if (this.transTimer) clearTimeout(this.transTimer);
      this.transTimer = setTimeout(() => {
        origGo(page, product);
        this.transitioning = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Log SPA navigation as a page_view event
        this.sessionService.trackEvent('page_view', `spa-nav-${page}`, `/${page}`);
      }, 260);
    };
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
    if (this.transTimer) clearTimeout(this.transTimer);
    this.routerSub?.unsubscribe();
  }
}
