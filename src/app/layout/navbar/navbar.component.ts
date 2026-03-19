import { NgClass, NgFor } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, NgFor],
  template: `
    <!-- Scroll progress bar -->
    <div class="fixed top-0 left-0 z-[60] h-[3px] scroll-progress" [style.width.%]="scrollProgress()"></div>

    <nav
      [ngClass]="{
        'bg-surface/80 shadow-sm backdrop-blur-xl border-b border-border': scrolled(),
        'bg-transparent': !scrolled()
      }"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" class="text-lg font-bold tracking-tight" [ngClass]="{'text-text': scrolled(), 'text-white': !scrolled()}">
          BA<span class="text-primary">.</span>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden items-center gap-8 md:flex">
          <li *ngFor="let link of navLinks">
            <a
              [href]="'#' + link.id"
              class="relative text-sm font-medium transition-colors hover:text-primary"
              [ngClass]="{
                'text-primary': activeSection() === link.id,
                'text-text-muted': scrolled() && activeSection() !== link.id,
                'text-white/70 hover:text-white': !scrolled() && activeSection() !== link.id
              }"
            >
              {{ link.label }}
              @if (activeSection() === link.id) {
                <span class="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"></span>
              }
            </a>
          </li>
          <li>
            <button (click)="toggleDarkMode()"
              class="rounded-lg p-2 transition-colors hover:bg-surface-elevated/50"
              [ngClass]="{'text-text-muted': scrolled(), 'text-white/70': !scrolled()}"
              aria-label="Toggle dark mode">
              @if (darkMode()) {
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              } @else {
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                </svg>
              }
            </button>
          </li>
        </ul>

        <!-- Mobile -->
        <div class="flex items-center gap-3 md:hidden">
          <button (click)="toggleDarkMode()" class="rounded-lg p-2"
            [ngClass]="{'text-text-muted': scrolled(), 'text-white/70': !scrolled()}"
            aria-label="Toggle dark mode">
            @if (darkMode()) {
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
              </svg>
            } @else {
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
              </svg>
            }
          </button>
          <button
            class="flex flex-col gap-1.5"
            (click)="mobileOpen.set(!mobileOpen())"
            aria-label="Toggle menu"
          >
            <span class="block h-0.5 w-6 transition-all" [ngClass]="scrolled() ? 'bg-text' : 'bg-white'"></span>
            <span class="block h-0.5 w-6 transition-all" [ngClass]="scrolled() ? 'bg-text' : 'bg-white'"></span>
            <span class="block h-0.5 w-4 transition-all" [ngClass]="scrolled() ? 'bg-text' : 'bg-white'"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (mobileOpen()) {
        <div class="border-t border-border bg-surface px-6 py-4 md:hidden">
          <ul class="flex flex-col gap-3">
            <li *ngFor="let link of navLinks">
              <a
                [href]="'#' + link.id"
                class="block text-sm font-medium transition-colors hover:text-primary"
                [ngClass]="{'text-primary': activeSection() === link.id, 'text-text-muted': activeSection() !== link.id}"
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
export class NavbarComponent implements AfterViewInit, OnDestroy {
  scrolled = signal(false);
  mobileOpen = signal(false);
  activeSection = signal('');
  scrollProgress = signal(0);
  darkMode = signal(false);

  private sectionObserver?: IntersectionObserver;

  navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  ngAfterViewInit() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.darkMode.set(true);
      document.documentElement.classList.add('dark');
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      this.sectionObserver!.observe(section);
    });
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
  }

  toggleDarkMode() {
    const newValue = !this.darkMode();
    this.darkMode.set(newValue);
    document.documentElement.classList.toggle('dark', newValue);
    localStorage.setItem('darkMode', String(newValue));
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
  }
}
