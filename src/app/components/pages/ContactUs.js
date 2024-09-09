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
            }).catch((error) => {
                if (error.response) {
                    dispatch(showLoader({ status: false }));
                    console.log(error.response.data); // => the response payload 
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
                        <Col sm="12" lg="6">
                            <div className="contact-info-wrap">
                                <h2 className="title">Keep In Touch With Us</h2>
                                <p>We’re here to help you take the next step in your career. Whether you have questions about our courses, need guidance on your learning path, or want to discuss partnership opportunities, feel free to reach out to us. We look forward to connecting with you!</p>
                                <ul className="list-wrap">
                                    <li>
                                        <div className="icon"><i className="bi bi-geo-alt"></i></div>
                                        <div className="content">
                                            <p><span>Tamil Info Technology</span><br />
                                                No. 45, Sannathi Street,<br />
                                                Dindigul, Tamilnadu, 624001, India</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="bi bi-telephone"></i></div>
                                        <div className="content">
                                            <a href="tel:+91 98765 43210">+91 98765 43210</a>
                                            {/* <a href="tel:+91 98765 43210">+123 555 69090</a> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="bi bi-envelope"></i></div>
                                        <div className="content">
                                            <a href="mailto:info@tamiltinfo.com">info@tamiltinfo.com</a>
                                            {/* <a href="mailto:info@gmail.com">info@gmail.com</a> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="bi bi-alarm"></i></div>
                                        <div className="content">
                                            <h6>Office Hours</h6>
                                            <a href="tel:+91 98765 43210"><span>Monday to Saturday</span>: 9:00 AM - 6:00 PM</a>
                                            <a href="tel:+91 98765 43210"><span>Sunday</span>: Closed</a>
                                            {/* <a href="mailto:info@gmail.com">info@gmail.com</a> */}
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                    {/* <h6 className='mb-2 mt-3'>Stay connected with us on social media for the latest updates, events, and news:</h6> */}
                                    <ul className="social-list list-wrap mt-4">
                                        <li><a href="https://www.facebook.com/p/Tamil-Infotechnology-100066587747060/" target="_blank" rel="noopener noreferrer" className='socia-media-icons'><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="https://x.com/tamilinfotechdg" className='socia-media-icons ms-2' target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/tamil-info-technology/?originalSubdomain=in" className='socia-media-icons ms-2' target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
                                        <li><a href="https://www.facebook.com/p/Tamil-Infotechnology-100066587747060/" className='socia-media-icons ms-2' target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" lg="6">
                            <div className="contact-form-wrap">
                                <h4 className="title">Get in Touch</h4>
                                <p>For any inquiries or support, fill out the contact form below, and our team will get back to you as soon as possible.</p>
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