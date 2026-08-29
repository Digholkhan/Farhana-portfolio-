# Farhana Asha Portfolio + Admin CMS

This project is set up as a Next.js app ready to connect to Supabase for admin login and content publishing.

## Features
- Public portfolio landing page
- Admin login page scaffold
- Supabase client ready for auth + database + storage
- Vercel deployment-ready setup

## Required environment variables
Copy `.env.example` to `.env.local` and set your values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Local development

```bash
npm install
npm run dev
```

## Deployment on Vercel
1. Push this repo to GitHub
2. Import it into Vercel
3. Add the Supabase environment variables in Vercel project settings
4. Deploy

## Supabase setup plan
- Create a new project in Supabase
- Enable Email Auth
- Create a `posts` table
- Add Row Level Security policies
- Upload images to storage

## Admin workflow
- Log in on `/admin`
- Create and publish portfolio posts
- Public site reads only published posts
