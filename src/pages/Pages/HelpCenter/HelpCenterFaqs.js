import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import components
import AccordianCommon from "../../../components/Shared/AccordianCommon";

import ScrollspyNav from "./ScrollspyNav";
import Footer7 from "../PageFooterLayouts/Footer7";
import NavBar from "./NavBar";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";

class HelpCenterFaqs extends Component {

  render() {
    const ids = ["tech", "general", "payment", "support"];
    return (
      <React.Fragment>
        <NavBar />        
        <section className="bg-half-170 bg-light d-table w-100">
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col lg={12} className="text-center">
                        <div className="pages-heading">
                            <h4 className="title mb-0"> Frequently Asked Questions </h4>
                        </div>
                    </Col>
                </Row>

                <div className="position-breadcrumb">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                        <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                            <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                            <li className="breadcrumb-item"><Link to="/helpcenter-overview">Help Center</Link></li>{" "}
                            <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                        </ul>
                    </nav>
                </div>
            </Container> 
        </section>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={4} md={5} xs={12} className="d-none d-md-block">
                <div className="rounded shadow p-4 sticky-bar">
                  <ScrollspyNav
                    scrollTargetIds={ids}
                    activeNavclassName="active"
                    scrollDuration="800"
                    headerBackground="true"
                    className="sticky-bar"
                  >
                    <ul className="list-unstyled sidebar-nav mb-0 py-0">
                      <li className="navbar-item p-0"> 
                        <a href="#tech" className="h6 text-dark navbar-link">
                          Buying Questions
                        </a>
                      </li>
                      <li className="navbar-item mt-3 p-0">
                        <a href="#general" className="h6 text-dark navbar-link">
                          General Questions
                        </a>
                      </li>
                      <li className="navbar-item mt-3 p-0">
                        <a href="#payment" className="h6 text-dark navbar-link">
                          Payments Questions
                        </a>
                      </li>
                      <li className="navbar-item mt-3 p-0">
                        <a href="#support" className="h6 text-dark navbar-link">
                          Support Questions
                        </a>
                      </li>
                    </ul>
                  </ScrollspyNav>
                </div>
              </Col>

              <Col lg={8} md={7} xs={12}>
                <div className="section-title" id="tech">
                  <h4>Buying Product</h4>
                </div>
                <div className="faq-content mt-4 pt-2">
                  <div className="accordion" id="accordionExampleone">
                    {/* accoridan */}
                    <AccordianCommon
                      question1="How does it work ?"
                      answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question2="Do I need a designer to use Landrick ?"
                      answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question3="What do I need to do to start selling ?"
                      answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question4="What happens when I receive an order ?"
                      answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."                     
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="general">
                  <h4>General Questions</h4>
                </div>

                <div className="faq-content mt-4 pt-3">
                  <div className="accordion" id="accordionExampletwo">
                    <AccordianCommon
                       question1="How does it work ?"
                      answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question2="Do I need a designer to use Landrick ?"
                      answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question3="What do I need to do to start selling ?"
                      answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question4="What happens when I receive an order ?"
                      answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."                     
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="payment">
                  <h4>Payments Questions</h4>
                </div>

                <div className="faq-content mt-4 pt-3">
                  <div className="accordion" id="accordionExamplethree">
                    <AccordianCommon
                       question1="How does it work ?"
                      answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question2="Do I need a designer to use Landrick ?"
                      answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question3="What do I need to do to start selling ?"
                      answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question4="What happens when I receive an order ?"
                      answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."                     
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="support">
                  <h4>Support Questions</h4>
                </div>

                <div className="faq-content mt-4 pt-3">
                  <div className="accordion" id="accordionExamplefour">
                    <AccordianCommon
                      question1="How does it work ?"
                      answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question2="Do I need a designer to use Landrick ?"
                      answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question3="What do I need to do to start selling ?"
                      answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question4="What happens when I receive an order ?"
                      answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."                     
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer7 />
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default HelpCenterFaqs;
