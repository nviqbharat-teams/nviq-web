import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShowcaseComponent } from '../../components/product-showcase/product-showcase.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductShowcaseComponent],
  template: `
    <div class="products-page">
      <app-product-showcase></app-product-showcase>
    </div>
  `,
  styles: [`
    .products-page {
      padding-top: 80px;
      min-height: 100vh;
      background: #ffffff;
    }
  `]
})
export class ProductsComponent {}