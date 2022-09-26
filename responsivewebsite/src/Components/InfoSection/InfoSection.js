import React from 'react';
import {
  InfoSectionContainer,
  InfoSectionColumn1,
  InfoSectionColumn2,
  InfoSectionImg,
  InfoSectionWrap,
  InfoSectionTopLine,
  InfoSectionHeading,
  InfoSectionSubtitle,
  InfoSectionButton,
  InfoSectionTextWrap
} from './InfoSectionStyle';
import Navbar from '../../Components/Navbar/Navbar';
import welcomeimg from '../../Images/welcome.svg';


const InfoSection = ({id, colorBg, lightText, img, lightTextDesc, imgStart}) => {
  return (
    <InfoSectionContainer colorBg={colorBg} id={id}>
      <InfoSectionWrap imgStart={imgStart}>
        <InfoSectionColumn1>
          <InfoSectionTextWrap>
            <InfoSectionTopLine lightText={lightText}>
              Welcome
            </InfoSectionTopLine>
            <InfoSectionHeading lightTextDesc={lightTextDesc}>
              Lorem ipsum dolor sit amet consectetur
            </InfoSectionHeading>
            <InfoSectionSubtitle lightTextDesc={lightTextDesc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </InfoSectionSubtitle>
            <InfoSectionButton imgStart={imgStart} lightTextDesc={lightText}>
              Explore
            </InfoSectionButton>
          </InfoSectionTextWrap>
        </InfoSectionColumn1>
        <InfoSectionColumn2>
          <InfoSectionImg src={img} />
        </InfoSectionColumn2>
      </InfoSectionWrap>
    </InfoSectionContainer>
  )
}

export default InfoSection;