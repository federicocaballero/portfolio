import React from "react"

const AboutMe = () => {
    return(
        <>
        <div class="text-center AM-component p-5">
        <div class="row">
            <div class="col-md-8 d-flex flex-column  justify-content-center">
            <p class="text-uppercase">Federico Caballero</p>
            <p class="AB-text">Student, stuying at degree of information systems.
            Some years ago, I became iterested in web development.  <br/> 
            I have completed courses of HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT and some more. <br/>
            I have some knowledge in Codeigniter and Laravel
            </p>
            </div>
            <div class="col">
                <img src="http://localhost:3000/coding.png" class="img-fluid" alt="img2"/>
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutMe;