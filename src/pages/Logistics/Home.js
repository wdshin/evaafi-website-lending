import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { logisticsHomeData } from "../../common/data";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        fade: true,
    };
    const slides = logisticsHomeData.map((item, key) => {
        return (
            <React.Fragment key={key}>
                <section data-bs-ride="carousel">
                    <div
                        id="carouselExampleInterval"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="bg-home d-flex align-items-center" style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className="bg-overlay"></div>
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col className="col">
                                                <div className="title-heading position-relative mt-4 text-center" style={{ zIndex: 1 }}>
                                                    <h1 className="fw-bold display-4 text-white title-dark mb-3">{item.titleLine1} <br />{item.titleLine2}</h1>
                                                    <p className="para-desc mx-auto text-white-50">{item.desc}</p>
                                                    <div className="mt-4 pt-2">
                                                        <Link to="#!" className="btn btn-primary">Learn More</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    });
    return (
        <React.Fragment>
            <section className="home-slider position-relative">
                <Slider className="carousel slide carousel-fade" {...settings}>
                    {slides}
                </Slider>
            </section>
        </React.Fragment>
    );
};

export default Home;