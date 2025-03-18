![image](https://github.com/user-attachments/assets/84833fbe-4afa-496c-aaf6-7bcd6bcf3d69)<h1 align="center">Netflix Clone</h1>

A full-stack Netflix clone app built with the **MERN stack** (MongoDB, Express.js, React, Node.js), styled using **TailwindCSS**. Authentication and Authorization are implemented using **JWT**, and **Zustand** is used for global state management.

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## Demo

🔗 **Live App**: [Netflix-clone](https://netflix-clone-6mw2.onrender.com)
- Please wait 50 seconds for the server to turn on instance.

---

## Features

-   User Signup & Login
-   Fetch Movies and Tv Shows
-   Watch trailers
-   Get similar movies/Tv shows
-   Search for movies, Tv shows and actors
-   Search history

---

## Tech Stack

- **Frontend**: React.js, Zustand, Tailwind CSS

- **Backend**: Node.js, Express.js, MongoDB

- **Authentication**: JSON Web Tokens (JWT)
  
- **API**: TMDB (The Movie Database) 
  
- **Deployment**: Render.com

---

### Setup .env file

```bash
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm run start
```
