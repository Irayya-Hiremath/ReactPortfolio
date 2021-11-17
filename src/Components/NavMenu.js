import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);

`;



function NavMenu() {
    return (
        <NavStyles>
            <div
                 className="mobile-menu-icon" >
                    <MdMenu />
            </div>
            <ul>
            <div
                 className="closeNavIcon">
                    <MdClose />
            </div>
                <li>
                <NavLink to='/'>Home</NavLink>
                </li>

                <li>
                <NavLink to='/about'>About</NavLink>
                </li>

                <li>
                <NavLink to='/projects'>Projects</NavLink>
                </li>

                <li>
                <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </NavStyles>
       
    );
}
export default NavMenu;
