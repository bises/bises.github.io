import { Component } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ContactComponent } from './sections/contact/contact.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';

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
      <!-- Wave: Hero → About -->
      <div class="bg-dark -mb-px">
        <svg class="block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style="height: 60px;">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" class="fill-surface"/>
        </svg>
      </div>
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-certifications />
      <app-education />
      <!-- Wave: Education → Contact -->
      <div class="bg-surface -mb-px">
        <svg class="block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style="height: 60px;">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" class="fill-dark"/>
        </svg>
      </div>
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
