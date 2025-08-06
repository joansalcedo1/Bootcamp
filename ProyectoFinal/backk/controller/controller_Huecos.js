import huecoModel from "../models/schema_huecos.js"

const hey = async (req,res)=>{
    console.log("hola desde el controlador")
    return res.status(200).send("Hola desde el controlador")
}
const crearHueco= async(req,res)=>{
    try {
        const content = req.body
        await huecoModel.create(content)
        return res.status(201).json(content)

        /*const pokemon = new pokemonModel(req.body)
        if(req.body.stats.length!=6){
            return res.status(400).json({Message:"Cantidad de stats incorrecta"})
        }
        
        await pokemon.save()
        return res.status(201).json(pokemon)*/

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getAllHuecos = async(req,res)=>{
    try {
        const huecos = await huecoModel.find()
        return res.status(200).json(huecos)
    } catch (error) {
        return(res.status(500).json(error))
    }
}

export {crearHueco,getAllHuecos}