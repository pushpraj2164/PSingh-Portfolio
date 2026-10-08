import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { SERVICES } from '../../data/portfolio-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="services" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            05 / SERVICES
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Specialized Engineering Services
          </h2>
          <p class="mt-3 text-base text-slate-400">
            From high-throughput distributed backends to responsive web frontends, providing robust end-to-end software craftsmanship.
          </p>
        </div>

        <!-- Services Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services; track service.id) {
            <div
              class="group relative p-7 rounded-3xl bg-[#0c101a]/80 border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <!-- CARD HEADER -->
              <div class="card-header pb-2">
                <!-- Service Icon with Micro-Hover Shift -->
                <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-6">
                  <app-icon [name]="getIconName(service.iconName)" className="w-6 h-6 text-amber-400 group-hover:rotate-6 transition-transform duration-300"></app-icon>
                </div>

                <!-- Title & Short Description -->
                <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {{ service.title }}
                </h3>
                <p class="text-xs font-mono text-amber-400/80 mb-3">
                  {{ service.shortDesc }}
                </p>
              </div>

              <!-- CARD BODY -->
              <div class="card-body">
                <p class="text-sm text-slate-400 leading-relaxed">
                  {{ service.description }}
                </p>
              </div>

              <!-- CARD FOOTER -->
              <div class="card-footer pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                @for (tech of service.technologies; track tech) {
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]">
                    {{ tech }}
                  </span>
                }
              </div>

              <!-- Micro Accent line travelling on hover -->
              <div class="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-400 transition-all duration-500"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {
  services = SERVICES;

  getIconName(iconName: string): string {
    const map: Record<string, string> = {
      Globe: 'globe',
      Server: 'server',
      Database: 'database',
      Zap: 'zap',
      Video: 'video',
      CreditCard: 'credit-card',
      Compass: 'compass'
    };
    return map[iconName] || 'server';
  }
}
