import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../css/LandingPage.scss';
import BanneImage from "../../../assets/images/banner_img.png";
import Notepad from "../../../assets/images/notepad.png";
import Scale from "../../../assets/images/scale.png";
import SwingArrow from "../../../assets/images/arrow.png";
import Globe from "../../../assets/images/globe.png";
import Design from "../../../assets/images/design.png";
import About1 from "../../../assets/images/about_1.png";
import About2 from "../../../assets/images/about_2.png";
import OnlineClass from "../../../assets/images/online-class.jpg";
import ClassButtons from "../../../assets/images/online-call-buttons.png";
import Shape from '../../../assets/images/shape.png';
import Shape2 from '../../../assets/images/shape-online-2.png';
import JoinUs from '../../../assets/images/join-us.jpg';
// import Subscribe from '../../../assets/images/subscribe.png';
import Mentors from "../../../assets/images/mentors01.png";
// import CourseCard from './CourseCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';


const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


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
                <h1 className="title">Welcome to <br /><span>Tamil Info Technology</span></h1>
                <p>At Tamil Info Technology, we are committed to transforming lives through our comprehensive training programs tailored to meet the needs of today's tech-driven world.</p>
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
                <span className="sub-banner">About Us</span>
                <h3 className='title-main2'>Empowering the <span>Next Generation of Tech Professionals</span></h3>
                <p>At Tamil Info Technology, we are committed to transforming lives through our comprehensive training programs tailored to meet the needs of today's tech-driven world. Our goal is to bridge the gap between education and industry requirements, ensuring our students are not just job-ready but are equipped to thrive in their chosen careers. Join us and be part of a community dedicated to innovation, learning, and success.</p>
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

      <section id="why-choose">
        <Container>
          <Row className=''>
            <Col sm="12" lg="8" className='mb-4'>
              <span className="sub-banner">100% Satisfaction Guarantee</span>
              <h3 className='title-main2'><span>Why Choose</span> Tamil Info Technology?</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <div className='icon-why-choose d-flex align-items-center'>
                    <i className="bi bi-file-earmark-person-fill"></i>
                    <h4 className='ms-2 title-main4'>1. Industry-Aligned Curriculum</h4>
                  </div>
                  <p>Our courses are designed by industry experts to ensure that the knowledge and skills you gain are directly applicable to the current job market. We regularly update our curriculum to reflect the latest trends and technologies, making sure our students are always ahead of the curve.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <div className='icon-why-choose d-flex align-items-center'>
                    <i className="bi bi-file-earmark-person-fill"></i>
                    <h4 className='ms-2 title-main4'>2. Expert Instructors</h4>
                  </div>
                  <p>Our instructors bring years of industry experience and a passion for teaching. They are dedicated to providing personalized guidance and support, helping you navigate the complexities of the tech world and achieve your career goals.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <div className='icon-why-choose d-flex align-items-center'>
                    <i className="bi bi-file-earmark-person-fill"></i>
                    <h4 className='ms-2 title-main4'>3. 100% Placement Assistance</h4>
                  </div>

                  <p>We don’t just stop at training. Our dedicated placement team works tirelessly to connect you with top companies in the industry. From resume building to interview preparation, we provide comprehensive support to help you secure your dream job.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <div className='icon-why-choose d-flex align-items-center'>
                    <i className="bi bi-file-earmark-person-fill"></i>
                    <h4 className='ms-2 title-main4'>4. Hands-On Learning</h4>
                  </div>
                  <p>We believe in learning by doing. Our courses are packed with real-world projects and case studies that allow you to apply what you learn in a practical context, ensuring you gain valuable hands-on experience.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <div className='icon-why-choose d-flex align-items-center'>
                    <i className="bi bi-file-earmark-person-fill"></i>
                    <h4 className='ms-2 title-main4'>5. Affordable Learning</h4>
                  </div>
                  <p>Quality education should be accessible to everyone. We offer competitive pricing and flexible payment options to make sure you can invest in your future without breaking the bank.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Courses Info Section */}
      <section id="courses-info">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="12" lg="6" data-aos="zoom-in-right">
              <div className="online-image-wrap">
                <div className="main-img">
                  <Image src={OnlineClass} alt="img" />
                </div>
                <Image src={ClassButtons} alt="img" className="icons position-absolute" />
                <Image src={Shape} alt="shape" className="left-shape position-absolute tg-motion-effects3 moving-animo1" />

              </div>
            </Col>
            <Col sm="12" lg="6" data-aos="zoom-in-up">
              <div className='online-content'>
                <span className="sub-banner">Worldwide Our Achievement</span>
                <h3 className='title-main2'>Online Learning Courses <span>Designed</span> For Real Life</h3>
                <p>Since our inception, Tamil Info Technology has made significant strides in technical education. We have trained over 5,000 students who are now thriving in their respective careers across the globe. Our alumni network spans various industries, from IT and finance to healthcare and engineering, and they are making a difference in companies like Infosys, TCS, CTS, and many more. Our programs are recognized for their excellence, and we are proud to have partnerships with leading tech companies, enabling us to offer our students unmatched opportunities for growth and development. Our achievements are a testament to our commitment to quality education and the success of our students.</p>

                <Button className="btn btn-primary tu-case btn-tamil mt-2">Discover More</Button>
                <Image src={Shape2} className='right-shape position-absolute tg-motion-effects5 moving-animo1' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="joinUs">
        <Container>
          <Row className=''>
            <Col sm="12" lg="8" className='mb-4'>
              <span className="sub-banner">100% Satisfaction Guarantee</span>
              <h3 className='title-main2'>Our Programs</h3>
            </Col>
            {/* <Col sm="12" lg="4">
              <div className="d-flex justify-content-end">
                <Button className="btn btn-primary tu-case btn-tamil">All Categories</Button>
              </div>
            </Col> */}
          </Row>
          <Row className='justify-content-center'>
            <Col sm="12" lg="6">
              <div className="categories-item-two tg-svg" data-aos="fade-up">
                <a href="/courses">
                  <div className="icon"><i className="bi bi-bar-chart"></i></div>
                  <div className="info"><span className="name">1. Data Science Mastery</span><span className="courses">Unlock the power of data with our Data Science Mastery program. Learn how to analyze complex data sets, build predictive models, and drive business decisions with data-driven insights.</span></div>
                </a>
              </div>
            </Col>
            <Col sm="12" lg="6">
              <div className="categories-item-two tg-svg" data-aos="fade-up">
                <a href="/courses">
                  <div className="icon"><i className="bi bi-layers"></i></div>
                  <div className="info"><span className="name">2. Full Stack Web Development</span><span className="courses">Become a versatile developer with our Full Stack Web Development program. Master both front-end and back-end technologies to create dynamic and responsive web applications.</span></div>
                </a>
              </div>
            </Col>
            <Col sm="12" lg="6">
              <div className="categories-item-two tg-svg" data-aos="fade-up">
                <a href="/courses">
                  <div className="icon"><i className="bi bi-cpu"></i></div>
                  <div className="info"><span className="name">3. AI & Machine Learning</span><span className="courses">Step into the future with our AI & Machine Learning program. Learn how to build intelligent systems that can learn from data and make decisions with minimal human intervention.</span></div>
                </a>
              </div>
            </Col>
            <Col sm="12" lg="6">
              <div className="categories-item-two tg-svg" data-aos="fade-up">
                <a href="/courses">
                  <div className="icon"><i className="bi bi-file-earmark-lock"></i></div>
                  <div className="info"><span className="name">4. Cybersecurity</span><span className="courses">Protect organizations from digital threats with our Cybersecurity program. Learn the latest techniques and tools to safeguard sensitive data and ensure the integrity of information systems.</span></div>
                </a>
              </div>
            </Col>
            <Col sm="12" lg="6">
              <div className="categories-item-two tg-svg" data-aos="fade-up">
                <a href="/courses">
                  <div className="icon"><i className="bi bi-clouds"></i></div>
                  <div className="info"><span className="name">5. Cloud Computing & DevOps</span><span className="courses">Gain expertise in cloud computing and DevOps with our comprehensive program. Learn how to design, deploy, and manage cloud infrastructure, and streamline software development processes.</span></div>
                </a>
              </div>
            </Col>
            {/* <Col sm="12" lg="6">
              <div className="categories-item-two tg-svg" data-aos="fade-up">
                <a href="/courses">
                  <div className="icon"><i className="bi bi-filetype-py"></i></div>
                  <div className="info"><span className="name">Python - IITM Pravartak Certified</span><span className="courses">Learn Selenium, Python, Java & more</span></div>
                </a>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      {/* <section id="subscribe">
        <Container>
          <div className="cta-inner cta-inner-2 blue-bg o-h">
            <div className="cta-shape"><img src={Subscribe} alt="" /></div>
            <div className="row align-items-center">
              <Col sm="12" lg="7">
                <div className="cta-content">
                  <h3 className="cta-title">Start learning by Downloading Apps.</h3>
                </div>
              </Col>
              <Col sm="12" lg="5" className='d-flex align-item-center justify-content-center z-99'>                
                  <div className="form-grp">
                    <input name="subject" type="text" placeholder="Your email address" required="" />
                  </div>
                  <button className="btn btn-tamil"><i className="bi bi-arrow-right-short"></i></button>                
              </Col>
            </div>
          </div>
        </Container>
      </section> */}
      {/* Courses Section */}
      {/* <section id="courses">
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
      </section> */}
      <section id='course-reviews-landing'>
        <Container>
          <Row>
            <Col sm="12">
              <div className='mb-5'>
                <span className="sub-banner">Our Success</span>
                <h3 className='title-main2'>Our <span>Success Stories</span></h3>
                <p>Since our inception, Tamil Info Technology has made significant strides in technical education. We have trained over 5,000 students who are now thriving in their respective careers across the globe. Our alumni network spans various industries, from IT and finance to healthcare and engineering, and they are making a difference in companies like Infosys, TCS, CTS, and many more. Our programs are recognized for their excellence, and we are proud to have partnerships with leading tech companies, enabling us to offer our students unmatched opportunities for growth and development. Our achievements are a testament to our commitment to quality education and the success of our students.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Carousel responsive={responsive} showDots={true}>
                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Rajesh Kumar <br /><span className="date">From Fresher to Data Scientist</span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“Rajesh joined our Data Science Mastery program as a fresh graduate. With no prior experience, he was able to master complex concepts in data analytics and secure a Data Scientist role at a leading IT firm. Today, Rajesh is a key player in his company’s analytics team, driving critical business decisions with data-driven insights.”</p></div>
                  </div>
                </div>
                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Priya Dharshini <br /><span className="date">Transitioning from Non-IT to IT</span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“Priya was working in a non-IT field when she decided to change her career path. She enrolled in our Full Stack Web Development program and, with dedicated effort, transitioned into an IT role within six months. Priya is now a successful web developer at a multinational company.”</p></div>
                  </div>
                </div>

                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Suresh Babu <br /><span className="date">Achieving Work-Life Balance</span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“Suresh, a mid-career professional, was struggling to keep up with the demands of his job and personal life. Our Cloud Computing & DevOps program helped him acquire skills that not only improved his job performance but also allowed him to find a role with better work-life balance. Suresh now works as a Cloud Engineer with a flexible work schedule.”</p></div>
                  </div>
                </div>

                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Anitha M <br /><span className="date">A New Career After a Career Break</span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“After taking a break from her career to raise her children, Anitha faced challenges in returning to the workforce. She joined our AI & Machine Learning program and, with our support, secured a position as an AI Engineer in a reputed tech company. Anitha’s story is a testament to the fact that it’s never too late to restart your career.”</p></div>
                  </div>
                </div>

                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Karthik Rajan<br /><span className="date">Moving from Technician to IT Specialist </span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“Karthik, a technician with limited IT knowledge, wanted to upskill and move into a more technical role. He joined our Cybersecurity program and is now working as a Security Analyst, helping organizations protect their data and IT infrastructure.”</p></div>
                  </div>
                </div>

                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Divya S<br /><span className="date">Entrepreneurial Success </span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“Divya had always dreamt of starting her own tech business. After completing our Full Stack Web Development program, she launched her own successful web development agency. Today, Divya’s agency serves clients across the globe, providing innovative web solutions.”</p></div>
                  </div>
                </div>

                <div>
                  <div className="review-author-info">
                    <div className='text-center'>
                      <div className='quotes'><i className="bi bi-quote"></i></div>
                      <h5 className="user-name">Vijay Anand<br /><span className="date">Mastering Data Science for Career Growth </span></h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <p>“Vijay, already an experienced IT professional, wanted to specialize in data science to advance his career. Our Data Science Mastery program equipped him with the advanced skills needed to transition into a Data Scientist role, where he now leads a team in a top-tier tech company.”</p></div>
                  </div>
                </div>

              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='about-us-instructor' className='clr-blue-shade'>
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

      <section id="testimonials">
        <Container>
          <Row>
            <Col sm="12">
              <div className='mb-5 mt-2'>
                <span className="sub-banner">Testimonials</span>
                <h3 className='title-main2'>What Our <span>Students</span> Say</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card className='text-center h-100'>
                <Card.Body>
                  <p><span><i className="bi bi-quote"></i></span>Tamil Info Technology has truly transformed my career. The hands-on learning and personalized support from the instructors were invaluable. I couldn’t have asked for a better place to learn and grow.</p>
                </Card.Body>
                <Card.Footer className='stu-name'>
                  <h5>Rajesh Kumar</h5>
                  <h6>Data Scientist</h6>
                </Card.Footer>
              </Card>
            </Col>
            <Col sm="4">
              <Card className='text-center h-100'>
                <Card.Body>
                  <p><i className="bi bi-quote"></i>The placement assistance provided by Tamil Info Technology was exceptional. They didn’t just help me find a job, they helped me find the right job. </p>
                </Card.Body>
                <Card.Footer className='stu-name'>
                  <h5>Priya Dharshini</h5>
                  <h6>Web Developer</h6>
                </Card.Footer>
              </Card>
            </Col>
            <Col sm="4">
              <Card className='text-center h-100'>
                <Card.Body>
                  <p><i className="bi bi-quote"></i>I was able to start a new career in IT thanks to Tamil Info Technology. Their flexible learning options made it possible for me to study while managing my personal responsibilities.</p>
                </Card.Body>
                <Card.Footer className='stu-name'>
                  <h5>Anitha M</h5>
                  <h6>AI Engineer</h6>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id='join-us-today'>
            <Container>
              <Row className="align-items-center justify-content-center">
              <Col sm="5 jus">
              <Image src={JoinUs} className="main-img" />
              </Col>
                <Col sm="7">
                  <div className='mt-2'>
                    <span className="sub-banner">Join Us Today</span>
                    <h3 className='title-main2'>Ready to <span>Transform</span> Your Life?</h3>
                    <p>Take the first step towards a successful career in technology. Whether you are looking to upskill, change careers, or start fresh, Tamil Info Technology has the right program for you. Join us today and start your journey to success.</p>
                    <Nav.Link as={Link} to="contact-us"><Button className="btn btn-primary tu-case btn-tamil">Join Us</Button></Nav.Link>
                  </div>
                </Col>
              </Row>
            </Container>
      </section>
    </>
  )
}

export default LandingPage