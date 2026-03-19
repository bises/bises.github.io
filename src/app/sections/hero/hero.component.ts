import { NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
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

      <!-- Dot pattern overlay -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px); background-size: 32px 32px;">
      </div>

      <div class="relative z-10 mx-auto max-w-3xl text-center">
        <!-- Profile Photo -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <!-- Glow effect behind ring -->
            <div class="profile-ring-glow absolute -inset-1 rounded-full"></div>
            <!-- Gradient ring -->
            <div class="profile-ring relative h-36 w-36 rounded-full p-[3px] md:h-44 md:w-44">
              <img
                src="assets/profile.jpg"
                alt="Bishesh Acharya"
                class="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

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

        <!-- Typing animation -->
        <div class="mb-8 flex h-8 items-center justify-center">
          <span class="text-base text-accent md:text-lg font-medium">{{ typedText() }}</span>
          <span class="ml-0.5 inline-block h-5 w-[2px] animate-typing-cursor bg-accent"></span>
        </div>

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
export class HeroComponent implements OnInit, OnDestroy {
  profile = PROFILE;
  typedText = signal('');

  private roles = [
    'Auth0 Certified Developer',
    'AI & Identity Platform Specialist',
    'IAM & Security Engineer',
    'Full-Stack Developer',
    'MCP Server Builder',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private tick() {
    const currentRole = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.typedText.set(currentRole.substring(0, this.charIndex));
    } else {
      this.charIndex++;
      this.typedText.set(currentRole.substring(0, this.charIndex));
    }

    let delay = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      delay = 2000; // pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 500; // pause before next word
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
}
