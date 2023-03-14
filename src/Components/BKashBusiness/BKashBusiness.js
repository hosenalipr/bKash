import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const BKashBusiness = () => {
    return (
        <section className="text-center pt-5 pb-5">
            <Container>
                <h2 className='fs-1'>bKash for Business</h2>
                <p className='fs-5'>The diverse range of financial solutions offered by bKash ensures fast, easy and safe transactions for your business. Make your day-to-day operations more efficient with bKash.</p>
                <Row className='align-items-center mt-5'>
                    <Col md={6}>
                        <Row >
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp" alt="Online Business" width="110" />
                                    <Nav.Link href="#">Online Business</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/06-merchant_1666263856311.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/06-merchant_1666263856311.webp" alt="Merchant" width="110" />
                                    <Nav.Link href="#">Merchant</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/05-education-institute_1666262925655.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/05-education-institute_1666262925655.webp" alt="Educational Institutions" width="110" />
                                    <Nav.Link href="#">Educational Institutions</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/01-rmg-&amp;-payroll_1666092119615.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/01-rmg-&amp;-payroll_1666092119615.webp" alt="Payroll" width="110" />
                                    <Nav.Link href="#">Payroll</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/02-corporate-_-business_1666262309776.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/02-corporate-_-business_1666262309776.webp" alt="Corporate &amp; Enterprise" width="110" />
                                    <Nav.Link href="#">Corporate</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/03-NGO_1666262448062.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/03-NGO_1666262448062.webp" alt="Microfinance" width="110" />
                                    <Nav.Link href="#">Microfinance</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/07-be-a-supplier_1666264806322.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/07-be-a-supplier_1666264806322.webp" alt="Supplier" width="110" />
                                    <Nav.Link href="#">Supplier</Nav.Link>
                                </div>
                            </Col>
                            <Col className='mt-4'>
                                <div className="card align-items-center text-center bg-transparent h-100">
                                    <img data-src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/08-agent_1666264866359.webp" src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/08-agent_1666264866359.webp" alt="Agent" width="110" />
                                    <Nav.Link href="#">Agent</Nav.Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="p-2">
                        <img className='w-100' src="https://www.bkash.com/uploaded_contents/contents/homepage-business-static_1677695675835.webp" alt="online-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BKashBusiness
