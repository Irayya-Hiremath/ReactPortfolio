import React from 'react'

function Card(props){
    return(
        <div>
            <div className="exp-Tabs">

                <div className="tab1">
                        <div className="front"> 
                        {/* <h1>SATHVIK SOFTECH</h1>
                        <h2>Web Development Intern</h2> */}
                        <h1>{props.scompany}</h1>
                        <h2>{props.srole}</h2>                        
                        </div>
                        <div className="back"> 
                        {props.sexpe}
                        {/* <p>
                        <h3>Portfolio</h3>Design And developed My Portfolio by using HTML, Tailwind CSS&JavaScript Technology
                        <h3>Race Game</h3> Design And developed game by using HTML, CSS&JavaScript Technology
                        <h3>Number Guessing Game</h3> A random number will generate we have to guess the that the no. is odd or even. Design And developed game by using HTML, CSS& JavaScript Technology .
                        </p> */}
                        </div>


                    </div>
            </div>
                
        </div>
    )
}
export default Card;