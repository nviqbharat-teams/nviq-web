import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="site-header" [class.scrolled]="isScrolled">
      <div class="header-inner container">

        <!-- Logo -->
        <a routerLink="/" class="logo" (click)="closeMobile()">
          <div class="logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#00D4FF"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span class="logo-live-dot"></span>
          </div>
          <span class="logo-text">NV<span class="logo-accent">i</span>Q</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-links" aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
          <a routerLink="/services" routerLinkActive="active">Services</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>

        <!-- CTA Row -->
        <div class="header-cta">
          <a routerLink="/contact" class="cta-demo">Get Demo</a>
          <a routerLink="/contact" class="cta-start">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Start Free
          </a>
        </div>

        <!-- Hamburger -->
        <button
          class="hamburger"
          [class.open]="mobileOpen()"
          (click)="toggleMobile()"
          aria-label="Toggle menu"
          [attr.aria-expanded]="mobileOpen()"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <nav class="mobile-menu" [class.open]="mobileOpen()" aria-label="Mobile navigation">
        <a routerLink="/" (click)="closeMobile()">Home</a>
        <a routerLink="/services" (click)="closeMobile()">Services</a>
        <a routerLink="/about" (click)="closeMobile()">About</a>
        <a routerLink="/contact" (click)="closeMobile()">Contact</a>
        <div class="mobile-menu-cta">
          <a routerLink="/contact" class="cta-start w-full text-center" (click)="closeMobile()">Start Free Trial</a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .site-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 18px 0;
      transition: all 0.3s ease;
    }

    .site-header.scrolled {
      background: rgba(4,7,15,0.88);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-bottom: 1px solid rgba(0,212,255,0.08);
      padding: 12px 0;
    }

    .header-inner {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    /* Logo */
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }

    .logo-icon {
      position: relative;
      width: 38px; height: 38px;
      background: rgba(0,212,255,0.08);
      border: 1px solid rgba(0,212,255,0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .logo:hover .logo-icon {
      background: rgba(0,212,255,0.14);
      border-color: rgba(0,212,255,0.35);
      box-shadow: 0 0 20px rgba(0,212,255,0.15);
    }

    .logo-live-dot {
      position: absolute;
      top: -3px; right: -3px;
      width: 9px; height: 9px;
      background: #10B981;
      border-radius: 50%;
      border: 2px solid #04070F;
      animation: pulse-dot 2s ease infinite;
    }

    @keyframes pulse-dot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
      50% { box-shadow: 0 0 0 4px rgba(16,185,129,0); }
    }

    .logo-text {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #F0F6FF;
      letter-spacing: -0.02em;
    }

    .logo-accent { color: #00D4FF; }

    /* Nav */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-left: auto;
    }

    .nav-links a {
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      color: #94A3B8;
      border-radius: 8px;
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .nav-links a:hover {
      color: #F0F6FF;
      background: rgba(255,255,255,0.05);
    }

    .nav-links a.active {
      color: #00D4FF;
      background: rgba(0,212,255,0.06);
    }

    /* CTA */
    .header-cta {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }

    .cta-demo {
      padding: 9px 18px;
      font-size: 13px;
      font-weight: 600;
      color: #94A3B8;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 9px;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .cta-demo:hover {
      color: #00D4FF;
      border-color: rgba(0,212,255,0.3);
      background: rgba(0,212,255,0.05);
    }

    .cta-start {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 9px 20px;
      font-size: 13px;
      font-weight: 700;
      color: #04070F;
      background: linear-gradient(135deg, #00D4FF, #0EA5E9);
      border-radius: 9px;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .cta-start:hover {
      box-shadow: 0 6px 24px rgba(0,212,255,0.35);
      transform: translateY(-1px);
    }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      width: 36px; padding: 4px;
      background: none; border: none;
      cursor: pointer; margin-left: auto;
    }

    .hamburger span {
      display: block;
      height: 2px;
      background: #94A3B8;
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: left;
    }

    .hamburger.open span:nth-child(1) { transform: rotate(42deg) translateY(-1px); }
    .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.open span:nth-child(3) { transform: rotate(-42deg) translateY(1px); }

    /* Mobile Menu */
    .mobile-menu {
      display: none;
      flex-direction: column;
      padding: 16px 20px 24px;
      background: rgba(4,7,15,0.98);
      border-top: 1px solid rgba(255,255,255,0.05);
      gap: 2px;
    }

    .mobile-menu.open { display: flex; }

    .mobile-menu a {
      padding: 14px 12px;
      font-size: 15px;
      font-weight: 500;
      color: #94A3B8;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      text-decoration: none;
      transition: color 0.2s;
    }

    .mobile-menu a:hover { color: #00D4FF; }

    .mobile-menu-cta {
      margin-top: 16px;
      display: flex;
    }

    .mobile-menu-cta .cta-start {
      flex: 1;
      justify-content: center;
      font-size: 14px;
      padding: 14px;
    }

    @media (max-width: 1024px) {
      .nav-links { display: none; }
      .header-cta { display: none; }
      .hamburger { display: flex; }
    }
  `]
})
export class HeaderComponent {
  mobileOpen = signal(false);
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}
