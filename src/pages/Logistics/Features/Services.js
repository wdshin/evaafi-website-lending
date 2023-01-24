import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { servicesData } from "../../../common/data";

const Services = () => {
    return (
        <React.Fragment>
            <Container className="mt-100 mt-60">
                <Row className="justify-content-center">
                    <Col className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Explore Our Services</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {servicesData.map((item, key) => (
                        <Col key={key} lg={4} md={6} className="mt-4 pt-2">
                            <Card className="features feature-primary feature-clean explore-feature p-4 border-0 rounded-md shadow text-center">
                                <div className="icons text-center mx-auto">
                                    <i className={"uil d-block rounded h3 mb-0 mx-auto " + item.icon}></i>
                                </div>

                                <CardBody className="card-body p-0 content">
                                    <h5 className="mt-4"><Link to="#" className="title text-dark">{item.title}</Link></h5>
                                    <p className="text-muted">The most well-known which is said to have originated</p>

                                    <Link to="#" className="read-more">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Services;