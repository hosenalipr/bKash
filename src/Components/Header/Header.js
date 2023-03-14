import { signOut } from 'firebase/auth';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.in';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth)
    };
    return (
        <header className="header-area">
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"> <div className="logo-area"><img src="https://i.ibb.co/F4Bz5L9/bkash.png" alt="logo" /></div> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className={"nav-link"} to="/">Home</NavLink>
                            <NavLink className={"nav-link"} to="/about">About</NavLink>
                            <NavLink className={"nav-link"} to="/blog">Blog</NavLink>
                            {
                                user
                                    ? (<NavLink className="nav-link button" onClick={handleSingOut}>Sing Out</NavLink>)


                                    : (<NavLink className="nav-link button" as={Link} to="/longin" >Long In</NavLink>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header
