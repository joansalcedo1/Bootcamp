import { useState, useEffect } from "react"
import { getPokemon } from "../services/poekeapi"
import Header from "./header"

import PokemonCard from "./PokemonCard"
export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemon(50)
            console.log(data)
            setPokemons(data)
        }
        fetchData()
    }
        , [])
    return (
        <>
            <Header />
            
            <div className="grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}