import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, HostListener, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { EXPERIENCES, EDUCATION } from '../../data/portfolio-data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="experience" class="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            04 / EXPERIENCE &amp; CAREER
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Professional Trajectory &amp; Leadership
          </h2>
          <p class="mt-3 text-base text-slate-400">
            A journey defined by rapid promotion, architectural ownership, and scaling production systems under real business pressures.
          </p>
        </div>

        <!-- Interactive Animated Timeline Container -->
        <div #timelineContainer class="relative">
          <!-- 1. BASE BACKGROUND SPINE (Muted Track) -->
          <div class="hidden md:block absolute left-1/2 top-4 bottom-8 w-[2px] bg-white/[0.08] -translate-x-1/2"></div>
          <div class="md:hidden absolute left-5 top-4 bottom-8 w-[2px] bg-white/[0.08]"></div>

          <!-- 2. DYNAMIC ILLUMINATED BEAM LINE (Grows with scroll progress) -->
          <div
            class="hidden md:block absolute left-1/2 top-4 w-[2px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.85)] -translate-x-1/2 pointer-events-none transition-[height] duration-75"
            [style.height.px]="trackerTop - 16"
          ></div>
          <div
            class="md:hidden absolute left-5 top-4 w-[2px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.85)] pointer-events-none transition-[height] duration-75"
            [style.height.px]="trackerTop - 16"
          ></div>

          <!-- 3. HIGHLIGHTED MOVING BEACON / ORB (Tracks the scroll dynamically down the spine) -->
          <!-- Desktop Traveling Orb -->
          <div
            class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center pointer-events-none"
            [style.top.px]="trackerTop"
            style="transition: top 0.08s ease-out;"
          >
            <div class="relative flex items-center justify-center">
              <span class="animate-ping absolute w-8 h-8 rounded-full bg-amber-400/40 opacity-75"></span>
              <span class="w-6 h-6 rounded-full bg-amber-500/30 border border-amber-400/80 flex items-center justify-center backdrop-blur-sm shadow-[0_0_25px_rgba(245,158,11,1)]">
                <span class="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-500 border border-white shadow-[0_0_12px_#f59e0b]"></span>
              </span>
            </div>
          </div>

          <!-- Mobile Traveling Orb -->
          <div
            class="md:hidden flex absolute left-5 -translate-x-1/2 z-20 items-center justify-center pointer-events-none"
            [style.top.px]="trackerTop"
            style="transition: top 0.08s ease-out;"
          >
            <div class="relative flex items-center justify-center">
              <span class="animate-ping absolute w-7 h-7 rounded-full bg-amber-400/40 opacity-75"></span>
              <span class="w-5 h-5 rounded-full bg-amber-500/30 border border-amber-400/80 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,1)]">
                <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-500 border border-white shadow-[0_0_10px_#f59e0b]"></span>
              </span>
            </div>
          </div>

          <!-- 4. TIMELINE MILESTONE ITEMS -->
          <div class="space-y-12 md:space-y-16">
            @for (exp of experiences; track exp.id; let idx = $index) {
              <div
                class="relative flex flex-col md:flex-row items-start transition-all duration-300"
                [class.md:flex-row-reverse]="idx % 2 === 0"
              >
                <!-- Milestone Node: Dynamically highlights when beacon reaches it -->
                <div class="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 top-1.5">
                  <div
                    class="w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all duration-500"
                    [ngClass]="idx <= activeIndex
                      ? 'border-amber-400 bg-amber-500 shadow-[0_0_22px_rgba(245,158,11,0.9)] scale-110'
                      : (exp.current ? 'border-amber-500/70 bg-amber-400/40' : 'border-[#1e2638] bg-[#0e131f]')"
                  >
                    <div
                      class="w-2 h-2 rounded-full transition-colors duration-300"
                      [ngClass]="idx <= activeIndex ? 'bg-black animate-pulse' : (exp.current ? 'bg-amber-400' : 'bg-slate-500')"
                    ></div>
                  </div>
                </div>

                <!-- Spacer for the opposite column on Desktop -->
                <div class="hidden md:block w-1/2"></div>

                <!-- Card Content Container -->
                <div
                  class="pl-12 md:pl-0 w-full md:w-1/2"
                  [ngClass]="idx % 2 === 0 ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'"
                >
                  <!-- Card with Header, Body, Footer architecture -->
                  <div
                    class="p-6 sm:p-8 rounded-3xl bg-[#0c101a] border transition-all duration-300 hover:-translate-y-1"
                    [ngClass]="idx <= activeIndex
                      ? 'border-amber-500/40 shadow-[0_15px_35px_rgba(245,158,11,0.12)]'
                      : 'border-white/[0.08] hover:border-white/[0.18]'"
                  >
                    <!-- CARD HEADER -->
                    <div class="card-header pb-4 border-b border-white/[0.06] mb-4">
                      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span class="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-amber-300">
                          <app-icon name="calendar" className="w-3.5 h-3.5 text-amber-400"></app-icon>
                          <span>{{ exp.period }}</span>
                        </span>

                        @if (exp.current) {
                          <span class="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            CURRENT ROLE
                          </span>
                        }
                      </div>

                      <h3 class="text-xl sm:text-2xl font-bold text-white">
                        {{ exp.role }}
                      </h3>
                      <div class="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                        <app-icon name="briefcase" className="w-4 h-4 text-amber-400"></app-icon>
                        <span class="text-amber-400 font-semibold">{{ exp.company }}</span>
                        <span class="text-slate-500">&bull;</span>
                        <span class="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <app-icon name="map-pin" className="w-3 h-3 text-amber-400"></app-icon>
                          <span>{{ exp.location }}</span>
                        </span>
                      </div>
                    </div>

                    <!-- CARD BODY -->
                    <div class="card-body mb-6">
                      <p class="text-sm text-slate-300 leading-relaxed mb-4">
                        {{ exp.description }}
                      </p>

                      <!-- Key Achievements Bullet Points -->
                      <div class="space-y-2.5">
                        <div class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Key Achievements &amp; Scope:
                        </div>
                        @for (item of exp.achievements; track item) {
                          <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <app-icon name="check-circle-2" className="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></app-icon>
                            <span>{{ item }}</span>
                          </div>
                        }
                      </div>
                    </div>

                    <!-- CARD FOOTER -->
                    <div class="card-footer pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      @for (skill of exp.skills; track skill) {
                        <span class="tech-pill text-[10px]">
                          {{ skill }}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Education & Academic Honors Section -->
        <div class="mt-20 pt-12 border-t border-white/[0.08]">
          <div class="flex items-center gap-2 mb-8">
            <app-icon name="graduation-cap" className="w-5 h-5 text-amber-400"></app-icon>
            <h3 class="text-xl sm:text-2xl font-bold text-white">
              Education &amp; Academic Honors
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (edu of education; track edu.degree) {
              <!-- Education Card with Header, Body, Footer -->
              <div class="p-6 rounded-2xl bg-[#0c101a] border border-white/[0.08] hover:border-amber-500/30 transition-all flex flex-col justify-between">
                <!-- Header -->
                <div class="pb-3 border-b border-white/[0.06] mb-3">
                  <div class="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                    <span class="font-bold">{{ edu.institution }}</span>
                    <span class="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">{{ edu.year }}</span>
                  </div>
                  <h4 class="text-base font-bold text-white">{{ edu.degree }}</h4>
                </div>
                <!-- Body -->
                <div class="text-xs text-slate-400 leading-relaxed">
                  {{ edu.detail }}
                </div>
                <!-- Footer -->
                <div class="pt-3 mt-3 border-t border-white/[0.04] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <app-icon name="check" className="w-3-h-3 text-emerald-400"></app-icon>
                  <span>Verified Qualification</span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('timelineContainer') timelineContainer!: ElementRef<HTMLDivElement>;

  experiences = EXPERIENCES;
  education = EDUCATION;

  trackerTop = 20;
  scrollProgress = 0;
  activeIndex = 0;

  private scrollTriggerInstance: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      this.initTimelineTracker();
    }, 250);
  }

  private initTimelineTracker() {
    if (!this.timelineContainer?.nativeElement) return;
    const container = this.timelineContainer.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      this.scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: 'top 65%',
        end: 'bottom 60%',
        scrub: 0.2,
        onUpdate: (self) => {
          const totalHeight = Math.max(container.offsetHeight - 50, 100);
          const currentTop = Math.max(20, Math.min(totalHeight * self.progress + 20, totalHeight));
          const numItems = this.experiences.length;
          const active = Math.min(Math.floor(self.progress * (numItems + 0.3)), numItems - 1);

          this.ngZone.run(() => {
            this.scrollProgress = self.progress;
            this.trackerTop = currentTop;
            this.activeIndex = active;
          });
        }
      });
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.timelineContainer?.nativeElement) return;
    const container = this.timelineContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const startOffset = windowHeight * 0.65;
    const endOffset = windowHeight * 0.4;
    const totalDist = rect.height + (startOffset - endOffset);

    if (rect.top <= startOffset && rect.bottom >= endOffset) {
      const scrolled = startOffset - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalDist));
      const totalHeight = Math.max(container.offsetHeight - 50, 100);
      this.trackerTop = Math.max(20, Math.min(totalHeight * progress + 20, totalHeight));
      this.scrollProgress = progress;
      const numItems = this.experiences.length;
      this.activeIndex = Math.min(Math.floor(progress * (numItems + 0.3)), numItems - 1);
    } else if (rect.top > startOffset) {
      this.trackerTop = 20;
      this.scrollProgress = 0;
      this.activeIndex = 0;
    } else if (rect.bottom < endOffset) {
      const totalHeight = Math.max(container.offsetHeight - 50, 100);
      this.trackerTop = totalHeight;
      this.scrollProgress = 1;
      this.activeIndex = this.experiences.length - 1;
    }
  }

  ngOnDestroy() {
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
  }
}
