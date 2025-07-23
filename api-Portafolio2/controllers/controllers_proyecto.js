const ProyectosModel =require("../modules/proyectos")

exports.Hola = (req,res)=>{
    console.log("hola desde el controlador")
    res.send("hola desde el controlador")
}

exports.Proyectos = async (req,res)=>{
    try {
        const proyectosList = await ProyectosModel.find({})
        return res.status(200).json(proyectosList)
        
    } catch (error) {
        return res.status(500).send(error)   
    }
}
//el req trae la informacion que yo recibo
exports.createProject= async(req,res)=>{
    try {
        const proyecto = req.body
        await ProyectosModel.create(proyecto)
        return res.status(201).json(proyecto)
    } catch (error) {
       return res.status(500).send(error) 
    }
}
exports.LoockProjectByName= async(req,res)=>{
    try {
        const {id}= req.params
        const result = await ProyectosModel.find({nombre: `${id}`})
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error) 
    }
}
exports.LoockProjectByID= async(req,res)=>{
    try {
        const {id}= req.params
        const result = await ProyectosModel.findById(id)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error) 
    }
}