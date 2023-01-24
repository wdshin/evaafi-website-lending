import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    class: "",
                    icon: "uil uil-airplay",
                    name: "Consulting Services",
                },
                {
                    id: 2,
                    class: "mt-4 mt-sm-0 pt-2 pt-sm-0",
                    icon: "uil uil-heart",
                    name: "Business Setup",
                },
                {
                    id: 3,
                    class: "mt-lg-0 pt-2 pt-lg-0",
                    icon: "uil uil-eye",
                    name: "Investment",
                },
                {
                    id: 4,
                    class: "mt-lg-0 pt-2 pt-lg-0",
                    icon: "uil uil-expand-arrows",
                    name: "Management",
                },
                {
                    id: 5,
                    class: "mt-4 pt-2",
                    icon: "uil uil-layer-group",
                    name: "Acquisitions Consulting",
                },
                {
                    id: 6,
                    class: "mt-4 pt-2",
                    icon: "uil uil-airplay",
                    name: "Company Management",
                },
                {
                    id: 7,
                    class: "mt-4 pt-2",
                    icon: "uil uil-focus-target",
                    name: "Placement Consulting",
                },
                {
                    id: 8,
                    class: "mt-4 pt-2",
                    icon: "uil uil-analytics",
                    name: "Corporate services",
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="align-items-center">
                        {(this.state.features || []).map((item, key) => (
                            <Col key={key} lg={3} md={6} className={item.class}>
                                <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
                                    <div className="icons text-primary text-center">
                                        <i className={item.icon + " d-block rounded h3 mb-0"}></i>
                                    </div>
                                    <CardBody className="p-0 mt-4">
                                        <Link to="#" className="title h5 text-dark">{item.name}</Link>
                                        <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                        <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                        <i className={item.icon + " text-primary full-img"}></i>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Features;