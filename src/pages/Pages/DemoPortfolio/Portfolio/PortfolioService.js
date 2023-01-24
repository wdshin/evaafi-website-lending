import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import ReviewsSlider from "../../../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../../../assets/images/client/01.jpg";
import img2 from "../../../../assets/images/client/02.jpg";
import img3 from "../../../../assets/images/client/03.jpg";
import img4 from "../../../../assets/images/client/04.jpg";
import img5 from "../../../../assets/images/client/05.jpg";
import img6 from "../../../../assets/images/client/06.jpg";
import Footer4 from '../../PageFooterLayouts/Footer4';
import NavBar from './NavBar';
import ThemeSwitcher from '../../../../components/Layout/ThemeSwitcher';

class PortfolioService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    id: 1,
                    icon: "uil uil-chart-line",
                    name: "Web Development",
                    desc: "It is a long established fact that a reader."
                },
                {
                    id: 2,
                    icon: "uil uil-crosshairs",
                    name: "Mobile Development",
                    desc: "It is a long established fact that a reader."
                },
                {
                    id: 3,
                    icon: "uil uil-airplay",
                    name: "UI/UX Design",
                    desc: "It is a long established fact that a reader."
                },
                {
                    id: 4,
                    icon: "uil uil-rocket",
                    name: "QA & Testing",
                    desc: "It is a long established fact that a reader."
                },
                {
                    id: 5,
                    icon: "uil uil-clock",
                    name: "24/7 Support",
                    desc: "It is a long established fact that a reader.",
                    isClass: true,
                },
                {
                    id: 6,
                    icon: "uil uil-users-alt",
                    name: "IT Counsultancy",
                    desc: "It is a long established fact that a reader.",
                    isClass: true,
                },
                {
                    id: 7,
                    icon: "uil uil-file-alt",
                    name: "Dedicated Team",
                    desc: "It is a long established fact that a reader.",
                    isClass: true,
                },
                {
                    id: 8,
                    icon: "uil uil-search",
                    name: "Data Analytics",
                    desc: "It is a long established fact that a reader.",
                    isClass: true,
                },
            ],
            reviews: [
                { id: 1, img: img1, name: "Thomas Israel", post: "C.E.O", desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating: 5 },
                { id: 2, img: img2, name: "Barbara McIntosh", post: "M.D", desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating: 4.5 },
                { id: 3, img: img3, name: "Carl Oliver", post: "P.A", desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating: 5 },
                { id: 4, img: img4, name: "Christa Smith", post: "Manager", desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating: 5 },
                { id: 5, img: img5, name: "Dean Tolle", post: "Developer", desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating: 5 },
                { id: 6, img: img6, name: "Jill Webb", post: "Designer", desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating: 5 },
            ],
        };
    }
    render() {
        return (
            <React.Fragment>
            <NavBar />
                <section className="bg-half-170 bg-light d-table w-100">
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="col-lg-12 text-center">
                                <div className="pages-heading">
                                    <h4 className="title mb-0"> What we do ? </h4>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="/index-portfolio">Portfolio</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
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
                            {this.state.services.map((item, key) => (
                                <Col lg={3} md={4} key={key} className={item.isClass ? "mt-4 pt-2" : "mt-4 mt-sm-0 pt-2 pt-sm-0"} >
                                    <Card className="features feature-primary feature-full-bg rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                                        <span className="h1 icon-color text-primary">
                                            <i className={item.icon}></i>
                                        </span>
                                        <CardBody className="p-0 content">
                                            <h5>{item.name}</h5>
                                            <p className="para text-muted mb-0">{item.desc}</p>
                                        </CardBody>
                                        <span className="big-icon text-center">
                                            <i className={item.icon}></i>
                                        </span>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <div className="container mt-100 mt-60">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Testimonial</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </div>
                        <ReviewsSlider reviews={this.state.reviews} colclassName="mt-4" />
                    </div>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs={12} className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Let's talk about your portfolio</h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary">Get Started Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* import Footer5 */}
                <Footer4 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default PortfolioService;