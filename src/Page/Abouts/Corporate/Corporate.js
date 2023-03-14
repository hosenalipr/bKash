import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'


const Corporate = () => {
    return (
        <section className="corporate p-2">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <img className='w-100' src="https://www.bkash.com/uploaded_contents/contents/bkash-csr_1677695899701.webp" alt="contents" />
                    </Col>
                    <Col md={6}>
                        <h2>Corporate Social Responsibility of bKash</h2>
                        <p>As a socially responsible MFS provider, bKash Limited is committed morally and remains engaged in sustainable CSR activities according to the regulatory guidelines with the ultimate achievement of financial inclusion.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Corporate
