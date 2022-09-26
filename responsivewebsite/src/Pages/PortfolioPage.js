import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import TitleSection from '../Components/TitleSection/TitleSection';
import {titleThreeJob} from "../Components/TitleSection/TitleSectionData"
import WorksSection from '../Components/WorksSection/WorksSection';

const Portfolio = () => {
  return (
    <>
        <Navbar/>
        <TitleSection {...titleThreeJob} />
        <WorksSection/>
    </>
  )
}

export default Portfolio