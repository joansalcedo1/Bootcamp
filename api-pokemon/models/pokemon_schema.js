import mongoose from "mongoose"

const Schema= mongoose.Schema

const PokemonSchema = new Schema({
    pokemon_id:{
        type:Number,
        required:true
    },
    view:{
        type:Boolean,
        defalut: false 
    },
    catch:{
        type: Boolean,
        default:false,
        
    },
    in_team:{
        type:Boolean,
        default:false

    },
    stats:{
        type:[Number]
    },
    name:{
        type: String,
        required: true,
        unique: true
    }
})


export default mongoose.model("pokemonModel",PokemonSchema)
/*

*/