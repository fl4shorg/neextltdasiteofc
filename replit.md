# NEEXT LTDA - Mundo Digital Conectado

## Overview

This is a React-based web application for NEEXT LTDA, a digital company that has been connecting the digital world for 7 years. The application serves as a main hub showcasing the company's services, social media presence, and various digital tools. It features a modern, responsive design with TypeScript, shadcn/ui components, and a comprehensive navigation system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom design system using CSS variables
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Routing**: React Router with HashRouter for client-side navigation
- **State Management**: React Query (TanStack Query) for server state management

### Design System
- **Theme System**: Custom light/dark theme implementation with next-themes
- **Color Palette**: HSL-based color system with CSS variables for consistency
- **Component Architecture**: Modular component structure with reusable UI components
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Key Features
- **Interactive Header**: Pull-to-toggle theme switching functionality
- **Search System**: Command palette-style search with keyboard shortcuts
- **Navigation**: Multiple navigation methods including sidebar, main nav, and search
- **Carousels**: Embla Carousel for showcasing content like medals and WhatsApp channels
- **Animations**: Custom hooks for scroll animations and typewriter effects
- **Social Integration**: Links to WhatsApp, Telegram, Discord, and Instagram

### Component Structure
- **Layout Components**: Header, Navigation, Footer, Sidebar
- **Content Components**: HeroSection, MedalhaoCarousel, WhatsAppChannelsCarousel
- **UI Components**: Full shadcn/ui component library for consistent design
- **Utility Components**: SearchBar, SupportCTA, ThemeProvider

### Performance Optimizations
- **Code Splitting**: Manual chunk configuration disabled for simpler deployment
- **Asset Optimization**: Optimized images and icons
- **Development Tools**: Component tagger for development mode
- **Build Configuration**: Separate development and production build scripts

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide React icons
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with resolvers
- **Animations**: Embla Carousel React
- **Utilities**: date-fns, input-otp, cmdk

### Development Dependencies
- **Linting**: ESLint with TypeScript and React plugins
- **Type Checking**: TypeScript with strict configuration
- **Development Server**: Vite with hot module replacement
- **Component Development**: Lovable tagger for development mode

### Third-Party Integrations
- **Social Media**: WhatsApp, Telegram, Discord, Instagram links
- **External Services**: Various NEEXT ecosystem links and channels
- **Asset Hosting**: External image hosting for user-generated content
- **Analytics**: Basic meta tags for social media sharing

### Deployment Configuration
- **Static Hosting**: Configured for static file serving with serve
- **Base Path**: Relative path configuration for flexible deployment
- **SEO**: Basic meta tags and robots.txt for search engine optimization
- **PWA Ready**: Service worker configuration available for future enhancement