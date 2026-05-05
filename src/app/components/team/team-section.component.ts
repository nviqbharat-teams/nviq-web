import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Member {
  name: string;
  role: string;
  dept: string;
  initials: string;
  grad: string;
  linkedin: string;
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="tm-root">
      <div class="tm-bg" aria-hidden="true">
        <div class="tm-orb"></div>
      </div>

      <div class="tm-container">

        <header class="tm-header">
          <p class="tm-eyebrow">Our Team</p>
          <h1 class="tm-title">
            The People Building<br>
            <span class="tm-accent">NViQ</span>
          </h1>
          <p class="tm-sub">
            A team of engineers, product designers, and fintech experts united by a single goal:
            making fleet businesses smarter and wealthier.
          </p>
        </header>

        <div class="tm-grid">
          <article
            class="tm-card"
            *ngFor="let m of members; let i = index"
            [style.animation-delay]="(i * 80) + 'ms'"
          >
            <!-- Avatar -->
            <div class="tm-avatar" [style.background]="m.grad">
              <span>{{ m.initials }}</span>
            </div>

            <!-- Info -->
            <div class="tm-info">
              <h3 class="tm-name">{{ m.name }}</h3>
              <p class="tm-role">{{ m.role }}</p>
              <span class="tm-dept">{{ m.dept }}</span>
            </div>

            <!-- Social -->
            <a [href]="m.linkedin" class="tm-linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
              LinkedIn
            </a>

            <!-- Hover bar -->
            <div class="tm-bar"></div>
          </article>
        </div>

        <!-- Join CTA -->
        <div class="tm-join">
          <h2>Want to Build With Us?</h2>
          <p>We're hiring engineers, designers, and product thinkers who care about India's fleet future.</p>
          <a href="mailto:careers@nviq.in" class="tm-join-btn">
            View Open Roles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .tm-root {
      min-height: 100vh;
      background: #0A0A0A;
      padding: 100px 32px 80px;
      position: relative; overflow: hidden;
    }
    .tm-bg { position: absolute; inset: 0; pointer-events: none; }
    .tm-orb {
      position: absolute; border-radius: 50%; filter: blur(120px);
      width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%);
      top: 50%; left: 50%; transform: translate(-50%,-50%);
    }

    .tm-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

    /* Header */
    .tm-header { text-align: center; max-width: 640px; margin: 0 auto 64px; }
    .tm-eyebrow {
      display: inline-block;
      color: #2563EB; font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.16em;
      border: 1px solid rgba(37,99,235,0.25);
      background: rgba(37,99,235,0.07);
      padding: 5px 16px; border-radius: 999px; margin-bottom: 16px;
    }
    .tm-title {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2.2rem, 5vw, 4rem);
      font-weight: 900; letter-spacing: -0.04em;
      color: #fff; line-height: 1.05; margin-bottom: 16px;
    }
    .tm-accent {
      background: linear-gradient(120deg, #2563EB, #60A5FA);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .tm-sub { color: rgba(255,255,255,0.45); font-size: 1rem; line-height: 1.7; }

    /* Grid */
    .tm-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px; margin-bottom: 64px;
    }

    /* Card */
    .tm-card {
      position: relative;
      padding: 28px 24px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(14,14,14,0.9);
      display: flex; flex-direction: column; align-items: center;
      gap: 12px; text-align: center; overflow: hidden;
      animation: tmCardIn 0.6s cubic-bezier(0.22,1,0.36,1) both;
      transition: border-color 0.3s ease, transform 0.3s ease;
    }
    .tm-card:hover {
      border-color: rgba(255,255,255,0.14);
      transform: translateY(-6px);
    }
    @keyframes tmCardIn {
      from { opacity:0; transform:translateY(20px); }
      to   { opacity:1; transform:none; }
    }

    /* Avatar 
    .tm-avatar {
      width: 72px; height: 72px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Outfit', sans-serif;
      font-size: 1.4rem; font-weight: 800; color: #fff;
      margin-bottom: 4px;
      transition: transform 0.3s ease;
    }
    .tm-card:hover .tm-avatar { transform: scale(1.08); }

    /* Info */
    .tm-name {
      font-size: 1.05rem; font-weight: 800; color: #fff; letter-spacing: -0.01em;
    }
    .tm-role {
      font-size: 0.88rem; color: rgba(255,255,255,0.55); margin-top: 2px;
    }
    .tm-dept {
      font-size: 10px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.12em; color: #2563EB;
      background: rgba(37,99,235,0.08);
      border: 1px solid rgba(37,99,235,0.18);
      padding: 3px 10px; border-radius: 999px;
    }

    /* LinkedIn */
    .tm-linkedin {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 7px 14px; border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.09);
      color: rgba(255,255,255,0.45);
      font-size: 12px; font-weight: 600; text-decoration: none;
      transition: all 0.2s ease; margin-top: 4px;
    }
    .tm-linkedin:hover {
      color: #0A66C2; border-color: rgba(10,102,194,0.35);
      background: rgba(10,102,194,0.08);
    }

    /* Hover bar */
    .tm-bar {
      position: absolute; bottom: 0; left: 0;
      height: 2px; width: 0;
      background: linear-gradient(90deg, #2563EB, transparent);
      transition: width 0.4s ease;
    }
    .tm-card:hover .tm-bar { width: 100%; }

    /* Join CTA */
    .tm-join {
      text-align: center; padding: 48px 32px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(14,14,14,0.8);
      backdrop-filter: blur(10px);
    }
    .tm-join h2 {
      font-size: 2rem; font-weight: 800; color: #fff;
      letter-spacing: -0.03em; margin-bottom: 12px;
    }
    .tm-join p {
      color: rgba(255,255,255,0.45); font-size: 1rem;
      line-height: 1.65; max-width: 500px; margin: 0 auto 28px;
    }
    .tm-join-btn {
      display: inline-flex; align-items: center; gap: 9px;
      height: 50px; padding: 0 28px; border-radius: 14px;
      background: linear-gradient(135deg, #2563EB, #1D4ED8);
      color: #fff; font-size: 14px; font-weight: 700;
      text-decoration: none;
      box-shadow: 0 8px 28px rgba(37,99,235,0.3);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .tm-join-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 40px rgba(37,99,235,0.45);
    }

    @media (max-width: 900px)  { .tm-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px)  { .tm-grid { grid-template-columns: 1fr; } }
  `]
})
export class TeamSectionComponent {
  members: Member[] = [
    { name: 'Suryaveer Singh',    role: 'CEO & Co-Founder',  dept: 'Leadership',   initials: 'SS', grad: 'linear-gradient(135deg,#2563EB,#1D4ED8)', linkedin: '#' },
    { name: 'Savita',    role: 'Head of Product',   dept: 'Product',      initials: 'S', grad: 'linear-gradient(135deg,#22c55e,#16a34a)', linkedin: '#' },
    { name: 'Devi singh',     role: 'Head of Finance',   dept: 'Finance',      initials: 'DS', grad: 'linear-gradient(135deg,#F59E0B,#D97706)', linkedin: '#' },
    { name: 'Pranjal Sharma',   role: 'Lead Engineer',     dept: 'Engineering',  initials: 'PS', grad: 'linear-gradient(135deg,#A78BFA,#7C3AED)', linkedin: '#' },
    { name: 'Savita',   role: 'Head of Operations',dept: 'Operations',   initials: 'S', grad: 'linear-gradient(135deg,#FB923C,#EA580C)', linkedin: '#' },
  ];
}
