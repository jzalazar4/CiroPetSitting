import React from "react";
import { Button } from '../../globalStyles'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import {
    FooterContainer,
    FooterSubText,
    FooterSubHeading,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements'

function Footer() {
    const date = new Date();

    return (
        <FooterContainer>
            <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Inicio</FooterLinkTitle>
            <FooterLink to='/'>Inicio</FooterLink>

          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contactános</FooterLinkTitle>
            <FooterLink to='/contacto'>Contacto</FooterLink>

          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>

          <FooterLinkItems>
            <FooterLinkTitle>Nuestras redes</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>

          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            CIRO - cuidado de mascotas
          </SocialLogo>
          <WebsiteRights>CIRO © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>

          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
        </FooterContainer>
    )
}
export default Footer;