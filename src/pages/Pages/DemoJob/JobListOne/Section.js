import React, { Component } from 'react';

//import images
import jobBg from "../../../../assets/images/job/bg.png";
import { Col, Container, Row } from 'reactstrap';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-primary d-table w-100"
                    style={{ backgroundImage: `url(${jobBg})` }}>
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h2 className="title text-white title-dark mb-0"> Jobs / Careers </h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section;