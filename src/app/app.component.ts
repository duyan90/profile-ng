import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { siteConfig } from './config/site-config';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, ProjectsComponent, ExperienceComponent, EducationComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devportfolio-ng';
  private theme = new ThemeService();
  constructor(private meta: Meta, private titleSrv: Title) {
    this.titleSrv.setTitle(`${siteConfig.name} - ${siteConfig.title}`);
    this.meta.updateTag({ name: 'description', content: siteConfig.description });
    this.meta.updateTag({ property: 'og:title', content: `${siteConfig.name} - ${siteConfig.title}` });
    this.meta.updateTag({ property: 'og:description', content: siteConfig.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: `${siteConfig.name} - ${siteConfig.title}` });
    this.meta.updateTag({ name: 'twitter:description', content: siteConfig.description });
    // Initialize theme (system/light/dark)
    this.theme.init();
  }
}
