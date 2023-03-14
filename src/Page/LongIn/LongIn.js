import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.in';
import { Link } from 'react-router-dom';
import "./LongIn.css"

const LongIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }
    return (
        <section className="longin-area">
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
                        <Link to="/singup" className='center'>Create a account</Link >
                        <Button
                            className='w-100 mb-3 border'
                            variant="success"
                            type="submit"
                            onClick={() => signInWithEmailAndPassword(email, password)}>
                            Sing In
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default LongIn
