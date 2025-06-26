# 💱 Live Currency Converter

A sleek and responsive real-time currency converter built using **React**, **Vite**, and **Tailwind CSS v4**. This tool helps users convert between international currencies instantly using live exchange rates.

---

## 🚀 Deployment (Vercel)

This project is deployed using [Vercel](https://vercel.com), a powerful and easy-to-use platform for frontend applications.

🔗 **Live Demo:** [https://live-currency-converter.vercel.app](https://live-currency-converter.vercel.app)

---
---

![Project Screenshot](./public/project.PNG)

---

## 🚀 Features

- 🌐 Live exchange rates via [@fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api)
- 🔄 Swap currencies
- 📱 Fully responsive layout
- 🎨 Glassmorphism modern UI
- ⚙️ Fast Vite + Tailwind setup

---

## 📸 Demo

> Replace with your deployed site

[Live Demo](https://your-live-site-url.com)

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS v4
- Exchange API from Fawaz Ahmed
- React Icons

---

## 📂 Project Structure

```

src/
├── App.jsx
├── main.jsx
├── hooks/
│ └── useCurrencyInfo.js
├── components/
│ ├── InputBox.jsx
│ └── Index.jsx
public/
├── background.jpg
└── screenshot.png

```

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/live-currency-converter.git
cd live-currency-converter
npm install
npm run dev
```

## 📜 API Reference

Using Fawaz Ahmed’s exchange rates via jsDelivr:

```bash
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base}.json
```

Example:
```bash
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```