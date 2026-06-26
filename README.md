# Abdullah Bin Waqar Portfolio

Professional MERN Stack portfolio website for Abdullah Bin Waqar.

## Features
- React + Vite frontend with Tailwind CSS
- Node.js + Express backend with MongoDB
- JWT admin authentication
- Admin panel routes for CRUD content management
- SEO assets: `robots.txt`, `sitemap.xml`
- Responsive premium UI with glassmorphism and modern cards
- Contact form integrated with backend API

## Setup

### Backend
1. Open terminal in `backend`
2. Run `npm install`
3. Create `.env` from `.env.example`
4. Run `npm run dev`

### Frontend
1. Open terminal in `frontend`
2. Run `npm install`
3. Run `npm run dev`

## API Endpoints
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/projects`
- `GET /api/experiences`
- `GET /api/skills`
- `GET /api/education`
- `GET /api/certifications`
- `GET /api/blogs`
- `POST /api/contact`

## Notes
- Add content through the admin dashboard and seed the admin account via the auth route.
- Use `http://localhost:5173` for frontend and `http://localhost:5000` for backend by default.
