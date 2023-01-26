import React from "react"


const Contact = () => {  
    return(
        <>
            <div class="wave-top1" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="wave-top2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="wave-top3"></path></svg></div>
        <div class="wave-bottom1" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" class="wave-bottom2"><path d="M-0.00,49.98 C150.00,149.99 271.49,-49.98 500.00,49.98 L500.00,-0.00 L-0.00,-0.00 Z" class="wave-bottom3"></path></svg></div>
            <div class="contact-component ps-5 pt-0 pe-5 pb-5 m-0" id="contact">    
            <div class="row">
                <div class="col text-center">
                    <p class="text-uppercase title">Contactame</p>
                    <p class="contact-text">¿Te interesa lo que hago?</p>
                    <p class="contact-text">Trabajemos juntos!</p>                    
                </div>
                <div class="col d-flex flex-column justify-content-start">
                    <p class="text-uppercase title text-center">mis redes</p>            
                    <div className="row d-flex flex-column">
                        <div className="col d-flex justify-content-evenly">
                            <a target="blank" href="https://www.linkedin.com/in/federico-caballero-b81732224/" class="link-contact">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a target="blank" href="mailto:fedecaballero1234@gmail.com" class="link-contact">
                                <i class="bi bi-envelope-at-fill"></i>
                            </a>        
                            <a target="blank" href="https://github.com/federicocaballero" class="link-contact">
                                <i class="bi bi-github"></i>
                            </a>
                            <a target="blank" href="https://www.instagram.com/fedecaballero11/" class="link-contact">
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