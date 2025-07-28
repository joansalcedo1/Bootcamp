//SE CONFIGURAN LAS EXTENSIONES NECESARIAS PARA QUE EL PROYECTO FUNCIONE
//Express: framework web minimalista y flexible que facilita la creación de aplicaciones web y APIs
//moongose: ODM que facilita el manejo de mongoDB para express
//dotEnv: paquete para Node.js que permite manejar las variables de entorno
//cors: Cross-Origin Resource Sharing
const express = require("express")
const { default:mongoose } = require("mongoose")
require("dotenv").config()
const cors = require('cors');

const routesLibros = require("./routes/routes_book")
//SE INICIALIZA EXPRESS Y SE DEFINE UN PUERTO A USAR
const app = express()
const PORT = process.env.PORT || 3006
//SE SETEA EL PUERTO 
app.set("port",PORT)
app.use(express.json())
app.use(cors());
//SE SETEA LAS RUTAS DE LA API
app.use("/api/libros/",routesLibros)
//PROMESA DE CONEXION
mongoose.connect(process.env.MONGO_DB_URI)
//CUANDO SE CUMPLA LA PROMESA SUCEDE .then
.then(()=>console.log("connected to DB"))
//SI HAY UN ERROR SE OBTIENE
.catch((err)=>console.error(err.message))
//LA APP(EXPRESS) DEBE ESCUCHAR EL PUERTO ESCOGIDO
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
