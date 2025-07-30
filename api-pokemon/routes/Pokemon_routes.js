import { Router } from "express"
import {hey,createPokemon,getPokemons} from "../controllers/pomekon_controllers.js"
const router = Router()

router.get("/hola", hey)
router.post("/create",createPokemon)
router.get("/",getPokemons)


export default router
