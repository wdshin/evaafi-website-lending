import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

//import images 
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/2.jpg";
import work3 from "../../../assets/images/work/3.jpg";
import blog1 from "../../../assets/images/blog/06.jpg";
import blog2 from "../../../assets/images/blog/07.jpg";
import blog3 from "../../../assets/images/blog/08.jpg";

//import Components
import NavBar from "./Portfolio/NavBar";
import Footer4 from '../PageFooterLayouts/Footer4';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class PageWorkDetailThree extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <section className="bg-half-170 bg-light d-table w-100">
                    <Container>
                        <Row className="mt-5 justify-content-center">
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
                        <Col lg={5} md={6}>
                                <div className="port-images sticky-sidebar">
                                    <img src={work1} className="img-fluid mx-auto d-block rounded" alt="img" />
                                    <img src={work2} className="img-fluid mx-auto d-block rounded mt-4" alt="img" />
                                    <img src={work3} className="img-fluid mx-auto d-block rounded mt-4" alt="img" />
                                </div>
                            </Col>
                            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="sticky-bar">
                                    <Row className="ms-lg-4">
                                        <Col lg={12}>
                                            <div className="work-details">
                                                <h4 className="title mb-3 border-bottom pb-3">Project Name :</h4>
                                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                                                <p className="text-muted mb-0">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                                            </div>
                                        </Col>

                                        <Col lg={7} className="mt-4 pt-2">
                                            <Card className="work-details rounded bg-light border-0">
                                                <CardBody>
                                                    <h5 className="card-title border-bottom pb-3 mb-3">Project Info :</h5>
                                                    <dl className="row mb-0">
                                                        <dt className="col-md-4 col-5">Client :</dt>
                                                        <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                                                        <dt className="col-md-4 col-5">Category :</dt>
                                                        <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                                                        <dt className="col-md-4 col-5">Date :</dt>
                                                        <dd className="col-md-8 col-7 text-muted">23rd Sep, 2019</dd>

                                                        <dt className="col-md-4 col-5">Website :</dt>
                                                        <dd className="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                                                        <dt className="col-md-4 col-5">Location :</dt>
                                                        <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                                    </dl>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                        </Row>

                        <Row>
                            <Col xs={12} className="mt-4 pt-2">
                                <Pagination className="pagination justify-content-center mb-0">
                                    <PaginationItem><PaginationLink to="#" aria-label="Previous">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem className="active"><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#" aria-label="Next">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </Col>

                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs={12} className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-3">Latest News &amp; Blog</h4>
                                    <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <Card className="blog rounded border-0 shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img src={blog1} className="card-img-top" alt="..." />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <CardBody className="content">
                                        <h5><Link to="#" className="card-title title text-dark">Smartest Applications for Business</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</Link></li>{" "}
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="/page-blog-detail" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                        </div>
                                    </CardBody>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
                                    </div>
                                </Card>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="card blog rounded border-0 shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img src={blog2} className="card-img-top" alt="..." />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <CardBody className="content">
                                        <h5><Link to="#" className="card-title title text-dark">Design your apps in your own way</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</Link></li>{" "}
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="/page-blog-detail" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                        </div>
                                    </CardBody>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="card blog rounded border-0 shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img src={blog3} className="card-img-top" alt="..." />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <CardBody className="content">
                                        <h5><Link to="#" className="card-title title text-dark">Smartest Applications for Business</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</Link></li>{" "}
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="/page-blog-detail" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                        </div>
                                    </CardBody>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
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

export default PageWorkDetailThree;