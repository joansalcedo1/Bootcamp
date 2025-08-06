import { json } from "express"


const hey = async (req,res)=>{
    console.log("hola desde el controlador")
    return res.status(200).send("Hola desde el controlador")
}

export {hey}