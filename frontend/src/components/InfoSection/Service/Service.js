import React from 'react';

import { GiHorizonRoad, GiPawHeart, GiHealingShield } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { 
    ServiceSection,
    ServiceWrapper,
    ServiceHeading,
    ServiceCard,
    ServiceCardFeature,
    ServiceCardInfo,
    ServiceContainer,
    ServiceCardFeatures,
    ServiceCardIcon,
    ServiceCardTitle

} from './Service.elements';

const Service = () => {
    return (
        <IconContext.Provider value={{ color: '#101522', size: 64 }}>
          <ServiceSection>
            <ServiceWrapper>
              <ServiceHeading  data-aos="fade-up">Nuestro servicio</ServiceHeading>
              <ServiceContainer>
                <ServiceCard  data-aos="fade-up">
                  <ServiceCardInfo>
                    <ServiceCardIcon>
                      <GiPawHeart />
                    </ServiceCardIcon>
                    <ServiceCardTitle>Visitas diarias</ServiceCardTitle>
                    <ServiceCardFeatures>
                      <ServiceCardFeature>Visitamos a tu mascota diariamente, dos veces al día.</ServiceCardFeature>
                      <ServiceCardFeature>Le damos de comer, limpiamos si ensucia dentro</ServiceCardFeature>
                    </ServiceCardFeatures>
              
                  </ServiceCardInfo> 
                </ServiceCard>
                <ServiceCard  data-aos="fade-up">
                  <ServiceCardInfo>
                    <ServiceCardIcon>
                      <GiHorizonRoad />
                    </ServiceCardIcon>
                    <ServiceCardTitle>Paseos</ServiceCardTitle>

                    <ServiceCardFeatures>
                    <ServiceCardFeature>Abonando un costo extra podemos pasear a tus mascotas</ServiceCardFeature>
                      <ServiceCardFeature><i>Este beneficio es exclusivo para los meses de diciembre, enero y febrero</i></ServiceCardFeature>
                    </ServiceCardFeatures>
              
                  </ServiceCardInfo>
                </ServiceCard>
                <ServiceCard  data-aos="fade-up">
                  <ServiceCardInfo>
                    <ServiceCardIcon>
                      <GiHealingShield />
                    </ServiceCardIcon>
                    <ServiceCardTitle>Visitas al veterinario</ServiceCardTitle>

                    <ServiceCardFeatures>
                      <ServiceCardFeature>aaa</ServiceCardFeature>
                      <ServiceCardFeature>bbbb</ServiceCardFeature>
                      <ServiceCardFeature>ccc</ServiceCardFeature>
                    </ServiceCardFeatures>
          
                  </ServiceCardInfo>
                </ServiceCard>
              </ServiceContainer>
            </ServiceWrapper>
          </ServiceSection>
        </IconContext.Provider>
      );
};
export default Service;