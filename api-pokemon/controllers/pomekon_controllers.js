import { json } from "express"
import pokemonModel from "../models/pokemon_schema.js"

const hey = async (req,res)=>{
    console.log("hola desde el controlador")
    return res.status(200).send("Hola desde el controlador")
}
const createPokemon = async(req,res)=>{
    try {
        const pokemon = new pokemonModel(req.body)
        if(req.body.stats.length!=6){
            return res.status(400).json({Message:"Cantidad de stats incorrecta"})
        }
        
        await pokemon.save()
        return res.status(201).json(pokemon)
        
    } catch (error) {
        if(error.code == 11000){
            return res.status(500).json({
                message:`El nombre ${req.body.name} ya existe`,
                error:error
            })
        }
        console.error(error)
        return res.status(error.code).json(error)
    }
}

const getPokemons = async(req,res)=>{
    try {
        const pokemons = await pokemonModel.find()
        return res.status(200).json(pokemons)
    } catch (error) {
        console.log(error)
        return res.status(error.code).json(error)
    }
}
export {hey,createPokemon,getPokemons}