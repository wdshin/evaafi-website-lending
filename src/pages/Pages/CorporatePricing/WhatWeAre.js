import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import CountUp from "react-countup";

//import images
import about2 from "../../../assets/images/company/about2.png";
import amazon from "../../../assets/images/client/amazon.svg";
import google from "../../../assets/images/client/google.svg";
import lenovo from "../../../assets/images/client/lenovo.svg";
import paypal from "../../../assets/images/client/paypal.svg";
import shopify from "../../../assets/images/client/shopify.svg";
import spotify from "../../../assets/images/client/spotify.svg";
import { Link } from 'react-router-dom';

class WhatWeAre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [
                {
                    id: 1,
                    img: amazon,
                },
                {
                    id: 2,
                    img: google,
                },
                {
                    id: 3,
                    img: lenovo,
                },
                {
                    id: 4,
                    img: paypal,
                },
                {
                    id: 5,
                    img: shopify,
                },
                {
                    id: 6,
                    img: spotify,
                },
            ],
        };
    }
    render() {
        return (
            <React.Fragment>               
                    <Container>
                        <Row className="align-items-center" id="counter">
                            <Col md={6}>
                                <img src={about2} className="img-fluid" alt="" />
                            </Col>

                            <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="ms-lg-4">
                                    <div className="d-flex mb-4">
                                        <span className="text-primary h1 mb-0">
                                            <span className="counter-value display-1 fw-bold">
                                                <CountUp start={0} end={15} duration={6} />
                                            </span>
                                            +
                                        </span>
                                        <span className="h6 align-self-end ms-2">
                                            Years <br /> Experience
                                        </span>
                                    </div>
                                    <div className="section-title">
                                        <h4 className="title mb-4">Who we are ?</h4>
                                        <p className="text-muted">
                                            Start working with{" "}
                                            <span className="text-primary fw-bold">
                                                Landrick
                                            </span>{" "}
                                            that can provide everything you need to generate
                                            awareness, drive traffic, connect. Dummy text is text that
                                            is used in the publishing industry or by web designers to
                                            occupy the space which will later be filled with 'real'
                                            content. This is required when, for example, the final
                                            text is not yet available. Dummy texts have been in use by
                                            typesetters since the 16th century.
                                        </p>
                                        <Link to="#" className="btn btn-primary mt-3">
                                            Contact us
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-4">
                        <Row className="justify-content-center">
                            {this.state.partners.map((image, key) => (
                                <Col
                                    lg={2}
                                    md={2}
                                    xs={6}
                                    className="text-center pt-4"
                                    key={key}
                                >
                                    <img src={image.img} className="avatar avatar-ex-sm" alt="" />
                                </Col>
                            ))}
                        </Row>
                    </Container>              
            </React.Fragment>
        );
    }
}

export default WhatWeAre;