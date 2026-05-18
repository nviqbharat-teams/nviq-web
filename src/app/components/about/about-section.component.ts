import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';

interface CategoryPreview {
  icon: string;
  color: string;
  tag: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- ══ HERO SECTION ═════════════════════════════════════ -->
    <section class="ab-hero">
      <div class="ab-hero-bg">
        <div class="hero-glow-1"></div>
        <div class="hero-glow-2"></div>
      </div>

      <div class="ab-hero-container">
        <!-- Hero Text -->
        <div class="ab-hero-text">
          <span class="ab-eyebrow">ABOUT NVIQ BHARAT</span>
          <h1 class="ab-hero-title">Engineering the Autonomous Pulse of India</h1>
          <p class="ab-hero-desc">
            Building India's premier integrated intelligence ecosystem—from AI-driven fleet telematics on the highway to precision autonomous drone automation in the agricultural fields.
          </p>
          <div class="ab-hero-ctas">
            <button class="btn-primary" (click)="redirectToContact()">Explore Our Solutions</button>
            <button class="btn-secondary" (click)="redirectToContact()">Connect with an Expert</button>
          </div>
        </div>

      </div>
    </section>

    <!-- ══ WHO WE ARE (THE CORE PHILOSOPHY) ══════════════════ -->
    <section class="ab-philosophy">
      <div class="ab-container">
        <div class="philosophy-grid">
          
          <div class="phil-text">
            <div class="section-badge">CORE MANDATE</div>
            <h3>Who We Are & How We Think</h3>
            <p class="lead-p">
              At NVIQ BHARAT Technology Private Limited, we are a high-performance tech team dedicated to developing, operating, and scaling technology-driven physical automation and intelligence platforms.
            </p>
            <p>
              Established with a core mandate to bridge advanced data software with hard-wearing IoT infrastructure, we focus relentlessly on two critical pillars driving economic growth: <strong>Mobility Infrastructure</strong> and <strong>Agricultural Automation</strong>.
            </p>
            <p>
              We don't just build standalone software; we construct robust end-to-end ecosystems where AI-driven analytics, customized hardware integrations, and cloud architectures run seamlessly to optimize heavy operations on the road and in the air.
            </p>
          </div>

          <!-- Stunning Showcase Cards illustrating How We Think -->
          <div class="philosophy-cards">
            <div class="phil-card c-purple">
              <div class="phil-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
              </div>
              <h4>Hardware-to-Cloud Integration</h4>
              <p>Bridging hard-wearing rugged physical IoT sensors with lightning-fast cloud streaming and unified spatial tracking algorithms.</p>
            </div>

            <div class="phil-card c-blue">
              <div class="phil-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h4>Mobility Infrastructure</h4>
              <p>Scaling high-compliance real-time telematics and predictive fleet intelligence pipelines across India's highways.</p>
            </div>

            <div class="phil-card c-green">
              <div class="phil-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h4>Agricultural Automation</h4>
              <p>Pioneering autonomous UAV drone flight automation and precision agricultural spraying tools to optimize crop yield.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ══ DUAL CORE ECOSYSTEMS ══════════════════════════════ -->
    <section class="ab-ecosystems">
      <div class="ab-container">
        <div class="section-header">
          <div class="section-badge">Dual Core Ecosystems</div>
          <h2>Optimizing Roads & Agri Fields</h2>
        </div>

        <div class="ecosystems-grid">
          <!-- Ecosystem 1: Fleet Intelligence -->
          <div class="eco-card glass-dark eco-blue">
            <div class="eco-card-header">
              <div class="eco-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3>Fleet Intelligence & Mobility Analytics</h3>
            </div>
            <p class="eco-intro">
              We provide high-compliance, real-time Telematics and Fleet Intelligence Operations designed to transform raw vehicular movement into highly predictable optimization pipelines.
            </p>
            <div class="eco-points">
              <div class="eco-point">
                <h5>Real-Time Visibility</h5>
                <p>High-frequency tracking dashboards backed by robust cloud infrastructures, enabling instantaneous route updates, asset protection, and remote diagnostic metrics.</p>
              </div>
              <div class="eco-point">
                <h5>Predictive Performance Analytics</h5>
                <p>Custom algorithms that analyze detailed driver behavior profiles, maximize fuel economy performance, and deliver operational transparency for corporate logistics networks and transporters.</p>
              </div>
              <div class="eco-point">
                <h5>Regulatory Compliance Systems</h5>
                <p>Full-scale integration of regulatory-mandated safety systems (such as AIS-140 compliant hardware configurations) built to integrate smoothly with national transit systems, corporate environments, and educational transport platforms.</p>
              </div>
              <div class="eco-point">
                <h5>SaaS Delivery Model</h5>
                <p>Available as highly flexible, cloud-native recurring subscription setups that match individual vehicle scale or multi-tiered corporate fleet sizes.</p>
              </div>
            </div>
          </div>

          <!-- Ecosystem 2: Precision Ag & Drones -->
          <div class="eco-card glass-dark eco-green">
            <div class="eco-card-header">
              <div class="eco-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
                  <path d="M12 2v20"/>
                  <path d="M17 5v5"/>
                  <path d="M22 5v10"/>
                </svg>
              </div>
              <h3>Precision Agricultural Tech & Autonomous UAVs</h3>
            </div>
            <p class="eco-intro">
              We actively build, design, and configure autonomous Unmanned Aerial Vehicles (UAVs / Drones) custom-engineered for precision industrial farming.
            </p>
            <div class="eco-points">
              <div class="eco-point">
                <h5>Precision Smart Agriculture</h5>
                <p>Fully integrated AI data engines and payload sensors configured to systematically manage precision seeding processes, variable-rate field irrigation, target crop condition diagnostics, and ultra-accurate micro-spraying operations.</p>
              </div>
              <div class="eco-point">
                <h5>End-to-End Automation</h5>
                <p>Complete hardware and software pairing where specialized drone mechanisms communicate continuously with proprietary field management software, providing farmers and agronomists with deep analytics and automated field workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ THE NVIQ BHARAT EDGE: HOW WE BUILD ════════════════ -->
    <section class="ab-edge">
      <div class="ab-container">
        <div class="section-header center">
          <div class="section-badge">Engineering Layers</div>
          <h2>The NVIQ BHARAT Edge</h2>
          <p class="section-subtitle">
            What sets NVIQ BHARAT apart is our comprehensive approach to tech engineering. We operate tightly across every layer of the modern technological system:
          </p>
        </div>

        <div class="edge-grid">
          <!-- Item 1: Proprietary Software -->
          <div class="edge-card glass-dark">
            <div class="edge-header">
              <span class="edge-num">01</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h4>Proprietary Software Systems</h4>
            <p>Building rich web platforms, responsive multi-platform mobile apps, and robust backend microservices handling high-throughput spatial data streams.</p>
          </div>

          <!-- Item 2: Deep IoT Sourcing -->
          <div class="edge-card glass-dark">
            <div class="edge-header">
              <span class="edge-num">02</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            </div>
            <h4>Deep IoT & Sensor Sourcing</h4>
            <p>Selecting, configuring, and installing specialized IoT telemetry hubs, advanced dashcams, and automated agricultural sensors to achieve stable physical tracking data.</p>
          </div>

          <!-- Item 3: Smart Integration Frameworks -->
          <div class="edge-card glass-dark">
            <div class="edge-header">
              <span class="edge-num">03</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/><path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"/></svg>
            </div>
            <h4>Smart Integration Frameworks</h4>
            <p>Expanding capabilities through strategic pipeline integrations, allowing operational numbers to link directly into vital auxiliary services like FASTag pipelines, insurance telematics systems, and commercial financial portals.</p>
          </div>

          <!-- Item 4: Digital Services Marketplace -->
          <div class="edge-card glass-dark">
            <div class="edge-header">
              <span class="edge-num">04</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <h4>Digital Services Marketplace</h4>
            <p>Unifying vehicle services, equipment sourcing, component maintenance, and technical updates into a single digital hub for the entire transportation, logistics, and drone community.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ OUR CORPORATE VISION & ROADMAP ════════════════════ -->
    <section class="ab-roadmap">
      <div class="ab-container">
        <div class="roadmap-grid">
          
          <!-- Vision -->
          <div class="roadmap-card glass-dark vision-card">
            <div class="roadmap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="1"/>
              </svg>
            </div>
            <h3>Our Corporate Vision</h3>
            <p>To position NVIQ BHARAT as the central operating infrastructure for physical logistics and smart field management, setting new national benchmarks for operational safety, automation performance, and structural scalability.</p>
          </div>

          <!-- Mission -->
          <div class="roadmap-card glass-dark mission-card">
            <div class="roadmap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3>Our Corporate Mission</h3>
            <p>To democratize access to advanced AI-driven spatial data and physical automation toolkits, lowering operational risk and overhead costs for operators throughout India's transportation corridors and agricultural fields.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ══ FOOTER CALL TO ACTION ════════════════════════════ -->
    <section class="ab-footer-cta">
      <div class="ab-container text-center">
        <div class="cta-box glass-dark">
          <div class="cta-glow"></div>
          <h2>Ready to Bring Next-Gen Automation<br>to Your Fleet or Fields?</h2>
          <p>
            Whether you are trying to optimize a complex transport network or scale up agricultural output with automated drone intelligence, NVIQ BHARAT builds the software, links the hardware, and analyzes the data for you.
          </p>
          <button class="btn-cta" (click)="redirectToContact()">
            Let’s Innovate Together — Partner with Us
          </button>
        </div>
      </div>
    </section>

    <!-- ══ CORPORATE REGISTRY & LEGAL ══════════════════════ -->
    <section class="ab-corporate-registry">
      <div class="ab-container">
        <div class="registry-card glass-dark">
          <div class="registry-grid">
            <div class="registry-item">
              <span class="registry-label">Corporate Identity Number (CIN)</span>
              <p class="registry-value font-mono">U62099RJ2026PTC113523 | ROC Manesar (CRC)</p>
            </div>
            
            <div class="registry-item">
              <span class="registry-label">Registered Office</span>
              <p class="registry-value">Malakhera, Jamalpur, Alwar, Alwar - 301406, Rajasthan, India.</p>
            </div>
            
            <div class="registry-item">
              <span class="registry-label">Contact & Support</span>
              <p class="registry-value">
                <a href="mailto:nviqbharat&#64;gmail.com" class="registry-link">nviqbharat&#64;gmail.com</a>
              </p>
            </div>

            <div class="registry-item legal-links-container">
              <span class="registry-label">Legal Agreements</span>
              <div class="legal-links">
                <a href="/terms" class="legal-link">Terms of Service</a>
                <span class="separator">•</span>
                <a href="/privacy" class="legal-link">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ─── Hero Section ──────────────────────────────────── */
    .ab-hero {
      position: relative;
      background: #060913;
      padding: 140px 0 100px;
      overflow: hidden;
      min-height: 85vh;
      display: flex;
      align-items: center;
    }
    .ab-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      box-sizing: border-box;
    }
    .ab-hero-bg {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
    }
    .hero-glow-1 {
      position: absolute; top: -100px; right: -50px;
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%);
      filter: blur(80px);
    }
    .hero-glow-2 {
      position: absolute; bottom: -100px; left: -100px;
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%);
      filter: blur(80px);
    }
    .ab-hero-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 24px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      z-index: 1;
      width: 100%;
    }
    .ab-hero-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .ab-eyebrow {
      display: inline-block;
      color: #3B82F6;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.16em;
      background: rgba(59,130,246,0.06);
      border: 1px solid rgba(59,130,246,0.15);
      padding: 6px 14px;
      border-radius: 99px;
      margin-bottom: 24px;
    }
    .ab-hero-title {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2.5rem, 5vw, 4.2rem);
      font-weight: 900;
      color: #F8FAFC;
      letter-spacing: -0.03em;
      line-height: 1.05;
      margin-bottom: 20px;
    }
    .ab-hero-desc {
      font-size: 16.5px;
      color: #94A3B8;
      line-height: 1.65;
      margin-bottom: 32px;
      max-width: 720px;
    }
    .ab-hero-ctas {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .btn-primary {
      background: #2563EB;
      color: #fff;
      border: none;
      padding: 14px 28px;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s;
    }
    .btn-primary:hover {
      background: #1D4ED8;
      box-shadow: 0 4px 20px rgba(37,99,235,0.3);
      transform: translateY(-2px);
    }
    .btn-secondary {
      background: rgba(255,255,255,0.03);
      color: #F1F5F9;
      border: 1px solid rgba(255,255,255,0.08);
      padding: 14px 28px;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s;
    }
    .btn-secondary:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.15);
      transform: translateY(-2px);
    }
    /* ─── Philosophy Section ────────────────────────────── */
    .ab-philosophy {
      background: #080C16;
      padding: 120px 0;
      position: relative;
    }
    .ab-philosophy::before {
      content: '';
      position: absolute;
      top: 0; left: 10%; right: 10%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
    }
    .philosophy-grid {
      max-width: 950px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .phil-text {
      max-width: 800px;
      margin-bottom: 56px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .section-badge {
      display: inline-block;
      color: #10B981;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      background: rgba(16,185,129,0.06);
      border: 1px solid rgba(16,185,129,0.15);
      padding: 6px 14px;
      border-radius: 99px;
      margin-bottom: 24px;
    }
    .phil-text h3 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 850;
      color: #F8FAFC;
      margin-bottom: 24px;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }
    .lead-p {
      font-size: 18.5px;
      line-height: 1.65;
      color: #E2E8F0;
      font-weight: 500;
      margin-bottom: 24px;
    }
    .phil-text p {
      font-size: 15.5px;
      line-height: 1.75;
      color: #94A3B8;
      margin-bottom: 20px;
    }

    /* Gorgeous 3-column Philosophy Cards */
    .philosophy-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      width: 100%;
      margin-top: 24px;
    }
    .phil-card {
      background: rgba(15, 23, 42, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 20px;
      padding: 32px 24px;
      text-align: left;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }
    .phil-card:hover {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(15, 23, 42, 0.45);
      transform: translateY(-4px);
    }
    .phil-card-icon {
      width: 44px; height: 44px; border-radius: 10px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.04);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 20px;
      transition: all 0.3s;
    }
    .phil-card:hover .phil-card-icon {
      transform: scale(1.05);
    }
    .phil-card.c-blue .phil-card-icon {
      background: rgba(59,130,246,0.05);
      border-color: rgba(59,130,246,0.15);
    }
    .phil-card.c-green .phil-card-icon {
      background: rgba(16,185,129,0.05);
      border-color: rgba(16,185,129,0.15);
    }
    .phil-card.c-purple .phil-card-icon {
      background: rgba(168,85,247,0.05);
      border-color: rgba(168,85,247,0.15);
    }
    .phil-card h4 {
      font-size: 16.5px;
      font-weight: 700;
      color: #F1F5F9;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .phil-card p {
      font-size: 13px;
      line-height: 1.6;
      color: #64748B;
      margin: 0;
    }
    .phil-card:hover p {
      color: #94A3B8;
    }

    /* ─── Ecosystems Section ────────────────────────────── */
    .ab-ecosystems {
      background: #060913;
      padding: 100px 0;
    }
    .section-header {
      margin-bottom: 56px;
    }
    .section-header.center {
      text-align: center;
    }
    .section-header h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 2.3rem;
      font-weight: 800;
      color: #F8FAFC;
      letter-spacing: -0.02em;
    }
    .section-subtitle {
      font-size: 16px;
      color: #64748B;
      max-width: 650px;
      margin: 16px auto 0;
      line-height: 1.6;
    }
    .ecosystems-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .eco-card {
      background: rgba(15, 23, 42, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 40px;
      transition: all 0.3s;
    }
    .eco-blue:hover {
      border-color: rgba(59,130,246,0.25);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(59,130,246,0.02);
    }
    .eco-green:hover {
      border-color: rgba(16,185,129,0.25);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(16,185,129,0.02);
    }
    .eco-card-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }
    .eco-icon-container {
      width: 48px; height: 48px; border-radius: 12px;
      background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04);
      display: flex; align-items: center; justify-content: center;
    }
    .eco-card h3 {
      font-size: 20px; font-weight: 800; color: #F8FAFC; letter-spacing: -0.01em;
    }
    .eco-intro {
      font-size: 15px; color: #94A3B8; line-height: 1.65;
      margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.03);
      padding-bottom: 24px;
    }
    .eco-points {
      display: flex; flex-direction: column; gap: 24px;
    }
    .eco-point h5 {
      font-size: 13.5px; font-weight: 700; color: #E2E8F0; margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .eco-point p {
      font-size: 12.5px; color: #64748B; line-height: 1.6;
    }

    /* ─── Edge Section ──────────────────────────────────── */
    .ab-edge {
      background: #080C16;
      padding: 100px 0;
    }
    .edge-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .edge-card {
      background: rgba(15, 23, 42, 0.45);
      border: 1px solid rgba(255,255,255,0.04);
      border-radius: 20px;
      padding: 32px 24px;
      transition: all 0.3s;
    }
    .edge-card:hover {
      border-color: rgba(255,255,255,0.08);
      transform: translateY(-4px);
    }
    .edge-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .edge-num {
      font-size: 18px; font-weight: 800; color: #475569;
    }
    .edge-card h4 {
      font-size: 15px; font-weight: 700; color: #E2E8F0; margin-bottom: 10px;
    }
    .edge-card p {
      font-size: 12.5px; color: #64748B; line-height: 1.6;
    }

    /* ─── Vision/Roadmap Section ────────────────────────── */
    .ab-roadmap {
      background: #060913;
      padding: 100px 0;
    }
    .roadmap-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      max-width: 900px;
      margin: 0 auto;
    }
    .roadmap-card {
      background: rgba(15, 23, 42, 0.45);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 24px;
      padding: 40px;
      text-align: center;
      transition: all 0.3s;
    }
    .roadmap-card:hover {
      border-color: rgba(255,255,255,0.08);
    }
    .roadmap-icon {
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(255,255,255,0.02);
      display: inline-flex; align-items: center; justify-content: center;
      margin-bottom: 24px;
      border: 1px solid rgba(255,255,255,0.04);
    }
    .roadmap-card h3 {
      font-size: 20px; font-weight: 800; color: #F8FAFC; margin-bottom: 16px;
    }
    .roadmap-card p {
      font-size: 14px; color: #64748B; line-height: 1.65;
    }

    /* ─── Footer CTA Section ────────────────────────────── */
    .ab-footer-cta {
      background: #080C16;
      padding: 120px 0;
    }
    .cta-box {
      position: relative;
      background: rgba(15, 23, 42, 0.65);
      border: 1px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 32px;
      padding: 72px 40px;
      max-width: 900px;
      margin: 0 auto;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    }
    .cta-glow {
      position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 300px; height: 1px;
      background: linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.4) 50%, rgba(59,130,246,0));
    }
    .cta-box h2 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2rem, 4vw, 2.7rem);
      font-weight: 800; color: #F8FAFC; line-height: 1.15;
      margin-bottom: 20px;
    }
    .cta-box p {
      font-size: 15px; color: #64748B; max-width: 650px; margin: 0 auto 36px;
      line-height: 1.7;
    }
    .btn-cta {
      background: #2563EB;
      color: #fff;
      border: none;
      padding: 16px 36px;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      font-size: 14.5px;
      transition: all 0.25s;
    }
    .btn-cta:hover {
      background: #1D4ED8;
      box-shadow: 0 4px 20px rgba(37,99,235,0.3);
      transform: translateY(-2px);
    }

    /* ─── Corporate Legal Registry Section ──────────────── */
    .ab-corporate-registry {
      background: #060913;
      padding: 0 0 80px;
      position: relative;
    }
    .registry-card {
      background: rgba(15, 23, 42, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 20px;
      padding: 32px;
      transition: all 0.3s;
    }
    .registry-card:hover {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(15, 23, 42, 0.45);
    }
    .registry-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      align-items: start;
    }
    .registry-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .registry-label {
      font-size: 10px;
      font-weight: 800;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .registry-value {
      font-size: 13.5px;
      line-height: 1.6;
      color: #E2E8F0;
      margin: 0;
    }
    .font-mono {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 12.5px;
    }
    .registry-link {
      color: #3B82F6;
      text-decoration: none;
      transition: color 0.2s;
    }
    .registry-link:hover {
      color: #60A5FA;
      text-decoration: underline;
    }
    .legal-links {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .legal-link {
      font-size: 13.5px;
      color: #3B82F6;
      text-decoration: none;
      transition: color 0.2s;
    }
    .legal-link:hover {
      color: #60A5FA;
      text-decoration: underline;
    }
    .separator {
      color: #475569;
      font-size: 12px;
    }

    /* ─── Responsive Queries ────────────────────────────── */
    @media (max-width: 1024px) {
      .ab-hero-container { grid-template-columns: 1fr; gap: 48px; text-align: center; }
      .ab-hero-desc { margin-left: auto; margin-right: auto; }
      .ab-hero-ctas { justify-content: center; }
      .ecosystems-grid { grid-template-columns: 1fr; }
      .edge-grid { grid-template-columns: repeat(2, 1fr); }
      .roadmap-grid { grid-template-columns: 1fr; }
      .registry-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
      .philosophy-cards { grid-template-columns: 1fr; gap: 16px; }
    }
    @media (max-width: 640px) {
      .edge-grid { grid-template-columns: 1fr; }
      .ab-hero { padding-top: 100px; }
      .cta-box { padding: 48px 24px; }
      .registry-grid { grid-template-columns: 1fr; gap: 24px; }
    }
  `]
})
export class AboutSectionComponent {
  private navService = inject(NavService);
  private router = inject(Router);

  redirectToContact(): void {
    this.router.navigate(['/contact']);
  }
}
