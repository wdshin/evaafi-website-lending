import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { Card, Col, Container, PaginationItem, PaginationLink, Row } from 'reactstrap';

//import images
import shape from "../../assets/images/shape02.png";
import blog1 from "../../assets/images/blog/01.jpg";
import blog2 from "../../assets/images/blog/02.jpg";
import blog3 from "../../assets/images/blog/03.jpg";
import blog4 from "../../assets/images/blog/04.jpg";
import blog5 from "../../assets/images/blog/05.jpg";
import blog6 from "../../assets/images/blog/06.jpg";
import blog7 from "../../assets/images/blog/07.jpg";
import blog8 from "../../assets/images/blog/08.jpg";
import Footer from './Footer';

class CryptoBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogDetails: [
                {
                    id: 1,
                    img: blog1,
                    badgeName: "ICO",
                    title: "Start The Redemption Before The ICO Completion"
                },
                {
                    id: 2,
                    img: blog2,
                    badgeName: "Bitcoin",
                    title: "New Trends In UI/UX Design World Integration"
                },
                {
                    id: 3,
                    img: blog3,
                    badgeName: "Cryptocurrency",
                    title: "The Crypto Project Has Reached Seven Billions"
                },
                {
                    id: 4,
                    img: blog4,
                    badgeName: "Blockchain",
                    title: "What is blockchain ?"
                },
                {
                    id: 5,
                    img: blog5,
                    badgeName: "Crypto",
                    title: "Top 10 cryptocurrency"
                },
                {
                    id: 6,
                    img: blog6,
                    badgeName: "Trading",
                    title: "Trading Platform"
                },
                {
                    id: 7,
                    img: blog7,
                    badgeName: "Crypto",
                    title: "The Crypto Project Has Reached Seven Billions"
                },
                {
                    id: 8,
                    img: blog8,
                    badgeName: "Integration",
                    title: "New Trends In UI/UX Design World Integration"
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <section className="bg-half-170 bg-light d-table w-100"
                    style={{ background: `url(${shape}) top left` }}
                >
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={!2} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title mb-0"> Blogs & News </h4>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="/index-crypto">Crypto</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
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
                            {(this.state.blogDetails).map((item, key) => (
                                <Col lg={4} md={6} xs={12} key={key}>
                                    <Card className="blog border-0 rounded shadow overflow-hidden">
                                        <img src={item.img} className="img-fluid" alt="" />

                                        <div className="card-body content">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="badge bg-soft-primary">{item.badgeName}</span>
                                                <small className="text-muted">31st May 2021</small>
                                            </div>
                                            <Link to="/crypto-blog-detail" className="title text-dark h5">{item.title}</Link>

                                            <div className="mt-3">
                                                <Link to="/crypto-blog-detail" className="link">Read More <i className="uil uil-arrow-right align-middle"></i></Link>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col xs={12} className="mt-4 pt-2">
                                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                    <PaginationItem><PaginationLink to="#" aria-label="Previous">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem className="active"><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#" aria-label="Next">Next</PaginationLink></PaginationItem>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title text-center">
                                    <h4 className="title mb-4">Be the first to know about Crypto news everyday</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>

                                    <div className="subcribe-form mt-5">
                                        <form>
                                            <div className="mb-0">
                                                <input type="email" id="email" name="email" className="rounded-pill border" required placeholder="Enter your email address" />
                                                <button type="submit" className="btn btn-pills btn-primary">Notify me</button>
                                            </div>
                                        </form>
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

export default CryptoBlog;