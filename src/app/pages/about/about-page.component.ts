import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from '../../components/about/about-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutSectionComponent],
  template: `
    <div class="about-page-root">
      <app-about-section></app-about-section>
    </div>
  `,
  styles: [`
    .about-page-root {
      background: #0f172a;
      min-height: 100vh;
    }
  `]
})
export class AboutPageComponent {}
