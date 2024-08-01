import React from 'react'
import { Container, Row, Col, Stack, NavLink } from "react-bootstrap"
// import Logo from "../../../../src/assets/images/logo-white.png";

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row className="justify-content-center">
                            <Col xs="12" sm="6" lg="3">
                            <Stack>                                
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                <div className='d-flex'>
                                    <i className="bi bi-buildings-fill"></i>
                                    <span className='ms-2'>1st Floor, Naicker New 1st St, Pandian Nagar, Govindapuram, Dindigul, Tamil Nadu 624001</span>
                                </div>
                                <div className='d-flex mt-3'>
                                    <i className="bi bi-chat-text-fill"></i>
                                    <span className='ms-2'><h5>Customer Queries</h5>
                                        tamilinfo@gmail.com</span>
                                </div>
                                <div className='d-flex mt-3'>
                                    <i className="bi bi-telephone-fill"></i>
                                    <span className='ms-2'>080567 80587</span>
                                </div>
                            </Stack>
                            {/* <Image src={Logo} /> */}
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <h5>Community Programs</h5>
                            <NavLink href="#">#beleiveinDoingChallenge</NavLink>
                            <NavLink href="#">Tamil Project Hub</NavLink>
                            <NavLink href="#">Tamil-info winter of doing</NavLink>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <div>
                                <h5>Career Programs</h5>
                                <NavLink href="#">Fellowship Program in Software Development</NavLink>
                                <NavLink href="#">Fellowship Program In CA Automation SUET</NavLink>
                            </div>
                            <div className='mt-4'>
                                <h5>For Business</h5>
                                <NavLink href="#">Hire from tamil-infotechnoloy</NavLink>
                                <NavLink href="#">tamil-infotechnoloy Onboard</NavLink>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <div>
                                <h5>Tamil Infotechnolgyonny</h5>
                                <NavLink href="#">Home</NavLink>
                                <NavLink href="#">About</NavLink>
                                <NavLink href="#">Course</NavLink>
                                <NavLink href="#">Faq</NavLink>
                                <NavLink href="#">Contact us</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="copyright-wrapper"><div className="container"><div className="row"><div className="col-lg-8"><div className="copyright-text"><p>Copyright © 2024 tamil-infotech. All rights reserved.</p></div></div><div className="col-lg-4"><div className="copyright-menu"><ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end"><li><a href="/#">Privacy Policy</a></li><li><a href="/#">Terms  Conditions</a></li></ul></div></div></div></div></div>
        </>
    )
}

export default Footer