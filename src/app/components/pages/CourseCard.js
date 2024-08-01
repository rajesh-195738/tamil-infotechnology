import React, { useEffect } from 'react'
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Course01 from '../../../assets/images/course01.jpg';
import Author from '../../../assets/images/author.png';
import '../../../css/LandingPage.scss'

const CourseCard = (props) => {
    const { colGrid } = props;
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <>
            <Col sm="12" lg={colGrid} id="courseCard">
                <div className="courses-item-two shine-animate-item" data-aos="zoom-in-up">
                    <div className="courses-item-two-thumb">
                        <Link className="shine-animate-link" to="/course/1">
                            <Image src={Course01} alt="img" />
                        </Link>
                        <div className="course-price">
                            <svg viewBox="0 0 104 34" fill="none" x="0px" y="0px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5689 2.56089L0 34H99C101.761 34 104 31.7614 104 29V0H21.9336C20.1223 0 18.4525 0.979667 17.5689 2.56089Z" fill="currentColor"></path></svg>
                            <h3 className="price">$29.00</h3>
                        </div>
                    </div>
                    <div className="courses-item-two-content">
                        <Link className="courses-item-tag" to="/index-2#">Design</Link>
                        <h5 className="title">
                            <a href="/course/1">Bigener Adobe Illustrator for Graphic Design</a>
                        </h5>
                        <ul className="courses-item-meta list-wrap"><li>
                            <i className="bi bi-journal-text"></i> 05</li>
                            <li><i className="bi bi-clock"></i> 12h 30m</li>
                            <li><i className="bi bi-people"></i> 35</li>
                        </ul>
                        <div className="courses-item-bottom">
                            <div className="author">
                                <Link to="/index-2#">
                                    <Image src={Author} alt="img" />
                                </Link>
                                <a href="/index-2#">David Millar</a>
                            </div>
                            <div className="courses-item-rating">
                                <i className="bi bi-star-fill"></i><span className="rating-count">(4.2)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default CourseCard