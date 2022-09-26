import React from 'react';
import InfoSectionContainer from '../Components/InfoSection/InfoSection'
import TitleSection from '../Components/TitleSection/TitleSection';
import {
  homeObjOne, 
  homeObjTwo, 
  homeObjFour
} from '../Components/InfoSection/InfoSectionData.js'
import { 
  titleOneJob,
  titleTwoJob
 } from '../Components/TitleSection/TitleSectionData';
import PartnerSection from '../Components/PartnerSection/PartnerSection';
import TeamSection from '../Components/TeamSection/TeamSection';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <InfoSectionContainer {...homeObjOne}  />
      <TitleSection {...titleOneJob}/>
      <PartnerSection/>
      <InfoSectionContainer {...homeObjTwo} />
      <InfoSectionContainer {...homeObjFour} />
      <TitleSection {...titleTwoJob}/>
      <TeamSection/>
      <Footer/>
    </>
  )
}

export default HomePage