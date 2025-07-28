const ProyectosModel = require("../modules/proyectos")

exports.Hola = (req, res) => {
    console.log("hola desde el controlador")
    res.send("hola desde el controlador")
}

exports.Proyectos = async (req, res) => {
    try {
        const proyectosList = await ProyectosModel.find({})
        return res.status(200).json(proyectosList)

    } catch (error) {
        return res.status(500).send(error)
    }
}
//el req trae la informacion que yo recibo
exports.createProject = async (req, res) => {
    try {
        let nombre = req.body.nombre
        let imagen = req.body.imagen
        let repo = req.body.repo
        let tecnologias = req.body.tecnologias
        let descripcion = req.body.descripcion
        nombre = nombre.replace(/\s+/g,'_')

        await ProyectosModel.create({
            nombre,
            imagen,
            repo,
            tecnologias,
            descripcion
        })
        return res.status(201).json(nombre)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}
exports.LoockProjectByName = async (req, res) => {
    try {
        const {name} = req.params
        const result = await ProyectosModel.find({ nombre: name })
        if (result==null){
            return res.status(404).json({message: `Proyecto ${name} no encontrado`})
        }
        console.log(result)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}
exports.LoockProjectByID = async (req, res) => {
    try {
        const { id } = req.params
        const result = await ProyectosModel.findById(id)
        if(result==null){
            return res.status(404).json({mesaage:`Proyecto ${id} no existe`})
        }
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) {
            return res.status(400).json({ message: "ID ingresado fue incorrecto" })
        }
        const proyecto = req.body
        const result = await ProyectosModel.findByIdAndUpdate(id, proyecto, { new: true })
        if (result == null) {
            return res.status(404).json({ message: "proyecto no encontrado" })
        }
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.deleteProjectById = async (req, res) => {
    try {
        const { id } = req.params
        if(id.length!= 24){
            return res.status(400).json({message: "Bad request"})
        }
        await ProyectosModel.findByIdAndDelete(id)
        return res.status(200).json({message:`Proyecto ${id} borrado con exito`})
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

exports.delateProjectByName = async(req,res)=>{
    try {
        const name=req.body.nombre
        const {nombreParam} = req.params
        console.log(name,req.params)
        if(name != nombreParam){
            return res.status(400).json({message: "proyecto no verificado"})
        }
        const result = await ProyectosModel.findOneAndDelete({nombre:name})
        return res.status(200).json(result)

    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}