import React, { Component } from 'react';
import NavBar from './NavBar';

//import images
import blog from "../../assets/images/blog/04.jpg";
import logoIcon from "../../assets/images/logo-icon.png";
import bills from "../../assets/images/crypto/bills.svg";
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';
import Footer from './Footer';

class CryptoBlogDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <section className="bg-half-170 d-table w-100 bg-light">
                    <Container>
                        <Row className="mt-5">
                            <Col lg={8} md={7}>
                                <div className="section-title me-lg-5">
                                    <h4 className="title fw-medium mb-4">What is blockchain?</h4>
                                    <p className="text-muted mb-5">It enables peer-to-peer exchange of value in the digital realm through the use of a decentralized protocol, cryptography, and a mechanism to achieve global consensus on the state of a periodically updated public transaction ledger called a 'blockchain.'</p>

                                    <img src={blog} className="img-fluid rounded shadow" alt="" />

                                    <h5 className="my-4">Blockchain's origin, early growth, and evolution</h5>

                                    <p className="text-muted">The paper detailed methods for "allowing any two willing parties to transact directly with each other without the need for a trusted third party." The technologies deployed solved the 'double spend' problem, enabling scarcity in the digital environment for the first time.</p>
                                    <p className="text-muted">The listed author of the paper is Satoshi Nakamoto, a presumed pseudonym for a person or group who's true identity remains a mystery. Nakamoto released the first open-source Landrick software client on January 9th, 2009, and anyone who installed the client could begin using Landrick.</p>
                                    <p className="text-muted">Initial growth of the Landrick network was driven primarily by its utility as a novel method for transacting value in the digital world. Early proponents were, by and large, 'cypherpunks' - individuals who advocated the use of strong cryptography and privacy-enhancing technologies as a route to social and political change. However, speculation as to the future value of Landrick soon became a significant driver of adoption.</p>
                                    <p className="text-muted">The price of Landrick and the number of Landrick users rose in waves over the following decade. As regulators in major economies provided clarity on the legality of Landrick and other cryptocurrencies, a large number of Landrick exchanges established banking connections, making it easy to convert local currency to and from Landrick. Other businesses established robust custodial services, making it easier for institutional investors to gain exposure to the asset as a growing number of high-profile investors signaled their interest.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <Card className="p-4 text-center rounded shadow border-0 bg-white sticky-bar">
                                    <img src={logoIcon} className="avatar avatar-small d-block mx-auto" alt="" />

                                    <h5 className="mt-4">Buy as little as $30 worth to get started</h5>

                                    <img src={bills} className="img-fluid" alt="" />

                                    <Link to="#" className="btn btn-primary">Buy Now</Link>

                                    <h6 className="text-muted mb-0 mt-3">Choose from Bitcoin, Bitcoin Cash, Ethereum, and more...</h6>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title text-center">
                                    <h4 className="title mb-4">Be the first to know about Crypto news everyday</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>

                                    <div className="subcribe-form mt-5">
                                        <form>
                                            <div className="mb-0">
                                                <input type="email" id="email2" name="email" className="bg-white rounded-pill border" required placeholder="Enter your email address" />
                                                <button type="submit" className="btn btn-pills btn-primary">Notify me</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* import images */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default CryptoBlogDetail;