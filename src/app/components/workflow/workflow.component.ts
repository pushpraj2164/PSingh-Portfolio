import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { WORKFLOW_STEPS } from '../../data/portfolio-data';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="workflow" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            06 / HOW I WORK
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Lifecycle &amp; Delivery Process
          </h2>
          <p class="mt-3 text-base text-slate-400">
            A disciplined, transparent delivery cadence that bridges ambiguous requirements with production-ready software.
          </p>
        </div>

        <!-- Horizontal Process Track -->
        <div class="relative">
          <!-- Animated Connecting Track (Desktop) -->
          <div class="hidden lg:block absolute top-7 left-8 right-8 h-[2px] bg-white/[0.1] z-0">
            <div
              class="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              [style.width.%]="(activeStep / (workflowSteps.length - 1)) * 100"
            ></div>
          </div>

          <!-- Steps Grid with Header, Body, Footer architecture -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            @for (step of workflowSteps; track step.step; let idx = $index) {
              <div
                (mouseenter)="activeStep = idx"
                class="group p-5 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                [ngClass]="activeStep === idx
                  ? 'bg-[#0f1422] border border-amber-500/40 shadow-[0_15px_30px_rgba(0,0,0,0.6)]'
                  : 'bg-[#0b0e17]/80 border border-white/[0.06] hover:border-white/[0.15]'"
              >
                <!-- CARD HEADER -->
                <div class="card-header pb-2">
                  <div class="flex items-center justify-between mb-4">
                    <div
                      class="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all"
                      [ngClass]="idx <= activeStep
                        ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'bg-white/[0.06] text-slate-400'"
                    >
                      {{ step.step }}
                    </div>

                    <span class="text-[10px] font-mono text-slate-400">
                      Phase {{ idx + 1 }}
                    </span>
                  </div>

                  <h3
                    class="text-sm font-bold transition-colors mb-2"
                    [ngClass]="activeStep === idx ? 'text-amber-300' : 'text-white group-hover:text-amber-200'"
                  >
                    {{ step.title }}
                  </h3>
                </div>

                <!-- CARD BODY -->
                <div class="card-body">
                  <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    {{ step.description }}
                  </p>
                </div>

                <!-- CARD FOOTER: Deliverables List -->
                <div class="card-footer space-y-1.5 pt-3 border-t border-white/[0.06]">
                  @for (item of step.deliverables; track item) {
                    <div class="flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                      <span class="w-1 h-1 rounded-full bg-amber-400"></span>
                      <span class="truncate">{{ item }}</span>
                    </div>
                  }
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
export class WorkflowComponent {
  activeStep: number = 0;
  workflowSteps = WORKFLOW_STEPS;
}
