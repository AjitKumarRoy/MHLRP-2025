# MHLRP 2025 Conference Website

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-Hostinger-FF6C2C)](https://mhlrp2025.com)

Welcome to the official repository for the **MHLRP 2025** (International Conference on Mental Health and Life Resilience Psychology) website, hosted at [NERIST, Nirjuli, Arunachal Pradesh, India](https://www.nerist.ac.in) on **November 6-7, 2025**. This modern, SEO-optimized, and statically pre-rendered website is built with **React 19.1.0**, **Vite**, **Tailwind CSS**, and **Mantine UI**, featuring a contact form powered by **EmailJS** and animations via **Framer Motion**.

🌐 **Live Site**: [mhlrp2025.com](https://mhlrp2025.com)

![MHLRP 2025 Homepage Screenshot](screenshots/homepage.png)

## 📑 Table of Contents
- [About MHLRP 2025](#about-mhlrp-2025)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Building and Deploying](#building-and-deploying)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🧠 About MHLRP 2025

The **MHLRP 2025** conference brings together researchers, academics, and professionals to explore advancements in mental health and life resilience psychology. Held at the North Eastern Regional Institute of Science and Technology (NERIST), Nirjuli, this event offers opportunities for paper presentations, networking, and collaboration.

This repository contains the source code for the conference website, designed to provide seamless navigation, SEO-friendly content, and a responsive user experience for attendees seeking information on registration, venue, contact details, and more.

## ✨ Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS and Mantine UI.
- **SEO Optimized**: Pre-rendered pages with `react-helmet-async` for search engine visibility and social media previews (Open Graph, Twitter Cards).
- **Manual SSG**: Static site generation using `prerender.js` for 12 routes (e.g., `/`, `/registration`, `/venue`, `/contact`).
- **Interactive Contact Form**: Powered by EmailJS for direct inquiries to `mhlrp2025@gmail.com`.
- **Smooth Animations**: Framer Motion for engaging transitions and hover effects.
- **Google Maps Integration**: Embedded maps for NERIST venue location.
- **Analytics**: Google tag (`G-YNVCP37WF4`) for tracking user engagement.

## 🛠 Tech Stack

| Technology           | Version  | Purpose                          |
|----------------------|----------|----------------------------------|
| React                | 19.1.0   | Frontend framework               |
| Vite                 | 5.4.2    | Build tool and dev server        |
| Tailwind CSS         | 3.4.1   | Styling framework                |
| Mantine UI            | 7.13.2  | UI components                    |
| Framer Motion        | 12.0.0   | Animations                       |
| React Router         | 6.x     | Client-side routing              |
| React Helmet Async   | 2.0.5   | SEO metadata management          |
| EmailJS              | 3.12.1   | Contact form integration   |
| Babel                | 7.25.7   | Transpilation for SSG            |
| Node.js              | 20.x     | Runtime environment              |

## 📂 Project Structure
```
MHLRP-2025/
├── public/                  # Static assets (e.g., mhlrp-logo.png)
│   └── assets/              # Publicly accessible images
├── src/                     # Source code
│   ├── assets/              # Images (e.g., NERIST-gate.png, payment-modal.png)
│   ├── pages/               # Route components (Registration.jsx, Venue.jsx, Contact.jsx, etc.)
│   ├── App.jsx              # Main app with routes
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
├── screenshots/             # README screenshots (e.g., homepage.png)
├── .env                     # Environment variables (e.g., EmailJS keys)
├── .gitignore               # Ignored files (e.g., node_modules, .env)
├── prerender.js             # Manual SSG script
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
├── README.md                # This file
├── LICENSE                  # MIT License
```


**Note**: In `vite.config.js`, keys like `'paper-submission'` are quoted due to hyphens (invalid JavaScript identifiers); keys like `contact` are valid identifiers but quoted for consistency. This does not affect SSG functionality.

## 🚀 Setup Instructions

### Prerequisites
- **Node.js**: v20.x or later
- **npm**: v10.x or later
- **Git**: For cloning the repository
- **EmailJS Account**: For contact form ([dashboard.emailjs.com](https://dashboard.emailjs.com))

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AjitKumarRoy/MHLRP-2025.git
   cd MHLRP-2025

2. **Install Dependencies**:
    ```bash
    npm install
3. **Configure Environment Variables**:
    ```bash
    Create a .env file in the root:

    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

    Obtain IDs from your EmailJS dashboard.
4. **Run Locally**:
    ```bash
    npm run dev
    ```
    Open http://localhost:5173 in your browser.