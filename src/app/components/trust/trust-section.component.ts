import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  num: number;
  suffix: string;
  label: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="trust-wrap" id="trust">
      <!-- Background decorations -->
      <div class="trust-grid-bg" aria-hidden="true"></div>
      <div class="trust-orb" aria-hidden="true"></div>

      <div class="container">

        <!-- Stats row -->
        <div class="stats-banner">
          <div class="stat-item" *ngFor="let stat of stats; let i = index"
            [style.animation-delay]="(i * 0.1) + 's'">
            <div class="stat-value" [style.color]="stat.color">
              {{ displayValues[i] }}{{ stat.suffix }}
            </div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-desc">{{ stat.desc }}</div>
          </div>
        </div>

        <!-- Main trust content -->
        <div class="trust-main">
          <!-- Left: header -->
          <div class="trust-left">
            <span class="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#00D4FF">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Built for Trust
            </span>
            <h2 class="trust-title">
              Used by 1,000+ Businesses<br>
              <span class="gradient-text">Across India</span>
            </h2>
            <p class="trust-sub">
              From small fleets to large enterprise operations, NViQ powers smarter decisions for businesses that can't afford downtime or uncertainty.
            </p>

            <!-- Feature checkmarks -->
            <ul class="trust-checks">
              <li *ngFor="let check of checks">
                <span class="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {{ check }}
              </li>
            </ul>

            <!-- Certification badges -->
            <div class="cert-badges">
              <div class="cert-badge" *ngFor="let cert of certs">
                <span class="cert-icon" [innerHTML]="cert.icon"></span>
                <div>
                  <div class="cert-title">{{ cert.title }}</div>
                  <div class="cert-sub">{{ cert.sub }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: client logos + testimonial snippet -->
          <div class="trust-right">
            <!-- Client logos -->
            <div class="logos-section">
              <p class="logos-label">Trusted by fleet operators at</p>
              <div class="logos-grid">
                <div class="logo-card" *ngFor="let logo of clientLogos">
                  <span class="logo-company">{{ logo }}</span>
                </div>
              </div>
            </div>

            <!-- Quick metrics grid -->
            <div class="quick-metrics">
              <div class="qm-card" *ngFor="let qm of quickMetrics">
                <div class="qm-icon" [style.color]="qm.color">
                  <span [innerHTML]="qm.icon"></span>
                </div>
                <div class="qm-value" [style.color]="qm.color">{{ qm.value }}</div>
                <div class="qm-label">{{ qm.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trust-wrap {
      background: linear-gradient(180deg, #07101E 0%, #04070F 100%);
      padding: 100px 0;
      position: relative;
      overflow: hidden;
    }

    .trust-grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px);
      background-size: 56px 56px;
      pointer-events: none;
    }

    .trust-orb {
      position: absolute;
      top: 50%; right: -100px;
      transform: translateY(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%);
      pointer-events: none;
    }

    /* Stats banner */
    .stats-banner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 80px;
    }

    .stat-item {
      padding: 32px 28px;
      background: rgba(8,13,26,0.8);
      text-align: center;
      position: relative;
      transition: background 0.3s ease;
      animation: fadeUp 0.7s ease both;
    }

    .stat-item::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: currentColor;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .stat-item:hover {
      background: rgba(12,18,32,0.9);
    }

    .stat-item:hover::before {
      opacity: 0.4;
    }

    .stat-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      line-height: 1;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 14px;
      font-weight: 700;
      color: #F0F6FF;
      margin-bottom: 6px;
    }

    .stat-desc {
      font-size: 12px;
      color: #475569;
      line-height: 1.5;
    }

    /* Main content */
    .trust-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: start;
    }

    /* Left */
    .section-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      background: rgba(0,212,255,0.07);
      border: 1px solid rgba(0,212,255,0.15);
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #00D4FF;
      margin-bottom: 20px;
    }

    .trust-title {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(1.8rem, 3.5vw, 2.6rem);
      font-weight: 800;
      color: #F0F6FF;
      line-height: 1.2;
      letter-spacing: -0.025em;
      margin-bottom: 16px;
    }

    .gradient-text {
      background: linear-gradient(135deg, #00D4FF, #6366F1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .trust-sub {
      font-size: 15px;
      color: #475569;
      line-height: 1.75;
      margin-bottom: 28px;
    }

    /* Checks */
    .trust-checks {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 32px;
    }

    .trust-checks li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      color: #94A3B8;
    }

    .check-icon {
      width: 24px; height: 24px;
      background: rgba(16,185,129,0.1);
      border: 1px solid rgba(16,185,129,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* Cert badges */
    .cert-badges {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    .cert-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      background: rgba(12,18,32,0.8);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      transition: all 0.2s ease;
    }

    .cert-badge:hover {
      border-color: rgba(0,212,255,0.15);
      background: rgba(0,212,255,0.03);
    }

    .cert-icon { font-size: 20px; }

    .cert-title {
      font-size: 12px;
      font-weight: 700;
      color: #F0F6FF;
      margin-bottom: 2px;
    }

    .cert-sub {
      font-size: 10px;
      color: #475569;
    }

    /* Right */
    .logos-section {
      margin-bottom: 24px;
    }

    .logos-label {
      font-size: 11px;
      color: #334155;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .logos-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .logo-card {
      padding: 16px 12px;
      background: rgba(12,18,32,0.8);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      text-align: center;
      transition: all 0.2s ease;
    }

    .logo-card:hover {
      border-color: rgba(0,212,255,0.12);
      background: rgba(0,212,255,0.03);
    }

    .logo-company {
      font-size: 12px;
      font-weight: 700;
      color: #475569;
      letter-spacing: -0.01em;
    }

    /* Quick metrics */
    .quick-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .qm-card {
      padding: 18px 16px;
      background: rgba(12,18,32,0.8);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      transition: all 0.2s ease;
    }

    .qm-card:hover {
      border-color: rgba(0,212,255,0.12);
      transform: translateY(-2px);
    }

    .qm-icon {
      font-size: 20px;
      margin-bottom: 10px;
      line-height: 1;
    }

    .qm-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 22px;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 6px;
    }

    .qm-label {
      font-size: 11px;
      color: #475569;
      font-weight: 500;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1024px) {
      .stats-banner { grid-template-columns: repeat(2, 1fr); }
      .trust-main { grid-template-columns: 1fr; gap: 48px; }
    }

    @media (max-width: 540px) {
      .stats-banner { grid-template-columns: 1fr 1fr; }
      .logos-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class TrustSectionComponent implements OnInit, OnDestroy {
  stats: Stat[] = [
    { value: '1000+', num: 1000, suffix: '+', label: 'Active Users', desc: 'Fleet owners and operators', color: '#00D4FF' },
    { value: '500+', num: 500, suffix: '+', label: 'Vehicles Tracked', desc: 'Across India daily', color: '#6366F1' },
    { value: '30%', num: 30, suffix: '%', label: 'Cost Reduction', desc: 'Average across fleets', color: '#10B981' },
    { value: '99.9%', num: 99.9, suffix: '%', label: 'Platform Uptime', desc: 'SLA-backed reliability', color: '#F59E0B' }
  ];

  displayValues: string[] = ['0', '0', '0', '0'];

  checks = [
    'No IT setup required — deploy in under 15 minutes',
    'Works on mobile, tablet, and desktop browsers',
    'Real-time WhatsApp & email alerts included',
    'Dedicated support team during onboarding',
    'SOC2-compliant data handling and encryption'
  ];

  certs = [
    {
      icon: '🔒',
      title: 'SOC2 Compliant',
      sub: 'Security certified'
    },
    {
      icon: '📡',
      title: '99.9% Uptime',
      sub: 'SLA guaranteed'
    },
    {
      icon: '🇮🇳',
      title: 'Made in India',
      sub: 'For Indian fleets'
    }
  ];

  clientLogos = [
    'RoadLink', 'TransitOne', 'CargoVerse',
    'FleetPro', 'SwiftCargo', 'RouteX',
    'VehicleIQ', 'DispatchAI', 'TruckStar'
  ];

  quickMetrics = [
    { value: '184', label: 'Trips completed today', color: '#00D4FF', icon: '🚛' },
    { value: '96%', label: 'On-time delivery rate', color: '#10B981', icon: '✅' },
    { value: '₹1.2L', label: 'Fuel saved this month', color: '#F59E0B', icon: '⛽' },
    { value: '3', label: 'Active alerts right now', color: '#F43F5E', icon: '🔔' }
  ];

  private interval: any;

  ngOnInit() {
    this.animateCounters();
  }

  animateCounters() {
    const duration = 1800;
    const steps = 60;
    const stepMs = duration / steps;

    this.stats.forEach((stat, i) => {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = stat.num * eased;
        this.displayValues[i] = Number.isInteger(stat.num)
          ? Math.floor(current).toLocaleString()
          : current.toFixed(1);
        if (step >= steps) {
          this.displayValues[i] = stat.num === 99.9 ? '99.9' : Math.floor(stat.num).toLocaleString();
          clearInterval(interval);
        }
      }, stepMs);
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
