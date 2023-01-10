import React from "react"

const Contact = () => {
    return(
        <>
            <div class="prueba" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba3"></path></svg></div>
        <div class="pruebaa" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="prueba22"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="prueba33"></path></svg></div>
            <div class="contact-component ps-5 pt-0 pe-5 pb-5 m-0" id="contact">    
            <div class="row">
                <div class="col text-center">
                    <p class="text-uppercase title">Contact me</p>
                    <p class="contact-text">¿Te interesa lo que hago?</p>
                    <p class="contact-text">Trabajemos juntos!</p>
                </div>
                <div class="col d-flex flex-column justify-content-start">
                    <p class="text-uppercase title text-center">mis redes</p>
                    <div className="row d-flex flex-column">
                        <div className="col d-flex justify-content-evenly">
                            <a href="#" class="link-contact">
                                <i class="bi bi-linkedin"></i>
                            </a>    
                            
                            <a href="mailto:fedecaballero1234@gmail.com" class="link-contact">
                                <i class="bi bi-envelope-at-fill"></i>
                            </a>

                            <a href="#" class="link-contact">
                                <i class="bi bi-github"></i>
                            </a>
                            <a href="#" class="link-contact">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            
        </>
    )
}

export default Contact;