import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [NgFor, RevealDirective],
  template: `
    <section id="projects" class="bg-surface-alt px-6 py-24">
      <div class="mx-auto max-w-6xl">
        <div appReveal class="mb-16 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">Work</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Featured Projects</h2>
        </div>

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
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects = PROJECTS;
}
