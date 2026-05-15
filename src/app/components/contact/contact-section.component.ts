import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="ct-root">


      <!-- Hero -->
      <div class="ct-hero">
        <div class="ct-hero-inner">
          <span class="ct-badge">
            <span class="ct-badge-dot"></span>
            Get In Touch
          </span>
          <h1 class="ct-hero-title">Let's Start a<br><span class="ct-hero-accent">Conversation</span></h1>
          <p class="ct-hero-sub">Whether you have a question about our GPS platform, mutual fund services, or anything else — our team is ready to answer.</p>
        </div>
        <div class="ct-hero-divider"></div>
      </div>

      <!-- Main grid -->
      <div class="ct-grid">

        <!-- LEFT — Info Panel -->
        <div class="ct-info-panel">

          <div class="ct-info-header">
            <h2 class="ct-info-title">Contact Information</h2>
            <p class="ct-info-sub">Reach us through any channel — we respond within 2 business hours.</p>
          </div>

          <div class="ct-channels">
            <div class="ct-channel" *ngFor="let ch of channels">
              <div class="ct-ch-icon" [style.--clr]="ch.color">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  [attr.stroke]="ch.color" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path [attr.d]="ch.icon"/>
                </svg>
              </div>
              <div class="ct-ch-body">
                <span class="ct-ch-label">{{ ch.label }}</span>
                <span class="ct-ch-val" *ngFor="let v of ch.values">{{ v }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT — Form -->
        <div class="ct-form-panel">
          <div class="ct-form-header">
            <h2 class="ct-form-title">Send Us a Message</h2>
            <p class="ct-form-sub">Fill out the form and we'll get back to you shortly.</p>
          </div>

          <form class="ct-form" (ngSubmit)="onSubmit()" #ngf="ngForm" novalidate>

            <div class="ct-row-2">
              <div class="ct-field" [class.has-err]="nameErr">
                <label for="ct-name">Full Name</label>
                <input id="ct-name" name="name" type="text"
                  placeholder="Your full name"
                  [(ngModel)]="form.name">
                <span class="ct-err-msg" *ngIf="nameErr">Name is required</span>
              </div>
              <div class="ct-field" [class.has-err]="phoneErr">
                <label for="ct-phone">Phone Number</label>
                <input id="ct-phone" name="phone" type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  [(ngModel)]="form.phone">
                <span class="ct-err-msg" *ngIf="phoneErr">Phone is required</span>
              </div>
            </div>

            <div class="ct-field" [class.has-err]="emailErr">
              <label for="ct-email">Email Address</label>
              <input id="ct-email" name="email" type="email"
                placeholder="you@company.com"
                [(ngModel)]="form.email">
              <span class="ct-err-msg" *ngIf="emailErr">Valid email required</span>
            </div>

            <div class="ct-field">
              <label for="ct-company">Company / Fleet Size <span class="ct-opt">(optional)</span></label>
              <input id="ct-company" name="company" type="text"
                placeholder="Company name &amp; number of vehicles"
                [(ngModel)]="form.company">
            </div>

            <div class="ct-field" [class.has-err]="msgErr">
              <label for="ct-msg">Message</label>
              <textarea id="ct-msg" name="message" rows="4"
                placeholder="Tell us about your requirements..."
                [(ngModel)]="form.message"></textarea>
              <span class="ct-err-msg" *ngIf="msgErr">Message is required</span>
            </div>

            <p class="ct-submit-err" *ngIf="submitError">{{ submitError }}</p>

            <button class="ct-submit" type="submit" [disabled]="submitted || sending">
              <ng-container *ngIf="!submitted && !sending">
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </ng-container>
              <ng-container *ngIf="sending">
                <span class="ct-spinner"></span>
                <span>Sending…</span>
              </ng-container>
              <ng-container *ngIf="submitted">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Message Sent!</span>
              </ng-container>
            </button>
          </form>
        </div>

      </div>
    </section>
  `,
  styles: [`
    /* ─── Root ───────────────────────────────────────── */
    .ct-root {
      min-height: 100vh;
      background: #0f172a;
      position: relative;
      overflow: hidden;
      padding: 0 0 100px;
      font-family: 'Outfit', sans-serif;
    }


    /* ─── Hero ───────────────────────────────────────── */
    .ct-hero {
      position: relative; z-index: 1;
      text-align: center;
      padding: 120px 24px 64px;
    }
    .ct-hero-inner { max-width: 640px; margin: 0 auto; }

    .ct-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 18px; border-radius: 999px;
      border: 1px solid rgba(96,165,250,0.3);
      background: rgba(37,99,235,0.1);
      color: #93C5FD;
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.14em;
      margin-bottom: 24px;
      animation: ctUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
    }
    .ct-badge-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #60A5FA;
      box-shadow: 0 0 8px #60A5FA;
      animation: ctPulse 2s ease-in-out infinite;
    }
    @keyframes ctPulse {
      0%,100% { opacity:1; transform:scale(1); }
      50%      { opacity:0.5; transform:scale(0.7); }
    }

    .ct-hero-title {
      font-size: clamp(2.8rem, 6vw, 5rem);
      font-weight: 900; letter-spacing: -0.04em;
      color: #F0F6FF; line-height: 1.08;
      margin: 0 0 20px;
      animation: ctUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.08s both;
    }
    .ct-hero-accent {
      background: #60A5FA;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .ct-hero-sub {
      color: rgba(255,255,255,0.42); font-size: 1.05rem; line-height: 1.75;
      margin: 0; max-width: 520px; margin: 0 auto;
      animation: ctUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.16s both;
    }
    .ct-hero-divider {
      width: 60px; height: 2px;
      background: linear-gradient(90deg, #3B82F6, #818CF8);
      border-radius: 999px; margin: 40px auto 0;
      box-shadow: 0 0 20px rgba(59,130,246,0.6);
      animation: ctUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.22s both;
    }

    @keyframes ctUp {
      from { opacity:0; transform:translateY(24px); }
      to   { opacity:1; transform:none; }
    }

    /* ─── Main Grid ──────────────────────────────────── */
    .ct-grid {
      position: relative; z-index: 1;
      max-width: 1120px; margin: 0 auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 28px;
      align-items: start;
    }

    /* ─── Info Panel ─────────────────────────────────── */
    .ct-info-panel {
      position: relative;
      background: #1e293b;
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 16px;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
      padding: 40px 36px;
      overflow: hidden;
      animation: ctUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both;
      transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    }
    .ct-info-panel:hover {
      border-color: rgba(96,165,250,0.2);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
      transform: translateY(-4px);
    }

    .ct-info-header { margin-bottom: 36px; }
    .ct-info-title {
      font-size: 1.5rem; font-weight: 800;
      color: #fff; letter-spacing: -0.02em;
      margin: 0 0 10px;
    }
    .ct-info-sub {
      color: rgba(255,255,255,0.4);
      font-size: 0.9rem; line-height: 1.65;
    }

    /* Channels */
    .ct-channels { display: flex; flex-direction: column; gap: 6px; margin-bottom: 36px; }

    .ct-channel {
      display: flex; align-items: flex-start; gap: 18px;
      padding: 18px 20px; border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.03);
      transition: background 0.2s, border-color 0.2s, transform 0.2s;
      cursor: default;
    }
    .ct-channel:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(96,165,250,0.2);
      transform: translateX(4px);
    }

    .ct-ch-icon {
      width: 46px; height: 46px; flex-shrink: 0;
      border-radius: 13px;
      background: rgba(var(--clr-rgb, 37,99,235), 0.12);
      border: 1px solid rgba(var(--clr-rgb, 37,99,235), 0.2);
      display: flex; align-items: center; justify-content: center;
      transition: box-shadow 0.2s;
    }
    .ct-channel:hover .ct-ch-icon {
      box-shadow: 0 0 18px rgba(96,165,250,0.2);
    }

    .ct-ch-body { display: flex; flex-direction: column; gap: 4px; }
    .ct-ch-label {
      font-size: 10px; font-weight: 700;
      color: rgba(255,255,255,0.28);
      text-transform: uppercase; letter-spacing: 0.14em;
    }
    .ct-ch-val {
      font-size: 0.92rem; font-weight: 600;
      color: rgba(255,255,255,0.82); line-height: 1.5;
    }


    /* ─── Form Panel ─────────────────────────────────── */
    .ct-form-panel {
      animation: ctUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.18s both;
    }

    .ct-form-header { margin-bottom: 28px; }
    .ct-form-title {
      font-size: 1.6rem; font-weight: 800;
      color: #fff; letter-spacing: -0.025em; margin: 0 0 8px;
    }
    .ct-form-sub { color: rgba(255,255,255,0.35); font-size: 0.9rem; }

    .ct-form {
      background: #1e293b;
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 16px;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
      padding: 36px;
      display: flex; flex-direction: column; gap: 20px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .ct-form:hover {
      border-color: rgba(96,165,250,0.2);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
    }

    .ct-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }

    /* Field */
    .ct-field { display: flex; flex-direction: column; gap: 8px; }
    .ct-field label {
      font-size: 11px; font-weight: 700;
      color: rgba(255,255,255,0.38);
      text-transform: uppercase; letter-spacing: 0.12em;
    }
    .ct-opt { font-weight: 500; text-transform: none; letter-spacing: 0; opacity: 0.7; }

    .ct-field input, .ct-field textarea {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 14px;
      padding: 13px 18px;
      color: #F0F6FF; font-size: 14px;
      font-family: 'Outfit', sans-serif;
      outline: none; resize: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .ct-field input::placeholder, .ct-field textarea::placeholder {
      color: rgba(255,255,255,0.16);
    }
    .ct-field input:focus, .ct-field textarea:focus {
      border-color: rgba(96,165,250,0.55);
      background: rgba(255,255,255,0.06);
      box-shadow: 0 0 0 4px rgba(59,130,246,0.12), 0 0 24px rgba(59,130,246,0.08);
    }
    .ct-field.has-err input,
    .ct-field.has-err textarea {
      border-color: rgba(239,68,68,0.5);
      box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
    }
    .ct-err-msg { font-size: 11px; color: #F87171; font-weight: 600; }
    .ct-submit-err { color: #F87171; font-size: 13px; font-weight: 600; text-align: center; }

    /* Submit */
    .ct-submit {
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
      height: 50px; border-radius: 12px; border: none;
      background: #2563EB;
      color: #fff; font-family: 'Outfit', sans-serif;
      font-size: 15px; font-weight: 700; cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .ct-submit:hover:not(:disabled) {
      background: #1d4ed8;
      transform: translateY(-2px);
    }
    .ct-submit:disabled {
      background: #16a34a;
      cursor: default;
    }
    .ct-submit svg { flex-shrink: 0; }

    /* Spinner */
    .ct-spinner {
      width: 16px; height: 16px; border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: #fff;
      animation: ctSpin 0.7s linear infinite;
    }
    @keyframes ctSpin { to { transform: rotate(360deg); } }

    /* ─── Responsive ─────────────────────────────────── */
    @media (max-width: 960px) {
      .ct-grid { grid-template-columns: 1fr; max-width: 600px; }
      .ct-info-panel { padding: 32px 28px; }
      .ct-form { padding: 28px 24px; }
    }
    @media (max-width: 600px) {
      .ct-hero { padding: 100px 20px 48px; }
      .ct-hero-title { font-size: 2.6rem; }
      .ct-row-2 { grid-template-columns: 1fr; }
      .ct-grid { padding: 0 16px; }
    }
  `]
})
export class ContactSectionComponent implements OnInit {
  private api = inject(ApiService);

  form = { name: '', phone: '', email: '', company: '', message: '' };
  submitted  = false;
  sending    = false;
  submitError = '';
  nameErr  = false;
  phoneErr = false;
  emailErr = false;
  msgErr   = false;

  private iconPhone = 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z';
  private iconMail  = 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6';
  private iconPin   = 'M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z';

  channels: any[] = [];

  ngOnInit(): void {
    this.channels = [
      {
        icon: this.iconPhone,
        color: '#60A5FA',
        label: 'Phone',
        values: ['+91 85292 45390'],
      },
      {
        icon: this.iconMail,
        color: '#818CF8',
        label: 'Email',
        values: ['naviqbharat@gmail.com'],
      },
      {
        icon: this.iconPin,
        color: '#34D399',
        label: 'Registered Office',
        values: [
          'NViQ Technologies Pvt. Ltd.',
          'Malakhera Jamalpur 301406,',
          'Alwar, Rajasthan, India',
        ],
      },
    ];
  }

  onSubmit(): void {
    this.nameErr  = !this.form.name.trim();
    this.phoneErr = !this.form.phone.trim();
    this.emailErr = !this.form.email.trim() || !this.form.email.includes('@');
    this.msgErr   = !this.form.message.trim();

    if (this.nameErr || this.phoneErr || this.emailErr || this.msgErr) return;

    this.sending     = true;
    this.submitError = '';

    const payload = {
      name:    this.form.name.trim(),
      email:   this.form.email.trim(),
      phone:   this.form.phone.trim(),
      message: `${this.form.company ? '[' + this.form.company.trim() + '] ' : ''}${this.form.message.trim()}`,
    };

    this.api.submitContact(payload).subscribe({
      next: () => {
        this.submitted = true;
        this.sending   = false;
        this.form      = { name: '', phone: '', email: '', company: '', message: '' };
        setTimeout(() => { this.submitted = false; }, 4000);
      },
      error: (err: Error) => {
        this.sending     = false;
        this.submitError = err.message || 'Failed to send. Please try again.';
      },
    });
  }
}
