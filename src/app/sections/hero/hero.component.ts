import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
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
          <a href="assets/Bishesh_Acharya_Resume.pdf" download class="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-dark transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
            Resume
          </a>
        </div>

        <!-- Stats -->
        <div #statsContainer class="grid grid-cols-3 gap-6">
          <div *ngFor="let stat of animatedStats()" class="text-center">
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
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  profile = PROFILE;
  typedText = signal('');
  animatedStats = signal(
    PROFILE.stats.map(s => ({ value: '0' + s.value.replace(/\d+/, ''), label: s.label }))
  );

  @ViewChild('statsContainer') statsContainer!: ElementRef;

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

  private statsAnimated = false;

  ngOnInit() {
    this.tick();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this.statsAnimated) {
        this.statsAnimated = true;
        this.animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(this.statsContainer.nativeElement);
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

  private animateCounters() {
    PROFILE.stats.forEach((stat, i) => {
      const match = stat.value.match(/^(\d+)(.*)$/);
      const target = match ? +match[1] : 0;
      const suffix = match ? match[2] : '';
      const duration = 1500;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        const arr = [...this.animatedStats()];
        arr[i] = { value: current + suffix, label: stat.label };
        this.animatedStats.set(arr);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }
}
