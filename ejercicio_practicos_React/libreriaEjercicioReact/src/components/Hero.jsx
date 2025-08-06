import RedesHeader from "./RedesHeader"
export default function Hero(){
    const ruta_imagen="https://images.vexels.com/content/216637/preview/digital-library-logo-design-1c96fa.png"
    return(
        <>
        <section className="text-center m-5">
            <div className="d-flex shadow px-4 py-5 my-5 text-center">
                <div className="row m-4 p-2">
                    <div className="col m-3 text-center">
                        <h1 class="m-4">¡Bienvenido!</h1>
                        <p class="m-3 p-2 lead mb-4">Donde encontrarás libros unicos y exclusivos a precios unicos y exclusivos</p>
                        <button type="button" className="btn btn-lg btn-primary m-4">Ver libros</button>                        
                    </div>
                    <div className="col m-3">
                        <img src={ruta_imagen} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}