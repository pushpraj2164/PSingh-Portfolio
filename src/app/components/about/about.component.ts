import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="about" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Tag -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            01 / ABOUT ME
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Who I Am
          </h2>
          <p class="mt-3 text-base sm:text-lg text-slate-400">
            Senior Full-Stack Engineer and Lead Architect with a passion for building
            high-throughput, reliable cloud web products that make a measurable commercial impact.
          </p>
        </div>

        <!-- Two-Column Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left Narrative Column -->
          <div class="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a <strong class="text-white font-semibold">Senior Full-Stack Engineer &amp; Project Manager</strong> based
              in Ahmedabad, India, with nearly 4 years of dedicated experience architecting and shipping
              production-scale web applications with <span class="text-amber-300 font-mono text-sm">Angular</span>,
              <span class="text-amber-300 font-mono text-sm">C#</span>,
              <span class="text-amber-300 font-mono text-sm">.NET Core</span>, and
              <span class="text-amber-300 font-mono text-sm">SQL Server</span>.
            </p>

            <p>
              My path is defined by rapid technical ownership: I progressed from Frontend Developer to
              Senior Programmer in just <strong class="text-white font-semibold">17 months</strong> by
              independently building enterprise .NET Core APIs, and subsequently advanced to
              <strong class="text-white font-semibold">Project Manager &amp; Lead Engineer</strong>, heading a team of 4
              while staying deeply hands-on in the code.
            </p>

            <p>
              At Noosom, I architected a <strong class="text-white font-semibold">region-aware cloud system on AWS</strong> serving
              6 global regions across the UK, US, and Asia from 3 sharded SQL Server databases, backed
              by a centralized <code class="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded text-amber-300 font-mono">GlobalUserId</code>
              identity model and one shared codebase.
            </p>

            <!-- Key Quote / Value Proposition Callout -->
            <div class="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 backdrop-blur-md">
              <div class="flex items-start gap-3">
                <app-icon name="shield-check" className="w-5 h-5 text-amber-400 shrink-0 mt-0.5"></app-icon>
                <div class="text-sm text-slate-200">
                  <span class="font-semibold text-white">Commercial Impact Mindset:</span> Beyond writing clean code, I build software that saves capital &mdash; from engineering an in-house media manager that saved ₹1 Lakh/month in third-party licensing to designing low-overhead multi-gateway payments.
                </div>
              </div>
            </div>

            <!-- Quick Specs List -->
            <div class="pt-2 grid grid-cols-2 gap-3 text-xs font-mono text-slate-400">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Location: Ahmedabad, India</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Availability: Full-Time / Lead</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Focus: Full-Stack &amp; Cloud Arch</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Languages: English, Hindi</span>
              </div>
            </div>
          </div>

          <!-- Right Cards Column: Structured Cards with header, body, footer -->
          <div class="lg:col-span-6 space-y-4">
            @for (item of cards; track item.title) {
              <div class="group relative p-6 rounded-2xl bg-[#0e131f]/70 border border-white/[0.08] hover:border-amber-500/35 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <!-- CARD HEADER -->
                <div class="card-header flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                  <div class="flex items-center gap-3">
                    <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                      <app-icon [name]="item.icon" className="w-5 h-5 text-amber-400"></app-icon>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {{ item.title }}
                      </h3>
                      <div class="text-xs font-mono text-amber-400/80">
                        {{ item.subtitle }}
                      </div>
                    </div>
                  </div>
                  <span class="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-amber-300">
                    {{ item.pill }}
                  </span>
                </div>

                <!-- CARD BODY -->
                <div class="card-body">
                  <p class="text-sm text-slate-300/90 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>

                <!-- CARD FOOTER -->
                <div class="card-footer pt-3 mt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span class="text-[11px] text-amber-400 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Key Attribute</span>
                  </span>
                  <span class="text-[11px] text-slate-400">Verified Leadership</span>
                </div>

                <!-- Micro Accent line on bottom -->
                <div class="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-400 transition-all duration-500"></div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
  personalInfo = PERSONAL_INFO;

  cards = [
    {
      title: "Problem Solver",
      subtitle: "Engineering Under Real Constraints",
      description:
        "Engineered production solutions for complex bottlenecks — including custom TUS resumable uploads with chunk recovery, on-the-fly FFmpeg transcoding, and eliminating commercial Syncfusion dependencies to save ₹1,00,000 monthly.",
      icon: "lightbulb",
      accent: "amber",
      pill: "High Impact"
    },
    {
      title: "Team Player & Leader",
      subtitle: "Sprint Planning & Mentorship",
      description:
        "Leads a 4-member cross-functional engineering team through sprint planning, task delegation, and rigorous architectural code reviews, while remaining actively hands-on in core .NET Core and Angular services.",
      icon: "users",
      accent: "cyan",
      pill: "Lead Engineer"
    },
    {
      title: "Continuous Learner",
      subtitle: "Rapid 17-Month Growth Trajectory",
      description:
        "Promoted from Frontend Developer to Senior Programmer in just 17 months by mastering .NET Core APIs, and subsequently to Project Manager. Constantly evolving across distributed systems, AWS cloud topologies, and low-latency protocols.",
      icon: "trending-up",
      accent: "amber",
      pill: "Lifelong Mastery"
    }
  ];
}
