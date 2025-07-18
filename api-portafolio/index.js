const express = require("express");
const app = express();
const proyectoRoutes = require("./routes/routes_proyecto")
const PORT = 3006;

app.set("port",PORT);

app.get("/", (req,res)=>{
    let saludo= "hola mundo"
    console.log(saludo)
    res.send(saludo)
})
app.use("/api/proyectos", proyectoRoutes)
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto${PORT}`)
})