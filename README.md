# V Films - Creative Agency Website

![V Films Logo](/src/assets/VFilms%20Logo.png)

## Overview

V Films is a creative agency website built with React and Vite, showcasing various services including film production, branding, and art curation. The website features a modern, interactive design with smooth animations and responsive layouts.

## Features

- **Modern UI/UX**: Built with React and styled using Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Using shadcn/ui components library
- **Custom Animations**: Smooth transitions and hover effects
- **Optimized Performance**: Built with Vite for fast development and production builds

## Sections

1. **Hero Section**
   - Dynamic hero section with background patterns
   - Call-to-action buttons
   - Engaging visual elements

2. **Team Section**
   - Team member showcase
   - Custom sticky note design
   - Decorative elements with arrows and labels
   - Using Island Moments font for stylistic text

3. **About Section**
   - Company statistics
   - Client testimonials
   - Interactive stats cards
   - Client logos showcase

4. **Services Section**
   - Film Production services
   - Branding services
   - Art Curation services
   - Detailed service descriptions

5. **Contact Section**
   - Contact form
   - Social media links
   - Location information

## Tech Stack

- **React**: Frontend library
- **Vite**: Build tool
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **shadcn/ui**: UI components
- **React Router**: Navigation
- **Framer Motion**: Animations (if used)

## Local Development

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

To create a production build:
\`\`\`bash
npm run build
\`\`\`

To preview the production build:
\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
├── src/
│   ├── assets/         # Images and static files
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── ...        # Custom components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Entry point
├── public/            # Public assets
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
\`\`\`

## Component Highlights

### Header Component
- Responsive navigation
- Custom logo integration
- Mobile-friendly menu

### Team Component
- Interactive team showcase
- Custom animations
- Responsive grid layout

### Services Component
- Service cards with hover effects
- Detailed service descriptions
- Custom icons and imagery

## Styling

The project uses a custom color palette defined in Tailwind:
- Primary: Navy blue
- Secondary: Yellow accent
- Background: Cream
- Text: Dark navy

Custom fonts:
- Island Moments for decorative text
- Serif font for body text
- System font for general UI

## Performance Optimization

- Lazy loading of images
- Component code splitting
- Optimized asset loading
- Efficient Tailwind CSS purging

## Credits

- Design inspiration and UI elements
- Custom illustrations and icons
- Font selections and typography

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
