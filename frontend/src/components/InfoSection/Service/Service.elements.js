import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const ServiceSection = styled.div`
    padding: 100px 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:rgb(255, 252, 252);
    
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
 
  @media screen and (max-width: 960px) {
    margin: 0 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceHeading = styled.h1`
  color: black;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ServiceContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
`;


export const ServiceCard = styled(Link)`
  background:rgb(236, 230, 230);
  box-shadow: 0 6px 20px rgba(19, 43, 95, 0.5);
  width: 280px;
  height: 330px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color:rgb(96, 105, 136);
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }`;
  
export const ServiceCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ServiceCardIcon = styled.div`
  margin: 24px 0;
`;

export const ServiceCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:rgb(26, 24, 24);
`;

export const ServiceCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const ServiceCardTitle = styled.h3`
  margin-bottom: 5px;

  color: rgb(26, 24, 24);
  font-size: 24px;
`;