import { Component, OnInit, OnDestroy, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #outer class="cf-outer"></div>
    <div #inner class="cf-inner"></div>
  `,
  styles: [`
    .cf-outer {
      position: fixed;
      width: 44px; height: 44px;
      border-radius: 50%;
      border: 1.5px solid rgba(0,212,255,0.45);
      pointer-events: none;
      z-index: 99999;
      top: 0; left: 0;
      transform: translate(-50%,-50%);
      transition: width 0.25s ease, height 0.25s ease,
                  border-color 0.25s ease, background 0.25s ease,
                  opacity 0.3s ease;
      mix-blend-mode: normal;
      background: rgba(0,212,255,0.04);
      box-shadow: 0 0 16px rgba(0,212,255,0.15), inset 0 0 8px rgba(0,212,255,0.08);
    }
    .cf-inner {
      position: fixed;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #00D4FF;
      pointer-events: none;
      z-index: 99999;
      top: 0; left: 0;
      transform: translate(-50%,-50%);
      box-shadow: 0 0 10px rgba(0,212,255,0.8);
      transition: width 0.2s ease, height 0.2s ease, opacity 0.3s ease;
    }
    @media (hover: none) {
      .cf-outer, .cf-inner { display: none; }
    }
  `]
})
export class CursorFollowerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('outer') outerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('inner') innerRef!: ElementRef<HTMLDivElement>;

  private mouseX = -200;
  private mouseY = -200;
  private outerX = -200;
  private outerY = -200;
  private rafId: number | null = null;
  private mouseMoveHandler!: (e: MouseEvent) => void;
  private mouseEnterHandler!: () => void;
  private mouseLeaveHandler!: () => void;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const outer = this.outerRef.nativeElement;
    const inner = this.innerRef.nativeElement;

    this.mouseMoveHandler = (e: MouseEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      // Inner follows instantly
      inner.style.left = `${e.clientX}px`;
      inner.style.top  = `${e.clientY}px`;
    };

    this.mouseEnterHandler = () => {
      outer.style.width  = '64px';
      outer.style.height = '64px';
      outer.style.borderColor = 'rgba(0,212,255,0.7)';
      outer.style.background  = 'rgba(0,212,255,0.08)';
      inner.style.width  = '4px';
      inner.style.height = '4px';
    };

    this.mouseLeaveHandler = () => {
      outer.style.width  = '44px';
      outer.style.height = '44px';
      outer.style.borderColor = 'rgba(0,212,255,0.45)';
      outer.style.background  = 'rgba(0,212,255,0.04)';
      inner.style.width  = '6px';
      inner.style.height = '6px';
    };

    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', this.mouseMoveHandler);

      // Expand on interactive elements
      document.querySelectorAll('a, button, [role="button"], input').forEach(el => {
        el.addEventListener('mouseenter', this.mouseEnterHandler);
        el.addEventListener('mouseleave', this.mouseLeaveHandler);
      });

      // Lerp animation loop
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const loop = () => {
        this.outerX = lerp(this.outerX, this.mouseX, 0.1);
        this.outerY = lerp(this.outerY, this.mouseY, 0.1);
        outer.style.left = `${this.outerX}px`;
        outer.style.top  = `${this.outerY}px`;
        this.rafId = requestAnimationFrame(loop);
      };
      this.rafId = requestAnimationFrame(loop);
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }
}
