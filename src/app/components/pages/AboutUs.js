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
              <p>At Tamil Info Technology, we believe that education is the foundation of a successful career. Founded with the vision of empowering individuals through high-quality technical education, we have grown into one of Tamilnadu's leading training institutes. Our mission is to bridge the gap between academic learning and industry requirements by providing practical, hands-on training that prepares our students for real-world challenges. With a focus on innovation, we continually update our curriculum to include the latest technologies and industry practices, ensuring our students are always at the cutting edge of the tech world.</p>
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
            <Col sm="12" lg="12" className='mb-4'>
              <div className='section-title text-center mb-50'>
                {/* <span className="sub-banner">Worldwide Our Achievement</span> */}
                <h3 className='title-main2'>Worldwide Our <span>Achievement</span></h3>
                <p>Since our inception, Tamil Info Technology has made significant strides in technical education. We have trained over 5,000 students who are now thriving in their respective careers across the globe. Our alumni network spans various industries, from IT and finance to healthcare and engineering, and they are making a difference in companies like Infosys, TCS, CTS, and many more. Our programs are recognized for their excellence, and we are proud to have partnerships with leading tech companies, enabling us to offer our students unmatched opportunities for growth and development. Our achievements are a testament to our commitment to quality education and the success of our students.</p>
              </div>
            </Col>
          </Row>
          <Row className='align-items-center justify-content-center'>
            {[...Array(3)].map((e, i) => (
              <Col sm="12" lg="3" key={i}>
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
                <p>Our mentors are at the heart of Tamil Info Technology's success. Our team consists of industry veterans with years of experience in top companies around the world. They bring a wealth of knowledge and real-world expertise to the classroom, providing our students with insights that go beyond textbooks. Our mentors are not just instructors; they are guides who are deeply invested in the success of each student. They provide personalized coaching, helping students overcome challenges and reach their full potential. With their guidance, our students gain the confidence and skills needed to excel in the fast-paced tech industry.</p>
              </div>
            </Col>
          </Row>
          <Row className='align-items-center justify-content-center'>
            {[...Array(4)].map((e, i) => (
              <Col sm="12" lg="3" key={i}>
                <div className="mentors-item">
                  <div className="mentors-img">
                    <a href="/instructor-details"><img src={Mentors} alt="mentor" /></a>
                    <div className="mentors-social">
                      <span className="share"><i className="bi bi-share"></i></span>
                      <ul className="social-list list-wrap">
                        <li><a href="/about-us#"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="/about-us#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="/about-us#"><i className="bi bi-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mentors-content">
                    <div className="mentors-content-top">
                      <h4 className="name"><a href="/instructor-details">Robert Smith</a></h4>
                      <span className="designation">Graphic Design</span>
                    </div>
                    <div className="mentors-content-bottom">
                      <ul className="list-wrap">
                        <li className="students"><i className="bi bi-person"></i>1,135 Students</li>
                        <li className="rating"><i className="bi bi-star-fill"></i><span className="rating-count">(5.0)</span></li>
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