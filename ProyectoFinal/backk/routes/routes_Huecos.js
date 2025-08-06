import { Router } from "express"
import {crearHueco,getAllHuecos}  from "../controller/controller_Huecos.js"

const router = Router()

//router.get("/",hey)
router.post("/", crearHueco)
router.get("/",getAllHuecos)

export default router
