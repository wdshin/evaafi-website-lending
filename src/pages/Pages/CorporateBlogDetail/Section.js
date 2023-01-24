import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import corporate from "../../../assets/images/corporate/pages.jpg";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" style={{ background: `url(${corporate}) top` }}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading title-heading">
                                    <div className="pages-heading">
                                        <h2 className="text-white title-dark"> Corporate Teams Respond After Crisis </h2>
                                        <ul className="list-unstyled mt-4">
                                            <li className="list-inline-item h6 user text-white-50 me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>{" "}
                                            <li className="list-inline-item h6 date text-white-50"><i className="mdi mdi-calendar-check"></i> 25th June 2021</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="/index-corporate">Business</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                </ul>
                            </nav>
                        </div>
                    </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section;