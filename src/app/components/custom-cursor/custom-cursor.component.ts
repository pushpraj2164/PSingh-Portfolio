import { Component, OnInit, OnDestroy, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!isTouch && isVisible) {
      <!-- Precision Center Dot -->
      <div
        class="cursor-dot"
        [style.transform]="'translate3d(' + position.x + 'px, ' + position.y + 'px, 0) translate(-50%, -50%)'"
        [style.width.px]="isPointer ? 6 : 8"
        [style.height.px]="isPointer ? 6 : 8"
        [style.backgroundColor]="isHovered ? '#38bdf8' : '#f59e0b'"
        [style.boxShadow]="isHovered ? '0 0 12px 2px rgba(56, 189, 248, 0.8)' : '0 0 12px 2px rgba(245, 158, 11, 0.8)'"
      ></div>

      <!-- Outer Lagging Trailing Ring -->
      <div
        class="cursor-ring"
        [style.transform]="'translate3d(' + trailingPos.x + 'px, ' + trailingPos.y + 'px, 0) translate(-50%, -50%)'"
        [style.width.px]="isHovered ? 64 : (isPointer ? 48 : 32)"
        [style.height.px]="isHovered ? 64 : (isPointer ? 48 : 32)"
        [style.borderColor]="isHovered ? 'rgba(56, 189, 248, 0.5)' : (isPointer ? 'rgba(245, 158, 11, 0.5)' : 'rgba(255, 255, 255, 0.2)')"
        [style.backgroundColor]="isHovered ? 'rgba(56, 189, 248, 0.05)' : (isPointer ? 'rgba(245, 158, 11, 0.05)' : 'transparent')"
        [style.backdropFilter]="(isHovered || isPointer) ? 'blur(2px)' : 'none'"
      ></div>
    }
  `,
  styles: [`
    .cursor-dot {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      border-radius: 9999px;
      transition: transform 0.075s ease-out, background-color 0.2s ease, width 0.2s ease, height 0.2s ease;
    }

    .cursor-ring {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9998;
      border-radius: 9999px;
      border-width: 1px;
      border-style: solid;
      transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                  height 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                  border-color 0.25s ease, 
                  background-color 0.25s ease;
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  position = { x: -100, y: -100 };
  trailingPos = { x: -100, y: -100 };
  isHovered = false;
  isPointer = false;
  isVisible = false;
  isTouch = false;

  private animationFrameId: number | null = null;
  private mouseMoveHandler?: (e: MouseEvent) => void;
  private mouseLeaveHandler?: () => void;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.isTouch = true;
      return;
    }

    this.mouseMoveHandler = (e: MouseEvent) => {
      this.position.x = e.clientX;
      this.position.y = e.clientY;
      if (!this.isVisible) this.isVisible = true;

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.getAttribute('data-cursor') === 'pointer';

        const isCardHover =
          target.closest('.project-card') ||
          target.getAttribute('data-cursor') === 'card';

        this.isPointer = !!isClickable;
        this.isHovered = !!isCardHover;
      }
    };

    this.mouseLeaveHandler = () => {
      this.isVisible = false;
    };

    window.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseleave', this.mouseLeaveHandler);

    this.startLagLoop();
  }

  private startLagLoop() {
    const follow = () => {
      const dx = this.position.x - this.trailingPos.x;
      const dy = this.position.y - this.trailingPos.y;
      this.trailingPos.x += dx * 0.18;
      this.trailingPos.y += dy * 0.18;

      this.animationFrameId = requestAnimationFrame(follow);
    };

    this.ngZone.runOutsideAngular(() => {
      this.animationFrameId = requestAnimationFrame(follow);
    });
  }

  ngOnDestroy() {
    if (this.mouseMoveHandler) {
      window.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    if (this.mouseLeaveHandler) {
      document.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
