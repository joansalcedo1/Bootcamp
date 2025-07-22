import { useState, useEffect } from "react";
import proyectosData from "../data/proyectos.json"
import TarjetaProyecto from "./TarjetaProyecto"
function Proyectos() {
    const [proyectos, setProyectos] = useState([])
    useEffect(() => {
        setProyectos(proyectosData)
    }, [])
    return (
        <>
            <section>
                <h2 className="text-center">Mis proyectos</h2>
                <div className="row">
                    {proyectos.map((proyecto,i)=>(
                        <TarjetaProyecto
                        key ={i}
                        proyecto= {proyecto}/>
                    ))}
            </div>
            </section>
        </>
    )
}
export default Proyectos