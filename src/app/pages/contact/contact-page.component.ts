import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSectionComponent } from '../../components/contact/contact-section.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactSectionComponent],
  template: `
    <div class="contact-page-root">
      <app-contact-section></app-contact-section>
    </div>
  `,
  styles: [`
    .contact-page-root {
      background: #0f172a;
      min-height: 100vh;
    }
  `]
})
export class ContactPageComponent {}
