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

        <div appReveal [appRevealDelay]="200" class="mx-auto max-w-3xl space-y-5">
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
            Outside of work, I love <span class="font-semibold text-text">hiking</span> and
            playing <span class="font-semibold text-text">ping pong</span>. I also run a
            home server setup with containers for <span class="font-semibold text-text">Immich</span>,
            a password manager, <span class="font-semibold text-text">local AI agents</span>,
            <span class="font-semibold text-text">Tailscale</span>, and more — always tinkering
            with self-hosted infrastructure in my free time.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  profile = PROFILE;
}
