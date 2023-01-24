import React from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';

const KeyFeature = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Key Features</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">                                   
                                    <FeatherIcon icon="monitor" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Fully Responsive</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">                                 
                                    <FeatherIcon icon="heart" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Browser Compatibility</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="eye" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Retina Ready</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="bold" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Based On Bootstrap 5</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">                                 
                                    <FeatherIcon icon="feather" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Feather Icons</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="code" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Built With SASS</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="user-check" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">W3c Valid Code</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="git-merge" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Flaticon Icons</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="settings" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Easy to customize</h4>
                                </div>
                            </div>
                        </Col>

                        <div className="col-12 mt-4 pt-2 text-center">
                            <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default KeyFeature;