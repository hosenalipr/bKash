import React from 'react'
import Silde from '../../Components/Slide/Slide'
import Services from '../../Components/Services/Services';
import SectionImg from '../../Components/SectionImg/SectionImg';
import Contact from '../../Components/Contact/Contact'
import BKashBusiness from '../../Components/BKashBusiness/BKashBusiness';
import MorServices from '../../Components/MorService/MorServices';

const Home = () => {
    return (
        <div>
            <Silde />
            <Services />
            <MorServices />
            <SectionImg />
            <BKashBusiness />
            <Contact />
        </div>
    )
}

export default Home
