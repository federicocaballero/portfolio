import React from "react"

const Projects = ({title, description, url, urlRepo, img}) => {
    return(
        <>
        <div class="row">
            <div class="col-md-6 pt-3">
            <h3 className="text-uppercase title">{title}</h3>
            <p class="projects-text">{description}
            </p>    
            <a class="link-projects" target="blank" href={url}>Go to website</a>
            <a class="link-projects ms-5" target="blank" href={urlRepo}>View code</a>
            </div>  
            <div class="col-md-6">
                <img src={img} class="img-fluid img-project" alt="img-project" />
            </div>
        </div>  
        
        </>
    )
}

export default Projects;