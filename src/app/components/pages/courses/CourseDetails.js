import React from 'react'
import CoursesBreadCrums from '../CoursesBreadCrums';
import { Container, Row, Col, Nav, Tab, Accordion, ProgressBar, Image, Button } from 'react-bootstrap';
import "../../../../css/Courses.scss";
import CourseCard from '../CourseCard';
import Author from '../../../../assets/images/author.png';
import OnlineCls from '../../../../assets/images/online-class.jpg';

const CourseDetails = () => {
  const breadCrumbArr = {
    title: 'Reacr ',
    link: [{ path: '/', page: 'Home' }],
    CurrentPage: 'About Us'
  };
  return (
    <>
      <CoursesBreadCrums content={breadCrumbArr} />
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
                        <Nav.Item>
                          <Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="faq">Faq</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </Col>
                  <Col sm="12">
                    <Tab.Content>
                      {/* Course Description */}
                      <Tab.Pane eventKey="desc">
                        <Row>
                          <Col sm="12">
                            <h5 className="title-main3">About This Course</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              <br />
                              <br />

                              Sed ut perspiciatis unde om nis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo in ve ntore veritatis et qua architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neu e porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur ad ipisci velit, sed quia non numquame senius modi tempora incidunt ut labore et dolore magnam.
                            </p>
                          </Col>
                          <Col sm="12">
                            <div className="courses-details-inner mt-4 mb-4">
                              <h3 className="title">What Will You Learn?</h3>
                              <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designsm dolor sit amet.</p>
                              <div className="event-details-list">
                                <ul className="list-wrap">
                                  <li><i className="bi bi-bookmark-check-fill"></i>Become a UX designer.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Create quick wireframes.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>You will be able to add UX designe</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Downloadable exercise files</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Become a UI designer.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Build a UX project from beginning to end.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Build  test a full website design.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Learn to design websites  mobile</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Create your first UX brief  persona.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>All the techniques used by UX professionals</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>How to use premade UI kits.</li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col sm="12">
                            <div className="courses-details-inner">
                              <h3 className="title">Requirements</h3>
                              <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes</p>
                              <div className="event-details-list">
                                <ul className="list-wrap">
                                  <li><i className="bi bi-bookmark-check-fill"></i>Become a UX designer.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Create quick wireframes.</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>You will be able to add UX designe</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Downloadable exercise files</li>
                                  <li><i className="bi bi-bookmark-check-fill"></i>Become a UI designer.</li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          {/* <Col sm="12">
                            <div className="course-details-video">
                              <iframe width="100%" height="400" src="https://www.youtube.com/embed/CmzKQ3PSrow?si=zigvRHo8UphhkDDj" title="YouTube video player" allow="accelerometer"></iframe>
                            </div>
                          </Col> */}
                        </Row>
                      </Tab.Pane>

                      {/* Course Curriculum */}
                      <Tab.Pane eventKey="curriculum">
                        <Row id="course-curriculum">
                          <Col sm="12">
                            <h5 className="title-main3">Course Curriculum</h5>
                            <p className='mb-4 mt-3'>
                              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                            </p>
                            <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>Week 1</Accordion.Header>
                                <Accordion.Body>
                                  <Col sm="12">
                                    <h5 className="title-main4">Beginners level</h5>
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
                              <Accordion.Item eventKey="1">
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
                              </Accordion.Item>
                            </Accordion>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      {/* Course Reviews */}
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
                                <h4 className="course-review-head">Reviews (02)</h4>
                                <ul className="list-wrap">
                                  <li>
                                    <div className="review-author"><Image src={Author} alt="img" /></div>
                                    <div className="review-author-info">
                                      <div className="review-stars-rated"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                      <h5 className="user-name">Admin <span className="date">August 5, 2023</span></h5>
                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="review-author"><Image src={Author} alt="img" /></div>
                                    <div className="review-author-info">
                                      <div className="review-stars-rated"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                      <h5 className="user-name">Admin <span className="date">August 5, 2023</span></h5>
                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      {/* Course Faq */}
                      <Tab.Pane eventKey="faq">
                        <Row id="course-faq">
                          <Col sm="12">
                            <h5 className="title-main3">Faq</h5>
                            <p className='mb-4 mt-3'>
                              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                            </p>
                            <Accordion defaultActiveKey="faq1">
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>What are the different types of course?</Accordion.Header>
                                <Accordion.Body>
                                  <Col sm="12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Col>
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="faq2">
                                <Accordion.Header>What makes Tamil info Teachnology different from other?</Accordion.Header>
                                <Accordion.Body>
                                  <Col sm="12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Col>
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="faq3">
                                <Accordion.Header>What are the main features of Tamil info Technology?</Accordion.Header>
                                <Accordion.Body>
                                  <Col sm="12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Col>
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="faq4">
                                <Accordion.Header>How will Tamil info Technology help me in the academic?</Accordion.Header>
                                <Accordion.Body>
                                  <Col sm="12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Col>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Col>
                        </Row>
                      </Tab.Pane>
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