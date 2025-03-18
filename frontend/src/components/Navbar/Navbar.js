import React, {useState, useEffect} from 'react'
import { Nav, 
    NavContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    TopBar,
    ContactInfo,
    SocialIcons,
    NavDropdown,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements'
 import { FaTimes, FaBars, FaFacebook, FaInstagram,  FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
 import { IconContext} from 'react-icons/lib'
 import { Button } from '../../globalStyles'

 function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // si el tamaño de pantalla es mayor a 960, el estado es falso
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                          {/* Barra superior */}
                <TopBar>
                    <ContactInfo>
                        <span>
                            <FaPhoneAlt style={{ marginRight: '0.5rem' , marginLeft:'0.5rem'}} />
                            +54 9 11 1234-5678  
                            <FaEnvelope style={{ marginRight: '0.5rem' , marginLeft:'0.8rem'}} />
                            contacto@ciro.com
                        </span>
                    
                    </ContactInfo>
                    <SocialIcons>
                      
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ marginRight: '0.5rem' , marginLeft:'0.5rem', marginTop:'0.3rem'}}  />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{  marginLeft:'0.5rem', marginTop:'0.3rem'}}  />
                        </a>
                  
                    </SocialIcons>
               
                </TopBar>

                {/* Barra de navegación */}
                <Nav>
                    <NavContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            <div>
                                <h1>CIRO</h1>
                                <h2><i>Cuidado de mascotas</i></h2>
                            </div>
                        </NavLogo>
                        <HamburgerIcon onClick={handleClick}>
                            {click? <FaTimes /> : <FaBars />}
                        </HamburgerIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                                <NavLinks to="/" onClick={closeMobileMenu}>
                                    Inicio
                                </NavLinks>
                            </NavItem>

                            <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                                <NavLinks to="/servicio" onClick={closeMobileMenu}>
                                    Reservar
                                </NavLinks>
                             
                            </NavItem>
                            
                            <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                                <NavLinks to='/nosotros' onClick={closeMobileMenu}>
                                    Sobre Nosotros
                                </NavLinks>

                            </NavItem>
                         
                        
                        
                       
                            <NavItemBtn >
                                    {button ? (
                                        <NavBtnLink to='/contact'>
                                            <Button primary>Contactános</Button>
                                        </NavBtnLink>
                                    ) : (
                                        <NavBtnLink to='/contact'>
                                            <Button onClick={closeMobileMenu} fontBig primary>Contactános</Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavContainer>     
                </Nav>
            </IconContext.Provider>
        </>
    )
 }
 export default Navbar