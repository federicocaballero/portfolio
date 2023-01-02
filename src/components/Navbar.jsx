import React from "react"

const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid navbar-component">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav text-uppercase text-light fw-bolder">
                <li class="nav-item">
                <a class="nav-link links" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link links" href="#">About me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link links" href="#">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link links" href="#">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link links" href="#">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar; 