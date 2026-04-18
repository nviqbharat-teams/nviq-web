import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/pricing').then(m => m.PricingComponent) // ✅ FIXED
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];