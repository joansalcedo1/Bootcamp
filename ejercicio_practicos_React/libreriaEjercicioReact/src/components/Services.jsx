import CardCarrusel from "./CardCarrusel"
export default function OurServices() {

    return (
        <>
            <section id="padreServices" className="text-center m-5">
                <div className="mb-5">
                    <h2>Nuestros sercicios</h2>
                </div>
                {/*PARA PONERLO AUTOMATICO data-bs-ride="carousel"*/}
                <div id="carouselCards" className="carousel slide ms-5">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <CardCarrusel nombre="Biblioteca" descripcion="Una grandiosa biblioteca bien extrambótica" />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <CardCarrusel nombre="Archivo" descripcion="Donde cada página cuenta su historia" />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <CardCarrusel nombre="Lectura" descripcion="Viaja sin moverte con cada libro" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <CardCarrusel nombre="Historia" descripcion="Tiempos pasados, páginas presentes" />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <CardCarrusel nombre="Ciencia" descripcion="La lógica detrás de la magia" />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <CardCarrusel nombre="Arte" descripcion="Colores, formas y palabras que inspiran" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCards" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselCards" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>


            </section>
        </>
    )
}