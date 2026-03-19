import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS, SIDE_PROJECTS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, RevealDirective],
  template: `
    <section id="projects" class="bg-surface-alt px-6 py-24">
      <div class="mx-auto max-w-6xl">
        <div appReveal class="mb-16 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Work</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Featured Projects</h2>
        </div>

        <!-- Professional Projects -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            *ngFor="let project of projects; let i = index"
            appReveal
            [appRevealDelay]="i * 80"
            class="group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div class="relative h-48 overflow-hidden bg-surface-elevated">
              <img
                [src]="project.image"
                [alt]="project.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
            <div class="p-5">
              <h3 class="mb-2 text-base font-bold text-text">{{ project.title }}</h3>
              <p class="mb-4 text-sm leading-relaxed text-text-muted">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let t of project.tech"
                  class="rounded-md bg-surface-elevated px-2 py-0.5 text-xs font-medium text-text-muted">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Side Projects -->
        <div appReveal class="mt-20 mb-10 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">Open Source</p>
          <h3 class="text-2xl font-extrabold md:text-3xl gradient-heading">Side Projects</h3>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            *ngFor="let project of sideProjects; let i = index"
            appReveal
            [appRevealDelay]="i * 80"
            class="group rounded-2xl border border-border bg-surface p-6 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div class="mb-4 flex items-center justify-between">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated text-text-muted">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <a *ngIf="project.github" [href]="project.github" target="_blank" rel="noopener"
                class="inline-flex items-center gap-1.5 rounded-full bg-surface-elevated px-3 py-1 text-xs font-medium text-text-muted transition-colors hover:text-primary hover:bg-primary/10">
                View on GitHub
                <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                </svg>
              </a>
            </div>
            <h3 class="mb-2 text-base font-bold text-text">{{ project.title }}</h3>
            <p class="mb-4 text-sm leading-relaxed text-text-muted">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span *ngFor="let t of project.tech"
                class="rounded-md bg-surface-elevated px-2 py-0.5 text-xs font-medium text-text-muted">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects = PROJECTS;
  sideProjects = SIDE_PROJECTS;
}
