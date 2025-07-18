
const libros = require("../data/DataLibros.json")

exports.Libro = (req,res)=>{
    console.log("hola desde export libro")
    res.json(libros)
}