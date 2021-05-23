import React from "react"

function Navbar(){
    return(
        <nav>
             <a href="#" className="logo">
                 UI Expert
             </a>
             <input className='menu-btn' type='checkbox'/>
             <label className="menu-icon" for="menu-btn">
                 <span className='nav-icon'></span>
             </label>

             <ul className="menu">
                 <li><a href="#">About</a></li>
                 <li><a href="#">Experiance</a></li>
                 <li><a href="#">Skills</a></li>
                 <li><a href="#">Education</a></li>
                 <li><a href="#">Contact</a></li>
             </ul>
             <a href="#" className="Hey">Hey</a>
        </nav>
        
    )
}
export default Navbar;