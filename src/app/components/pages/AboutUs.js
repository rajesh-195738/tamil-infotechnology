import React from 'react'
import "../../../css/Pages.scss";
import BreadCrumb from './BreadCrumb';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Img1 from "../../../assets/images/about-img1.jpg";
import Img2 from "../../../assets/images/about-img2.jpg";
import Img3 from "../../../assets/images/about-img3.jpg";
import Mentors from "../../../assets/images/mentors01.png";

const AboutUs = () => {
  const breadCrumbArr = {
    title: 'About Us',
    link: [{ path: '/', page: 'Home' }],
    CurrentPage: 'About Us'
  };

  return (
    <>
      <BreadCrumb content={breadCrumbArr} />
      <section id="about-us-page">
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col sm="12" lg="5" className='mb-4'>
              <span className="sub-banner">Who we are</span>
              <h3 className='title-main2'>The Leading Global <span>Marketplace</span> for Learning and Instruction</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <Button className="btn btn-primary tu-case btn-tamil">Explore Courses</Button>
            </Col>
            <Col sm="12" lg="7">
              <div className="about-images-wrap">
                <div className="column">
                  <img src={Img1} alt="img" />
                </div>
                <div className="column">
                  <img src={Img2} alt="img" />
                  <img src={Img3} alt="img" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="achievements-container">
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col sm="12" lg="5" className='mb-4'>
              <div className='section-title text-center mb-50'>
                <span className="sub-banner">Worldwide Our Achievement</span>
                <h3 className='title-main2'>The Leading Global <span>Marketplace</span> for Learning and Instruction</h3>
              </div>
            </Col>
          </Row>
          <Row className='align-items-center justify-content-center'>
            {[...Array(3)].map((e, i) => (
              <Col sm="12" lg="3">
                <div className="fact-item-two text-center">
                  <div className="fact-icon-two"><i className="bi bi-people-fill"></i></div>
                  <div className="fact-content-two">
                    <h3 className="count"><span className="odometer"><span><span>325200</span></span></span></h3>
                    <p>Students Enrolled</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id='about-us-instructor'>
        <Container>
          <Row>
            <Col sm="12">
              <div className='mb-4 mt-2'>
                <span className="sub-banner">Our Qualified People Matter</span>
                <h3 className='title-main2'>Top <span>Class</span> Mentors</h3>
              </div>
            </Col>
          </Row>
          <Row className='align-items-center justify-content-center'>
            {[...Array(4)].map((e, i) => (
              <Col sm="12" lg="3">
                <div class="mentors-item">
                  <div class="mentors-img">
                    <a href="/instructor-details"><img src={Mentors} alt="mentor" /></a>
                    <div class="mentors-social">
                      <span class="share"><i class="bi bi-share"></i></span>
                      <ul class="social-list list-wrap">
                        <li><a href="/about-us#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="/about-us#"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="/about-us#"><i class="bi bi-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="mentors-content">
                    <div class="mentors-content-top">
                      <h4 class="name"><a href="/instructor-details">Robert Smith</a></h4>
                      <span class="designation">Graphic Design</span>
                    </div>
                    <div class="mentors-content-bottom">
                      <ul class="list-wrap">
                        <li class="students"><i class="bi bi-person"></i>1,135 Students</li>
                        <li class="rating"><i className="bi bi-star-fill"></i><span class="rating-count">(5.0)</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs