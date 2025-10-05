import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../config/site-config';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="hero" class="relative isolate overflow-hidden bg-white dark:bg-gray-950 pink:bg-pink-50 py-24 md:h-screen transition-colors duration-300" [style.--accent-color]="accentColor">
      <div class="absolute inset-0 -z-10" [style.background]="gradientBg"></div>
      <div class="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <h2 class="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 dark:text-gray-300 pink:text-pink-700">Hello! 👋</h2>
          <h1 class="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 dark:text-gray-100 pink:text-pink-900">
            I'm <span [style.color]="accentColor">{{ name }}</span>
          </h1>
          <p class="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 dark:text-gray-400 pink:text-pink-600">{{ title }}</p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 dark:text-gray-300 pink:text-pink-700">
        <a *ngIf="email" [href]="'mailto:' + email" aria-label="Email" class="transition-colors duration-300 hover:text-[var(--accent-color)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </a>
        <a *ngIf="linkedin" [href]="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="transition-colors duration-300 hover:text-[var(--accent-color)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 11v5" />
            <path d="M8 8v.01" />
            <path d="M12 16v-5" />
            <path d="M16 16v-3a2 2 0 1 0 -4 0" />
            <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
          </svg>
        </a>
        <a *ngIf="github" [href]="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="transition-colors duration-300 hover:text-[var(--accent-color)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: `:host{display:block}`
})
export class HeroComponent {
  private themeService = inject(ThemeService);
  
  name = siteConfig.name;
  title = siteConfig.title;
  accentColor = siteConfig.accentColor;
  email = siteConfig.social?.email;
  linkedin = siteConfig.social?.linkedin;
  github = siteConfig.social?.github;
  
  // Signal to track theme changes
  currentTheme = signal<ThemeMode>(this.themeService.currentMode);
  
  constructor() {
    // Listen for theme changes
    if (typeof window !== 'undefined') {
      // Check for theme changes periodically (simple approach)
      setInterval(() => {
        const newTheme = this.themeService.currentMode;
        if (newTheme !== this.currentTheme()) {
          this.currentTheme.set(newTheme);
        }
      }, 100);
    }
  }
  
  get gradientBg(): string {
    const c = this.accentColor;
    const theme = this.currentTheme();
    
    // Check current theme state
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    const isPink = typeof document !== 'undefined' && document.documentElement.classList.contains('pink');
    
    if (isPink) {
      // Pink theme gradient
      if (isDark) {
        return `radial-gradient(ellipse 800px 1200px at 0% 0%, ${c}30 0%, ${c}20 20%, ${c}10 40%, rgba(147,51,234,0.2) 70%, rgba(147,51,234,0.4) 90%, rgb(88,28,135) 100%)`;
      } else {
        return `radial-gradient(ellipse 800px 1200px at 0% 0%, ${c}40 0%, ${c}25 20%, ${c}10 40%, rgba(251,207,232,0.3) 70%, rgba(251,207,232,0.8) 90%, rgb(253,244,255) 100%)`;
      }
    } else if (isDark) {
      // Dark theme gradient
      return `radial-gradient(ellipse 800px 1200px at 0% 0%, ${c}30 0%, ${c}20 20%, ${c}10 40%, rgba(55,65,81,0.3) 70%, rgba(55,65,81,0.8) 90%, rgb(17,24,39) 100%)`;
    } else {
      // Light theme gradient (default)
      return `radial-gradient(ellipse 800px 1200px at 0% 0%, ${c}40 0%, ${c}25 20%, ${c}10 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.8) 90%, white 100%)`;
    }
  }
}
