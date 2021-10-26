import React from "react";

function Navbar() {
    return (
        // <div className='navbar'>
        //      <ul>
        //         <a href='/'> <li>About</li></a>
        //         <a href='Experiance'>  <li>Experiance</li></a>
        //         <a href='Education'>  <li>Education</li></a>
        //         <a href='Skills'>  <li>Skills</li></a>
        //         <a href='Projects'>  <li>Projects</li></a>
        //         <a href='Contact'>  <li>Contact</li></a>

        //     </ul>

        // </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar  </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="/" href="/">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="Experiance" href="#experiance">
                                Experiance
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">
                            Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#skills'>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#contact'>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#projects'>Projects</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
