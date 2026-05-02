import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="ab-root">
      <div class="ab-bg" aria-hidden="true">
        <div class="ab-orb ab-orb-1"></div>
        <div class="ab-orb ab-orb-2"></div>
      </div>

      <div class="ab-container">

        <!-- Header -->
        <header class="ab-header">
          <p class="ab-eyebrow">About NViQ</p>
          <h1 class="ab-title">
            Redefining How India's<br>
            <span class="ab-accent">Fleets Operate & Invest</span>
          </h1>
        </header>

        <!-- Mission block -->
        <div class="ab-mission">
          <div class="ab-mission-text">
            <h2>Our Mission</h2>
            <p>
              NViQ is India's first unified Fleet Intelligence + Fintech platform. We believe
              fleet operators shouldn't have to choose between operational excellence and financial growth.
              Our mission is to give every Indian fleet business — from single vehicles to large enterprises
              — the data tools and investment infrastructure previously only available to the biggest players.
            </p>
            <p>
              Founded in 2024, we're building at the intersection of GPS technology,
              AI-powered analytics, and SEBI-registered investment management — all in one platform
              that works on day one without changing how you operate.
            </p>
          </div>
          <div class="ab-mission-stats">
            <div class="ab-stat" *ngFor="let s of stats">
              <strong [style.color]="s.color">{{ s.val }}</strong>
              <span>{{ s.label }}</span>
            </div>
          </div>
        </div>

        <!-- Values -->
        <div class="ab-values-header">
          <h2>What We Stand For</h2>
        </div>
        <div class="ab-values">
          <div class="ab-value" *ngFor="let v of values">
            <div class="ab-value-icon" [style.background]="v.glow" [style.border-color]="v.color + '33'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                [attr.stroke]="v.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path [attr.d]="v.icon"/>
              </svg>
            </div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .ab-root {
      min-height: 100vh;
      background: #0A0A0A;
      padding: 100px 32px 80px;
      position: relative; overflow: hidden;
    }
    .ab-bg { position: absolute; inset: 0; pointer-events: none; }
    .ab-orb {
      position: absolute; border-radius: 50%; filter: blur(120px);
    }
    .ab-orb-1 {
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%);
      top: -100px; right: -100px;
    }
    .ab-orb-2 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%);
      bottom: -80px; left: -80px;
    }

    .ab-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

    /* Header */
    .ab-header { text-align: center; max-width: 720px; margin: 0 auto 72px; }
    .ab-eyebrow {
      display: inline-block;
      color: #2563EB; font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.16em;
      border: 1px solid rgba(37,99,235,0.25);
      background: rgba(37,99,235,0.07);
      padding: 5px 16px; border-radius: 999px; margin-bottom: 16px;
    }
    .ab-title {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2.2rem, 5vw, 4rem);
      font-weight: 900; letter-spacing: -0.04em;
      color: #fff; line-height: 1.05;
    }
    .ab-accent {
      background: linear-gradient(120deg, #2563EB, #60A5FA);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Mission */
    .ab-mission {
      display: grid; grid-template-columns: 1fr 340px;
      gap: 60px; align-items: start; margin-bottom: 72px;
    }
    .ab-mission-text h2 {
      font-size: 1.8rem; font-weight: 800;
      color: #fff; margin-bottom: 20px; letter-spacing: -0.02em;
    }
    .ab-mission-text p {
      color: rgba(255,255,255,0.55);
      font-size: 1rem; line-height: 1.8; margin-bottom: 16px;
    }
    .ab-mission-stats {
      display: flex; flex-direction: column; gap: 24px;
      padding: 32px; border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(16,16,16,0.8);
      backdrop-filter: blur(10px);
    }
    .ab-stat strong {
      display: block;
      font-size: 2.4rem; font-weight: 900; letter-spacing: -0.03em;
      line-height: 1;
    }
    .ab-stat span {
      font-size: 12px; color: rgba(255,255,255,0.4);
      font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;
      margin-top: 4px; display: block;
    }

    /* Values */
    .ab-values-header { text-align: center; margin-bottom: 36px; }
    .ab-values-header h2 {
      font-size: 2rem; font-weight: 800; color: #fff; letter-spacing: -0.02em;
    }
    .ab-values {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px;
    }
    .ab-value {
      padding: 28px 22px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(14,14,14,0.8);
      display: flex; flex-direction: column; gap: 12px;
      transition: border-color 0.3s ease, transform 0.3s ease;
    }
    .ab-value:hover {
      border-color: rgba(255,255,255,0.14);
      transform: translateY(-4px);
    }
    .ab-value-icon {
      width: 48px; height: 48px; border-radius: 12px; border: 1px solid;
      display: flex; align-items: center; justify-content: center;
    }
    .ab-value h3 {
      font-size: 1rem; font-weight: 800; color: #fff; letter-spacing: -0.01em;
    }
    .ab-value p {
      font-size: 0.85rem; color: rgba(255,255,255,0.45); line-height: 1.65;
    }

    @media (max-width: 1024px) { .ab-values { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 768px)  {
      .ab-mission { grid-template-columns: 1fr; }
      .ab-values { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutSectionComponent {
  stats = [
    { val: '10,000+', label: 'Vehicles Tracked',  color: '#00D4FF' },
    { val: '₹500+Cr', label: 'Assets Managed',    color: '#22c55e' },
    { val: '99.92%',  label: 'Platform Uptime',   color: '#A78BFA' },
    { val: '2024',    label: 'Founded in India',   color: '#2563EB' },
  ];

  values = [
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2',
      color: '#00D4FF', glow: 'rgba(0,212,255,0.1)',
      title: 'Data First',
      desc: 'Every product decision is backed by measurable outcomes. No vanity features.',
    },
    {
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      color: '#22c55e', glow: 'rgba(34,197,94,0.1)',
      title: 'Trust & Compliance',
      desc: 'SEBI-registered, audit-ready, and built on transparent infrastructure.',
    },
    {
      icon: 'M13 2L3 14h9l-1 8 10-12h-9z',
      color: '#2563EB', glow: 'rgba(37,99,235,0.1)',
      title: 'Speed to Value',
      desc: 'Onboard in a day. See measurable impact within the first week.',
    },
    {
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
      color: '#F59E0B', glow: 'rgba(245,158,11,0.1)',
      title: 'Built for India',
      desc: 'Designed for the real-world conditions of Indian fleet operations and investors.',
    },
  ];
}
