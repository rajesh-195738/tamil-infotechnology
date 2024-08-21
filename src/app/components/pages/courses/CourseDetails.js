import React, { useEffect, useState } from 'react'
import CoursesBreadCrums from '../CoursesBreadCrums';
import { Container, Row, Col, Nav, Tab, Accordion, ProgressBar, Image, Button } from 'react-bootstrap';
import "../../../../css/Courses.scss";
import CourseCard from '../CourseCard';
import Author from '../../../../assets/images/author.png';
import OnlineCls from '../../../../assets/images/online-class.jpg';
// import axios from "axios";
import { showLoader } from "../../../features/loaderSlice";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router';

const CourseDetails = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const [courseDetails, setCourseDetails] = useState([]);
  const [keyFeatures, setKeyFeatures] = useState(null);
  const [toolsCovered, setToolsCovered] = useState(null);
  const [curriculum, setCurriculum] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [courseLearning, setCourseLearning] = useState(null);
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  const [howWork, setHowWork] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const baseURL = "https://script.google.com/macros/s/AKfycbz3hwMI0BpifaZQ0OnWKIB7CcYxjSsOENzKNXYM3OqlH-CjPslPzFQxVGmTEnxlZK5yNA/exec";

  useEffect(() => {
    dispatch(showLoader({ status: true }));
    fetch(baseURL + '?action=course-details&course=' + params?.course_key + '')
      .then(response => response.json())
      .then(json => {
        setCourseDetails(json?.data[0]);
        if (json?.data[0]?.Tools_Coverd !== 'null') {
          setToolsCovered(JSON.parse(json?.data[0]?.Tools_Coverd));
        }
        if (json?.data[0]?.Key_Features !== 'null') {
          setKeyFeatures(JSON.parse(json?.data[0]?.Key_Features));
        }
        if (json?.data[0]?.Curriculum !== 'null') {
          setCurriculum(JSON.parse(json?.data[0]?.Curriculum));
        }
        if (json?.data[0]?.Testimonials !== 'null') {
          setTestimonials(JSON.parse(json?.data[0]?.Testimonials));
        }
        if (json?.data[0]?.Faq !== 'null') {
          setFaqs(JSON.parse(json?.data[0]?.Faq));
        }
        if (json?.data[0]?.Course_Learning_Path !== 'null') {
          setCourseLearning(JSON.parse(json?.data[0]?.Course_Learning_Path));
        }
        if (json?.data[0]?.Why_Choose_Us !== 'null') {
          setWhyChooseUs(JSON.parse(json?.data[0]?.Why_Choose_Us));
        }
        if (json?.data[0]?.How_Work !== 'null') {
          setHowWork(JSON.parse(json?.data[0]?.How_Work));
        }
        dispatch(showLoader({ status: false, }));
      })
      .catch(error => {
        dispatch(showLoader({ status: false, }));
        console.error(error)
      });
  }, [dispatch, params?.course_key]);

  return (
    <>
      <CoursesBreadCrums courseDetails={courseDetails} />
      <section id="course-details">
        <Container>
          <Row>
            <Col sm="12" lg="9">
              <Tab.Container id="left-tabs-example" defaultActiveKey="desc">
                <Row>
                  <Col sm="12">
                    <div className='box-shade'>
                      <Nav variant="pills" justify>
                        <Nav.Item>
                          <Nav.Link eventKey="desc">Description</Nav.Link>
                        </Nav.Item>
                        {courseLearning !== null ?
                          <Nav.Item>
                            <Nav.Link eventKey="course-learning">Course Learning Path</Nav.Link>
                          </Nav.Item>
                          : null}
                        {curriculum !== null ?
                          <Nav.Item>
                            <Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
                          </Nav.Item>
                          : null}
                        {testimonials !== null ?
                          <Nav.Item>
                            <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                          </Nav.Item>
                          : null}
                        {faqs !== null ?
                          <Nav.Item>
                            <Nav.Link eventKey="faq">Faq</Nav.Link>
                          </Nav.Item>
                          : null}
                      </Nav>
                    </div>
                  </Col>
                  <Col sm="12">
                    <Tab.Content>
                      {/* Course Description */}
                      <Tab.Pane eventKey="desc">
                        <Row>
                          {courseDetails?.About !== 'null' ?
                            <Col sm="12">
                              <h5 className="title-main3">About This Course</h5>
                              <p>
                                {courseDetails?.About}
                              </p>
                            </Col>
                            : null}
                          {keyFeatures !== null ?
                            <Col sm="12">
                              <div className="courses-details-inner mt-4 mb-4">
                                <h3 className="title">Key Features</h3>
                                {keyFeatures.map((key, i) => (
                                  <p key={i}>
                                    <i className="bi bi-check-circle-fill me-2 clr-green"></i><span className='title-content-sub'>{key?.title}:</span><br />
                                    <span className='ms-3'>-{' ' + key?.text}</span>
                                  </p>
                                ))}
                              </div>
                            </Col>
                            : null}
                          {whyChooseUs !== null ?
                            <Col sm="12">

                              <div className="courses-details-inner mt-4 mb-4">
                                <h3 className="title">Why Join this Program</h3>
                                <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designsm dolor sit amet.</p>
                                <ul className="list-wrap">
                                  {whyChooseUs.map((choose_us, i) => (
                                    <li key={i}>
                                      <h6 className='title-content-sub'>{choose_us?.title}</h6>
                                      <p className='d-flex align-items-center'><i className="clr-yellow bi bi-circle-fill ms-3 me-2 fs-9"></i>{choose_us?.text}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                            : null}
                          {toolsCovered !== null ?
                            <Col sm="12">
                              <div className="courses-details-inner mt-4 mb-4">
                                <h3 className="title">Tools Covered</h3>
                                <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designsm dolor sit amet.</p>
                                <div className="event-details-list">
                                  <ul className="list-wrap">
                                    {toolsCovered.map((features, i) => (
                                      <li key={i}><i className="bi bi-bookmark-check-fill"></i>
                                      <span className='title-content-sub'>{features?.title}</span>{features?.text ? <span className='ms-2'>{'(' + features?.text + ')'}</span> : null}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            : null}
                          {howWork !== null ?
                            <Col sm="12">
                              <div className="courses-details-inner mt-4 mb-4">
                                <h3 className="title">How does our Program work?</h3>
                                <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designsm dolor sit amet.</p>
                                <ul className="list-wrap">
                                  {howWork.map((work, i) => (
                                    <li key={i}>
                                      <h6 className='title-content-sub'>{work?.title}</h6>
                                      <p className='d-flex align-items-center'><i className="clr-yellow bi bi-circle-fill ms-3 me-2 fs-9"></i>{work?.text}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                            : null}
                        </Row>
                      </Tab.Pane>
                      {/* Key Features */}
                      {courseLearning !== null ?
                        <>
                          <Tab.Pane eventKey="course-learning">
                            <Row id="course-curriculum">
                              <Col sm="12">
                                <h5 className="title-main3">Course Learning Path</h5>
                                <p className='mb-4 mt-3'>
                                  Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                                </p>
                                {courseLearning.map((course, i) => (
                                  <div key={i}>
                                    <h6 className='title-content-sub'>{course?.course}</h6>
                                    <ul className='mb-3'>
                                      {course?.content.map((content, i) => (
                                        <li key={i}>
                                          <span className='d-flex align-items-center'><i className="clr-yellow bi bi-circle-fill ms-3 me-2 fs-9"></i>{content}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </>
                        : null}
                      {/* Course Curriculum */}
                      {curriculum !== null ?
                        <>
                          <Tab.Pane eventKey="curriculum">
                            <Row id="course-curriculum">
                              <Col sm="12">
                                <h5 className="title-main3">Course Curriculum</h5>
                                <p className='mb-4 mt-3'>
                                  Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                                </p>

                                <Accordion defaultActiveKey="0">
                                  {curriculum.map((module, i) => (
                                    <Accordion.Item key={i} eventKey={i}>
                                      <Accordion.Header>{module?.module}</Accordion.Header>
                                      <Accordion.Body>
                                        <Col sm="12">
                                          <h5 className="title-main4">{module?.titlle}</h5>
                                          {/* <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                          {/* <h5 className="title-main4 mt-2">2 Videos,1 Audio,1 Reading</h5> */}
                                          <ul className="course-title">
                                            {module?.content.map((con, i) => (
                                              <li key={i}>
                                                <i className="bi bi-file-earmark-play-fill me-2"></i>
                                                <b>Video:</b> {con} <em className="questions">2 questions</em>
                                                <em>
                                                  <i className="bi bi-clock me-2"></i>
                                                  12 minutes
                                                </em>
                                              </li>
                                            ))}
                                            {/* <li>
                                            <i className="bi bi-file-earmark-play-fill me-2"></i>
                                            <b>Video:</b> Introducing Elizabeth Gerber
                                            <em>
                                              <i className="bi bi-clock me-2"></i>
                                              26 minutes
                                            </em>
                                          </li> */}
                                          </ul>
                                        </Col>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  ))}
                                  {/* <Accordion.Item eventKey="1">
                                    <Accordion.Header>Week 2</Accordion.Header>
                                    <Accordion.Body>
                                      <Col sm="12">
                                        <h5 className="title-main4">Intermediate level</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h5 className="title-main4 mt-2">2 Videos,1 Audio,1 Reading</h5>
                                        <ul className="course-title">
                                          <li>
                                            <i className="bi bi-file-earmark-play-fill me-2"></i>
                                            <b>Video:</b> Greetings and Introductions <em className="questions">2 questions</em>
                                            <em>
                                              <i className="bi bi-clock me-2"></i>
                                              12 minutes
                                            </em>
                                          </li>
                                          <li>
                                            <i className="bi bi-file-earmark-play-fill me-2"></i>
                                            <b>Video:</b> Introducing Elizabeth Gerber
                                            <em>
                                              <i className="bi bi-clock me-2"></i>
                                              26 minutes
                                            </em>
                                          </li>
                                        </ul>
                                      </Col>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="3">
                                    <Accordion.Header>Week 3</Accordion.Header>
                                    <Accordion.Body>
                                      <Col sm="12">
                                        <h5 className="title-main4">Advanced level</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h5 className="title-main4 mt-2">2 Videos,1 Audio,1 Reading</h5>
                                        <ul className="course-title">
                                          <li>
                                            <i className="bi bi-file-earmark-play-fill me-2"></i>
                                            <b>Video:</b> Greetings and Introductions <em className="questions">2 questions</em>
                                            <em>
                                              <i className="bi bi-clock me-2"></i>
                                              12 minutes
                                            </em>
                                          </li>
                                          <li>
                                            <i className="bi bi-file-earmark-play-fill me-2"></i>
                                            <b>Video:</b> Introducing Elizabeth Gerber
                                            <em>
                                              <i className="bi bi-clock me-2"></i>
                                              26 minutes
                                            </em>
                                          </li>
                                        </ul>
                                      </Col>
                                    </Accordion.Body>
                                  </Accordion.Item> */}
                                </Accordion>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </>
                        : null}
                      {/* Course Reviews */}
                      {testimonials !== null ?
                        <>
                          <Tab.Pane eventKey="reviews">
                            <Row>
                              <Col sm="12">
                                <div className="courses-details-reviews">
                                  <h4 className="title">Student Ratings  Reviews</h4>
                                  <div className="course-rate">
                                    <div className="course-rate-summary">
                                      <div className="course-rate-summary-value">4.8</div>
                                      <div className="course-rate-summary-stars"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                      <div className="course-rate-summary-text">Total 2 Rating</div>
                                    </div>
                                    <div className="course-rate-details">
                                      <div className="course-rate-details-row">
                                        <div className="course-rate-details-row-star">5<i className="bi bi-star-fill"></i></div>
                                        <div className="course-rate-details-row-value">
                                          <ProgressBar now={80} />
                                          <span className="rating-count">2</span>
                                        </div>
                                      </div>
                                      <div className="course-rate-details-row">
                                        <div className="course-rate-details-row-star">4<i className="bi bi-star-fill"></i></div>
                                        <div className="course-rate-details-row-value">
                                          <ProgressBar now={50} />
                                          <span className="rating-count">1</span>
                                        </div>
                                      </div>
                                      <div className="course-rate-details-row">
                                        <div className="course-rate-details-row-star">3<i className="bi bi-star-fill"></i></div>
                                        <div className="course-rate-details-row-value">
                                          <ProgressBar now={0} />
                                          <span className="rating-count">0</span>
                                        </div>
                                      </div>
                                      <div className="course-rate-details-row">
                                        <div className="course-rate-details-row-star">2<i className="bi bi-star-fill"></i></div>
                                        <div className="course-rate-details-row-value">
                                          <ProgressBar now={0} />
                                          <span className="rating-count">0</span>
                                        </div>
                                      </div>
                                      <div className="course-rate-details-row">
                                        <div className="course-rate-details-row-star">1<i className="bi bi-star-fill"></i></div>
                                        <div className="course-rate-details-row-value">
                                          <ProgressBar now={0} />
                                          <span className="rating-count">0</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div id="course-reviews">
                                    <h4 className="course-review-head">Reviews {'('+testimonials?.length+')'}</h4>
                                    <ul className="list-wrap">
                                      {testimonials.map((data, i) => (
                                        <li key={i}>
                                          <div className="review-author"><Image src={Author} alt="img" /></div>
                                          <div className="review-author-info">
                                            <div className="review-stars-rated"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                            <h5 className="user-name">{data?.name} <span className="date">{data?.title}</span></h5>
                                            <p>{data?.content}</p>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </> : null}
                      {/* Course Faq */}
                      {faqs !== null ?
                        <>
                          <Tab.Pane eventKey="faq">
                            <Row id="course-faq">
                              <Col sm="12">
                                <h5 className="title-main3">Faq</h5>
                                <p className='mb-4 mt-3'>
                                  Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                                </p>
                                <Accordion defaultActiveKey="faq1">
                                  {faqs.map((faq, i) => (
                                    <Accordion.Item eventKey={i} key={i}>
                                      <Accordion.Header>{faq?.question}</Accordion.Header>
                                      <Accordion.Body>
                                        <Col sm="12">
                                          <p>{faq?.content}</p>
                                        </Col>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  ))}
                                </Accordion>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </> : null}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

            </Col>
            <Col sm="12" lg="3">
              <aside id="right-side-content">
                <div className="event-widget">
                  <div className="thumb"><Image src={OnlineCls} alt="img" />
                    <a className="popup-video" href='/#'><i className="bi bi-play-fill"></i></a></div>
                  <div className="event-cost-wrap">
                    {/* <h4 className="price"><strong>Costs:</strong>$25.00 <span>$84.99</span></h4> */}
                    <Button className="btn btn-primary tu-case btn-tamil">Enroll This Now</Button>
                    <div className="event-information-wrap">
                      <h6 className="title-main3">Include This Course</h6>
                      <ul className="list-wrap">
                        <li><i className="bi bi-clock "></i>Duration <span>5.2 Hours</span></li>
                        <li><i className="bi bi-person-vcard"></i>Estimated Seat <span>250</span></li>
                        <li><i className="bi bi-person-check"></i>Joined <span>190</span></li>
                        <li><i className="bi bi-translate"></i>Laguage <span>English</span></li>
                        <li><i className="bi bi-bookmarks"></i>Category <span>Desing</span></li>
                        <li>
                          <i className="bi bi-share"></i>Share
                          <ul className="list-wrap event-social">
                            <li><a href="/course-details#"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="/course-details#"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="/course-details#"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="/course-details#"><i className="bi bi-youtube"></i></a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='related-courses'>
        <Container>
          <Row>
            <Col sm="12">
              <h5 className="title-main3">Related Courses</h5>
            </Col>
          </Row>
          <Row>
            {[...Array(3)].map((e, i) => (
              <CourseCard key={i} colGrid={4} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CourseDetails;