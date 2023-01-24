import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Form, Input, Label, Row, FormFeedback } from 'reactstrap';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Icons
import FeatherIcon from "feather-icons-react";

import bg1 from '../../assets/images/it/bg1.jpg';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const Section = () => {
    const [open, setOpen] = useState(false);

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            firstname: "",
            email: "",
            number: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            number: Yup.string().required("Please Enter Password")
        }),
        onSubmit: (values) => {
            // console.log(values)
        }
    });

    return (
        <React.Fragment>
            <section className="bg-half-170 d-table w-100 it-home"
                style={{ background: `url(${bg1}) center center` }}
            >
                <div className="bg-overlay"></div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={6} xs={12}>
                            <div className="title-heading">
                                <h6 className="text-white-50">IT Software & Design</h6>
                                <h1 className="fw-bold text-white title-dark mt-2 mb-3">Advanced Innovative <br /> IT Solutions.</h1>
                                <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-primary m-1"><i className="uil uil-phone"></i> Get in touch</Link>{" "}
                                    <Link to="#" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                                        <FeatherIcon
                                            icon="video"
                                            className="icons"
                                        />
                                    </Link><small className="fw-bold text-uppercase text-white-50 align-middle ms-1">Watch Now</small>
                                </div>
                            </div>
                        </Col>

                        <Col lg={5} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <Card className="shadow rounded border-0 ms-lg-5">
                                <CardBody>
                                    <h5 className="card-title fw-bold">Register Your Appointment</h5>
                                    <h6>We here to help you 24/7 with experts</h6>

                                    <Form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                        className="login-form">
                                        <Row>
                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Label className="form-label">First name <span className="text-danger">*</span></Label>
                                                    <div className="form-icon position-relative">
                                                        <FeatherIcon
                                                            icon="user"
                                                            className="fea icon-sm icons"
                                                        />
                                                        <Input
                                                            type="text"
                                                            className="form-control ps-5"
                                                            placeholder="First Name"
                                                            name="firstname"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.firstname || ""}
                                                            invalid={
                                                                validation.touched.firstname && validation.errors.firstname ? true : false
                                                            }
                                                        />
                                                        {validation.touched.firstname && validation.errors.firstname ? (
                                                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Label className="form-label">Your Email <span className="text-danger">*</span></Label>
                                                    <div className="form-icon position-relative">
                                                        <FeatherIcon
                                                            icon="mail"
                                                            className="fea icon-sm icons"
                                                        />
                                                        <Input
                                                            type="email"
                                                            className="form-control ps-5"
                                                            placeholder="Email"
                                                            name="email"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.email || ""}
                                                            invalid={
                                                                validation.touched.email && validation.errors.email ? true : false
                                                            }
                                                        />
                                                        {validation.touched.email && validation.errors.email ? (
                                                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Label className="form-label">Phone no. <span className="text-danger">*</span></Label>
                                                    <div className="form-icon position-relative">
                                                        <FeatherIcon
                                                            icon="phone"
                                                            className="fea icon-sm icons"
                                                        />
                                                        <Input
                                                            type="number"
                                                            name="number"
                                                            className="form-control ps-5"
                                                            placeholder="Phone no."
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.number || ""}
                                                            invalid={
                                                                validation.touched.number && validation.errors.number ? true : false
                                                            }
                                                        />
                                                        {validation.touched.number && validation.errors.number ? (
                                                            <FormFeedback type="invalid">{validation.errors.number}</FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <Label className="form-check-label" for="flexCheckDefault">
                                                        I Accept <Link to="#" className="text-primary">Terms And Condition</Link>
                                                    </Label>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="d-grid">
                                                    <button className="btn btn-primary">Register</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <ModalVideo
                        channel="youtube"
                        isOpen={open}
                        videoId="yba7hPeTSjk"
                        onClose={() => setOpen(false)}
                    />
                </Container>
            </section>
        </React.Fragment>
    );
};
export default Section;
