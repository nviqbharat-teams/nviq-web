import {
  Directive, ElementRef, Input, OnInit, OnDestroy, NgZone
} from '@angular/core';

export type RevealDir = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  /** Direction the element slides in from */
  @Input('appReveal') dir: RevealDir = 'up';
  /** Delay before animation starts (ms) */
  @Input() revealDelay  = 0;
  /** Animation duration (ms) */
  @Input() revealDur    = 680;
  /** How much of the element must be visible before triggering */
  @Input() revealThresh = 0.12;

  private observer!: IntersectionObserver;
  private el!: HTMLElement;

  constructor(private elRef: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.el = this.elRef.nativeElement;
    this.applyHidden();

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => this.reveal(), this.revealDelay);
              this.observer.unobserve(this.el);
            }
          });
        },
        { threshold: this.revealThresh }
      );
      this.observer.observe(this.el);
    });
  }

  private applyHidden(): void {
    const transforms: Record<RevealDir, string> = {
      up:    'translateY(48px)',
      down:  'translateY(-48px)',
      left:  'translateX(-56px)',
      right: 'translateX(56px)',
      scale: 'scale(0.88)',
      fade:  'none',
    };
    this.el.style.opacity   = '0';
    this.el.style.transform = transforms[this.dir] ?? 'translateY(48px)';
    this.el.style.transition =
      `opacity ${this.revealDur}ms cubic-bezier(0.22,1,0.36,1),
       transform ${this.revealDur}ms cubic-bezier(0.22,1,0.36,1)`;
    this.el.style.willChange = 'opacity, transform';
  }

  private reveal(): void {
    this.el.style.opacity   = '1';
    this.el.style.transform = 'none';
    // Clean up will-change after animation
    setTimeout(() => { this.el.style.willChange = 'auto'; }, this.revealDur + 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
