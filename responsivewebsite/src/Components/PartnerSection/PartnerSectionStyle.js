import styled from 'styled-components';

export const PartnerSectionContainer = styled.div`
    width: 80%;
    justify-content: center;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 25px;

    @media screen and (max-width: 768px){
        height: 100%;
    }
`;

export const PartnerSectionLogo = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 80%;
    }
`;

export const PartnerLogo = styled.img`
    object-fit: fill;
    margin: 30px auto;

    @media screen and (max-width: 768px){
        width: 70%;
        margin-bottom: 30px;
    }; 

`;

export const PartnerSectionButton = styled.button`
    margin-top: 5%;
    width: 170px;
    height: 48px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    border-radius: 5px;
    margin: auto;
`;

export const PartnerSectionButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`;