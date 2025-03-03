import styled from "styled-components";

export const TestimonialSection = styled.div`
  padding: 100px 0;
  background: rgb(236, 236, 236);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TestimonialWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TestimonialHeading = styled.h1`
  font-size: 2.5rem;
  color: #101522;
  margin-bottom: 2rem;
  text-align: center;
`;

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export const TestimonialImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TestimonialOpinion = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  font-style: italic;
`;

export const TestimonialName = styled.h3`
  font-size: 1.2rem;
  color: #101522;
  font-weight: bold;
`;