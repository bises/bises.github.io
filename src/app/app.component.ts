import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgFor]
})
export class AppComponent {
  title = 'Bishesh Acharya';

  projects = [
    { image: 'assets/angular.png', title: 'Angular Application', description: 'Enterprise Angular application with modular architecture and best practices.' },
    { image: 'assets/microfrontend.png', title: 'Micro Frontend', description: 'Micro frontend architecture enabling independent team deployments.' },
    { image: 'assets/covid.png', title: 'COVID Tracker', description: 'Real-time COVID-19 data tracking and visualization dashboard.' },
    { image: 'assets/credit.png', title: 'Credit Application', description: 'Credit processing system with automated workflows.' },
    { image: 'assets/split.png', title: 'Split Testing', description: 'A/B testing platform for feature experimentation and rollout.' },
    { image: 'assets/git.png', title: 'Git Workflow', description: 'Streamlined Git branching strategy and CI/CD pipelines.' },
    { image: 'assets/tfs.png', title: 'TFS Migration', description: 'Large-scale migration from TFS to modern Git-based workflows.' },
    { image: 'assets/pbd.png', title: 'PBD Platform', description: 'Platform-based development enabling rapid feature delivery.' },
    { image: 'assets/lcss.PNG', title: 'LCSS System', description: 'Low-code self-service system for business operations.' },
    { image: 'assets/transaction.PNG', title: 'Transaction System', description: 'High-throughput transaction processing platform.' },
  ];

  awards = Array.from({ length: 16 }, (_, i) => ({
    image: `assets/recognitions/award${i + 1}.PNG`,
    alt: `Recognition Award ${i + 1}`
  }));

  skills = [
    'Angular', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx',
    'Node.js', 'HTML5', 'CSS3/SCSS', 'REST APIs', 'GraphQL',
    'Git', 'CI/CD', 'Docker', 'AWS', 'Agile/Scrum',
    'Micro Frontends', 'Web Performance', 'Unit Testing'
  ];
}
