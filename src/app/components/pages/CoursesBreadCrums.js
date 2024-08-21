import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Author from '../../../assets/images/author.png';

const CoursesBreadCrums = (props) => {
    const { courseDetails } = props;
    return (
        <>
            <section id="courses-breadcrums">
                <div className="courses-breadcrumb-area">
                    <Container>
                        <Row>
                            <Col sm="8">
                                <div className="courses-breadcrumb-content">
                                    <a className="category" href="/course-details#">Graphic Design</a>
                                    <h3 className="title">{courseDetails?.Course_Title}</h3>
                                    <p>{courseDetails?.Overview}</p>
                                    <div className="buy-course mt-2">
                                        <p className="buy-course-heading mb-0">Buy this Course @</p>
                                        <div className="d-flex align-items-center buy-course-body">
                                            <div>
                                                <p className="me-3 actual-price"><del>₹2000</del></p>
                                            </div>
                                            <div>
                                                <p className="me-3 discount discount-price">₹199</p>
                                            </div>
                                            <div>
                                                <p className="badge price-savings">You Save ₹<span className="saved-amount">1801</span>!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="courses-item-meta list-wrap">
                                        <li>
                                            <div className="author">
                                                <a href="/course-details#">
                                                    <Image src={Author} alt="img" />
                                                </a>
                                                <a href="/course-details#">Arian Hok</a></div>
                                        </li>
                                        <li>
                                            <i className="flaticon-file"></i> 19
                                        </li>
                                        <li>
                                            <i className="flaticon-timer"></i> 10h 30m
                                        </li>
                                        <li>
                                            <i className="flaticon-user-1"></i> 18
                                        </li>
                                        <li>
                                            <div className="rating"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><span className="rating-count">(4.8)</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default CoursesBreadCrums