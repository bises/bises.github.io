import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, NgFor],
  template: `
    <nav
      [ngClass]="{
        'bg-white/80 shadow-sm backdrop-blur-xl border-b border-border': scrolled(),
        'bg-transparent': !scrolled()
      }"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" class="text-lg font-bold tracking-tight" [ngClass]="{'text-dark': scrolled(), 'text-white': !scrolled()}">
          BA<span class="text-primary">.</span>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden items-center gap-8 md:flex">
          <li *ngFor="let link of navLinks">
            <a
              [href]="'#' + link.id"
              class="text-sm font-medium transition-colors hover:text-primary"
              [ngClass]="{'text-dark-muted': scrolled(), 'text-white/70 hover:text-white': !scrolled()}"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile hamburger -->
        <button
          class="flex flex-col gap-1.5 md:hidden"
          (click)="mobileOpen.set(!mobileOpen())"
          aria-label="Toggle menu"
        >
          <span class="block h-0.5 w-6 transition-all" [ngClass]="scrolled() ? 'bg-dark' : 'bg-white'"></span>
          <span class="block h-0.5 w-6 transition-all" [ngClass]="scrolled() ? 'bg-dark' : 'bg-white'"></span>
          <span class="block h-0.5 w-4 transition-all" [ngClass]="scrolled() ? 'bg-dark' : 'bg-white'"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (mobileOpen()) {
        <div class="border-t border-border bg-white px-6 py-4 md:hidden">
          <ul class="flex flex-col gap-3">
            <li *ngFor="let link of navLinks">
              <a
                [href]="'#' + link.id"
                class="block text-sm font-medium text-dark-muted transition-colors hover:text-primary"
                (click)="mobileOpen.set(false)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'recognitions', label: 'Recognitions' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
