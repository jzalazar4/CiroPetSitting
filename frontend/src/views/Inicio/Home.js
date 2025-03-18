import React from "react";
import Service from "../../components/InfoSection/Service/Service";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjZero, homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import Testimonials from "../../components/InfoSection/Reviews/Testimonial";
import Contact from "../../components/InfoSection/Contact/Contact";
import SearchBar from "../../components/InfoSection/SearchBar";
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjZero} /> {/***PORTADA */}
            <SearchBar  defaultDates={{ startDate: "", endDate: "" }}
        petTypes={["Perro", "Gato", "Otro"]}
        neighborhoods={["Barrio A", "Barrio B", "Barrio C"]} />
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