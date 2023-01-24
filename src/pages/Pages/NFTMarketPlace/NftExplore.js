import React from 'react';
import { Container, Col, Row, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';
import Footer3 from "../PageFooterLayouts/Footer3";
import Popup from '../../../components/Layout/popup';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

//import Images
import nft01 from "../../../assets/images/nft/1.jpg";
import nft02 from "../../../assets/images/nft/2.jpg";
import nft03 from "../../../assets/images/nft/3.jpg";
import nft04 from "../../../assets/images/nft/4.jpg";
import nft05 from "../../../assets/images/nft/5.jpg";
import nft06 from "../../../assets/images/nft/6.jpg";
import nft07 from "../../../assets/images/nft/7.jpg";
import nft08 from "../../../assets/images/nft/8.jpg";
import nft09 from "../../../assets/images/nft/9.jpg";
import nft10 from "../../../assets/images/nft/10.jpg";
import nft11 from "../../../assets/images/nft/11.jpg";
import nft12 from "../../../assets/images/nft/12.jpg";
import client01 from "../../../assets/images/client/01.jpg";
import client02 from "../../../assets/images/client/02.jpg";
import client03 from "../../../assets/images/client/03.jpg";
import client04 from "../../../assets/images/client/04.jpg";
import client05 from "../../../assets/images/client/05.jpg";
import client06 from "../../../assets/images/client/06.jpg";
import client07 from "../../../assets/images/client/07.jpg";
import client08 from "../../../assets/images/client/08.jpg";


const NftExplore = () => {
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
        {
            id: 9,
            cardImg: nft09,
            badge: 239,
            title: "09 nft title",
            img: client05,
        },
        {
            id: 10,
            cardImg: nft10,
            badge: 236,
            title: "10 nft title",
            img: client06,
        },
        {
            id: 11,
            cardImg: nft11,
            badge: 237,
            title: "11 nft title",
            img: client07,
        },
        {
            id: 12,
            cardImg: nft12,
            badge: 238,
            title: "12 nft title",
            img: client08,
        },
    ];
    return (
        <React.Fragment>
            <NavBar />
            <section className="bg-half-170 bg-light d-table w-100">
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="pages-heading">
                                <h4 className="title mb-0"> Explore Items </h4>
                            </div>
                        </Col>
                    </Row>

                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                <li className="breadcrumb-item"><Link to="index">Landrick</Link></li>{" "}
                                <li className="breadcrumb-item"><Link to="index-nft">NFTs</Link></li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">Explore</li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-color-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <Container>
                    <Row>
                        {productsData.map((item, key) => (
                            <Col key={key} lg={3} md={4} sm={6} className="col-12">
                                <Card className="nft nft-item nft-primary rounded shadow overflow-hidden">
                                    <div className="nft-image position-relative overflow-hidden">
                                        <img src={item.cardImg} className="img-fluid item-img" alt="" />
                                        <div className="overlay"></div>
                                        <div className="bid-btn p-3 text-center">
                                            <Link to="/nft-item-detail" className="btn btn-pills">
                                                <i className="mdi mdi-gavel fs-6 me-2"></i> Bid</Link>
                                        </div>
                                        <div className="position-absolute top-0 start-0 m-2">
                                            <Link to="#"><img src={item.img} className="avatar avatar-sm-sm rounded-pill shadow-md" alt="" /></Link>
                                        </div>
                                        <div className="position-absolute top-0 end-0 m-2">
                                            <Link to="#" className="badge rounded-md bg-light shadow">
                                                <i className="mdi mdi-heart align-middle text-danger"></i>
                                                <span className="text-dark ms-1">{item.badge}</span></Link>
                                        </div>
                                    </div>

                                    <CardBody className="p-3">
                                        <Link to="nft-item-detail" className="h5 title text-dark">#{item.title}</Link>

                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <span className="text-muted">12 in stock</span>
                                            <span className="text-dark">Price: <span className="link">2.333ETH</span></span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col className="col-12 mt-4 pt-2">
                            <Pagination className="pagination justify-content-center mb-0">
                                <PaginationItem className="page-item"><PaginationLink className="page-link" to="#" aria-label="Previous">Prev</PaginationLink></PaginationItem>
                                <PaginationItem className="page-item active"><PaginationLink className="page-link" to="#">1</PaginationLink></PaginationItem>
                                <PaginationItem className="page-item"><PaginationLink className="page-link" to="#">2</PaginationLink></PaginationItem>
                                <PaginationItem className="page-item"><PaginationLink className="page-link" to="#">3</PaginationLink></PaginationItem>
                                <PaginationItem className="page-item"><PaginationLink className="page-link" to="#" aria-label="Next">Next</PaginationLink></PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer3 />
            <ThemeSwitcher/>
            <Popup/>
        </React.Fragment>
    );
}

export default NftExplore;