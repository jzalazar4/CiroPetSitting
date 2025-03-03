import React from "react";
import Slider from 'react-slick'
import {
    TestimonialSection,
    TestimonialWrapper,
    TestimonialHeading,
    TestimonialCard,
    TestimonialImage,
    TestimonialContent,
    TestimonialName,
    TestimonialOpinion,
  } from './Testimonial.elements';

  const testimonialsData = [
    {
      id: 1,
      name: 'María López',
      opinion: '¡Excelente servicio! Mi perrito siempre está feliz cuando vuelvo.',
      image: '/images/pet1.jpg',
    },
    {
      id: 2,
      name: 'Carlos García',
      opinion: 'Un trato increíble, muy profesionales y atentos.',
      image: '/images/pet2.jpg',
    },
    {
      id: 3,
      name: 'Ana Fernández',
      opinion: 'Recomiendo ampliamente, cuidan a nuestras mascotas como familia.',
      image: '/images/pet3.jpg',
    },
  ];
  
  const Testimonials = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <TestimonialSection>
        <TestimonialWrapper>
          <TestimonialHeading>Opiniones de Nuestros Clientes</TestimonialHeading>
          <Slider {...settings}>
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
        </TestimonialWrapper>
      </TestimonialSection>
    );
  };
  
  export default Testimonials;