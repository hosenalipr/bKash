import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Merchant = () => {
    return (
        <section className="merchant mt-5 ">
            <Container>
                <Row className='align-items-center p-5'>
                    <Col>
                        <img src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/06-merchant_1666263856311.webp" alt="online-image" />
                    </Col>
                    <Col>
                        <h2>Merchant</h2>
                        <p>A bKash Merchant Account allows businesses and merchants to accept payments digitally and conveniently from more than 60 million bKash users through a secure platform; along with bKash Merchant App, Merchant QR, counter payment, 24/7 payment collection, transaction history and more.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Merchant
