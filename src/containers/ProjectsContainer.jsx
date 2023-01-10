import React from "react"
import Projects from "../components/Projects";

const ProjectsContainer = () => {
    return(

        <>    
        <div class="prueba" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba3"></path></svg></div>
        <div class="pruebaa" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba22"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba33"></path></svg></div>   
        <div id="carouselExampleSlidesOnly" class="carousel  slide ps-5 pt-0 pe-5 pb-5 m-0 skills-component" data-bs-ride="carousel">
        <h3 id="projects" className="text-uppercase title text-center">projects</h3>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <Projects title={'Birreria'} description={'Este proyecto muestra las opciones y locales de un local de cerveza artesanal. Muestra las sucursales y marcas que sirven.'} url={'https://frontend-birreria.web.app/'} urlRepo={'https://github.com/federicocaballero/Birreria-FrontEnd.git'} img={'lll'}/>
            </div>
            <div class="carousel-item active">
                <Projects title={'Blog de café'} description={'Blog de sobre cafe con distintas paginas para navegar (Contacto, Cursos, Nosotros)'} url={'https://blogdecafetp.netlify.app/index.html'} urlRepo={'#'} img={'lll'}/>
            </div>
            <div class="carousel-item">
                <Projects title={'Travel Agency'} description={'Este pagina muestra los distintos destinos y ofertas de una agencia de viajes'} url={''} urlRepo={'https://github.com/federicocaballero/Travel-Agency-Home.git'} img={'lll'} />
            </div>
            <div class="carousel-item">
                <Projects title={'Portfolio'} description={'Mi propio portfolio'} url={''} urlRepo={'https://github.com/federicocaballero/portfolio.git'} img={'lll'} />
            </div>
        </div>
        </div>
        </>

    )
}

export default ProjectsContainer;