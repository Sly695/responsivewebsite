import React from 'react';
import {
    WorksSectionContainer,
    WorksSectionCardWrap,
    WorkSectionCard,
    WorksSectionButtonWrap,
    WorksSectionButton,
} from './WorksSectionStyle';

import work1 from '../../Images/work1.svg';
import work2 from '../../Images/work2.svg';
import work3 from '../../Images/work3.svg';
import work4 from '../../Images/work4.svg';
import work5 from '../../Images/work5.svg';
import work6 from '../../Images/work6.svg';
import work7 from '../../Images/work7.svg';
import work8 from '../../Images/work8.svg';

import Footer from '../Footer/Footer'

const WorksSection = () => {
    return (
        <>
            <WorksSectionContainer>
                <WorksSectionCardWrap>
                    <WorkSectionCard src={work1} />
                    <WorkSectionCard src={work2} />
                    <WorkSectionCard src={work3} />
                    <WorkSectionCard src={work4} />
                    <WorkSectionCard src={work5} />
                    <WorkSectionCard src={work6} />
                    <WorkSectionCard src={work7} />
                    <WorkSectionCard src={work8} />
                </WorksSectionCardWrap>
                <WorksSectionButtonWrap>
                    <WorksSectionButton>Learn more</WorksSectionButton>
                </WorksSectionButtonWrap>
            </WorksSectionContainer>
            <Footer />
        </>

    )
}

export default WorksSection;