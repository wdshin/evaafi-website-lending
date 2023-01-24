import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Iamges
import bgImg from "../../../assets/images/nft/bg.jpg";

const CTA = () => {
    return (
        <React.Fragment>
            <section className="section" style={{background: `url(${bgImg}) top center`}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <Container>
                <Row className="align-items-end">
                    <Col lg={8} md={6} className="col-12">
                        <div className="section-title">
                            <h4 className="title text-white title-dark mb-4">Start your own collection today</h4>
                            <p className="text-white-50 para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="col-12">
                        <div className="text-md-end">
                            <Link to="#" className="btn btn-primary"><i className="uil uil-bookmark"></i> Creat your collection</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default CTA;