import React from "react"

const Projects = ({title, description, url, urlRepo, img}) => {
    return(
        <>
        <div class="row">
            <div class="col-md pt-3">
            <h3 className="text-uppercase title">{title}</h3>
            <p class="projects-text">{description}
            </p>    
            <a class="link-projects" href={url}>Go to website</a>
            <a class="link-projects ms-5" href={urlRepo}>View code</a>
            </div>  
            <div class="col-md">
                <img src={img} alt="" />
            </div>
        </div>

        
        
        </>
    )
}

export default Projects;