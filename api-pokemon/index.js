import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import Pokemon_routes from "./routes/Pokemon_routes.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3006


app.set("port", PORT)

app.use(express.json())
app.use(cors())
app.use("/api/pokemon/",Pokemon_routes)
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>console.log("connected to DB"))
.catch((err)=>console.error(err.message))
app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`)
})
