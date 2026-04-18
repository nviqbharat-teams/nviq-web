import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  // Form state
  formData = {
    name: '',
    company: '',
    phone: '',
    email: '',
    vehicles: '',
    message: '',
    plan: 'Growth'
  };

  submitted = signal(false);
  submitting = signal(false);

  plans = ['Starter (₹300/vehicle/mo)', 'Growth (₹500/vehicle/mo)', 'Enterprise (₹800/vehicle/mo)', 'Just exploring'];

  vehicleRanges = ['1–10 vehicles', '11–50 vehicles', '51–200 vehicles', '200+ vehicles'];

  faqs = [
    {
      q: 'How long does installation take?',
      a: 'Our GPS device installation takes 30–45 minutes per vehicle. We have certified installers across 18 Indian states. We handle the entire setup.',
      open: false
    },
    {
      q: 'Is there a minimum contract period?',
      a: 'No long-term contracts required. You pay month-to-month. Annual plans get 10% off and are billed upfront.',
      open: false
    },
    {
      q: 'What happens during internet downtime?',
      a: 'Our devices buffer up to 72 hours of data locally. Once connectivity is restored, all data syncs automatically with zero loss.',
      open: false
    },
    {
      q: 'Do you support WhatsApp in all languages?',
      a: 'We currently support English, Hindi, and Marathi for WhatsApp alerts. More regional languages coming in 2025.',
      open: false
    },
    {
      q: 'Can I add or remove vehicles mid-month?',
      a: 'Yes. You\'re billed only for active vehicles. Add or remove anytime and your next invoice is prorated automatically.',
      open: false
    }
  ];

  offices = [
    { city: 'Mumbai (HQ)', address: 'Level 8, One BKC, Bandra Kurla Complex, Mumbai 400051', phone: '+91 22 4896 3200' },
    { city: 'Pune', address: 'WeWork Vaishnavi Tech Square, Bangalore – Pune Hwy, Pune 411045', phone: '+91 20 6789 1200' },
    { city: 'Delhi NCR', address: 'DLF Cyber Park, Sector 20, Gurugram, Haryana 122022', phone: '+91 124 456 7890' }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  submitForm() {
    this.submitting.set(true);
    // Simulate API call
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 1800);
  }

  resetForm() {
    this.submitted.set(false);
    this.formData = { name: '', company: '', phone: '', email: '', vehicles: '', message: '', plan: 'Growth' };
  }
}