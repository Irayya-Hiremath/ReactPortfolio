import React from "react"
import img from '../images/BGIMG1.png';
import Navbar from "./Navbar";


function About(){
    return(
        <div id='about' className="container-fluid h-full bg-dark text-white ">
            {/* <Navbar/> */}
            <div className="row mt-4 ">
            <div className='col-4 max-width: 100%;'>
                    <img src={img} className='float-start;img-fluid border' alt="" Style="width:100%; text:white"/>
                </div>
                <div className="col-8 border header">
                    <h1>Hello</h1>
                    <h2>I am</h2> 
                    <strong>IRAYYA</strong>
                </div>
            </div>
        </div>
        
    )
}
export default About

