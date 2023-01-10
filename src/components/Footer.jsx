import React from "react"

const Footer = () => {
    return( 
        <>
        <div class="d-flex flex-column text-center footer">
            <div className="row">
                <div className="col-md-6">
                    <p>Developed by Federico Caballero &#10084; </p>
                </div>
                <div className="col-md-6">
                <p>Design inspired by <a href="https://www.behance.net/gallery/88395219/Web-developer-portfolio">this behance project</a></p>
                </div>
            </div>          
            <p> &copy; 2023 All rights reserved</p>
        </div>
        
        </>
    )
}

export default Footer;
