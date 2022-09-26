import React from 'react'
import {
    TitleSectionContainer,
    TitleSectionDescription,
    TitleSectionTopLine,
    TitleSectionHeading,
    TitleSectionSubtitle
} from "./TitleSectionStyle"

const TitleSectionStyle = ({topline, heading, subtitle}) => {
    return (
        <TitleSectionContainer>
            <TitleSectionDescription>
                <TitleSectionTopLine>{topline}</TitleSectionTopLine>
                <TitleSectionHeading>{heading}</TitleSectionHeading>
                <TitleSectionSubtitle>{subtitle}</TitleSectionSubtitle>
            </TitleSectionDescription>
        </TitleSectionContainer>
    )
}

export default TitleSectionStyle;