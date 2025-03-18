import styled from "styled-components";

export const TestimonialSection = styled.section`
  background-color: #f0f0f0;
  padding: 50px 20px;
  text-align: center;

  .slick-slider {
    max-width: 1000px;
    margin: 0 auto;
  }

  .slick-dots li button:before {
    color: #7d7d7d; /* Color de los indicadores */
  }
`;

export const TestimonialCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Asegura que el contenido no se desborde */
  padding: 0; /* Quitamos el padding para usar todo el espacio */
  margin: 15px; /* Espaciado entre tarjetas */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px; /* Tamaño fijo para tarjetas */
  max-width: 90%; /* Limitar ancho en pantallas pequeñas */
  height: 350px; /* Altura fija para un diseño uniforme */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const TestimonialImage = styled.img`
  width: 100%; /* La imagen cubre todo el ancho */
  height: 50%; /* Cubre la mitad superior de la tarjeta */
  border-radius: 20px 20px 0 0; /* Bordes redondeados solo en las esquinas superiores */
  object-fit: cover; /* Ajusta la imagen sin distorsión */
`;

export const TestimonialContent = styled.div`
  width: 100%;
  height: 50%; /* Cubre la mitad inferior */
  padding: 20px; /* Espaciado interno */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 18px;
    color: #333333;
    margin: 10px 0;
  }

  h4 {
    font-size: 16px;
    color: #0078ff;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #555555;
    line-height: 1.6;
  }
`;


export const SliderWrapper = styled.div`
  padding: 40px 0;
  background-color: #f9f9f9;

  .slick-slider {
    max-width: 1200px; /* Ancho máximo del slider */
    margin: 0 auto;
  }

  .slick-list {
    overflow: hidden; /* Ocultar tarjetas fuera del área visible */
    padding: 0 10px; /* Espaciado interno */
  }

  .slick-slide > div {
    margin: 0 10px; /* Espaciado entre slides */
  }

  .slick-dots {
    bottom: -25px; /* Ajustar posición de los puntos */
  }

  .slick-dots li button:before {
    color: #0078ff;
    font-size: 12px;
  }

  .slick-arrow {
    z-index: 1;
    color: #0078ff;
  }
`;



export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;

  ${({ left }) => (left ? "left: -60px;" : "right: -60px;")}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const HeadingWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1.5px;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;



export const TestimonialOpinion = styled.p`
  font-size: 1rem;
  color: #444;
  font-style: italic;
  margin-bottom: 10px;
`;

export const TestimonialName = styled.h4`
  font-size: 1rem;
  color: #666;
  font-weight: bold;
`;


