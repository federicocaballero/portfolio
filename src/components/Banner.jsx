import React from "react"

const Banner = () => {
    return(
        <>
        <div class="text-center">
        <div class="row">
            <div class="col-md-8">
                <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center ">
                    <h6>Hello world!</h6>
                    <p>My name is Federico Caballero. <br/>
                    I'm junior frontend developer</p>
                    <button type="button" class="btn btn-outline-dark text-uppercase">contact me</button>
                </div>
            </div>
            <div class="col-md-4 bg-info">
            <img src="https://economis.com.ar/wp-content/uploads/2022/12/messi-copa.jpg" class="img-fluid" alt="img"/>
            </div>
        </div>
        </div>
        </>
        )

}

export default Banner;
