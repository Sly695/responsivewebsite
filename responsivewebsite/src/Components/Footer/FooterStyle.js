import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    height: 125px;
    background-color: #74C69D;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 10%;
    padding-right: 10%;
`;

export const FooterContainerWrap = styled.div`
    width: 100%;
    height: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px){
        flex-direction: column;
    }
`;

export const FooterMediaWrap = styled.div`
    width: 20%;
    display: flex;

    @media screen and (max-width: 1200px){
        width: 80%;
        margin: auto;
    }
`;

export const FooterCopyrightWrap = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;

export const FooterLogoMedia = styled.img`
    margin: auto;
`;

export const FooterCopyright = styled.p`
    color: #FFF;
`;