import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      [attr.class]="'icon-svg ' + className" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      [ngSwitch]="name"
    >
      <!-- Arrow Right -->
      <ng-container *ngSwitchCase="'arrow-right'">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </ng-container>

      <!-- Arrow Up Right -->
      <ng-container *ngSwitchCase="'arrow-up-right'">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </ng-container>

      <!-- Arrow Up -->
      <ng-container *ngSwitchCase="'arrow-up'">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </ng-container>

      <!-- Chevron Left -->
      <ng-container *ngSwitchCase="'chevron-left'">
        <polyline points="15 18 9 12 15 6"></polyline>
      </ng-container>

      <!-- Chevron Right -->
      <ng-container *ngSwitchCase="'chevron-right'">
        <polyline points="9 18 15 12 9 6"></polyline>
      </ng-container>

      <!-- External Link -->
      <ng-container *ngSwitchCase="'external-link'">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </ng-container>

      <!-- File Down -->
      <ng-container *ngSwitchCase="'file-down'">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="18" x2="12" y2="12"></line>
        <polyline points="9 15 12 18 15 15"></polyline>
      </ng-container>

      <!-- Check Circle 2 -->
      <ng-container *ngSwitchCase="'check-circle-2'">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </ng-container>

      <!-- Check -->
      <ng-container *ngSwitchCase="'check'">
        <polyline points="20 6 9 17 4 12"></polyline>
      </ng-container>

      <!-- Copy -->
      <ng-container *ngSwitchCase="'copy'">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
      </ng-container>

      <!-- Terminal -->
      <ng-container *ngSwitchCase="'terminal'">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </ng-container>

      <!-- Database -->
      <ng-container *ngSwitchCase="'database'">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </ng-container>

      <!-- Server -->
      <ng-container *ngSwitchCase="'server'">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </ng-container>

      <!-- Layers -->
      <ng-container *ngSwitchCase="'layers'">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </ng-container>

      <!-- Cpu -->
      <ng-container *ngSwitchCase="'cpu'">
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="15" x2="23" y2="15"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="15" x2="4" y2="15"></line>
      </ng-container>

      <!-- Cloud -->
      <ng-container *ngSwitchCase="'cloud'">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </ng-container>

      <!-- Globe -->
      <ng-container *ngSwitchCase="'globe'">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </ng-container>

      <!-- Zap -->
      <ng-container *ngSwitchCase="'zap'">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </ng-container>

      <!-- Video -->
      <ng-container *ngSwitchCase="'video'">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </ng-container>

      <!-- Credit Card -->
      <ng-container *ngSwitchCase="'credit-card'">
        <rect width="22" height="16" x="1" y="4" rx="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </ng-container>

      <!-- Compass -->
      <ng-container *ngSwitchCase="'compass'">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </ng-container>

      <!-- Mail -->
      <ng-container *ngSwitchCase="'mail'">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </ng-container>

      <!-- Phone -->
      <ng-container *ngSwitchCase="'phone'">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </ng-container>

      <!-- Map Pin -->
      <ng-container *ngSwitchCase="'map-pin'">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </ng-container>

      <!-- Send -->
      <ng-container *ngSwitchCase="'send'">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </ng-container>

      <!-- Calendar -->
      <ng-container *ngSwitchCase="'calendar'">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </ng-container>

      <!-- Briefcase -->
      <ng-container *ngSwitchCase="'briefcase'">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </ng-container>

      <!-- Graduation Cap -->
      <ng-container *ngSwitchCase="'graduation-cap'">
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
        <path d="M22 10v6"></path>
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
      </ng-container>

      <!-- Award -->
      <ng-container *ngSwitchCase="'award'">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
      </ng-container>

      <!-- Star -->
      <ng-container *ngSwitchCase="'star'">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </ng-container>

      <!-- Quote -->
      <ng-container *ngSwitchCase="'quote'">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
      </ng-container>

      <!-- Menu -->
      <ng-container *ngSwitchCase="'menu'">
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </ng-container>

      <!-- X -->
      <ng-container *ngSwitchCase="'x'">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </ng-container>

      <!-- Lightbulb -->
      <ng-container *ngSwitchCase="'lightbulb'">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
      </ng-container>

      <!-- Users -->
      <ng-container *ngSwitchCase="'users'">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </ng-container>

      <!-- User Check -->
      <ng-container *ngSwitchCase="'user-check'">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <polyline points="16 11 18 13 22 9"></polyline>
      </ng-container>

      <!-- Trending Up -->
      <ng-container *ngSwitchCase="'trending-up'">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </ng-container>

      <!-- Shield Check -->
      <ng-container *ngSwitchCase="'shield-check'">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        <path d="m9 12 2 2 4-4"></path>
      </ng-container>

      <!-- Shield -->
      <ng-container *ngSwitchCase="'shield'">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </ng-container>

      <!-- Clock -->
      <ng-container *ngSwitchCase="'clock'">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </ng-container>

      <!-- Message Square -->
      <ng-container *ngSwitchCase="'message-square'">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </ng-container>

      <!-- Sparkles -->
      <ng-container *ngSwitchCase="'sparkles'">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        <path d="M5 3v4"></path>
        <path d="M19 17v4"></path>
        <path d="M3 5h4"></path>
        <path d="M17 19h4"></path>
      </ng-container>

      <!-- Git Branch -->
      <ng-container *ngSwitchCase="'git-branch'">
        <line x1="6" x2="6" y1="3" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
      </ng-container>

      <!-- Git Commit -->
      <ng-container *ngSwitchCase="'git-commit'">
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="3" x2="9" y1="12" y2="12"></line>
        <line x1="15" x2="21" y1="12" y2="12"></line>
      </ng-container>

      <!-- Code / Code 2 -->
      <ng-container *ngSwitchCase="'code-2'">
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </ng-container>
      <ng-container *ngSwitchCase="'code'">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </ng-container>

      <!-- Workflow -->
      <ng-container *ngSwitchCase="'workflow'">
        <rect width="8" height="8" x="3" y="3" rx="2"></rect>
        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
        <rect width="8" height="8" x="13" y="13" rx="2"></rect>
      </ng-container>

      <!-- Layout -->
      <ng-container *ngSwitchCase="'layout'">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </ng-container>

      <!-- Heart -->
      <ng-container *ngSwitchCase="'heart'">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </ng-container>

      <!-- LinkedIn -->
      <ng-container *ngSwitchCase="'linkedin'">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </ng-container>

      <!-- GitHub -->
      <ng-container *ngSwitchCase="'github'">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </ng-container>

      <!-- Default Fallback -->
      <ng-container *ngSwitchDefault>
        <circle cx="12" cy="12" r="10"></circle>
      </ng-container>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .icon-svg {
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
    }
  `]
})
export class AppIconComponent {
  @Input() name: string = 'check';
  @Input() className: string = 'w-4 h-4';
}
