import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import './Fooder.css'
const Fooder = () => {
    return (
        <footer className="fooder-area">
            <Container>
                <Row>
                    <div>
                        <img src="https://i.ibb.co/kGy8M9H/bkash.png" alt="footer image" />
                    </div>
                    <Col lg-md-4 className="p-3">
                        <p>bKash provides fast, secure and convenient money transfer and payment services via mobile phone to the people of Bangladesh.</p>
                        <h4 className='py-3'>Download bKash App</h4>
                        <div className="goolePlay">
                            <Stack direction="horizontal" gap={3}>
                                <Nav.Link href="#"><img className='w-100' src="https://i.ibb.co/XW14XdT/Screenshot-2023-03-11-142629.png" alt="Screenshot-2023-03-11-142629" border="0" /></Nav.Link>
                                <Nav.Link href="#"><img className='w-100' src="https://i.ibb.co/DMrPczR/Screenshot-2023-03-11-142655.png" alt="Screenshot-2023-03-11-142655" border="0" /></Nav.Link>
                            </Stack>
                        </div>
                    </Col>
                    <Col lg-md-4>
                        <h5>Service</h5>
                        <p> Campaigns <br />
                            Customer Support <br />
                            Complaint Cell
                        </p>
                    </Col>
                    <Col lg-md-4>
                        <h5>Company</h5>
                        <p> About <br />
                            Contact Us <br />
                            Career <br />
                        </p>
                    </Col>
                    <Col lg-md-4>
                        <h5>Business</h5>
                        <p> Be a bKash Supplier <br />
                            Be a bKash Merchant <br />
                            Digital Payroll <br />
                        </p>
                    </Col>
                    <Col lg-md-4>
                        <h5>Others</h5>
                        <p> Terms <br />
                            FAQ <br />
                            Security Tips <br />
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className='text-center pb-4'>© 2023 bKash, All Rights Reserved</p>
        </footer >
    )
}

export default Fooder
