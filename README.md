# 🚀 DevPortfolio Angular

A modern, responsive developer portfolio built with Angular 18+ and TailwindCSS, featuring dynamic theme switching and server-side rendering (SSR).

## ✨ Features

- 🎨 **Dynamic Theme System** - Support for Light, Dark, Pink themes with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Server-Side Rendering (SSR)** - Fast initial page loads and SEO-friendly
- 🔧 **Modern Angular** - Built with Angular 18+ standalone components
- 🎯 **TypeScript** - Fully typed for better development experience
- 💨 **TailwindCSS** - Utility-first CSS framework for rapid styling
- 🌟 **Smooth Animations** - Beautiful transitions and hover effects

## 🛠️ Tech Stack

### Frontend
- **Angular 18+** - Latest Angular framework with standalone components
- **TypeScript 5.5** - Type-safe JavaScript
- **TailwindCSS 3.4** - Utility-first CSS framework
- **RxJS Signals** - Reactive programming with modern Angular signals
- **Angular SSR** - Server-side rendering for better performance

### Development Tools
- **Angular CLI 18** - Command line interface for Angular
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **Karma & Jasmine** - Testing framework
- **ESLint** - Code linting and formatting

### Deployment
- **Express.js** - Server for SSR
- **Vercel/Netlify Ready** - Easy deployment configuration

## 🎨 Theme System

The portfolio includes a sophisticated theme system with:

### Supported Themes
- **🌓 System** - Automatically follows your OS theme preference
- **☀️ Light** - Clean white background with dark text
- **🌙 Dark** - Elegant dark theme with light text
- **💖 Pink** - Beautiful pink gradient theme

### Theme Features
- **Persistent Storage** - Your theme choice is saved in localStorage
- **Real-time Switching** - Instant theme changes without page reload
- **System Integration** - Automatically detects and follows OS dark/light mode
- **Smooth Transitions** - Beautiful color transitions between themes
- **Responsive Design** - All themes work perfectly on all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/devportfolio-ng.git
cd devportfolio-ng
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
Navigate to `http://localhost:4200`

### Build for Production

```bash
# Build the application
npm run build

# Serve with SSR
npm run serve:ssr
```

## ⚙️ Configuration

### Personal Information
Edit `src/app/config/site-config.ts` to customize:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  accentColor: "#1d4ed8", // Your brand color
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  },
  // ... other configuration
};
```

### Adding New Themes

1. **Update ThemeService** in `src/app/services/theme.service.ts`:
```typescript
export type ThemeMode = 'system' | 'light' | 'dark' | 'pink' | 'your-theme';
```

2. **Add CSS classes** in `src/styles.css`:
```css
.your-theme body { @apply bg-your-color text-your-text; }
```

3. **Update theme selector** components to include your new theme.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── theme-selector/  # Theme dropdown component
│   │   └── theme-toggle/    # Theme button component
│   ├── sections/           # Page sections
│   │   ├── header/         # Navigation header
│   │   ├── hero/           # Hero section
│   │   ├── about/          # About section
│   │   ├── projects/       # Projects showcase
│   │   ├── experience/     # Work experience
│   │   ├── education/      # Education background
│   │   └── footer/         # Footer section
│   ├── services/           # Angular services
│   │   └── theme.service.ts # Theme management service
│   ├── config/             # Configuration files
│   │   └── site-config.ts  # Personal information
│   └── app.component.ts    # Main app component
├── styles.css              # Global styles with theme support
└── index.html              # Main HTML file
```

## 🎯 Key Components

### ThemeService
- Manages theme state and persistence
- Handles system preference detection
- Provides reactive theme switching

### Theme Components
- **ThemeSelectorComponent** - Dropdown theme picker
- **ThemeToggleComponent** - Button-based theme switcher

### Sections
- **HeroComponent** - Dynamic hero with theme-aware gradients
- **HeaderComponent** - Responsive navigation with theme selector
- **AboutComponent** - Personal information and skills
- **ProjectsComponent** - Portfolio projects showcase
- **ExperienceComponent** - Work experience timeline
- **EducationComponent** - Educational background

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Angular and configure SSR
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/devportfolio-ng` folder
3. Configure SSR if needed

### Other Platforms
The project is compatible with any static hosting platform or can be deployed with SSR support.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Tabler Icons](https://tabler-icons.io/)
- Inspired by modern portfolio designs

---

**Made with ❤️ using Angular 18+ and TailwindCSS**

## 📄 Copyright

© 2025 Duy An Nguyen. All rights reserved.

This project is created and maintained by Duy An Nguyen. While the code is open source and available under the MIT License, please respect the intellectual property and give proper attribution when using or modifying this portfolio template.