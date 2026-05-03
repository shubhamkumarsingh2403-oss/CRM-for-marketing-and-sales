# CRM Application

A Customer Relationship Management system for managing leads, clients, deals, tasks, and meetings.

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Express.js with Bun runtime
- **Database**: PostgreSQL, Prisma ORM
- **Storage**: Supabase Storage
- **Monorepo**: Turborepo

## Prerequisites

- Bun >= 1.3.13
- Node.js >= 18
- PostgreSQL database (e.g., Supabase, Neon)
- Supabase Project (for Document Storage)
- Google Cloud Project (for Calendar integration)

## Quick Start

### 1. Install Dependencies
```bash
bun install
```

### 2. Environment Setup

**`packages/db/.env`**
```env
DATABASE_URL="postgresql://username:password@host/database"
DIRECT_URL="postgresql://username:password@host/database"
```

**`apps/api/.env`**
```env
# Database
DATABASE_URL="your-database-url"
DIRECT_URL="your-direct-database-url"

# Authentication
JWT_SECRET="your-secret-key"

# Supabase Storage
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
SUPABASE_STORAGE_BUCKET="crm-documents"

# Google Calendar
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
GOOGLE_REDIRECT_URI="http://localhost:3001/auth/google/callback"

# Server
PORT=3001
CORS_ORIGIN="http://localhost:3000"
```

**`apps/frontend/.env.local`**
```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

### 3. Database Setup

```bash
cd packages/db
bunx prisma generate
bunx prisma migrate dev
```

### 4. Start Development

```bash
# From root - starts both frontend and backend
bun dev

# Or individually:
cd apps/api && bun dev       # Backend: http://localhost:3001
cd apps/frontend && bun dev  # Frontend: http://localhost:3000
```

### 5. Initial Setup

- Navigate to `http://localhost:3000/setup`
- Create your first admin account (Note: you can return to this page anytime to create additional administrators)
- Start using the CRM

## Deployment

Because this project uses a persistent backend, it requires a split deployment architecture:

### 1. Backend (Render / Railway)
The Express/Bun backend should be deployed to a persistent hosting provider like Render.
- **Build Command**: `bun install && cd packages/db && bunx prisma generate`
- **Start Command**: `cd apps/api && bun run index.ts`
- *Make sure to set all environment variables from `apps/api/.env`.*

### 2. Frontend (Vercel)
The Next.js frontend is optimized for Vercel.
- **Framework Preset**: Next.js
- **Root Directory**: `apps/frontend`
- **Environment Variables**: Set `NEXT_PUBLIC_API_URL` to your live backend URL (e.g., `https://api.yourdomain.com`).

## Available Scripts

```bash
bun dev              # Start development servers
bun build            # Build for production
bun lint             # Lint all packages
```

## User Roles

- **ADMIN**: Full access, manage users, view archived leads
- **MANAGER**: Manage all leads/clients/deals, archive leads
- **EMPLOYEE**: Manage own leads only, limited access

## Features

- Lead management with kanban board
- Client and deal tracking
- Task management
- Meeting scheduler with Google Calendar sync
- Document management with Supabase Storage
- Role-based permissions
- Archive functionality
- Multiple Administrator Support

## Project Structure

```
CRM/
├── apps/
│   ├── api/          # Express backend
│   └── frontend/     # Next.js frontend
└── packages/
    ├── db/           # Prisma schema
    ├── zod/          # Validation schemas
    └── ui/           # Shared components
```

