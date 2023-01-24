import React from 'react';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
//import Images
import logoLight from "../../../assets/images/logo-light.png";

const PageResetPassFive = () => {
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
                    <iframe src="https://player.vimeo.com/video/405282090?background=1&autoplay=1&loop=1&byline=0&title=0" title="uniqueTitle2"></iframe>
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
                                            <h5 className="mb-3">Reset Your Password</h5>

                                            <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>

                                            <Row>
                                                <Col className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <Input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <Label for="floatingInput">Email address</Label>
                                                    </div>
                                                </Col>

                                                <Col className="col-12">
                                                    <button className="btn btn-primary rounded-md w-100" type="submit">Send</button>
                                                </Col>

                                                <Col className="col-12 text-center mt-4">
                                                    <small><span className="text-muted me-2">Remember your password ? </span>
                                                    <Link to="/auth-login-bg-video" className="text-dark fw-bold">Sign in</Link></small>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="mb-0 text-white">© {new Date().getFullYear()}{" "} Landrick. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://themesbrand.com//" target="_blank" className="text-reset">Themesbrand</Link>.</p>
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

export default PageResetPassFive;