import styled from 'styled-components';
import { Link } from "react-router-dom";


export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "70px")};
    background-color: black;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 70px;
    }

`;

export const LeftContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;


`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
        display: none;
    }

`;

export const NavbarLinkContainer = styled.div `
    display: flex;
    width: 100%;

`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin: 50px;

    @media (max-width: 700px) {
        display: none;
    }

`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    margin: 10px;

`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;



