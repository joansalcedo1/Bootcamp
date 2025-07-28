const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LibroSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        maxLength:100
    },
    autor:{
        type:String,
        required:true,
        maxLength:100
    },
    portada:{
        type: String,
        required:true,
        maxLength:500
    },
    sinopsis:{
        type: String,
        required: true,
        maxLength: 500
    },
    generos:{
        type:[String]
    }


})

module.exports = mongoose.model("Libro",LibroSchema)