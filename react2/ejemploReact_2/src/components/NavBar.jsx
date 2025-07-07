function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Joan Sebastian Salcedo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sobre mi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tecnologias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Estudios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar