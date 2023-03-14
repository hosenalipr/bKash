import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Service from './Service'
import './Service.css'

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    return (
        <section className="service-area">
            <div className="subHeder">
                <h1 className='text-center'>One Platform for all Financial Solutions</h1>
            </div>
            <Container>
                <Row>
                    {
                        services.map((item) => (<Service key={item.id} item={item}></Service>))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Services
