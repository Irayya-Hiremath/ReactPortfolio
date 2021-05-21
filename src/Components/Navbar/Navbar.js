import React from "react"

function Navbar(){
    return(
        <nav>
             <a href="#" className="logo">
                 UI Expert
             </a>
             <ul className="menu">
                 <li><a href="#">About</a></li>
                 <li><a href="#">Experiance</a></li>
                 <li><a href="#">Skills</a></li>
                 <li><a href="#">Education</a></li>
                 <li><a href="#">Contact</a></li>

             </ul>
        </nav>
    )
}
export default Navbar;