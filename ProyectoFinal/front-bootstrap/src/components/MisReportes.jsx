import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByID, update, borrar } from "../services/fetchDb";
export default function MisReportes() {
    const { _id } = useParams()
    const [direccion, setDireccion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [observaciones, setObservaciones] = useState("");
    const [busqueda, setBusqueda]= useState("")
    useEffect(() => {

        async function traerPorID() {
            try {
                let hueco = await getByID(_id)
                setDireccion(hueco.direccion)
                setCategoria(hueco.categoria)
                setObservaciones(hueco.observaciones)
            } catch (error) {
                console.error(error)
            }
        }
        traerPorID()
    }, [])
    async function handleUpdate(e) {
        e.preventDefault();
        let huecoNuevo = { _id, direccion, categoria, observaciones }
        let res = await update(huecoNuevo)
        console.log(res)
    }
    async function handleDelete(e) {
        e.preventDefault();
        let res = await borrar(_id)
    }
    //return para cuando se mete a buscar un hueco en particular
    if (!_id) {
        return (
            <>
                <section id="buscarHuecos_dad">
                    <div className="d-flex justify-items-center align-items-center">
                        <div className="container mt-3">
                            {/* Barra de búsqueda */}
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Buscar por dirección, categoría u observación..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </div>
                    </div>
                </section>
            </>
        )

    }
    //return para cuando se mete a buscar un hueco desde el modal del hueco
    else {
        return (
            <>
                <section id="misReportes_dad" className="">
                    <h1 className="text-center m-3">{direccion}</h1>
                    <div class="d-flex justify-content-center align-items-center">
                        <div id="form_dad" class="m-4">
                            <form class="p-4 border rounded-3 bg-light shadow-sm" onSubmit={handleUpdate}>
                                <h4 class="mb-4 text-primary text-center fw-bold">Editar crater</h4>
                                <div class="mb-3">
                                    <label for="nombre" class="form-label fw-semibold">Direccion</label>
                                    <input type="text" class="form-control" id="direccion" placeholder="Escribí la dirección del hueco" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                                </div>

                                <div class="mb-3">
                                    <div class="mb-3">
                                        <label for="categoria" class="form-label fw-semibold">Categoría</label>
                                        <select class="form-select" id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                                            <option value="">Selecciona una categoría</option>
                                            <option value="grande">Grande</option>
                                            <option value="mediano">Mediano</option>
                                            <option value="pequeño">Pequeño</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="mb-3">
                                    <label for="observaciones" class="form-label fw-semibold">Observaciones</label>
                                    <textarea class="form-control" id="observaciones" rows="3" placeholder="Danos detalles sobre ese crater..." value={observaciones} onChange={(e) => setObservaciones(e.target.value)} required></textarea>
                                </div>
                                <div className="bg-warning d-flex justify-content-center align-items-center">
                                    <button type="submit" class="btn btn-primary w-50 me-4 ms-4">Confirmar cambio</button>
                                    <button class="btn btn-danger w-50 me-4 ms-4" onClick={handleDelete} >Hueco ya no existe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>




            </>
        )
    }

}