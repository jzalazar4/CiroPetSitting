import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Aumenta el espacio máximo */
  margin-left: 1rem; /* Reduce el margen izquierdo */

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
export const FooterColumn = styled.div`
  flex: 0.2; /* Ajusta el ancho de las columnas */
  padding: 0 1rem;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  p,
  a {
    margin-bottom: 8px;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    word-wrap: break-word;

    &:hover {
      color: #0467fb;
      transition: 0.3s ease-out;
    }
  }

  p {
    margin-top: 12px; /* Da espacio debajo de las redes */
  }
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;

  @media screen and (max-width: 820px) {
    align-items: center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 0;
  
  text-align: left;
  width: 200px;

  @media screen and (max-width: 420px) {
    width: 100%;
    align-items: center;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 16px;
  color: #0467fb;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  a {
    font-size: 32px;
    color: #fff;

    &:hover {
      color: #0467fb;
      transition: 0.3s ease-out;
    }
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 5.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 5px;
  font-size: 12px;
`;

