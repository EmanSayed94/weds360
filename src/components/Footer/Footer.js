import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  FooterContainer,
  FooterIcons,
  FooterLogo,
  FooterTerms,
} from '../../elements/footer'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <h2>Weds360</h2>
        <FooterIcons>
          <FaFacebookF />
          <FaInstagram />
        </FooterIcons>
      </FooterLogo>
      <div>
        © Copyright <Link>Plus360</Link>. All Rights Reserved
      </div>
      <FooterTerms>Terms & Conditions Privacy Policy</FooterTerms>
    </FooterContainer>
  )
}

export default Footer
