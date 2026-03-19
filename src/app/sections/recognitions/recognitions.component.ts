import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AWARDS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-recognitions',
  imports: [NgFor, NgIf, RevealDirective],
  template: `
    <section id="recognitions" class="bg-surface-alt px-6 py-24">
      <div class="mx-auto max-w-6xl">
        <div appReveal class="mb-6 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Recognition</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Awards & Achievements</h2>
        </div>

        <p appReveal [appRevealDelay]="100" class="mx-auto mb-12 max-w-2xl text-center text-sm text-text-muted">
          Recognized across multiple years for engineering excellence, delivery impact, and team collaboration.
          Scroll through or click to enlarge.
        </p>

        <!-- Masonry-style Grid -->
        <div appReveal [appRevealDelay]="200" class="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <div
            *ngFor="let award of awards; let i = index"
            class="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-lg hover:-translate-y-0.5"
            (click)="openLightbox(i)"
          >
            <img
              [src]="award.image"
              [alt]="award.alt"
              loading="lazy"
              class="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Overlay -->
    <div
      *ngIf="lightboxOpen()"
      class="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      (click)="closeLightbox()"
    >
      <button
        class="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        (click)="closeLightbox()"
        aria-label="Close"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Prev/Next -->
      <button
        class="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        (click)="prev($event)"
        aria-label="Previous"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>
      </button>

      <img
        [src]="awards[lightboxIndex()].image"
        [alt]="awards[lightboxIndex()].alt"
        class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        (click)="$event.stopPropagation()"
      />

      <button
        class="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        (click)="next($event)"
        aria-label="Next"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
        </svg>
      </button>

      <div class="absolute bottom-6 text-sm text-white/60">
        {{ lightboxIndex() + 1 }} / {{ awards.length }}
      </div>
    </div>
  `,
})
export class RecognitionsComponent {
  awards = AWARDS;
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
  }

  prev(event: Event) {
    event.stopPropagation();
    this.lightboxIndex.update(i => (i - 1 + this.awards.length) % this.awards.length);
  }

  next(event: Event) {
    event.stopPropagation();
    this.lightboxIndex.update(i => (i + 1) % this.awards.length);
  }
}
