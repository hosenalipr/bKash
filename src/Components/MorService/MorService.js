import React from 'react'
import Col from 'react-bootstrap/esm/Col'

const MorService = ({ item }) => {
    return (
        <Col lg={2} className="card align-items-center text-center bg-transparent h-100 m-3">
            < img className='w-100'
                src={item.img}
                alt="Online image icon" />
            <p className='text-center w-100'>{item.description}</p>
        </Col>
    )
}

export default MorService
