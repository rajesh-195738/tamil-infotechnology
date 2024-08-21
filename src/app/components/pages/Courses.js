import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../css/Courses.scss";
import Form from 'react-bootstrap/Form';
import CourseCard from './CourseCard';
import BreadCrumb from './BreadCrumb';
// import axios from "axios";
import { showLoader } from "../../features/loaderSlice";
import { useDispatch } from "react-redux";

const Courses = () => {
  const dispatch = useDispatch();
  const breadCrumbArr = {
    title: 'Courses',
    link: [{ path: '/', page: 'Home' }],
    CurrentPage: 'Course'
  };
  const baseURL = "https://script.google.com/macros/s/AKfycbz3hwMI0BpifaZQ0OnWKIB7CcYxjSsOENzKNXYM3OqlH-CjPslPzFQxVGmTEnxlZK5yNA/exec";
  const [data, setData] = useState(null);

  useEffect(() => {
    dispatch(showLoader({ status: true }));
    fetch(baseURL + '?action=course-list')
      .then(response => response.json())
      .then(json => {
        dispatch(showLoader({ status: false }));
        console.log(json?.data);
        setData(json?.data);
      })
      .catch(error => {
        console.error(error);
        dispatch(showLoader({ status: false }))
      });
  }, [dispatch]);

  return (
    <>
      <BreadCrumb content={breadCrumbArr} />
      <section id="course-list">
        <Container>
          <Row className='shorting-course align-items-center'>
            <Col sm="12" lg="2">
              <div className="all-icons">
                <div className="list-icons">
                  <i className="bi bi-filter-circle-fill"></i>
                </div>
                <div className="result-count">Filters</div></div>
            </Col>
            <Col sm="12" lg="10">
              <div className='course-filters'>
                {/* <label>Course Type</label> */}
                <Form.Select>
                  <option>Course Type</option>
                  <option>Digital Marketing</option>
                  <option>Front-end</option>
                  <option>Back-end</option>
                  <option>Data Science</option>
                  <option>Automation & Testing</option>
                </Form.Select>
                <Form.Select>
                  {data ?
                    <>
                    <option>All Courses</option>
                      {data.map((course, i) => (
                        <option key={i}>{course?.Course_Title}</option>
                      ))}
                    </>
                    : null}
                </Form.Select>
                {/* <Form.Select>
                  <option>Default select</option>
                </Form.Select>
                <Form.Select>
                  <option>Default select</option>
                </Form.Select> */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="12">
              <div className="d-flex">
                <div className="me-auto bd-highlight mt-2">
                  <p className='info-text-medium'>We found {data?.length} courses available for you</p>
                </div>
                <div className="p-2 bd-highlight">
                  <Form.Select>
                    <option>Sortby: Default</option>
                    <option>Sortby: Popularity</option>
                    <option>Sortby: Rating</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
            {data?.length > 0 ?
              <>
                {data.map((course, i) => (
                  <CourseCard key={i} courseDetails={course} colGrid={3} />
                ))}
              </>
              :
              <p className='text-center'>No Course Found</p>
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Courses