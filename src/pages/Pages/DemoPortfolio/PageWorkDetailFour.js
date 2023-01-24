import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/3.jpg";
import Footer4 from '../PageFooterLayouts/Footer4';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

//import Components
import NavBar from "./Portfolio/NavBar";

class PageWorkDetailFour extends Component {
    render() {
        return (
            <React.Fragment>
            <NavBar />
                <section className="bg-half-170 bg-light d-table w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title"> New Trends in SEO </h4>
                                    <ul className="list-unstyled mt-4 mb-0">
                                        <li className="list-inline-item h6 user text-muted me-2"> <span className="text-dark">Client :</span> Calvin Carlo</li>{" "}
                                        <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Date :</span> 23th Sep, 2021</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="#">Work</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">Work Detail</li>
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

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={8} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                                <div className="work-detail">
                                    <h4 className="title mb-3">Introduction of Project :</h4>
                                    <p className="description text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                                    <p className="description text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>

                                    <Row>
                                        <Col lg={6} className="mt-4 pt-2">
                                            <img src={work1} className="img-fluid rounded" alt="" />
                                        </Col>

                                        <Col lg={6} className="mt-4 pt-2">
                                            <img src={work2} className="img-fluid rounded" alt="" />
                                        </Col>
                                    </Row>

                                    <blockquote className="blockquote text-center mt-4 mb-0 p-md-4">
                                        <span className="h3 text-muted"><i className="mdi mdi-format-quote-open"></i></span>
                                        <p className="text-muted mb-0 h5 fw-normal fst-italic"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        <span className="h3 text-muted"><i className="mdi mdi-format-quote-open"></i></span>
                                    </blockquote>
                                    <p className="description text-muted mt-4 mt-sm-0 mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                                </div>
                            </Col>

                            <div className="col-lg-4 col-md-6 order-1 order-md-2">
                                <div className="sticky-bar work-detail p-4 rounded shadow">
                                    <h4 className="title pb-3 border-bottom">Project Info :</h4>

                                    <ul className="list-unstyled mb-0">
                                        <li className="mt-3">
                                            <b>Client : {" "}</b>
                                            <span>Calvin Carlo</span>
                                        </li>
                                        <li className="mt-3">
                                            <b>Category : {" "}</b>
                                            <span>Web Design</span>
                                        </li>
                                        <li className="mt-3">
                                            <b>Date : {" "}</b>
                                            <span>26rd Oct, 2021</span>
                                        </li>
                                        <li className="mt-3">
                                            <b>Website : {" "}</b>
                                            <span>www.yourdomain.com</span>
                                        </li>
                                        <li className="mt-3">
                                            <b>Location : {" "}</b>
                                            <span>3/2/64 Mongus Street, UK</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                <Footer4 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default PageWorkDetailFour;