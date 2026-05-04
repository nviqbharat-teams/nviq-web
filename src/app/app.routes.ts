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
      import('./pricing/pricing').then(m => m.PricingComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products').then(m => m.ProductsComponent)
  },
  {
    path: 'products/mutual-fund',
    loadComponent: () =>
      import('./components/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  {
    path: 'products/gps-tracking',
    loadComponent: () =>
      import('./components/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  {
    path: 'products/fastag',
    loadComponent: () =>
      import('./components/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  {
    path: 'products/drone',
    loadComponent: () =>
      import('./components/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  { path: '**', redirectTo: '' }
];