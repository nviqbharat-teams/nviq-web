import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavService, ProductKey } from '../../services/nav.service';

interface ProductItem {
  id: ProductKey;
  heading: string;
  sub: string;
  tag: string;
  accent: string;
  bgImg?: string;
  isComingSoon?: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pl-root">
      <div class="pl-header">
        <span class="pl-eyebrow">Our Solutions</span>
        <h1 class="pl-title">Premium Products for Modern Needs</h1>
        <p class="pl-subtitle">Explore our range of innovative solutions designed to drive efficiency and growth.</p>
      </div>

      <div class="pl-grid">
        <div *ngFor="let prod of products" class="pl-card" [style.--accent]="prod.accent" (click)="onProductClick(prod)">
          <div class="pl-card-bg" [style.backgroundImage]="prod.bgImg ? 'url(' + prod.bgImg + ')' : 'none'"></div>
          <div class="pl-card-overlay"></div>
          
          <div class="pl-card-content">
            <div class="pl-card-top">
              <span class="pl-card-tag">{{ prod.tag }}</span>
              <span *ngIf="prod.isComingSoon" class="pl-coming-badge">Coming Soon</span>
            </div>
            
            <h2 class="pl-card-title">{{ prod.heading }}</h2>
            <p class="pl-card-desc">{{ prod.sub }}</p>
            
            <div class="pl-card-footer">
              <span class="pl-card-link">
                {{ prod.isComingSoon ? 'Learn More' : 'Explore Solution' }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pl-root {
      background: #040810;
      color: #fff;
      min-height: 100vh;
      padding: 120px 32px 80px;
      font-family: 'Outfit', sans-serif;
    }
    .pl-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 60px;
    }
    .pl-eyebrow {
      color: #3B82F6;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      display: block;
      margin-bottom: 12px;
    }
    .pl-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1.1;
      margin-bottom: 16px;
      background: linear-gradient(120deg, #fff, #94A3B8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .pl-subtitle {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
      line-height: 1.6;
    }
    .pl-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .pl-card {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      height: 400px;
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: #0A1120;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .pl-card:hover {
      transform: translateY(-8px);
      border-color: var(--accent);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px color-mix(in srgb, var(--accent) 15%, transparent);
    }
    .pl-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.6s ease;
    }
    .pl-card:hover .pl-card-bg {
      transform: scale(1.05);
    }
    .pl-card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(10, 17, 32, 0.4) 0%, #0A1120 80%);
    }
    .pl-card-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 32px;
      z-index: 2;
    }
    .pl-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: auto;
    }
    .pl-card-tag {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent);
    }
    .pl-coming-badge {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(245, 158, 11, 0.1);
      color: #F59E0B;
      border: 1px solid rgba(245, 158, 11, 0.2);
    }
    .pl-card-title {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
      color: #fff;
    }
    .pl-card-desc {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 24px;
    }
    .pl-card-footer {
      display: flex;
      align-items: center;
    }
    .pl-card-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      transition: gap 0.2s ease;
    }
    .pl-card:hover .pl-card-link {
      gap: 12px;
      color: var(--accent);
    }
  `]
})
export class ProductListComponent {
  products: ProductItem[] = [
    {
      id: 'gps',
      heading: 'GPS Tracking',
      sub: 'Real-time GPS intelligence for every vehicle in your fleet — live location, smart alerts, and route analytics.',
      tag: 'Fleet Intelligence',
      accent: '#3B82F6',
      bgImg: '/images/gps-hero.jpg.jpg'
    },
    {
      id: 'mf',
      heading: 'Mutual Funds',
      sub: 'SIP-based mutual fund investments for every Indian. Start with just ₹1,000/month and watch your money grow.',
      tag: 'Wealth Management',
      accent: '#3B82F6',
      bgImg: '/images/mf slide-1.jpg.jpg'
    },
    {
      id: 'fastag',
      heading: 'FASTag System',
      sub: 'Seamless toll payments for your entire fleet — no manual recharges, no queue delays.',
      tag: 'Automated Payments',
      accent: '#A78BFA',
      bgImg: '/images/fastag-hero.jpg.jpeg',
      isComingSoon: true
    },
    {
      id: 'drone',
      heading: 'Agriculture Drone',
      sub: 'Smart farming solutions from the sky — crop monitoring, precision spraying, and yield intelligence.',
      tag: 'AgriTech',
      accent: '#F59E0B',
      bgImg: '/images/drone-hero.jpg.jpeg',
      isComingSoon: true
    }
  ];

  constructor(private router: Router, private nav: NavService) {}

  onProductClick(prod: ProductItem) {
    if (prod.isComingSoon) {
      this.nav.openModalFor(prod.id);
      return;
    }
    
    if (prod.id === 'gps') {
      this.router.navigate(['/product/gps-fleet-tracking']);
    } else if (prod.id === 'mf') {
      this.router.navigate(['/mutual-fund']);
    }
  }
}
