import React from "react";
import Service from "../../components/InfoSection/Service/Service";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjZero, homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjZero} /> {/***PORTADA */}
            <Service />
            
            <InfoSection {...homeObjThree} /> {/***SOBRE NOSOTRAS */}
            <InfoSection {...homeObjTwo} /> {/***CLIENTES */}
            <InfoSection {...homeObjFour} /> {/***CONTACTO */}
        </>
    )
}
export default Home;