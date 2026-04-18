import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Live updating stats
  vehiclesTracked = 9987;
  savedAmount = 2.38;
  businessCount = 337;
  uptimePct = 99.9;

  private interval: any;

  // Pricing toggle
  isAnnual = false;

  // Pricing plans
  plans = [
    {
      name: 'Starter',
      price: 300,
      desc: 'Perfect for small fleets getting started',
      popular: false,
      features: [
        'Up to 10 vehicles',
        'Live GPS tracking',
        'Basic alerts (overspeed, idle)',
        'Email reports',
        'Mobile app access',
        '8×5 email support'
      ]
    },
    {
      name: 'Growth',
      price: 500,
      desc: 'For growing businesses that need insights',
      popular: true,
      features: [
        'Up to 50 vehicles',
        'All Starter features',
        'Driver behavior scoring',
        'WhatsApp reports',
        'Geofencing (unlimited zones)',
        'Fuel consumption analytics',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: 800,
      desc: 'For large fleets demanding full control',
      popular: false,
      features: [
        'Unlimited vehicles',
        'Custom integrations & API',
        'Dedicated account manager',
        'SLA guarantee (99.9%)',
        'Advanced analytics dashboard',
        'White-label options',
        '24×7 phone support'
      ]
    }
  ];

  // Features
  features = [
    {
      icon: '📍',
      title: 'Live GPS Tracking',
      desc: 'Real-time map with 5-second refresh. See every vehicle exactly where it is, right now.',
      color: '#38bdf8'
    },
    {
      icon: '🧠',
      title: 'Driver Behavior Analytics',
      desc: 'Speed, harsh braking, idle scoring. Know who your best and worst drivers are.',
      color: '#a78bfa'
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      desc: 'Overspeed, geofence breach, engine idle. Get notified instantly on WhatsApp.',
      color: '#f59e0b'
    },
    {
      icon: '📊',
      title: 'Automated Reports',
      desc: 'Daily and weekly PDF reports delivered to your inbox automatically.',
      color: '#22c55e'
    },
    {
      icon: '💬',
      title: 'WhatsApp Updates',
      desc: 'Route summaries sent directly to managers. No app needed on their end.',
      color: '#25d366'
    },
    {
      icon: '⛽',
      title: 'Fuel Intelligence',
      desc: 'Anomaly detection flags suspicious consumption. Save up to 25% on fuel costs.',
      color: '#f43f5e'
    }
  ];

  // Pain points
  painPoints = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"><path d="M3 3h18M3 9h18M3 15h10"/><path d="M19 15l-4 4m4 0l-4-4" stroke="#f59e0b"/></svg>`,
      title: 'Fuel Bleeding',
      desc: 'No visibility into idle time or inefficient routes. Fuel costs silently eating your margins.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>`,
      title: 'Ghost Vehicles',
      desc: 'Vehicles sitting idle at unknown locations. Assets worth crores generating zero revenue.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Driver Misuse',
      desc: 'After-hours trips, speeding, unauthorized stops. No accountability without visibility.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"><path d="M1 6s4-2 11-2 11 2 11 2"/><path d="M1 12s4-2 11-2 11 2 11 2"/><path d="M1 18s4-2 11-2 11 2 11 2"/></svg>`,
      title: 'Zero Visibility',
      desc: 'You call drivers for updates instead of seeing live data. That\'s 2010 thinking.'
    }
  ];

  ngOnInit() {
    // Animate the live stats on the landing page
    this.interval = setInterval(() => {
      this.vehiclesTracked += Math.floor(Math.random() * 3);
      this.savedAmount = parseFloat((this.savedAmount + 0.001).toFixed(3));
      if (Math.random() > 0.95) this.businessCount++;
    }, 2500);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  togglePricing() {
    this.isAnnual = !this.isAnnual;
  }

  getPrice(basePrice: number): number {
    return this.isAnnual ? Math.round(basePrice * 0.9) : basePrice;
  }
}