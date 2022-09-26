import styled from 'styled-components';

export const TeamSectionContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    box-sizing: border-box;
    flex-wrap: wrap;
`;

export const TeamSectionCard = styled.div`
    border: 1px solid black;
    width: 270px;
    height: 270px;
    display: flex;
    margin: 10px auto 10px auto;
    flex-direction: column;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TeamSectionAvatar = styled.img`
    width: 100%;
    height: 55%;
    margin: auto;

`;

export const TeamSectionDescriptionWrap = styled.div`
    width: 100%;
    height: 35%;
    padding-left: 40px;
`;

export const TeamSectionName = styled.p`
    text-align: left;
    font-weight: bold;
    font-family: 'Work Sans';
`;

export const TeamSectionJob = styled.p`
    text-align: left;

`;

export const TeamSectionButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
`;

export const TeamSectionButton = styled.button`
    margin: 5%;
    width: 170px;
    height: 48px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    border-radius: 5px;
`;