import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="about" class="bg-surface px-6 py-24">
      <div class="mx-auto max-w-6xl">
        <div appReveal class="mb-12 text-center">
          <p class="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">About Me</p>
          <h2 class="text-3xl font-extrabold md:text-4xl gradient-heading">Who I Am</h2>
        </div>

        <div appReveal [appRevealDelay]="200" class="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <!-- Left: Summary text -->
          <div class="space-y-5">
            <p class="text-lg leading-relaxed text-text-muted">
              I'm a Senior Software Engineer with deep expertise in
              <span class="font-semibold text-text">identity & access management</span>,
              <span class="font-semibold text-text">AI-powered developer tooling</span>, and
              <span class="font-semibold text-text">modern web architectures</span>.
            </p>
            <p class="leading-relaxed text-text-muted">
              From building MCP servers that power AI agentic workflows to migrating enterprise
              identity platforms from Ping Identity to Auth0, I focus on high-impact engineering
              that scales. I'm passionate about mentoring, open-source, and continuous learning.
            </p>
            <p class="leading-relaxed text-text-muted">
              Originally from <span class="font-semibold text-text">Nepal</span>, I hold a Master's degree
              from Lamar University with a perfect 4.0 GPA. Outside of code, I'm always exploring
              new technologies, earning certifications, and teaching others.
            </p>
          </div>

          <!-- Right: Quick facts -->
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-xl border border-border bg-surface-alt p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
              <p class="text-3xl font-extrabold text-primary">7+</p>
              <p class="mt-1 text-sm text-text-muted">Years of Experience</p>
            </div>
            <div class="rounded-xl border border-border bg-surface-alt p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
              <p class="text-3xl font-extrabold text-primary">4</p>
              <p class="mt-1 text-sm text-text-muted">Companies Worked</p>
            </div>
            <div class="rounded-xl border border-border bg-surface-alt p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
              <p class="text-3xl font-extrabold text-primary">3</p>
              <p class="mt-1 text-sm text-text-muted">Certifications</p>
            </div>
            <div class="rounded-xl border border-border bg-surface-alt p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
              <p class="text-3xl font-extrabold text-primary">16</p>
              <p class="mt-1 text-sm text-text-muted">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  profile = PROFILE;
}
