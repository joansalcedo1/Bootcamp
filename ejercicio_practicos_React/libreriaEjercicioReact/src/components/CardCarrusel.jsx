export default function CardCarrusel({ nombre, descripcion}) {
    return (
        <>
            <div class="card" style={{ width: 300 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe24WfdF4iW7OIAY8xjOYmBiH3TYWLAhZSWg&s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">
                        {nombre}
                    </h4>
                    <p class="card-text">{descripcion}</p>
                </div>
            </div>
        </>
    )
}