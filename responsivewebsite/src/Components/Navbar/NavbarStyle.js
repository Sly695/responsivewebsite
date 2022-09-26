import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 125px;
    background-color: #74C69D;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 10%;
    padding-right: 10%;
`;

export const NavBarLogoWrap = styled.div`
    display: flex;
    
`;

export const NavBarLogoTitle = styled.h1`
    color: #FFF;
    width: 100px;
    padding: 0;
    font-size: 40px;
    margin: auto;
    font-style: normal;
`;

export const NavBarLogo = styled.img`
    width: 70px;
    height: 100%;
    margin: auto;
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 30%;
    margin: 0;
    padding: 0;


    @media screen and (max-width: 1200px){
        width: 60%;
    };

    @media screen and (max-width: 768px){
        display: none;
    }
`;  

export const NavItem = styled.li`
    color: #FFF;
    margin: auto;
`;

export const NavbarMenuIconWrap = styled.div`
    display: none;
    height: 35px;
    width: 35px;
    margin-top: 48px;

    @media screen and (max-width: 768px){
        display: block;
    }
`;

export const NavMenuIcon = styled.img`
    display: none;
    width: 100%;
    height: 100%;
    margin: auto;    

    @media screen and (max-width: 768px){
        display: block;
    }
`;

export const NavbarMenuSideBar = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #74C69D;
    z-index: 100;
    margin: auto;
    display: none;
`;

export const NavbarMenuSideBarList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 600px;
    margin-top: 30%;
    list-style-type: none;
    padding: 0;
`;

export const NavbarMenuSideBarItem = styled.li`
    color: #FFF;
    margin: auto;
    
`;

export const NavbarMenuIconCross = styled.div`
    position: absolute;
    top: 44px;
    right: 37px;
    z-index: 101;
    background-color: #74C69D;
    width: 40px;
    height: 40px;
    color: #FFF;
`;