# Full-Stack Portfolio: Next.js + Django + PostgreSQL

> **Week 4 Milestone — Empty but Live: Ship a Blank Page**  
> Live Public URL ready for submission with Next.js frontend, Django backend, and PostgreSQL database configuration.

---

## 📁 Project Architecture
```
Portfolio/
├── frontend/             # Next.js 15 (React, TypeScript, Tailwind CSS)
│   ├── src/app/          # App Router & "Empty but Live" Landing Page
│   └── package.json
├── backend/              # Django REST Framework Backend
│   ├── api/              # Health check & portfolio API endpoints
│   ├── config/           # Django settings (PostgreSQL & SQLite fallback)
│   ├── manage.py
│   └── requirements.txt
├── docs/                 # Assignment & Build Artifacts
│   ├── identity_kit.md   # Personal brand, role & elevator pitch
│   ├── case_studies.md   # Project case studies & architecture details
│   └── content_map.md    # Full website layout & wireframe map
├── .gitignore
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Backend (Django)
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
API Root: [http://127.0.0.1:8000/api/health/](http://127.0.0.1:8000/api/health/)

---

## 🌐 Deploy to Vercel (Get Your Live URL in 2 Minutes)

1. **Push this repo to your GitHub:**
   ```bash
   git add .
   git commit -m "feat: Week 4 - Empty but Live blank page and project setup"
   git branch -M main
   git remote add origin https://github.com/rahul-hasan25/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in with GitHub.
   - Click **Add New...** > **Project**.
   - Import your `portfolio` repository.
   - In **Root Directory**, click **Edit** and select `frontend`.
   - Click **Deploy**!
   - Vercel gives you your live URL (e.g. `https://portfolio-rahul.vercel.app`).

3. **Verify:**
   - Open that URL on your phone to confirm it's live.
   - Take a screenshot of the page on your phone or browser for your submission!
