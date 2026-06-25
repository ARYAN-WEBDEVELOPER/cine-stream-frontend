# 🎬 CineStream

A full-stack movie recommendation application built with React, Node.js, Express, MongoDB Atlas, Cloudinary, and TMDB API.

### Backend Repository

https://github.com/ARYAN-WEBDEVELOPER/cine-stream-backend

## 🚀 Live Demo

### Frontend

https://cine-stream-frontend-snowy.vercel.app/

### Backend

https://cine-stream-backend-lwzn.onrender.com/

---

## ✨ Features

### 🎥 Movies

* Search movies using TMDB API
* Browse popular movies
* View movie details

### ❤️ Favorites

* Add movies to favorites
* Remove movies from favorites
* Store favorites in MongoDB

### ⭐ Reviews

* Create reviews
* Read reviews
* Delete reviews

### 👤 Profile

* Upload profile image
* Store profile information
* Cloudinary image hosting

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer
* Cloudinary

### APIs

* TMDB API

---

## 📁 Project Structure

```text
CineStream/
├── frontend/
└── backend/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Frontend (.env)

```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
VITE_API_URL=http://localhost:5000
```

### Backend (.env)

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```

---

## 📡 API Endpoints

### Profile

```http
POST /api/profile/upload
```

### Favorites

```http
GET /api/favorites
POST /api/favorites
DELETE /api/favorites/:id
```

### Reviews

```http
GET /api/reviews
POST /api/reviews
DELETE /api/reviews/:id
```

---

## 🎯 Learning Outcomes

* REST API Development
* MongoDB Atlas Integration
* Cloudinary Image Uploads
* Environment Variables
* Frontend-Backend Integration
* Full-Stack Deployment
* Git & GitHub Workflow

---

## 👨‍💻 Author

Aryan

First Full-Stack Project 🚀
