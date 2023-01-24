import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Solutions = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="features-absolute">
                            <Row className="g-2">
                                <Col md={6} className="col-12">
                                    <div className="card features feature-primary feature-full-bg rounded shadow p-4 position-relative overflow-hidden border-0">
                                        <span className="h2 icon-color">
                                            <i className="uil uil-truck"></i>
                                        </span>
                                        <div className="card-body p-0 content">
                                            <h5 className="mb-3">Transport Solutions</h5>
                                            <p className="para text-muted mb-3">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>

                                            <Link to="/" className="readmore text-dark">Read More <i className="uil uil-angle-right align-middle"></i></Link>
                                        </div>
                                        <div className="position-absolute top-0 end-0">
                                            <i className="uil uil-truck display-1 opacity-05"></i>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} className="col-12">
                                    <div className="card features feature-primary feature-full-bg rounded shadow p-4 position-relative overflow-hidden border-0">
                                        <span className="h2 icon-color">
                                            <i className="uil uil-parcel"></i>
                                        </span>
                                        <div className="card-body p-0 content">
                                            <h5 className="mb-3">Warehousing Solutions</h5>
                                            <p className="para text-muted mb-3">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>

                                            <Link to="/" className="readmore text-dark">Read More <i className="uil uil-angle-right align-middle"></i></Link>
                                        </div>
                                        <div className="position-absolute top-0 end-0">
                                            <i className="uil uil-parcel display-1 opacity-05"></i>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Solutions;