import React, { useState } from 'react';
import { Card, CardBody, Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from "./Portfolio/NavBar";

//import Images
import work13 from "../../../assets/images/work/13.jpg";
import work21 from "../../../assets/images/work/21.jpg";
import work14 from "../../../assets/images/work/14.jpg";
import work22 from "../../../assets/images/work/22.jpg";
import work16 from "../../../assets/images/work/16.jpg";
import work23 from "../../../assets/images/work/23.jpg";
import work15 from "../../../assets/images/work/15.jpg";
import work17 from "../../../assets/images/work/17.jpg";
import work24 from "../../../assets/images/work/24.jpg";
import work18 from "../../../assets/images/work/18.jpg";
import work19 from "../../../assets/images/work/19.jpg";
import Footer4 from "../PageFooterLayouts/Footer4";
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Light box
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    work13,
    work21,
    work14,
    work22,
    work23,
    work16,
    work17,
    work18,
    work24,
    work15,
    work19,
];

const PageMasonryTwo = () => {
    const [filter, setFilter] = useState("All");

    const [photoIndex, setphotoIndex] = useState(0);
    const [isGallery, setisGallery] = useState(false);

    const masnoryTwoData = [
        {
            id: 1,
            img: work13,
            subTitle: "Mockup Collection",
            category: "Mockup",
            categories: "branding",
            imgIndex: 0,
        },
        {
            id: 2,
            img: work21,
            subTitle: "Mockup Collection",
            category: "Mockup",
            categories: "designing",
            imgIndex: 1,
        },
        {
            id: 3,
            img: work14,
            subTitle: "Abstract images",
            category: "Abstract",
            categories: "photography",
            imgIndex: 2,
        },
        {
            id: 4,
            img: work22,
            subTitle: "Yellow bg with Books",
            category: "Books",
            categories: "development",
            imgIndex: 3,
        },
        {
            id: 5,
            img: work23,
            subTitle: "Mockup box with paints",
            category: "Photography",
            categories: "branding",
            imgIndex: 4,
        },
        {
            id: 6,
            img: work16,
            subTitle: "Company V-card",
            category: "V-card",
            categories: "branding",
            imgIndex: 5,
        },
        {
            id: 7,
            img: work17,
            subTitle: "Pen and article",
            category: "Article",
            categories: "development",
            imgIndex: 6,
        },
        {
            id: 8,
            img: work18,
            subTitle: "Logo Vectors",
            category: "Logos",
            categories: "photography",
            imgIndex: 7,
        },
        {
            id: 9,
            img: work24,
            subTitle: "White mockup box",
            category: "Color",
            categories: "photography",
            imgIndex: 8,
        },
        {
            id: 10,
            img: work15,
            subTitle: "Coffee cup",
            category: "Cups",
            categories: "designing",
            imgIndex: 9,
        },
        {
            id: 11,
            img: work19,
            subTitle: "Black and white T-shirt",
            category: "Clothes",
            categories: "branding",
            imgIndex: 10,
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
                                <h4 className="title mb-0"> Work Masonry </h4>
                            </div>
                        </Col>
                    </Row>

                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>{" "}
                                <li className="breadcrumb-item"><Link to="#">Work</Link></li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">Masonry</li>
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
                    <Row className="justify-content-center">
                        <Col className="col-12 mb-4 filters-group-wrap">
                            <div className="filters-group">
                                <ul className="container-filter list-inline mb-0 filter-options text-center">
                                    <li
                                        onClick={() => setFilter("All")}
                                        className={filter === "All" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}
                                        data-group="all">All</li>{" "}
                                    <li
                                        onClick={() => setFilter("branding")}
                                        className={filter === "Branding" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}
                                        data-group="branding">Branding</li>{" "}
                                    <li
                                        onClick={() => setFilter("designing")}
                                        className={filter === "Designing" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}
                                        data-group="designing">Designing</li>{" "}
                                    <li
                                        onClick={() => setFilter("photography")}
                                        className={filter === "Photography" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}
                                        data-group="photography">Photography</li>{" "}
                                    <li
                                        onClick={() => setFilter("development")}
                                        className={filter === "Development" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}
                                        data-group="development">Development</li>{" "}
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row id="grid">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry columnsCount={3} gutter="0px">
                                {(masnoryTwoData.filter(({ categories }) => filter === categories || filter === "All")).map((item, key) => (
                                    <Col key={key} className="col-12 spacing picture-item" data-groups='["branding"]'>
                                        <Card className="border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                            <CardBody className="p-0">
                                                <img src={item.img} className="img-fluid" alt="work" />
                                                <div className="overlay-work"></div>
                                                <div className="content">
                                                    <h5 className="mb-1"><Link to="/portfolio-detail-one" className="text-white title">{item.subTitle}</Link></h5>
                                                    <h6 className="text-white-50 tag mt-1 mb-0">{item.category}</h6>
                                                </div>
                                                <div className="icons text-center">
                                                    <Link to="#" className="work-icon bg-white d-inline-block rounded-pill lightbox">
                                                        <i><FeatherIcon icon="camera" onClick={() => { setisGallery(true); setphotoIndex(item.imgIndex) }} className="fea icon-sm image-icon" /></i></Link>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                        {isGallery ? (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                enableZoom={true}
                                onCloseRequest={() => {
                                    setisGallery(false);
                                }}
                                onMovePrevRequest={() => {
                                    setphotoIndex((photoIndex + images.length - 1) % images.length);
                                }}
                                onMoveNextRequest={() => {
                                    setphotoIndex((photoIndex + 1) % images.length);
                                }}
                                imageCaption={"Project " + parseFloat(photoIndex + 1)}
                            />
                        ) : null}
                    </Row>

                    <Row>
                        <Col className="col-12 mt-4 pt-2">
                            <Pagination listClassName="justify-content-center mb-0">
                                <PaginationItem><PaginationLink to="#">Prev</PaginationLink></PaginationItem>
                                <PaginationItem active><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Footer4 />
            <ThemeSwitcher/>
        </React.Fragment>
    );
}

export default PageMasonryTwo;