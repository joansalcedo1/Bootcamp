import Modal from "./Modal_Hueco"
import { useEffect, useState } from "react"
export default function Card_huecos({ hueco }) {
    const [bgColor, setBgColor] = useState("")
    useEffect(() => {
        switch (hueco.categoria) {
            case "pequeño":
                setBgColor("bg-info")
                break;
            case "mediano":
                setBgColor("bg-warning")
                break;
            case "grande":
                setBgColor("bg-danger")
                break;

            default:
                break;
        }
    }, [])

    function obtenerParteFinal(direccion) {
        if (!direccion) return "";
        const partes = direccion.split("#");
        return partes.length > 1 ? partes[1].trim() : "";
    }


    return (
        <>
            <div class="card m-2" style={{ width: "12rem" }}>
                <img src={`${/*libro.portada*/"portada"}`} class="card-img-top card-header" style={{ height: "200px" }} alt="..." />
                <div class="card-body ">
                    <div className="row ">
                        <div>
                            <h5 className="card-title">
                                {hueco.direccion}
                                {/* {libro.titulo.replaceAll("_", " ")} */}
                            </h5>
                        </div>
                        <div className="">
                            {/*Pensarlo como una capsula con color*/}
                            <p className="card-text text-secondary">
                                <span class={`badge ${bgColor}`}>{hueco.categoria}</span>

                                {/* {libro.generos.join(", ")} */}
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondary row rounded mt-2">
                        <Modal
                            direccion={hueco.direccion}
                            categoria={hueco.categoria}
                            comentarios={hueco.observaciones}
                            modalID={`modal-${obtenerParteFinal(hueco.direccion)}`}

                        //  direccion={libro.portada}
                        // categoria={libro.autor.replaceAll("_", " ")}
                        // comentarios={5555}
                        // modalID={`modal-${libro.titulo}`}
                        />
                    </div>

                </div>
            </div>

        </>
    )
}