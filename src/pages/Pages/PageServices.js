// React Basic and Bootstrap
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

//Import components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import { reviews } from "../../common/data";

//Import Images
import work1 from "../../assets/images/work/1.jpg";
import work2 from "../../assets/images/work/2.jpg";
import work3 from "../../assets/images/work/3.jpg";
import work4 from "../../assets/images/work/4.jpg";


const PageServices = () => {    
    const features = [
        { id: 1, icon: 'uil uil-edit-alt h2 text-primary', title: "Design & Development", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
        { id: 2, icon: 'uil uil-vector-square h2 text-primary', title: "Management & Marketing", description: "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
        { id: 3, icon: 'uil uil-file-search-alt h2 text-primary', title: "Stratagy & Research", description: "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today." },
        { id: 4, icon: 'uil uil-airplay h2 text-primary', title: "Easy To Use", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper." },
        { id: 5, icon: 'uil uil-calendar-alt h2 text-primary', title: "Daily Reports", description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word." },
        { id: 6, icon: 'uil uil-clock h2 text-primary', title: "Real Time Zone", description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today." },
    ];
    const works = [
        { imgUrl: work1, title: "Shifting Perspective", subtitle: "Studio", author: "Calvin Carlo", date: "13th August, 2019" },
        { imgUrl: work2, title: "Colors Magazine", subtitle: "Web Design", author: "Calvin Carlo", date: "13th August, 2019" },
        { imgUrl: work3, title: "Spa Cosmetics", subtitle: "Developing", author: "Calvin Carlo", date: "13th August, 2019" },
        { imgUrl: work4, title: "Riser Coffee", subtitle: "Branding", author: "Calvin Carlo", date: "13th August, 2019" },
    ];
    useEffect(() => {
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (navBar != null) {
            if (top > 80) {
                navBar.classList.add("nav-sticky");
            } else {
                navBar.classList.remove("nav-sticky");
                document.querySelector(".shoppingbtn").classList.add("btn-primary");
                document.querySelector(".shoppingbtn").classList.remove("btn-light");
                document.querySelector(".settingbtn").classList.add("btn-soft-primary");
            }
        }
    };
    return (
        <React.Fragment>
            {/* breadcrumb */}
            <section className="bg-half-170 bg-light d-table w-100">
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="pages-heading">
                                <h4 className="title mb-0"> Services </h4>
                            </div>
                        </Col>
                    </Row>

                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">Services</li>
                            </ul>
                        </nav>
                    </div>
                </Container> 
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <Container>
                    {/* feature box */}
                    <Row>
                        {features.map((item, key) => (
                            <Col key={key} md={4} className="col-12 mt-5">
                                <div className="features feature-primary">
                                    <div className="image position-relative d-inline-block">
                                        <i className={item.icon}></i>
                                    </div>

                                    <div className="content mt-4">
                                        <h5>{item.title}</h5>
                                        <p className="text-muted mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    {/* Render Section Title */}
                    <SectionTitle title="Client Reviews" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                    {/* clients slider */}
                    <ReviewsSlider reviews={reviews} colClassName="mt-4" />
                </Container>
            </section>

            <section className="section bg-light">
                <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Our Latest Projects" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                    <Row>
                        {
                            works.map((work, key) =>
                                <Col key={key} md={6} xs={12} className="mt-4 pt-2">
                                    <Card className="work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                                        <CardBody className=" p-0">
                                            <img src={work.imgUrl} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work bg-dark"></div>
                                            <div className="content">
                                                <Link to="page-work-detail" className="title text-white d-block fw-bold">{work.title}</Link>
                                                <small className="text-light">{work.subtitle}</small>
                                            </div>
                                            <div className="client">
                                                <small className="text-light user d-block"><i className="mdi mdi-account"></i> {work.author}</small>
                                                <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {work.date}</small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="justify-content-center">
                        <Col xs="12" className="text-center">
                            <div className="section-title">
                                <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-primary mt-2 me-2">Get Started Now</Link>{" "}
                                    <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}
export default PageServices;
