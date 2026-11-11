# Infinite Gaming 🎮

> **Next-Gen Interactive Digital Agency & Game Studio Web Platform**

[![React](https://img.shields.io/badge/React-17.0.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/styled--components-5.2.1-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-2.9.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 📌 Overview

**Infinite Gaming** is a modern, high-performance web platform built for an innovative game development studio and creative digital agency. The platform showcases cutting-edge digital experiences, portfolio work, creative leadership, and comprehensive client contact channels.

Engineered with **React**, **TypeScript**, **Styled-Components**, and **Framer Motion**, the application features fluid page transitions, scroll-triggered reveal animations, responsive navigation, and interactive component architectures.

---

## 🕹️ Website Pages & Architecture

### 1. **Home (`/`)**
* **Hero Experience**: Dynamic animated typography reveal effects powered by Framer Motion, presenting Infinite Gaming's creative philosophy alongside high-resolution visuals.
* **Services Grid**: Interactive capability cards covering *Quick Response (24/7 support)*, *Monetization Strategy*, *Collaborative Teamwork*, and *Adaptive Development Flexibility*.
* **Featured Projects Showcase**: Curated selection of premier creative works and client deliverables.
* **Interactive FAQ Accordion**: Smooth collapsible knowledge base addressing frequently asked inquiries.
* **Global Footer**: Multi-office contact directory and communication hub.

### 2. **About Us (`/about`)**
* **Studio Vision & Story**: Narrative of Infinite Gaming's journey, creative mission, and technological drive.
* **Leadership Showcase**: Interactive cards featuring studio directors, creative leads, and technical founders.

### 3. **Works & Portfolio (`/works`)**
* **Dynamic Grid Layout**: Automatically reorganizes project collections into balanced alternating two- and three-column visual blocks.
* **Interactive Project Tiles**: Color-accented hover effects, deep project metadata, and direct routing to case studies.

### 4. **Case Study Showcase (`/works/sample-project`)**
* In-depth case study template detailing brand narrative, creative direction, distribution strategy, and multi-angle responsive media assets.

### 5. **Contact Hub (`/contact`)**
* Dual-tier contact architecture displaying **Primary** and **Alternative** communication channels.
* Embed-ready Google Maps interactive preview with automated fallback for zero-configuration deployments.

### 6. **Not Found (`*`)**
* Animated 404 error page guiding visitors seamlessly back to the main site.

---

## 📞 Brand & Contact Information Matrix

| Channel | Primary Details | Alternative / Secondary Details |
| :--- | :--- | :--- |
| **Brand Name** | **Infinite Gaming** | Infinite Gaming Studio |
| **Headquarters (West Coast)** | 100 Innovation Way, Suite 400<br>Seattle, WA 98101 | — |
| **Creative Studio (East Coast)** | 1234 State St, Suite 3300<br>Boston, MA 02109 | — |
| **Regional Hub (Central)** | 600 Congress Ave, Floor 14<br>Austin, TX 78701 | — |
| **Direct Phone** | `+1 (206) 555-0199` | `+1 (617) 555-6170` (Boston Studio) |
| **Toll-Free / Support Line** | `+1 (800) 463-4263` *(1-800-INF-GAME)* | `+1 (512) 555-0144` (Austin Hub) |
| **General Inquiries** | `contact@infinitegaming.com` | `hello@infinitegaming.com` |
| **Client Support** | `support@infinitegaming.com` | 24/7 Priority Partner Portal |
| **Business & Partnerships** | `partners@infinitegaming.com` | `press@infinitegaming.com` |
| **Operating Hours** | Mon – Fri: 9:00 AM – 6:00 PM PST | 24/7 Server Monitoring & Emergency On-Call |

---

## 💻 Tech Stack

* **Frontend Framework**: [React 17](https://reactjs.org/)
* **Language**: [TypeScript 4](https://www.typescriptlang.org/)
* **Styling**: [Styled-Components 5](https://styled-components.com/) + Custom SCSS utilities
* **Animations**: [Framer Motion 2](https://www.framer.com/motion/)
* **Routing**: [React Router DOM 5](https://v5.reactrouter.com/)
* **Viewport Detection**: [React Intersection Observer 8](https://github.com/thebuilder/react-intersection-observer)
* **Iconography**: [Boxicons 2](https://boxicons.com/)
* **Typography**: Plus Jakarta Display & Jakarta Text

---

## 📁 Project Directory Structure

```text
Infinite-Gaming/
├── public/
│   ├── favicon.ico             # Studio Favicon
│   ├── index.html              # HTML5 entry with Infinite Gaming SEO & OG metadata
│   ├── manifest.json           # Web app manifest for Infinite Gaming
│   └── robots.txt              # Search engine directives
├── src/
│   ├── assets/                 # Brand imagery, photography & SVG icons
│   │   └── images/             # Leaders, services, and project assets
│   ├── Components/             # Reusable UI component library
│   │   ├── Accordion.tsx       # Collapsible FAQ container
│   │   ├── AccordionItem.tsx   # Individual FAQ accordion item
│   │   ├── DefaultButton.tsx   # Standard styled action button
│   │   ├── Footer.tsx          # Multi-office footer with contacts
│   │   ├── Hero.tsx            # Animated landing hero section
│   │   ├── Homework.tsx        # Selected portfolio preview
│   │   ├── LeadershipCard.tsx  # Team member profile card
│   │   ├── Nav.tsx             # Responsive desktop & mobile navigation
│   │   ├── NavLink.tsx         # Animated navigation link
│   │   ├── ScrollToTop.tsx     # Route-change scroll reset utility
│   │   ├── ServiceCard.tsx     # Capability card component
│   │   ├── Services.tsx        # Services section wrapper
│   │   ├── Wave.tsx            # Decorative SVG wave divider
│   │   ├── WorkContent.tsx     # Case study content layout
│   │   ├── WorkProjectContainer.tsx # Portfolio item container
│   │   └── WorksProject.tsx    # Works grid item renderer
│   ├── data/                   # Structured data models
│   │   ├── AccordionData.tsx   # FAQ data source
│   │   ├── LeadershipData.tsx  # Executive team information
│   │   ├── ProjectsData.tsx    # Portfolio showcase data & grid layout math
│   │   └── ServiceCardsData.tsx# Studio capabilities data
│   ├── Hooks/                  # Custom React animation & transition hooks
│   │   ├── useAnimations.ts    # Framer Motion orchestration variants
│   │   ├── useScroll.ts        # Intersection observer hook for scroll triggers
│   │   └── useTransitions.ts   # Page transition presets
│   ├── Views/                  # Top-level page views
│   │   ├── About.tsx           # About studio & leadership page
│   │   ├── Contact.tsx         # Primary & alternative contact hub
│   │   ├── Home.tsx            # Main landing page
│   │   ├── NotFound.tsx        # 404 error page
│   │   ├── SampleProject.tsx   # Project case study detail view
│   │   └── Works.tsx           # Full portfolio catalog
│   ├── Credentials.ts          # API credentials & configuration
│   ├── helper.scss             # Global fonts and responsive style helpers
│   ├── App.tsx                 # Root application router with AnimatePresence
│   └── index.tsx               # DOM bootstrap entry point
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16.x, v18.x, or later recommended)
* `npm` or `yarn`

### Installation

1. Clone or open the project directory:
   ```bash
   cd Infinite-Gaming
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with yarn:
   yarn install
   ```

### Running Locally

To launch the local development server:

```bash
npm start
# or:
yarn start
```

The application will launch automatically at:
[http://localhost:3000](http://localhost:3000)

### Building for Production

To generate an optimized production bundle:

```bash
npm run build
# or:
yarn build
```

The compiled assets will be placed in the `build/` directory, ready for static hosting deployment (Vercel, Netlify, AWS S3, GitHub Pages, etc.).

---

## ⚙️ Configuration & Environment Variables

To configure an optional Google Maps API key for the contact map:

Create a `.env.local` file in the project root:

```env
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_api_key_here
```

> **Note**: If `REACT_APP_GOOGLE_MAPS_KEY` is not provided, the contact page automatically uses a zero-configuration Google Maps embed fallback for Seattle, WA, ensuring the map remains functional without errors.

---

## 📄 License & Attribution

* Built for **Infinite Gaming**.
* Photography assets sourced under royalty-free licenses via Unsplash.
* Code released under the [MIT License](https://opensource.org/licenses/MIT).
