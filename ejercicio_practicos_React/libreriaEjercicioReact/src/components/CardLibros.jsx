import Modal from "./Modal"
function cardLibros({ libro }) {
    const mensaje=""
    return (
        <>
            <div class="card m-2" style={{ width: "12rem" }}>
                <img src={`${libro.portada}`} class="card-img-top card-header" style={{ height: "200px" }} alt="..." />
                <div class="card-body ">
                    <div className="row ">
                        <div>
                            <h5 className="card-title">
                                {libro.titulo.replaceAll("_", " ")}
                            </h5>
                        </div>
                        <div className="">
                            <p className="card-text text-secondary">
                                {libro.generos.join(", ")}
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondary row mt-2">
                        <Modal
                            img={libro.portada}
                            autor={libro.autor.replaceAll("_", " ")}
                            precio={5555}
                            info={libro.sinopsis}
                            genero={libro.generos.join(", ")}
                            titulo={libro.titulo.replaceAll("_", " ")}
                            modalID={`modal-${libro.titulo}`}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
export default cardLibros