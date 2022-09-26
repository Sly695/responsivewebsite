import React from 'react'
import ContactSection from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import TitleSection from '../Components/TitleSection/TitleSection'
import { titleFiveJob } from '../Components/TitleSection/TitleSectionData'

const ContactPage = () => {
  return (
    <>
        <Navbar/>
        <TitleSection {...titleFiveJob} />
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default ContactPage