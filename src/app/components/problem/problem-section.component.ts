import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface StepItem {
  num: string;
  title: string;
  detail: string;
  iconPath: string;
  color: string;
  glow: string;
}

@Component({
  selector: 'app-problem-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hiw-root">
      <div class="container">

        <!-- Header -->
        <header class="hiw-header">
          <p class="hiw-eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            How It Works
          </p>
          <h2 class="hiw-title">
            Launch in Minutes,<br>
            <span class="hiw-accent">Operate with Intelligence</span> Every Day
          </h2>
        </header>

        <!-- Steps -->
        <div class="steps-wrap">

          <!-- Connecting line (desktop) -->
          <div class="connector-line" aria-hidden="true">
            <div class="connector-fill" [class.animate]="anyVisible"></div>
          </div>

          <article
            #stepRef
            *ngFor="let step of steps; let i = index"
            class="step-card"
            [class.visible]="visibleSteps[i]"
            [style.transition-delay]="(i * 140) + 'ms'"
          >
            <!-- Step number circle -->
            <div class="step-num"
              [style.background]="'linear-gradient(135deg,' + step.color + ',transparent)'"
              [style.border-color]="step.color + '55'">
              {{ step.num }}
            </div>

            <!-- Icon -->
            <div class="step-icon"
              [style.background]="step.glow"
              [style.border-color]="step.color + '44'">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                [attr.stroke]="step.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path [attr.d]="step.iconPath"/>
              </svg>
            </div>

            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-detail">{{ step.detail }}</p>

            <!-- Active dot -->
            <div class="step-dot" [style.background]="step.color" aria-hidden="true"></div>
          </article>

        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ─── Root ─────────────────────────────────────────── */
    .hiw-root {
      background: #080d18;
      padding: 96px 0 108px;
      position: relative;
      overflow: hidden;
    }
    .hiw-root::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    /* ─── Header ────────────────────────────────────────── */
    .hiw-header {
      text-align: center; max-width: 720px;
      margin: 0 auto 64px;
    }
    .hiw-eyebrow {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 5px 16px; border-radius: 999px;
      border: 1px solid rgba(0,212,255,0.2);
      background: rgba(0,212,255,0.07);
      color: var(--brand-cyan);
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.14em;
      margin-bottom: 22px;
    }
    .hiw-title {
      font-family: var(--font-display);
      font-size: clamp(1.9rem, 4vw, 3rem);
      font-weight: 900; letter-spacing: -0.03em;
      color: var(--text-primary); margin: 0;
      line-height: 1.12;
    }
    .hiw-accent {
      background: linear-gradient(120deg, var(--brand-cyan), var(--brand-indigo));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }

    /* ─── Steps wrap ─────────────────────────────────────  */
    .steps-wrap {
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    /* Connector line (sits behind cards) */
    .connector-line {
      position: absolute;
      top: 44px; left: 12.5%; right: 12.5%;
      height: 2px;
      background: var(--border-subtle);
      z-index: 0;
      border-radius: 999px;
      overflow: hidden;
    }
    .connector-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--brand-cyan), var(--brand-indigo));
      border-radius: 999px;
      width: 0;
      transition: width 1.8s cubic-bezier(0.22,1,0.36,1) 0.3s;
    }
    .connector-fill.animate { width: 100%; }

    /* ─── Step card ──────────────────────────────────────  */
    .step-card {
      position: relative; z-index: 1;
      padding: 28px 22px 26px;
      border-radius: 20px;
      border: 1px solid rgba(148,163,184,0.14);
      background: linear-gradient(160deg, rgba(12,18,32,0.95) 0%, rgba(8,13,26,0.98) 100%);
      display: flex; flex-direction: column; align-items: center;
      text-align: center; gap: 14px;
      opacity: 0; transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease,
                  border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .step-card.visible {
      opacity: 1; transform: none;
    }
    .step-card:hover {
      border-color: rgba(0,212,255,0.2);
      box-shadow: 0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,212,255,0.08);
      transform: translateY(-5px);
    }
    .step-card.visible:hover { transform: translateY(-5px); }

    /* Step number */
    .step-num {
      width: 56px; height: 56px;
      border-radius: 50%;
      border: 1px solid;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-mono);
      font-size: 13px; font-weight: 800; color: #fff;
      letter-spacing: 0.05em;
      position: relative;
      transition: transform 0.3s ease;
    }
    .step-card:hover .step-num { transform: scale(1.1) rotate(-5deg); }

    /* Step dot (bottom accent) */
    .step-dot {
      width: 6px; height: 6px; border-radius: 50%;
      margin-top: auto; opacity: 0.6;
    }

    /* Icon */
    .step-icon {
      width: 50px; height: 50px; border-radius: 14px;
      border: 1px solid;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.3s ease;
    }
    .step-card:hover .step-icon { transform: rotate(-6deg) scale(1.08); }

    /* Title */
    .step-title {
      font-family: var(--font-display);
      font-size: 1.1rem; font-weight: 800;
      color: var(--text-primary); margin: 0;
      letter-spacing: -0.01em; line-height: 1.25;
    }

    /* Detail */
    .step-detail {
      color: var(--text-secondary);
      font-size: 0.87rem; line-height: 1.65;
      margin: 0;
    }

    /* ─── Responsive ─────────────────────────────────────  */
    @media (max-width: 1024px) {
      .steps-wrap { grid-template-columns: repeat(2, 1fr); }
      .connector-line { display: none; }
    }
    @media (max-width: 640px) {
      .hiw-root { padding: 72px 0 80px; }
      .steps-wrap { grid-template-columns: 1fr; }
    }
  `],
})
export class ProblemSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('stepRef') stepRefs!: QueryList<ElementRef<HTMLElement>>;

  visibleSteps: boolean[] = [true, true, true, true];
  anyVisible = true;
  private obs: IntersectionObserver | null = null;

  steps: StepItem[] = [
    {
      num: '01',
      title: 'Connect Your Fleet',
      detail: 'Add vehicles and drivers in one setup flow without touching your existing operations stack.',
      iconPath: 'M8 8h8v8H8zM12 2v4M12 18v4M2 12h4M18 12h4',
      color: '#38bdf8',
      glow: 'rgba(56,189,248,0.1)',
    },
    {
      num: '02',
      title: 'Track in Real Time',
      detail: 'Live GPS location, route visibility, and dispatch status from every active vehicle on one map.',
      iconPath: 'M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10zM12 11m-2.4 0a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 1 0-4.8 0',
      color: '#34d399',
      glow: 'rgba(52,211,153,0.1)',
    },
    {
      num: '03',
      title: 'Analyze Signals',
      detail: 'Review trip efficiency, idle behavior, and cost variance with clean analytics and performance trends.',
      iconPath: 'M4 19h16M7 15V9M12 15V6M17 15v-3',
      color: '#a78bfa',
      glow: 'rgba(167,139,250,0.1)',
    },
    {
      num: '04',
      title: 'Act with Confidence',
      detail: 'Enforce route rules, trigger alerts, and dispatch faster — every action backed by measurable data.',
      iconPath: 'M12 2l8 4v6c0 5-3.3 8.6-8 10-4.7-1.4-8-5-8-10V6l8-4zM9.2 12.4l2 2 3.6-4',
      color: '#fb923c',
      glow: 'rgba(251,146,60,0.1)',
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => { this.visibleSteps = this.visibleSteps.map(() => true); this.anyVisible = true; }, 80);

    this.obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = parseInt(e.target.getAttribute('data-idx') || '0', 10);
          if (e.isIntersecting) {
            this.visibleSteps[idx] = true;
            this.anyVisible = true;
          }
        });
      },
      { threshold: 0.2 }
    );
    this.stepRefs.forEach((ref, i) => {
      ref.nativeElement.setAttribute('data-idx', String(i));
      this.obs!.observe(ref.nativeElement);
    });
  }

  ngOnDestroy(): void { this.obs?.disconnect(); }
}
