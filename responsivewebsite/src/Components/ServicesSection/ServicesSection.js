import React from 'react';
import {
    ServicesSectionContainer,
    ServicesSectionCard,
    ServicesSectionWrap,
    ServicesSection,
    ServicesSectionPrice,
    ServicesSectionDesc,
    ServicesSectionListWrap,
    ServicesSectionList,
    ServicesSectionListItem,
    ServicesSectionButtonWrap,
    ServicesSectionButton,
    ServicesSectionPriceWrap, 
    ServicesSectionMonth,
    ServicesSectionIcon
} from './ServicesSectionStyle';

import checkicon from '../../Images/checkicon.svg'


const ServicesSectionStyle = () => {
    return (
        <ServicesSectionContainer>
            <ServicesSectionCard>
                <ServicesSectionWrap>
                    <ServicesSection>Basic</ServicesSection>
                    <ServicesSectionPriceWrap>
                        <ServicesSectionPrice>$200</ServicesSectionPrice>
                        <ServicesSectionMonth>/ month</ServicesSectionMonth>
                    </ServicesSectionPriceWrap>
                    <ServicesSectionDesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</ServicesSectionDesc>
                    <ServicesSectionListWrap>
                        <ServicesSectionList>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                        </ServicesSectionList>
                    </ServicesSectionListWrap>
                    <ServicesSectionButtonWrap>
                        <ServicesSectionButton>Learn more</ServicesSectionButton>
                    </ServicesSectionButtonWrap>
                </ServicesSectionWrap>
            </ServicesSectionCard>
            <ServicesSectionCard>
            <ServicesSectionWrap>
                    <ServicesSection>Plus</ServicesSection>
                    <ServicesSectionPriceWrap>
                        <ServicesSectionPrice>$250</ServicesSectionPrice>
                        <ServicesSectionMonth>/ month</ServicesSectionMonth>
                    </ServicesSectionPriceWrap>
                    <ServicesSectionDesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</ServicesSectionDesc>
                    <ServicesSectionListWrap>
                        <ServicesSectionList>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                        </ServicesSectionList>
                    </ServicesSectionListWrap>
                    <ServicesSectionButtonWrap>
                        <ServicesSectionButton>Learn more</ServicesSectionButton>
                    </ServicesSectionButtonWrap>
                </ServicesSectionWrap>
            </ServicesSectionCard>
            <ServicesSectionCard>
            <ServicesSectionWrap>
                    <ServicesSection>Pro</ServicesSection>
                    <ServicesSectionPriceWrap>
                        <ServicesSectionPrice>$400</ServicesSectionPrice>
                        <ServicesSectionMonth>/ month</ServicesSectionMonth>
                    </ServicesSectionPriceWrap>
                    <ServicesSectionDesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</ServicesSectionDesc>
                    <ServicesSectionListWrap>
                        <ServicesSectionList>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                            <ServicesSectionListItem><ServicesSectionIcon src={checkicon}/>Lorem ipsum, dolor sit</ServicesSectionListItem>
                        </ServicesSectionList>
                    </ServicesSectionListWrap>
                    <ServicesSectionButtonWrap>
                        <ServicesSectionButton>Learn more</ServicesSectionButton>
                    </ServicesSectionButtonWrap>
                </ServicesSectionWrap>
            </ServicesSectionCard>
        </ServicesSectionContainer>
    )
}

export default ServicesSectionStyle;