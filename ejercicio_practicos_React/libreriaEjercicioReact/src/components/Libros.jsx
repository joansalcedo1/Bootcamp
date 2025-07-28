import { useState, useEffect } from "react";
import librosData from "../data/DataLibros.json"
import CardLibros from "./CardLibros";
import { getAllBooks } from "../services/getBooks";
function Libros() {
    const [libros, setLibros] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await getAllBooks()
            console.log(data)
            setLibros(data[0])
        }
        
        fetchData()
    }, [])
    return (
        <>
            <section>
                <h1 className="text-center">Mis libros<h4> ({libros.length})</h4></h1>
                  <p className="m-3 text-center">En esta pagina web encontrarás informacion sobre todos los libros que se encuentran en nuestra base de datos</p>
                <div className="bg-primary row justify-content-center">
                    {libros.map((libro, i) => (
                        <CardLibros
                            key={i}
                            libro={libro} />
                    ))}
                </div>
                
            </section>
        </>
    )
}
export default Libros