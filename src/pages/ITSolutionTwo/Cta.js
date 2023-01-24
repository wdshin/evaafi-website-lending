import React from 'react'
import CountUp from "react-countup";
import { Col, Container, Row } from 'reactstrap';
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import SectionTitle from '../../components/Shared/SectionTitle';
import BlogBox from "../../components/Shared/BlogBox";
import {reviews, enterpriceBlogs} from "../../common/data";

//import images
import bgImage from '../../assets/images/it/cta.jpg';

const Cta = () => {    
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="video-solution-cta position-relative" style={{ zIndex: '1' }}>
                                    <div className="position-relative py-5 rounded"
                                        style={{ background: `url(${bgImage}) top` }}>
                                        <div className="bg-overlay rounded bg-primary bg-gradient" style={{ opacity: '0.8' }}></div>

                                        <Row>
                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-users-alt text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={100} end={9759} duration={8} />
                                                        </span>
                                                    +</h1>
                                                    <h6 className="counter-head text-white-50">Happy Client</h6>
                                                </div>
                                            </Col>

                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-schedule text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={1} end={15} duration={8} />
                                                        </span>
                                                    +</h1>
                                                    <h6 className="counter-head text-white-50">Years Experience</h6>
                                                </div>
                                            </Col>

                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-file-check-alt text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={12} end={151} duration={8} />
                                                        </span>+</h1>
                                                    <h6 className="counter-head text-white-50">Project Complete</h6>
                                                </div>
                                            </Col>

                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-hard-hat text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={3} end={98} duration={8} />
                                                        </span>
                                                    +</h1>
                                                    <h6 className="counter-head text-white-50">Expert Engineers</h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="content mt-md-5 mt-4">
                                        <ReviewsSlider reviews={reviews} colclassName="mt-4" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="feature-posts-placeholder bg-light"></div>
                    </Container>
                </section>
                <section className="section">
                    <Container>
                        <SectionTitle
                            title="Latest News"
                            desc="that can provide everything you need to generate awareness, drive traffic, connect"
                        />
                        <Row>
                            <BlogBox blogs={enterpriceBlogs} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
};
export default Cta;
