import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TitleSection from '../Components/TitleSection/TitleSection'
import { titleFourJob } from '../Components/TitleSection/TitleSectionData';
import ServicesSection from '../Components/ServicesSection/ServicesSection'

const ServicePage = () => {
    return (
        <>
            <Navbar />
            <TitleSection {...titleFourJob}/>
            <ServicesSection/>
            <Footer />
        </>
    )
}

export default ServicePage;