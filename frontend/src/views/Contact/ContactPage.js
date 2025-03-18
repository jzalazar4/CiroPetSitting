import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import {
    ContactForm,
    HeroSection,
    HeroText,
    MainSection,
    MapSection,
    FormContainer,
    ContactDetails,
    ContactContainer
} from '../../components/InfoSection/Contact/Contact.element';

const ContactPage = () => {
  return (
    <ContactContainer>
      {/* Portada */}
      <HeroSection>
        <HeroText>Contacto</HeroText>
      </HeroSection>

      {/* Sección principal */}
      <MainSection>
        <FormContainer>
          <h2>Envíanos un mensaje</h2>
          <ContactForm>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu email" required />
            <textarea placeholder="Tu mensaje" rows="6" required />
            <button type="submit">Enviar</button>
          </ContactForm>
        </FormContainer>

        <ContactDetails>
          
            <div>
                <FaEnvelope /> <span>contacto@mimarca.com</span>
            </div>
            <div>
                <FaPhone /> <span>+54 9 11 1234 5678</span>
            </div>
            <div>
                <FaWhatsapp /> <a href="https://wa.me/5491112345678">Escribínos por WhatsApp</a>
            </div>
            <div>
                <h4>Nuestras redes sociales</h4>
                 <a href=""> <FaFacebook /> </a>
                 <a href=""> <FaInstagram /> </a>
            </div>
            </ContactDetails>

      </MainSection>

      {/* Mapa */}
      <MapSection>
        <h2>Encuéntranos</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194296096226!2d-122.08424968468108!3d37.42199997982502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e49930a4d5%3A0xf2b4c36875f7a2b3!2sGoogleplex!5e0!3m2!1sen!2s!4v1677591986954!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </MapSection>
    </ContactContainer>
  );
};

export default ContactPage;
