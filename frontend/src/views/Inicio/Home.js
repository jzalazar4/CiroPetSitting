import React from "react";
import Service from "../../components/InfoSection/Service/Service";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjZero, homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import Testimonials from "../../components/InfoSection/Reviews/Testimonial";
import Contact from "../../components/InfoSection/Contact/Contact";
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjZero} /> {/***PORTADA */}
   
            <Service />
          
            <InfoSection {...homeObjThree}  /> {/***SOBRE NOSOTRAS */}
            <Testimonials />
            {/***<InfoSection {...homeObjTwo} /> CLIENTES */}
            <Contact />
            {/***<InfoSection {...homeObjFour} /> 
             * CONTACTO */}
        </>
    )
}
export default Home;