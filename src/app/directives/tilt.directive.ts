import {
  Directive, ElementRef, HostListener, Input, OnInit, OnDestroy, NgZone
} from '@angular/core';

@Directive({ selector: '[appTilt]', standalone: true })
export class TiltDirective implements OnInit, OnDestroy {
  /** Max rotation angle in degrees */
  @Input() tiltMax       = 14;
  /** Perspective distance (px) */
  @Input() tiltPerspective = 900;
  /** Glow color on tilt (CSS color or 'none') */
  @Input() tiltGlow      = 'rgba(59,130,246,0.25)';
  /** Scale on hover */
  @Input() tiltScale     = 1.03;
  /** Transition speed (ms) */
  @Input() tiltSpeed     = 380;

  private el!: HTMLElement;
  private rafId: number | null = null;
  private targetRX = 0;
  private targetRY = 0;
  private currentRX = 0;
  private currentRY = 0;
  private isHovering = false;

  constructor(private elRef: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.el = this.elRef.nativeElement;
    this.el.style.transformStyle = 'preserve-3d';
    this.el.style.transition     = `transform ${this.tiltSpeed}ms cubic-bezier(0.23,1,0.32,1),
                                    box-shadow ${this.tiltSpeed}ms ease`;
    this.el.style.willChange     = 'transform';
  }

  @HostListener('mouseenter')
  onEnter(): void {
    this.isHovering = true;
    this.el.style.transition = 'none';
    this.ngZone.runOutsideAngular(() => this.loop());
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    const rect   = this.el.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    this.targetRY =  dx * this.tiltMax;
    this.targetRX = -dy * this.tiltMax;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.isHovering = false;
    this.targetRX = 0;
    this.targetRY = 0;
    this.el.style.transition = `transform ${this.tiltSpeed}ms cubic-bezier(0.23,1,0.32,1),
                                box-shadow ${this.tiltSpeed}ms ease`;
    this.el.style.transform  = `perspective(${this.tiltPerspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    this.el.style.boxShadow  = '';
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private loop(): void {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const factor = 0.12;

    this.currentRX = lerp(this.currentRX, this.targetRX, factor);
    this.currentRY = lerp(this.currentRY, this.targetRY, factor);

    const scale  = this.isHovering ? this.tiltScale : 1;
    const glowX  = (this.currentRY / this.tiltMax) * 60 + 50;
    const glowY  = (-this.currentRX / this.tiltMax) * 60 + 50;

    this.el.style.transform = `perspective(${this.tiltPerspective}px)
      rotateX(${this.currentRX}deg)
      rotateY(${this.currentRY}deg)
      scale3d(${scale},${scale},${scale})`;

    if (this.tiltGlow !== 'none') {
      this.el.style.boxShadow = `0 24px 64px rgba(0,0,0,0.35),
        ${this.currentRY * 1.2}px ${-this.currentRX * 1.2}px 40px ${this.tiltGlow}`;
    }

    // Glow follows mouse inside the element
    this.el.style.background = this.el.style.background ||
      `radial-gradient(circle at ${glowX}% ${glowY}%, ${this.tiltGlow} 0%, transparent 60%)`;

    if (this.isHovering) {
      this.rafId = requestAnimationFrame(() => this.loop());
    }
  }

  ngOnDestroy(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }
}
