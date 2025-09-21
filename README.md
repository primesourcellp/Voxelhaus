# Voxelhaus Consultancy Website

A modern, responsive website for Voxelhaus Consultancy, a real estate visualization company specializing in floor plans, virtual staging, and photo editing services.

## 🚀 Features

- **Modern Design**: Clean, professional design with neon blue accents matching the Voxelhaus brand
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations and AOS (Animate On Scroll) effects
- **Interactive Components**: Dynamic navigation, testimonials carousel, and contact forms
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **AOS** - Animate On Scroll library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Footer.jsx          # Footer component
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── About.jsx           # About page
│   ├── Services.jsx        # Services page
│   ├── Gallery.jsx         # Gallery page
│   ├── Testimonials.jsx    # Testimonials page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Neon Blue (#00d4ff)
- **Secondary**: Dark Gray (#1e293b)
- **Accent**: Cyan (#00ffff)
- **Background**: White/Gray gradients

### Typography
- **Headings**: Poppins (Display font)
- **Body**: Inter (Sans-serif)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Pages Overview

### Home
- Hero section with company introduction
- Services overview
- Why choose us section
- Process explanation
- Call-to-action sections

### About
- Company story and mission
- Core values
- Team expertise
- Client advantages
- Trust building elements

### Services
- Comprehensive service listings
- Real estate specific services
- Service benefits
- Client testimonials
- Pricing information

### Gallery
- Project showcase
- Filterable portfolio
- Grid and list views
- Project details
- Interactive elements

### Testimonials
- Client success stories
- Rating displays
- Statistics
- Trust indicators
- Social proof

### Contact
- Contact form
- Company information
- Business hours
- Social media links
- Interactive map placeholder

## 🎯 Key Features

- **Mobile-First Design**: Optimized for mobile devices
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: WCAG compliant components
- **Cross-Browser**: Works on all modern browsers
- **SEO Ready**: Meta tags and structured data

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  neon: {
    blue: '#00d4ff',
    cyan: '#00ffff',
  }
}
```

### Content
Update content in individual page components:
- `src/pages/Home.jsx` - Homepage content
- `src/pages/About.jsx` - About page content
- `src/pages/Services.jsx` - Services content
- etc.

### Styling
Modify styles in:
- `src/index.css` - Global styles and utilities
- Individual component files - Component-specific styles

## 📞 Support

For questions or support regarding this website, please contact:
- Email: info@voxelhaus.com
- Phone: +91-XXXXXXXXXX

## 📄 License

This project is proprietary to Voxelhaus Consultancy. All rights reserved.

---

Built with ❤️ for Voxelhaus Consultancy