import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../icons/icons.component';
import {
  SKILLS_CATEGORIES,
  TECH_NETWORK,
  NETWORK_CONNECTIONS,
} from '../../data/portfolio-data';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="skills" class="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div class="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <!-- Section Label -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            03 / TECH STACK
          </span>
          <div class="h-[1px] w-12 bg-amber-500/40"></div>
        </div>

        <!-- Section Heading -->
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technology Ecosystem &amp; Core Stack
          </h2>
          <p class="mt-3 text-base text-slate-400">
            A battle-hardened stack centered around .NET Core and modern web engineering, optimized for distributed architecture, low latency, and real business scalability.
          </p>
        </div>

        <!-- Grid: Left Visual Network Canvas + Right Proficiency Bars -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left: Interactive Architectural Node Network (SVG) -->
          <div class="lg:col-span-7 rounded-3xl bg-[#0c101a] border border-white/[0.1] p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl">
            <!-- Header info -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div class="flex items-center gap-2">
                <app-icon name="terminal" className="w-4 h-4 text-amber-400"></app-icon>
                <span class="text-xs font-mono font-medium text-slate-300">
                  SYSTEM_TOPOLOGY // CORE_NODES
                </span>
              </div>
              <span class="text-[11px] font-mono text-slate-400">
                Hover node to inspect links
              </span>
            </div>

            <!-- Interactive Graph Container -->
            <div class="relative w-full aspect-[4/3] sm:aspect-[16/11] mt-4 flex items-center justify-center">
              <!-- SVG Connecting Lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                @for (conn of networkConnections; track $index) {
                  @if (getNode(conn.from) && getNode(conn.to)) {
                    <line
                      [attr.x1]="getNode(conn.from)!.x + '%'"
                      [attr.y1]="getNode(conn.from)!.y + '%'"
                      [attr.x2]="getNode(conn.to)!.x + '%'"
                      [attr.y2]="getNode(conn.to)!.y + '%'"
                      [attr.stroke]="isConnHighlighted(conn.from, conn.to) ? 'rgba(245, 158, 11, 0.85)' : 'rgba(255, 255, 255, 0.12)'"
                      [attr.stroke-width]="isConnHighlighted(conn.from, conn.to) ? '2.5' : '1'"
                      [attr.stroke-dasharray]="isConnHighlighted(conn.from, conn.to) ? 'none' : '3,3'"
                      class="transition-all duration-300"
                    />
                  }
                }
              </svg>

              <!-- Render Technology Nodes -->
              @for (node of techNetwork; track node.id) {
                <button
                  (mouseenter)="hoveredNode = node.id"
                  (mouseleave)="hoveredNode = null"
                  [style.left.%]="node.x"
                  [style.top.%]="node.y"
                  style="transform: translate(-50%, -50%);"
                  class="absolute z-10 transition-all duration-300 rounded-2xl flex items-center justify-center group focus:outline-none cursor-pointer"
                  [ngClass]="[
                    node.id === 'dotnet'
                      ? 'px-5 py-3.5 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-black font-extrabold shadow-[0_0_35px_rgba(245,158,11,0.5)] border-2 border-amber-300 animate-pulse-subtle'
                      : node.size === 'md'
                      ? 'px-3.5 py-2 bg-[#121826] border border-white/[0.15] text-slate-100 font-bold hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                      : 'px-2.5 py-1.5 bg-[#0f1420] border border-white/[0.08] text-slate-300 font-medium text-xs hover:border-sky-400',
                    hoveredNode && !isNodeConnected(node.id) ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                  ]"
                >
                  <span
                    class="font-mono text-center select-none"
                    [ngClass]="node.id === 'dotnet' ? 'text-sm sm:text-base tracking-wide font-extrabold' : node.size === 'md' ? 'text-xs sm:text-sm font-bold' : 'text-[11px]'"
                  >
                    {{ node.name }}
                  </span>
                </button>
              }
            </div>

            <!-- Bottom Status legend -->
            <div class="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Core Engine: .NET Core &amp; C#</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <span>Distributed Peripherals</span>
              </div>
            </div>
          </div>

          <!-- Right: Skill Proficiency Panel with Header, Body, Footer architecture -->
          <div class="lg:col-span-5 space-y-6">
            <!-- Category Switcher Tabs -->
            <div class="flex rounded-xl bg-white/[0.04] p-1 border border-white/[0.08]">
              @for (cat of skillsCategories; track cat.category; let idx = $index) {
                <button
                  (click)="activeCategory = idx"
                  class="flex-1 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer"
                  [ngClass]="activeCategory === idx
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white'"
                >
                  {{ cat.category.split(' ')[0] }}
                </button>
              }
            </div>

            <!-- Active Category Skills Card -->
            <div class="p-6 rounded-3xl bg-[#0c101a] border border-white/[0.1] backdrop-blur-md space-y-5 flex flex-col justify-between">
              <!-- CARD HEADER -->
              <div class="card-header flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h3 class="text-base font-bold text-white flex items-center gap-2">
                  <app-icon name="cpu" className="w-4 h-4 text-amber-400"></app-icon>
                  <span>{{ skillsCategories[activeCategory].category }}</span>
                </h3>
                <span class="text-xs font-mono text-slate-400">
                  Proficiency Rating
                </span>
              </div>

              <!-- CARD BODY -->
              <div class="card-body space-y-4">
                @for (skill of skillsCategories[activeCategory].skills; track skill.name) {
                  <div class="space-y-1.5 group">
                    <div class="flex justify-between items-center text-xs">
                      <span class="font-bold text-slate-200 group-hover:text-amber-300 transition-colors">
                        {{ skill.name }}
                      </span>
                      <span class="font-mono text-amber-400 font-semibold">
                        {{ skill.level }}%
                      </span>
                    </div>

                    <!-- Progress Bar Container -->
                    <div class="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden p-0.5 border border-white/[0.05]">
                      <div
                        class="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                        [style.width.%]="skill.level"
                      ></div>
                    </div>

                    <div class="text-[11px] font-mono text-slate-400 leading-tight">
                      {{ skill.detail }}
                    </div>
                  </div>
                }
              </div>

              <!-- CARD FOOTER -->
              <div class="card-footer pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span class="text-emerald-400 flex items-center gap-1.5">
                  <app-icon name="check-circle-2" className="w-3.5 h-3.5"></app-icon>
                  <span>Production Tested</span>
                </span>
                <span class="text-amber-300 font-bold">100% Execution Ready</span>
              </div>
            </div>

            <!-- Supplementary Tools Banner -->
            <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span class="text-slate-300">Tooling &amp; Environment:</span>
              <span class="text-amber-300">Visual Studio &bull; VS Code &bull; Postman &bull; Git &bull; SVN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TechStackComponent {
  hoveredNode: string | null = null;
  activeCategory: number = 0;

  skillsCategories = SKILLS_CATEGORIES;
  techNetwork = TECH_NETWORK;
  networkConnections = NETWORK_CONNECTIONS;

  getNode(id: string) {
    return this.techNetwork.find((n) => n.id === id);
  }

  isConnHighlighted(from: string, to: string): boolean {
    if (!this.hoveredNode) return false;
    return from === this.hoveredNode || to === this.hoveredNode;
  }

  isNodeConnected(nodeId: string): boolean {
    if (!this.hoveredNode) return true;
    if (this.hoveredNode === nodeId) return true;
    return this.networkConnections.some(
      (c) =>
        (c.from === this.hoveredNode && c.to === nodeId) ||
        (c.to === this.hoveredNode && c.from === nodeId)
    );
  }
}
