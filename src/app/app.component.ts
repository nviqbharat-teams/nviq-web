import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutSectionComponent } from './components/about/about-section.component';
import { TeamSectionComponent } from './components/team/team-section.component';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeadModalComponent } from './components/lead-modal/lead-modal.component';
import { RabbitLoaderComponent } from './components/rabbit-loader/rabbit-loader.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HomeSliderComponent,
    ProductsPageComponent,
    ProductDetailComponent,
    AboutSectionComponent,
    TeamSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    LeadModalComponent,
    RabbitLoaderComponent,
    CursorFollowerComponent,
  ],
  template: `
    <!-- Loading screen -->
    <div *ngIf="loading">
      <app-rabbit-loader [duration]="3600" [fullScreen]="true"></app-rabbit-loader>
    </div>

    <!-- App shell -->
    <ng-container *ngIf="!loading">
      <app-cursor-follower></app-cursor-follower>
      <app-navbar></app-navbar>

      <!-- NavService SPA pages (URL = "/") -->
      <main *ngIf="!isRouterPage" class="app-main" [class.home-main]="page === 'home'">
        <div *ngIf="page === 'home'"           class="pw"><app-home-slider></app-home-slider></div>
        <div *ngIf="page === 'products'"       class="pw"><app-products-page></app-products-page></div>
        <div *ngIf="page === 'product-detail'" class="pw">
          <app-product-detail></app-product-detail>
        </div>
        <div *ngIf="page === 'about'"   class="pw"><app-about-section></app-about-section></div>
        <div *ngIf="page === 'team'"    class="pw"><app-team-section></app-team-section></div>
        <div *ngIf="page === 'contact'" class="pw"><app-contact-section></app-contact-section></div>
      </main>

      <!-- Router pages (URL = "/mutual-fund", "/products/gps-tracking", etc.) -->
      <main *ngIf="isRouterPage" class="app-main">
        <router-outlet></router-outlet>
      </main>

      <app-footer *ngIf="page !== 'home' || isRouterPage"></app-footer>
      <app-lead-modal [open]="nav.modalOpen()" (closeModal)="nav.closeModal()"></app-lead-modal>
    </ng-container>
  `,
  styles: [`
    .app-main {
      padding-top: 88px;
      min-height: calc(100vh - 88px);
      background: #0A0A0A;
    }
    .home-main { padding-top: 0; min-height: 100vh; }

    .pw { animation: pwEnter 0.45s cubic-bezier(0.22,1,0.36,1) both; }
    @keyframes pwEnter {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: none; }
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  loading      = true;
  isRouterPage = false;

  private timer:     ReturnType<typeof setTimeout> | null = null;
  private routerSub?: Subscription;

  constructor(public nav: NavService, private router: Router) {}

  get page() { return this.nav.page(); }

  ngOnInit(): void {
    this.timer = setTimeout(() => { this.loading = false; }, 4000);

    // Determine if current URL is a router-managed page (anything other than "/")
    this.isRouterPage = this.router.url !== '/';
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isRouterPage = (e as NavigationEnd).urlAfterRedirects !== '/';
    });
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
    this.routerSub?.unsubscribe();
  }
}
