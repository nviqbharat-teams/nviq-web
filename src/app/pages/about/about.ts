import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {

  team = [
    {
      initials: 'RK',
      name: 'Rahul Kapoor',
      role: 'Co-Founder & CEO',
      bio: 'Former logistics head at Mahindra Logistics. 12 years building fleet operations from the ground up.',
      color: '#38bdf8'
    },
    {
      initials: 'PS',
      name: 'Priya Sharma',
      role: 'Co-Founder & CTO',
      bio: 'Ex-Google engineer. Built real-time systems at scale. Passionate about turning raw data into decisions.',
      color: '#a78bfa'
    },
    {
      initials: 'AM',
      name: 'Anjali Mehta',
      role: 'Head of Product',
      bio: 'Product lead with 8 years at B2B SaaS companies. Obsessed with making complex tools feel effortless.',
      color: '#22c55e'
    },
    {
      initials: 'VN',
      name: 'Vikram Nair',
      role: 'Head of Sales',
      bio: 'Sold fleet solutions across 5 Indian states. Knows every pain point fleet managers face personally.',
      color: '#f59e0b'
    },
    {
      initials: 'SP',
      name: 'Suresh Patil',
      role: 'Lead Engineer',
      bio: 'Full-stack engineer with expertise in real-time geospatial systems and IoT device communication.',
      color: '#f43f5e'
    },
    {
      initials: 'DG',
      name: 'Deepa Gupta',
      role: 'Customer Success',
      bio: 'Ensures every client gets maximum value. Personally onboards every new Enterprise customer.',
      color: '#38bdf8'
    }
  ];

  milestones = [
    { year: '2020', title: 'Founded in Mumbai', desc: 'NViQ started in a co-working space in BKC with 2 founders and 1 customer.' },
    { year: '2021', title: '100 Vehicles Milestone', desc: 'Reached our first 100 vehicles tracked and closed our seed round of ₹2Cr.' },
    { year: '2022', title: 'WhatsApp Integration', desc: 'Launched industry-first WhatsApp alert system. Adoption jumped 3x overnight.' },
    { year: '2023', title: '5,000 Vehicles & Series A', desc: 'Crossed 5,000 vehicles and raised ₹12Cr Series A from Blume Ventures.' },
    { year: '2024', title: 'AI-Powered Insights', desc: 'Launched AI anomaly detection for fuel and driver behavior. 340+ businesses onboard.' },
    { year: '2025', title: 'Pan-India Expansion', desc: '10,000+ vehicles tracked across 18 states. Expanding to Southeast Asia.' }
  ];

  values = [
    { icon: '🎯', title: 'Clarity over complexity', desc: 'Fleet data is complex. Our job is to simplify it into actions you can take today.' },
    { icon: '🤝', title: 'Customers first, always', desc: 'Every feature we build starts with a real customer problem. No vanity features.' },
    { icon: '⚡', title: 'Speed matters', desc: 'In fleet ops, a 5-minute delay in an alert can mean an accident or a theft. We optimize for real-time.' },
    { icon: '🇮🇳', title: 'Built for India', desc: 'Indian roads, Indian regulations, Indian languages. We\'re not a foreign product adapted for India — we\'re Indian-first.' }
  ];
}