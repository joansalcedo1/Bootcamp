function TarjetaProyecto({ proyecto }) {
    return (
        <>
            <div class="card" style={{width:"18rem"}}>
                <h5 className="card-title">{proyecto.nombre}</h5>
                <img src={`./src/assets/${proyecto.imagen}`} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">{proyecto.descripcion}</p>
                    </div>
            </div>
        </>
    )
}

export default TarjetaProyecto