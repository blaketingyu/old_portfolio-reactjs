import React, { useState } from 'react';
import { 
    NavbarContainer, 
    LeftContainer, 
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLink,
    OpenLinksButton,
    NavbarLinkContainer,
    NavbarLinkExtended,
} from './styles/Navbar.style';
import Home from './home/Home';
import About from './about/About';
import Mainpage from './Mainpage';




function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    
    return (
        <NavbarContainer extendNavbar = {extendNavbar}>
           <NavbarInnerContainer>
           <LeftContainer>
               <NavbarLinkContainer>
                   <NavbarLink to="/" > Home </NavbarLink>
                   <NavbarLink to="/about"> About</NavbarLink>
                   <NavbarLink to="/contact"> Education </NavbarLink>
                   <NavbarLink to="/work"> Work Experiences</NavbarLink>
                   <NavbarLink to="/contact"> Contact </NavbarLink>
                   <OpenLinksButton 
                   onClick={() => {
                       setExtendNavbar((curr) => !curr);
                   }}> 
                   {extendNavbar ?<> &#10005;</> : <>&#8801;</> } 
                   </OpenLinksButton>
                </NavbarLinkContainer>
                </LeftContainer>
                
            </NavbarInnerContainer>
            { extendNavbar && (
            <NavbarExtendedContainer>
            <NavbarLink to="/"> Home </NavbarLink>
                   <NavbarLinkExtended to="./about/About"> About </NavbarLinkExtended>
                   <NavbarLinkExtended to="/work"> Education</NavbarLinkExtended>
                   <NavbarLinkExtended to="/work"> Work Experiences</NavbarLinkExtended>
                   <NavbarLinkExtended to="/contact"> Contact </NavbarLinkExtended>
            </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar
