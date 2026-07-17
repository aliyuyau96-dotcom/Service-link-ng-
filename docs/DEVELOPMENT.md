# Development Guide

## Setup

### 1. Install Dependencies

```bash
npm run install:all
```

### 2. Environment Variables

Create `.env` files in both `frontend` and `backend` directories.

**Backend (.env)**
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=servicelink_ng
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret
API_URL=http://localhost:5000
FRONTEND_URL=http://localhost:3000
```

### 3. Database Setup

```bash
# Create PostgreSQL database
createdb servicelink_ng

# Run migrations (will be added in Sprint 2)
```

## Running Locally

### Option 1: Run Both (Recommended)
```bash
npm run dev
```

### Option 2: Run Separately
```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend
```

Frontend will be available at `http://localhost:3000`
Backend API at `http://localhost:5000`

## Project Structure

```
/frontend
  ├── app/              # Next.js app directory
  ├── components/       # Reusable React components
  ├── pages/           # Pages (legacy, if needed)
  ├── styles/          # CSS/Tailwind
  ├── utils/           # Utility functions
  └── public/          # Static assets

/backend
  ├── src/
  │   ├── routes/      # API routes
  │   ├── controllers/ # Request handlers
  │   ├── models/      # Database models
  │   ├── middleware/  # Express middleware
  │   ├── utils/       # Utility functions
  │   └── index.ts     # Entry point
  └── dist/            # Compiled output
```

## Sprint 1 Tasks

- [ ] Project setup ✓
- [ ] Homepage
- [ ] Authentication UI
- [ ] Navigation
- [ ] Search page

## Commit Convention

```
feat: Add new feature
fix: Fix bug
docs: Documentation changes
style: Code style changes
refactor: Refactor code
test: Add tests
chore: Maintenance
```
