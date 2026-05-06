import {
  Component, OnDestroy, NgZone, ElementRef, ViewChild, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  template: `
    <div #outer class="cf-outer"></div>
    <div #inner class="cf-inner"></div>
    <div #trail class="cf-trail"></div>
  `,
  styles: [`
    :host { pointer-events: none; }

    .cf-outer {
      position: fixed; width: 46px; height: 46px;
      border-radius: 50%;
      border: 1.5px solid rgba(59,130,246,0.5);
      pointer-events: none; z-index: 99999;
      top: 0; left: 0;
      transform: translate(-50%,-50%);
      background: rgba(59,130,246,0.04);
      box-shadow: 0 0 20px rgba(59,130,246,0.18), inset 0 0 10px rgba(59,130,246,0.08);
      mix-blend-mode: normal;
      transition: width .22s ease, height .22s ease,
                  border-color .22s ease, background .22s ease,
                  opacity .3s ease;
    }
    .cf-inner {
      position: fixed; width: 6px; height: 6px;
      border-radius: 50%; background: #3B82F6;
      pointer-events: none; z-index: 99999;
      top: 0; left: 0;
      transform: translate(-50%,-50%);
      box-shadow: 0 0 12px rgba(59,130,246,0.9), 0 0 4px #fff;
      transition: width .18s ease, height .18s ease,
                  background .18s ease, opacity .3s ease;
    }
    .cf-trail {
      position: fixed; width: 12px; height: 12px;
      border-radius: 50%; pointer-events: none; z-index: 99998;
      top: 0; left: 0; transform: translate(-50%,-50%);
      background: radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%);
      transition: opacity .3s ease;
    }
    @media (hover: none) {
      .cf-outer, .cf-inner, .cf-trail { display: none; }
    }
  `]
})
export class CursorFollowerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('outer') outerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('inner') innerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('trail') trailRef!: ElementRef<HTMLDivElement>;

  private mouseX = -300;
  private mouseY = -300;
  private outerX = -300;
  private outerY = -300;
  private trailX = -300;
  private trailY = -300;
  private rafId: number | null = null;

  // State flags
  private isOverBtn   = false;
  private isOverLink  = false;

  private handlers: Array<{ el: Element; type: string; fn: EventListener }> = [];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const outer = this.outerRef.nativeElement;
    const inner = this.innerRef.nativeElement;
    const trail = this.trailRef.nativeElement;

    this.ngZone.runOutsideAngular(() => {

      // Mouse move
      const onMove = (e: MouseEvent) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        inner.style.left = `${e.clientX}px`;
        inner.style.top  = `${e.clientY}px`;
      };
      document.addEventListener('mousemove', onMove);
      this.handlers.push({ el: document as any, type: 'mousemove', fn: onMove as EventListener });

      // Interactive element detection
      const selectors = 'a, button, [role="button"], input, select, textarea, label, [data-cursor]';

      const onEnter = () => {
        this.isOverBtn = true;
        outer.style.width        = '62px';
        outer.style.height       = '62px';
        outer.style.borderColor  = 'rgba(99,102,241,0.8)';
        outer.style.background   = 'rgba(99,102,241,0.1)';
        outer.style.boxShadow    = '0 0 30px rgba(99,102,241,0.3), inset 0 0 14px rgba(99,102,241,0.12)';
        inner.style.width        = '3px';
        inner.style.height       = '3px';
        inner.style.background   = '#818cf8';
        inner.style.boxShadow    = '0 0 16px rgba(99,102,241,0.9)';
      };
      const onLeave = () => {
        this.isOverBtn = false;
        outer.style.width        = '46px';
        outer.style.height       = '46px';
        outer.style.borderColor  = 'rgba(59,130,246,0.5)';
        outer.style.background   = 'rgba(59,130,246,0.04)';
        outer.style.boxShadow    = '0 0 20px rgba(59,130,246,0.18), inset 0 0 10px rgba(59,130,246,0.08)';
        inner.style.width        = '6px';
        inner.style.height       = '6px';
        inner.style.background   = '#3B82F6';
        inner.style.boxShadow    = '0 0 12px rgba(59,130,246,0.9), 0 0 4px #fff';
      };

      document.querySelectorAll(selectors).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        this.handlers.push(
          { el, type: 'mouseenter', fn: onEnter as EventListener },
          { el, type: 'mouseleave', fn: onLeave as EventListener },
        );
      });

      // Page visibility
      document.addEventListener('mouseleave', () => { outer.style.opacity = '0'; inner.style.opacity = '0'; trail.style.opacity = '0'; });
      document.addEventListener('mouseenter', () => { outer.style.opacity = '1'; inner.style.opacity = '1'; trail.style.opacity = '1'; });

      // RAF lerp loop
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const loop = () => {
        this.outerX = lerp(this.outerX, this.mouseX, 0.1);
        this.outerY = lerp(this.outerY, this.mouseY, 0.1);
        this.trailX = lerp(this.trailX, this.mouseX, 0.06);
        this.trailY = lerp(this.trailY, this.mouseY, 0.06);

        outer.style.left = `${this.outerX}px`;
        outer.style.top  = `${this.outerY}px`;
        trail.style.left = `${this.trailX}px`;
        trail.style.top  = `${this.trailY}px`;
        trail.style.width  = this.isOverBtn ? '0px' : '14px';
        trail.style.height = this.isOverBtn ? '0px' : '14px';

        this.rafId = requestAnimationFrame(loop);
      };
      this.rafId = requestAnimationFrame(loop);
    });
  }

  ngOnDestroy(): void {
    this.handlers.forEach(({ el, type, fn }) => el.removeEventListener(type, fn));
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }
}
