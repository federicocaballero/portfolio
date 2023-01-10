import React from "react"

const Skills = () => {
    return(
        <>
        <div class="prueba" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba3"></path></svg></div>
        <div class="pruebaa" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba22"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba33"></path></svg></div>
        <div class="ps-5 pt-0 pe-5 pb-0 m-0 skills-component" id="skills">
            
        <h3 className="text-uppercase title text-center title">Skills</h3>
        <div class="row d-flex justify-content-between text-center">
            
            <div class="col-md-4 mt-3 text-center gap-2 d-flex flex-column align-items-center text-uppercase">
                <h4 class="subtitle" >Lenguajes de programacion</h4>
                <h6 class="w-50 btn btn-outline-secondary html-bg" ><i class="fa-brands fa-html5"></i> HTML</h6>
                <h6 class="w-50 btn btn-outline-secondary css-bg" ><i class="fa-brands fa-css3-alt"></i> CSS</h6>
                <h6 class="w-50 btn btn-outline-secondary js-bg" ><i class="fa-brands fa-square-js"></i> Javascript</h6>
                <h6 class="w-50 btn btn-outline-secondary sql-bg" ><i class="fa-solid fa-database"></i> SQL-SERVER</h6>
            </div>
            
            <div class="col-md-4 mt-3 text-center gap-2 d-flex flex-column align-items-center text-uppercase">
                <h4 class="subtitle" >Frameworks y librerias</h4>
                <h6 class="w-50 btn btn-outline-secondary bs-bg"><i class="fa-brands fa-bootstrap"></i> Bootstrap</h6>
                <h6 class="w-50 btn btn-outline-secondary react-bg"><i class="fa-brands fa-react"></i> React</h6>
                <h6 class="w-50 btn btn-outline-secondary ci-bg"><i class="fa-solid fa-fire-flame-curved"></i> Codeignither</h6>
            </div>

            <div className="col-md-4 mt-3 text-center gap-2 d-flex flex-column align-items-center text-uppercase">
                <h4 class="subtitle" >Software y herramientas</h4>
                <h6 class="w-50 btn btn-outline-secondary figma-bg"><i class="fa-brands fa-figma "></i> Figma</h6>
                <h6 class="w-50 btn btn-outline-secondary vs-bg"><iconify-icon icon="mdi:microsoft-visual-studio"></iconify-icon> VS Code</h6>
            </div>
        </div>
        </div> 
        
        
        </>
    )
}

export default Skills;
