import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { PERSONAL_INFO } from '../../data/portfolio-data';

const NAV_LINKS = [
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

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="isScrolled
        ? 'bg-[#090c13]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
        : 'bg-transparent py-5'"
    >
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div class="flex items-center justify-between">
          <!-- Logo Monogram -->
          <a
            href="#hero"
            (click)="handleNavClick($event, '#hero')"
            class="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-black border border-amber-500/30 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300">
              <span class="font-mono font-bold text-sm tracking-wider text-amber-400 group-hover:text-amber-300">
                PB
              </span>
              <span class="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
            </div>
            <div class="hidden sm:block">
              <div class="text-sm font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {{ personalInfo.name }}
              </div>
              <div class="text-[11px] font-mono text-slate-400 tracking-wide flex items-center gap-1.5">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Lead Engineer &amp; Full-Stack</span>
              </div>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md shadow-inner">
            @for (link of navLinks; track link.name) {
              <a
                [href]="link.href"
                (click)="handleNavClick($event, link.href)"
                class="relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer"
                [ngClass]="activeSection === link.href.substring(1)
                  ? 'text-white bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)] border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'"
              >
                {{ link.name }}
              </a>
            }
          </nav>

          <!-- Right CTAs -->
          <div class="hidden md:flex items-center gap-3">
            <a
              [href]="personalInfo.resumePath"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-slate-300 hover:text-white rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-slate-500 transition-all duration-200"
            >
              <app-icon name="file-down" className="w-3.5 h-3.5 text-amber-400"></app-icon>
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              (click)="handleNavClick($event, '#contact')"
              class="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-pointer"
            >
              <span>Let's Talk</span>
              <app-icon name="arrow-up-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></app-icon>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <app-icon [name]="mobileMenuOpen ? 'x' : 'menu'" className="w-5 h-5"></app-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen) {
        <div class="lg:hidden mt-3 px-4 pb-6 pt-2 bg-[#090c13]/95 border-b border-white/[0.08] backdrop-blur-xl">
          <div class="flex flex-col space-y-1">
            @for (link of navLinks; track link.name) {
              <a
                [href]="link.href"
                (click)="handleNavClick($event, link.href)"
                class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                [ngClass]="activeSection === link.href.substring(1)
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'"
              >
                {{ link.name }}
              </a>
            }

            <div class="pt-4 mt-2 border-t border-white/[0.08] flex items-center gap-3">
              <a
                [href]="personalInfo.resumePath"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-2 py-3 text-xs font-mono font-medium text-slate-200 rounded-xl bg-white/[0.04] border border-white/[0.08]"
              >
                <app-icon name="file-down" className="w-4 h-4 text-amber-400"></app-icon>
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                (click)="handleNavClick($event, '#contact')"
                class="flex-1 inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <span>Let's Talk</span>
                <app-icon name="arrow-up-right" className="w-4 h-4"></app-icon>
              </a>
            </div>
          </div>
        </div>
      }
    </header>
  `,
  styles: []
})
export class NavigationComponent implements OnInit, OnDestroy {
  personalInfo = PERSONAL_INFO;
  navLinks = NAV_LINKS;
  isScrolled = false;
  activeSection = 'hero';
  mobileMenuOpen = false;

  private scrollHandler?: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler = () => {
        this.isScrolled = window.scrollY > 40;

        const sections = this.navLinks.map((link) => link.href.substring(1));
        const scrollPos = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPos) {
            this.activeSection = sections[i];
            break;
          }
        }
      };

      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.scrollHandler();
    }
  }

  ngOnDestroy() {
    if (this.scrollHandler && isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  handleNavClick(e: Event, href: string) {
    e.preventDefault();
    this.mobileMenuOpen = false;
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
