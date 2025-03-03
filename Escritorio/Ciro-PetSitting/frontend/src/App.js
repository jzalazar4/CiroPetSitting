import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './views/Inicio/Home';
//import Servicio from './pages/Servicio/Servicios';
//import Products from './pages/Products/Products';
//import Contacto from './pages/Contacto';
import ScrollToTop from  './components/ScrollToTop'

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
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