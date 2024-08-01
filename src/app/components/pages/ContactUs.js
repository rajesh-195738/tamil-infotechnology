import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import "../../../css/Pages.scss";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
// ForLoader
import { showLoader } from "../../features/loaderSlice";
import { useDispatch } from "react-redux";


const baseURL = "https://script.google.com/macros/s/AKfycbz3hwMI0BpifaZQ0OnWKIB7CcYxjSsOENzKNXYM3OqlH-CjPslPzFQxVGmTEnxlZK5yNA/exec";

const ContactUs = () => {

    const dispatch = useDispatch();
    const breadCrumbArr = {
        title: 'Contact Us',
        link: [{ path: '/', page: 'Home' }],
        CurrentPage: 'Contact Us'
    };


    const initalValue = { name: "", email: "", message: "", subject: "", phone: "" };
    const [formData, setFormData] = useState(initalValue);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
        if (formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.message !== '') {
            dispatch(showLoader({ status: true }))

            let data = { "id": 1, "name": formData.name, "email": formData.email, "message": formData.message, "phone": formData.phone, "subject": formData.subject };
            console.log(data);
            // return;
            axios.get(baseURL + '?action=insert&data=' + JSON.stringify(data)).then((response) => {
                console.log(response.data.result);
                dispatch(showLoader({ status: false }))
                if (response.data.result.status) {
                    alert(response.data.result.message);
                    setFormData(initalValue);
                } else {
                    alert(response.data.result.message);
                }
            });

        } else {
            // dispatch(showLoader({ status: false }));
            alert("All fields are required");
        }

    };

    return (
        <>
            <BreadCrumb content={breadCrumbArr} />
            <section id="contact-us">
                <Container>
                    <Row>
                        <Col sm="12" lg="5">
                            <div className="contact-info-wrap">
                                <h2 className="title">Keep In Touch With Us</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <ul className="list-wrap">
                                    <li>
                                        <div className="icon"><i className="bi bi-geo-alt"></i></div>
                                        <div className="content">
                                            <p>68 Street Holakt Street world <br /> 10002 New York</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="bi bi-telephone"></i></div>
                                        <div className="content"><a href="tel:0123456789">+123 555 69090</a><a href="tel:0123456789">+123 555 69090</a></div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="bi bi-envelope"></i></div>
                                        <div className="content"><a href="mailto:info@gmail.com">info@gmail.com</a><a href="mailto:info@gmail.com">info@gmail.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm="12" lg="7">
                            <div className="contact-form-wrap">
                                <h4 className="title">Get in Touch</h4>
                                <Row>
                                    <Col sm="12" lg="6">
                                        <div className="form-grp"><input name="name" type="text" placeholder="Name *" value={formData.name} onChange={handleChange} required="" /></div>
                                    </Col>
                                    <Col sm="12" lg="6">
                                        <div className="form-grp"><input name="email" type="email" placeholder="E-mail *" value={formData.email} onChange={handleChange} required="" /></div>
                                    </Col>
                                    <Col sm="12" lg="6">
                                        <div className="form-grp"><input name="phone" type="number" placeholder="Phone *" value={formData.phone} onChange={handleChange} required="" /></div>
                                    </Col>
                                    <Col sm="12" lg="6">
                                        <div className="form-grp"><input name="subject" type="text" placeholder="Your Subject *" value={formData.subject} onChange={handleChange} required="" /></div>
                                    </Col>
                                </Row>
                                <div className="form-grp"><textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required=""></textarea></div>
                                <button className="btn btn-tamil" onClick={handleSubmit}>Send Message</button>
                                <p className="ajax-response mb-0"></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactUs