import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.in';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import GoogleSignUp from '../RequireAuth/GoogleSignUp';
import './SingUp.css'


const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const massageDiv = document.getElementById("massage-div")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        massageDiv.innerHTML = error;
    }
    if (loading) {
        massageDiv.innerHTML = "Loading...";
    }
    if (user) {
        massageDiv.innerHTML = "User Registered";
    }
    return (
        <section className="registration-area">
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </Form.Group>
                        <div className='link'><Link to="/longin">Already account: Long In</Link ></div>
                        <div id="massage-div"></div>
                        <Button
                            className='w-100 mb-3 border'
                            variant="success"
                            type="submit"
                            onClick={() => createUserWithEmailAndPassword(email, password)}>
                            Submit
                        </Button>
                        <GoogleSignUp />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SingUp
