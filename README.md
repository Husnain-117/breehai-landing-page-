# breeh - AI Dental Receptionist 🦷

> A modern, professional landing page for AI-powered dental receptionist services

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

breeh is a high-performance, fully responsive landing page showcasing an AI-powered dental receptionist service. Built with modern web technologies, it features smooth animations, professional UI components, and seamless backend integration.

**Key Highlights:**
- ⚡ Lightning-fast performance with Vite
- 🎨 Beautiful, accessible UI with shadcn/ui
- 📱 Fully responsive design
- ♿ WCAG compliant accessibility
- 🔒 Secure backend integration with Supabase

## ✨ Features

### Design & UX
- **Smooth Background Animations** - Subtle, professional wave animations
- **Interactive Components** - Hover effects, transitions, and micro-interactions
- **Modern UI** - Clean, professional design with purple/indigo color scheme
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)

### Functionality
- **Demo Booking Modal** - Form with validation and Supabase integration
- **Smooth Navigation** - Scroll-to-section with offset for fixed header
- **Testimonials Carousel** - Interactive customer stories
- **Pricing Calculator** - Monthly/Yearly toggle
- **FAQ Accordion** - Expandable Q&A section
- **Toast Notifications** - User feedback using Sonner

### Performance & SEO
- **Optimized Bundle** - Code-splitting and lazy loading
- **SEO Metadata** - Open Graph and Twitter cards
- **Accessibility** - Semantic HTML and ARIA labels
- **Fast Loading** - Sub-second initial load times

## 🛠️ Tech Stack

### Core
- **[Vite](https://vitejs.dev/)** - Next-generation build tool
- **[React 18](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives
- **[Lucide Icons](https://lucide.dev/)** - Modern icon library

### State & Data
- **[React Query](https://tanstack.com/query)** - Data fetching and caching
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Backend
- **[Supabase](https://supabase.com/)** - Backend-as-a-Service (auth, database, storage)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/breeh-ai-flow.git

# 2. Navigate to project directory
cd breeh-ai-flow

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

Get your Supabase credentials from your [Supabase Dashboard](https://app.supabase.com/).

## 📜 Available Scripts

```bash
# Development server with hot module replacement
npm run dev

# Production build (optimized and minified)
npm run build

# Development build (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 📁 Project Structure

```
breeh-ai-flow/
├── public/              # Static assets
│   ├── favicon.svg
│   └── placeholder.svg
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui primitives
│   │   ├── Hero.tsx
│   │   ├── DemoSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── BookDemoModal.tsx
│   ├── pages/          # Page components
│   │   └── Index.tsx   # Main landing page
│   ├── integrations/   # Third-party integrations
│   │   └── supabase/   # Supabase client setup
│   ├── lib/           # Utility functions
│   ├── index.css      # Global styles & animations
│   └── main.tsx       # App entry point
├── .env               # Environment variables (create this)
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## 🚢 Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Set environment variables in Netlify dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Import your repository in Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables in project settings

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder is ready to deploy to any static hosting service
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn](https://ui.shadcn.com/) for the amazing component library
- [Vercel](https://vercel.com/) for inspiration and best practices
- The React and Vite communities

---

Made with ❤️ for breeh
