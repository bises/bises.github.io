import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EDUCATION, TEACHING } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [NgFor, NgIf, RevealDirective],
  template: `
    <section id="education" class="bg-surface px-6 py-24">
      <div class="mx-auto max-w-4xl">
        <div appReveal class="mb-16 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Education</p>
          <h2 class="text-3xl font-extrabold text-text md:text-4xl">Education & Teaching</h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <!-- Education Cards -->
          <div class="space-y-4">
            <h3 appReveal class="mb-4 text-lg font-bold text-text">Degrees</h3>
            <div
              *ngFor="let edu of education; let i = index"
              appReveal
              [appRevealDelay]="i * 100"
              class="rounded-2xl border border-border bg-surface-alt p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div class="mb-2 flex items-center gap-3">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-base font-bold text-text">{{ edu.degree }}</h4>
                  <p class="text-sm text-primary font-semibold">{{ edu.field }}</p>
                </div>
              </div>
              <p class="text-sm text-text-muted">{{ edu.school }} · {{ edu.location }}</p>
              <p class="text-xs text-text-light">{{ edu.period }}</p>
              <p *ngIf="edu.gpa" class="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-medium text-emerald-700">
                GPA: {{ edu.gpa }}
              </p>
            </div>
          </div>

          <!-- Teaching -->
          <div>
            <h3 appReveal class="mb-4 text-lg font-bold text-text">Teaching</h3>
            <div appReveal [appRevealDelay]="200" class="rounded-2xl border border-border bg-surface-alt p-6 transition-all hover:shadow-md hover:-translate-y-0.5">
              <div class="mb-3 flex items-center gap-3">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg class="h-5 w-5 text-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-base font-bold text-text">{{ teaching.title }}</h4>
                  <p class="text-sm text-accent font-semibold">{{ teaching.school }}</p>
                </div>
              </div>
              <p class="mb-1 text-xs text-text-light">{{ teaching.period }} · {{ teaching.location }}</p>
              <p class="mb-4 text-sm text-text-muted">{{ teaching.description }}</p>
              <div class="space-y-2">
                <div *ngFor="let course of teaching.courses" class="flex items-center gap-2 text-sm text-text-muted">
                  <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"></span>
                  {{ course }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {
  education = EDUCATION;
  teaching = TEACHING;
}
