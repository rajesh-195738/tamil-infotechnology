import React, { useEffect } from 'react'
import { Nav, Navbar, Image, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as util from "./script";
import ScrollToTop from "react-scroll-to-top";

const Header = () => {
    useEffect(() => {
        util.add();
    });
    return (
        <>
            <section id="header">
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary page-header">
                    <Container>
                        <Navbar.Brand href="/"><Image className='logo-header' src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="about-us">About Us</Nav.Link>
                                <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/courses">All Courses</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/course-details">Course-1</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/course-2">Course-2</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/course-3">Course-3</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/course-4">Course-4</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            </Nav>
                            <Nav>
                                {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                                <Nav.Link eventKey={2} href="#memes">
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
            <div className="cursor"></div>
            <ScrollToTop smooth >Up </ScrollToTop>
            {/* <ScrollToTop transitionDelay='0s' showUnder={50}>
                <span className="scroll-to-top"><i className="bi bi-arrow-up-circle-fill"></i></span>
            </ScrollToTop> */}
        </>
    )
}

export default Header