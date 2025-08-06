import mongoose from "mongoose"

const Schema = mongoose.Schema

const Huecos_Schema = new Schema({
    direccion: {
        type: String,
        required: true,
        maxlength: 20
        
    },
    categoria:{
        type: String, 
        required:true
    },
    observaciones:{
        type: String,
        required: true,
        maxlength: 100
    }
})