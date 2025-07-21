import Modal from "../components/Modal"

const reactImg = "https://cdn.worldvectorlogo.com/logos/react-1.svg"
export default function Features({ darkMode }) {
    let colorbg = "bg-light"
    let colorText = "text-dark"
    if (darkMode) {
        colorbg = "bg-dark"
        colorText = "text-light"
    }
    return (

        <>
            <section id="Features" class={`${colorbg} ${colorText} px-4 py-5 text-center`}>
                <h2>Caracteristicas principales</h2>
                <p>
                    Esta pagina consta de toda la primera clase de react.
                    En la cual vimos, la creación de <b>heroes</b> basicos,
                    <b>cards</b> y <b>NavBar</b>. Todos estos componentes
                    responsivos.
                </p>

                <div class={`${colorbg} ${colorText} d-flex justify-content-center flex-row`}>
                    <div class={`card m-2 hoverr`} style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Creacion de UI</b></p>
                            <p class="card-text">Los componentes de React agilizan la creación de una interfaz sensible a cualquier cambio en un sitio web o una aplicación de cualquier complejidad.</p>
                        </div>
                        <div className="card-footer">
                            <Modal
                                titulo="Creacion de UI"
                                info="Estos componentes pueden ser tan simples como un botón o tan complejos como una página entera."
                                modalID="modal-UI"
                            />
                        </div>
                    </div>

                    <div class="card m-2 hoverr" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Facil de depurar</b></p>
                            <p class="card-text">El código de React tiene una lógica clara, es fácil de leer, entender y depurar, lo que ayuda a reducir errores.</p>
                        </div>
                        <div className="card-footer">
                            <Modal
                                titulo="Facil depurar"
                                info="Esto facilita encontrar errores, comprender qué parte del código está fallando, y por qué."
                                modalID="modal-FD"
                            />
                        </div>
                    </div>
                    <div class="card  m-2 hoverr" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Fácil de aprender</b></p>
                            <p class="card-text">Tiene una documentación accesible y muchos recursos gratuitos online.</p>
                        </div>
                        <div className="card-footer">
                            <Modal
                                titulo="Facil de aprender"
                                info=" Además, cuenta con una comunidad muy activa y gran cantidad de documentación oficial y tutoriales gratuitos."
                                modalID="modal-FA"
                            />
                        </div>
                    </div>
                    <div class="card hoverr m-2" style={{ width: "15rem" }}>
                        <img src={reactImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="text-center"><b>Salida laboral</b></p>
                            <p class="card-text">Dominar React es una de las habilidades más demandadas para conseguir el trabajo de desarrollo Front End.</p>
                        </div>
                        <div className="card-footer">
                            <Modal
                                titulo="Salida laboral"
                                info="Muchas empresas, startups y grandes corporaciones lo utilizan para desarrollar sus aplicaciones."
                                modalID="modal-SL"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}