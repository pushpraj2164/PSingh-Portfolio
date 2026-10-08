import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class GsapAnimationService {
  private ctx?: gsap.Context;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    this.ctx = gsap.context(() => {
      // Cinematic Hero Entrance (matching Next.js GsapProvider)
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '#hero h1',
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, delay: 0.1 }
        )
        .fromTo(
          '#hero p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          '#hero .aspect-\\[4\\/5\\], #hero [class*="max-w-[420px]"]',
          { opacity: 0, scale: 0.94, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 },
          '-=0.9'
        );

      // Section scroll reveals
      const sections = [
        '#about',
        '#projects',
        '#skills',
        '#experience',
        '#services',
        '#workflow',
        '#why-me',
        '#testimonials',
        '#contact'
      ];

      sections.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: selector,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Recalculate ScrollTrigger positions
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    });
  }

  destroyAnimations() {
    if (this.ctx) {
      this.ctx.revert();
    }
    if (isPlatformBrowser(this.platformId)) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }
}
