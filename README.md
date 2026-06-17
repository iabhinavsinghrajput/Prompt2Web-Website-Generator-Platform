# 🌌 Prompt2Web - Website Generator Platform

Prompt2Web is a high-end, production-grade AI-powered website builder that generates fully responsive, visually stunning single-page applications (SPAs) from simple natural language descriptions in seconds.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](YOUR_LIVE_DEMO_LINK_HERE)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![DeepSeek](https://img.shields.io/badge/AI-DeepSeek--Chat-orange?style=for-the-badge)](https://deepseek.com/)

---

## 🔗 Live Demo
Access the live deployment of the platform here:
👉 **https://prompt2web-website-generator-platform-1.onrender.com/**

---

## ✨ Features

- ⚡ **Instant AI Generation**: Input a natural language prompt, and our system generates a complete, visually rich website using `deepseek/deepseek-chat` via OpenRouter.
- 🛠 **Interactive Visual Editor**: Update and iterate on the generated website inline using simple chat prompts, or edit the source code directly with the integrated **Monaco Code Editor**.
- 📱 **Guaranteed Responsiveness**: The AI is instructed to write mobile-first CSS using Grid/Flexbox layouts, ensuring the site scales beautifully across mobile, tablet, and desktop screens.
- 🚀 **One-Click Deployments**: Deploy generated websites instantly with unique slugs (e.g. `/site/mycoolwebsite12345`) and view them live inside an iframe sandbox.
- 🔒 **Firebase Google Authentication**: Fast and secure Google sign-in integrated using Firebase Client SDK and JWT-based HTTP-only cookies in the backend.
- 💳 **Razorpay Payment Gateway**: Seamless in-app credit purchases. Generating a site costs **10 credits**; updating it costs **5 credits**. Users get **100 free credits** upon registration.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: React 19 + Vite 8 (Fast HMR)
- **Styling**: Tailwind CSS v4 (Modern styling engine)
- **State Management**: Redux Toolkit + Redux Persist (User data persistence)
- **Animations**: Framer Motion / Motion.js
- **Code Editor**: Monaco Editor (`@monaco-editor/react`)
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js & Express
- **Database**: MongoDB & Mongoose ORM
- **Authentication**: JWT (JSON Web Tokens) with Secure HTTP-Only Cookies
- **Payments**: Razorpay Node SDK
- **AI Integration**: OpenRouter API (`deepseek/deepseek-chat`)

---

## 📁 Repository Structure

```
AI Website Builder/
├── frontend/             # React SPA (Vite + Tailwind CSS v4)
│   ├── src/
│   │   ├── components/   # Reusable UI components (Navbar, LoginModal, etc.)
│   │   ├── pages/        # Main pages (Home, Dashboard, Generate, Editor, LiveSite)
│   │   ├── redux/        # Redux Toolkit slice configuration
│   │   ├── firebase.js   # Firebase App initialization
│   │   └── main.jsx      # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/              # Express REST API (Node.js)
│   ├── config/           # Configurations (OpenRouter, Razorpay)
│   ├── controllers/      # Route controllers (Auth, Payment, Website generation)
│   ├── database/         # MongoDB connection config
│   ├── models/           # Mongoose schemas (User, Website, Payment)
│   ├── routes/           # Express routes
│   ├── utils/            # Helper utilities (JSON extraction)
│   ├── index.js          # Express server entry point
│   └── package.json
│
└── README.md             # Project documentation (this file)
```

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a running local MongoDB instance

---

### Setup & Installation

#### 1. Configure Environment Variables

Create a `.env` file in the **backend** directory:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_signing_secret
OPENROUTER_API_KEY=your_openrouter_api_key
FRONTEND_URL=http://localhost:5173
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET_KEY=your_razorpay_secret
```

Create a `.env` file in the **frontend** directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_SERVER_URL=http://localhost:8000
VITE_RAZORPAY_KEY=your_razorpay_key
```

> [!NOTE]
> Make sure to configure Google Sign-In inside your Firebase console and add the API keys to the frontend environment file.

---

#### 2. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```
The server will start listening at `http://localhost:8000`.

---

#### 3. Start the Frontend Dev Server

```bash
cd ../frontend
npm install
npm run dev
```
The application will launch and run at `http://localhost:5173`.

---

## 🤝 Contributing
Feel free to fork the repository, create a branch, and submit a pull request!
