# Energize Design - Premium Corporate Website

A high-performance, SEO-optimized corporate website for Energize Design, a luxury interior design & construction company based in Jeddah, Saudi Arabia.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v3.4
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Sliders**: Swiper.js
- **Language**: TypeScript
- **Deployment**: Netlify

## ✨ Features

- ✅ **High Performance**: Optimized images, code splitting, lazy loading
- ✅ **SEO Optimized**: Complete metadata, sitemap, robots.txt, structured data
- ✅ **Fully Responsive**: Mobile-first design (320px to 4K screens)
- ✅ **Security**: Security headers, XSS protection, HTTPS enforcement
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Production Ready**: Error handling, loading states, optimized builds

## 🎨 Brand Colors

- **Primary Dark**: `#283b4a`
- **Primary Beige**: `#e4ba8b`
- **Primary Light**: `#fff9f2`

## 📁 Project Structure

```
energize-design/
├── app/                    # Next.js App Router
│   ├── about/             # About page with metadata
│   ├── services/          # Services listing & detail pages
│   ├── projects/          # Projects listing & detail pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   └── three/             # Three.js components
├── lib/                   # Data & utilities
│   ├── projects.ts        # Projects data
│   └── services.ts        # Services data
├── public/                # Static assets
│   ├── images/           # Project images
│   └── robots.txt        # SEO robots file
├── netlify.toml          # Netlify configuration
└── next.config.ts        # Next.js configuration
```

## 🏃 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📄 Pages

### Home (`/`)
- Premium hero section with Three.js
- Services preview
- Featured projects
- Why choose us
- Gallery
- Newsletter
- Contact CTA
- Map section

### About (`/about`)
- Company vision & mission
- Who we are
- Core values

### Services (`/services`)
- Service categories
- Individual service detail pages
- Service features and descriptions

### Projects (`/projects`)
- Project grid
- Individual project detail pages
- Project galleries

### Contact (`/contact`)
- Contact form
- Office location
- Google Maps integration
- Social media links

## 🔧 Configuration

### Netlify Deployment

The project includes `netlify.toml` with optimized settings for:
- Build configuration
- Security headers
- Cache control
- Redirects

### SEO Configuration

- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Located at `/public/robots.txt`
- **Metadata**: Complete OpenGraph and Twitter Card support
- **Structured Data**: Ready for schema.org markup

## 🚀 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with `display: swap`
- CSS optimization
- Static generation for all pages
- Compression enabled
- Security headers configured

## 🔒 Security Features

- XSS Protection
- Content Security Policy ready
- Frame options
- HTTPS enforcement
- Secure headers

## 📊 SEO Features

- Complete metadata for all pages
- Dynamic sitemap generation
- Robots.txt configuration
- OpenGraph tags
- Twitter Card support
- Semantic HTML structure
- Alt text for all images

## 🌐 Deployment

### Netlify

1. Connect your GitHub repository
2. Netlify will automatically detect Next.js
3. Build command: `npm run build`
4. Publish directory: `.next`

### Environment Variables

No environment variables required for basic deployment.

## 📝 License

Private - Energize Design © 2026

## 🔗 Links

- **Website**: https://energize-design.com
- **GitHub**: https://github.com/mohameddzaher/Energize-design
- **Google Maps**: https://maps.app.goo.gl/sqDpD9jAws1s9Scs6

## 👥 Contact

- **Email**: info@energize-designs.com
- **Location**: Jeddah, Saudi Arabia
