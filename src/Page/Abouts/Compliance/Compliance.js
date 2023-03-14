import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './Compliance.css'

const Compliance = () => {
    return (
        <section className="compliance p-2">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <h2>Compliance</h2>
                        <p>bKash Limited is working closely with the regulator as well as other external stakeholders on relevant issues with a view to ensuring customer satisfaction and security of their funds while exploring new avenues of financial inclusion.</p>
                    </Col>
                    <Col md={6}>
                        <img className='w-100' src="https://www.bkash.com/uploaded_contents/contents/Compliance_1677695870034.webp" alt="Online Compliance" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Compliance
