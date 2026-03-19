import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-certifications',
  imports: [NgFor, NgIf, RevealDirective],
  template: `
    <section id="certifications" class="bg-surface px-6 py-24">
      <div class="mx-auto max-w-4xl">
        <div appReveal class="mb-16 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Credentials</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Certifications</h2>
        </div>

        <div class="space-y-4">
          <div
            *ngFor="let cert of certifications; let i = index"
            appReveal
            [appRevealDelay]="i * 100"
            class="group flex items-center gap-5 rounded-2xl border border-border bg-surface-alt p-6 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30"
          >
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base font-bold text-text">{{ cert.name }}</h3>
              <p class="text-sm text-text-muted">{{ cert.issuer }} · {{ cert.year }}</p>
            </div>
            <span *ngIf="cert.status"
              class="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              {{ cert.status }}
            </span>
            <span *ngIf="!cert.status"
              class="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CertificationsComponent {
  certifications = CERTIFICATIONS;
}
