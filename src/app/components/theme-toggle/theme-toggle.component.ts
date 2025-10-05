import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-toggle">
      <!-- Theme Buttons -->
      <div class="theme-buttons">
        <button 
          *ngFor="let theme of themes" 
          (click)="setTheme(theme.value)"
          [class]="getButtonClass(theme.value)"
          [title]="theme.label"
          type="button"
        >
          {{ theme.icon }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .theme-toggle {
      @apply inline-block;
    }

    .theme-buttons {
      @apply flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 pink:bg-pink-100 
             rounded-lg border border-gray-200 dark:border-gray-700 pink:border-pink-200;
    }

    .theme-button {
      @apply w-8 h-8 rounded-md flex items-center justify-center text-sm
             transition-all duration-200 hover:scale-105 active:scale-95
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1;
    }

    .theme-button:not(.active) {
      @apply text-gray-600 dark:text-gray-400 pink:text-pink-600
             hover:bg-gray-200 dark:hover:bg-gray-700 pink:hover:bg-pink-200;
    }

    .theme-button.active {
      @apply bg-white dark:bg-gray-700 pink:bg-pink-50
             text-gray-900 dark:text-gray-100 pink:text-pink-900
             shadow-sm border border-gray-300 dark:border-gray-600 pink:border-pink-300;
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  themes = [
    { value: 'system' as ThemeMode, label: 'System Theme', icon: '🌓' },
    { value: 'light' as ThemeMode, label: 'Light Theme', icon: '☀️' },
    { value: 'dark' as ThemeMode, label: 'Dark Theme', icon: '🌙' },
    { value: 'pink' as ThemeMode, label: 'Pink Theme', icon: '💖' }
  ];

  setTheme(theme: ThemeMode): void {
    this.themeService.setTheme(theme);
  }

  getButtonClass(theme: ThemeMode): string {
    const baseClass = 'theme-button';
    const isActive = this.themeService.currentMode === theme;
    return `${baseClass} ${isActive ? 'active' : ''}`;
  }
}
