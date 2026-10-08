import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-background-effects',
  standalone: true,
  template: `
    <div class="background-effects-wrapper">
      <!-- Dynamic Cursor Spotlight -->
      <div 
        #spotlight 
        class="spotlight-layer"
      ></div>

      <!-- Atmospheric ambient glows -->
      <div class="ambient-glow glow-amber-1 animate-pulse-subtle"></div>
      <div class="ambient-glow glow-sky-2 animate-pulse-subtle"></div>
      <div class="ambient-glow glow-amber-3 animate-pulse-subtle"></div>

      <!-- High-precision architectural grid with radial fade -->
      <div class="tech-grid-overlay tech-grid-bg"></div>

      <!-- HTML5 Canvas micro-particles -->
      <canvas #particleCanvas class="particle-canvas"></canvas>
    </div>
  `,
  styles: [`
    .background-effects-wrapper {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 0;
      overflow: hidden;
    }

    .spotlight-layer {
      pointer-events: none;
      position: absolute;
      inset: 0;
      transition: opacity 0.3s ease;
      background: radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(245, 158, 11, 0.04), transparent 80%);
    }

    .ambient-glow {
      position: absolute;
      border-radius: 9999px;
      pointer-events: none;
    }

    .glow-amber-1 {
      top: -15%;
      left: 10%;
      width: 550px;
      height: 550px;
      background: rgba(217, 119, 6, 0.05);
      filter: blur(140px);
    }

    .glow-sky-2 {
      top: 40%;
      right: -10%;
      width: 600px;
      height: 600px;
      background: rgba(2, 132, 199, 0.04);
      filter: blur(160px);
    }

    .glow-amber-3 {
      bottom: 10%;
      left: 25%;
      width: 500px;
      height: 500px;
      background: rgba(245, 158, 11, 0.03);
      filter: blur(130px);
    }

    .tech-grid-overlay {
      position: absolute;
      inset: 0;
      opacity: 0.3;
      mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 85%);
      -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 85%);
    }

    .particle-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
    }
  `]
})
export class BackgroundEffectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('spotlight') spotlightRef!: ElementRef<HTMLDivElement>;
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private animationFrameId: number | null = null;
  private resizeListener?: () => void;
  private mouseMoveListener?: (e: MouseEvent) => void;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Mouse movement spotlight
    this.mouseMoveListener = (e: MouseEvent) => {
      if (this.spotlightRef?.nativeElement) {
        this.spotlightRef.nativeElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        this.spotlightRef.nativeElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', this.mouseMoveListener);

    // Canvas particle simulation
    this.initParticles();
  }

  private initParticles() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    this.resizeListener = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', this.resizeListener);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 55;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = [
      'rgba(245, 158, 11, ',  // amber
      'rgba(56, 189, 248, ',  // sky blue
      'rgba(148, 163, 184, ', // silver slate
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      this.animationFrameId = requestAnimationFrame(render);
    };

    // Run outside Angular change detection zone for 60fps performance
    this.ngZone.runOutsideAngular(() => {
      render();
    });
  }

  ngOnDestroy() {
    if (this.mouseMoveListener) {
      window.removeEventListener('mousemove', this.mouseMoveListener);
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
