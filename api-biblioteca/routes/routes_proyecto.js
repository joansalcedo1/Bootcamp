const express = require("express")
const proyectoControles = require("../controllers/controllers_proyecto")
const router = express.Router()

router.get("/",proyectoControles.Libro)

module.exports=router