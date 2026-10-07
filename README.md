# Faithlink

A small community web app built with **Vite + React + TypeScript**, backed by **Firebase** (email/password auth).

## Stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- [Firebase](https://firebase.google.com/) — Authentication, Firestore, Storage
- [React Router](https://reactrouter.com/) for page routing
- Plain CSS Modules (mobile-first, responsive)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure Firebase**

   ```bash
   cp .env.example .env
   ```

   Then fill in the values from your Firebase project
   (**Project settings → General → Your apps → SDK setup and configuration**):

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```

   In the Firebase console, enable **Authentication → Sign-in method → Email/Password**.

   `.env` is git-ignored — never commit real keys. The web API key is not a secret, but
   access is controlled by your Firebase security rules.

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open the URL printed in the terminal (usually <http://localhost:5173>).

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server with hot reload |
| `npm run build`     | Type-check and build for production  |
| `npm run preview`   | Preview the production build         |

## Routes

| Path         | Page      | Notes                          |
| ------------ | --------- | ------------------------------ |
| `/`          | Landing   | Public                         |
| `/login`     | Login     | Public                         |
| `/signup`    | Signup    | Public                         |
| `/dashboard` | Dashboard | Protected — redirects to `/login` when signed out |

## Project structure

```
src/
  App.tsx                 # Routes
  main.tsx                # Entry point
  components/
    ProtectedRoute.tsx    # Auth guard
  context/
    AuthContext.tsx       # Firebase auth state + login/signup/logout
  lib/
    firebase.ts           # Firebase app + service exports (env-driven config)
  pages/
    Landing/  Login/  Signup/  Dashboard/
  styles/
    global.css            # Reset, design tokens, base typography
    auth.module.css       # Shared login/signup form styles
```
