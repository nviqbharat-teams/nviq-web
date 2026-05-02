import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  num: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hiw-wrap" id="how-it-works">
      <div class="hiw-glow" aria-hidden="true"></div>
      <div class="container">

        <!-- Header -->
        <div class="section-header">
          <span class="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            How It Works
          </span>
          <h2 class="section-title">
            From Setup to Full Control<br>
            <span class="gradient-text">in 4 Simple Steps</span>
          </h2>
          <p class="section-sub">
            No complex configuration, no IT teams required. NViQ onboards in minutes and gives you instant fleet visibility.
          </p>
        </div>

        <!-- Steps -->
        <div class="steps-container">
          <!-- Connecting line -->
          <div class="steps-connector" aria-hidden="true">
            <div class="connector-line"></div>
          </div>

          <div class="steps-grid">
            <div class="step-card" *ngFor="let step of steps; let i = index"
              [style.animation-delay]="(i * 0.12) + 's'">

              <!-- Step number badge -->
              <div class="step-num-badge" [style.border-color]="'rgba(' + hexToRgb(step.color) + ',0.3)'"
                [style.color]="step.color">
                {{ step.num }}
              </div>

              <!-- Icon circle -->
              <div class="step-icon-wrap" [style.background]="'rgba(' + hexToRgb(step.color) + ',0.08)'"
                [style.border-color]="'rgba(' + hexToRgb(step.color) + ',0.2)'">
                <div class="step-icon" [innerHTML]="step.icon"></div>
              </div>

              <!-- Content -->
              <h3 class="step-title" [style.color]="step.color">{{ step.title }}</h3>
              <p class="step-desc">{{ step.desc }}</p>

              <!-- Bottom glow -->
              <div class="step-bottom-glow"
                [style.background]="'radial-gradient(ellipse at center, rgba(' + hexToRgb(step.color) + ',0.1), transparent 70%)'">
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom action -->
        <div class="hiw-bottom">
          <div class="hiw-time">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <span>Average onboarding time: <strong style="color:#10B981">under 15 minutes</strong></span>
          </div>
          <a href="#" class="hiw-cta">Start Onboarding →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hiw-wrap {
      background: linear-gradient(180deg, #04070F 0%, #07101E 100%);
      padding: 100px 0;
      position: relative;
      overflow: hidden;
    }

    .hiw-glow {
      position: absolute;
      bottom: 0; left: 50%;
      transform: translateX(-50%);
      width: 900px; height: 400px;
      background: radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 65%);
      pointer-events: none;
    }

    .section-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 64px;
    }

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

    .section-title {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
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

    .section-sub {
      font-size: 16px;
      color: #475569;
      line-height: 1.7;
      max-width: 520px;
      margin: 0 auto;
    }

    /* Steps container */
    .steps-container {
      position: relative;
      margin-bottom: 56px;
    }

    .steps-connector {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 120px);
      height: 1px;
      display: flex;
      align-items: center;
      z-index: 0;
    }

    .connector-line {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg,
        transparent,
        rgba(0,212,255,0.3) 20%,
        rgba(99,102,241,0.3) 50%,
        rgba(16,185,129,0.3) 80%,
        transparent
      );
    }

    .steps-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      position: relative;
      z-index: 1;
    }

    /* Step Card */
    .step-card {
      position: relative;
      background: linear-gradient(145deg, rgba(12,18,32,0.9), rgba(7,10,18,0.95));
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px;
      padding: 24px 22px;
      text-align: center;
      overflow: hidden;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      animation: fadeUp 0.7s ease both;
    }

    .step-card:hover {
      transform: translateY(-6px);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 24px 64px rgba(0,0,0,0.5);
    }

    .step-card:hover .step-bottom-glow {
      opacity: 1;
    }

    /* Step number */
    .step-num-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      border: 1.5px solid;
      border-radius: 50%;
      font-size: 11px;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
      margin: 0 auto 16px;
    }

    /* Icon */
    .step-icon-wrap {
      width: 64px; height: 64px;
      border-radius: 18px;
      border: 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      transition: transform 0.3s ease;
    }

    .step-card:hover .step-icon-wrap {
      transform: scale(1.1);
    }

    .step-icon {
      line-height: 0;
    }

    .step-icon svg {
      width: 28px; height: 28px;
    }

    .step-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .step-desc {
      font-size: 13.5px;
      color: #475569;
      line-height: 1.65;
    }

    .step-bottom-glow {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 120px;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    /* Bottom action */
    .hiw-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
    }

    .hiw-time {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      color: #475569;
    }

    .hiw-cta {
      padding: 12px 28px;
      background: linear-gradient(135deg, #00D4FF, #0EA5E9);
      color: #04070F;
      font-weight: 700;
      font-size: 14px;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .hiw-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0,212,255,0.35);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 900px) {
      .steps-grid { grid-template-columns: repeat(2, 1fr); }
      .steps-connector { display: none; }
    }

    @media (max-width: 540px) {
      .steps-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      num: '01',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <path d="M9 7h6M9 11h6M9 15h4"/>
        <circle cx="12" cy="20" r="1" fill="#00D4FF" stroke="none"/>
      </svg>`,
      title: 'Register & Onboard',
      desc: 'Create your account, add your fleet details, and invite your team members. No setup complexity.',
      color: '#00D4FF'
    },
    {
      num: '02',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>`,
      title: 'Install GPS Devices',
      desc: 'Our team ships plug-and-play GPS trackers. Fit in minutes, no wiring or technical expertise needed.',
      color: '#6366F1'
    },
    {
      num: '03',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
        <circle cx="12" cy="12" r="1.5" fill="#10B981" stroke="none"/>
      </svg>`,
      title: 'Go Live in Minutes',
      desc: 'Vehicles start appearing on your live map instantly. Track routes, speeds, and driver behavior in real time.',
      color: '#10B981'
    },
    {
      num: '04',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19h16M6 15l3-4 3 2 4-6 2 3"/>
        <circle cx="6" cy="15" r="1" fill="#F59E0B" stroke="none"/>
        <circle cx="16" cy="7" r="1" fill="#F59E0B" stroke="none"/>
      </svg>`,
      title: 'Optimize & Scale',
      desc: 'Use AI-powered insights to cut costs, reduce idle time, and make smarter decisions every day.',
      color: '#F59E0B'
    }
  ];

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
      : '0,212,255';
  }
}
