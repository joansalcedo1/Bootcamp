import { Router } from "express"
import {hey} from "../controller/controller_Huecos.js"

const router= Router()

router.get("/",hey)

export default router
