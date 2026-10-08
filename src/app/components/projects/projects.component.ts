import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { PROJECTS, Project } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AppIconComponent, ProjectModalComponent],
  template: `
    <section id="projects" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            02 / FEATURED PROJECTS
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading & Controls -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Production Architecture &amp; Flagship Work
            </h2>
            <p class="mt-3 text-base text-slate-400">
              Battle-tested systems engineered for resilience, multi-region scalability, and tangible business cost reduction.
            </p>
          </div>

          <!-- Scroll Buttons for Horizontal Track -->
          <div class="hidden lg:flex items-center gap-2">
            <button
              (click)="handleScroll('left')"
              class="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <app-icon name="chevron-left" className="w-5 h-5"></app-icon>
            </button>
            <button
              (click)="handleScroll('right')"
              class="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <app-icon name="chevron-right" className="w-5 h-5"></app-icon>
            </button>
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
          @for (cat of categories; track cat) {
            <button
              (click)="activeCategory = cat"
              class="px-4 py-2 text-xs font-mono font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer"
              [ngClass]="activeCategory === cat
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:bg-white/[0.06]'"
            >
              {{ cat }}
            </button>
          }
        </div>

        <!-- Projects Horizontal / Grid Track -->
        <div
          #scrollContainerRef
          class="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          @for (project of filteredProjects; track project.id) {
            <div
              class="project-card group relative w-full sm:w-[380px] lg:w-[440px] shrink-0 snap-start flex flex-col rounded-3xl bg-[#0d121c]/90 border border-white/[0.09] hover:border-amber-500/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)] cursor-pointer"
              (click)="selectedProject = project"
            >
              <!-- CARD HEADER: Visual Thumbnail & Badges -->
              <div class="card-header relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />

                <!-- Subtle dark gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d121c] via-[#0d121c]/30 to-transparent"></div>

                <!-- Category & Status Pill -->
                <div class="absolute top-4 left-4 flex items-center gap-2">
                  <span class="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/75 backdrop-blur-md border border-white/[0.12] text-amber-300">
                    {{ project.category }}
                  </span>
                </div>

                <!-- Top Metric Badge -->
                @if (project.metrics[0]) {
                  <div class="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md">
                    {{ project.metrics[0] }}
                  </div>
                }
              </div>

              <!-- CARD CONTENT CONTAINER -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <!-- CARD BODY -->
                <div class="card-body space-y-2">
                  <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {{ project.title }}
                  </h3>
                  <p class="text-xs font-mono text-slate-400">
                    {{ project.subtitle }}
                  </p>
                  <p class="text-sm text-slate-300/80 leading-relaxed line-clamp-3">
                    {{ project.description }}
                  </p>
                </div>

                <!-- CARD FOOTER -->
                <div class="card-footer space-y-4">
                  <!-- Key Metrics row -->
                  <div class="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
                    @for (metric of project.metrics.slice(0, 2); track metric) {
                      <div class="text-[11px] font-mono text-slate-300 bg-white/[0.02] border border-white/[0.05] rounded-lg px-2.5 py-1.5 truncate">
                        <span class="text-amber-400 mr-1.5">&bull;</span>
                        <span>{{ metric }}</span>
                      </div>
                    }
                  </div>

                  <!-- Technology Tags -->
                  <div class="flex flex-wrap gap-1.5 pt-1">
                    @for (tag of project.tags.slice(0, 4); track tag) {
                      <span class="tech-pill text-[10px]">
                        {{ tag }}
                      </span>
                    }
                    @if (project.tags.length > 4) {
                      <span class="tech-pill text-[10px] opacity-75">
                        +{{ project.tags.length - 4 }}
                      </span>
                    }
                  </div>

                  <!-- Card Action Link -->
                  <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      (click)="selectedProject = project; $event.stopPropagation()"
                      class="inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <span>View Architecture &amp; Case Study</span>
                      <app-icon name="arrow-right" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></app-icon>
                    </button>

                    @if (project.demoUrl) {
                      <a
                        [href]="project.demoUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        (click)="$event.stopPropagation()"
                        class="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                        aria-label="View live platform"
                      >
                        <app-icon name="external-link" className="w-3.5 h-3.5"></app-icon>
                      </a>
                    }
                  </div>
                </div>
              </div>

              <!-- Glowing bottom line on hover -->
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-400 transition-all duration-500"></div>
            </div>
          }
        </div>
      </div>

      <!-- Case Study Modal -->
      <app-project-modal
        [project]="selectedProject"
        (close)="selectedProject = null"
      ></app-project-modal>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  activeCategory: string = 'All';

  @ViewChild('scrollContainerRef') scrollContainerRef!: ElementRef<HTMLDivElement>;

  categories = [
    'All',
    'Full-Stack & Cloud',
    'Cloud & Media',
    'Architecture',
    'FinTech & Payments',
    'Real-Time Systems'
  ];

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.category === this.activeCategory);
  }

  handleScroll(direction: 'left' | 'right') {
    if (this.scrollContainerRef?.nativeElement) {
      const scrollAmount = 450;
      this.scrollContainerRef.nativeElement.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
