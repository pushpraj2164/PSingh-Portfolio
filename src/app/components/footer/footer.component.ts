import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <footer class="relative bg-[#06080d] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.08]">
          <!-- Brand & Monogram Column -->
          <div class="md:col-span-5 space-y-4">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-black border border-amber-500/30">
                <span class="font-mono font-bold text-sm tracking-wider text-amber-400">
                  PB
                </span>
              </div>
              <div>
                <h3 class="text-base font-bold text-white">
                  {{ personalInfo.name }}
                </h3>
                <p class="text-xs font-mono text-slate-400">
                  Senior Full-Stack Developer &amp; Lead Engineer
                </p>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance web applications, distributed cloud backends, and region-aware architectures that scale with commercial confidence.
            </p>

            <div class="pt-2 flex items-center gap-3">
              <a
                [href]="personalInfo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 border border-white/[0.08] hover:border-amber-500/40 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all"
                aria-label="LinkedIn profile"
              >
                <app-icon name="linkedin" className="w-4 h-4"></app-icon>
              </a>
              <a
                [href]="personalInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 border border-white/[0.08] hover:border-amber-500/40 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all"
                aria-label="GitHub profile"
              >
                <app-icon name="github" className="w-4 h-4"></app-icon>
              </a>
              <a
                [href]="'mailto:' + personalInfo.email"
                class="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 border border-white/[0.08] hover:border-amber-500/40 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all"
                aria-label="Email"
              >
                <app-icon name="mail" className="w-4 h-4"></app-icon>
              </a>
              <a
                [href]="personalInfo.resumePath"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 border border-white/[0.08] hover:border-amber-500/40 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all"
                aria-label="Download CV"
              >
                <app-icon name="file-down" className="w-4 h-4"></app-icon>
              </a>
            </div>
          </div>

          <!-- Quick Section Links -->
          <div class="md:col-span-4 space-y-3">
            <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Navigation Index
            </h4>
            <div class="grid grid-cols-2 gap-2">
              @for (item of navLinks; track item.name) {
                <a
                  [href]="item.href"
                  class="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {{ item.name }}
                </a>
              }
            </div>
          </div>

          <!-- Location & Status Column -->
          <div class="md:col-span-3 space-y-3 text-left md:text-right">
            <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Availability &amp; Status
            </h4>
            <div class="text-xs text-slate-300 space-y-1">
              <div class="flex items-center md:justify-end gap-1.5 text-emerald-400 font-mono">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Ready for Senior Roles</span>
              </div>
              <div class="text-slate-400 font-mono text-[11px]">
                Ahmedabad, Gujarat, India
              </div>
              <div class="text-slate-500 font-mono text-[11px]">
                IST (UTC +5:30)
              </div>
            </div>

            <div class="pt-2">
              <button
                (click)="scrollToTop()"
                class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <app-icon name="arrow-up" className="w-3.5 h-3.5 text-amber-400"></app-icon>
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom Credits & Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; 2026 Pushpraj Singh Bhati. All rights reserved.
          </div>
          <div class="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <app-icon name="heart" className="w-3.5 h-3.5 text-amber-400"></app-icon>
            <span>using Angular 19 &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  personalInfo = PERSONAL_INFO;

  navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
