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
