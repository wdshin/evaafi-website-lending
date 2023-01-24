import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

//import images
import shape from "../../assets/images/shape02.png";
import revenue from "../../assets/images/crypto/revenue.svg";
import bills from "../../assets/images/crypto/bills.svg";
import profit from "../../assets/images/crypto/profit.svg";
import Footer from './Footer';

class AboutUs extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector(".shoppingbtn").classList.remove("btn-light");
        }, 200);
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.querySelector(".shoppingbtn").classList.remove("btn-light");
            document.querySelector(".settingbtn").classList.remove("btn-light");
            document.querySelector(".shoppingbtn").classList.add("btn-primary");
            document.querySelector(".settingbtn").classList.add("btn-soft-primary");

            // document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.querySelector(".shoppingbtn").classList.add("btn-primary");
            document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
            // document.querySelector(".shoppingbtn").classList.add("btn-light");
            document.querySelector(".settingbtn").classList.add("btn-light");
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };
    render() {
        return (
            <React.Fragment>
                <NavBar isLight={false} />

                <section className="bg-half-170 bg-light d-table w-100"
                    style={{ background: `url(${shape}) top left` }}
                >
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title mb-0"> About us </h4>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="/index-crypto">Crypto</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="position-relative me-lg-5">
                                    <img src={revenue} className="img-fluid" alt="" />
                                </div>
                            </Col>

                            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title">
                                    <span className="badge bg-soft-primary rounded">About</span>
                                    <h4 className="title mb-3 mt-2">Our Story</h4>

                                    <p className="text-muted">We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.</p>

                                    <p className="text-muted mb-0">We started in 2021 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} className="order-2 order-md-1">
                                <div className="section-title me-lg-5">
                                    <h4 className="title mb-3">Build the future of technology</h4>
                                    <p className="text-muted">What's the secret to Landrick's success? The answer is obvious: Our people. We are proud to have one of the most talented, hardworking and passionate teams the world has to offer. Interested in joining our team?</p>

                                    <ul className="list-unstyled text-muted mb-0">
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><span className="fw-medium">Landrick Wallet.</span>  Your Keys, Your Crypto.</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><span className="fw-medium">Landrick Earn.</span>  No lock-up period and stable returns.</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><span className="fw-medium">Landrick Swap.</span>  Swap Landrick coins and earn Triple Yield.</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-soft-primary"><i className="uil uil-wallet"></i> Go to wallet</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={5} className="order-1 order-md-2">
                                <img src={bills} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} className="order-1 order-md-2">
                                <div className="section-title ms-lg-5">
                                    <h4 className="title mb-3">Join us</h4>
                                    <p className="text-muted mb-0">We’re currently hiring. If our company mission means something to you, you’re invited to join the Bitcoin.com team.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-soft-primary"><i className="uil uil-arrow-growth"></i> See Positions</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={5} className="order-2 order-md-1">
                                <img src={profit} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row>
                            <Col lg={6} md={6} xs={12}>
                                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                                    <div className="icons text-primary text-center">
                                        <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div className="flex-1 content ms-4">
                                        <h5 className="mb-1"><Link to="#" className="text-dark">Get in Touch !</Link></h5>
                                        <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                                        <div className="mt-2">
                                            <Link to="#" className="btn btn-sm btn-soft-primary">Submit a Request</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                                    <div className="icons text-primary text-center">
                                        <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div className="flex-1 content ms-4">
                                        <h5 className="mb-1"><Link to="#" className="text-dark">Start a Meeting</Link></h5>
                                        <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                                        <div className="mt-2">
                                            <Link to="#" className="btn btn-sm btn-soft-primary">Start Video Chat</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* import Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;