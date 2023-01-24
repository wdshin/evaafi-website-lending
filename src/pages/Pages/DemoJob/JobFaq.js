import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import jobBg from "../../../assets/images/job/bg.png";
import NavBar from './NavBar';
import Footer from "../../../components/Layout/Footer";
import AccordianCommon from "../../../components/Shared/AccordianCommon";
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../components/Layout/backToTop';

class JobFaq extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.querySelectorAll("#buyButton").forEach((navLink) => {
            navLink.classList.add("btn-light")
            navLink.classList.remove("btn-soft-primary");
        });
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.querySelector(".shoppingbtn").classList.remove("btn-light");
            document.querySelector(".settingbtn").classList.remove("btn-light");
            document.querySelector(".shoppingbtn").classList.add("btn-primary");
            document.querySelector(".settingbtn").classList.add("btn-soft-primary");
            document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.querySelector(".shoppingbtn").classList.remove("btn-primary");
            document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
            document.querySelector(".shoppingbtn").classList.add("btn-light");
            document.querySelector(".settingbtn").classList.add("btn-light");
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <section className="bg-half-170 bg-primary d-table w-100 "
                    style={{ backgroundImage: `url(${jobBg})` }}>
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title text-white title-dark mb-0"> Frequently Asked Questions </h4>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="/index-job">Careers</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
                        <Row className="justify-content-center">
                            <Col lg={8} md={7} xs={12}>
                                <div className="section-title" id="general">
                                    <h4>General Questions</h4>
                                </div>

                                <div className="accordion mt-4 pt-2" id="generalquestion">
                                    <AccordianCommon
                                        question1="How does it work ?"
                                        answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question2="Do I need a designer to use Landrick ?"
                                        answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question3=" What do I need to do to start selling ?"
                                        answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question4="What happens when I receive an order ?"
                                        answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question5="How Landrick Work ?"
                                        answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                    />
                                </div>

                                <div className="section-title mt-5" id="payment">
                                    <h4>Payments Questions</h4>
                                </div>

                                <div className="accordion mt-4 pt-2" id="paymentquestion">
                                    <AccordianCommon
                                        question1="How does it work ?"
                                        answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question2="Do I need a designer to use Landrick ?"
                                        answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question3=" What do I need to do to start selling ?"
                                        answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question4="What happens when I receive an order ?"
                                        answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question5="How Landrick Work ?"
                                        answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* import Footer */}
                <Footer />

                <BackToTop />
                <ThemeSwitcher />
            </React.Fragment>
        );
    }
}

export default JobFaq;