import React from 'react';
import {
    PartnerSectionContainer,
    PartnerLogo,
    PartnerSectionLogo,
    PartnerSectionButton, 
    PartnerSectionButtonWrap
} from './PartnerSectionStyle'
import google from '../../Images/google.svg'
import microsoft from '../../Images/microsoft.svg'
import airbnb from '../../Images/airbnb.svg'
import facebook from '../../Images/facebook.svg'
import spotify from '../../Images/spotify.svg'


const PartnerSection = () => {
    return (
        <PartnerSectionContainer>
            <PartnerSectionLogo>
                <PartnerLogo src={google} />
                <PartnerLogo src={microsoft} />
                <PartnerLogo src={airbnb} />
                <PartnerLogo src={facebook} />
                <PartnerLogo src={spotify} />
            </PartnerSectionLogo>
            <PartnerSectionButtonWrap>
                <PartnerSectionButton>Learn More</PartnerSectionButton>
            </PartnerSectionButtonWrap>
        </PartnerSectionContainer>
    )
}

export default PartnerSection