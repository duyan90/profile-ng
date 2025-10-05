import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../config/site-config';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="hasProjects" id="projects" class="p-8 sm:p-12 md:p-16 lg:p-24 bg-white dark:bg-gray-950">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div class="lg:col-span-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100">Projects</h2>
          <div class="w-[75px] h-[5px] mt-2 rounded-full" [style.background-color]="accentColor"></div>
        </div>
        <div class="lg:col-span-8">
          <div class="space-y-8">
            <div class="group relative" *ngFor="let project of projects; index as i">
              <a *ngIf="project.link; else nolink" [href]="project.link" target="_blank" rel="noopener noreferrer"
                 class="block relative p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1">
                <div class="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700">
                  <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <div class="space-y-4">
                  <div>
                    <span class="text-sm font-mono" [style.color]="accentColor">0{{ i + 1 }}</span>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{{ project.name }}</h3>
                  </div>
                  <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed pr-12 sm:pr-14 md:pr-16">{{ project.description }}</p>
                  <div *ngIf="project.skills?.length" class="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    <span *ngFor="let skill of project.skills" class="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:bg-gray-600">{{ skill }}</span>
                  </div>
                </div>
              </a>
              <ng-template #nolink>
                <div class="block relative p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800">
                  <div class="space-y-4">
                    <div>
                      <span class="text-sm font-mono" [style.color]="accentColor">0{{ i + 1 }}</span>
                      <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{{ project.name }}</h3>
                    </div>
                    <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{{ project.description }}</p>
                    <div *ngIf="project.skills?.length" class="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                      <span *ngFor="let skill of project.skills" class="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium">{{ skill }}</span>
                    </div>
                  </div>
                </div>
              </ng-template>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `:host{display:block}`
})
export class ProjectsComponent {
  projects = siteConfig.projects;
  accentColor = siteConfig.accentColor;
  get hasProjects(): boolean { return this.projects && this.projects.length > 0; }
}
