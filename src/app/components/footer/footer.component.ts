import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <footer class="relative bg-[#05070b] border-t border-white/[0.08] pt-12 md:pt-16 pb-12 overflow-hidden">
      <!-- Ambient subtle background glow for mobile & desktop -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-amber-500/[0.04] blur-3xl pointer-events-none"></div>

      <div class="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        <!-- ================================================================= -->
        <!-- MOBILE VIEW: Dedicated Awesome Feature Hub (< md screens)         -->
        <!-- ================================================================= -->
        <div class="block md:hidden space-y-8 pb-10 border-b border-white/[0.08]">
          <!-- Mobile Brand & Title Header -->
          <div class="flex items-center gap-3.5">
            <div class="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/25 via-zinc-900 to-black border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
              <span class="font-mono font-extrabold text-base tracking-wider text-amber-400">
                PB
              </span>
            </div>
            <div>
              <h3 class="text-lg font-extrabold text-white tracking-tight">
                {{ personalInfo.name }}
              </h3>
              <p class="text-xs font-mono text-amber-400/90 font-medium">
                Senior Full-Stack &amp; Lead Architect
              </p>
            </div>
          </div>

          <!-- Status Beacon Card -->
          <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-mono font-medium text-emerald-400">
                Available for Senior Roles
              </span>
            </div>
            <span class="text-[11px] font-mono text-slate-400">
              Ahmedabad, IN &bull; IST
            </span>
          </div>

          <!-- Key Portfolio Features Highlight Cards -->
          <div class="space-y-2.5">
            <div class="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1.5">
              <span class="text-amber-500">//</span>
              <span>Core Architectural Highlights</span>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
              <!-- Feature 1 -->
              <div class="p-3 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.07] flex flex-col justify-between">
                <div class="flex items-center gap-1.5 text-amber-400 text-xs font-bold font-mono">
                  <app-icon name="globe" className="w-3.5 h-3.5"></app-icon>
                  <span>AWS Multi-Region</span>
                </div>
                <p class="text-[11px] text-slate-300 mt-1 leading-tight font-sans">
                  6 global regions &bull; 3 sharded SQL DBs &bull; -55% latency
                </p>
              </div>

              <!-- Feature 2 -->
              <div class="p-3 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.07] flex flex-col justify-between">
                <div class="flex items-center gap-1.5 text-cyan-400 text-xs font-bold font-mono">
                  <app-icon name="video" className="w-3.5 h-3.5"></app-icon>
                  <span>TUS + FFmpeg</span>
                </div>
                <p class="text-[11px] text-slate-300 mt-1 leading-tight font-sans">
                  Resumable 4K uploads &bull; Automated transcoding &bull; CDN
                </p>
              </div>

              <!-- Feature 3 -->
              <div class="p-3 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.07] flex flex-col justify-between">
                <div class="flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-mono">
                  <app-icon name="server" className="w-3.5 h-3.5"></app-icon>
                  <span>Custom DAM</span>
                </div>
                <p class="text-[11px] text-slate-300 mt-1 leading-tight font-sans">
                  ₹1L/mo license saved &bull; 60+ EXIF fields &bull; Face focus
                </p>
              </div>

              <!-- Feature 4 -->
              <div class="p-3 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.07] flex flex-col justify-between">
                <div class="flex items-center gap-1.5 text-amber-300 text-xs font-bold font-mono">
                  <app-icon name="zap" className="w-3.5 h-3.5"></app-icon>
                  <span>SignalR Sockets</span>
                </div>
                <p class="text-[11px] text-slate-300 mt-1 leading-tight font-sans">
                  18k+ concurrent connections &bull; &lt;15ms broadcast
                </p>
              </div>
            </div>
          </div>

          <!-- Metric Strip -->
          <div class="grid grid-cols-4 gap-1.5 py-3 px-2 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <div>
              <div class="text-base font-extrabold text-amber-400 font-mono">5+</div>
              <div class="text-[9px] font-mono text-slate-400 uppercase">Years Exp</div>
            </div>
            <div>
              <div class="text-base font-extrabold text-white font-mono">25+</div>
              <div class="text-[9px] font-mono text-slate-400 uppercase">Projects</div>
            </div>
            <div>
              <div class="text-base font-extrabold text-amber-400 font-mono">17mo</div>
              <div class="text-[9px] font-mono text-slate-400 uppercase">To Lead</div>
            </div>
            <div>
              <div class="text-base font-extrabold text-emerald-400 font-mono">100%</div>
              <div class="text-[9px] font-mono text-slate-400 uppercase">Success</div>
            </div>
          </div>

          <!-- Quick Action Buttons Hub for Mobile -->
          <div class="space-y-2.5">
            <div class="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1.5">
              <span class="text-amber-500">//</span>
              <span>Quick Direct Actions</span>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
              <a
                [href]="'mailto:' + personalInfo.email"
                class="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-amber-400 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95 transition-all"
              >
                <app-icon name="mail" className="w-4 h-4"></app-icon>
                <span>Email Pushpraj</span>
              </a>

              <a
                [href]="'tel:' + personalInfo.phone"
                class="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white font-semibold text-xs active:scale-95 transition-all"
              >
                <app-icon name="phone" className="w-4 h-4 text-emerald-400"></app-icon>
                <span>Direct Call</span>
              </a>

              <a
                [href]="personalInfo.resumePath"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 font-mono text-xs active:scale-95 transition-all"
              >
                <app-icon name="file-down" className="w-3.5 h-3.5 text-amber-400"></app-icon>
                <span>Download CV</span>
              </a>

              <a
                [href]="personalInfo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 font-mono text-xs active:scale-95 transition-all"
              >
                <app-icon name="linkedin" className="w-3.5 h-3.5 text-sky-400"></app-icon>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <!-- Section Jump Pills -->
          <div class="flex flex-wrap items-center gap-1.5 pt-2">
            <span class="text-[10px] font-mono text-slate-500 mr-1">JUMP:</span>
            <a href="#projects" class="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono text-slate-300 hover:text-amber-400">#projects</a>
            <a href="#skills" class="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono text-slate-300 hover:text-amber-400">#skills</a>
            <a href="#experience" class="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono text-slate-300 hover:text-amber-400">#experience</a>
            <a href="#contact" class="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono text-slate-300 hover:text-amber-400">#contact</a>
          </div>
        </div>

        <!-- ================================================================= -->
        <!-- DESKTOP VIEW: Clean 3-Column Architectural Layout (>= md screens) -->
        <!-- ================================================================= -->
        <div class="hidden md:grid md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.08]">
          <!-- Brand & Monogram Column -->
          <div class="md:col-span-5 space-y-4">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-black border border-amber-500/30">
                <span class="font-mono font-bold text-sm tracking-wider text-amber-400">
                  PB
                </span>
              </div>
              <div>
                <h3 class="text-base font-bold text-white">
                  {{ personalInfo.name }}
                </h3>
                <p class="text-xs font-mono text-slate-400">
                  Senior Full-Stack Developer &amp; Lead Architect
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

        <!-- ================================================================= -->
        <!-- BOTTOM CREDITS & TECHNICAL DIRECTIVES (Clean & Professional)      -->
        <!-- ================================================================= -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>&copy; 2026 Pushpraj Singh Bhati. All rights reserved.</span>
            <span class="text-slate-700 hidden sm:inline">&bull;</span>
            <a href="sitemap.xml" class="hover:text-amber-400 transition-colors">Sitemap</a>
            <span class="text-slate-700">&bull;</span>
            <a href="llms.txt" class="hover:text-amber-400 transition-colors">LLMs.txt (AEO)</a>
            <span class="text-slate-700">&bull;</span>
            <a href="robots.txt" class="hover:text-amber-400 transition-colors">Robots.txt</a>
          </div>

          <div>
            <button
              (click)="scrollToTop()"
              class="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono text-slate-300"
            >
              <span>Back to Top</span>
              <app-icon name="arrow-up" className="w-3 h-3 text-amber-400"></app-icon>
            </button>
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
