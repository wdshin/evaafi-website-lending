import React from 'react';
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Images
import nft01 from "../../../assets/images/nft/1.jpg";
import nft02 from "../../../assets/images/nft/2.jpg";
import nft03 from "../../../assets/images/nft/3.jpg";
import nft04 from "../../../assets/images/nft/4.jpg";
import nft05 from "../../../assets/images/nft/5.jpg";
import nft06 from "../../../assets/images/nft/6.jpg";
import nft07 from "../../../assets/images/nft/7.jpg";
import nft08 from "../../../assets/images/nft/8.jpg";
import client01 from "../../../assets/images/client/01.jpg";
import client02 from "../../../assets/images/client/02.jpg";
import client03 from "../../../assets/images/client/03.jpg";
import client04 from "../../../assets/images/client/04.jpg";
import client05 from "../../../assets/images/client/05.jpg";
import client06 from "../../../assets/images/client/06.jpg";
import client07 from "../../../assets/images/client/07.jpg";
import client08 from "../../../assets/images/client/08.jpg";

const Products = () => {
    const productsData = [
        {
            id: 1,
            cardImg: nft01,
            badge: 231,
            title: "01 nft title",
            img: client01,          
        },
        {
            id: 2,
            cardImg: nft02,
            badge: 232,
            title: "02 nft title",
            img: client02,            
        },
        {
            id: 3,
            cardImg: nft03,
            badge: 233,
            title: "03 nft title",
            img: client03,            
        },
        {
            id: 4,
            cardImg: nft04,
            badge: 234,
            title: "04 nft title",
            img: client04,           
        },
        {
            id: 5,
            cardImg: nft05,
            badge: 235,
            title: "05 nft title",
            img: client05,            
        },
        {
            id: 6,
            cardImg: nft06,
            badge: 236,
            title: "06 nft title",
            img: client06,           
        },
        {
            id: 7,
            cardImg: nft07,
            badge: 237,
            title: "07 nft title",
            img: client07,           
        },
        {
            id: 8,
            cardImg: nft08,
            badge: 238,
            title: "08 nft title",
            img: client08,           
        },
    ];
    return (
        <React.Fragment>
            <Container className="mt-100 mt-60">
                <Row className="justify-content-center">
                    <Col className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-4">Explore Hot Products</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                {productsData.map((item, key) => (
                    <Col key={key} lg={3} md={4} sm={6} className="col-12 mt-4 pt-2">
                        <Card className="nft nft-item nft-primary rounded shadow overflow-hidden">
                            <div className="nft-image position-relative overflow-hidden">
                                <img src={item.cardImg} className="img-fluid item-img" alt=""/>
                                <div className="overlay"></div>
                                <div className="bid-btn p-3 text-center">
                                    <Link to="/nft-item-detail" className="btn btn-pills"><i className="mdi mdi-gavel fs-6 me-2"></i> Bid</Link>
                                </div>
                                <div className="position-absolute top-0 start-0 m-2">
                                    <Link to="#"><img src={item.img} className="avatar avatar-sm-sm rounded-pill shadow-md" alt=""/></Link>
                                </div>
                                <div className="position-absolute top-0 end-0 m-2">
                                    <Link to="#" className="badge rounded-md bg-light shadow">
                                    <i className="mdi mdi-heart align-middle text-danger"></i> {" "}
                                    <span className="text-dark">{item.badge}</span></Link>
                                </div>
                            </div>

                            <CardBody className="p-3">
                                <Link to="/nft-item-detail" className="h5 title text-dark">#{item.title}</Link>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted">12 in stock</span>
                                    <span className="text-dark">Price: <span className="link">2.333ETH</span></span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col> 
                ))}                             
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Products;