import React from 'react';
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Images
import paintBucket from "../../../assets/images/icon/paint-bucket.png";
import wave from "../../../assets/images/icon/wave.png";
import domain from "../../../assets/images/icon/domain.png";
import chatbot from "../../../assets/images/icon/chatbot.png";
import mail from "../../../assets/images/icon/mail.png";
import cubes from "../../../assets/images/icon/cubes.png";

//import components
import Products from "./Products";
import Creators from "./Creators";

const Categories = () => {
    const CategoriesData = [
        {
            id: 1,
            img: paintBucket,
            category: "Arts",
        },
        {
            id: 2,
            img: wave,
            category: "Musics",
        },
        {
            id: 3,
            img: domain,
            category: "Domain",
        },
        {
            id: 4,
            img: chatbot,
            category: "Virtual World",
        },
        {
            id: 5,
            img: mail,
            category: "Trading Cards",
        },
        {
            id: 6,
            img: cubes,
            category: "Collectibles",
        },
    ];
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <h4 className="title mb-4">Browse by Categories</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {CategoriesData.map((item, key) => (
                            <Col key={key} lg={2} md={4} className="col-6 mt-4 pt-2">
                                <Card className="features feature-primary explore-feature shadow rounded text-center">
                                    <CardBody>
                                        <div className="icons rounded-circle shadow-lg d-inline-block">
                                            <img src={item.img} className="avatar avatar-md-sm" alt="" />
                                        </div>
                                        <div className="content mt-3">
                                            <h6 className="mb-0"><Link to="#" className="title text-dark">{item.category}</Link></h6>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Products/>
                <Creators/>
            </section>
        </React.Fragment>
    );
}

export default Categories;