import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

type FleetNode = {
  plate: string;
  route: string;
  status: 'moving' | 'idle' | 'alert';
  speed: number;
  x: number;
  y: number;
};

@Component({
  selector: 'app-live-tracking-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="product-demo" class="py-24" style="background: linear-gradient(180deg, #080d18 0%, #060b14 100%)">
      <div class="max-w-[1220px] mx-auto px-6">
        <header class="text-center max-w-[820px] mx-auto mb-12">
          <p class="text-[#93C5FD] uppercase tracking-[0.12em] font-bold mb-3" style="font-size:12px">Drive with Data</p>
          <h2 class="text-white" style="font-size:clamp(30px,4.2vw,48px); font-weight:800; letter-spacing:-0.03em; line-height:1.08">
            One Control Surface for Tracking, Dispatch, and Fast Decisions
          </h2>
          <p class="text-[#94A3B8] mt-4" style="font-size:15px; line-height:1.7">
            Simulated platform view showing real-time movement, route efficiency, and actionable operational alerts.
          </p>
        </header>

        <div class="rounded-2xl border border-white/10 overflow-hidden"
          style="background: linear-gradient(180deg, rgba(15,23,42,0.88), rgba(8,11,20,0.95)); box-shadow: 0 30px 70px rgba(2,6,23,0.48)">

          <div class="px-5 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block"></span>
              <span class="text-[#E2E8F0]" style="font-size:13px; font-weight:700">NViQ Control Center</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[#64748B]" style="font-size:11px">Active Vehicles: 27</span>
              <span class="text-[#64748B]" style="font-size:11px">Avg ETA Accuracy: 96%</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-0">
            <div class="border-b lg:border-b-0 lg:border-r border-white/10">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 border-b border-white/10">
                <article class="rounded-xl border border-[#22C55E]/20 p-3" style="background: rgba(34,197,94,0.08)">
                  <p class="text-[#86EFAC]" style="font-size:11px">Trips Today</p>
                  <h3 class="text-white mt-1" style="font-size:21px; font-weight:800">184</h3>
                </article>
                <article class="rounded-xl border border-[#3B82F6]/20 p-3" style="background: rgba(59,130,246,0.08)">
                  <p class="text-[#BFDBFE]" style="font-size:11px">Cost Saved</p>
                  <h3 class="text-white mt-1" style="font-size:21px; font-weight:800">Rs 42,300</h3>
                </article>
                <article class="rounded-xl border border-[#06B6D4]/20 p-3" style="background: rgba(6,182,212,0.08)">
                  <p class="text-[#A5F3FC]" style="font-size:11px">On-Time Dispatch</p>
                  <h3 class="text-white mt-1" style="font-size:21px; font-weight:800">96%</h3>
                </article>
                <article class="rounded-xl border border-[#F59E0B]/20 p-3" style="background: rgba(245,158,11,0.08)">
                  <p class="text-[#FCD34D]" style="font-size:11px">Active Alerts</p>
                  <h3 class="text-white mt-1" style="font-size:21px; font-weight:800">7</h3>
                </article>
              </div>

              <div class="relative min-h-[360px]">
                <canvas #mapCanvas class="absolute inset-0 w-full h-full" style="background: linear-gradient(170deg, #060B15 0%, #0A1220 100%)"></canvas>

                <div *ngFor="let node of nodes"
                  class="absolute rounded-xl border border-white/10 px-3 py-2 backdrop-blur-md"
                  [style.left.%]="node.x"
                  [style.top.%]="node.y"
                  style="transform: translate(-50%, -50%); min-width: 175px; background: rgba(8,10,18,0.88)">
                  <div class="flex items-center justify-between gap-2">
                    <strong class="text-white" style="font-size:12px">{{ node.plate }}</strong>
                    <span class="px-2 py-[2px] rounded-full uppercase" style="font-size:10px; font-weight:700"
                      [style.background]="statusColor[node.status] + '22'"
                      [style.color]="statusColor[node.status]">{{ node.status }}</span>
                  </div>
                  <p class="text-[#94A3B8] mt-1" style="font-size:10px">{{ node.route }}</p>
                  <div class="text-[#CBD5E1] mt-1" style="font-size:11px">{{ node.speed }} km/h</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-t border-white/10">
                <article class="rounded-xl border border-white/10 p-3" style="background: rgba(15,23,42,0.68)">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-white" style="font-size:13px; font-weight:700">Route Efficiency</h4>
                    <span class="text-[#67E8F9]" style="font-size:11px">7 day trend</span>
                  </div>
                  <svg viewBox="0 0 100 46" preserveAspectRatio="none" class="w-full h-[122px]">
                    <defs>
                      <linearGradient id="routeLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#3B82F6"></stop>
                        <stop offset="100%" stop-color="#22D3EE"></stop>
                      </linearGradient>
                    </defs>
                    <polyline points="0,36 12,33 24,34 36,27 48,25 60,20 72,17 84,11 100,8"
                      fill="none" stroke="url(#routeLine)" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></polyline>
                    <polyline points="0,41 12,39 24,37 36,35 48,33 60,30 72,28 84,26 100,23"
                      fill="none" stroke="rgba(148,163,184,0.6)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></polyline>
                  </svg>
                </article>

                <article class="rounded-xl border border-white/10 p-3" style="background: rgba(15,23,42,0.68)">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-white" style="font-size:13px; font-weight:700">Dispatch Load</h4>
                    <span class="text-[#BFDBFE]" style="font-size:11px">today</span>
                  </div>
                  <div class="grid grid-cols-6 gap-2 items-end h-[122px]">
                    <span *ngFor="let col of loadBars" class="rounded-t-md"
                      [style.height.%]="col"
                      style="background: linear-gradient(180deg, rgba(34,211,238,0.95), rgba(59,130,246,0.7))"></span>
                  </div>
                </article>
              </div>
            </div>

            <aside class="p-4 space-y-4">
              <article class="rounded-xl border border-white/10 p-4" style="background: rgba(15,23,42,0.64)">
                <h4 class="text-white" style="font-size:13px; font-weight:700">Fleet Utilization</h4>
                <div class="mt-3 flex items-center gap-4">
                  <div class="w-[90px] h-[90px] rounded-full"
                    style="background: conic-gradient(#22C55E 0deg 275deg, rgba(51,65,85,0.8) 275deg 360deg); display:flex; align-items:center; justify-content:center">
                    <div class="w-[64px] h-[64px] rounded-full flex items-center justify-center" style="background:#0B1220">
                      <span class="text-[#E2E8F0]" style="font-size:16px; font-weight:800">76%</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-[#94A3B8]" style="font-size:11px">Productive Hours</p>
                    <p class="text-white" style="font-size:15px; font-weight:700">6.8 / 8.9 hrs</p>
                    <p class="text-[#6EE7B7]" style="font-size:11px">+11.4% this week</p>
                  </div>
                </div>
              </article>

              <article class="rounded-xl border border-white/10 p-4" style="background: rgba(15,23,42,0.64)">
                <h4 class="text-white mb-3" style="font-size:13px; font-weight:700">Priority Alerts</h4>
                <div class="space-y-2">
                  <div *ngFor="let alert of alerts" class="rounded-lg border border-white/10 px-3 py-2"
                    style="background: rgba(2,6,23,0.48)">
                    <p class="text-white" style="font-size:11px; font-weight:600">{{ alert.title }}</p>
                    <p class="text-[#94A3B8]" style="font-size:10px">{{ alert.detail }}</p>
                  </div>
                </div>
              </article>

              <article class="rounded-xl border border-white/10 p-4" style="background: rgba(15,23,42,0.64)">
                <h4 class="text-white mb-3" style="font-size:13px; font-weight:700">Dispatch Queue</h4>
                <div class="space-y-2">
                  <div *ngFor="let item of dispatchQueue" class="flex items-center justify-between">
                    <p class="text-[#CBD5E1]" style="font-size:11px">{{ item.route }}</p>
                    <span class="text-[#67E8F9]" style="font-size:10px">{{ item.eta }}</span>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LiveTrackingSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private frameId = 0;
  private width = 0;
  private height = 0;

  statusColor: Record<FleetNode['status'], string> = {
    moving: '#22C55E',
    idle: '#F59E0B',
    alert: '#EF4444',
  };

  nodes: FleetNode[] = [
    { plate: 'MH12 AB 1244', route: 'Mumbai to Pune', status: 'moving', speed: 62, x: 22, y: 30 },
    { plate: 'KA09 FX 8821', route: 'Hubli to Belgaum', status: 'idle', speed: 0, x: 58, y: 56 },
    { plate: 'RJ14 KL 2098', route: 'Jaipur Ring Road', status: 'alert', speed: 79, x: 76, y: 34 },
  ];

  loadBars = [72, 84, 68, 91, 76, 88];

  alerts = [
    { title: 'Overspeed Trigger - RJ14 KL 2098', detail: '79 km/h detected in restricted lane' },
    { title: 'Idle Alert - KA09 FX 8821', detail: 'Vehicle idle for 18 minutes' },
    { title: 'Route Deviation - MH12 AB 1244', detail: '1.8 km off preferred corridor' },
  ];

  dispatchQueue = [
    { route: 'Navi Mumbai to Pune Yard', eta: 'ETA 11:30' },
    { route: 'Kolkata Port to Dankuni', eta: 'ETA 12:05' },
    { route: 'Hyderabad DC to Warangal', eta: 'ETA 12:40' },
  ];

  ngAfterViewInit(): void {
    this.startCanvas();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
  }

  private startCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const points = [
      { x: 0.16, y: 0.32, speed: 0.0009, phase: 0 },
      { x: 0.44, y: 0.58, speed: 0.0007, phase: 1.2 },
      { x: 0.72, y: 0.36, speed: 0.0011, phase: 2.3 },
      { x: 0.84, y: 0.7, speed: 0.0006, phase: 0.6 },
    ];

    const resize = () => {
      const box = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = Math.max(1, Math.round(box.width));
      this.height = Math.max(1, Math.round(box.height));
      canvas.width = this.width * dpr;
      canvas.height = this.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, this.width, this.height);

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 0.8;
      for (let x = 0; x <= this.width; x += 36) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, this.height);
        ctx.stroke();
      }
      for (let y = 0; y <= this.height; y += 36) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(this.width, y);
        ctx.stroke();
      }

      const t = performance.now();
      points.forEach((p, idx) => {
        p.phase += p.speed * 16;
        const x = (p.x * this.width) + Math.sin(p.phase + idx) * 10;
        const y = (p.y * this.height) + Math.cos(p.phase * 1.3 + idx) * 9;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 18);
        glow.addColorStop(0, 'rgba(34, 211, 238, 0.34)');
        glow.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#67E8F9';
        ctx.beginPath();
        ctx.arc(x, y, 3.6, 0, Math.PI * 2);
        ctx.fill();

        const ring = (Math.sin((t * 0.003) + idx) + 1) / 2;
        ctx.strokeStyle = `rgba(103, 232, 249, ${0.25 - ring * 0.18})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 6 + ring * 10, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.strokeStyle = 'rgba(103, 232, 249, 0.3)';
      ctx.setLineDash([5, 6]);
      ctx.beginPath();
      ctx.moveTo(points[0].x * this.width, points[0].y * this.height);
      ctx.lineTo(points[1].x * this.width, points[1].y * this.height);
      ctx.lineTo(points[2].x * this.width, points[2].y * this.height);
      ctx.stroke();
      ctx.setLineDash([]);

      this.frameId = requestAnimationFrame(draw);
    };

    this.frameId = requestAnimationFrame(draw);
  }
}
