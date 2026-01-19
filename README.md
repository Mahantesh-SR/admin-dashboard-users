# Admin Dashboard - Internship Assignment

A pre-built admin dashboard with **intentional bugs** and **incomplete features** for you to fix and complete.

## Quick Start

```bash
# Install dependencies
npm install

# Initialize MSW (required for mock API)
npx msw init public --save

# Start development server
npm run dev
```

The app will be available at http://localhost:5173

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety (strict mode) |
| Material React Table (MRT) | Data Grid |
| Material UI | Component Library |
| React Query | Data Fetching & Caching |
| MSW | Mock API |
| React Router v6 | Routing |
| Notistack | Toast Notifications |

## Project Structure

```
src/
├── api/                  # API calls
├── components/
│   └── tables/           # Table components (DynamicGrid, UserActions)
├── hooks/                # Custom hooks (useUsers, useDebounce)
├── layouts/              # Page layouts
├── mocks/                # MSW mock handlers
├── pages/
│   └── UsersPage/        # Users page
├── types/                # TypeScript types
├── utils/                # Utilities & column config
├── App.tsx
├── main.tsx
└── routes.tsx
```

## Your Tasks

See **ASSIGNMENT.md** for detailed instructions.

### Summary

| Task Type | Count | Skills Tested |
|-----------|-------|---------------|
| Bug Fixes | 3 | Debugging, React Query, MRT |
| Complete Features | 3 | Pattern following |
| Build New | 2 | Independent thinking |

## Submission

1. Fix all bugs and complete features
2. Make separate commits for each fix/feature
3. Update this README with your changes
4. Deploy to Vercel/Netlify
5. Submit repo link + live demo

---

## Changes Made

# Admin Dashboard – Users Management

A React + TypeScript admin dashboard built as part of a technical assessment.
The application demonstrates real-world frontend practices including debugging, performance optimization, UX improvements, and robust state management.

---

## 🔗 Live Demo

**Vercel:** https://admin-dashboard-users-five.vercel.app/

## 📦 GitHub Repository

    https://github.com/Mahantesh-SR/admin-dashboard-users

---

## 🛠️ Tech Stack

* React + TypeScript
* Vite
* Material UI
* Material React Table
* React Query
* MSW (Mock Service Worker)
* React Router

---

## ✅ Assignment Requirements & Implementation

### Part 1: Bug Fixes

#### Bug #1: Table not refreshing after status update

* **Issue:** Status change required manual refresh
* **Fix:** Implemented React Query cache invalidation after mutation
* **Location:** `src/hooks/useUsers.ts`

#### Bug #2: Groups column showing `[object Object]`

* **Issue:** Group objects rendered incorrectly
* **Fix:** Properly mapped and rendered group names as MUI Chips
* **Location:** `src/components/tables/DynamicGrid.tsx`

#### Bug #3: Pagination and filters not synced with URL

* **Issue:** State reset on refresh, URL not updated
* **Fix:** Used `useSearchParams` to sync pagination and filters with URL
* **Location:** `src/pages/UsersPage/UsersPage.tsx`

---

### Part 2: Feature Enhancements

#### Feature #1: Debounced Search

* Implemented 300ms debounce using a custom `useDebounce` hook
* Prevents API calls on every keystroke
* Improves performance and user experience

#### Feature #2: Loading Skeleton

* Replaced generic loader with table-shaped skeleton using MUI Skeleton
* Preserves layout during loading
* Improves perceived performance

#### Feature #3: Optimistic UI for Status Toggle

* Status updates immediately on user action
* Uses React Query `onMutate`, `onError`, and `onSettled`
* Rolls back UI state if API request fails

---

### Part 3: New Features

#### Feature #1: Enhanced Actions Column

* Added hover states and accessible aria labels
* Added confirmation dialog before deactivating users
* Improved UX and prevented accidental destructive actions

#### Feature #2: Improved Error Handling

* Added Error Boundary for graceful failure handling
* User-friendly error messages
* Retry option for failed requests

---

## 🚀 Deployment

* Deployed on **Vercel**
* Configured for Vite (`dist` output directory)
* Uses MSW for mock APIs, no backend setup required

---

## 📌 Notes

* Code follows modular and reusable patterns
* Commits are logically organized by fixes and features
* Application behavior matches real-world admin dashboards

---

Thank you for reviewing this submission.
Please feel free to reach out for any clarification.

**— Mahantesh SR**
