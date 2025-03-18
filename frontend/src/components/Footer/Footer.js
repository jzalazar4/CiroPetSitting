import React from "react";
import { Button } from '../../globalStyles'

import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterColumn,
  FooterColumns,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
  FooterLinksWrapper,
  FooterLinksContainer,

} from './Footer.elements'

function Footer() {
    const date = new Date();

    return (
      <FooterContainer>
        {/* Menú en múltiples columnas */}
        <FooterColumns>
          <FooterColumn>
            <h3>Inicio</h3>
            <a href="/inicio">Página principal</a>
          </FooterColumn>

          <FooterColumn>
            <h3>Quiénes Somos</h3>
            <a href="/sobre-nosotras">Sobre nosotras</a>
            <br />
            <a href="/clientes">Nuestros clientes</a>
          </FooterColumn>

          <FooterColumn>
            <h3>Reserva</h3>
            <a href="/reserva">Reservar ahora</a>
          </FooterColumn>

          <FooterColumn>
            <a href="/contacto">
              <h3>Contacto</h3>
            </a>
            <br />
            <div>
              <FaEnvelope style={{ marginRight: "8px" }} />
              <a href="mailto:contacto@mimarca.com">contacto@mimarca.com</a>
            </div>
            <div>
              <FaPhone style={{ marginRight: "8px" }} />
              <a href="tel:+5491112345678">+54 9 11 1234 5678</a>
            </div>
          </FooterColumn>

          <FooterColumn>
            <h3>Síguenos en nuestras redes</h3>
            <SocialIcons>
              <SocialLogo href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </SocialLogo>
              <SocialLogo href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </SocialLogo>
            </SocialIcons>
            <p>Email: <a href="mailto:contacto@mimarca.com">contacto@mimarca.com</a></p>
            <p>Teléfono: <a href="tel:+5491112345678">+54 9 11 1234 5678</a></p>
            <p>Río Grande, Tierra del Fuego. Argentina</p>
  
          </FooterColumn>
        </FooterColumns>
        <SocialMediaWrap>
          <WebsiteRights>
            MiMarca © {new Date().getFullYear()} Todos los derechos reservados.
          </WebsiteRights>
        </SocialMediaWrap>
      </FooterContainer>


    
    )
}
export default Footer;