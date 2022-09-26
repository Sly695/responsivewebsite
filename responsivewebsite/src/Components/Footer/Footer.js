import React from 'react';
import {
  FooterContainer,
  FooterMediaWrap,
  FooterCopyrightWrap,
  FooterContainerWrap,
  FooterLogoMedia,
  FooterCopyright
} from './FooterStyle';
import facebooklogo from '../../Images/facebooklogo.svg';
import twitterlogo from '../../Images/twitterlogo.svg';
import instagramlogo from '../../Images/instagramlogo.svg';
import pinterestlogo from '../../Images/pinterestlogo.svg';
import tiktoklogo from '../../Images/tiktoklogo.svg';
import whatsapp from '../../Images/whatsapp.svg';
import youtube from '../../Images/youtube.svg';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerWrap>
        <FooterMediaWrap>
          <FooterLogoMedia src={facebooklogo}/>
          <FooterLogoMedia src={twitterlogo}/>
          <FooterLogoMedia src={instagramlogo}/>
          <FooterLogoMedia src={pinterestlogo}/>
          <FooterLogoMedia src={tiktoklogo}/>
          <FooterLogoMedia src={whatsapp}/>
          <FooterLogoMedia src={youtube}/>
        </FooterMediaWrap>
        <FooterCopyrightWrap>
          <FooterCopyright>© Start, 2022. All rights reserved.</FooterCopyright>
        </FooterCopyrightWrap>
      </FooterContainerWrap>
    </FooterContainer>
  )
}

export default Footer;


