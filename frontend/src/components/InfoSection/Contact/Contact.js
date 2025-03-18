import React from "react";
import {
  ContactSection,
  ContactImage,
  ContactFormWrapper,
} from "./Contact.element";

const Contact = () => {
    const imageContact = [
        {
            id: 1,
            image: require('/home/julieta/Escritorio/Ciro-PetSitting/frontend/src/images/Contact/contactphoto.png'),
        }
    ];
  return (
    <ContactSection>
     <ContactImage
        src={imageContact[0].image}
        alt="Imagen de contacto"
      />


      <ContactFormWrapper  data-aos="fade-left">
 
        <h2>Contáctanos</h2>
        <form>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Tu email" />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribe tu mensaje aquí"
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </ContactFormWrapper>
    </ContactSection>
  );
};

export default Contact;
