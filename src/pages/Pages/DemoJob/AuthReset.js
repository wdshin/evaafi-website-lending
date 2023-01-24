import React from 'react';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images 
import shape from "../../../assets/images/shape01.png";
import logoIcon from "../../../assets/images/logo-icon.png";

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";

const AuthReset = () => {
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
                            <div className="form-signin p-4 bg-white rounded shadow">
                                <Form>
                                    <Link to="/"><img src={logoIcon} className="avatar avatar-small mb-4 d-block mx-auto" alt="" /></Link>
                                    <h5 className="mb-3 text-center">Reset your password</h5>

                                    <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>

                                    <div className="form-floating mb-3">
                                        <Input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <Label htmlFor="floatingInput">Email address</Label>
                                    </div>

                                    <button className="btn btn-primary w-100" type="submit">Send</button>

                                    <div className="col-12 text-center mt-3">
                                        <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link to="/auth-bs-login" className="text-dark fw-bold">Sign in</Link></p>
                                    </div>

                                    <p className="mb-0 text-muted mt-3 text-center">©
                                        {new Date().getFullYear()}{" "}
                                        Landrick.</p>
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

export default AuthReset;