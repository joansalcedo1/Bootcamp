function Modal({ img, autor,precio, info, genero,titulo, modalID }) {
    return (
        
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalID}`} >
                Ver más
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/*<div className="modal-header">*/}
                        <div className=" d-flex justify-content-between align-items-center ps-5 pt-4 ">
                            <button type="button" className="btn-close " data-bs-dismiss="modal"></button>
                            <div class="flex-grow-1 d-flex justify-content-center">
                                <h3 class="modal-title">{titulo}</h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <div id="img-container">
                                        <img src={img} alt={titulo} className="img-fluid" />
                                        <span className=" ms-3 me-3">
                                            <p><b>Generos:</b> {genero}</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>
                                        <b>Precio: </b>{precio}
                                    </p>
                                    <p>
                                        <b>Autor: </b>{autor}
                                    </p>
                                    <p>
                                        <b>Sipnosis: </b>{info}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success">Agregar</button>
                        {/*<div className="modal-footer">*/}

                    </div>
                </div>
            </div>

        </>
    )
}
export default Modal