import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [NgFor],
  template: `
    <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark px-6">
      <!-- Gradient orbs -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-[100px]"></div>
        <div class="absolute -right-20 bottom-40 h-96 w-96 rounded-full bg-accent/15 blur-[120px]"></div>
        <div class="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/10 blur-[80px]"></div>
      </div>

      <!-- Grid pattern overlay -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.03]"
        style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;">
      </div>

      <div class="relative z-10 mx-auto max-w-3xl text-center">
        <!-- Badge -->
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm">
          <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for opportunities
        </div>

        <h1 class="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
          {{ profile.name }}
        </h1>

        <p class="mb-2 text-xl font-semibold text-primary-light md:text-2xl">
          {{ profile.title }}
        </p>
        <p class="mb-8 text-base text-white/50 md:text-lg">
          {{ profile.tagline }}
        </p>

        <p class="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/40">
          {{ profile.summary }}
        </p>

        <!-- CTA Buttons -->
        <div class="mb-16 flex flex-wrap justify-center gap-4">
          <a href="#experience" class="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25">
            View Experience
          </a>
          <a href="#contact" class="rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5">
            Get in Touch
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div *ngFor="let stat of profile.stats" class="text-center">
            <div class="text-3xl font-extrabold text-white">{{ stat.value }}</div>
            <div class="mt-1 text-xs tracking-wide text-white/40 uppercase">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/20 p-1">
          <div class="h-2 w-1 animate-bounce rounded-full bg-white/40"></div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  profile = PROFILE;
}
