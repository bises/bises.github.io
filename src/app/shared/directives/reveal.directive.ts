import { Directive, ElementRef, OnDestroy, OnInit, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  delay = input(0, { alias: 'appRevealDelay' });

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.6s ease ${this.delay()}ms, transform 0.6s ease ${this.delay()}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          this.observer?.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
