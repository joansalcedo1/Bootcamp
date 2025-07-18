import { useState, useEffect } from "react";

function EffectEjemplo() {
    const [datos, setDatos] = useState("");
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/")
                let datosObtenidos = await respuesta.json()
                setDatos(datosObtenidos)
            } catch (error) {
                console.log(`Error al hacer fetch: ${error.message}`)
            }

        }
        fetchDatos()

    },[])
    console.log(`Datos: ${datos}`)

    if(datos[0]){
        console.log("NombreUsuario: ", datos[0].name)
    }
    while (!datos[0]){
        return (<>
        <h1>Cargando datos</h1>
        </>)
    }
    return (
        <>
        </>
    )
}
export default EffectEjemplo