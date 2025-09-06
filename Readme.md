# DevTech AI - Professional AI Solutions WebApp

A modern, responsive WebApp for DevTech AI built with Next.js, React, and Tailwind CSS. Features subtle 3D elements and a modular, developer-friendly architecture.

## 🚀 Features

- **Modern Design**: Professional aesthetic with pastel colors and subtle 3D effects
- **Responsive**: Fully responsive design that works on all devices
- **3D Elements**: Subtle parallax effects and hover animations for enhanced user experience
- **Modular Architecture**: Clean, maintainable code structure with separated components
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── sections/           # Page sections (modular components)
│   │   ├── Navigation.tsx  # Header navigation
│   │   ├── HeroSection.tsx # Hero/landing section
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable UI components (shadcn/ui)
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠 Technology Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Animations**: CSS transforms and transitions for 3D effects

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#8B5CF6 to #3B82F6)
- **Secondary**: Pastel variations (purple, blue, green, orange, teal, pink)
- **Neutral**: Gray scale for text and backgrounds

### 3D Effects
- Subtle parallax mouse tracking
- Hover transformations (scale, rotate, translate)
- Layered background elements with blur effects
- Smooth transitions and animations

## 🔧 Development

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Making Changes

The modular structure makes it easy to modify specific sections:

1. **Navigation**: Edit `components/sections/Navigation.tsx`
2. **Hero Section**: Modify `components/sections/HeroSection.tsx`
3. **Services**: Update `components/sections/ServicesSection.tsx`
4. **Styling**: Adjust colors and spacing in `app/globals.css`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation items if needed

### Customizing 3D Effects

3D effects are implemented using:
- CSS `transform` properties
- Mouse position tracking
- Hover state animations
- Backdrop blur effects

Example 3D hover effect:
```tsx
className="transform hover:scale-105 hover:rotate-2 transition-all duration-500"
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid and Flexbox for layouts
- **Touch Friendly**: Optimized for touch interactions

## 🎯 Performance

- **Static Generation**: Pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging unused styles

## 📄 License

This project is licensed under the MIT License.