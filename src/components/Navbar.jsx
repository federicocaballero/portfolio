import React from "react"

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid navbar-component">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-uppercase text-light fw-bolder">
                <li className="nav-item">
                <a className="nav-link links" href="#home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link links" href="#skills">Habilidades</a>
                </li>
                <li className="nav-item">
                <a className="nav-link links" href="#projects">Proyectos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link links" href="#contact">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar; 