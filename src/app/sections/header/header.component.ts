import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../config/site-config';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header id="header" class="fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300" [ngClass]="{ 'bg-white/80 backdrop-blur-sm dark:bg-gray-900/70': isScrolled }">
      <nav class="max-w-7xl mx-auto px-8 py-4">
        <div class="flex items-center justify-between">
          <ul class="flex items-center gap-8">
          <li>
              <a href="#about" class="transition-colors font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" [ngClass]="activeId==='about' ? 'text-black dark:text-white' : ''">About</a>
          </li>
          <li *ngIf="hasProjects">
              <a href="#projects" class="transition-colors font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" [ngClass]="activeId==='projects' ? 'text-black dark:text-white' : ''">Projects</a>
          </li>
          <li *ngIf="hasExperience">
              <a href="#experience" class="transition-colors font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" [ngClass]="activeId==='experience' ? 'text-black dark:text-white' : ''">Experience</a>
          </li>
          <li *ngIf="hasEducation">
              <a href="#education" class="transition-colors font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" [ngClass]="activeId==='education' ? 'text-black dark:text-white' : ''">Education</a>
          </li>
          </ul>
          <div class="flex items-center gap-3">
            <label for="theme" class="sr-only">Theme</label>
            <select id="theme" class="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white dark:bg-gray-800 dark:text-gray-200 pink:bg-pink-50 pink:text-pink-900 pink:border-pink-300 shadow-sm hover:border-gray-400 dark:hover:border-gray-500 pink:hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-gray-600 pink:focus:ring-pink-500" [value]="mode" (change)="onThemeChange($event)">
              <option value="system">🌓 System</option>
              <option value="light">☀️ Light</option>
              <option value="dark">🌙 Dark</option>
              <option value="pink">💖 Pink</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: `:host{display:block}`
})
export class HeaderComponent {
  isScrolled = false;
  hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
  hasEducation = siteConfig.education && siteConfig.education.length > 0;
  mode: ThemeMode = 'system';
  private theme = new ThemeService();
  activeId: 'about' | 'projects' | 'experience' | 'education' | '' = '';
  ngOnInit() {
    this.mode = this.theme.currentMode;
    if (typeof window !== 'undefined') {
      const ids = ['about','projects','experience','education'];
      const els = ids
        .map(id => ({ id, el: document.getElementById(id) }))
        .filter(x => !!x.el) as { id: any, el: Element }[];
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.activeId = (visible.target as HTMLElement).id as any;
      }, { rootMargin: '-100px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
      els.forEach(x => observer.observe(x.el));
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = typeof window !== 'undefined' && window.scrollY > 100;
  }

  onThemeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ThemeMode;
    this.mode = value;
    this.theme.setTheme(value);
  }
}
