import styled from 'styled-components';

export const ServicesSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 5% 5% 5%;
    flex-wrap: wrap;
`;

export const ServicesSectionCard = styled.div`
    width: 339px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
    padding: 46px 30px 46px 30px;
    box-sizing: border-box;
    margin: auto;

    @media screen and (max-width: 1200px){
        margin-bottom: 30px;
    }
`;

export const ServicesSectionWrap = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const ServicesSection = styled.p`
    text-align: center;
`;

export const ServicesSectionPriceWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const ServicesSectionPrice = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    margin: 0;
`;

export const ServicesSectionMonth = styled.p`
    text-align: center;
    color: #21252980;
    margin-left: 10px;
`;

export const ServicesSectionDesc = styled.p`
    text-align: center;
    color: #21252980;
`;

export const ServicesSectionListWrap = styled.div``;

export const ServicesSectionList = styled.ul`
    list-style-type: none;
    padding: 5%;
    box-sizing: border-box;
    width: 100%;
`;

export const ServicesSectionListItem = styled.li`
    text-align: center;
    line-height: 125%;
    padding: 0px;
    vertical-align: baseline;
`;

export const ServicesSectionIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

export const ServicesSectionButtonWrap = styled.div`
    width: 100%;
    display: flex;
`;

export const ServicesSectionButton = styled.button`
    margin: auto;
    width: 170px;
    height: 48px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    border-radius: 5px;
`;

