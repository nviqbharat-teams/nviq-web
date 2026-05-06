import {
  Component, Input, AfterViewInit, OnDestroy, ViewChild,
  ElementRef, NgZone, ChangeDetectionStrategy
} from '@angular/core';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  alphaDir: number;
  color: string;
}

@Component({
  selector: 'app-particle-canvas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas class="pc-canvas"></canvas>`,
  styles: [`
    .pc-canvas {
      position: absolute;
      inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 1;
    }
  `]
})
export class ParticleCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  /** Number of particles */
  @Input() count   = 55;
  /** Particle colors (CSS hex) */
  @Input() colors  = ['#3B82F6', '#6366F1', '#60A5FA', '#a5b4fc', '#ffffff'];
  /** Max particle radius */
  @Input() maxR    = 2.2;
  /** Max speed */
  @Input() speed   = 0.35;
  /** Draw connecting lines between nearby particles */
  @Input() lines   = true;
  /** Max distance for connecting lines */
  @Input() lineDist = 120;
  /** Mouse parallax strength (0 = off) */
  @Input() parallax = 0.018;

  private ctx!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;
  private particles: Particle[] = [];
  private rafId: number | null  = null;
  private mouse = { x: -9999, y: -9999 };
  private resizeObs!: ResizeObserver;
  private mouseHandler!: (e: MouseEvent) => void;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx    = this.canvas.getContext('2d')!;

    this.ngZone.runOutsideAngular(() => {
      this.resize();
      this.spawnParticles();

      // Mouse tracking for parallax
      this.mouseHandler = (e: MouseEvent) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      };
      window.addEventListener('mousemove', this.mouseHandler, { passive: true });

      // Resize observer
      this.resizeObs = new ResizeObserver(() => this.resize());
      this.resizeObs.observe(this.canvas.parentElement!);

      this.rafId = requestAnimationFrame(t => this.draw(t));
    });
  }

  private resize(): void {
    const parent = this.canvas.parentElement!;
    this.canvas.width  = parent.offsetWidth;
    this.canvas.height = parent.offsetHeight;
    this.spawnParticles();
  }

  private spawnParticles(): void {
    this.particles = Array.from({ length: this.count }, () => ({
      x:        Math.random() * this.canvas.width,
      y:        Math.random() * this.canvas.height,
      vx:       (Math.random() - 0.5) * this.speed,
      vy:       (Math.random() - 0.5) * this.speed,
      r:        Math.random() * this.maxR + 0.6,
      alpha:    Math.random() * 0.5 + 0.15,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color:    this.colors[Math.floor(Math.random() * this.colors.length)],
    }));
  }

  private draw(_t: number): void {
    const { ctx, canvas } = this;
    const W = canvas.width, H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2;
    const offsetX = (this.mouse.x - (this.canvas.getBoundingClientRect().left + cx)) * this.parallax;
    const offsetY = (this.mouse.y - (this.canvas.getBoundingClientRect().top  + cy)) * this.parallax;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Move
      p.x += p.vx + offsetX * 0.005;
      p.y += p.vy + offsetY * 0.005;

      // Breathe alpha
      p.alpha += 0.004 * p.alphaDir;
      if (p.alpha > 0.7 || p.alpha < 0.08) p.alphaDir *= -1;

      // Wrap
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
      ctx.fill();

      // Draw connecting lines
      if (this.lines) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const q    = this.particles[j];
          const dx   = p.x - q.x;
          const dy   = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.lineDist) {
            const lineAlpha = (1 - dist / this.lineDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${lineAlpha})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    this.rafId = requestAnimationFrame(t => this.draw(t));
  }

  ngOnDestroy(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    window.removeEventListener('mousemove', this.mouseHandler);
    this.resizeObs?.disconnect();
  }
}
