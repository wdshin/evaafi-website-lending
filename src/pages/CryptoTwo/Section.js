import React from 'react'
import { Col, Container, Row } from 'reactstrap';

import cryptoImg from '../../assets/images/crypto/crypto.png';

const Section = () => {
    return (
        <React.Fragment>
            <section className="bg-half-260 d-table w-100" data-jarallax='{"speed": 0.5}' style={{ background: `url(${cryptoImg}) top` }}>
                <div className="bg-video-wrapper">
                    <iframe src="https://player.vimeo.com/video/543682481?background=1&autoplay=1&loop=1&byline=0&title=0" title="uniqueTitle3"></iframe>

                </div>
                <div className="bg-overlay bg-black opacity-9"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-12 mt-5 pt-md-5">
                            <div className="title-heading text-center">
                                <h4 className="heading text-white title-dark mb-4">Buy & sell Cryptocurrency in minutes</h4>
                                <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="subcribe-form mt-4 pt-2">
                                    <form>
                                        <div className="mb-2">
                                            <input className="rounded-pill" placeholder="Email Address / Phone Number" />
                                            <button type="submit" className="btn btn-pills btn-primary">Register Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>               
            </section>
        </React.Fragment>
    );
};
export default Section;
