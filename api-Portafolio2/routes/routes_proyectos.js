const express = require("express")
const proyectoControllers = require("../controllers/controllers_proyecto")
const router = express.Router()

router.get("/", proyectoControllers.Proyectos)
router.post("/", proyectoControllers.createProject)
router.get("/:id", proyectoControllers.LoockProjectByName)
module.exports = router