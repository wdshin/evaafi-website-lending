import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';

//import images
import blog1 from "../../../assets/images/blog/01.jpg";
import blog2 from "../../../assets/images/blog/02.jpg";
import blog3 from "../../../assets/images/blog/03.jpg";
import blog4 from "../../../assets/images/blog/04.jpg";
import blog5 from "../../../assets/images/blog/05.jpg";
import blog6 from "../../../assets/images/blog/06.jpg";
import blog7 from "../../../assets/images/blog/07.jpg";
import blog8 from "../../../assets/images/blog/08.jpg";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [
                {
                    id: 1,
                    img: blog1,
                    badge: "Business",
                    title: "How apps is changing the IT"
                },
                {
                    id: 2,
                    img: blog2,
                    badge: "Career",
                    title: "What Is Future Of Recruitment?"
                },
                {
                    id: 3,
                    img: blog3,
                    badge: "Consulting",
                    title: "Can Our Consultants Help?"
                },
                {
                    id: 4,
                    img: blog4,
                    badge: "Business",
                    title: "How apps is changing the IT world"
                },
                {
                    id: 5,
                    img: blog5,
                    badge: "Consulting",
                    title: "Coping Under the Current Climate"
                },
                {
                    id: 6,
                    img: blog6,
                    badge: "Success",
                    title: "Purpose-Driven Employers Succeed"
                },
                {
                    id: 7,
                    img: blog7,
                    badge: "Corporate",
                    title: "Corporate Teams Respond After Crisis"
                },
                {
                    id: 8,
                    img: blog8,
                    badge: "Business",
                    title: "Share Statistics With Team Leader"
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
                            {(this.state.blog || []).map((item, key) => (
                                <Col lg={4} md={6} xs={12} key={key} className="mb-4 pb-2">
                                    <Card className="border-0 blog shadow overflow-hidden">
                                        <img src={item.img} className="img-fluid" alt="" />

                                        <CardBody className="content">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li className="text-muted">22nd June</li>
                                                <li className="text-muted"><Link to="#" className="badge bg-soft-primary">{item.badge}</Link></li>
                                            </ul>

                                            <h5><Link to="#" className="card-title title text-dark">{item.title}</Link></h5>

                                            <div className="post-meta d-flex justify-content-between mt-3">
                                                <Link to="/corporate-blog-detail" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                            <div className="col-12">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;