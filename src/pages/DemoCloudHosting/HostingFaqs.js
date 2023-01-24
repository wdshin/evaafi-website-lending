import React, { Component } from 'react';
import NavBar from './NavBar';
import hosting from '../../assets/images/hosting/pages.png';
import {
  Col,
  Container,
  Row,
  Card,
} from 'reactstrap';
import AccordianCommon from '../../components/Shared/AccordianCommon';
import { AccordianCommon1, AccordianCommon2 } from '../../components/Shared/AccordianCommon';
import { Link } from 'react-router-dom';

// import Footer
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';


class HostingFaqs extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-170 d-table w-100"
          style={{ backgroundImage: `url(${hosting})` }}
        >
          <div className="bg-overlay bg-gradient-primary opacity-9"></div>
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading title-heading">
                  <h4 className="title text-white title-dark mb-4">
                    {' '}
                    Question & Answer{' '}
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Landrick</Link>
                  </li>{" "}
                  <li className="breadcrumb-item">
                    <Link to="/index-hosting">Hosting</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQs
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            <Row>
              <Col lg={4} md={5} className="col-12 d-none d-md-block">
                <div className="rounded-md shadow p-4 sticky-bar">
                  <ul className="list-unstyled sidebar-nav mb-0 py-2" id="navmenu-nav">
                    <li className="navbar-item mb-3">
                      <Link to="#tech" className="mouse-down h6 text-dark">
                        Technical Questions
                      </Link>
                    </li>
                    <li className="navbar-item mb-3">
                      <Link to="#general" className="mouse-down h6 text-dark">
                        General Questions
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="#payment" className="mouse-down h6 text-dark">
                        Payments Questions
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={8} md={7} className="col-12">
                <div className="section-title" id="tech">
                  <h4>Technical Questions</h4>
                </div>


                <div className="accordion mt-4 pt-2" id="question">
                  <AccordianCommon2
                    question1="Features"
                    question2="Performance"
                    question3="Boosters"
                    question4="Semi-Managed Support"
                  />
                </div>

                <div className="section-title mt-5" id="general">
                  <h4>General Questions</h4>
                </div>

                <div className="accordion mt-4 pt-2" id="accordionExample">
                  <div className="accordion-item rounded shadow bg-white"></div>
                  <div className="accordion mt-3" id="question">
                    <AccordianCommon1
                      question1="What is Dedicated Server?"
                      answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question2="Do I need a Dedicated Server?"
                      answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question3="What level of access do I get with my Dedicated Server?"
                      answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question4="Which control panels are provided?"
                      answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question5="How can i contact your technical team?"
                      answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question6="Do you offer any billing panels?"
                      answer6="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question7="How long will it take for my server to be ready for use?"
                      answer7="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                      question8="How do I access my Dedicated Server?"
                      answer8="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="payment">
                  <h4>Payments Questions</h4>
                </div>
                <div className="accordion mt-3" id="question">
                  <AccordianCommon
                    question1="How our Landrick work ?"
                    answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question2="What is the main process open account ?"
                    answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question3="How to make unlimited data entry ?"
                    answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question4="Is Landrick safer to use with my account ?"
                    answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question5="How can i contact your technical team ?"
                    answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* import Footer */}
        <footer className="footer">
          <Container>
            <Row className="justify-content-center">
              <Col className="col-12">
                <div className="footer-py-60 text-center">
                  <Row>
                    <Col md={4}>
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Phone</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <a href="tel:+152534-468-854" className="text-foot">+152 534-468-854</a>
                        </div>
                      </Card>
                    </Col>

                    <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Email</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <a href="mailto:contact@example.com" className="text-foot">contact@example.com</a>
                        </div>
                      </Card>
                    </Col>

                    <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Location</h5>
                          <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</a>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
        <Footer />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default HostingFaqs;
