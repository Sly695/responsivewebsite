import React, { useState } from 'react'
import {
    NavbarContainer,
    NavBarLogo,
    NavMenu,
    NavItem,
    NavBarLogoWrap,
    NavBarLogoTitle,
    NavMenuIcon,
    NavbarMenuIconWrap,
    NavbarMenuSideBar,
    NavbarMenuSideBarList,
    NavbarMenuSideBarItem,
    NavbarMenuIconCross
} from './NavbarStyle';
import logo from '../../Images/Group 1.svg';
import navbaricon from '../../Images/navbaricon.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const [displayNavbar, setDisplayNavbar] = useState(true)
    var disp = "";

    if (!displayNavbar) {
        disp = "block";
    } else {
        disp = "none";
    }


    return (
        <NavbarContainer>
            <NavBarLogoWrap>
                <NavBarLogo src={logo} />
                <NavBarLogoTitle>Start</NavBarLogoTitle>
            </NavBarLogoWrap>
            <NavMenu>
                <NavItem to="/">
                    <Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/Portfolio">Portfolio</Link>
                </NavItem>
                <NavItem>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/Services">Services</Link>
                </NavItem>
                <NavItem>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/Contact">Contact</Link>
                </NavItem>
            </NavMenu>
            <NavbarMenuIconWrap>
                <NavMenuIcon src={navbaricon} onClick={() => setDisplayNavbar(!displayNavbar)} />
            </NavbarMenuIconWrap>
            <NavbarMenuSideBar style={{ display: disp }}>
                <NavbarMenuSideBarList>
                    <NavbarMenuSideBarItem onClick={() => setDisplayNavbar(!displayNavbar)}>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link>
                    </NavbarMenuSideBarItem>
                    <NavbarMenuSideBarItem>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/Portfolio">Portfolio</Link>
                    </NavbarMenuSideBarItem>
                    <NavbarMenuSideBarItem>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/Services">Services</Link>
                    </NavbarMenuSideBarItem>
                    <NavbarMenuSideBarItem>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/Contact">Contact</Link>
                    </NavbarMenuSideBarItem>
                </NavbarMenuSideBarList>
                <NavbarMenuIconCross>
                    <FontAwesomeIcon onClick={() => setDisplayNavbar(!displayNavbar)} style={{ width: "100%", height: "100%" }} icon={faXmark} />
                </NavbarMenuIconCross>
            </NavbarMenuSideBar>
        </NavbarContainer>
    )
}

export default Navbar