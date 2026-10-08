import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import confetti from 'canvas-confetti';
import { AppIconComponent } from '../icons/icons.component';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, AppIconComponent],
  template: `
    <section id="contact" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <!-- Background ambient lighting -->
      <div class="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-amber-500/[0.03] blur-[160px] pointer-events-none rounded-full"></div>

      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            09 / LET'S CONNECT
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a Project in Mind?
          </h2>
          <p class="mt-3 text-base text-slate-400">
            I'm open to technical leadership roles, full-time senior engineering opportunities, and ambitious architectural collaborations.
          </p>
        </div>

        <!-- Two-Column Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left Column: Direct Info & Quick Actions -->
          <div class="lg:col-span-5 space-y-6">
            <div class="p-8 rounded-3xl bg-[#0c101a] border border-white/[0.08] backdrop-blur-md space-y-6">
              <!-- CARD HEADER -->
              <div class="card-header pb-2">
                <div class="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <app-icon name="terminal" className="w-4 h-4"></app-icon>
                  <span>DIRECT_CHANNELS // VERIFIED</span>
                </div>
              </div>

              <!-- CARD BODY: Direct Channels List -->
              <div class="card-body space-y-4">
                <!-- Email item -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-all">
                  <div class="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                    <span class="flex items-center gap-1.5">
                      <app-icon name="mail" className="w-3.5 h-3.5 text-amber-400"></app-icon>
                      <span>Email Address</span>
                    </span>
                    <button
                      (click)="copyToClipboard(personalInfo.email, 'email')"
                      class="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <app-icon [name]="copiedEmail ? 'check' : 'copy'" className="w-3 h-3 text-emerald-400"></app-icon>
                      <span>{{ copiedEmail ? 'Copied!' : 'Copy' }}</span>
                    </button>
                  </div>
                  <a
                    [href]="'mailto:' + personalInfo.email"
                    class="text-sm sm:text-base font-semibold text-white hover:text-amber-300 transition-colors break-all"
                  >
                    {{ personalInfo.email }}
                  </a>
                </div>

                <!-- Phone item -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-all">
                  <div class="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                    <span class="flex items-center gap-1.5">
                      <app-icon name="phone" className="w-3.5 h-3.5 text-amber-400"></app-icon>
                      <span>Direct Phone</span>
                    </span>
                    <button
                      (click)="copyToClipboard(personalInfo.phone, 'phone')"
                      class="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <app-icon [name]="copiedPhone ? 'check' : 'copy'" className="w-3 h-3 text-emerald-400"></app-icon>
                      <span>{{ copiedPhone ? 'Copied!' : 'Copy' }}</span>
                    </button>
                  </div>
                  <a
                    [href]="'tel:' + personalInfo.phone"
                    class="text-sm sm:text-base font-semibold text-white hover:text-amber-300 transition-colors"
                  >
                    {{ personalInfo.phone }}
                  </a>
                </div>

                <!-- Location item -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div class="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                    <app-icon name="map-pin" className="w-3.5 h-3.5 text-amber-400"></app-icon>
                    <span>Base Location</span>
                  </div>
                  <div class="text-sm font-semibold text-white">
                    {{ personalInfo.location }}
                  </div>
                  <div class="text-[11px] font-mono text-emerald-400 mt-1">
                    Open to remote worldwide &amp; relocation
                  </div>
                </div>
              </div>

              <!-- CARD FOOTER: Social Channels -->
              <div class="card-footer pt-2 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  [href]="personalInfo.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-medium rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 hover:text-white transition-all"
                >
                  <app-icon name="linkedin" className="w-4 h-4 text-sky-400"></app-icon>
                  <span>LinkedIn</span>
                </a>
                <a
                  [href]="personalInfo.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-medium rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 hover:text-white transition-all"
                >
                  <app-icon name="github" className="w-4 h-4 text-slate-200"></app-icon>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column: Premium Contact Form -->
          <div class="lg:col-span-7">
            <div class="p-8 sm:p-10 rounded-3xl bg-[#0c101a] border border-white/[0.1] backdrop-blur-md shadow-2xl relative">
              <form (ngSubmit)="handleSubmit()" class="space-y-6">
                <div>
                  <label
                    for="name"
                    class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name / Organization <span class="text-amber-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    name="name"
                    [(ngModel)]="formData.name"
                    placeholder="e.g. Alex Morgan (CTO at Enterprise)"
                    class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email <span class="text-amber-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    name="email"
                    [(ngModel)]="formData.email"
                    placeholder="name@company.com"
                    class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    for="details"
                    class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Project Details &amp; Scope <span class="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="details"
                    rows="4"
                    required
                    name="details"
                    [(ngModel)]="formData.details"
                    placeholder="Tell me about the engineering challenges, timeline, or team role..."
                    class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button with Animated States -->
                <button
                  type="submit"
                  [disabled]="formState === 'sending' || formState === 'success'"
                  class="w-full relative py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  [ngClass]="formState === 'success'
                    ? 'bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                    : formState === 'sending'
                    ? 'bg-amber-400/80 text-black cursor-wait'
                    : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)]'"
                >
                  @if (formState === 'sending') {
                    <div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Transmitting Message...</span>
                  } @else if (formState === 'success') {
                    <app-icon name="check-circle-2" className="w-5 h-5 text-black"></app-icon>
                    <span>Message Sent ✓ Thanks for reaching out!</span>
                  } @else {
                    <span>Send Message</span>
                    <app-icon name="arrow-right" className="w-4 h-4"></app-icon>
                  }
                </button>

                <p class="text-[11px] font-mono text-center text-slate-500">
                  Response guaranteed within 24 hours. Confidentiality assured.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  personalInfo = PERSONAL_INFO;

  formData = {
    name: '',
    email: '',
    details: ''
  };

  formState: 'idle' | 'sending' | 'success' = 'idle';
  copiedEmail = false;
  copiedPhone = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  handleSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.details) return;

    this.formState = 'sending';

    setTimeout(() => {
      this.formState = 'success';

      if (isPlatformBrowser(this.platformId)) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f59e0b', '#38bdf8', '#10b981', '#ffffff']
          });
        } catch (err) {
          // ignore if canvas blocked
        }
      }

      setTimeout(() => {
        this.formData = { name: '', email: '', details: '' };
        this.formState = 'idle';
      }, 5000);
    }, 1200);
  }

  copyToClipboard(text: string, type: 'email' | 'phone') {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'email') {
        this.copiedEmail = true;
        setTimeout(() => (this.copiedEmail = false), 2000);
      } else {
        this.copiedPhone = true;
        setTimeout(() => (this.copiedPhone = false), 2000);
      }
    }
  }
}
