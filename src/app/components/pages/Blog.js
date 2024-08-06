import React from 'react'
import BreadCrumb from './BreadCrumb';
import "../../../css/Pages.scss";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import BlogImg from "../../../assets/images/blog.jpg";
import Author from "../../../assets/images/author.png";

const Blog = () => {
  const breadCrumbArr = {
    title: 'Blog',
    link: [{ path: '/', page: 'Home' }],
    CurrentPage: 'Blog',
  };

  let tags = ["React js", "Angular", "Python", "Java", "CSS", "JSON", "HTML", "SCSS", "Jquery"];
  let blogs = [
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'React js',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'Angular',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'Python',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'Java',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'CSS',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'JSON',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'HTML',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      tag: 'Jquery',
      author: 'Rahul Dravid',
      date: '2021-07-10',
    },

  ];

  return (    
    <>
      <BreadCrumb content={breadCrumbArr} />
      <section id="blog-page">
        <Container>
        <Row>
          <Col sm="12">
          <h5 className='title-main4'>Tags</h5>
          <hr />
            <div className="mb-4 mt-2 sidebar-tag">
              {tags.map((val, i) => (
                <Badge key={i}>{val}</Badge>
              ))}
            </div>
          </Col>
        </Row>
          <Row>
          {blogs.map((val, i) => (
            <Col sm="12" lg="4" key={i}>
              <div className="blog-wrapper mb-4">
                <div className="blog-item white-bg mb-30 transition-3 o-h">
                  <div className="blog-thumb w-img o-h"><a href="/blog-details/4" className=""><img src={BlogImg} alt="" /></a></div>
                  <div className="blog-content">
                    <div className="blog-tag"><Link className="blue">{val?.tag}</Link></div>
                    <h3 className="blog-title"><Link>{val?.title}</Link></h3>
                    <div className="blog-meta d-flex align-items-center justify-content-between">
                      <div className="blog-author d-flex align-items-center">
                        <div className="blog-author-thumb mr-10"><img src={Author} alt="" /></div>
                        <div className="blog-author-info">
                          <h5>{val?.author}</h5>
                        </div>
                      </div>
                      <div className="blog-date d-flex align-items-center"><i className="fal fa-clock"></i><span>{val?.date}</span></div>
                    </div>
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

export default Blog