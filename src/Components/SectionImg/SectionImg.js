import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Stack from 'react-bootstrap/esm/Stack';
import Nav from 'react-bootstrap/Nav';
import './SectionImg.css'

const SectionImg = () => {
    return (
        <section className="maine-image">
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={4} className="mx-auto" >
                        <div >
                            <div className="text">
                                <h2>Download bKash App</h2>
                                <p>Open your Account from the bKash App in a few simple steps and get up to 125 TK bonus!</p>
                            </div>
                        </div>
                        <div className="">
                            <Stack direction="horizontal" gap={3}>
                                <Nav.Link href="#"><img className='w-100' src="https://i.ibb.co/XW14XdT/Screenshot-2023-03-11-142629.png" alt="Screenshot-2023-03-11-142629" border="0" /></Nav.Link>
                                <Nav.Link href="#"><img className='w-100' src="https://i.ibb.co/DMrPczR/Screenshot-2023-03-11-142655.png" alt="Screenshot-2023-03-11-142655" border="0" /></Nav.Link>
                            </Stack>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/contents/static-banner-content_1677695633940.webp" alt="image Banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionImg
