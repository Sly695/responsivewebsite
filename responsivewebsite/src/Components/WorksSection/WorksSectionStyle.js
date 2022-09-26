import styled from 'styled-components';

export const WorksSectionContainer = styled.div`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
`;

export const WorksSectionCardWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
`;

export const WorkSectionCard = styled.img`
    width: 500px;
    height: 350px;
    object-fit: fill;
    margin: auto;
    box-sizing: border-box;


    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
        margin-bottom: 40px;
    }
`;

export const WorksSectionButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
`;

export const WorksSectionButton = styled.button`
    margin: auto;
    width: 170px;
    height: 48px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    border-radius: 5px;
`;