import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
    background-color: ${({colorBg}) => (colorBg ? '#74C69D' : "#FFF")};
    width: 100%;
    display: flex;
    height: 586px;
    position: relative;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;

    @media screen and (max-width: 768px){
        height: 100vh;
        justify-content: center;
    }
`;

export const InfoSectionColumn1 = styled.div`
    width: 45%;
    height: 80%;
    margin-top: 50px;


    @media screen and (max-width: 768px){
        margin-top: 0;
        width: 100%;
        height: 55%;
    }
`;

export const InfoSectionColumn2 = styled.div`
    width: 50%;
    height: 80%;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 45%;
    }
`;

export const InfoSectionImg = styled.img`
    object-fit: fill;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1200px){
        width: 100%;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const InfoSectionWrap = styled.div`
    display: flex;
    flex-direction: ${({imgStart}) => (imgStart ? 'row' : "row-reverse")};
    width: 100%;
    margin-top: 10%;

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
    }
`;

export const InfoSectionTopLine = styled.h1`
    text-align: left;
    color: ${({lightText}) => (lightText ? '#000' : "#FFF")};
    font-size: 20px;

`;

export const InfoSectionHeading = styled.h2`
    text-align: left;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#FFF' : "#000")};
    font-size: 36px;
    font-family: 'Work Sans';

`;

export const InfoSectionSubtitle = styled.p`
    text-align: left;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#FFF' : "#000")};
`;

export const InfoSectionTextWrap = styled.div`
    width: 75%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const InfoSectionButton = styled.button`
    width: 170px;
    height: 48px;
    outline: none;
    border: none;
    background-color: ${({lightTextDesc}) => (lightTextDesc ? '#000' : "#FFF")};
    color: ${({lightTextDesc}) => (lightTextDesc ? '#FFF' : "#000")};
    border-radius: 5px;
    position: absolute;
    left: 10%;

    @media screen and (min-width: 768px){
        left: ${({imgStart}) => (imgStart ? '10%' : "54%")};
    }
`;