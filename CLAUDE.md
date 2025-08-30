# APU Mountain Travel Website - Developer Guide

## Project Overview

Official website for APU Mountain Travel (APU Viajes de Montaña), a Colombian company specializing in rock climbing, trekking, and mountaineering experiences. The site features a modern, responsive design with bilingual support and smooth navigation.

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome 6.0
- **Analytics**: Google Analytics & Tag Manager
- **Languages**: Spanish (main) and English

## Project Structure

```
apu-website/
├── index.html              # Spanish version (main)
├── en/
│   └── index.html         # English version
├── static/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # All image assets
│       ├── favicon-source.jpg
│       ├── foto-1.jpg to foto-7.jpg
│       └── hero-bg.jpg
├── CLAUDE.md              # This developer guide
└── README.md              # Public documentation
```

## Key Features Implemented

### Navigation System

- Fixed header with smooth scroll navigation
- Padding-top/negative-margin technique for anchor offset (130px)
- Mobile hamburger menu with smooth transitions
- Bilingual navigation links

### Responsive Design

- Mobile-first approach with breakpoint at 768px
- Service cards with consistent sizing (100% width, max-width: 400px on mobile)
- Flexible grid layouts using CSS Grid
- Touch-friendly interface elements

### Interactive Elements

- Image carousel with indicators and controls
- WhatsApp floating action button
- Hover effects on buttons and cards
- Smooth scroll behavior for anchor links

## CSS Architecture

### Color Variables

```css
--teal: #1a4f56 /* Primary brand color */ --dark-teal: #0f2f33 /* Header and dark sections */
  --orange: #f68121 /* Accent color for CTAs */ --light-teal: #5b9b9e /* Light backgrounds */;
```

### Key Components

- `.hero` - Full-screen hero section with overlay
- `.services-grid` - Responsive grid for service cards
- `.service-card` - Individual service card styling
- `.carousel-container` - Image gallery carousel
- `.float-wa` - WhatsApp floating button

## JavaScript Functionality

Located in `/static/js/main.js`:

- Hamburger menu toggle
- Smooth scroll navigation
- Carousel controls (next/prev/indicators)
- Auto-rotation for carousel
- Touch/swipe support for mobile

## Navigation Fixes Applied

All navigation anchors use the following pattern to account for fixed header:

```html
<h2 style="padding-top: 130px; margin-top: -130px;">Section Title</h2>
```

Applied to:

- Services: `#servicios` / `#services`
- Plans: `#planes` / `#plans`
- Gallery: `#galeria` / `#gallery`
- Contact: `#contacto` / `#contact`

## Mobile Optimizations

- Hamburger menu for navigation on small screens
- Touch-friendly button sizes (min 44px)
- Optimized image loading with `loading="lazy"`
- Viewport meta tag for proper scaling
- Consistent card widths on mobile devices

## SEO & Performance

- Semantic HTML structure
- Proper meta tags for SEO
- Open Graph tags for social sharing
- Twitter Card integration
- Alt text for all images
- Optimized image formats

## Testing Notes

- Navigation tested with Playwright browser automation
- Cross-browser compatibility verified
- Mobile responsiveness tested on various devices
- Anchor scrolling behavior confirmed working

## Deployment

- Static site, can be deployed on any web server
- No build process required
- Assets served from `/static/` directory
- Supports both root and subdomain deployment

## Contact Integration

- WhatsApp: +57 316 0557537
- Email: apuviajesdemontana@gmail.com
- Instagram: @apuviajesdemontana
- Website: www.viajesapu.com

## Recent Updates

1. Fixed mobile service card width inconsistency
2. Resolved navigation anchor offset issues
3. Synchronized Spanish and English versions
4. Applied consistent navigation fixes across all sections
5. Updated bilingual content structure
