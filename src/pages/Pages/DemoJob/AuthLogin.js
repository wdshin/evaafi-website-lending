import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import shape from "../../../assets/images/shape01.png";
import logoIcon from "../../../assets/images/logo-icon.png";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
//Import Icons
import FeatherIcon from "feather-icons-react";

const AuthLogin = () => {
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
                                <form>
                                    <Link to="/"><img src={logoIcon} className="avatar avatar-small mb-4 d-block mx-auto" alt="" /></Link>
                                    <h5 className="mb-3 text-center">Please sign in</h5>

                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                            </div>
                                        </div>
                                        <p className="forgot-pass mb-0"><Link to="/auth-bs-reset" className="text-dark small fw-bold">Forgot password ?</Link></p>
                                    </div>

                                    <button className="btn btn-primary w-100" type="submit">Sign in</button>

                                    <div className="col-12 text-center mt-3">
                                        <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link to="auth-bs-signup" className="text-dark fw-bold">Sign Up</Link></p>
                                    </div>

                                    <p className="mb-0 text-muted mt-3 text-center">©
                                        {new Date().getFullYear()}{" "}
                                        Landrick.</p>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ThemeSwitcher/>
        </React.Fragment>
    );
}

export default AuthLogin;