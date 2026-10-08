import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { BackgroundEffectsComponent } from './components/background-effects/background-effects.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { WhyMeComponent } from './components/why-me/why-me.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { GsapAnimationService } from './services/gsap-animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CustomCursorComponent,
    BackgroundEffectsComponent,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    TechStackComponent,
    ExperienceComponent,
    ServicesComponent,
    WorkflowComponent,
    WhyMeComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="relative min-h-screen bg-[#080a0f] text-slate-100 selection:bg-amber-500/30 selection:text-white">
      <!-- Interactive Custom Cursor -->
      <app-custom-cursor></app-custom-cursor>

      <!-- Atmospheric Ambient Glows & Particle Canvas -->
      <app-background-effects></app-background-effects>

      <!-- Glassmorphic Sticky Header -->
      <app-navigation></app-navigation>

      <!-- Main Semantic Portfolio Sections -->
      <main class="relative z-10 flex flex-col">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-projects></app-projects>
        <app-tech-stack></app-tech-stack>
        <app-experience></app-experience>
        <app-services></app-services>
        <app-workflow></app-workflow>
        <app-why-me></app-why-me>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
      </main>

      <!-- Cinematic Minimal Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'pushpraj-portfolio';

  constructor(private gsapService: GsapAnimationService) {}

  ngAfterViewInit() {
    // Delay slightly to ensure children DOM nodes are rendered
    setTimeout(() => {
      this.gsapService.initAnimations();
    }, 100);
  }

  ngOnDestroy() {
    this.gsapService.destroyAnimations();
  }
}
