const express = require("express");
const proyectoControllers =require("../controllers/controllers_proyecto")
const router = express.Router();

router.get("/",proyectoControllers.Hola)

module.exports=router