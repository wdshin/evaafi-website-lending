import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Images
import detail from "../../../assets/images/course/detail.png";
import client05 from "../../../assets/images/client/05.jpg";

const Home = () => {
    return (
        <React.Fragment>
            <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage: `url(${detail})`}}>
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="pages-heading">
                                <span className="badge bg-success h6 rounded-pill">$79 full course</span>
                                <h2 className="title text-white title-dark mt-3 mb-0"> Become a Professional Graphic Designer </h2>

                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="align-items-center justify-content-center list-inline-item mx-1">
                                        <img src={client05} className="avatar avatar-ex-small rounded-pill shadow" alt="" />{" "}
                                        <Link to="#" className="text-white title-dark ms-1">Cristina Murphy</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <ul className="list-unstyled mt-4 mb-0 position-middle-bottom">
                        <li className="align-items-center justify-content-center list-inline-item mx-2">
                            <i className="uil uil-clock fs-5 text-white title-dark align-middle"></i>{" "}
                            <span className="text-white-50 ms-1">10 Weeks</span>
                        </li>{" "}

                        <li className="align-items-center justify-content-center list-inline-item mx-2">
                            <i className="uil uil-signal fs-5 text-white title-dark align-middle"></i>{" "}
                            <span className="text-white-50 ms-1">All Levels</span>
                        </li>{" "}

                        <li className="align-items-center justify-content-center list-inline-item mx-2">
                            <i className="uil uil-book-open fs-5 text-white title-dark align-middle"></i>{" "}
                            <span className="text-white-50 ms-1">16 Lessons</span>
                        </li>{" "}

                        <li className="align-items-center justify-content-center list-inline-item mx-2">
                            <i className="uil uil-cube fs-5 text-white title-dark align-middle"></i>{" "}
                            <span className="text-white-50 ms-1">0 Quiz</span>
                        </li>{" "}

                        <li className="align-items-center justify-content-center list-inline-item mx-2">
                            <i className="uil uil-book-reader fs-5 text-white title-dark align-middle"></i>{" "}
                            <span className="text-white-50 ms-1">5 Students</span>
                        </li>{" "}

                        <li className="align-items-center justify-content-center list-inline-item mx-2">
                            <i className="uil uil-shopping-cart fs-5 text-white title-dark align-middle"></i>{" "}
                            <Link to="#!" className="text-white ms-1">Buy Now</Link>
                        </li>
                    </ul>
                </Container>
            </section>

            <div className="position-relative">
            <div className="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home;