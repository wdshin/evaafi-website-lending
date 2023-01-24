import React from 'react';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
//import Images
import logoLight from "../../../assets/images/logo-light.png";

const PageSignupFive = () => {
    return (
        <React.Fragment>
            <div className="back-to-home">
                <Link to="/" className="back-button btn btn-icon btn-primary">
                    <i>
                        <FeatherIcon icon="arrow-left" className="icons" />
                    </i>
                </Link>
            </div>
            <section className="position-relative">
                <div className="bg-video-wrapper">
                    <iframe src="https://player.vimeo.com/video/405282090?background=1&autoplay=1&loop=1&byline=0&title=0" title="uniqueTitle5"></iframe>
                </div>
                <div className="bg-overlay bg-linear-gradient-2"></div>
                <Container fluid>
                    <Row>
                        <Col className="col-12 p-0">
                            <div className="d-flex flex-column min-vh-100 p-4">
                                <div className="text-center">
                                    <Link to="#"><img src={logoLight} alt="" /></Link>
                                </div>
                                <div className="title-heading text-center my-auto">
                                    <div className="card form-signin px-4 py-5 rounded-md shadow-sm">
                                        <Form>
                                            <h5 className="mb-4">Register Your Account</h5>

                                            <Row>
                                                <Col lg={12}>
                                                    <div className="form-floating mb-2">
                                                        <Input type="text" className="form-control" id="RegisterName" placeholder="Harry" />
                                                        <Label htmlFor="RegisterName">First Name</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="form-floating mb-2">
                                                        <Input type="email" className="form-control" id="RegisterEmail" placeholder="name@example.com" />
                                                        <Label htmlFor="RegisterEmail">Email Address</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="form-floating mb-3">
                                                        <Input type="password" className="form-control" id="RegisterPassword" placeholder="Password" />
                                                        <Label htmlFor="RegisterPassword">Password</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="form-check align-items-center d-flex mb-3">
                                                        <Input className="form-check-input mt-0" type="checkbox" value="" id="AcceptT&C" />
                                                        <Label className="form-check-label text-muted ms-2" htmlFor="AcceptT&C">I Accept
                                                            <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <button className="btn btn-primary rounded-md w-100" type="submit">Register</button>
                                                </Col>

                                                <Col className="col-12 text-center mt-4">
                                                    <small><span className="text-muted me-2">Already have an account ? </span> <Link to="auth-login-bg-video.html" className="text-dark fw-bold">Sign in</Link></small>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 text-white">© {new Date().getFullYear()}{" "}
                                        Landrick. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://themesbrand.com//" target="_blank" className="text-reset">Themesbrand</Link>.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ThemeSwitcher/>
        </React.Fragment>
    );
}

export default PageSignupFive;