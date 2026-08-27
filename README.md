# Personal Portfolio Website

This is a Next.js portfolio website with a public-facing portfolio and an admin dashboard for managing projects.

## Features

- Portfolio homepage with sections for hero, skills, projects, education, work, services, and contact
- MongoDB-backed project storage
- Admin dashboard with login, create, update, and delete project support
- Public project section automatically loads from the database
- Responsive UI with animations

## Admin Dashboard

- Visit `/admin`
- Login with `ADMIN_USERNAME` and `ADMIN_PASSWORD`
- Add, edit, and delete projects from the dashboard
- Project changes appear automatically on the public website

## Environment Setup

Create a `.env.local` file from `.env.example` and set:

- `MONGODB_URI`
- `MONGODB_DB`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SECRET`

## Development

```bash
npm run dev
```
