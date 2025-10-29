# Iron Air HC - Modern HVAC Website

A beautiful, modern, and advanced website for Iron Air HC - a professional HVAC company. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion with **advanced SEO optimization**.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions and interactions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance**: Lightning-fast with Next.js optimizations
- **Accessibility**: WCAG compliant with proper semantic HTML

### 🎯 Advanced SEO Features

#### Technical SEO
- ✅ **Comprehensive Meta Tags** - Dynamic titles, descriptions, Open Graph
- ✅ **Structured Data (JSON-LD)** - LocalBusiness, Organization, Service, Review, FAQ schemas
- ✅ **Dynamic Sitemap** - Auto-generated XML sitemap
- ✅ **Robots.txt** - Search engine crawling optimization
- ✅ **Canonical URLs** - Duplicate content prevention
- ✅ **Mobile Optimization** - PWA-ready with web manifest
- ✅ **Security Headers** - Content Security Policy, XSS protection

#### Analytics & Tracking
- ✅ **Google Analytics 4** - Advanced traffic tracking
- ✅ **Google Tag Manager** - Tag management system
- ✅ **Facebook Pixel** - Social media retargeting
- ✅ **Microsoft Clarity** - Heatmaps and session recording
- ✅ **LinkedIn Insight Tag** - B2B conversion tracking
- ✅ **Custom Event Tracking** - Phone clicks, form submissions, CTAs

#### Local SEO
- ✅ **LocalBusiness Schema** - Rich snippets for local search
- ✅ **NAP Consistency** - Name, Address, Phone across all pages
- ✅ **Service Areas** - Geographic targeting
- ✅ **Review Schema** - Star ratings in search results
- ✅ **Operating Hours** - Structured business hours

#### Performance Optimization
- ✅ **Core Web Vitals** - Optimized for LCP, FID, CLS
- ✅ **Image Optimization** - Next.js Image component ready
- ✅ **Font Optimization** - Google Fonts with display swap
- ✅ **Code Splitting** - Automatic route-based splitting
- ✅ **Lazy Loading** - On-scroll component loading

## 📋 Sections Included

1. **Header** - Sticky navigation with mega menu dropdown
2. **Hero Section** - Minimal, centered design with brands carousel
3. **Services** - Comprehensive HVAC services showcase (9 services)
4. **Why Choose Us** - Company value propositions (8 features)
5. **Warranty** - 10-year warranty information
6. **Reviews** - Google-style reviews carousel with 10 customer testimonials
7. **Service Area** - Geographic coverage with 18+ locations
8. **Contact Form** - Lead capture with advanced tracking
9. **Footer** - Complete footer with contact and links
10. **Floating CTA** - Persistent call-to-action button

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Steps

1. **Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Set Up Environment Variables**
```bash
# Copy the example file
cp .env.local.example .env.local

# Edit .env.local and add your tracking IDs
```

3. **Run Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 SEO Configuration

### Required Setup

1. **Google Analytics 4**
   - Create property at [analytics.google.com](https://analytics.google.com)
   - Add `NEXT_PUBLIC_GA_ID` to `.env.local`

2. **Google Search Console**
   - Verify site at [search.google.com/search-console](https://search.google.com/search-console)
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

3. **Google My Business**
   - Claim business listing
   - Ensure NAP matches website

4. **Facebook Pixel** (Optional)
   - Create pixel at [business.facebook.com](https://business.facebook.com)
   - Add `NEXT_PUBLIC_FB_PIXEL_ID` to `.env.local`

5. **Microsoft Clarity** (Optional)
   - Create project at [clarity.microsoft.com](https://clarity.microsoft.com)
   - Add `NEXT_PUBLIC_CLARITY_ID` to `.env.local`

See **[SEO-GUIDE.md](./SEO-GUIDE.md)** for comprehensive SEO setup instructions.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/Users/junior/Desktop/IronAir/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage with all sections
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Header.tsx          # Navigation with tracking
│   ├── Hero.tsx            # Hero section with promos
│   ├── Services.tsx        # Services grid
│   ├── Reviews.tsx         # Customer testimonials
│   ├── Footer.tsx          # Footer with newsletter
│   ├── Analytics.tsx       # Analytics integration
│   ├── StructuredData.tsx  # JSON-LD schemas
│   └── SEOHead.tsx         # Dynamic SEO meta tags
├── lib/
│   └── tracking.ts         # Event tracking functions
├── public/
│   ├── robots.txt          # Search engine directives
│   └── site.webmanifest    # PWA manifest
├── middleware.ts           # Security headers & redirects
├── SEO-GUIDE.md           # Comprehensive SEO guide
└── README.md              # This file
```

## 🎨 Customization

### Update Company Information

Search and replace throughout the project:
- **Company Name**: "Iron Air HC"
- **Phone Number**: "365-888-5854"
- **Email**: "info@ironairhc.com"
- **Address**: Update in Footer.tsx and StructuredData.tsx
- **Domain**: "ironairhc.com" → "yourdomain.com"

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },    // Main brand color (blue)
  iron: { ... },       // Neutral grays
  accent: { ... },     // Accent colors
}
```

### Update Content

All content is in component files:
- **Services**: `components/Services.tsx`
- **Reviews**: `components/Reviews.tsx`
- **Service Areas**: `components/ServiceArea.tsx`

## 📊 Tracking & Analytics

### Event Tracking Implemented

The following conversions are automatically tracked:

- ✅ Phone clicks (all instances)
- ✅ Quote button clicks
- ✅ Form submissions
- ✅ Newsletter signups
- ✅ Service page views
- ✅ CTA interactions

Import and use tracking functions:

```typescript
import { trackConversion } from '@/lib/tracking'

// Track phone click
trackConversion.phoneClick()

// Track form submission
trackConversion.formSubmit('contact_form')

// Track quote request
trackConversion.quoteRequest()
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically

### Environment Variables for Production

Add these in your hosting platform:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID
- `NEXT_PUBLIC_CLARITY_ID` - Microsoft Clarity ID

### Other Platforms

Build the static site:
```bash
npm run build
```

Deploy the `.next` folder to any hosting provider (Netlify, AWS, etc.)

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly UI (48px minimum tap targets)
- Mobile-first CSS approach
- Fast mobile page speed
- PWA-ready (installable)

## 🔒 Security Features

- Content Security Policy (CSP)
- XSS Protection headers
- HTTPS redirect middleware
- Frame-Options: DENY
- Referrer-Policy configuration

## 📈 Expected SEO Results

### Month 1-3
- Complete indexation
- Initial ranking improvements
- Local pack appearances

### Month 4-6
- 20-40% organic traffic increase
- Improved keyword rankings
- More phone calls and leads

### Month 7-12
- Dominant local rankings
- Consistent traffic growth
- High-quality lead generation

## 🎯 Key Performance Indicators

Monitor these metrics:
- **Organic Traffic** - Google Analytics
- **Keyword Rankings** - Google Search Console
- **Phone Calls** - Call tracking
- **Form Submissions** - Goal tracking
- **Page Speed** - Core Web Vitals
- **Local Visibility** - Google My Business insights

## 📞 Contact Information to Update

1. Phone number: Search for "365-888-5854"
2. Email: Search for "info@ironairhc.com"
3. Address: Update in `components/Footer.tsx` and `components/StructuredData.tsx`
4. Social media: Update links in `components/Footer.tsx`
5. Business hours: Update in `components/StructuredData.tsx`

## 🎨 Design Features

- Gradient backgrounds with mesh patterns
- Glass morphism effects
- Micro-interactions on hover
- Smooth scroll animations
- Floating decorative elements
- Custom animated components

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling

## 📚 Documentation

- **[SEO-GUIDE.md](./SEO-GUIDE.md)** - Complete SEO implementation guide
- **[.env.local.example](./.env.local.example)** - Environment variables reference

## 🤝 Support

For questions about implementation, SEO setup, or tracking configuration, contact your web developer.

## 📄 License

© 2024 Iron Air HC. All rights reserved.

---

**Built with ❤️ for Iron Air HC**  
*Featuring advanced SEO, analytics tracking, and conversion optimization for maximum visibility and lead generation.*
