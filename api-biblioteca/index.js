const express = require("express")
const app = express()
const PORT = 3008
const proyectoRoutes = require("./routes/routes_proyecto");
app.set("port", PORT)

app.get("/",(req,res)=>{
    let saludo= "hola mundo api Libro"
    console.log(saludo)
    res.send(saludo)
})
app.use("/api/libros",proyectoRoutes)
app.listen(PORT, ()=>{
    console.log("Escuchando en el puerto 3008")
})