export default function Hero() {
    return (
        <>
            <section class="m-4">
                <div class="row p-4 shadow rounded-3">
                    <div class="col d-flex align-items-center">
                        <div class="container m-2 text-center ">
                            <h2>¿Hay muchos huecos por tu cuadra, ve? </h2>
                            <div class=" m-4">
                                <h7>Reportalos y ayudemos a llevar un recuento de todos los craters que dañan nuestros vehiculos</h7>
                            </div>
                            <button type="button" class="btn btn-primary btn-lg btn-block font-weight-bold">Reportalo!!</button>

                        </div>
                    </div>
                    <div class="col ">
                        <div className="container ">
                            <div id="carouselExample" class="carousel slide ">
                                <div class="carousel-inner">
                                    <div class="carousel-item active rounded-3">
                                        <img src="https://www.laopinion.co/sites/default/files/2021-05/Invasi%C3%B3n-de-huecos-en-las-calles-de-Cucutaprados-del-este-prados-del-este-2.jpg" class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item rounded-3">
                                        <img src="https://personeriacali.gov.co/wp-content/uploads/2022/08/cali-huecos-768x462.jpg" class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item rounded-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QkKQkNB8wRsnYMBcM2HOB0saTjihZ5xjew&s" class="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}