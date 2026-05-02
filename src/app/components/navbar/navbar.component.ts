import {
  Component, HostListener, OnInit, ElementRef, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav-root" [class.scrolled]="scrolled">
      <div class="nav-shell">

        <!-- LEFT: Home + Products -->
        <div class="nav-left">
          <button class="nav-link" type="button"
            [class.active]="nav.page() === 'home'"
            (click)="navigate('home')">
            Home
          </button>
          <button class="nav-link" type="button"
            [class.active]="nav.page() === 'products' || nav.page() === 'product-detail'"
            (click)="navigate('products')">
            Products
          </button>
        </div>

        <!-- CENTER: Logo (absolute centered) -->
        <button class="nav-logo" type="button" (click)="navigate('home')">
          <span class="logo-rabbit" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 80 80" fill="none"
              stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M28 36 C26 28 24 18 26 10 C27 6 30 4 33 6 C36 8 36 14 35 22 L34 30"/>
              <path d="M38 32 C38 24 40 16 44 12 C46 10 49 10 50 13 C51 16 49 22 46 27 L42 32"/>
              <path d="M24 36 C22 40 22 46 26 50 C30 54 36 55 42 54 C48 53 52 49 52 44 C52 38 48 33 42 32 L35 30 C30 29 25 32 24 36Z"/>
              <circle cx="35" cy="42" r="2" fill="white" stroke="none"/>
              <path d="M26 50 C24 56 24 62 28 66 C32 70 40 71 46 69 C52 67 54 61 52 55"/>
              <circle cx="54" cy="62" r="3"/>
              <path d="M30 66 L28 74 M36 68 L36 76 M44 68 L46 76 M50 64 L54 72"/>
            </svg>
          </span>
          <span class="logo-text">NV<span class="logo-i">i</span>Q</span>
        </button>

        <!-- RIGHT: Company + Contact -->
        <div class="nav-right">

          <!-- Company dropdown -->
          <div class="nav-dropdown" #companyDd>
            <button class="nav-link" type="button"
              [class.active]="isCompanyPage"
              (click)="toggleDropdown()">
              Company
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round"
                [style.transform]="ddOpen ? 'rotate(180deg)' : 'none'"
                style="transition:transform 0.2s ease">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div class="dd-menu" [class.dd-open]="ddOpen">
              <button class="dd-item" type="button"
                [class.active]="nav.page() === 'about'"
                (click)="navigate('about')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                About Us
              </button>
              <button class="dd-item" type="button"
                [class.active]="nav.page() === 'team'"
                (click)="navigate('team')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Our Team
              </button>
            </div>
          </div>

          <button class="nav-link" type="button"
            [class.active]="nav.page() === 'contact'"
            (click)="navigate('contact')">
            Contact Us
          </button>
        </div>

        <!-- Mobile toggle -->
        <button class="mob-toggle" type="button"
          (click)="mobileOpen = !mobileOpen"
          [attr.aria-expanded]="mobileOpen"
          aria-label="Toggle menu">
          <span *ngIf="!mobileOpen">&#9776;</span>
          <span *ngIf="mobileOpen">&#10005;</span>
        </button>

      </div>

      <!-- Mobile panel -->
      <div class="mob-panel" [class.mob-open]="mobileOpen">
        <button class="mob-link" type="button" (click)="navigate('home')">Home</button>
        <button class="mob-link" type="button" (click)="navigate('products')">Products</button>
        <button class="mob-link" type="button" (click)="navigate('about')">About</button>
        <button class="mob-link" type="button" (click)="navigate('team')">Team</button>
        <button class="mob-link" type="button" (click)="navigate('contact')">Contact Us</button>
      </div>
    </nav>
  `,
  styles: [`
    /* ── Root ──────────────────────────────────────────── */
    .nav-root {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 1000;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid #E2E8F0;
      transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .nav-root.scrolled {
      background: #FFFFFF;
      border-color: #E2E8F0;
      box-shadow: 0 1px 12px rgba(0,0,0,0.07);
    }

    /* ── Shell ──────────────────────────────────────────── */
    .nav-shell {
      max-width: 1280px; margin: 0 auto;
      min-height: 64px;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    /* ── Left / Right ───────────────────────────────────── */
    .nav-left {
      display: flex; align-items: center; gap: 2px;
      padding-right: 80px;
    }
    .nav-right {
      display: flex; align-items: center; gap: 2px;
      padding-left: 80px;
    }

    /* ── Nav link ───────────────────────────────────────── */
    .nav-link {
      display: inline-flex; align-items: center; gap: 5px;
      background: transparent; border: none;
      color: #475569;
      font-family: 'Outfit', sans-serif;
      font-size: 14px; font-weight: 500;
      cursor: pointer; padding: 8px 12px; border-radius: 10px;
      position: relative;
      transition: color 0.2s ease, background 0.2s ease;
      white-space: nowrap;
    }
    .nav-link::after {
      content: '';
      position: absolute; bottom: 3px; left: 12px; right: 12px;
      height: 1.5px;
      background: #2563EB;
      border-radius: 999px;
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
    }
    .nav-link:hover { color: #0F172A; }
    .nav-link:hover::after { transform: scaleX(1); }
    .nav-link.active { color: #2563EB; font-weight: 600; }
    .nav-link.active::after { transform: scaleX(1); }

    /* ── Dropdown ───────────────────────────────────────── */
    .nav-dropdown { position: relative; }
    .dd-menu {
      position: absolute; top: calc(100% + 8px); left: 50%;
      transform: translateX(-50%) translateY(-6px) scale(0.97);
      min-width: 180px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 6px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
    }
    .dd-menu.dd-open {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
      pointer-events: auto;
    }
    .dd-item {
      display: flex; align-items: center; gap: 9px;
      width: 100%; background: transparent; border: none;
      color: #475569;
      font-family: 'Outfit', sans-serif;
      font-size: 13.5px; font-weight: 600;
      cursor: pointer; padding: 10px 14px; border-radius: 9px;
      transition: all 0.15s ease; text-align: left;
    }
    .dd-item:hover { color: #0F172A; background: #F1F5F9; }
    .dd-item.active { color: #2563EB; background: rgba(37,99,235,0.06); }

    /* ── Logo ───────────────────────────────────────────── */
    .nav-logo {
      position: absolute;
      left: 50%; transform: translateX(-50%);
      display: inline-flex; align-items: center; gap: 9px;
      background: transparent; border: none; cursor: pointer;
      padding: 5px 10px; border-radius: 12px;
      transition: background 0.2s ease;
      z-index: 1;
    }
    .nav-logo:hover { background: rgba(37,99,235,0.05); }

    .logo-rabbit {
      width: 36px; height: 36px;
      background: rgba(37,99,235,0.08);
      border: 1px solid rgba(37,99,235,0.2);
      border-radius: 10px;
      display: inline-flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s, border-color 0.2s;
    }
    .logo-rabbit svg { stroke: #2563EB; }
    .nav-logo:hover .logo-rabbit {
      background: rgba(37,99,235,0.14);
      border-color: rgba(37,99,235,0.35);
    }
    .logo-text {
      font-family: 'Outfit', sans-serif;
      font-size: 19px; font-weight: 900;
      color: #0F172A; letter-spacing: -0.02em;
    }
    .logo-i { color: #2563EB; }

    /* ── Mobile toggle ──────────────────────────────────── */
    .mob-toggle {
      display: none;
      position: absolute; right: 14px;
      width: 38px; height: 38px;
      border-radius: 10px;
      border: 1px solid #E2E8F0;
      background: #F8FAFC;
      color: #475569; font-size: 16px;
      align-items: center; justify-content: center;
      cursor: pointer;
    }

    /* ── Mobile panel ───────────────────────────────────── */
    .mob-panel {
      max-height: 0; overflow: hidden; opacity: 0;
      background: #FFFFFF;
      border-top: 1px solid transparent;
      display: flex; flex-direction: column; gap: 2px;
      transition: max-height 0.25s ease, opacity 0.2s ease, padding 0.2s ease;
      padding: 0 20px;
    }
    .mob-panel.mob-open {
      max-height: 320px; opacity: 1; padding: 10px 20px 16px;
      border-top-color: #E2E8F0;
    }
    .mob-link {
      background: transparent; border: none;
      color: #475569;
      font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 600;
      text-align: left; padding: 11px 14px; border-radius: 10px;
      cursor: pointer; transition: all 0.15s ease;
    }
    .mob-link:hover { color: #2563EB; background: rgba(37,99,235,0.06); }

    /* ── Responsive ─────────────────────────────────────── */
    @media (max-width: 760px) {
      .nav-left, .nav-right { display: none; }
      .mob-toggle { display: inline-flex; }
      .nav-shell { padding: 0 16px; }
    }
    @media (max-width: 480px) {
      .nav-shell { min-height: 56px; padding: 0 12px; }
      .logo-rabbit { width: 32px; height: 32px; }
      .logo-text { font-size: 17px; }
    }
  `]
})
export class NavbarComponent implements OnInit {
  scrolled  = false;
  mobileOpen = false;
  ddOpen    = false;

  @ViewChild('companyDd') companyDdRef!: ElementRef<HTMLElement>;

  constructor(public nav: NavService) {}

  get isCompanyPage(): boolean {
    const p = this.nav.page();
    return p === 'about' || p === 'team';
  }

  ngOnInit(): void { this.scrolled = window.scrollY > 10; }

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 10; }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (this.ddOpen && !this.companyDdRef?.nativeElement.contains(e.target as Node)) {
      this.ddOpen = false;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 900) this.mobileOpen = false;
  }

  toggleDropdown(): void { this.ddOpen = !this.ddOpen; }

  navigate(page: string): void {
    this.ddOpen    = false;
    this.mobileOpen = false;
    this.nav.go(page as any);
  }
}
