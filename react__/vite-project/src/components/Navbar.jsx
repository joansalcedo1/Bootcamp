function Navbar({ darkMode, toggleDarkMode }) {
    const reactImg = "https://cdn.worldvectorlogo.com/logos/react-1.svg"
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border">
                <div class="container-fluid  ">
                    <a class="navbar-brand " href="#">
                        <img src={reactImg} alt="Logo" width="30" height="24" class="me-3 d-inline-block align-text-top img-fluid" />
                        Primero pasos
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ps-3" id="navbarNavDropdown">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">React</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bootstrap</a>
                            </li>
                            <li class="nav-item">
                                <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox" checked={darkMode} onChange={toggleDarkMode} />
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}
export default Navbar