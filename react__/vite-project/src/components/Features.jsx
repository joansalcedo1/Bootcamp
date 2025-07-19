import Modal from "../components/Modal"

const reactImg = "https://cdn.worldvectorlogo.com/logos/react-1.svg"
export default function Features() {
    return (
        <>
            <section id="Features" className="px-4 py-5 text-center">
                 <h2>Caracteristicas principales</h2>
                <p>
                    Esta pagina consta de toda la primera clase de react.
                    En la cual vimos, la creación de <b>heroes</b> basicos,
                    <b>cards</b> y <b>NavBar</b>. Todos estos componentes
                    responsivos. 
                </p>

                <div className="d-flex justify-content-center flex-row ">
                    <div class="card m-2 hoverr" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Creacion de UI</b></p>
                            <p class="card-text">Los componentes de React agilizan la creación de una interfaz sensible a cualquier cambio en un sitio web o una aplicación de cualquier complejidad.</p>
                        </div>
                    </div>
                    
                    <div class="card m-2 hoverr" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Facil de depurar</b></p>
                            <p class="card-text">El código de React tiene una lógica clara, es fácil de leer, entender y depurar, lo que ayuda a reducir errores.</p>
                        </div>
                        <div className="card-footer">
                            <Modal/>
                        </div>
                    </div>
                    <div class="card  m-2 hoverr" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Fácil de aprender</b></p>
                            <p class="card-text">Tiene una documentación accesible y muchos recursos gratuitos online.</p>
                        </div>
                    </div>
                    <div class="card hoverr m-2" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Salida laboral</b></p>
                            <p class="card-text">Dominar React es una de las habilidades más demandadas para conseguir el trabajo de desarrollo Front End.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}