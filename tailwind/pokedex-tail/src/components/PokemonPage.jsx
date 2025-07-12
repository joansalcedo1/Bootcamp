import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../services/poekeapi";
//Con el "UseParams" recupera el nombre del pokemon escogido (ver "app")
//una vez que se haya cambiado la variable useEffect detecta que hubo un cambio en la variable "name"
//UseState hace que una variable en un principio tenga un valor y despues de que useEffect se active se setea pokemon, con useState
//Ahora "pokemon", es un pokemon y dependiendo del valor de pokemon se renderiza algo 
//la funcion "PokemonPage" es llamada en "App"
export default function PokemonPage() {
    const { name } = useParams()
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState("Carga")

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemonByName(name)
            setPokemon(data)
        }
        fetchData()
    }, [name])
    if (!pokemon) {
        return (<div className="text-center text-2xl"> Pokemon no encontrado. hola.. </div>)
    } else if(pokemon=="Carga"){
        return (<h1> Cargando... </h1>)
    }
    return (
        <div className="max-w-md font-bold mx-auto m-4 text-2xl text-center">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>navigate(-1)}>Volver</button>
            <div>
                <h1 className=""> {pokemon.name}</h1>
                <img className="w-100" src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
                <h2>hp: {pokemon.stats[0].base_stat} </h2>
                <h2>Attack: {pokemon.stats[1].base_stat} </h2>
                <h2>Defense: {pokemon.stats[2].base_stat} </h2>
                <h2>Special Attack: {pokemon.stats[3].base_stat} </h2>
                <h2>Special Defense: {pokemon.stats[4].base_stat} </h2>
                <h2>Speed: {pokemon.stats[5].base_stat} </h2>
            </div>
            
        </div>
    )

}