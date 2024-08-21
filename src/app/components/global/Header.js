import React, { useEffect } from 'react'
import { Nav, Navbar, Image, Container } from 'react-bootstrap'
// import { Nav, Navbar, Image, Container, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
// import * as util from "./script";
import ScrollToTop from "react-scroll-to-top";
import { useLocation } from 'react-router-dom';
// import axios from "axios";
// // ForLoader
// import { showLoader } from "../../features/loaderSlice";
// import { useDispatch } from "react-redux";

let timeout;

const Header = () => {
    const { pathname } = useLocation();
    // const [show, setShow] = useState(false);
    // const [courses, setCourses] = useState([]);
    // const dispatch = useDispatch();
    // const baseURL = "https://script.google.com/macros/s/AKfycbz3hwMI0BpifaZQ0OnWKIB7CcYxjSsOENzKNXYM3OqlH-CjPslPzFQxVGmTEnxlZK5yNA/exec";

    // const showDropdown = (e) => {
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }

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


//   useEffect(() => {
//     dispatch(showLoader({ status: true }))
//     let isMounted = true; // Flag to check if component is mounted
//     axios.get(baseURL + '?action=course-list')
//       .then(response => {
//         dispatch(showLoader({ status: false }))
//         if (isMounted) { // Only update state if component is still mounted
//           // setData(response.data);
//           setCourses(response?.data?.data)
//         }
//       });
//     return () => {
//       isMounted = false; // Cleanup function to set flag to false on unmount
//     };
//   }, []);

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
                                <Nav.Link as={Link} to="courses">Courses</Nav.Link>
                                {/* <NavDropdown title="Courses" id="collapsible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
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
                                                {courses.map((course, key) => (
                                                    <li key={key}><Link to={{ pathname: "/course-details" }}>{course?.Course_Name}</Link></li>
                                                ))}
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Container>
                                </NavDropdown> */}
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