import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from "feather-icons-react";

import blog1 from "../../../../assets/images/blog/01.jpg";
import blog2 from "../../../../assets/images/blog/02.jpg";
import blog3 from "../../../../assets/images/blog/03.jpg";
import blog4 from "../../../../assets/images/blog/04.jpg";
import blog5 from "../../../../assets/images/blog/05.jpg";
import blog6 from "../../../../assets/images/blog/06.jpg";
import blog7 from "../../../../assets/images/blog/07.jpg";
import blog8 from "../../../../assets/images/blog/08.jpg";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [
                {
                    id: 1,
                    badge: "Men",
                    img: blog1,
                    title: "A team of designers that make dreams come true"
                },
                {
                    id: 2,
                    badge: "Woman",
                    img: blog2,
                    title: "The best ways to change your summer"
                },
                {
                    id: 3,
                    badge: "Kids",
                    img: blog3,
                    title: "Men’s fashion & shopping in leather"
                },
                {
                    id: 4,
                    badge: "Teach",
                    img: blog4,
                    title: "A team of designers that make dreams come true"
                },
                {
                    id: 5,
                    badge: "Mobile",
                    img: blog5,
                    title: "The best ways to change your summer"
                },
                {
                    id: 6,
                    badge: "Leptop",
                    img: blog6,
                    title: "A team of designers that make dreams come true"
                },
                {
                    id: 7,
                    badge: "Accessories",
                    img: blog7,
                    title: "A team of designers that make dreams come true"
                },
                {
                    id: 8,
                    badge: "Sports",
                    img: blog8,
                    title: "The best ways to change your summer"
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            {(this.state.blog || []).map((blog, key) => (
                                <Col key={key} lg={4} md={6} className="mb-4 pb-2">
                                    <Card className="blog border-0 shadow rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img src={blog.img} className="img-fluid" alt="" />
                                            <div className="position-absolute top-0 start-0 mt-2 ms-2">
                                                <Link to="#" className="badge badge-link bg-primary">{blog.badge}</Link>
                                            </div>
                                        </div>
                                        <CardBody className="content">
                                            <ul className="list-unstyled mb-2">
                                                <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2021</li>{" "}
                                                <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                            </ul>
                                            <Link to="/shop-blog-detail" className="text-dark title h5">{blog.title}</Link>

                                            <div className="mt-2">
                                                <Link to="/shop-blog-detail" className="text-primary">Read more{" "}
                                                    <FeatherIcon
                                                        icon="arrow-right"
                                                        className="fea icon-sm"
                                                    />
                                                </Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                            <Col xs={12}>
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                        </ul>
                    </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;