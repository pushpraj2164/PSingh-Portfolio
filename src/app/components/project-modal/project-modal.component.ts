import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { Project } from '../../data/portfolio-data';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    @if (project) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          (click)="onClose()"
        ></div>

        <!-- Modal Dialog -->
        <div class="relative w-full max-w-4xl rounded-3xl bg-[#0c101a] border border-white/[0.15] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto" (click)="$event.stopPropagation()">
          <!-- Modal Header Bar -->
          <div class="flex items-center justify-between p-5 border-b border-white/[0.08] bg-[#0e1422]">
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {{ project.category }}
              </span>
              <span class="text-xs font-mono text-slate-400 hidden sm:inline">
                // CASE STUDY &amp; ARCHITECTURE
              </span>
            </div>
            <button
              (click)="onClose()"
              class="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <app-icon name="x" className="w-5 h-5"></app-icon>
            </button>
          </div>

          <!-- Modal Scrollable Body -->
          <div class="overflow-y-auto p-6 sm:p-8 space-y-8">
            <!-- Hero Image -->
            <div class="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.1] bg-black">
              <img
                [src]="project.image"
                [alt]="project.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-amber-300 font-mono mt-1">
                  {{ project.subtitle }}
                </p>
              </div>
            </div>

            <!-- Key Metrics Banner -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              @for (metric of project.metrics; track metric) {
                <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-center">
                  <div class="text-xs font-mono text-amber-400 font-bold">{{ metric }}</div>
                </div>
              }
            </div>

            <!-- Architectural Overview -->
            <div class="space-y-3">
              <h4 class="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <app-icon name="cpu" className="w-4 h-4 text-amber-400"></app-icon>
                <span>Architectural Problem &amp; Engineering Solution</span>
              </h4>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                {{ project.detailedDescription }}
              </p>
            </div>

            <!-- Key Technical Highlights -->
            <div class="space-y-3">
              <h4 class="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <app-icon name="layers" className="w-4 h-4 text-amber-400"></app-icon>
                <span>Key Technical Highlights</span>
              </h4>
              <div class="space-y-2">
                @for (highlight of project.highlights; track highlight) {
                  <div class="flex items-start gap-2.5 text-sm text-slate-300">
                    <app-icon name="check-circle-2" className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></app-icon>
                    <span>{{ highlight }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Tech Stack Pills -->
            <div class="space-y-3">
              <h4 class="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <app-icon name="database" className="w-4 h-4 text-amber-400"></app-icon>
                <span>Technology Stack</span>
              </h4>
              <div class="flex flex-wrap gap-2">
                @for (tag of project.tags; track tag) {
                  <span class="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.05] border border-white/[0.1] text-amber-200">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          </div>

          <!-- Modal Footer Actions -->
          <div class="p-5 border-t border-white/[0.08] bg-[#0e1422] flex flex-wrap items-center justify-between gap-4">
            <div class="text-xs font-mono text-slate-400">
              Engineered by <span class="text-white font-medium">Pushpraj Singh Bhati</span>
            </div>

            <div class="flex items-center gap-3">
              @if (project.demoUrl) {
                <a
                  [href]="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all"
                >
                  <span>Live Platform</span>
                  <app-icon name="external-link" className="w-3.5 h-3.5"></app-icon>
                </a>
              }
              <button
                (click)="onClose()"
                class="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: []
})
export class ProjectModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEsc() {
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
