import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './Publications.css'

const Publications = () => {
    return (
        <section className="publications p-2">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <h2>Publications about bKash</h2>
                        <p>bKash media releases on services, events, technology, achievements along with prominent media coverage on bKash’s contribution, exclusive interviews, columns, features, etc.</p>
                    </Col>
                    <Col md={6}>
                        <img className='w-100' src="https://www.bkash.com/uploaded_contents/contents/Publications_1677695954270.webp" alt="Publications img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Publications
