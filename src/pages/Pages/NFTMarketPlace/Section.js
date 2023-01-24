import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Popup from '../../../components/Layout/popup';

//import Images
import homebg from "../../../assets/images/nft/home.png";

const Section = () => {
    return (
        <React.Fragment>
            <section className="bg-home d-flex align-items-center background-effect bg-soft-primary" id="home">
            <Container className="container z-index-1">
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <div className="title-heading">
                            <h4 className="display-4 fw-bold text-dark mb-4">Discover, <br/> find and sell <br/> monster NFTs</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                        
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary me-1"><i className="uil uil-bitcoin"></i> Mint NFT</Link>{" "}
                                <Link to="#" className="btn btn-soft-primary"><i className="uil uil-file-bookmark-alt"></i> Explore</Link>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <img src={homebg} className="img-fluid" alt=""/>
                    </Col>
                </Row>
            </Container>

            <ul className="circles p-0 mb-0">
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
        </section>

        <Popup/>
        </React.Fragment>
    );
}

export default Section;