import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { WHY_WORK_WITH_ME } from '../../data/portfolio-data';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="why-me" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            07 / WHY WORK WITH ME?
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for Scalability. Grounded in Integrity.
          </h2>
          <p class="mt-3 text-base text-slate-400">
            Why engineering leaders and organizations rely on my technical leadership and hands-on execution.
          </p>
        </div>

        <!-- 4 Cards Grid with Header, Body, Footer architecture -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of whyMeItems; track item.id; let idx = $index) {
            <div
              class="group relative p-7 rounded-3xl bg-[#0c101a]/85 border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <!-- CARD HEADER -->
              <div class="card-header pb-2">
                <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center transition-all mb-6">
                  <app-icon [name]="getIconName(idx)" className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform"></app-icon>
                </div>

                <span class="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                  {{ item.highlight }}
                </span>

                <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                  {{ item.title }}
                </h3>
              </div>

              <!-- CARD BODY -->
              <div class="card-body">
                <p class="text-sm text-slate-400 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>

              <!-- CARD FOOTER -->
              <div class="card-footer pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
                <app-icon name="check" className="w-3.5 h-3.5"></app-icon>
                <span>Verified Track Record</span>
              </div>

              <!-- Micro accent line travelling on hover -->
              <div class="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-400 transition-all duration-500"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class WhyMeComponent {
  whyMeItems = WHY_WORK_WITH_ME;

  getIconName(idx: number): string {
    const icons = ['shield-check', 'clock', 'message-square', 'briefcase'];
    return icons[idx] || 'shield-check';
  }
}
