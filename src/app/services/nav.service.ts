import { Injectable, signal } from '@angular/core';

export type Page = 'home' | 'products' | 'product-detail' | 'about' | 'team' | 'contact';
export type ProductKey = 'gps' | 'mf' | 'fastag' | 'drone';

@Injectable({ providedIn: 'root' })
export class NavService {
  page      = signal<Page>('home');
  product   = signal<ProductKey | null>(null);
  modalOpen = signal(false);

  go(page: Page, product?: ProductKey): void {
    this.page.set(page);
    this.product.set(product ?? null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }

  /** Open modal and pin which product context it belongs to. */
  openModalFor(product: ProductKey): void {
    this.product.set(product);
    this.modalOpen.set(true);
  }

  /** Generic open — keeps current product context (use openModalFor when possible). */
  openModal(): void  { this.modalOpen.set(true);  }
  closeModal(): void { this.modalOpen.set(false); }
}
