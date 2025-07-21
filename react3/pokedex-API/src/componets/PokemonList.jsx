import { useState, useEffect } from "react"
import { getPokemon } from "../services/pokeApi"
import PokemonCard from "./PokemonCard"
export default function Pokemonlist() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemon(10)
            setPokemons(data)
        }
        fetchData()
    }
        , [])

    return (
        <>
            <h3> Pokedex</h3>
            <div className="row g-4">
                {pokemons.map( pokemon =>(
                    <PokemonCard pokemon={pokemons} key={pokemon.id}/>
                ))}
            </div>
        </>
    )
}
