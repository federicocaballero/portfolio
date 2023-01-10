import React from "react"

const AboutMe = () => {
    return(
        <>
        <div class="prueba" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba3"></path></svg></div>
        <div class="pruebaa" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba22"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba33"></path></svg></div>
        {/* ---wave start--- 
        <svg id="wave" class="prueba2" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path class="prueba2" fill="url(#sw-gradient-0)" d="M0,70L360,0L720,40L1080,30L1440,10L1800,10L2160,80L2520,60L2880,70L3240,20L3600,10L3960,40L4320,10L4680,20L5040,0L5400,0L5760,20L6120,90L6480,0L6840,90L7200,30L7560,50L7920,30L8280,70L8640,60L8640,100L8280,100L7920,100L7560,100L7200,100L6840,100L6480,100L6120,100L5760,100L5400,100L5040,100L4680,100L4320,100L3960,100L3600,100L3240,100L2880,100L2520,100L2160,100L1800,100L1440,100L1080,100L720,100L360,100L0,100Z"></path></svg> */}
        {/* -------- 
        <svg id="wave" class="prueba"viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path class="prueba2" fill="url(#sw-gradient-0)" d="M0,70L360,0L720,40L1080,30L1440,10L1800,10L2160,80L2520,60L2880,70L3240,20L3600,10L3960,40L4320,10L4680,20L5040,0L5400,0L5760,20L6120,90L6480,0L6840,90L7200,30L7560,50L7920,30L8280,70L8640,60L8640,100L8280,100L7920,100L7560,100L7200,100L6840,100L6480,100L6120,100L5760,100L5400,100L5040,100L4680,100L4320,100L3960,100L3600,100L3240,100L2880,100L2520,100L2160,100L1800,100L1440,100L1080,100L720,100L360,100L0,100Z"></path></svg>
        {/* ----wave end---- */}

        <div class="text-center AM-component p-5" id="aboutme">
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