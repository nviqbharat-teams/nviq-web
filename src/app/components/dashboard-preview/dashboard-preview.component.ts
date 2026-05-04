import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="preview-wrap" id="dashboard">
      <div class="container">
        <!-- Section header -->
        <div class="section-header">
          <span class="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            Product Preview
          </span>
          <h2 class="section-title">
            Your Fleet Command Center<br>
            <span class="gradient-text">Looks Like This</span>
          </h2>
          <p class="section-sub">
            A fully-featured SaaS dashboard built for speed, clarity, and operational decision-making. Real data. Real control.
          </p>
        </div>

        <!-- Full Dashboard Mockup -->
        <div class="big-dashboard">
          <!-- Browser frame -->
          <div class="bd-chrome">
            <div class="bd-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="bd-url">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              https://app.nviq.in/dashboard/fleet-overview
            </div>
            <div class="bd-tabs">
              <span class="tab active">Fleet Overview</span>
              <span class="tab">Route Planner</span>
              <span class="tab">Reports</span>
            </div>
          </div>

          <!-- Dashboard UI -->
          <div class="bd-body">
            <!-- Left sidebar -->
            <aside class="bd-sidebar">
              <div class="bd-logo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#00D4FF"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" stroke-width="1.8"/>
                </svg>
                NViQ
              </div>
              <div class="bd-nav">
                <div class="bd-link active">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
                  </svg>
                  Overview
                </div>
                <div class="bd-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                  Live Map
                </div>
                <div class="bd-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19h16M6 15l3-4 3 2 4-6 2 3"/>
                  </svg>
                  Analytics
                </div>
                <div class="bd-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  </svg>
                  Alerts <span class="badge-count">3</span>
                </div>
                <div class="bd-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                  Drivers
                </div>
                <div class="bd-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  </svg>
                  Reports
                </div>
                <div class="bd-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 12 2"/>
                  </svg>
                  Settings
                </div>
              </div>
              <div class="bd-user">
                <div class="bd-avatar">RA</div>
                <div>
                  <div class="bd-uname">Rahul A.</div>
                  <div class="bd-urole">Fleet Manager</div>
                </div>
              </div>
            </aside>

            <!-- Main content -->
            <div class="bd-main">
              <!-- Top bar -->
              <div class="bd-topbar">
                <div>
                  <h3 class="bd-page-title">Fleet Overview</h3>
                  <p class="bd-page-sub">Monday, April 28 · 248 vehicles monitored</p>
                </div>
                <div class="bd-topbar-actions">
                  <div class="bd-live-pill">
                    <span class="live-dot-animated"></span>
                    Live Tracking
                  </div>
                  <button class="bd-btn-primary">Export Report</button>
                </div>
              </div>

              <!-- Metric cards -->
              <div class="bd-metrics">
                <div class="bd-metric" *ngFor="let m of metrics">
                  <div class="bm-header">
                    <span class="bm-label">{{ m.label }}</span>
                    <span class="bm-icon" [style.background]="'rgba(' + m.rgb + ',0.1)'" [style.color]="m.color">
                      <ng-container [ngSwitch]="m.icon">
                        <svg *ngSwitchCase="'car'" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.5L5 4h14l1.5 3H21a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
                          <circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>
                        </svg>
                        <svg *ngSwitchCase="'clock'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                        <svg *ngSwitchCase="'rupee'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M6 3h12M6 8h12M6 13l8 8M6 13h3a5 5 0 0 0 0-10"/>
                        </svg>
                        <svg *ngSwitchCase="'bell'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        </svg>
                      </ng-container>
                    </span>
                  </div>
                  <div class="bm-value" [style.color]="m.color">{{ m.value }}</div>
                  <div class="bm-change" [class.up]="m.positive" [class.down]="!m.positive">
                    {{ m.positive ? '↑' : '↓' }} {{ m.change }}
                  </div>
                  <!-- Mini sparkline -->
                  <svg class="bm-sparkline" viewBox="0 0 60 24" fill="none">
                    <path [attr.d]="m.sparkline" [attr.stroke]="m.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              <!-- Map + Side Panel row -->
              <div class="bd-mid-row">
                <!-- Map -->
                <div class="bd-big-map">
                  <div class="map-controls">
                    <button class="map-ctrl active">Map</button>
                    <button class="map-ctrl">Satellite</button>
                    <span class="map-count"><span class="ldb"></span> 248 active</span>
                  </div>
                  <div class="map-canvas">
                    <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
                      <!-- Grid lines -->
                      <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                      <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                      <line x1="0" y1="180" x2="500" y2="180" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                      <line x1="125" y1="0" x2="125" y2="240" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                      <line x1="250" y1="0" x2="250" y2="240" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                      <line x1="375" y1="0" x2="375" y2="240" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

                      <!-- Road network -->
                      <path d="M0 120 Q100 80 200 110 Q300 140 400 100 Q450 80 500 90" stroke="rgba(255,255,255,0.07)" stroke-width="3" stroke-linecap="round"/>
                      <path d="M0 160 Q120 140 240 155 Q360 170 500 150" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
                      <path d="M80 0 Q90 60 95 240" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
                      <path d="M200 0 Q210 80 215 240" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
                      <path d="M350 0 Q355 80 360 240" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
                      <path d="M430 0 Q440 90 445 240" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>

                      <!-- Active route highlight -->
                      <path d="M50 145 Q120 100 200 115 Q280 130 350 105 Q420 85 470 95"
                        stroke="#00D4FF" stroke-width="2" stroke-dasharray="8 4" stroke-linecap="round"
                        style="animation:data-flow 4s linear infinite" stroke-dashoffset="100"/>

                      <!-- Vehicles -->
                      <circle cx="85" cy="140" r="7" fill="#00D4FF" opacity="0.9"/>
                      <circle cx="85" cy="140" r="14" fill="#00D4FF" opacity="0.1">
                        <animate attributeName="r" values="7;18;7" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.1;0;0.1" dur="2s" repeatCount="indefinite"/>
                      </circle>

                      <circle cx="200" cy="115" r="7" fill="#10B981" opacity="0.9"/>
                      <circle cx="200" cy="115" r="14" fill="#10B981" opacity="0.1">
                        <animate attributeName="r" values="7;18;7" dur="2.6s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.1;0;0.1" dur="2.6s" repeatCount="indefinite"/>
                      </circle>

                      <circle cx="350" cy="105" r="7" fill="#F59E0B" opacity="0.9"/>
                      <circle cx="350" cy="105" r="14" fill="#F59E0B" opacity="0.1">
                        <animate attributeName="r" values="7;18;7" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.1;0;0.1" dur="3s" repeatCount="indefinite"/>
                      </circle>

                      <circle cx="460" cy="93" r="7" fill="#00D4FF" opacity="0.9"/>

                      <circle cx="150" cy="155" r="5" fill="#6366F1" opacity="0.7"/>
                      <circle cx="300" cy="150" r="5" fill="#6366F1" opacity="0.7"/>
                      <circle cx="420" cy="135" r="5" fill="#10B981" opacity="0.7"/>

                      <!-- Inactive vehicles -->
                      <circle cx="240" cy="175" r="4" fill="#475569" opacity="0.6"/>
                      <circle cx="320" cy="180" r="4" fill="#475569" opacity="0.6"/>

                      @keyframes data-flow {
                        from { stroke-dashoffset: 100; }
                        to { stroke-dashoffset: 0; }
                      }
                    </svg>
                  </div>
                  <div class="map-legend-bar">
                    <div class="legend-item"><span class="ld" style="background:#00D4FF"></span> Active (198)</div>
                    <div class="legend-item"><span class="ld" style="background:#F59E0B"></span> Alert (3)</div>
                    <div class="legend-item"><span class="ld" style="background:#6366F1"></span> Idle (32)</div>
                    <div class="legend-item"><span class="ld" style="background:#475569"></span> Offline (15)</div>
                  </div>
                </div>

                <!-- Vehicle List -->
                <div class="bd-vehicle-panel">
                  <div class="vp-header">
                    <span>Active Vehicles</span>
                    <input class="vp-search" placeholder="Search..."/>
                  </div>
                  <div class="vp-list">
                    <div class="vp-item" *ngFor="let v of vehicles">
                      <div class="vp-status" [style.background]="v.statusColor"></div>
                      <div class="vp-info">
                        <div class="vp-id">{{ v.id }}</div>
                        <div class="vp-loc">{{ v.location }}</div>
                      </div>
                      <div class="vp-speed">
                        <span class="vp-spd-val" [style.color]="v.speedColor">{{ v.speed }}</span>
                        <span class="vp-spd-unit">km/h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom row: Chart + Alerts -->
              <div class="bd-bottom-row">
                <!-- Bar Chart -->
                <div class="bd-bar-chart">
                  <div class="bc-header">
                    <span class="bc-title">Fleet Activity — Last 7 Days</span>
                    <div class="bc-legend">
                      <span class="bcl-item"><span class="bcl-dot" style="background:#00D4FF"></span> Trips</span>
                      <span class="bcl-item"><span class="bcl-dot" style="background:#6366F1"></span> Alerts</span>
                    </div>
                  </div>
                  <div class="bc-bars">
                    <div class="bc-col" *ngFor="let d of chartData">
                      <div class="bc-bar-wrap">
                        <div class="bc-bar primary" [style.height]="d.trips + '%'"></div>
                        <div class="bc-bar secondary" [style.height]="d.alerts + '%'"></div>
                      </div>
                      <span class="bc-day">{{ d.day }}</span>
                    </div>
                  </div>
                </div>

                <!-- Recent Alerts -->
                <div class="bd-alerts-panel">
                  <div class="ap-header">
                    <span>Recent Alerts</span>
                    <span class="ap-count">3 active</span>
                  </div>
                  <div class="ap-list">
                    <div class="ap-item" *ngFor="let a of alerts" [class]="'ap-' + a.type">
                      <div class="ap-icon">
                        <svg *ngIf="a.type === 'warn'" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 22h20L12 2zm0 6v8m0 2v2"/>
                        </svg>
                        <svg *ngIf="a.type === 'ok'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <svg *ngIf="a.type === 'info'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
                        </svg>
                      </div>
                      <div class="ap-body">
                        <div class="ap-msg">{{ a.message }}</div>
                        <div class="ap-time">{{ a.time }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature callouts below dashboard -->
        <div class="preview-callouts">
          <div class="callout" *ngFor="let c of callouts">
            <div class="callout-icon">{{ c.icon }}</div>
            <div>
              <div class="callout-title">{{ c.title }}</div>
              <div class="callout-desc">{{ c.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .preview-wrap {
      background: linear-gradient(180deg, #07101E 0%, #04070F 100%);
      padding: 100px 0;
      overflow: hidden;
    }

    .section-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 56px;
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
      background: linear-gradient(135deg, #00D4FF, #0EA5E9, #6366F1);
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

    /* Big dashboard */
    .big-dashboard {
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,212,255,0.04);
      margin-bottom: 48px;
    }

    /* Browser chrome */
    .bd-chrome {
      background: #0A1120;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 10px 18px 0;
    }

    .bd-dots {
      display: flex;
      gap: 6px;
      padding-bottom: 10px;
    }

    .dot-red   { width: 11px; height: 11px; border-radius: 50%; background: #FF5F57; }
    .dot-yellow{ width: 11px; height: 11px; border-radius: 50%; background: #FEBC2E; }
    .dot-green { width: 11px; height: 11px; border-radius: 50%; background: #28C840; }

    .bd-url {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 5px 14px;
      background: rgba(4,7,15,0.5);
      border-radius: 6px;
      font-size: 11px;
      color: #475569;
      font-family: 'JetBrains Mono', monospace;
      margin-bottom: 10px;
    }

    .bd-tabs {
      display: flex;
      gap: 2px;
      margin-left: auto;
      padding-bottom: 0;
    }

    .tab {
      padding: 7px 14px 8px;
      font-size: 11px;
      color: #475569;
      border-radius: 6px 6px 0 0;
      cursor: pointer;
      font-weight: 500;
    }

    .tab.active {
      background: #07101E;
      color: #00D4FF;
      border-top: 1px solid rgba(0,212,255,0.2);
      border-left: 1px solid rgba(255,255,255,0.05);
      border-right: 1px solid rgba(255,255,255,0.05);
    }

    /* Dashboard body */
    .bd-body {
      display: flex;
      background: #07101E;
      min-height: 520px;
    }

    /* Sidebar */
    .bd-sidebar {
      width: 160px;
      background: #080D1A;
      border-right: 1px solid rgba(255,255,255,0.05);
      padding: 20px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex-shrink: 0;
    }

    .bd-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 15px;
      font-weight: 800;
      color: #00D4FF;
      letter-spacing: -0.02em;
      padding: 0 8px;
      margin-bottom: 24px;
    }

    .bd-nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
    }

    .bd-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 10px;
      border-radius: 8px;
      font-size: 12px;
      color: #475569;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 500;
      position: relative;
    }

    .bd-link:hover { background: rgba(255,255,255,0.04); color: #94A3B8; }
    .bd-link.active {
      background: rgba(0,212,255,0.08);
      color: #00D4FF;
      border: 1px solid rgba(0,212,255,0.12);
    }

    .badge-count {
      margin-left: auto;
      background: #F43F5E;
      color: #fff;
      font-size: 9px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 999px;
    }

    .bd-user {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 8px;
      border-top: 1px solid rgba(255,255,255,0.05);
      margin-top: auto;
    }

    .bd-avatar {
      width: 30px; height: 30px;
      background: linear-gradient(135deg, #00D4FF, #6366F1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: #04070F;
    }

    .bd-uname { font-size: 11px; font-weight: 600; color: #94A3B8; }
    .bd-urole { font-size: 9px; color: #475569; }

    /* Main content */
    .bd-main {
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      overflow: hidden;
    }

    /* Topbar */
    .bd-topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .bd-page-title {
      font-size: 16px;
      font-weight: 700;
      color: #F0F6FF;
      margin: 0;
    }

    .bd-page-sub {
      font-size: 11px;
      color: #475569;
      margin: 2px 0 0;
    }

    .bd-topbar-actions {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .bd-live-pill {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: rgba(16,185,129,0.08);
      border: 1px solid rgba(16,185,129,0.15);
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      color: #10B981;
    }

    .live-dot-animated {
      width: 6px; height: 6px;
      background: #10B981;
      border-radius: 50%;
      animation: blink 1.5s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .bd-btn-primary {
      padding: 8px 16px;
      background: linear-gradient(135deg, #00D4FF, #0EA5E9);
      color: #04070F;
      border: none;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    /* Metrics row */
    .bd-metrics {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .bd-metric {
      background: rgba(12,18,32,0.9);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      padding: 14px;
    }

    .bm-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .bm-label {
      font-size: 10px;
      color: #475569;
      font-weight: 500;
    }

    .bm-icon {
      width: 24px; height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bm-value {
      font-size: 22px;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 6px;
      font-family: 'JetBrains Mono', monospace;
    }

    .bm-change {
      font-size: 10px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .bm-change.up { color: #10B981; }
    .bm-change.down { color: #F43F5E; }

    .bm-sparkline {
      width: 100%;
      height: 24px;
    }

    /* Mid row */
    .bd-mid-row {
      display: grid;
      grid-template-columns: 1fr 220px;
      gap: 10px;
    }

    /* Big map */
    .bd-big-map {
      background: rgba(4,7,15,0.7);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .map-controls {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 8px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .map-ctrl {
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 600;
      color: #475569;
      background: none;
      border: 1px solid transparent;
      cursor: pointer;
    }

    .map-ctrl.active {
      background: rgba(0,212,255,0.08);
      border-color: rgba(0,212,255,0.15);
      color: #00D4FF;
    }

    .map-count {
      margin-left: auto;
      font-size: 10px;
      color: #10B981;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .ldb {
      width: 6px; height: 6px;
      background: #10B981;
      border-radius: 50%;
      animation: blink 1.5s infinite;
    }

    .map-canvas {
      flex: 1;
      min-height: 160px;
      background: linear-gradient(135deg, rgba(4,7,15,0.95), rgba(8,13,26,0.8));
      position: relative;
      overflow: hidden;
    }

    .map-legend-bar {
      display: flex;
      gap: 16px;
      padding: 8px 12px;
      border-top: 1px solid rgba(255,255,255,0.04);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 10px;
      color: #475569;
    }

    .ld {
      width: 8px; height: 8px;
      border-radius: 50%;
    }

    /* Vehicle list */
    .bd-vehicle-panel {
      background: rgba(12,18,32,0.9);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .vp-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 11px;
      font-weight: 600;
      color: #94A3B8;
    }

    .vp-search {
      background: rgba(4,7,15,0.5);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 6px;
      padding: 5px 10px;
      font-size: 10px;
      color: #475569;
      outline: none;
    }

    .vp-list {
      overflow-y: auto;
      flex: 1;
    }

    .vp-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.03);
      transition: background 0.2s;
    }

    .vp-item:hover { background: rgba(255,255,255,0.02); }

    .vp-status {
      width: 7px; height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .vp-info { flex: 1; }
    .vp-id { font-size: 11px; font-weight: 600; color: #94A3B8; }
    .vp-loc { font-size: 9px; color: #334155; }

    .vp-speed { text-align: right; }
    .vp-spd-val { font-size: 13px; font-weight: 700; font-family: 'JetBrains Mono', monospace; }
    .vp-spd-unit { font-size: 8px; color: #334155; margin-left: 2px; }

    /* Bottom row */
    .bd-bottom-row {
      display: grid;
      grid-template-columns: 1fr 220px;
      gap: 10px;
    }

    /* Bar chart */
    .bd-bar-chart {
      background: rgba(12,18,32,0.9);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      padding: 14px;
    }

    .bc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .bc-title { font-size: 11px; font-weight: 600; color: #94A3B8; }

    .bc-legend { display: flex; gap: 12px; }
    .bcl-item { display: flex; align-items: center; gap: 5px; font-size: 9px; color: #475569; }
    .bcl-dot { width: 7px; height: 7px; border-radius: 2px; }

    .bc-bars {
      display: flex;
      align-items: flex-end;
      gap: 6px;
      height: 60px;
    }

    .bc-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .bc-bar-wrap {
      width: 100%;
      height: 52px;
      display: flex;
      align-items: flex-end;
      gap: 2px;
    }

    .bc-bar {
      flex: 1;
      border-radius: 3px 3px 0 0;
      transition: height 0.6s ease;
    }

    .bc-bar.primary { background: rgba(0,212,255,0.5); }
    .bc-bar.secondary { background: rgba(99,102,241,0.4); }

    .bc-day { font-size: 8px; color: #334155; }

    /* Alert panel */
    .bd-alerts-panel {
      background: rgba(12,18,32,0.9);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .ap-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 11px;
      font-weight: 600;
      color: #94A3B8;
    }

    .ap-count {
      font-size: 9px;
      color: #F43F5E;
      background: rgba(244,63,94,0.1);
      padding: 2px 7px;
      border-radius: 999px;
      font-weight: 700;
    }

    .ap-list { padding: 6px; display: flex; flex-direction: column; gap: 4px; }

    .ap-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 8px;
      border-radius: 8px;
      font-size: 10px;
    }

    .ap-warn {
      background: rgba(245,158,11,0.07);
      border: 1px solid rgba(245,158,11,0.12);
      color: #FCD34D;
    }

    .ap-ok {
      background: rgba(16,185,129,0.07);
      border: 1px solid rgba(16,185,129,0.12);
      color: #6EE7B7;
    }

    .ap-info {
      background: rgba(99,102,241,0.07);
      border: 1px solid rgba(99,102,241,0.12);
      color: #A5B4FC;
    }

    .ap-icon {
      width: 18px; height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .ap-msg { font-weight: 600; line-height: 1.4; margin-bottom: 2px; }
    .ap-time { font-size: 8px; opacity: 0.6; }

    /* Preview callouts */
    .preview-callouts {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .callout {
      display: flex;
      gap: 14px;
      align-items: flex-start;
      padding: 18px 20px;
      background: rgba(12,18,32,0.8);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      transition: all 0.2s ease;
    }

    .callout:hover {
      border-color: rgba(0,212,255,0.15);
      background: rgba(0,212,255,0.03);
    }

    .callout-icon { font-size: 22px; flex-shrink: 0; }
    .callout-title { font-size: 13px; font-weight: 700; color: #F0F6FF; margin-bottom: 4px; }
    .callout-desc { font-size: 12px; color: #475569; line-height: 1.5; }

    @media (max-width: 1100px) {
      .bd-sidebar { display: none; }
      .bd-metrics { grid-template-columns: repeat(2, 1fr); }
      .bd-mid-row { grid-template-columns: 1fr; }
      .bd-bottom-row { grid-template-columns: 1fr; }
      .bd-vehicle-panel { display: none; }
      .preview-callouts { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .bd-metrics { grid-template-columns: repeat(2, 1fr); }
      .preview-callouts { grid-template-columns: 1fr; }
      .bd-tabs { display: none; }
    }
  `]
})
export class DashboardPreviewComponent {
  metrics = [
    {
      label: 'Active Vehicles',
      value: '248',
      change: '12 today',
      positive: true,
      color: '#00D4FF',
      rgb: '0,212,255',
      icon: 'car',
      sparkline: 'M0 18 L10 14 L20 16 L30 10 L40 12 L50 6 L60 8'
    },
    {
      label: 'On-Time Rate',
      value: '96.4%',
      change: '2.1% vs last week',
      positive: true,
      color: '#10B981',
      rgb: '16,185,129',
      icon: 'clock',
      sparkline: 'M0 20 L10 16 L20 14 L30 16 L40 10 L50 8 L60 6'
    },
    {
      label: 'Fuel Saved',
      value: '₹1.2L',
      change: '11% this month',
      positive: true,
      color: '#F59E0B',
      rgb: '245,158,11',
      icon: 'rupee',
      sparkline: 'M0 22 L10 18 L20 20 L30 14 L40 12 L50 8 L60 10'
    },
    {
      label: 'Active Alerts',
      value: '3',
      change: '7 yesterday',
      positive: false,
      color: '#F43F5E',
      rgb: '244,63,94',
      icon: 'bell',
      sparkline: 'M0 10 L10 14 L20 8 L30 16 L40 6 L50 10 L60 12'
    }
  ];

  vehicles = [
    { id: 'DL-8X-2341', location: 'Gurugram · NH-48', speed: 68, speedColor: '#10B981', statusColor: '#10B981' },
    { id: 'MH-12-3459', location: 'Bandra · WEH', speed: 42, speedColor: '#00D4FF', statusColor: '#00D4FF' },
    { id: 'KA-09-7821', location: 'Whitefield · Ring Rd', speed: 88, speedColor: '#F43F5E', statusColor: '#F59E0B' },
    { id: 'TN-07-4520', location: 'Ambattur · Anna Salai', speed: 55, speedColor: '#00D4FF', statusColor: '#00D4FF' },
    { id: 'UP-14-8822', location: 'Noida · Sector 62', speed: 0, speedColor: '#475569', statusColor: '#6366F1' },
  ];

  chartData = [
    { day: 'Mon', trips: 55, alerts: 15 },
    { day: 'Tue', trips: 68, alerts: 22 },
    { day: 'Wed', trips: 48, alerts: 10 },
    { day: 'Thu', trips: 82, alerts: 28 },
    { day: 'Fri', trips: 72, alerts: 18 },
    { day: 'Sat', trips: 90, alerts: 8 },
    { day: 'Sun', trips: 62, alerts: 12 }
  ];

  alerts = [
    { type: 'warn', message: 'KA-09-7821 overspeeding · 88 km/h', time: '2 min ago' },
    { type: 'ok',   message: 'MH-12 route completed · Bandra→BKC', time: '14 min ago' },
    { type: 'info', message: 'New geofence breach · Sector 18', time: '38 min ago' }
  ];

  callouts = [
    { icon: '⚡', title: 'Real-Time Updates', desc: 'Dashboard refreshes every 5 seconds — always current.' },
    { icon: '📊', title: '40+ Metrics', desc: 'From trip counts to driver scores, all in one view.' },
    { icon: '🌐', title: 'Works Everywhere', desc: 'Desktop, tablet, and mobile — fully responsive.' },
    { icon: '🔒', title: 'Secure & Private', desc: 'SOC2 compliant, encrypted data at rest and in transit.' }
  ];
}
