import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AccordianCommon1 } from '../../components/Shared/AccordianCommon';

//import images
import reseller from '../../assets/images/hosting/reseller.png';
import hosting from '../../assets/images/hosting/1.png';

//Import Icons
import FeatherIcon from 'feather-icons-react';

import NavBar from './NavBar';
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

class HostingReseller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        { title: 'Speedy', icon: 'uil uil-tachometer-fast-alt' },
        { title: 'Reliable', icon: 'uil uil-compact-disc' },
        { title: 'Scalable', icon: 'uil uil-weight' },
        { title: 'Supported', icon: 'uil uil-envelope-question' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        {/* import NavBar */}
        <NavBar />
        <section
          className="bg-half-170 d-table w-100"
          style={{ backgroundImage: `url(${reseller})` }}
        >
          <div className="bg-overlay bg-gradient-primary opacity-9"></div>
          <Container>
            <Row className="mt-5">
              <Col>
                <div className="pages-heading title-heading">
                  <h4 className="title mb-4 fw-bold text-white title-dark">
                    Reseller Hosting
                  </h4>
                  <p className="text-white-50 para-desc mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-warning">
                      Get Started
                    </Link>
                  </div>
                  <h6 className="mb-0 mt-2 text-white-50">
                    <FeatherIcon
                      icon="check-circle"
                      className="fea icon-sm text-white title-dark me-2"
                    />
                    30-day money-back guarantee
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} md={12} className="text-center text-lg-start">
                <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                  <h4 className="title mb-3">Hosting Plans</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                  <Link
                    to="//1.envato.market/landrickreactjs"
                    target="_blank"
                    className="btn btn-primary mt-4"
                  >
                    Buy Now{' '}
                    <span className="badge rounded-pill bg-danger ms-2">
                      v4.2
                    </span>
                  </Link>
                </div>
              </Col>

              <Col lg={7} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="ms-lg-5">
                  <Row className="align-items-center">
                    <Col md={6} xs={12} className="px-md-0">
                      <Card className="pricing pricing-primary starter-plan shadow rounded border-0">
                        <CardBody className="py-5">
                          <h6 className="title name fw-bold text-uppercase mb-4">
                            Starter
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">39</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="list-unstyled mb-0 ps-0">
                            {[
                              'Full Access',
                              'Source Files',
                              'Free Appointments',
                              'Enhanced Security',
                            ].map((item, key) => (
                              <li key={key} className="h6 text-muted mb-0">
                                <span className="text-primary h5 me-2">
                                  <i className="uil uil-check-circle align-middle"></i>
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col
                      md={6}
                      xs={12}
                      className="mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0"
                    >
                      <Card className="pricing pricing-primary bg-light shadow rounded border-0">
                        <CardBody className="py-5">
                          <h6 className="title name fw-bold text-uppercase mb-4">
                            Professional
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">59</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="list-unstyled mb-0 ps-0">
                            {[
                              'Full Access',
                              'Source Files',
                              'Free Appointments',
                              'Enhanced Security',
                            ].map((item, key) => (
                              <li key={key} className="h6 text-muted mb-0">
                                <span className="text-primary h5 me-2">
                                  <i className="uil uil-check-circle align-middle"></i>
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Try it now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={6}
                md={6}
                xs={12}
                className="order-2 mt-4 pt-2 mt-sm-0 pt-sm-0"
              >
                <div className="section-title">
                  <small className="text-primary">
                    <strong>Next generation hosting platform</strong>
                  </small>
                  <h4 className="title mt-2 mb-4">
                    High quality website hosting
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">
                      Learn More{' '}                      
                      <FeatherIcon icon="arrow-right" className="fea icon-sm"/>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="order-1">
                <div className="me-lg-5">
                  <img src={hosting} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <div className="bg-overlay bg-gradient-primary opacity-9"></div>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center pb-5">
                  <h4 className="title text-white title-dark mb-3">
                    All the power and performance you'll ever need
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section features-absolute">
          <Container>
            <Row>
              {this.state.cardData.map((item, key) => (
                <Col key={key} lg={3} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={item.icon}></i>
                    </span>
                    <CardBody className="p-0 content">
                      <h5>{item.title}</h5>
                      <p className="para text-muted mb-0">
                        It is a long established fact that a reader will be of
                        at its layout.
                      </p>
                    </CardBody>

                    <div className="position-absolute top-0 end-0">
                      <i className={item.icon + ' display-1 opacity-05'}></i>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="mb-md-4 pb-md-2 justify-content-center">
              <div className="col-12">
                <div className="section-title text-center">
                  <h4 className="title mb-3">Frequently asked questions</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </Row>

            <Row className="justify-content-center">
              <div className="accordion mt-4 pt-2" id="accordionExample">
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
            </Row>
          </Container>
        </section>

        <section className="section py-5">
          <div className="bg-overlay bg-gradient-primary opacity-9"></div>
          <Container>
            <Row className="justify-content-center align-items-center">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="section-title text-center text-md-start">
                  <h4 className="title text-white title-dark mb-3">
                    Powerful Reseller <br /> Hosting to fuel your business!
                  </h4>
                  <p className="text-white-50 para-desc mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-4 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-center text-md-end">
                  <Link to="#" className="btn btn-warning">
                    Get Started
                  </Link>
                </div>
              </div>
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
        <Footer isBorderLine={true} />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default HostingReseller;
