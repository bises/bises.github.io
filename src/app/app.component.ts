import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { EducationComponent } from './sections/education/education.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-certifications />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
