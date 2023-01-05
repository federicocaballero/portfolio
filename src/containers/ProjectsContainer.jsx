import React from "react"
import Projects from "../components/Projects";

const ProjectsContainer = () => {
    return(

        <>       
        <div id="carouselExampleSlidesOnly" class="carousel  slide ps-5 pt-0 pe-5 pb-5 m-0 skills-component" data-bs-ride="carousel">
        <h3 className="text-uppercase title">projects</h3>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <Projects title={'Birreria'} description={'Esta es la descripcion de la birreria'} url={''} urlRepo={''} img={'lll'}/>
            </div>
            <div class="carousel-item">
            <Projects title={'Travel Agency'} description={'esta es la descripcion de la agencia'} url={''} urlRepo={''} img={'lll'} />
            </div>
            <div class="carousel-item">
            <Projects title={'Portfolio'} description={'esta es la descripcion del portfolio'} url={''} urlRepo={''} img={'lll'} />
            </div>
        </div>
        </div>
        </>

    )
}

export default ProjectsContainer;