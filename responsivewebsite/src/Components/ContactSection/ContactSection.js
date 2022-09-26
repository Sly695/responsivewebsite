import React from 'react';
import {
  ContactSectionContainer,
  ContactSectionWrap,
  ContactSectionFormWrap,
  ContactSectionMapWrap,
  ContactSectionFormName,
  ContactSectionFormInputName,
  ContactSectionFormEmail,
  ContactSectionFormInputEmail,
  ContactSectionFormMessage,
  ContactSectionFormInputMessage,
  ContactSectionButtonWrap,
  ContactSectionButton,
  ContactSectionMap
} from '../ContactSection/ContactSectionStyle'

import map from '../../Images/map.svg'

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <ContactSectionWrap>
        <ContactSectionFormWrap>
          <ContactSectionFormName>
            Name
          </ContactSectionFormName>
          <ContactSectionFormInputName>

          </ContactSectionFormInputName>
          <ContactSectionFormEmail>
            Email
          </ContactSectionFormEmail>
          <ContactSectionFormInputEmail>

          </ContactSectionFormInputEmail>
          <ContactSectionFormMessage>
            Message
          </ContactSectionFormMessage>
          <ContactSectionFormInputMessage>
          </ContactSectionFormInputMessage>
          <ContactSectionButtonWrap>
              <ContactSectionButton>Learn more</ContactSectionButton>
            </ContactSectionButtonWrap>
        </ContactSectionFormWrap>
        <ContactSectionMapWrap>
          <ContactSectionMap src={map}/>
        </ContactSectionMapWrap>
      </ContactSectionWrap>
    </ContactSectionContainer>
  )
}

export default ContactSection