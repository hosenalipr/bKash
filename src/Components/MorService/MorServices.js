import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import MorService from './MorService'

const MorServices = () => {
    const [serviceimg, setServiceimg,] = useState([]);
    useEffect(() => {
        fetch("MorServices.json")
            .then(res => res.json())
            .then(data => setServiceimg(data))
    }, []);
    return (
        <Container>
            <h2 className='text-center m-5'>Learn More about bKash Services </h2>
            <Row>
                {
                    serviceimg.map((serviceImage) => (<MorService key={serviceImage.id} item={serviceImage}>
                    </MorService>))
                }
            </Row>
        </Container>

    )
}

export default MorServices
