import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [NgFor, NgIf, RevealDirective],
  template: `
    <section id="experience" class="bg-surface-alt px-6 py-24">
      <div class="mx-auto max-w-5xl">
        <div appReveal class="mb-16 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Career</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Professional Experience</h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Gradient vertical line -->
          <div class="timeline-gradient-line absolute left-6 top-0 bottom-0 hidden w-[2px] md:left-1/2 md:-translate-x-px md:block"></div>

          <div *ngFor="let exp of experiences; let i = index; let even = even; let first = first" appReveal [appRevealDelay]="i * 100">
            <div class="relative mb-12 md:flex" [class.md:flex-row-reverse]="!even">
              <!-- Timeline dot -->
              <div class="absolute left-6 top-6 hidden md:left-1/2 md:block" style="transform: translateX(-50%);">
                <!-- Pulse ring for first/current role -->
                <div *ngIf="first" class="absolute -inset-2 rounded-full bg-accent/20 animate-[timeline-pulse_2s_ease-in-out_infinite]"></div>
                <div [class]="'relative h-4 w-4 rounded-full border-[2.5px] ' + (first ? 'border-accent bg-accent/20 shadow-[0_0_8px_rgba(245,158,11,0.4)]' : 'border-primary bg-surface')"></div>
              </div>

              <!-- Spacer -->
              <div class="hidden md:block md:w-1/2"></div>

              <!-- Card -->
              <div class="md:w-1/2" [class.md:pr-12]="even" [class.md:pl-12]="!even">
                <div class="group rounded-2xl border border-border bg-surface p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
                     [class.border-accent/20]="first">
                  <div class="mb-3 flex items-start justify-between gap-3">
                    <div class="flex items-start gap-3">
                      <!-- Company Logo -->
                      <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated overflow-hidden">
                        <img *ngIf="exp.company.includes('Rocket')"
                          src="assets/rkt-logo.ico"
                          alt="Rocket Mortgage"
                          class="h-8 w-8 object-contain"
                        />
                        <svg *ngIf="exp.company.includes('Microsoft')" class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="8.5" height="8.5" fill="#F25022"/>
                          <rect x="12.5" y="3" width="8.5" height="8.5" fill="#7FBA00"/>
                          <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00A4EF"/>
                          <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#FFB900"/>
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-lg font-bold text-text">{{ exp.title }}</h3>
                        <p class="text-sm font-semibold text-primary">{{ exp.company }}</p>
                      </div>
                    </div>
                    <span [class]="'shrink-0 rounded-full px-3 py-1 text-xs font-medium ' + (first ? 'bg-accent/10 text-accent-dark' : 'bg-primary/10 text-primary')">
                      {{ first ? 'Current' : exp.type }}
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
