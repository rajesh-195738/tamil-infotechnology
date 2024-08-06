import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Image, Container, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
// import * as util from "./script";
import ScrollToTop from "react-scroll-to-top";
import { useLocation } from 'react-router-dom';


let timeout;

const Header = () => {
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    // useEffect(() => {
    //     util.add();
    // });

    useEffect(() => {
        window.onscroll = () => {
            if (timeout) {
                clearTimeout(timeout)
            }

            timeout = setTimeout(() => {
                // console.log(window.scrollY && window.scrollY)
                if (window.scrollY && window.scrollY > 80) {
                    document.getElementById('header').classList.add('sticky')
                } else {
                    document.getElementById('header').classList.remove('sticky')
                }

            }, 10)
        }
    }, [])
    return (
        <>
            <header id="header">
                <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary page-header ${pathname !== '/' ? 'white-bg' : ''}`}>
                    <Container>
                        <Navbar.Brand href="/"><Image className='logo-header' src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="about-us">About Us</Nav.Link>
                                <NavDropdown title="Courses" id="collapsible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                    <Container>
                                        <Row className='align-items-center justify-content-center'>
                                            <Col sm="12" lg="12">
                                                <ul className="list-wrap mb-2">
                                                    <li><Link to={{ pathname: "/courses" }}>All Courses</Link></li>
                                                </ul>
                                            </Col>
                                            <hr />
                                            <Col sm="12" lg="12">
                                                <h5 className='li-title'>List Of Courses</h5>
                                                <ul className="list-wrap">
                                                    <li><Link to={{ pathname: "/course-details" }}>React Js</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>Angular</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>Python</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>Java</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>CSS</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>JSON</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>HTML</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>SCSS</Link></li>
                                                    <li><Link to={{ pathname: "/course-details" }}>Jquery</Link></li>
                                                </ul>
                                            </Col>
                                            {/* <hr />
                                            <Col sm="12" lg="12" className='mt-3'>
                                                <h5 className='li-title'>Back-end Courses</h5>
                                                <ul className="list-wrap">
                                                <li><Link to={{pathname: "/course-details"}}>Python</Link></li>
                                                <li><Link to={{pathname: "/course-details"}}>Laravel</Link></li>
                                                <li><Link to={{pathname: "/course-details"}}>Php</Link></li>
                                                </ul>
                                            </Col> */}
                                            {/* <Col sm="12" lg="4">
                                                <ul className="list-wrap">
                                                    <li>Become a UX designer.</li>
                                                    <li>Create quick wireframes.</li>
                                                    <li>You will be able to add UX designe</li>
                                                    <li>Downloadable exercise files</li>
                                                </ul>
                                            </Col> */}
                                        </Row>
                                    </Container>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="contact-us">Contact Us</Nav.Link>
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
            </header>
            {/* <div className="cursor"></div> */}
            <ScrollToTop smooth >Up </ScrollToTop>
            {/* <ScrollToTop transitionDelay='0s' showUnder={50}>
                <span className="scroll-to-top"><i className="bi bi-arrow-up-circle-fill"></i></span>
            </ScrollToTop> */}
        </>
    )
}

export default Header