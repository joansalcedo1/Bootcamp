const express = require("express")
const proyectoControllers = require("../controllers/controllers_proyecto")
const router = express.Router()

router.get("/", proyectoControllers.Proyectos)
router.post("/", proyectoControllers.createProject)
router.get("/:id", proyectoControllers.LoockProjectByID)
router.get("/nombre/:name",proyectoControllers.LoockProjectByName)
router.put("/:id", proyectoControllers.updateProject)
router.delete("/:id", proyectoControllers.deleteProjectById)
router.delete("/nombre/:nombreParam", proyectoControllers.delateProjectByName)
module.exports = router