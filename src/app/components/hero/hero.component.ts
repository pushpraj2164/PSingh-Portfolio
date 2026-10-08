import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section
      id="hero"
      class="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      <!-- Background radial accent glow -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/[0.04] blur-[150px] pointer-events-none rounded-full"></div>

      <div class="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Left Column: Information & Messaging -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <!-- Status Pill -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/[0.08] border border-amber-500/25 backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-[11px] font-mono font-semibold tracking-wider text-amber-300 uppercase">
                Available for Opportunities
              </span>
            </div>

            <!-- Role Sub-label -->
            <div class="flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest uppercase text-slate-400">
              <span class="text-amber-500 font-bold">//</span>
              <span>Senior Software Developer &amp; Lead Architect</span>
            </div>

            <!-- Main Headline -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Turning Ideas <br />
              Into Scalable <br />
              <span class="text-gradient-amber">Solutions.</span>
            </h1>

            <!-- Supporting Bio Text -->
            <p class="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              I design, develop and deliver high-performance web applications, distributed
              APIs, and digital solutions that solve real business problems. Specialized in
              <span class="text-white font-medium">.NET Core</span>,
              <span class="text-white font-medium">Angular</span>,
              <span class="text-white font-medium">SQL Server</span>, and
              <span class="text-white font-medium">AWS Multi-Region Architecture</span>.
            </p>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-wrap items-center gap-4">
              <button
                (click)="handleScrollTo('projects')"
                class="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Work</span>
                <app-icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform"></app-icon>
              </button>

              <a
                [href]="personalInfo.resumePath"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] hover:border-slate-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                <app-icon name="file-down" className="w-4 h-4 text-amber-400"></app-icon>
                <span>Download CV</span>
              </a>
            </div>

            <!-- Live Stats Counters -->
            <div class="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors">
                <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center">
                  <span>{{ statsCount.years }}</span>
                  <span class="text-amber-400">+</span>
                </div>
                <div class="text-xs text-slate-400 mt-1 font-medium">Years Experience</div>
              </div>

              <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors">
                <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center">
                  <span>{{ statsCount.projects }}</span>
                  <span class="text-amber-400">+</span>
                </div>
                <div class="text-xs text-slate-400 mt-1 font-medium">Projects Delivered</div>
              </div>

              <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors">
                <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center">
                  <span>{{ statsCount.satisfaction }}</span>
                  <span class="text-amber-400">%</span>
                </div>
                <div class="text-xs text-slate-400 mt-1 font-medium">Client Satisfaction</div>
              </div>

              <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors">
                <div class="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                  &infin;
                </div>
                <div class="text-xs text-slate-400 mt-1 font-medium">Continuous Learning</div>
              </div>
            </div>
          </div>

          <!-- Right Column: Cinematic Developer Workspace & Portrait -->
          <div class="lg:col-span-5 relative flex justify-center items-center">
            <!-- Ambient Back Glow Ring -->
            <div class="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-amber-500/20 to-sky-500/20 blur-2xl pointer-events-none"></div>

            <!-- Main Portrait Card Container -->
            <div class="relative w-full max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <!-- Image Frame -->
              <div class="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0d121c] border border-white/[0.08]">
                <img
                  [src]="personalInfo.profileImage"
                  [alt]="personalInfo.name"
                  class="w-full h-full object-cover object-top filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                />

                <!-- Subtle vignette gradient over image -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-80"></div>

                <!-- Bottom Overlay Info Tag -->
                <div class="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div>
                    <div class="text-xs font-bold text-white tracking-wide">
                      {{ personalInfo.name }}
                    </div>
                    <div class="text-[10px] font-mono text-amber-400">
                      {{ personalInfo.roleHeadline }}
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>

              <!-- Satellite Badge: C# / .NET -->
              <div class="absolute -top-4 -left-3 sm:-left-6 px-3 py-1.5 rounded-lg bg-[#0e1422]/90 border border-amber-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float-slow">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span class="text-xs font-mono font-medium text-slate-200">C# / .NET Core</span>
              </div>

              <!-- Satellite Badge: SQL Server -->
              <div
                class="absolute top-1/4 -right-4 sm:-right-6 px-3 py-1.5 rounded-lg bg-[#0e1422]/90 border border-sky-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float-slow"
                style="animation-delay: 1.5s;"
              >
                <app-icon name="database" className="w-3.5 h-3.5 text-sky-400"></app-icon>
                <span class="text-xs font-mono font-medium text-slate-200">SQL Server</span>
              </div>

              <!-- Satellite Badge: Angular -->
              <div
                class="absolute bottom-28 -left-4 sm:-left-6 px-3 py-1.5 rounded-lg bg-[#0e1422]/90 border border-red-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float-slow"
                style="animation-delay: 2.5s;"
              >
                <span class="w-2 h-2 rounded-full bg-red-400"></span>
                <span class="text-xs font-mono font-medium text-slate-200">Angular 12+</span>
              </div>

              <!-- Satellite Badge: AWS Multi-Region System -->
              <div
                class="absolute -bottom-5 right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#0c101a]/95 border border-amber-500/40 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-float-slow"
                style="animation-delay: 0.8s;"
              >
                <div class="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <app-icon name="cloud" className="w-4 h-4 text-amber-400"></app-icon>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-white flex items-center gap-1.5">
                    AWS Architecture
                    <span class="text-[9px] text-emerald-400 font-mono">99.9% UPTIME</span>
                  </div>
                  <div class="text-[9px] font-mono text-slate-400">
                    6 Regions &bull; 3 SQL DBs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements OnInit, OnDestroy {
  personalInfo = PERSONAL_INFO;
  statsCount = {
    years: 0,
    projects: 0,
    satisfaction: 0
  };
  private timer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let frame = 0;
      const totalFrames = 50;

      this.timer = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const eased = 1 - (1 - progress) * (1 - progress);

        this.statsCount = {
          years: Math.round(eased * 5),
          projects: Math.round(eased * 25),
          satisfaction: Math.round(eased * 100)
        };

        if (frame >= totalFrames) {
          clearInterval(this.timer);
        }
      }, 25);
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  handleScrollTo(id: string) {
    if (typeof window !== 'undefined') {
      const el = document.getElementById(id);
      if (el) {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}
