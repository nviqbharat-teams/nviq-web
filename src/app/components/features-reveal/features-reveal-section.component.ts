import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';

interface Feature {
  svgPath: string;
  viewBox: string;
  color: string;
  glowColor: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-reveal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="fr-section" id="features-reveal">

      <!-- Section header -->
      <div class="fr-header" #sectionHeader [class.visible]="headerVisible">
        <div class="fr-label">Platform Capabilities</div>
        <h2 class="fr-title">
          Everything your fleet needs,<br>
          <span class="fr-title-accent">in one smart platform</span>
        </h2>
        <p class="fr-desc">
          From live GPS to AI-driven analytics — built for Indian roads and real business outcomes.
        </p>
      </div>

      <!-- Feature cards grid -->
      <div class="fr-grid">
        <div
          *ngFor="let feat of features; let i = index"
          class="fr-card"
          [class.visible]="visibleCards[i]"
          [style.--delay]="i * 90 + 'ms'"
          #cardRef
        >
          <!-- Icon bubble -->
          <div class="fr-icon-wrap" [style.--glow]="feat.glowColor">
            <div class="fr-icon-ring" aria-hidden="true"></div>
            <div class="fr-icon-bg" [style.background]="feat.color">
              <svg [attr.viewBox]="feat.viewBox" width="26" height="26"
                fill="none" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path [attr.d]="feat.svgPath"/>
              </svg>
            </div>
          </div>

          <!-- Text -->
          <h3 class="fr-card-title">{{ feat.title }}</h3>
          <p class="fr-card-desc">{{ feat.description }}</p>

          <!-- Arrow -->
          <div class="fr-card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <!-- Hover glow overlay -->
          <div class="fr-card-glow" aria-hidden="true"></div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    /* ── Section ────────────────────────────────────────────── */
    .fr-section {
      position: relative;
      padding: 100px 20px 120px;
      background: var(--bg-surface);
      overflow: hidden;
    }

    /* Background noise texture */
    .fr-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(var(--border-subtle) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
      background-size: 48px 48px;
      opacity: 0.5;
      pointer-events: none;
    }

    /* Top fade from hero */
    .fr-section::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 120px;
      background: linear-gradient(to bottom, var(--bg-base), transparent);
      pointer-events: none;
      z-index: 1;
    }

    /* ── Section header ─────────────────────────────────────── */
    .fr-header {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 640px;
      margin: 0 auto 72px;
      opacity: 0;
      transform: translateY(32px);
      transition:
        opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .fr-header.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .fr-label {
      display: inline-block;
      padding: 5px 16px;
      border-radius: 999px;
      border: 1px solid rgba(0,212,255,0.22);
      background: rgba(0,212,255,0.07);
      color: var(--brand-cyan);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 20px;
    }

    .fr-title {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
      font-weight: 800;
      line-height: 1.15;
      color: var(--text-primary);
      letter-spacing: -0.02em;
      margin: 0 0 16px;
    }

    .fr-title-accent {
      background: linear-gradient(120deg, var(--brand-cyan) 0%, var(--brand-indigo) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .fr-desc {
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 1.7;
      margin: 0;
    }

    /* ── Cards grid ─────────────────────────────────────────── */
    .fr-grid {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ── Individual card ────────────────────────────────────── */
    .fr-card {
      position: relative;
      padding: 32px 28px;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-subtle);
      background: var(--bg-card);
      overflow: hidden;
      cursor: default;

      /* entrance animation */
      opacity: 0;
      transform: translateY(40px);
      transition:
        opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
        border-color 0.3s ease,
        background 0.3s ease;
    }

    .fr-card.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .fr-card:hover {
      border-color: rgba(0,212,255,0.2);
      background: var(--bg-card-hover);
    }

    /* Hover glow fill */
    .fr-card-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 0%,
        rgba(0,212,255,0.05) 0%,
        transparent 65%
      );
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
    }

    .fr-card:hover .fr-card-glow {
      opacity: 1;
    }

    /* ── Icon ───────────────────────────────────────────────── */
    .fr-icon-wrap {
      position: relative;
      display: inline-flex;
      margin-bottom: 22px;
    }

    .fr-icon-ring {
      position: absolute;
      inset: -5px;
      border-radius: 50%;
      background: var(--glow, rgba(0,212,255,0.12));
      filter: blur(10px);
      opacity: 0;
      transition: opacity 0.35s ease;
    }

    .fr-card:hover .fr-icon-ring {
      opacity: 1;
    }

    .fr-icon-bg {
      position: relative;
      width: 54px;
      height: 54px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }

    .fr-card:hover .fr-icon-bg {
      transform: scale(1.06) rotate(-3deg);
    }

    /* ── Card text ──────────────────────────────────────────── */
    .fr-card-title {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 10px;
      letter-spacing: -0.01em;
    }

    .fr-card-desc {
      color: var(--text-secondary);
      font-size: 0.88rem;
      line-height: 1.65;
      margin: 0;
    }

    /* ── Arrow ──────────────────────────────────────────────── */
    .fr-card-arrow {
      margin-top: 20px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      transition: color 0.25s ease, transform 0.25s ease;
    }

    .fr-card:hover .fr-card-arrow {
      color: var(--brand-cyan);
      transform: translateX(4px);
    }

    /* ── Responsive ─────────────────────────────────────────── */
    @media (max-width: 1024px) {
      .fr-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .fr-section {
        padding: 80px 16px 80px;
      }

      .fr-grid {
        grid-template-columns: 1fr;
      }

      .fr-header {
        margin-bottom: 48px;
      }

      .fr-card {
        padding: 24px 20px;
      }
    }
  `],
})
export class FeaturesRevealSectionComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('sectionHeader') headerRef!: QueryList<ElementRef<HTMLElement>>;

  visibleCards: boolean[] = [];
  headerVisible = true;

  features: Feature[] = [
    {
      title: 'Live GPS Tracking',
      description: 'Real-time location for every vehicle on your fleet — updated every 5 seconds with route deviation alerts.',
      svgPath: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
      viewBox: '0 0 24 24',
      color: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
      glowColor: 'rgba(14,165,233,0.2)',
    },
    {
      title: 'Fuel Monitoring',
      description: 'Detect fuel theft, track consumption patterns, and cut costs with tank-level sensors and anomaly detection.',
      svgPath: 'M3 22V8l9-6 9 6v14H3zM9 22V12h6v10M12 2v4m-4 4h8',
      viewBox: '0 0 24 24',
      color: 'linear-gradient(135deg, #F59E0B, #EF4444)',
      glowColor: 'rgba(245,158,11,0.2)',
    },
    {
      title: 'Driver Behavior',
      description: 'Score every driver on harsh braking, over-speeding, and idle time. Reward safe drivers and reduce accident risk.',
      svgPath: 'M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 0v10l5 3',
      viewBox: '0 0 24 24',
      color: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
      glowColor: 'rgba(139,92,246,0.2)',
    },
    {
      title: 'Reports & Analytics',
      description: 'Exportable dashboards covering mileage, turnaround time, trip efficiency, and fleet-wide KPIs — automatically.',
      svgPath: 'M3 3v18h18M7 16l4-4 4 4 4-6',
      viewBox: '0 0 24 24',
      color: 'linear-gradient(135deg, #10B981, #059669)',
      glowColor: 'rgba(16,185,129,0.2)',
    },
    {
      title: 'Geofence Alerts',
      description: 'Define route boundaries and zones. Get instant alerts whenever a vehicle enters or exits a restricted area.',
      svgPath: 'M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0C20 17.5 12 22 12 22zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
      viewBox: '0 0 24 24',
      color: 'linear-gradient(135deg, #F43F5E, #EC4899)',
      glowColor: 'rgba(244,63,94,0.2)',
    },
    {
      title: 'Maintenance Alerts',
      description: 'Proactive service reminders based on mileage and engine hours. Prevent breakdowns before they happen.',
      svgPath: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
      viewBox: '0 0 24 24',
      color: 'linear-gradient(135deg, #00D4FF, #6366F1)',
      glowColor: 'rgba(0,212,255,0.2)',
    },
  ];

  private observers: IntersectionObserver[] = [];

  constructor() {
    this.visibleCards = new Array(this.features.length).fill(true);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerVisible = true;
      this.visibleCards = this.visibleCards.map(() => true);
    }, 80);

    // Observe section header
    this.headerRef.forEach((ref) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.headerVisible = true;
              obs.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(ref.nativeElement);
      this.observers.push(obs);
    });

    // Observe each card individually for staggered reveal
    this.cardRefs.forEach((ref, index) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Small extra stagger on top of CSS --delay for robustness
              setTimeout(() => {
                this.visibleCards[index] = true;
              }, index * 60);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      obs.observe(ref.nativeElement);
      this.observers.push(obs);
    });
  }

  ngOnDestroy(): void {
    this.observers.forEach((obs) => obs.disconnect());
  }
}
