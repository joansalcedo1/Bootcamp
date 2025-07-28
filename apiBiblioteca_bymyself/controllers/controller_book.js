const { Console } = require("console")
const bookModel = require("../modules/schema_Book")


exports.Hola = (req, res) => {
    console.log("hola desde el controlador")
    return res.status(200).send("hola desde el controlador")
}

exports.getAll = async (req, res) => {
    try {
        const result = await bookModel.find({})
        if (!result) {
            return (res.status(400).json({ message: "Bad request" }))
        }
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json("Hubo un error. Mirar consola")
    }
}

exports.getByID = async (req, res) => {
    try {
        const {id}= req.params
        const result = await bookModel.findById(id)
        if(result==null){
            return (res.status(404).json({message:`libro ${id} no encontrado`}))
        }
        return res.status(200).json(result)
    } catch (error) {console.log(error)
        return res.status(500).json("Hubo un error. Mirar consola")
    }
}

exports.getByName = async (req, res) => {
    console.log("hola")
    try {
        const {title}= req.params
        const result = await bookModel.findOne({ titulo: title })
        if (result==null){
            return res.status(404).json({message: `Libro ${title} no encontrado`})
        }
        return res.status(200).json(result)
    } catch (error) {console.log(error)
        return res.status(500).json("Hubo un error. Mirar consola")
    }
}
exports.getByAutorName = async (req, res) => {
    try {
        const {autor}= req.params
        
        const result = await bookModel.findOne({ autor: autor })
        if (result==null){
            return res.status(404).json({message: `Autor ${autor} no encontrado`})
        }
        return res.status(200).json(result)
    } catch (error) {console.log(error)
        return res.status(500).json("Hubo un error. Mirar consola")
    }
}

exports.createBook = async (req, res) => {
    try {
        const content = req.body
        await bookModel.create(content)
        return res.status(201).json(content)

    } catch (error) {
        console.log(error)
        return res.status(500).json("Hubo un error. Mirar consola")
    }
}

