import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-border bg-surface-alt px-6 py-8">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-text-muted">
          &copy; {{ year }} {{ profile.name }}. Built with Angular & Tailwind CSS.
        </p>
        <div class="flex gap-6">
          <a href="{{ profile.github }}" target="_blank" rel="noopener" class="text-sm text-text-muted transition-colors hover:text-primary">GitHub</a>
          <a href="{{ profile.linkedin }}" target="_blank" rel="noopener" class="text-sm text-text-muted transition-colors hover:text-primary">LinkedIn</a>
          <a href="mailto:{{ profile.email }}" class="text-sm text-text-muted transition-colors hover:text-primary">Email</a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();
}
