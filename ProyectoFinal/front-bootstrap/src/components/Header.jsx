function Header() {
    /*
    <div class="container-fluid ">
                        <div class="navbar-brand mb-0 h1 mx-auto"><h1>Hueco founder</h1></div>
                    </div>
                    <div class=""> 
                        <div></div>
                    </div>
    */
    return (
        <>
            <header id="Header_dad" className="">
                <nav class="navbar bg-body-tertiary">
                    <div class="container d-flex justify-content-between align-items-center">
                        <div className="ps-4 pe-4 bg-info text-center align-items-center"><h5>Reportar</h5></div>
                        <div className="navbar-brand mb-0 h1 mx-auto"><h1>Hueco Founder</h1></div>
                        <div className="pe-4 ps-4 bg-info"><h5>Mis reportes</h5></div>

                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header