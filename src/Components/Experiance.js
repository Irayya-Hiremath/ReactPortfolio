import React from 'react'
import Card from "./Card/Card"
import Data from "./Card/Data";

function Experiance(){
    return(
        <div className="exp" id="Exp">
            <div className="exp-Tabs">
                <Card
                scompany={Data[0].scompany} 
                srole={Data[0].srole}
                sexpe={Data[0].sexpe}/>

<Card
                scompany={Data[0].scompany} 
                srole={Data[0].srole}
                sexpe={Data[0].sexpe}/>
                {/* <div className="tab1">
                    <div className="front"> 
                    <h1>SATHVIK SOFTECH</h1>
                    <h2>Web Development Intern</h2>
                    <h1>{props.company}</h1>
                    <h2>{props.role}</h2>                        
                    </div>
                    <div className="back"> 
                    {props.expe}
                    <p>
                    <h3>Portfolio</h3>Design And developed My Portfolio by using HTML, Tailwind CSS&JavaScript Technology
                    <h3>Race Game</h3> Design And developed game by using HTML, CSS&JavaScript Technology
                    <h3>Number Guessing Game</h3> A random number will generate we have to guess the that the no. is odd or even. Design And developed game by using HTML, CSS& JavaScript Technology .
                    </p>
                    </div>


                </div> */}

            </div>
            
        </div>
    )
}
export default Experiance;