# Kim Locklier Website - POC

A modern, responsive single-page website for Kim Locklier built with HTML, CSS, and JavaScript. Designed to be deployed on Netlify.

## Project Overview

This is a professional portfolio/services website featuring:
- **5 Main Sections**: Home, About, Services, Values, and Contact
- **Mobile-First Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design inspired by Full Life Psychology
- **Interactive Elements**: Smooth scrolling, mobile menu, form handling
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks required)

## Directory Structure

```
kimbot/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Features

### 1. Navigation
- Sticky top navigation bar with branding
- Mobile hamburger menu with smooth animation
- Active link highlighting
- Auto-close menu on link click

### 2. Hero Section
- Large, eye-catching header with gradient background
- Call-to-action button
- Responsive typography

### 3. About Section
- Introduction and overview
- Placeholder image area
- Two-column layout (stacks on mobile)

### 4. Services Section
- 6 service cards in responsive grid
- Hover effects with smooth transitions
- Service descriptions
- Information about delivery methods

### 5. Values Section
- 4 core values with descriptions
- Card-based layout
- Professional presentation

### 6. Contact Section
- Contact information (email, phone, location, availability)
- Working contact form with validation
- Success/error message handling
- Responsive two-column layout

### 7. Footer
- Copyright information
- Netlify hosting note

## Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

All layouts adjust automatically for optimal viewing on any device.

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone github.com:ianneilsen/kimbot.git
cd kimbot
```

2. Open `index.html` in a browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
http-server

# Using VS Code Live Server extension
# Just right-click index.html and select "Open with Live Server"
```

3. Navigate to `http://localhost:8000` (or your local server URL)

### Development Tips

- **Customize Colors**: Edit CSS variables in `styles.css` (lines 8-16)
- **Update Content**: Edit text in `index.html`
- **Modify Services**: Update service cards in the services section
- **Add Images**: Replace placeholder image URLs with your own

## Deployment on Netlify

### Option 1: Connect GitHub Repository

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit: Kim Locklier website POC"
git push -u origin main
```

2. Go to [netlify.com](https://www.netlify.com)
3. Click "New site from Git"
4. Choose GitHub and authorize
5. Select the `kimbot` repository
6. Configure build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: ./ (or leave empty)
7. Click "Deploy site"

### Option 2: Drag & Drop Deploy

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop the project folder
3. Netlify will automatically deploy

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Form Submission Integration

The contact form currently shows a success message but doesn't actually send emails. For production, integrate with:

### Option A: Netlify Forms (Recommended)
1. Change the form to:
```html
<form class="contact-form" name="contact" method="POST" netlify>
    <!-- form fields -->
</form>
```
2. Netlify will automatically capture submissions

### Option B: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Get your service ID and template ID
3. Update `script.js` with EmailJS initialization

### Option C: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create a form and get the endpoint
3. Update form action in HTML

## Customization Guide

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #3498db;    /* Accent color */
    --accent-color: #e74c3c;       /* Call-to-action color */
    /* ... */
}
```

### Update Contact Information
Edit in `index.html` Contact section:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+61234567890">+61 2 3456 7890</a>
```

### Add Custom Images
Replace placeholder URLs with your images:
```html
<img src="your-image-url.jpg" alt="Description">
```

### Update Navigation Links
Edit links in the navbar and ensure section IDs match.

## Performance Tips

- Optimize images before uploading (use tools like TinyPNG)
- Use descriptive alt text for accessibility
- Test on real mobile devices
- Use browser DevTools to check performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Sufficient color contrast
- Keyboard navigation support
- Mobile touch targets (minimum 44x44px)

## SEO Optimization

To improve SEO:
1. Update meta description in `index.html`
2. Add structured data (Schema.org)
3. Ensure proper heading hierarchy
4. Optimize image alt text
5. Create a sitemap.xml

## Troubleshooting

### Mobile menu not opening?
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded correctly

### Form not submitting?
- Verify form field names match the JavaScript
- Check browser console for errors
- Implement backend form handler (see Form Submission Integration)

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that `styles.css` is loading
- Verify no CSS conflicts

### Deployment issues?
- Ensure all files are committed to Git
- Check Netlify deployment logs
- Verify file paths are correct

## Version History

- **v1.0.0** - Initial POC with 5 main sections, responsive design, contact form

## License

Personal project - All rights reserved

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Netlify documentation: https://docs.netlify.com
3. Check browser console for errors

## Next Steps

1. Replace placeholder images with actual photos
2. Update all content with real information
3. Implement form submission (Netlify Forms recommended)
4. Add custom domain to Netlify
5. Set up analytics (Google Analytics, Netlify Analytics)
6. Implement SEO optimization
7. Add testimonials/reviews section (optional)
8. Create a blog section (optional)

---

**Status**: POC Ready for Deployment
**Last Updated**: November 2025
