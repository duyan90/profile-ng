import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../config/site-config';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="hasEducation" id="education" class="p-8 sm:p-12 md:p-16 lg:p-24 bg-white dark:bg-gray-950">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div class="lg:col-span-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
          <div class="w-[75px] h-[5px] mt-2 rounded-full" [style.background-color]="accentColor"></div>
        </div>
        <div class="lg:col-span-8">
          <div class="space-y-8">
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300" *ngFor="let edu of education">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{{ edu.degree }}</h3>
                  <p class="text-base sm:text-lg" [style.color]="accentColor">{{ edu.school }}</p>
                </div>
                <span class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">{{ edu.dateRange }}</span>
              </div>
              <ul class="space-y-2">
                <li class="flex items-start" *ngFor="let achievement of edu.achievements">
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span class="text-sm sm:text-base text-gray-600 dark:text-gray-300">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `:host{display:block}`
})
export class EducationComponent {
  education = siteConfig.education;
  accentColor = siteConfig.accentColor;
  get hasEducation(): boolean { return this.education && this.education.length > 0; }
}
