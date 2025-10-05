import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-selector">
      <label for="theme-select" class="theme-label">
        Theme:
      </label>
      <select 
        id="theme-select"
        [value]="themeService.currentMode"
        (change)="onThemeChange($event)"
        class="theme-dropdown"
      >
        <option value="system">🌓 System</option>
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="pink">💖 Pink</option>
      </select>
    </div>
  `,
  styles: [`
    .theme-selector {
      @apply flex items-center gap-2;
    }

    .theme-label {
      @apply text-sm font-medium text-gray-700 dark:text-gray-300 pink:text-pink-700;
    }

    .theme-dropdown {
      @apply px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 pink:border-pink-300 
             rounded-md bg-white dark:bg-gray-800 pink:bg-pink-50
             text-gray-900 dark:text-gray-100 pink:text-pink-900
             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
             transition-colors duration-200;
    }

    .theme-dropdown:hover {
      @apply border-gray-400 dark:border-gray-500 pink:border-pink-400;
    }
  `]
})
export class ThemeSelectorComponent {
  themeService = inject(ThemeService);

  onThemeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const theme = target.value as ThemeMode;
    this.themeService.setTheme(theme);
  }
}
