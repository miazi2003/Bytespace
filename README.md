# ByteSpace

ByteSpace is a modern e-learning and course discovery web application built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, and Lenis smooth scrolling. The platform enables users to explore curated courses, filter by categories and skill levels, preview lesson curriculums, and interact with course materials.

**Live Demo:** [https://bytespace-beta.vercel.app/](https://bytespace-beta.vercel.app/)

---

## Features

- **Hero & Course Search**: Fast keyword search bar that redirects users directly to filtered catalog results.
- **Course Catalog & Filtering (`/courses`)**:
  - Real-time search query filtering across course titles, categories, and instructors.
  - Multi-criteria filter options (Category, Difficulty Level, and Sort by rating/price).
  - Interactive **Active Filters** popover menu with filter counters and one-click reset.
  - Mobile-optimized single-line icon filter bar.
  - Responsive pagination controls.
- **Course Details & Curriculum (`/courses/[id]`)**:
  - Detailed syllabus view with modular tabs (About, Lessons, and Student Reviews).
  - Interactive course sneak peek gallery and key learning takeaways.
  - Course trailer video modal preview.
  - Sticky enrollment sidebar card with instructor profile, pricing, and lesson directory.
  - One-click share button with clipboard error handling.
- **Authentication Flows (`/login`, `/register`)**:
  - Dedicated sign-in and registration pages featuring shared social proof showcases.
- **Animations & Smooth Scrolling**:
  - Fluid entrance animations and scroll triggers powered by Framer Motion.
  - Kinetic smooth scrolling powered by Lenis with route-change position reset.
- **Instant Perceived Loading**:
  - App Router route-level loading skeletons (`loading.jsx`) for `/courses` and `/courses/[id]`.
- **Custom 404 Page**:
  - Responsive error page with clear navigation back to the home page.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.3.6 (App Router, Turbopack)
- **Library**: [React](https://react.dev/) 19.3.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.3.3 & PostCSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 13.4.6
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) 1.3.26
- **Carousels**: [Swiper](https://swiperjs.com/) 14.3.0
- **Typography**: Next.js Google Fonts (`Poppins`), Fontshare (`Satoshi`, `Clash Display`), and local font loading (`Soliden`)
- **Language**: JavaScript / TypeScript

---

## Project Structure

```text
bytespace/
├── app/                              # Next.js App Router pages & layouts
│   ├── courses/                      # Course catalog routes
│   │   ├── [id]/                     # Course details dynamic route
│   │   │   ├── loading.jsx           # Details page skeleton loader
│   │   │   └── page.jsx              # Details page component
│   │   ├── loading.jsx               # Catalog skeleton loader
│   │   └── page.jsx                  # Catalog page component
│   ├── login/                        # Login page
│   ├── register/                     # Registration page
│   ├── globals.css                   # Global styles & Tailwind CSS imports
│   ├── layout.jsx                    # Root layout with font & Lenis setup
│   ├── not-found.jsx                 # Custom 404 page
│   └── page.jsx                      # Homepage
├── components/                       # Reusable UI components
│   ├── courses/                      # Course-specific modular components
│   │   ├── CourseCardSkeleton.jsx    # Card skeleton loader
│   │   ├── CourseDetailsSkeleton.jsx # Details skeleton loader
│   │   ├── CourseEnrollmentCard.jsx  # Sidebar enrollment card
│   │   ├── CourseFilters.jsx         # Search, dropdowns & filter tags
│   │   ├── CoursePagination.jsx      # Pagination component
│   │   ├── CourseTabs.jsx            # About, Lessons & Reviews tabs
│   │   └── CourseVideoModal.jsx      # Lesson preview modal
│   ├── AuthShowcase.jsx              # Reusable auth social proof panel
│   ├── CourseCard.jsx                # Universal course card component
│   ├── CreatorCTA.jsx                # Creator community CTA section
│   ├── ExploreCourses.jsx            # Home featured courses slider
│   ├── FeatureShowcase.jsx           # Growth statistics & platform features
│   ├── Footer.jsx                    # Site footer with newsletter & links
│   ├── Hero.jsx                      # Homepage hero banner & search
│   ├── LearningPaths.jsx             # Category marquee showcase
│   ├── LogoBar.jsx                   # Partner brand logos
│   ├── Navbar.jsx                    # Responsive navigation bar & mobile menu
│   ├── SmoothScroll.jsx              # Lenis smooth scrolling provider
│   └── Testimonials.jsx              # Student reviews carousel
├── data/                             # Centralized single-source-of-truth datasets
│   ├── authShowcase.js               # Auth preview data
│   ├── categories.js                 # Categories, levels & sort options
│   ├── courses.js                    # 30-course dataset & helper queries
│   ├── navigation.js                 # Header & footer link matrices
│   ├── partners.js                   # Partner logos dataset
│   └── testimonials.js               # Student testimonials dataset
└── public/                           # Static assets (images, icons, fonts)
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- **Node.js**: `v18.17.0` or later (Node.js 20+ recommended)
- **Package Manager**: `npm`, `yarn`, or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/miazi2003/Bytespace.git
   cd Bytespace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot reloading. |
| `npm run build` | Compiles the production build using Next.js Turbopack compiler. |
| `npm run start` | Runs the compiled production server. |

---

## Deployment

The application is optimized for deployment on the [Vercel Platform](https://vercel.com/):

1. Push your latest changes to GitHub.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Next.js App Router defaults will be automatically detected with zero custom build configuration required.
4. Click **Deploy**.
