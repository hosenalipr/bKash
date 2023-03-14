import React from 'react'
import Compliance from '../Compliance/Compliance'
import Corporate from '../Corporate/Corporate'
import HeaderImg from '../HeaderImg/HeaderImg'
import History from '../History/History'
import Publications from '../Publications/Publications'

const About = () => {
    return (
        <div >
            <HeaderImg />
            <History />
            <Publications />
            <Corporate />
            <Compliance />
        </div>
    )
}

export default About
