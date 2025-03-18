import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import "slick-carousel/slick/slick-theme.css";
import {
  HeadingWrapper,
  TestimonialName,
  TestimonialOpinion,
  TestimonialImage,
  TestimonialContent,
  Title,
  ArrowButton,
  SliderWrapper,
  Subtitle,
  TestimonialSection,
  TestimonialCard,
} from './Testimonial.elements';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'María López',
      opinion: '¡Excelente servicio! Mi perrito siempre está feliz cuando vuelvo.',
      image: require('/home/julieta/Escritorio/Ciro-PetSitting/frontend/src/images/TestimonialPhoto/pet1.jpeg'),
    },
    {
      id: 2,
      name: 'Carlos García',
      opinion: 'Un trato increíble, muy profesionales y atentos.',
      image: require('/home/julieta/Escritorio/Ciro-PetSitting/frontend/src/images/TestimonialPhoto/pet2.jpg'),
    },
    {
      id: 3,
      name: 'Ana Fernández',
      opinion: 'Recomiendo ampliamente, cuidan a nuestras mascotas como familia.',
      image: require('/home/julieta/Escritorio/Ciro-PetSitting/frontend/src/images/TestimonialPhoto/pet3.jpg'),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 slides en pantallas grandes
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    focusOnSelect: true,
    centerMode: false, // Desactivado para que los 3 slides sean uniformes
    centerPadding: "0px", // Sin padding entre slides
    prevArrow: <ArrowButton left>{<FaChevronLeft />}</ArrowButton>,
    nextArrow: <ArrowButton right>{<FaChevronRight />}</ArrowButton>,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Mostrar 2 slides en pantallas medianas
          centerMode: true, // Habilitar el modo centrado
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mostrar 1 slide en pantallas pequeñas
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };
  
  return (
    <TestimonialSection>
      <HeadingWrapper>
        <Title  data-aos="fade-up">Opiniones de Nuestros Clientes</Title>
        <Subtitle  data-aos="fade-up">
          Conoce lo que nuestros clientes dicen sobre nosotros. Sus experiencias son nuestro mayor orgullo y nos motivan a seguir ofreciendo el mejor cuidado para tus mascotas.
        </Subtitle>
      </HeadingWrapper>
      <Slider {...settings}  data-aos="fade-up">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialImage src={testimonial.image} alt={`Mascota de ${testimonial.name}`} />
            <TestimonialContent>
              <TestimonialOpinion>"{testimonial.opinion}"</TestimonialOpinion>
              <TestimonialName>{testimonial.name}</TestimonialName>
            </TestimonialContent>
          </TestimonialCard>
        ))}
      </Slider>
    </TestimonialSection>
  );
};

export default Testimonials;
