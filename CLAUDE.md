# Civic Safety Advisors Website - Project Documentation

## Project Overview

**Client**: Civic Safety Advisors
**Purpose**: Professional security consulting website for organizations serving communities
**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Playwright
**GitHub Repository**: https://github.com/ZethraZeth/civic-safety-advisors
**Branch**: master

## Project Goal

Build a complete, professional security consulting website for Civic Safety Advisors with:
- Modern, clean design using custom brass/ink color scheme
- 13 individual service pages across 3 categories
- 3 industry vertical pages (Houses of Worship, Schools, Nonprofits)
- Blog functionality with category filtering
- Full responsive design
- Proper typography and styling throughout
- Contact form with validation

## Current Status

**✅ Phase 1 - Complete (Initial Build)**
- [x] Home page with hero section and all components
- [x] 13 service detail pages with full content
- [x] 3 industry vertical pages with images
- [x] Blog index with 3 posts and category filtering
- [x] About, Contact, Privacy, and Terms pages
- [x] Header and Footer components
- [x] Custom UI components (Button, Card, ContactForm, etc.)
- [x] Data structures for services, industries, and blog posts
- [x] Tailwind config with custom theme
- [x] Typography plugin installed and configured
- [x] All 10 placeholder images organized
- [x] Playwright testing suite (18 passing smoke tests)
- [x] Git repository initialized
- [x] Pushed to GitHub

**📋 Next Phases (To Be Determined)**
- Content refinement and copy editing
- Additional images or image replacements
- SEO optimization
- Performance optimization
- Deployment to production

## File Structure

```
CSA Site/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx            # About page
│   ├── services/                 # Services pages
│   │   ├── page.tsx              # Services overview
│   │   └── [slug]/page.tsx       # Dynamic service detail pages
│   ├── industries/page.tsx       # Industries We Serve
│   ├── blog/                     # Blog pages
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/page.tsx       # Dynamic blog post pages
│   ├── contact/page.tsx          # Contact page
│   ├── privacy/page.tsx          # Privacy Policy
│   ├── terms/page.tsx            # Terms of Service
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
│
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/                     # Home page sections
│   │   ├── TrustIndicators.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── IndustriesWeServe.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── RecentInsights.tsx
│   │   └── CTABanner.tsx
│   ├── blog/                     # Blog components
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   └── CategoryFilter.tsx
│   └── ui/                       # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ContactForm.tsx
│       └── SectionHeading.tsx
│
├── lib/                          # Data and utilities
│   ├── services.ts               # All 13 services data
│   ├── industries.ts             # 3 industry verticals data
│   └── blog.ts                   # Blog posts data
│
├── public/assets/images/         # Image assets
│   ├── slider/                   # Hero slider images
│   │   └── slide-1.jpg           # Home page hero
│   ├── service-single/           # Service detail images
│   │   ├── img-1.jpg
│   │   ├── img-2.jpg
│   │   └── img-3.jpg
│   ├── blog/                     # Blog post featured images
│   │   ├── img-1.jpg
│   │   ├── img-2.jpg
│   │   └── img-3.jpg
│   ├── industries/               # Industry page images
│   │   ├── worship.jpg
│   │   ├── school.jpg
│   │   └── nonprofit.jpg
│   └── uploads/                  # TEMPORARY folder for new images
│
├── tests/                        # Playwright tests
│   ├── smoke.spec.ts             # 18 passing smoke tests
│   ├── visual-review.spec.ts     # Screenshot capture tool
│   └── [other test files]
│
├── tailwind.config.ts            # Tailwind with custom theme
├── playwright.config.ts          # Playwright configuration
└── CLAUDE.md                     # This file - READ FIRST!
```

## GitHub Repository

**Repository URL**: https://github.com/ZethraZeth/civic-safety-advisors
**Owner**: ZethraZeth
**Visibility**: Public
**Branch**: master
**Remote**: origin

### Git Commands Reference
```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to GitHub
git push origin master

# Pull latest changes
git pull origin master
```

## Image Management Workflow

### Adding New Images

**IMPORTANT**: Follow this exact process when the user adds new images:

1. **User uploads images to**: `/public/assets/images/uploads/`
   - User will save images with numbers: 1.jpg, 2.jpg, 3.jpg, etc.
   - The uploads folder is a TEMPORARY staging area

2. **Claude's responsibility**:
   - Identify what each image is for based on user's description
   - Move images from uploads to correct subdirectories
   - Rename images to match existing naming conventions
   - Verify images are in correct locations
   - Clear out the uploads folder when done

3. **Image subdirectories**:
   - `/slider/` - Hero slider images (slide-1.jpg, slide-2.jpg, etc.)
   - `/service-single/` - Service detail page images (img-1.jpg, img-2.jpg, etc.)
   - `/blog/` - Blog post featured images (img-1.jpg, img-2.jpg, etc.)
   - `/industries/` - Industry vertical images (worship.jpg, school.jpg, nonprofit.jpg)
   - Other subdirectories as needed

4. **Verification checklist**:
   - [ ] Images moved to correct subdirectory
   - [ ] Images renamed appropriately
   - [ ] Code updated to reference new image paths (if needed)
   - [ ] Uploads folder is empty
   - [ ] Verify images display correctly on dev server

### Current Image Inventory

All 10 initial placeholder images have been added and organized:
- 1 hero image (slider/slide-1.jpg)
- 3 service detail images (service-single/img-1.jpg, img-2.jpg, img-3.jpg)
- 3 blog featured images (blog/img-1.jpg, img-2.jpg, img-3.jpg)
- 3 industry images (industries/worship.jpg, school.jpg, nonprofit.jpg)

## Development Workflow

### Starting Development Server
```bash
cd "/Users/elmahershman/Coding/physical sec site/CSA Site"
npm run dev
```
- Dev server runs at: http://localhost:3000
- Hot reload enabled
- Check terminal for any build errors

### Building for Production
```bash
npm run build
```
- Generates static site in `.next/` folder
- Check for TypeScript errors and build warnings

### Running Tests
```bash
npm test              # Run all Playwright tests
npm run test:ui       # Run tests with Playwright UI
npm run test:headed   # Run tests in headed mode (see browser)
```

## Design System

### Color Scheme
- **Ink (Primary Dark)**:
  - ink-900: `#0b1b33` (darkest - headings, text)
  - ink-800: `#10254a`
  - ink-700: `#17315e`

- **Brass (Accent)**:
  - brass-600: `#b08d57`
  - brass-500: `#c6a46a` (primary accent)

- **Additional**: Standard Tailwind slate colors for grays

### Typography
- Uses `@tailwindcss/typography` plugin
- Custom prose styles in `tailwind.config.ts`
- Headings: Inter/System font stack
- Body: Optimized for readability

### Components
- Button component with variants (primary, secondary, outline)
- Card component for content sections
- Responsive grid layouts
- Mobile-first approach

## Content Structure

### Services (13 total in 3 categories)

**Risk Assessment & Planning**:
1. Security Vulnerability Assessments
2. Threat Assessment & Risk Analysis
3. Emergency Response Planning
4. Crisis Management Planning

**Training & Consulting**:
5. Active Threat Response Training
6. Security Awareness Training
7. Staff & Volunteer Training
8. Safety Drills & Exercises
9. Security Program Development

**Policy Development**:
10. Security Policy & Procedures
11. Visitor Management Protocols
12. Technology Security Solutions
13. Compliance & Standards Review

### Industries (3 verticals)
1. Houses of Worship
2. Educational Institutions
3. Nonprofit Organizations

### Blog Posts (3 current)
1. "Developing an Effective Emergency Response Plan"
2. "Security Considerations for Houses of Worship"
3. "Hiring Security Guards: What You Need to Know"

## Important Notes for Claude

### Always Check First
- [ ] Read this CLAUDE.md file before starting work
- [ ] Check git status to see what's changed
- [ ] Verify dev server is running if needed
- [ ] Review recent commits if continuing work

### Code Standards
- TypeScript strict mode enabled
- Use functional components with hooks
- Follow existing naming conventions
- Keep components modular and reusable
- Use Tailwind classes (avoid custom CSS unless necessary)

### Testing
- Run smoke tests after major changes
- Use visual-review.spec.ts to capture screenshots when reviewing design
- All tests should pass before committing

### Git Commit Messages
- Clear, descriptive commit messages
- Use imperative mood ("Add feature" not "Added feature")
- Always include Co-Authored-By line for Claude
- Reference what changed and why

### When Making Changes
1. Always read files before editing them
2. Test changes locally on dev server
3. Run relevant tests
4. Commit with clear message
5. Push to GitHub

## Common Tasks

### Adding a New Service
1. Add service data to `lib/services.ts`
2. Service detail page will auto-generate via `[slug]` route
3. Update related services links if needed
4. Test the new service page

### Adding a Blog Post
1. Add post data to `lib/blog.ts` with full HTML content
2. Add featured image to `/public/assets/images/blog/`
3. Post detail page will auto-generate via `[slug]` route
4. Test the new blog post page

### Updating Content
1. For static pages: Edit the page.tsx file directly
2. For dynamic content: Edit the data files in `/lib/`
3. For styling: Update Tailwind classes or `tailwind.config.ts`

### Troubleshooting
- **Build errors**: Check TypeScript errors in terminal
- **Images not showing**: Verify paths in `/public/assets/images/`
- **Styles not applying**: Check if dev server needs restart
- **Tests failing**: Review test selectors and component structure

## Project History

### Initial Build Session
- Created complete website structure
- Built all 14 pages (home + 13 services overview)
- Created all components and data structures
- Added typography plugin after visual review
- Organized all placeholder images
- Set up Playwright testing
- Initialized Git and pushed to GitHub

## Questions or Issues?

If you encounter issues or have questions:
1. Check this documentation first
2. Review recent git commits for context
3. Check the GitHub repository for any updates
4. Verify file paths and naming conventions

---

**Last Updated**: January 21, 2026
**Version**: 1.0 - Initial Build Complete
