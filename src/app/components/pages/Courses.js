import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../css/Courses.scss";
import Form from 'react-bootstrap/Form';
import CourseCard from './CourseCard';
import BreadCrumb from './BreadCrumb';

const Courses = () => {
  const breadCrumbArr = {
    title: 'Courses',
    link: [{ path: '/', page: 'Home' }],
    CurrentPage: 'Course'
  };

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
                <Form.Select>
                  <option>Default select</option>
                </Form.Select>
                <Form.Select>
                  <option>Default select</option>
                </Form.Select>
                <Form.Select>
                  <option>Default select</option>
                </Form.Select>
                <Form.Select>
                  <option>Default select</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="12">
              <div className="d-flex">
                <div className="me-auto bd-highlight mt-2">
                  <p className='info-text-medium'>We found 104 courses available for you</p>
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
            {[...Array(27)].map((e, i) => (
              <CourseCard key={i} colGrid={3} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Courses