import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Images
import about from "../../../assets/images/logistics/about.png";
import amazon from "../../../assets/images/client/amazon.svg";
import google from "../../../assets/images/client/google.svg";
import lenovo from "../../../assets/images/client/lenovo.svg";
import paypal from "../../../assets/images/client/paypal.svg";
import shopify from "../../../assets/images/client/shopify.svg";
import spotify from "../../../assets/images/client/spotify.svg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss";

const AboutUs = () => {
    const [open, setOpen] = useState(false);

    const partnersData = [
        {id: 1, img: amazon},
        {id: 2, img: google},
        {id: 3, img: lenovo},
        {id: 4, img: paypal},
        {id: 5, img: shopify},
        {id: 6, img: spotify},
    ]
    return (
        <React.Fragment>
            <Container className="mt-100 mt-60">
                <Row className="align-items-center">
                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="position-relative">
                            <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                            <div className="play-icon">
                                <Link to="#!" onClick={() => setOpen(true)} data-type="youtube" className="play-btn lightbox border-0">
                                    <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-4">
                            <h6>About us</h6>
                            <h4 className="title mb-4">Powerful Features of <br /> <span className="text-primary">Landrick</span> Logistics</h4>
                            <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                            <Link to="/" className="btn btn-primary mt-3">Read More <i className="uil uil-angle-right-b"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-center">
                {partnersData.map((item, key) => (
                    <Col key={key} lg={2} md={2} className="col-6 text-center py-4">
                        <img src={item.img} className="avatar avatar-ex-sm" alt=""/>
                    </Col> 
                ))}                                       
                </Row>
            </Container>
            <ModalVideo
                channel="youtube"
                isOpen={open}
                videoId="yba7hPeTSjk"
                autoplay
                onClose={() => setOpen(false)}
            />
        </React.Fragment>
    );
}

export default AboutUs;