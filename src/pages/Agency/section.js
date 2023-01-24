import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Icons
import FeatherIcon from "feather-icons-react";

// Import Images
import workingWithComputerImg from '../../assets/images/illustrator/working_with_computer.svg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const Section = () => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <section className="bg-half-170 border-bottom agency-wrapper d-table w-100" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={7} className="order-1 order-md-2">
                            <div className="title-heading mt-4 ms-lg-5">
                                <h1 className="heading mb-3">We are Startup Creative <span className="text-primary">Landrick</span> Agency</h1>
                                <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-primary m-1 me-2">Learn More <i className="uil uil-angle-right-b"></i></Link>
                                    <Link to="#" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                                        <FeatherIcon
                                            icon="video"
                                            className="icons"
                                        /></Link>{" "}
                                    <span className="fw-bold text-uppercase small align-middle">Watch Now</span>
                                    <ModalVideo
                                        channel='youtube'
                                        isOpen={open}
                                        videoId='yba7hPeTSjk'
                                        onClose={() => setOpen(false)}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={5} className="order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <img src={workingWithComputerImg} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Section;