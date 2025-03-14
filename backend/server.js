import express from "express"
import cookieParser from "cookie-parser"

// Routes
import authRoutes from './routes/auth.route.js'
import movieRoutes from './routes/movie.route.js'
import tvRoutes from './routes/tv.route.js'
import searchRoutes from './routes/search.route.js'


import { protectRoute } from "./middleware/protectRoute.js"

import { ENV_VARS } from "./config/envVars.js"
import { connectDB } from "./config/db.js"

const app = express()

const PORT = ENV_VARS.PORT

app.use(express.json()) // Parse req.body
app.use(cookieParser()) // Parse cookies from request

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", protectRoute, movieRoutes)
app.use("/api/v1/tv", protectRoute, tvRoutes)
app.use("/api/v1/search", protectRoute, searchRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
    connectDB()
})