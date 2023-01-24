import React, { Component } from 'react';
import NavBar from './NavBar';

//import images
import cloud from '../../assets/images/hosting/cloud.png';
import faq from '../../assets/images/hosting/faqs.svg';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import AccordianCommon from '../../components/Shared/AccordianCommon';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import FeatherIcon from "feather-icons-react";
import BackToTop from '../../components/Layout/backToTop';

class HostingCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudHostingListData: [
        { spec1: '10GB', spec2: ' Ram' },
        { spec1: '100GB', spec2: ' Bandwith' },
        { spec1: '100GB SSD', spec2: ' Storage' },
        { spec1: '3 Domain', spec2: ' Hosted Support' },
        { spec1: '50', spec2: ' Email Account' },
        { spec1: '5', spec2: ' Database' },
        { spec1: 'Unlimited', spec2: ' Traffic' },
      ],

      serverFeatData: [
        { title: 'Free cPanel', icon: 'uil uil-panel-add' },
        { title: 'Easy Installation SSL', icon: 'uil uil-cell' },
        { title: 'Easy 1-click-installer', icon: 'uil uil-webcam' },
        { title: 'Fast Websites', icon: 'uil uil-tachometer-fast-alt' },
        { title: 'Website Migrations', icon: 'uil uil-webcam' },
        { title: 'Customer Support', icon: 'uil uil-users-alt' },
      ],

      pricingData: [
        {
          id: 1,
          price: 0,
          title: 'FREE',
          action: 'Buy Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
          ],
        },
        {
          id: 2,
          price: 39,
          title: 'STARTER',
          action: 'Get Started',
          isBest: true,
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
          ],
        },
        {
          id: 3,
          price: 59,
          title: 'BUSINESS',
          action: 'Try It Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: '1 Domain Free' },
            { id: 4, subItem: 'Enhanced Security' },
          ],
        },
        {
          id: 4,
          price: 79,
          title: 'ENTERPRISE',
          action: 'Started Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Enhanced Security' },
            { id: 3, subItem: 'Source Files' },
            { id: 4, subItem: '1 Domain Free' },
            { id: 5, subItem: 'Free Installment' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-170 d-table w-100 bg-primary"
          style={{ backgroundImage: `url(${cloud})` }}
        >
          <div className="bg-overlay opacity-4"></div>
          <Container>
            <Row className="mt-5 align-items-center">
              <Col lg={8} md={7} xs={12}>
                <div className="title-heading me-lg-5">
                  <h4 className="heading text-white title-dark mb-3">
                    Cloud Hosting
                  </h4>
                  <p className="text-white-50 para-desc">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <ul className="feature-list list-unstyled mb-0">
                    {this.state.cloudHostingListData.map((item, key) => (
                      <li key={key} className="text-white-50 my-1">
                        <i className="mdi mdi-arrow-right text-warning me-2"></i>
                        <span className="fw-bold">{item.spec1}</span>
                        {item.spec2}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col lg={4} md={5} xs={12}>
                <Card className="border-0 rounded-md shadow text-center">
                  <CardBody className="px-4 py-5">
                    <h5 className="text-primary">Special Offer Price</h5>
                    <div className="d-flex justify-content-center my-3">
                      <span className="h5 text-uted mb-0 mt-2">$</span>
                      <span className="price text-dark display-4 fw-bold mb-0">
                        4.99
                      </span>
                      <span className="h5 text-uted align-self-end mb-1">
                        /mo
                      </span>
                    </div>
                    <h6 className="mb-0">
                      Original Price{' '}
                      <span className="text-warning">$10.99</span>
                    </h6>
                    <Link to="#" className="btn btn-soft-primary mt-4">
                      Get Started
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Server Features</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.serverFeatData.map((item, key) => (
                <Col key={key} lg={4} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="features feature-primary explore-feature border-0 rounded text-center">
                    <CardBody>
                      <span className="icons rounded-circle shadow-lg d-inline-block h4">
                        <i className={item.icon}></i>
                      </span>
                      <div className="content mt-3">
                        <h5 className="mb-3">
                          <Link to="#" className="title text-dark">
                            {item.title}
                          </Link>
                        </h5>
                        <p className="text-muted mb-3">
                          We provide cloud based enterprise hosting, server and
                          storage solutions of unmatched quality.
                        </p>
                        <Link to="#" className="text-primary">
                          Read More{' '}
                          <FeatherIcon icon="chevron-right" className="fea icon-sm" />
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="section bg-primary">
          <Container>
            <Row className="mb-md-4 pb-md-2 justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-md-5">
                  <h4 className="title text-white title-dark mb-3">
                    Hosting / Server Rates
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Create, collaborate, and turn your ideas into incredible
                    products with the definitive platform for digital design.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <div className="features-absolute">
            <Container>
              <Row className="mt-5 mt-sm-0">
                {this.state.pricingData.map((item, key) => (
                  <Col
                    key={key}
                    lg={3}
                    md={6}
                    xs={12}
                    className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                  >
                    <div className="card pricing pricing-primary business-rate bg-light shadow border-0 rounded">
                      {item.isBest && (
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                      )}
                      <CardBody>
                        <h6 className="title fw-bold text-uppercase text-primary mb-4">
                          {item.title}
                        </h6>
                        <div className="d-flex mb-4">
                          <span className="h4 mb-0 mt-2">$</span>
                          <span className="price h1 mb-0">{item.price}</span>
                          <span className="h4 align-self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-unstyled mb-0 ps-0">
                          {item.isChildItem.map((item, key) => (
                            <li key={key} className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              {item.subItem}
                            </li>
                          ))}
                        </ul>
                        <Link to="#" className="btn btn-primary mt-4">
                          {item.action}
                        </Link>
                      </CardBody>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Frequently Aksed Questions</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Create, collaborate, and turn your ideas into incredible
                    products with the definitive platform for digital design.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center mb-md-5 mb-4 pb-lg-5">
              <Col
                lg={6}
                md={6}
                xs={12}
                className="mt-4 pt-2 order-1 order-md-2"
              >
                <div className="ms-lg-5">
                  <img src={faq} className="img-fluid" alt="" />
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-3 mt-sm-0">
                <div className="me-lg-4">
                  <h4 className="text-white title-dark text-md-start text-center">
                    General Questions
                  </h4>
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
        <Footer isBorderLine={true} />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default HostingCloud;
