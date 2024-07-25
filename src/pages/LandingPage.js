import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Button, Nav, Tab, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/LandingPage.scss';
import BanneImage from "../assets/images/banner_img.png";
import Notepad from "../assets/images/notepad.png";
import Scale from "../assets/images/scale.png";
import SwingArrow from "../assets/images/arrow.png";
import Globe from "../assets/images/globe.png";
import Design from "../assets/images/design.png";
import About1 from "../assets/images/about_1.png";
import About2 from "../assets/images/about_2.png";
import OnlineClass from "../assets/images/online-class.jpg";
import ClassButtons from "../assets/images/online-call-buttons.png";
import Shape from '../assets/images/shape.png';
import Shape2 from '../assets/images/shape-online-2.png';
import CourseCard from './CourseCard';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  return (
    <>
      {/* Banner Section */}
      <section id="banner">
        <Container>
          <Row>
            <Col sm="12" lg="6" >
              <div className="banner-content" data-aos="fade-right" data-aos-duration="1800" data-aos-offset="200" >
                <Image src={Globe} className="shape" />
                <Image src={Design} className="shape" />
                <span className="sub-banner">100% Satisfaction Guarantee</span>
                <h1 className="title">Learn Course Online <br /><span>New Today</span></h1>
                <p>We help organizations across private, public, and social sectors create on the Change that Matters most to them.</p>
                <div className="explore-course-banner">
                  <Button className="btn btn-primary tu-case btn-tamil">Explore Courses</Button>
                  <div className="banner-phone"><i className="bi bi-telephone"></i><div className="number-info"><span>Have any Question?</span><h6 className="number"><a href="tel:739-75-04062">739-75-04062</a></h6></div></div>
                </div>
              </div>
            </Col>
            <Col sm="12" lg="6">
              <div className="banner-img">
                <Image src={BanneImage} className="main-img" />
                <Image src={Notepad} className="floating-img" data-aos="fade-down" />
                <Image src={Scale} className="floating-img" />
                <Image src={SwingArrow} className="floating-img" data-aos="fade-down" />
                <div className="banner-fact">
                  <div className="banner-fact-item" data-aos="zoom-in-up">
                    <div className="icon">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="info">
                      <span>Total Students</span>
                      <h4 className="count">15K</h4>
                    </div>
                  </div>
                  <div className="banner-fact-item" data-aos="zoom-in-up">
                    <div className="icon">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="info">
                      <span>Complete Graduation</span>
                      <h4 className="count">34K</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="12" lg="6">
              <div className='about-images'>
                <Image src={About1} className='small-img' data-aos="zoom-in-up" />
                <Image src={About2} className='big-img' data-aos="fade-up" />
                <div className="about-exp" data-aos="zoom-in-up">
                  <svg width="126" height="108" viewBox="0 0 126 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H110.996C116.321 0 120.713 4.17312 120.983 9.4914L125.429 96.7793C125.733 102.754 120.758 107.657 114.789 107.267L9.34719 100.369C4.08901 100.025 0 95.6593 0 90.3899V10Z" fill="currentcolor">
                    </path>
                  </svg>
                  <h4 className="year">12 +</h4>
                  <p>Years of Experiences</p>
                </div>
              </div>
            </Col>
            <Col sm="12" lg="6" data-aos="zoom-in-up">
              <div className='about-content'>
                <span className="sub-banner">100% Satisfaction Guarantee</span>
                <h3 className='title-main2'>A Successful <span>Software Development</span> Process</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <ul className="about-info-list list-wrap">
                  <li className="about-info-list-item">
                    <div className="icon">
                      <i className="bi bi-person-workspace"></i>
                    </div>
                    <p className="content">2000+ <br /> Expert Tutors</p>
                  </li>
                  <li className="about-info-list-item">
                    <div className="icon"><i className="bi bi-journal-bookmark-fill"></i></div>
                    <p className="content">1500+ <br /> Top Lessons</p>
                  </li>
                  <li className="about-info-list-item">
                    <div className="icon">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <p className="content">18000+ <br /> Over Students</p>
                  </li>
                  <li className="about-info-list-item">
                    <div className="icon">
                      <i className="bi bi-play-btn"></i>
                    </div>
                    <p className="content">3200+ <br /> Pro Videos</p>
                  </li>
                </ul>
                <Button className="btn btn-primary tu-case btn-tamil mt-5">Discover More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section id="joinUs">
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col sm="12" lg="6" data-aos="zoom-in-right">
              <span className="sub-banner">100% Satisfaction Guarantee</span>
              <h3 className='title-main2'>Online Learning Courses <span>Designed</span> For Real Life</h3>
              <Row>
                {[...Array(4)].map((e, i) => (
                  <Col sm="12" lg="6" key={i}>
                    <Card className='card-joinus'>
                      <p><i className="bi bi-telephone"></i></p>
                      <h4 className='mt-2'>Self Paced Courses</h4>
                      <span className='mt-2'>Learn & Upskill via Online Courses</span>
                      <Link className='mt-2'>Take a look<i className="bi bi-arrow-right"></i></Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm="12" lg="6" data-aos="zoom-in-up">

            </Col>
          </Row>
        </Container>
      </section>

      {/* Courses Info Section */}
      <section id="courses-info">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="12" lg="7" data-aos="zoom-in-right">
              <div className="online-image-wrap">
                <div className="main-img">
                  <Image src={OnlineClass} alt="img" />
                </div>
                <Image src={ClassButtons} alt="img" className="icons position-absolute" />
                <Image src={Shape} alt="shape" className="left-shape position-absolute tg-motion-effects3 moving-animo1" />

              </div>
            </Col>
            <Col sm="12" lg="5" data-aos="zoom-in-up">
              <div className='online-content'>
                <span className="sub-banner">100% Satisfaction Guarantee</span>
                <h3 className='title-main2'>Online Learning Courses <span>Designed</span> For Real Life</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                <Button className="btn btn-primary tu-case btn-tamil mt-2">Discover More</Button>
                <Image src={Shape2} className='right-shape position-absolute tg-motion-effects5 moving-animo1' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Courses Section */}
      <section id="courses">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="popular">

            <Row className="align-items-center justify-content-center">
              <Col sm="12" lg="6">
                <span className="sub-banner">Learn Tech from Latest Courses</span>
                <h3 className='title-main2 mt-2'>Explore 175+ Premium Courses with <span>New Course Additions</span> every Month.</h3>
              </Col>
              <Col sm="12" lg="6">
                <Nav variant="pills" justify>
                  <Nav.Item>
                    <Nav.Link eventKey="popular">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ml">Marketing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="data-science">Development</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} className='mt-4'>
                <Tab.Content>
                  <Tab.Pane eventKey="popular">
                    <Row>
                      {[...Array(7)].map((e, i) => (
                        <CourseCard key={i} colGrid={3} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ml">
                    <Row>
                      {[...Array(2)].map((e, i) => (
                        <CourseCard key={i} colGrid={3} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="data-science">
                    <Row>
                      {[...Array(5)].map((e, i) => (
                        <CourseCard key={i} colGrid={3} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

        </Container>
      </section>
    </>
  )
}

export default LandingPage