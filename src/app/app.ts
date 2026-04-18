import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent],
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    
    <router-outlet></router-outlet>
    
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'NViQ';
}