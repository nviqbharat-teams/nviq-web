import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { MutualFundSliderComponent } from '../../components/mutual-fund-slider/mutual-fund-slider.component';
import { MutualFundPricingComponent } from '../../components/mutual-fund-pricing/mutual-fund-pricing.component';
import { CtaSectionComponent } from '../../components/cta/cta-section.component';
import { CtaFinalComponent } from '../../components/cta-final/cta-final.component';

@Component({
  selector: 'app-mutual-fund-page',
  standalone: true,
  imports: [
    CommonModule,
    MutualFundSliderComponent,
    MutualFundPricingComponent,
    CtaSectionComponent,
  ],
  template: `
    <!-- Back bar -->
    <div class="mfp-back-bar">
      <button class="mfp-back" (click)="goBack()" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        All Products
      </button>
    </div>

    <!-- Hero -->
    <div class="mfp-hero">
      <div class="mfp-hero-inner">
        <span class="mfp-tag">Wealth Management</span>
        <h1 class="mfp-heading">Grow Your Wealth</h1>
        <p class="mfp-sub">
          SEBI-registered mutual fund investments built for India's fleet operators.
          SIP plans starting at <strong>₹500/month</strong>.
        </p>
        <button class="mfp-cta" type="button" (click)="nav.openModal()">
          Start Investing Today
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <div class="mfp-trust">
          <span>✓ SEBI Registered</span>
          <span>✓ Zero Commission</span>
          <span>✓ SIP from ₹500</span>
        </div>
      </div>
      <div class="mfp-glow" aria-hidden="true"></div>
    </div>

    <!-- MF Slider (SIP Calculator + Fund Cards) -->
    <app-mutual-fund-slider (openModal)="nav.openModal()"></app-mutual-fund-slider>

    <!-- Pricing -->
    <app-mutual-fund-pricing></app-mutual-fund-pricing>

    <!-- CTA -->
    <app-cta-section (openModal)="nav.openModal()"></app-cta-section>
  `,
  styles: [`
    /* ── Back bar ─────────────────────────────────────── */
    .mfp-back-bar {
      position: sticky; top: 72px; z-index: 50;
      padding: 12px 32px;
      background: rgba(10,10,10,0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .mfp-back {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent; border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 600;
      padding: 7px 16px; border-radius: 10px; cursor: pointer;
      transition: all 0.2s ease;
    }
    .mfp-back:hover { color: #fff; border-color: rgba(255,255,255,0.25); transform: translateX(-3px); }

    /* ── Hero ─────────────────────────────────────────── */
    .mfp-hero {
      position: relative; min-height: 70vh;
      display: flex; align-items: center; justify-content: center;
      padding: 80px 32px; overflow: hidden;
      background: linear-gradient(135deg, #030A04 0%, #071808 50%, #030A04 100%);
    }

    .mfp-hero-inner {
      max-width: 720px; text-align: center; position: relative; z-index: 2;
      display: flex; flex-direction: column; align-items: center; gap: 0;
    }

    .mfp-tag {
      display: inline-flex; align-items: center;
      padding: 5px 16px; border-radius: 999px;
      border: 1px solid rgba(59,130,246,0.3);
      background: rgba(59,130,246,0.07);
      color: #3B82F6;
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      margin-bottom: 24px;
    }

    .mfp-heading {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(3rem, 8vw, 7rem);
      font-weight: 900; letter-spacing: -0.04em;
      line-height: 0.95; margin-bottom: 20px;
      background: linear-gradient(120deg, #3B82F6, #93C5FD);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .mfp-sub {
      color: rgba(255,255,255,0.55);
      font-size: clamp(0.95rem, 1.4vw, 1.15rem);
      line-height: 1.72; max-width: 520px; margin-bottom: 36px;
    }
    .mfp-sub strong { color: #3B82F6; font-weight: 700; }

    .mfp-cta {
      display: inline-flex; align-items: center; gap: 9px;
      height: 54px; padding: 0 32px; border-radius: 14px; border: none;
      background: linear-gradient(135deg, #3B82F6, #2563EB);
      color: #fff; font-family: 'Outfit', sans-serif;
      font-size: 15px; font-weight: 700; cursor: pointer;
      box-shadow: 0 8px 32px rgba(59,130,246,0.3);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      margin-bottom: 24px;
    }
    .mfp-cta:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(59,130,246,0.45); }

    .mfp-trust {
      display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center;
    }
    .mfp-trust span {
      font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.4);
    }

    .mfp-glow {
      position: absolute; border-radius: 50%; filter: blur(120px);
      pointer-events: none; z-index: 1;
      width: 700px; height: 700px; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%);
    }

    @media (max-width: 768px) {
      .mfp-back-bar { padding: 10px 16px; }
      .mfp-hero { min-height: 50vh; padding: 60px 16px; }
    }
  `]
})
export class MutualFundPageComponent {
  nav    = inject(NavService);
  router = inject(Router);

  goBack(): void {
    this.nav.go('products');
    this.router.navigate(['/']);
  }
}
