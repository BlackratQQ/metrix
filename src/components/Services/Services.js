import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-4.svg'


import {
  ServicesCards,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './styledServices'


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCards>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help reduce your fess
            abd increase your overall revenue.</ServicesP>
        </ServicesCards>
        <ServicesCards>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
        </ServicesCards>
        <ServicesCards>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% casg back.</ServicesP>
        </ServicesCards>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;