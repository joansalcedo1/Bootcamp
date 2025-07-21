export default function Hero({ darkMode }) {
    let colorbg="bg-light"
    let colorText ="text-dark"

    if(darkMode){
        colorbg="bg-dark"
    colorText ="text-light"
    }

    return (
        <section className={`${colorbg} ${colorText} p-4 text-center`}>
  
                
            <div className="row rounded m-4 shadow-lg d-flex align-items-center justify-content-center">
                
                <div className="col m-5 p-auto ">
                    <h1 className="pb-5">Primer proyecto de react con boostrap</h1>
                    <p>Este es el primer proyecto de react con vite y boostrap.
                        Fue diseñado bajo el marco del bootcamp de <b>programación
                            orientada el desarrollo web full stack </b>de valle talento
                        tech. El cual duro más de 140 horas
                    </p>
                </div>
                <div className="col m-5 p-4">
                    <a href="https://react.dev/">
                        <img id="imagen" src="https://www.atmail.com/wp-content/uploads/2018/01/React_logo_wordmark.png" alt="React"
                            className="img-fluid hoverr"
                        />
                    </a>
                    <h1>+</h1>
                    <a href="https://getbootstrap.com/">
                        <img id="imagen" src="https://i.imgur.com/DRUiMyM.png" alt="Bootstrap"
                            className="img-fluid hoverr"
                        />
                    </a>

                </div>
            </div>
        </section>
    )
}