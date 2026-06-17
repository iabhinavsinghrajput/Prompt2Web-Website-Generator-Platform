import express from 'express'
import 'dotenv/config'
import connectDB from './database/db.js'
import authRoute from './routes/authRoute.js'
import websiteRoute from './routes/websiteRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import paymentRoute from './routes/paymentRoute.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'https://prompt2web-website-generator-platform-1.onrender.com',
    credentials:true
}))


app.use('/api/auth', authRoute)
app.use('/api/website', websiteRoute)
app.use('/api/payment', paymentRoute)

//http:localhost:8000/api/auth/google

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is listening at port: ${PORT}`)
})
