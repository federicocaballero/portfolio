import React from "react"
import logo from "../assets/images/coding.png"
const Banner = () => {
    return(
        <>
        
        <div class="text-center banner-component" id="home">
        <div class="row">
            <div class="col-md-8 p-0 banner-col ">
                <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-3">
                    <h1 class="banner-subtitle"> &lt;¡Hello world!&gt;  </h1>
                    <p class="banner-title">Me llamo Federico Caballero</p>
                    <p class="banner-text">
                        Soy desarrollador frontend junior.
                        Complete cursos sobre HTML, CSS, Javascript, Bootstrap y React. Tambien tengo algunos conocimientos sobre Codeigniter, Laravel y SQL-Server<br/>
                        Soy estudiante de la carrera de sistemas de información, gracias a ello, hace algunos años descubri mi pasión por el desarrollo web.<br/> 
                    </p>
                    <div class="d-flex w-100 justify-content-evenly pt-1 ">
                        <button type="button" class="banner-button btn btn-outline-primary"><a target="blank" href="https://drive.google.com/file/d/1xG7PwqVeCqYhNAYzFsJrdVgmofvLZV2U/view?usp=sharing">Curriculum</a></button>
                        <button type="button" class="banner-button btn btn-outline-primary"><a target="blank" href="https://drive.google.com/drive/folders/1P2azjgI5HwMO0_s44KkSIURPwozrhosX?usp=sharing">Certificados</a></button>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-4 p-3 banner-img">
                <img src={logo} class="img-fluid" alt="ismg3"/>
            </div>
        </div>
        </div>
        </>
        )

}

export default Banner;
