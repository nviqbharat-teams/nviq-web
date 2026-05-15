import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('./pages/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about-page.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact-page.component').then(m => m.ContactPageComponent)
  },
  // Dedicated Mutual Fund page — no GPS data, no route-param guessing
  {
    path: 'mutual-fund',
    loadComponent: () =>
      import('./pages/mutual-fund/mutual-fund-page.component').then(m => m.MutualFundPageComponent)
  },
  // Redirect legacy URL to canonical route
  {
    path: 'products/mutual-fund',
    redirectTo: '/mutual-fund',
    pathMatch: 'full'
  },
  // GPS / FASTag / Drone — shared ProductDetailComponent, reads URL on init
  {
    path: 'product/gps-fleet-tracking',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'products/gps-tracking',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'products/fastag',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'products/drone',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  { path: '**', redirectTo: '' }
];