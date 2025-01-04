import React from 'react'
import BackGround from '../component/BackGround'
import AboutJyotish from '../component/AboutJyotish'
import OurServices from '../component/OurServices'
import CelestialPage from '../component/CelestialPage'
import WorkingProcess from '../component/WorkingProcess'
import { Feature } from '../component/Feature'

const Services = () => {
  return (
    <div>
        <BackGround title="Services" />
        <AboutJyotish/>
        {/* <OurServices/> */}
        <CelestialPage/>
        <Feature/>
        {/* <WorkingProcess/> */}
        
    </div>
  )
}

export default Services