import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TrustStat = { value: string; label: string; };

@Component({
  selector: 'app-before-after-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="trust" class="trust-wrap">
      <div class="max-w-[1220px] mx-auto px-6">
        <div class="trust-shell">
          <header class="text-center max-w-[760px] mx-auto">
            <p class="eyebrow">Why Teams Trust NViQ</p>
            <h2>Proven Results for Fleet Operators and Growing Businesses</h2>
            <p>
              Built for operational reliability, measurable cost impact, and long-term platform confidence.
            </p>
          </header>

          <div class="stats-grid">
            <article *ngFor="let stat of stats" class="stat-card">
              <h3>{{ stat.value }}</h3>
              <span>{{ stat.label }}</span>
            </article>
          </div>

          <div class="logo-block">
            <p class="logo-title">Trusted by teams across logistics, distribution, and enterprise transport</p>
            <div class="logo-grid">
              <span *ngFor="let logo of logos">{{ logo }}</span>
            </div>
          </div>

          <div class="cred-grid">
            <article>
              <h4>Secure Data Infrastructure</h4>
              <p>Encrypted telemetry pipelines and role-based dashboard access for controlled operations.</p>
            </article>
            <article>
              <h4>Dedicated Onboarding</h4>
              <p>Implementation and success support to accelerate go-live and drive early ROI.</p>
            </article>
            <article>
              <h4>Always-On Visibility</h4>
              <p>Continuous performance tracking so dispatch and leadership teams stay aligned in real time.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trust-wrap {
      background: #060b14;
      padding: 96px 0 88px;
    }

    .trust-shell {
      border-radius: 24px;
      border: 1px solid rgba(148, 163, 184, 0.24);
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.84), rgba(8, 11, 20, 0.94));
      box-shadow: 0 28px 60px rgba(2, 6, 23, 0.44);
      padding: 28px 18px 22px;
    }

    .eyebrow {
      margin: 0;
      color: #93c5fd;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    header h2 {
      margin: 10px 0 0;
      color: #f8fafc;
      font-size: clamp(30px, 4vw, 45px);
      line-height: 1.08;
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    header p {
      margin: 12px auto 0;
      max-width: 620px;
      color: #94a3b8;
      font-size: 15px;
      line-height: 1.64;
    }

    .stats-grid {
      margin-top: 28px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .stat-card {
      border-radius: 14px;
      border: 1px solid rgba(148, 163, 184, 0.25);
      background: rgba(15, 23, 42, 0.65);
      padding: 14px;
      text-align: center;
    }

    .stat-card h3 {
      margin: 0;
      color: #e2e8f0;
      font-size: clamp(25px, 3vw, 34px);
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .stat-card span {
      display: block;
      margin-top: 4px;
      color: #94a3b8;
      font-size: 12px;
    }

    .logo-block {
      margin-top: 24px;
      border-radius: 14px;
      border: 1px solid rgba(148, 163, 184, 0.18);
      background: rgba(2, 6, 23, 0.5);
      padding: 16px;
    }

    .logo-title {
      margin: 0;
      color: #cbd5e1;
      font-size: 12px;
      text-align: center;
    }

    .logo-grid {
      margin-top: 14px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }

    .logo-grid span {
      border-radius: 10px;
      border: 1px solid rgba(148, 163, 184, 0.2);
      background: rgba(15, 23, 42, 0.64);
      color: #dbeafe;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.03em;
      padding: 9px;
      text-align: center;
    }

    .cred-grid {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .cred-grid article {
      border-radius: 12px;
      border: 1px solid rgba(148, 163, 184, 0.2);
      background: rgba(15, 23, 42, 0.58);
      padding: 12px;
    }

    .cred-grid h4 {
      margin: 0;
      color: #f8fafc;
      font-size: 15px;
      font-weight: 700;
    }

    .cred-grid p {
      margin: 6px 0 0;
      color: #94a3b8;
      font-size: 13px;
      line-height: 1.55;
    }

    @media (min-width: 820px) {
      .trust-shell {
        padding: 34px 26px 26px;
      }

      .stats-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .logo-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }

      .cred-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  `],
})
export class BeforeAfterSectionComponent {
  stats: TrustStat[] = [
    { value: '1000+', label: 'Active Users' },
    { value: '500+', label: 'Vehicles Tracked' },
    { value: '30%', label: 'Average Cost Reduction' },
    { value: '99.9%', label: 'Operational Uptime' },
  ];

  logos = ['RoadLink', 'CargoVerse', 'TransitOne', 'FleetGrid', 'UrbanAxle', 'MoveFast'];
}
