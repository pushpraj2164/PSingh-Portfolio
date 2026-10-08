import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { TESTIMONIALS } from '../../data/portfolio-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="testimonials" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            08 / TESTIMONIALS
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading & Controls -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Peer &amp; Leadership Endorsements
            </h2>
            <p class="mt-3 text-base text-slate-400">
              Reflections on architecture quality, sprint leadership, and hands-on execution.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <button
              (click)="prev()"
              class="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <app-icon name="chevron-left" className="w-5 h-5"></app-icon>
            </button>
            <button
              (click)="next()"
              class="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <app-icon name="chevron-right" className="w-5 h-5"></app-icon>
            </button>
          </div>
        </div>

        <!-- Testimonials Grid with Header, Body, Footer architecture -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (t of testimonials; track t.id; let idx = $index) {
            <div
              class="p-7 rounded-3xl bg-[#0c101a]/85 border border-white/[0.08] hover:border-amber-500/35 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              [ngClass]="idx === currentIndex ? 'ring-1 ring-amber-500/30 shadow-[0_15px_35px_rgba(245,158,11,0.08)]' : ''"
            >
              <!-- CARD HEADER -->
              <div class="card-header pb-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1 text-amber-400">
                    @for (star of [1,2,3,4,5]; track star) {
                      <app-icon name="star" className="w-4 h-4 fill-amber-400 text-amber-400"></app-icon>
                    }
                  </div>
                  <app-icon name="quote" className="w-6 h-6 text-amber-500/30"></app-icon>
                </div>
              </div>

              <!-- CARD BODY -->
              <div class="card-body my-2">
                <p class="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{{ t.quote }}&rdquo;
                </p>
              </div>

              <!-- CARD FOOTER: Author Info -->
              <div class="card-footer pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-xs text-amber-300">
                  {{ getInitials(t.name) }}
                </div>
                <div>
                  <div class="text-sm font-bold text-white">{{ t.name }}</div>
                  <div class="text-xs text-slate-400">
                    {{ t.role }} &bull; <span class="text-amber-400/80">{{ t.company }}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TestimonialsComponent {
  currentIndex = 0;
  testimonials = TESTIMONIALS;

  prev() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
}
