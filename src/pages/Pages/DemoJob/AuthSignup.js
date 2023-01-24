import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';

//import images 
import shape from "../../../assets/images/shape01.png";
import logoIcon from "../../../assets/images/logo-icon.png";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
//Import Icons
import FeatherIcon from "feather-icons-react";

const AuthSignup = () => {  
        return (
            <React.Fragment>
                <div className="back-to-home">
                    <Link to="/" className="back-button btn btn-icon btn-primary">
                        <i>
                            <FeatherIcon icon="arrow-left" className="icons" />
                        </i>
                    </Link>
                </div>
                <section className="bg-home d-flex align-items-center position-relative"
                    style={{ backgroundImage: `url(${shape}) center` }}>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="form-signin p-4 rounded shadow">
                                    <Form>
                                        <Link to="/"><img src={logoIcon} className="avatar avatar-small mb-4 d-block mx-auto" alt="" /></Link>
                                        <h5 className="mb-3 text-center">Register your account</h5>

                                        <div className="form-floating mb-2">
                                            <Input type="text" className="form-control" id="floatingInput" placeholder="Harry" />
                                            <Label for="floatingInput">First Name</Label>
                                        </div>

                                        <div className="form-floating mb-2">
                                            <Input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                                            <Label for="floatingEmail">Email Address</Label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <Input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <Label for="floatingPassword">Password</Label>
                                        </div>

                                        <div className="form-check mb-3">
                                            <Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <Label className="form-check-label" for="flexCheckDefault">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                        </div>

                                        <button className="btn btn-primary w-100" type="submit">Register</button>

                                        <div className="col-12 text-center mt-3">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link to="auth-bs-login" className="text-dark fw-bold">Sign in</Link></p>
                                        </div>

                                        <p className="mb-0 text-muted mt-3 text-center">©
                                            {new Date().getFullYear()}{" "} Landrick.</p>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <ThemeSwitcher/>
            </React.Fragment>
        );    
};

export default AuthSignup;