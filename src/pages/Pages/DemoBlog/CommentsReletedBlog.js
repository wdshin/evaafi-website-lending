import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import blog1 from "../../../assets/images/blog/01.jpg";
import blog2 from "../../../assets/images/blog/02.jpg";


class CommentsReletedBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="shadow rounded border-0 mt-4">
                    <CardBody>
                        <h5 className="card-title mb-0">Comments :</h5>

                        <ul className="media-list list-unstyled mb-0">
                            <li className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <Link className="pe-3" to="#">
                                            <img src={client1} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                        </Link>
                                        <div className="commentor-detail">
                                            <h6 className="mb-0"><Link to="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                            <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                                        </div>
                                    </div>
                                    <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                </div>
                            </li>

                            <li className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <Link className="pe-3" to="#">
                                            <img src={client2} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                        </Link>
                                        <div className="commentor-detail">
                                            <h6 className="mb-0"><Link to="#" className="media-heading text-dark">Tammy Camacho</Link></h6>
                                            <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                                        </div>
                                    </div>
                                    <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                </div>
                            </li>

                            <li className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <Link className="pe-3" to="#">
                                            <img src={client3} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                        </Link>
                                        <div className="commentor-detail">
                                            <h6 className="mb-0"><Link to="#" className="media-heading text-dark">Tammy Camacho</Link></h6>
                                            <small className="text-muted">16th August, 2019 at 03:44 pm</small>
                                        </div>
                                    </div>
                                    <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                </div>

                                <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                                    <li className="mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link className="pe-3" to="#">
                                                    <img src={client1} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                </Link>
                                                <div className="commentor-detail">
                                                    <h6 className="mb-0"><Link to="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                                    <small className="text-muted">17th August, 2019 at 01:25 pm</small>
                                                </div>
                                            </div>
                                            <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CardBody>
                </Card>

                <Card className="shadow rounded border-0 mt-4">
                    <CardBody>
                        <h5 className="card-title mb-0">Leave A Comment :</h5>

                        <form className="mt-3">
                            <Row>
                                <Col md={12}>
                                    <div className="mb-3">
                                        <label className="form-label">Your Comment</label>
                                        <div className="form-icon position-relative">
                                            <i data-feather="message-circle" className="fea icon-sm icons"></i>
                                            <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control ps-5" required=""></textarea>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label className="form-label">Name <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <i data-feather="user" className="fea icon-sm icons"></i>
                                            <input id="name2" name="name" type="text" placeholder="Name" className="form-control ps-5" required="" />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <i data-feather="mail" className="fea icon-sm icons"></i>
                                            <input id="email2" type="email" placeholder="Email" name="email" className="form-control ps-5" required="" />
                                        </div>
                                    </div>
                                </Col>

                                <Col md={12}>
                                    <div className="send d-grid">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </CardBody>
                </Card>

                <Card className="shadow rounded border-0 mt-4">
                    <CardBody>
                        <h5 className="card-title mb-0">Related Posts :</h5>

                        <Row>
                            <Col lg={6} className="mt-4 pt-2">
                                <Card className="blog rounded border-0 shadow">
                                    <div className="position-relative">
                                        <img src={blog1} className="card-img-top rounded-top" alt="..." />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <CardBody className="content">
                                        <h5><Link to="#" className="card-title title text-dark">Design your apps in your own way</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</Link></li>{" "}
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="/blog-standard-post" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                        </div>
                                    </CardBody>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
                                    </div>
                                </Card>
                            </Col>

                            <Col lg={6} className="mt-4 pt-2">
                                <Card className="blog rounded border-0 shadow">
                                    <div className="position-relative">
                                        <img src={blog2} className="card-img-top rounded-top" alt="..." />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <CardBody className="content">
                                        <h5><Link to="#" className="card-title title text-dark">How apps is changing the IT world</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="/blog-standard-post" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                        </div>
                                    </CardBody>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <Link to="/blog-standard-post" className="bg-soft-primary px-2 rounded"><i className="uil uil-arrow-left h5 mb-0 align-middle"></i> Prev </Link>

                    <Link to="/index-blog" className="btn btn-pills btn-icon btn-soft-primary">
                        <FeatherIcon
                            icon="home"
                            className="icons"
                        />
                    </Link>

                    <Link to="/blog-standard-post" className="bg-soft-primary px-2 rounded"> Next <i className="uil uil-arrow-right h5 mb-0 align-middle"></i></Link>
                </div>
            </React.Fragment>
        );
    }
}

export default CommentsReletedBlog;