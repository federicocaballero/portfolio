import React from "react"

const Skills = () => {
    return(
        <>
        
        <div class="ps-5 pt-0 pe-5 pb-5 m-0 skills-component">
        <h3 className="text-uppercase title">My Skills</h3>
        <div class="row">
            <div class="col-md">
            <ul class="list-group list-group-horizontal-xl ">
                <li class="list-group-item">- Adaptative and responsive layout </li>
                <li class="list-group-item">- HTML and CSS including grids</li>
                <li class="list-group-item">- Javascript</li>
            </ul>
            </div>  
            <div class="col-md">
                <ul class="list-group list-group-horizontal-xl">
                    <li class="list-group-item">- Bootstrap </li>
                    <li class="list-group-item">- Version control whit Git Hub</li>
                    <li class="list-group-item">- React</li>
                </ul>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Skills;
