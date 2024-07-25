import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const BreadCrumb = (props) => {
    console.log(props);
    const { title, link, CurrentPage } = props.content;

    return (
        <>
            <section id="breadCrumb-section">
                <div className='breadcrumb-area breadcrumb-bg'>
                    <Container>
                        <Row>
                            <Col sm="12">
                                <div className="breadcrumb-content">
                                    <h3 className="title">{title}</h3>
                                    <nav className="breadcrumb">
                                        {link.map((e, i) => (
                                            <div key={i}>
                                                    <div className="d-flex">
                                                        <span property="itemListElement" typeof="ListItem">
                                                            <a href={e.path}>{e.page}</a>
                                                        </span>
                                                        <span className="breadcrumb-separator">
                                                            <i className="bi bi-chevron-right"></i>
                                                        </span>
                                                        </div> 
                                                    </div>
                                                ))}
                                                    <span property="itemListElement" typeof="ListItem">{CurrentPage}</span>                                                
                                                                                   
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default BreadCrumb