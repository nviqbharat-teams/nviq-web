import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShowcaseComponent } from '../product-showcase/product-showcase.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ProductShowcaseComponent],
  template: `
    <div class="pp-wrap">
      <app-product-showcase></app-product-showcase>
    </div>
  `,
  styles: [
    `
      .pp-wrap {
        background: #0A0A0A;
      }
    `,
  ],
})
export class ProductsPageComponent {}
