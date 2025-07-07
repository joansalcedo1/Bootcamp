function cardLibros({ libro }) {
    return (
        <>
            <div class="card m-2" style={{ width: "12rem" }}>
                <img src={`${libro.portada}`} class="card-img-top card-header" style={{ height: "200px" }} alt="..." />
                <div class="card-body ">
                    <div className="row ">
                        <div>
                            <h5 className="card-title">{libro.titulo}</h5>
                        </div>
                        <div className="">
                            <p className="card-text text-secondary">{`${libro.generos}`}</p>
                        </div>
                    </div>
                    <div className="bg-secondary d-flex row justify-content-center align-items-end">
                        <div className=""></div>
                        <a href="#" class="btn btn-primary">Ver libro</a>
                    </div>




                </div>
            </div>
        </>
    )
}
export default cardLibros