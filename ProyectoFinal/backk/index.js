import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import Rutas_Huecos from "./routes/routes_Huecos.js"

dotenv.config()
const app= express()
const PORT= process.env.PORT || 3005

app.set('port', PORT)
app.use("/api/huecos/",Rutas_Huecos)
/*app.get('/',(req,res)=>{
    res.send("hello world")
})*/
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})