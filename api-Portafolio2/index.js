const express = require("express")
const proyectoRoutes = require("./routes/routes_proyectos")//
const { default: mongoose } = require("mongoose") //"Api" para manejar mongoDB
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3006
app.set("port",PORT)
app.get("/",(req,res)=>{
    console.log("hola mundo")
    res.send("hola mundo")
})
app.use(express.json()) 
app.use("/api/proyectos",proyectoRoutes)//
//el .connect es una promesa
mongoose.connect(process.env.MONGO_DB_URI)
//.(algo) es para el manejo de promesas 
.then(()=>console.log("Connect to DB"))
.catch((err)=>{console.error(err.message)})
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
