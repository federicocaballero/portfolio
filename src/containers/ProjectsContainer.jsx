import React from "react"
import Projects from "../components/Projects";
import blogCafe from "../assets/images/blog-cafe.png"
import birreria from "../assets/images/birreria.png"
import travelAgency from "../assets/images/travel-agency.png"
import portfolio from "../assets/images/portfolio.png"
const ProjectsContainer = () => {
    return(

        <>    
        <div class="wave-top1" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="wave-top2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="wave-top3"></path></svg></div>
        <div class="wave-bottom1" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="wave-bottom2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="wave-bottom3"></path></svg></div>   
        <div id="carouselExampleSlidesOnly" class="carousel  slide ps-5 pt-0 pe-5 pb-5 m-0 skills-component" data-bs-ride="carousel">
        <h3 id="projects" className="text-uppercase title text-center">projects</h3>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <Projects title={'Birreria'} description={'Este proyecto muestra las opciones y locales de un local de cerveza artesanal. Muestra las sucursales y marcas que sirven.'} url={'https://frontend-birreria.web.app/'} urlRepo={'https://github.com/federicocaballero/Birreria-FrontEnd.git'} img={birreria}/>
            </div>
            <div class="carousel-item active">
                <Projects title={'Blog de café'} description={'Blog de sobre cafe con distintas paginas para navegar (Contacto, Cursos, Nosotros)'} url={'https://blogdecafetp.netlify.app/index.html'} urlRepo={'#'} img={blogCafe}/>
            </div>
            <div class="carousel-item">
                <Projects title={'Travel Agency'} description={'Este pagina muestra los distintos destinos y ofertas de una agencia de viajes'} url={''} urlRepo={'https://github.com/federicocaballero/Travel-Agency-Home.git'} img={travelAgency} />
            </div>
            <div class="carousel-item">
                <Projects title={'Portfolio'} description={'Mi propio portfolio'} url={''} urlRepo={'https://github.com/federicocaballero/portfolio.git'} img={portfolio} />
            </div>
        </div>
        </div>
        </>

    )
}

export default ProjectsContainer;