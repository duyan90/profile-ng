import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../config/site-config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="hasExperience" id="experience" class="p-8 sm:p-12 md:p-16 lg:p-24 bg-white dark:bg-gray-950">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div class="lg:col-span-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100">Experience</h2>
          <div class="w-[75px] h-[5px] mt-2 rounded-full" [style.background-color]="accentColor"></div>
        </div>
        <div class="lg:col-span-8">
          <div class="relative">
            <div class="relative mb-12 last:mb-0" *ngFor="let exp of experience; index as i">
              <div class="absolute left-1/2 -top-2 w-4 h-4 bg-white border-2 rounded-full -translate-x-1/2 z-20 transition-all duration-300" [style.border-color]="accentColor" [style.background-color]="accentColor"></div>
              <div *ngIf="i < experience.length - 1" class="absolute left-1/2 bottom-0 w-0.5 h-12 bg-gray-300 -translate-x-1/2 translate-y-full z-10"></div>
              <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{{ exp.title }}</h3>
                    <p class="text-base sm:text-lg" [style.color]="accentColor">{{ exp.company }}</p>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">{{ exp.dateRange }}</span>
                </div>
                <ul class="space-y-2">
                  <li class="flex items-start" *ngFor="let bullet of exp.bullets">
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                    <span class="text-sm sm:text-base text-gray-600 dark:text-gray-300">{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `:host{display:block}`
})
export class ExperienceComponent {
  experience = siteConfig.experience;
  accentColor = siteConfig.accentColor;
  get hasExperience(): boolean { return this.experience && this.experience.length > 0; }
}
