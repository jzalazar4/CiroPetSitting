import styled from "styled-components";
import ContactPagePhoto from "../../../images/ContactPage/homepagepets.jpg";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; /* Fondo claro */
  padding: 50px 20px;
  gap: 20px; /* Espaciado entre las columnas */
  flex-wrap: wrap; /* Adaptación para pantallas pequeñas */
`;

export const ContactImage = styled.img`
  width: 70%; /* Ocupa la mitad del espacio */
  max-width: 500px; /* Tamaño máximo para pantallas grandes */

  object-fit: contain;
  /*box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);*/

  @media (max-width: 768px) {
    width: 100%; /* Imagen a ancho completo en pantallas pequeñas */
  }
`;

export const ContactFormWrapper = styled.div`
  width: 50%; /* Ocupa la mitad del espacio */
  max-width: 600px; /* Tamaño máximo */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%; /* Formulario a ancho completo en pantallas pequeñas */
  }

  h2 {
    font-size: 1.8rem;
    color: #333333;
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #555555;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-sizing: border-box;
      outline: none;

      &:focus {
        border-color: #0078ff;
        box-shadow: 0px 0px 5px rgba(0, 120, 255, 0.3);
      }
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
     /* align-items: center;
      width: 200px;*/
      background-color: #0078ff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056cc;
      }
    }
  }
`;
/* CONTACT PAGE*/
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;
export const HeroSection = styled.div`
  width: 100%;
  height: 300px;
  background: url('${ContactPagePhoto}') center/cover no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(155, 149, 149, 0.5); /* Capa negra semitransparente */
    z-index: 1;
  }

  h1 {
    position: relative;
    z-index: 2; /* Asegura que el texto esté por encima de la superposición */
  }
  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const HeroText = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FormContainer = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    font-size: 20px;
    color: #101522;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #0467fb;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #024bcb;
    }
  }
`;
export const ContactDetails = styled.div`
  flex: 0.5;
  padding: 2rem;
  background: linear-gradient(135deg,rgba(7, 23, 48, 0.69),rgba(27, 68, 138, 0.52));
  border-radius: 12px;
  color: white;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 18px;

    a {
      color: #c2fbd7;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
        color: #e3ffe7;
      }
    }

    svg {
      color: #c2fbd7;
      font-size: 24px;
    }
  }
`;


export const MapSection = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 20px;
    color: #101522;
  }

  iframe {
    border-radius: 8px;
    border: 1px solid #ccc;
  }
    @media (max-width: 768px) {
  iframe {
    height: 200px;
  }
}
`;