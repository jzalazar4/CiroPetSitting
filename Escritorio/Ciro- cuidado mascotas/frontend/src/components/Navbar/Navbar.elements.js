import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'

{/** Barra superior */}
export const TopBar = styled.div`
    background-color: #1c2237;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 300;
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 0.8rem;

    a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        transition: color 0.3s ease;

        &:hover {
            color: #4b59f7;
        }
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
        display: block;
        line-height: 1.2;
    }
`;


export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.0rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`
export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem; /* Tamaño del texto principal */
    font-weight: bold;
    cursor: pointer;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 0.5rem;

        h1 {
            font-size: 1.8rem; /* Tamaño del texto "CIRO" */
            margin: 0;
            font-weight: 700;
        }

        h2 {
            font-size: 0.9rem; /* Tamaño del texto "Cuidado de mascotas" */
            margin: 0;
            font-weight: 400;
            color: #aaa; /* Color más claro para el subtítulo */
        }
    }
`;

export const NavIcon = styled.div`
    background-image: url('https://via.placeholder.com/40'); /* URL de imagen temporal */
    background-size: contain;

    background-repeat: no-repeat;
    width: 40px; /* Ancho del icono */
    height: 40px; /* Alto del icono */
`;

export const HamburgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
  
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #101522;
        left: ${({ click }) => (click ? 0 : '-100%')};
    }
`
export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    border-radius: 2px;

    &:hover {
        border-bottom: 2px solid #fff;
         
            transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border-bottom: none;
        }
    }

`
export const NavDropdown = styled.div`
    display: none;
    position: absolute;
    background-color:rgb(27, 33, 48);
    color: rgba(255, 255, 255, 0.7); /* Color más claro */
    font-size: 1.0rem; /* Tamaño reducido */
    font-weight: 300; /* Fuente más ligera */
    padding: 20px 24px;
    margin-top: 4px; /* Separación vertical */
    border-radius: 4px;
    z-index: 1000;

    ${NavItem}:hover & {
        display: block;
    }
`;


export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;