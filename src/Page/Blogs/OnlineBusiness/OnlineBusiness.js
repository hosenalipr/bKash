import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './OnlineBusiness.css'

const OnlineBusiness = () => {
    return (
        <section className="onlineBusiness  mt-5">
            <Container>
                <Row className='align-items-center p-5'>
                    <Col>
                        <h2>Online Business
                        </h2>
                        <p>bKash provides the easiest and safest method for accepting online payments from your customers. You will get access to cutting-edge solutions like payment gateway, tokenized checkout, subscription payments, instant refunds, direct charges, B2C payout, and APIs.</p>
                    </Col>
                    <Col>
                        <img src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp" alt="online-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OnlineBusiness

