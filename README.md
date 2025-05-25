# Onzur - Featured Projects Homepage

This is a Next.js project featuring a beautiful homepage UI component based on a Figma design.

## Features

- **FeaturedProjects Component**: A responsive homepage section showcasing website design projects
- **Tabbed Navigation**: Interactive tabs for Featured, B2B, B2C, and eCommerce categories
- **Project Grid**: 2-column grid layout displaying project images with company logos
- **Gradient Background**: Beautiful blue gradient background matching the design
- **Hover Effects**: Smooth transitions and hover effects for better UX
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design

## Component Structure

### FeaturedProjects Component

Located at `src/components/FeaturedProjects.js`

**Features:**

- Interactive tab navigation with state management
- Project showcase grid with hover effects
- Company logo overlays on project images
- "Load More Examples" button with arrow icon
- Custom CSS filters for icon color changes

**Assets:**

- All images are stored in `public/assets/images/`
- Includes project screenshots and company logos
- SVG icons for tabs and navigation elements

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Implementation

This component was built based on a Figma design using Framelink Figma MCP integration. The design includes:

- Exact color matching (`#1E3075` to `#131848` gradient)
- Roboto font family as specified in the design
- Precise spacing and layout measurements
- Interactive states and hover effects
- Professional project showcase layout

## Technologies Used

- **Next.js 15.3.2** - React framework
- **React 19.0.0** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Roboto Font** - Typography from Google Fonts

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with font configuration
│   ├── page.js            # Homepage using FeaturedProjects component
│   └── globals.css        # Global styles and Tailwind imports
├── components/
│   └── FeaturedProjects.js # Main homepage component
public/
└── assets/
    └── images/            # All project images and icons
```

## Customization

The component is highly customizable:

- **Projects Data**: Update the `projects` array in `FeaturedProjects.js`
- **Tab Categories**: Modify the `tabs` array to change navigation options
- **Styling**: Adjust Tailwind classes or add custom CSS
- **Images**: Replace images in `public/assets/images/` directory

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
