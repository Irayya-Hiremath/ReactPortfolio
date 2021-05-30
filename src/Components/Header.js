import React from "react"
import Navbar from './Navbar/Navbar'

function Header(){
    return(
        <div className='main'>
            {/* <Navbar/> */}
            
                <h1 className="hello">Hello,</h1>
                <h1 className="am">I am</h1>

                
                <about className="about">
                    <h1>
                        IR<span>AY</span>YA
                    </h1>
                </about>
                <detail className="detail">
                <p >Irayya Hiremath, a Mechanical Engineering graduate from Hulkoti, Gadag. Started as a Design Engineer at BLH H-Tech PVT LTD, Hubli in an IOT team for SPOUT project. A Prototype development of an Alcohol inventory system developed using IOT technology, I was responsible for parts designing of Spout using Catia V5.
                After completing the SPOUT prototype,<br/> Continued in the same organization as a customer facing Project Coordinator/Technical consultant for web and mobile Applications Under IT Dept. In that role I was responsible for gathering Customer requirements and signoff, Designing the wireframes and application flows.
                Collaborating with Sales, development and testing team to complete the application implementation. Customer Demo and Presentation.
                <br/>Currently,I am a Web developer intern at Sathvik Softech, Hubli. My responsibility include designing and developing UI for the websites and integrating it with back-end system.</p>

                </detail>

                 
                
            
        </div>
    
    )
}
export default Header