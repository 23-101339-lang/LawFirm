# Sterling & Associates — Law Firm Website

A **frontend-only** single-page website for a law firm built with **React**. No backend, no server, no API—just static assets and client-side React. Features a formal corporate style, **light and dark themes**, and full **responsiveness**. The Contact form is demo-only (no data is sent anywhere).

## Requirements Checklist

- **React**: Functional components, React Hooks (`useState`), clean folder structure
- **Reusable components**: Button, SectionTitle, Paragraph, Card, Navbar, SocialIcon, FormInput
- **Sections** (12 total): Header/Navbar, Hero, About the Firm, Vision & Mission, Practice Areas, Why Choose Us, Our Team, Case Studies/Achievements, Testimonials, FAQ, Contact Us (with form), Footer
- **Features**: Light & Dark theme, responsive (desktop/tablet/mobile), scroll-to-top button, Contact Us form
- **Design**: Formal, professional, minimal, corporate

## Project Structure

```
src/
├── components/     # Reusable UI (Button, SectionTitle, Paragraph, Card, Navbar, SocialIcon, FormInput, ScrollToTop)
├── sections/       # Page sections (Hero, About, VisionMission, PracticeAreas, etc.)
├── assets/         # Static assets
├── context/        # ThemeContext for light/dark theme
└── home.js         # Main page composition
```

## Run the project

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Output goes to the `build/` folder (no `dist`). No `vite.config`; the app uses Create React App (react-scripts). `index.html` lives in `public/`.

## Tech stack

- React 18 (frontend only)
- Create React App (react-scripts)
- CSS with custom properties (light/dark themes)

**No backend.** All behavior is client-side. The contact form shows a success message and clears the fields without sending data anywhere.
