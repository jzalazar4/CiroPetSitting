import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './views/Inicio/Home';
import ContactPage from './views/Contact/ContactPage';
//import Servicio from './pages/Servicio/Servicios';
//import Products from './pages/Products/Products';
//import Contacto from './pages/Contacto';

import ScrollToTop from  './components/ScrollToTop'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // Duración de las animaciones (en ms)
  once: true,     // La animación ocurre solo una vez
});
function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' exact component={ContactPage} />
            <Route path='/reservation' exact component={ReservationPage} />
         {/**    <Route path='/' exact component={Home} />
           <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />*/} 
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;