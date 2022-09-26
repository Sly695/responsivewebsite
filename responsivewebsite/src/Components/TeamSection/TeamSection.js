import React from 'react'
import {
    TeamSectionContainer,
    TeamSectionCard,
    TeamSectionAvatar,
    TeamSectionDescriptionWrap,
    TeamSectionName,
    TeamSectionJob,
    TeamSectionButton,
    TeamSectionButtonWrap
} from './TeamSectionStyle';

import avatar1 from '../../Images/avatar1.svg';
import avatar2 from '../../Images/avatar2.svg'
import avatar3 from '../../Images/avatar3.svg'
import avatar4 from '../../Images/avatar4.svg'

const TeamSection = () => {
    return (
        <TeamSectionContainer>
            <TeamSectionCard>
                <TeamSectionAvatar src={avatar1} />
                <TeamSectionDescriptionWrap>
                    <TeamSectionName>Peg Legge</TeamSectionName>
                    <TeamSectionJob>CEO</TeamSectionJob>
                </TeamSectionDescriptionWrap>
            </TeamSectionCard>
            <TeamSectionCard>
                <TeamSectionAvatar src={avatar2} />
                <TeamSectionDescriptionWrap>
                    <TeamSectionName>Richard Guerra</TeamSectionName>
                    <TeamSectionJob>CTO</TeamSectionJob>
                </TeamSectionDescriptionWrap>
            </TeamSectionCard>
            <TeamSectionCard>
                <TeamSectionAvatar src={avatar3} />
                <TeamSectionDescriptionWrap>
                    <TeamSectionName>Alexandra Stolz</TeamSectionName>
                    <TeamSectionJob>DESIGNER</TeamSectionJob>
                </TeamSectionDescriptionWrap>
            </TeamSectionCard>
            <TeamSectionCard>
                <TeamSectionAvatar src={avatar4} />
                <TeamSectionDescriptionWrap>
                    <TeamSectionName>Janet Bray</TeamSectionName>
                    <TeamSectionJob>DEVELOPER</TeamSectionJob>
                </TeamSectionDescriptionWrap>
            </TeamSectionCard>
            <TeamSectionButtonWrap>
                <TeamSectionButton>View Team</TeamSectionButton>
            </TeamSectionButtonWrap>
        </TeamSectionContainer>
    )
}

export default TeamSection