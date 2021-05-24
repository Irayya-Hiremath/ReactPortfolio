import React from "react"
import Navbar from './Navbar/Navbar'

function Header(){
    return(
        <div className='main'>
            <Navbar/>
            <div className='name'>
                <p className="heading">Looking For A Devloper</p>

                <h1>I'm <span>Irayya</span></h1>
                 
                <p className="details">Irayya Hiremath, a Mechanical Engineering graduate from Hulkoti, Gadag. Started as a Design Engineer at BLH H-Tech PVT LTD, Hubli in an IOT team for SPOUT project. A Prototype development of an Alcohol inventory system developed using IOT technology, I was responsible for parts designing of Spout using Catia V5.
                After completing the SPOUT prototype, Continued in the same organization as a customer facing Project Coordinator/Technical consultant for web and mobile Applications Under IT Dept. In that role I was responsible for gathering Customer requirements and signoff, Designing the wireframes and application flows. Collaborating with Sales, development and testing team to complete the application implementation. Customer Demo and Presentation.
                Currently, I am a Web developer intern at Sathvik Softech, Hubli. My responsibility include designing and developing UI for the websites and integrating it with back-end system.</p>
               
                <div className="header-btns">
                    <a href="#" className="btn-1">Hire ME</a>
                    <a href="#" className="btn-1">Download CV</a>



                </div>
            </div>
        </div>
    
    )
}
export default Header