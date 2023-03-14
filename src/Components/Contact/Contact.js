import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <h2 className='text-center  mb-3 '>Contact</h2>
                <hr className='mb-5' />
                <Row>

                    <Col lg={8}>
                        <div className="form-area">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="Your Name" />
                            </Form.Group>

                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>

                            <button type="submit " className='submitbutton'>Submit</button>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <h2> We are available 24/7</h2>
                        <p> Morbi nibh neque, consequat at magna pasuwew blandit mauris. Nullam vitae</p>
                        <div className="phone-area">
                            <div className="phone">
                                <img src="https://img.icons8.com/emoji/48/null/mobile-phone.png" alt="Online icon image" />
                                <p>01518418509</p>
                            </div>
                            <div className="email">
                                <img src="https://img.icons8.com/fluency/48/null/apple-mail.png" alt="Online icon image" />
                                <p>hosenalipr@gmail.com</p>
                            </div>
                            <div className="address">
                                <img src="https://img.icons8.com/color/48/null/address--v1.png" alt="Online icon image" />
                                <p>Bahaladanga, Pangsha, Rajbari.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="contact-icon">
                            <Navbar.Brand href="#home">
                                <img src="https://img.icons8.com/color/48/null/facebook-new.png" alt="Online icon image" />
                            </Navbar.Brand>
                            <Navbar.Brand href="#home">
                                <img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" alt="Online icon image" />
                            </Navbar.Brand>
                            <Navbar.Brand href="#home">
                                <img src="https://img.icons8.com/color/48/null/twitter-circled--v1.png" alt="iOnline con image" />
                            </Navbar.Brand>
                            <Navbar.Brand href="#home">
                                <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" alt="Online icon image" />
                            </Navbar.Brand>
                        </div>
                    </Col>


                </Row>
            </Container >
        </div>
    )
}

export default Contact
