import styled from 'styled-components';

export const ContactSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10% 10% 10%;
    box-sizing: border-box;

`;

export const ContactSectionWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;


    @media screen and (max-width: 1200px){
        flex-direction: column-reverse;
    }
`;

export const ContactSectionFormWrap = styled.div`
    width: 49%;
    height: 384px;

    @media screen and (max-width: 1200px){
        margin: auto;
        width: 100%;
    }
`;



export const ContactSectionFormName = styled.p`
    margin: 0px 0 16px;
`;

export const ContactSectionFormInputName = styled.input`
    width: 99%;
    margin: auto;
    height: 38px;
    outline: none;
    border: none;
    background-color: #EEEEEE;
    border-radius: 5px;
    color: #000;
`;

export const ContactSectionFormEmail = styled.p`
    margin: 21px 0 16px;
`;

export const ContactSectionFormInputEmail = styled.input`
    width: 99%;
    margin: auto;
    height: 38px;
    outline: none;
    border: none;
    background-color: #EEEEEE;
    border-radius: 5px;
    color: #000;
`;

export const ContactSectionFormMessage = styled.p`
    margin: 21px 0 16px;
`;

export const ContactSectionFormInputMessage = styled.input`
    width: 99%;
    margin: auto;
    height: 75px;
    outline: none;
    border: none;
    background-color: #EEEEEE;
    border-radius: 5px;
    color: #000;
    
`;

export const ContactSectionButtonWrap = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
`;

export const ContactSectionButton = styled.button`
    margin: 21px 0 0 0;
    width: 100%;
    height: 48px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    border-radius: 5px;
`;

export const ContactSectionMap = styled.img`
    width: 100%;
    height: 100%;
    
    @media screen and (max-width: 1200px){
        margin: auto;
    }
`;

export const ContactSectionMapWrap = styled.div`
    width: 49%;
    height: 384px;
    display: flex;
    justify-content: center;
    margin: auto;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;