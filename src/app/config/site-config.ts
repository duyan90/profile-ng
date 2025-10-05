export interface SiteProject {
  name: string;
  description: string;
  link?: string;
  skills?: string[];
}

export interface WorkItem {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  aboutMe: string;
  skills: string[];
  projects: SiteProject[];
  experience: WorkItem[];
  education: EducationItem[];
}

export const siteConfig: SiteConfig = {
  name: "Duy An Nguyen",
  title: "Angular & Node.js Developer",
  description:
    "Angular & Node.js developer with 9+ years of experience building scalable, performant, and responsive enterprise applications.",
  accentColor: "#1d4ed8",
  social: {
    email: "nguyenduyan90@gmail.com",
    linkedin: "https://www.linkedin.com/in/duy-an-nguyễn-26a0726a/",
    github: "https://github.com/duyan90"
  },
  aboutMe: `
I am a software engineer specializing in Angular and Node.js. 
With over 9 years of experience, I have developed enterprise-scale applications focusing on performance, responsive UI, and real-time features. 
My expertise covers Angular SSR, RxJS Signals, TailwindCSS, and scalable Node.js APIs (NestJS, Express).
  `,
  skills: [
    "Angular (v18+)",
    "RxJS / Signals",
    "NgRx",
    "TailwindCSS",
    "Responsive UI/UX",
    "Node.js",
    "NestJS / Express",
    "REST API / GraphQL",
    "PostgreSQL / MySQL / MongoDB",
    "SignalR (Realtime)",
    "Plotly (Data Visualization)",
    "Git / Docker / CI-CD",
    "Agile / Scrum"
  ],
  projects: [
    {
      name: "Enterprise Management System",
      description:
        "Built a large-scale Angular frontend with a Node.js (NestJS) backend to manage thousands of users in real-time.",
      link: "https://demo-enterprise.vercel.app",
      skills: ["Angular", "Node.js", "NestJS", "PostgreSQL", "SignalR"]
    },
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack Angular + Node.js e-commerce system with SSR, payment gateway integration, and responsive design.",
      link: "https://demo-shop.vercel.app",
      skills: ["Angular SSR", "Node.js", "TailwindCSS", "Stripe"]
    },
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio built with Angular SSR, TailwindCSS, and deployed on Vercel.",
      link: "https://duyan-portfolio.vercel.app",
      skills: ["Angular", "Node.js", "TailwindCSS", "Vercel"]
    }
  ],
  experience: [
    {
      company: "FPT Software",
      title: "Angular & Node.js Developer",
      dateRange: "Apr 2021 – Present",
      bullets: [
        "Developed enterprise-scale Angular applications with SSR.",
        "Designed scalable Node.js APIs using NestJS and Express.",
        "Implemented real-time features with SignalR, boosting user engagement.",
        "Improved performance by 30% via lazy loading and optimization."
      ]
    },
    {
      company: "TC Systems Vietnam",
      title: "JavaScript Developer (Angular & Node.js)",
      dateRange: "Dec 2019 – Apr 2021",
      bullets: [
        "Built responsive Angular frontends with REST APIs on Node.js backend.",
        "Integrated third-party APIs and optimized web performance."
      ]
    },
    {
      company: "Nexle Corporation",
      title: "Angular Developer",
      dateRange: "May 2019 – Nov 2019",
      bullets: [
        "Developed Angular apps with modular architecture.",
        "Improved code quality with unit/integration testing."
      ]
    },
    {
      company: "Axon Active Vietnam",
      title: "JavaScript Developer",
      dateRange: "Aug 2017 – May 2019",
      bullets: [
        "Developed and maintained Angular projects for international clients.",
        "Collaborated in Scrum teams, closely working with QA and designers."
      ]
    },
    {
      company: "bbv Software Services",
      title: "Java Developer",
      dateRange: "Oct 2016 – Jul 2017",
      bullets: ["Maintained and developed enterprise Java web applications."]
    },
    {
      company: "Cosatech",
      title: "Java Developer",
      dateRange: "Apr 2015 – Aug 2016",
      bullets: ["Developed and maintained Java enterprise solutions."]
    },
    {
      company: "Infonam",
      title: "Java Developer",
      dateRange: "Jun 2014 – Feb 2016",
      bullets: ["Worked on Java-based enterprise applications."]
    }
  ],
  education: [
    {
      school: "Ho Chi Minh University of Technology",
      degree: "Bachelor of Software Engineering",
      dateRange: "2009 – 2014",
      achievements: [
        "Graduated with strong foundation in Computer Science & Engineering"
      ]
    }
  ]
};


