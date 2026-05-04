import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarGrad: [string, string];
  quote: string;
  metric?: string;
  metricLabel?: string;
}

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="rev-root" id="reviews">

      <!-- Background -->
      <div class="rev-orb rev-orb-1" aria-hidden="true"></div>
      <div class="rev-orb rev-orb-2" aria-hidden="true"></div>

      <!-- Header -->
      <div class="rev-header">
        <p class="rev-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Testimonials
        </p>
        <h2 class="rev-title">
          What Operators Say After
          <span class="title-accent">Switching to NViQ</span>
        </h2>
        <p class="rev-sub">Trusted by fleet teams across India's logistics and transport sector.</p>
      </div>

      <!-- Cards grid -->
      <div class="rev-grid">
        <article
          #cardRef
          *ngFor="let item of testimonials; let i = index"
          class="rev-card"
          [class.visible]="visibleCards[i]"
          [style.transition-delay]="(i * 100) + 'ms'"
        >
          <!-- Big quote mark -->
          <div class="quote-mark" aria-hidden="true">"</div>

          <!-- Stars -->
          <div class="stars" aria-label="5 out of 5 stars">
            <svg *ngFor="let s of [1,2,3,4,5]" width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <!-- Quote -->
          <p class="rev-quote">"{{ item.quote }}"</p>

          <!-- Metric pill -->
          <div *ngIf="item.metric" class="metric-pill">
            <span class="metric-num">{{ item.metric }}</span>
            <span class="metric-label">{{ item.metricLabel }}</span>
          </div>

          <!-- Divider -->
          <div class="card-divider"></div>

          <!-- Author -->
          <div class="rev-author">
            <div class="avatar"
              [style.background]="'linear-gradient(135deg,' + item.avatarGrad[0] + ',' + item.avatarGrad[1] + ')'">
              {{ item.initials }}
            </div>
            <div class="author-info">
              <strong>{{ item.name }}</strong>
              <span>{{ item.role }} · {{ item.company }}</span>
            </div>
          </div>

          <!-- Card shimmer on hover -->
          <div class="card-shimmer" aria-hidden="true"></div>
        </article>
      </div>

      <!-- Trust bar -->
      <div class="trust-bar">
        <div class="trust-item" *ngFor="let t of trustItems">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#22c55e" stroke-width="2.5" stroke-linecap="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          {{ t }}
        </div>
      </div>

    </section>
  `,
  styles: [`
    /* ─── Root ─────────────────────────────────────────── */
    .rev-root {
      position: relative;
      padding: 100px 24px 80px;
      background: linear-gradient(180deg, #070d18 0%, #04070f 100%);
      overflow: hidden;
      isolation: isolate;
    }

    /* ─── Orbs ──────────────────────────────────────────── */
    .rev-orb {
      position: absolute; border-radius: 50%;
      filter: blur(120px); pointer-events: none; z-index: 0;
    }
    .rev-orb-1 {
      width: 560px; height: 560px;
      background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);
      top: -120px; right: -80px;
      animation: orbA 22s ease-in-out infinite;
    }
    .rev-orb-2 {
      width: 440px; height: 440px;
      background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
      bottom: -80px; left: -60px;
      animation: orbB 26s ease-in-out infinite;
    }
    @keyframes orbA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-60px,50px)} }
    @keyframes orbB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(50px,-40px)} }

    /* ─── Header ────────────────────────────────────────── */
    .rev-header {
      position: relative; z-index: 2;
      text-align: center; max-width: 680px;
      margin: 0 auto 56px;
    }
    .rev-eyebrow {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 5px 16px; border-radius: 999px;
      border: 1px solid rgba(251,191,36,0.25);
      background: rgba(251,191,36,0.07);
      color: #FBBF24;
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.14em;
      margin-bottom: 20px;
    }
    .rev-title {
      font-family: var(--font-display);
      font-size: clamp(1.9rem, 4vw, 3.1rem);
      font-weight: 900; letter-spacing: -0.03em;
      color: var(--text-primary); margin: 0 0 14px;
      line-height: 1.1;
    }
    .title-accent {
      background: linear-gradient(120deg, var(--brand-cyan), var(--brand-indigo));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .rev-sub {
      color: var(--text-secondary); font-size: 0.98rem; margin: 0; line-height: 1.6;
    }

    /* ─── Grid ──────────────────────────────────────────── */
    .rev-grid {
      position: relative; z-index: 2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1120px;
      margin: 0 auto 48px;
    }

    /* ─── Card ──────────────────────────────────────────── */
    .rev-card {
      position: relative;
      padding: 28px 24px 26px;
      border-radius: 20px;
      border: 1px solid var(--border-subtle);
      background: linear-gradient(160deg, rgba(12,18,32,0.95) 0%, rgba(8,13,26,0.98) 100%);
      display: flex; flex-direction: column; gap: 16px;
      overflow: hidden;
      opacity: 0; transform: translateY(32px);
      transition: opacity 0.65s ease, transform 0.65s ease,
                  border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .rev-card.visible {
      opacity: 1; transform: none;
    }
    .rev-card:hover {
      border-color: rgba(99,102,241,0.35);
      box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.15);
      transform: translateY(-5px);
    }
    .rev-card.visible:hover { transform: translateY(-5px); }

    /* Shimmer on hover */
    .card-shimmer {
      position: absolute; top: 0; left: -100%;
      width: 60%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
      transform: skewX(-15deg);
      transition: left 0.6s ease;
      pointer-events: none;
    }
    .rev-card:hover .card-shimmer { left: 160%; }

    /* Quote mark */
    .quote-mark {
      position: absolute;
      top: 12px; right: 20px;
      font-size: 80px; line-height: 1;
      font-family: Georgia, serif;
      color: rgba(99,102,241,0.12);
      pointer-events: none;
      user-select: none;
    }

    /* Stars */
    .stars {
      display: flex; gap: 3px;
      animation: starShine 0.5s ease both;
    }
    @keyframes starShine {
      from { opacity:0; transform:scale(0.8); }
      to   { opacity:1; transform:none; }
    }

    /* Quote */
    .rev-quote {
      color: rgba(226,232,240,0.88);
      font-size: 0.93rem; line-height: 1.72;
      margin: 0; flex: 1;
      font-style: italic;
    }

    /* Metric pill */
    .metric-pill {
      display: inline-flex; align-items: baseline; gap: 6px;
      padding: 6px 14px; border-radius: 999px;
      background: rgba(0,212,255,0.08);
      border: 1px solid rgba(0,212,255,0.18);
      width: fit-content;
    }
    .metric-num {
      font-family: var(--font-display);
      font-size: 1.3rem; font-weight: 900;
      background: linear-gradient(120deg, var(--brand-cyan), var(--brand-indigo));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .metric-label {
      font-size: 11px; font-weight: 600;
      color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em;
    }

    /* Divider */
    .card-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border-subtle), transparent);
    }

    /* Author */
    .rev-author {
      display: flex; align-items: center; gap: 12px;
    }
    .avatar {
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-display);
      font-size: 14px; font-weight: 800; color: #fff;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .author-info strong {
      display: block;
      color: var(--text-primary); font-size: 13.5px; font-weight: 700;
    }
    .author-info span {
      display: block;
      color: var(--text-muted); font-size: 11.5px; margin-top: 2px;
    }

    /* ─── Trust bar ──────────────────────────────────────  */
    .trust-bar {
      position: relative; z-index: 2;
      display: flex; align-items: center; justify-content: center;
      flex-wrap: wrap; gap: 10px 28px;
      max-width: 860px; margin: 0 auto;
    }
    .trust-item {
      display: flex; align-items: center; gap: 6px;
      font-size: 12.5px; font-weight: 600;
      color: var(--text-secondary);
    }

    /* ─── Responsive ─────────────────────────────────────  */
    @media (max-width: 1024px) { .rev-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 640px)  { .rev-root { padding: 72px 16px 56px; } .rev-grid { grid-template-columns: 1fr; } }
  `],
})
export class ReviewsSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef<HTMLElement>>;

  visibleCards: boolean[] = [true, true, true];
  private obs: IntersectionObserver | null = null;

  testimonials: Testimonial[] = [
    {
      name: 'Rohit Sharma',
      role: 'Fleet Manager',
      company: 'RoadLink Logistics',
      initials: 'RS',
      avatarGrad: ['#0EA5E9', '#6366F1'],
      quote: 'Within two weeks we reduced route delays by 34% and gained complete real-time visibility. The data NViQ gives us is better than what we paid for with three separate tools before.',
      metric: '34%',
      metricLabel: 'Delay Reduction',
    },
    {
      name: 'Meena Iyer',
      role: 'Operations Head',
      company: 'TransitOne Mobility',
      initials: 'MI',
      avatarGrad: ['#10B981', '#0EA5E9'],
      quote: 'The dashboard is clear and fast. Our dispatch team now makes decisions based on live data instead of guesswork. Onboarding took less than a day — no technical expertise needed.',
      metric: '1 Day',
      metricLabel: 'To Go Live',
    },
    {
      name: 'Arvind Patel',
      role: 'Business Owner',
      company: 'CargoVerse Transport',
      initials: 'AP',
      avatarGrad: ['#F59E0B', '#EF4444'],
      quote: 'NViQ helped us control fuel variance and improve on-time delivery by 28%. The cost impact was visible in the first month. I recommend it to every fleet owner I meet.',
      metric: '28%',
      metricLabel: 'OTD Improvement',
    },
  ];

  trustItems = [
    'Trusted by 1,000+ fleet operators',
    'Average 4.9 / 5 rating',
    'Zero-complaint onboarding',
    'Live support — 7 days a week',
  ];

  ngAfterViewInit(): void {
    setTimeout(() => { this.visibleCards = this.visibleCards.map(() => true); }, 80);

    this.obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = parseInt(e.target.getAttribute('data-idx') || '0', 10);
          if (e.isIntersecting) this.visibleCards[idx] = true;
        });
      },
      { threshold: 0.15 }
    );
    this.cardRefs.forEach((ref, i) => {
      ref.nativeElement.setAttribute('data-idx', String(i));
      this.obs!.observe(ref.nativeElement);
    });
  }

  ngOnDestroy(): void { this.obs?.disconnect(); }
}
