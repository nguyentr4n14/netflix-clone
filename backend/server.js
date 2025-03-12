import express from "express"

// Routes
import authRoutes from './routes/auth.route.js'

const app = express()

const PORT = 5000

app.use("/api/v1/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})