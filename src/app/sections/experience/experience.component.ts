import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [NgFor, RevealDirective],
  template: `
    <section id="experience" class="bg-surface-alt px-6 py-24">
      <div class="mx-auto max-w-5xl">
        <div appReveal class="mb-16 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Career</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Professional Experience</h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-6 top-0 bottom-0 hidden w-px bg-border md:left-1/2 md:block"></div>

          <div *ngFor="let exp of experiences; let i = index; let even = even" appReveal [appRevealDelay]="i * 100">
            <div class="relative mb-12 md:flex" [class.md:flex-row-reverse]="!even">
              <!-- Timeline dot -->
              <div class="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-surface md:left-1/2 md:block"></div>

              <!-- Spacer -->
              <div class="hidden md:block md:w-1/2"></div>

              <!-- Card -->
              <div class="md:w-1/2" [class.md:pr-12]="even" [class.md:pl-12]="!even">
                <div class="group rounded-2xl border border-border bg-surface p-6 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  <div class="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 class="text-lg font-bold text-text">{{ exp.title }}</h3>
                      <p class="text-sm font-semibold text-primary">{{ exp.company }}</p>
                    </div>
                    <span class="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {{ exp.type }}
                    </span>
                  </div>

                  <div class="mb-4 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                    <span>{{ exp.period }}</span>
                    <span class="text-border">·</span>
                    <span>{{ exp.location }}</span>
                  </div>

                  <p class="mb-4 text-sm leading-relaxed text-text-muted">{{ exp.description }}</p>

                  <ul class="mb-4 space-y-2">
                    <li *ngFor="let h of exp.highlights" class="flex gap-2 text-sm text-text-muted">
                      <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"></span>
                      {{ h }}
                    </li>
                  </ul>

                  <div class="flex flex-wrap gap-1.5">
                    <span *ngFor="let t of exp.tech"
                      class="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-medium text-text-muted">
                      {{ t }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
