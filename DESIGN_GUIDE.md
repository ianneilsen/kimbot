# Kim Locklier Website - Design Guide

## Brand Colors

### Primary Palette
- **Primary Brown** `#6b4423` - Main brand color, navigation, headings
- **Secondary Brown** `#8b5a2b` - Hover states, accents
- **Dark Brown** `#5c3d2e` - Body text
- **Light Brown Text** `#7a5d4f` - Secondary text

### Background Colors
- **Accent Cream** `#f5e6d3` - Service cards, contact section
- **Light Cream** `#faf6f0` - About section, values gradient
- **White** `#ffffff` - Main background, clean areas

## Typography

### Font Families
- **Headings**: Playfair Display (serif)
  - Font weight: 600, 700
  - Letter spacing: 1px for logo
  - Usage: h1, h2, h3, labels

- **Body Text**: Lato (sans-serif)
  - Font weight: 300, 400, 700
  - Usage: paragraphs, navigation, buttons

### Font Sizes (Desktop)
- **h1**: 2.5rem (40px)
- **h2**: 2rem (32px)
- **h3**: 1.3rem (20.8px)
- **Body**: 1rem (16px)
- **Small**: 0.95rem (15.2px)

### Font Sizes (Mobile)
- **h1**: 1.5rem (24px)
- **h2**: 1.3rem (20.8px)
- **h3**: 1.1rem (17.6px)
- **Body**: 0.95rem (15.2px)

## Component Colors

### Navigation
- **Background**: White
- **Text**: Primary Brown (#6b4423)
- **Border**: 3px solid Primary Brown
- **Hover**: Secondary Brown (#8b5a2b)

### Buttons
- **CTA Button**: Secondary Brown (#8b5a2b) background, white text
- **Hover**: Primary Brown (#6b4423) background
- **Submit Button**: Primary Brown background

### Cards
- **Service Cards**: Accent Cream (#f5e6d3) background
- **Border**: 4px solid Primary Brown (left)
- **Hover**: Secondary Brown border

- **Value Items**: White background
- **Border**: 4px solid Primary Brown (top)
- **Hover**: Secondary Brown border

### Forms
- **Input Border**: rgba(107, 68, 35, 0.3)
- **Focus Border**: Primary Brown (#6b4423)
- **Focus Shadow**: rgba(107, 68, 35, 0.1)
- **Label**: Primary Brown

### Sections
- **Hero**: Banner image full width
- **About**: Light Cream background
- **Services**: White background
- **Values**: Gradient (Light Cream to Accent Cream)
- **Contact**: Accent Cream background
- **Footer**: Primary Brown background

## Design Elements

### Spacing
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)

### Shadows
- **Light**: 0 2px 8px rgba(107, 68, 35, 0.1)
- **Medium**: 0 4px 16px rgba(107, 68, 35, 0.15)
- **Heavy**: 0 4px 12px rgba(107, 68, 35, 0.3)

### Border Radius
- **Small elements**: 4px
- **Images**: 8px

### Transitions
- **Standard**: 0.3s ease (all properties)

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Image Guidelines

### Banner Image
- **Location**: Hero section (top)
- **Recommended Size**: 1200x400px or wider
- **File Format**: PNG or JPG
- **Max File Size**: 100KB (optimized)
- **Object-fit**: cover (fills container while maintaining aspect ratio)

### About Section Image
- **Size**: Responsive, typically 400x300px minimum
- **File Format**: PNG or JPG
- **Max File Size**: 80KB (optimized)
- **Border Radius**: 8px
- **Shadow**: Medium shadow applied

## Color Usage Examples

### For Custom Content

**Emphasis Text**: 
```css
color: #6b4423; /* Primary Brown */
```

**Secondary Information**:
```css
color: #7a5d4f; /* Light Brown Text */
```

**Highlight Boxes**:
```css
background-color: #f5e6d3; /* Accent Cream */
```

**Hover States**:
```css
color: #8b5a2b; /* Secondary Brown */
```

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text)
- Primary Brown (#6b4423) on Accent Cream (#f5e6d3): 7:1 ratio
- Dark Brown (#5c3d2e) on Light Cream (#faf6f0): 8:1 ratio

### Touch Targets
- Minimum size: 44x44px
- Applied to buttons, links in navigation

### Text
- Line height: 1.6 for body text, 1.8 for longer content
- Letter spacing: Added for headers and navigation
- Font weight: Varied for hierarchy

## Animation Guidelines

### Hover Effects
- **Subtle**: Color changes (0.3s)
- **Moderate**: Transform (translateY) + shadow (0.3s)
- **Cards**: translateY(-4px) on hover

### Transitions
- **All properties**: 0.3s ease
- **No animations**: Keep fade-ins under 0.6s

## Implementation Tips

### CSS Variables Usage
```css
:root {
    --primary-brown: #6b4423;
    --secondary-brown: #8b5a2b;
    --accent-cream: #f5e6d3;
    --dark-brown: #5c3d2e;
    --light-cream: #faf6f0;
    --text-dark: #5c3d2e;
    --text-light: #7a5d4f;
}
```

### Creating Consistent Components
1. Use color variables for consistency
2. Apply shadows for depth
3. Use 4px border-radius for rounded corners
4. Add left/top borders to cards for visual interest
5. Apply hover transforms uniformly

## Print Considerations

- Color scheme remains professional in grayscale
- Text maintains readability
- Images print clearly

---

**Last Updated**: November 2025
**Designer**: Custom branding for Kim Locklier
