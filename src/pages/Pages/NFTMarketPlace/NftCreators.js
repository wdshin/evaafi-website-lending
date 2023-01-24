import React from 'react';
import { Container, Row, Col, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer3 from "../PageFooterLayouts/Footer3";
import Popup from '../../../components/Layout/popup';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

//import Images
import client01 from "../../../assets/images/client/01.jpg";
import client02 from "../../../assets/images/client/02.jpg";
import client03 from "../../../assets/images/client/03.jpg";
import client04 from "../../../assets/images/client/04.jpg";
import client05 from "../../../assets/images/client/05.jpg";
import client06 from "../../../assets/images/client/06.jpg";
import client07 from "../../../assets/images/client/07.jpg";
import client08 from "../../../assets/images/client/08.jpg";

const NftCreators = () => {
    const nftCreatorsData = [
        {
            id: 1,
            badgeNo: 1,
            img: client01,
            author: "Jordan Joo",
        },
        {
            id: 2,
            badgeNo: 2,
            img: client02,
            author: "Sofia Malik",
        },
        {
            id: 3,
            badgeNo: 3,
            img: client03,
            author: "Cristina Murphy",
        },
        {
            id: 4,
            badgeNo: 4,
            img: client04,
            author: "Jack Lili",
        },
        {
            id: 5,
            badgeNo: 5,
            img: client05,
            author: "Lilia Moris",
        },
        {
            id: 6,
            badgeNo: 6,
            img: client06,
            author: "Anderson",
        },
        {
            id: 7,
            badgeNo: 7,
            img: client07,
            author: "Joe Moris",
        },
        {
            id: 8,
            badgeNo: 8,
            img: client08,
            author: "John Carter",
        },
        {
            id: 9,
            badgeNo: 9,
            img: client01,
            author: "Jordan Joo",
        },
        {
            id: 10,
            badgeNo: 10,
            img: client02,
            author: "Sofia Malik",
        },
        {
            id: 11,
            badgeNo: 11,
            img: client03,
            author: "Cristina Murphy",
        },
        {
            id: 12,
            badgeNo: 12,
            img: client04,
            author: "Jack Lili",
        },
        {
            id: 13,
            badgeNo: 13,
            img: client05,
            author: "Lilia Moris",
        },
        {
            id: 14,
            badgeNo: 14,
            img: client06,
            author: "Anderson",
        },
        {
            id: 15,
            badgeNo: 15,
            img: client07,
            author: "Joe Moris",
        },
        {
            id: 16,
            badgeNo: 16,
            img: client08,
            author: "John Carter",
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
                                <h4 className="title mb-0"> Creators List </h4>
                            </div>
                        </Col>
                    </Row>

                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                <li className="breadcrumb-item"><Link to="/index-nft">NFTs</Link></li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">Creator</li>
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
                    <Row className="g-4">
                        {nftCreatorsData.map((item, key) => (
                            <Col key={key} lg={3} md={4} sm={6} className="col-12">
                                <Card className="nft nft-primary nft-creator border-0 rounded-md shadow">
                                    <CardBody className="p-3">
                                        <div className="pb-3 border-bottom">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-soft rounded-pill">No. #{item.badgeNo}</span>

                                                <Link to="/nft-explore" className="text-dark h5 mb-0 read-more"><i className="uil uil-arrow-circle-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="content mt-3">
                                            <div className="position-relative text-center">
                                                <img src={item.img} className="avatar avatar-small rounded-pill shadow" alt="" />

                                                <div className="author mt-2">
                                                    <Link to="/account-profile" className="text-dark h6 name">{item.author}</Link>
                                                    <small className="d-block fw-bold mt-1">0.75<span className="text-muted">ETH</span></small>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <div className="col-12 mt-4 pt-2">
                            <Pagination className="pagination justify-content-center mb-0">
                                <PaginationItem><PaginationLink to="#" aria-label="Previous">Prev</PaginationLink></PaginationItem>
                                <PaginationItem className="active"><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink to="#" aria-label="Next">Next</PaginationLink></PaginationItem>
                            </Pagination>
                        </div>
                    </Row>
                </Container>
            </section>
            <Footer3 />
            <ThemeSwitcher/>
            <Popup/>
        </React.Fragment>
    );
}

export default NftCreators;















