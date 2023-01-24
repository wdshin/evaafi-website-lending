import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ComponentHeader = ({ title, breadcrumb }) => {
    return (
        <React.Fragment>
            <section className="bg-half-170 bg-light d-table w-100">
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="pages-heading">
                                <h4 className="title mb-0"> {title} </h4>
                            </div>
                        </Col>
                    </Row>

                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default ComponentHeader;