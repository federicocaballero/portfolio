import React from "react"

const Banner = () => {
    return(
        <>
        <div class="text-center banner-component p-4">
        <div class="row">
            <div class="col-md-8 p-0  ">
                <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center ">
                    <p>Hello world!</p>
                    <p>My name is Federico. <br/>
                    I'm junior frontend developer</p>
                    <div class=" d-flex justify-content-evenly gap-4">
                        <button type="button" class="btn btn-outline text-uppercase">contact me</button>
                        <button type="button" class="btn btn-outline text-uppercase">projects</button>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-4 p-3">
                <img src="http://localhost:3000/coding.png" class="img-fluid" alt="img2"/>
            </div>
        </div>
        </div>
        </>
        )

}

export default Banner;
