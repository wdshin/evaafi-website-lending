import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AccordianCommon1 } from '../../components/Shared/AccordianCommon';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
//import images
import dedicated from '../../assets/images/hosting/dedicated.png';
import BackToTop from '../../components/Layout/backToTop';
import faq from '../../assets/images/hosting/faqs.svg';
import Footer from '../../components/Layout/Footer';
import NavBar from './NavBar';

//Import Icons
import FeatherIcon from "feather-icons-react";

class HostingDedicated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          id: 1,
          icon: 'uil uil-server-alt',
          title: 'SSD storage',
        },
        {
          id: 2,
          icon: 'uil uil-data-sharing',
          title: 'Easy upgrade',
        },
        {
          id: 3,
          icon: 'uil uil-cloud-database-tree',
          title: 'Multiple Linux Distros',
        },
        {
          id: 4,
          icon: 'uil uil-user-check',
          title: 'Admin Support',
        },
        {
          id: 5,
          icon: 'uil uil-create-dashboard',
          title: 'Guaranteed Resources',
          isClass: true,
        },
        {
          id: 6,
          icon: 'uil uil-desktop',
          title: 'Full Root Access',
          isClass: true,
        },
        {
          id: 7,
          icon: 'uil uil-shield-check',
          title: 'Quick Provisioning',
          isClass: true,
        },
        {
          id: 8,
          icon: 'uil uil-monitor-heart-rate',
          title: 'Intuitive Dashboard',
          isClass: true,
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section
          className="bg-half-170 d-table bg-primary w-100"
          style={{ backgroundImage: `url(${dedicated})` }}
        >
          <div className="bg-overlay opacity-4"></div>
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col xs={12}>
                <div className="pages-heading title-heading text-center">
                  <h4 className="title mb-3 text-white title-dark">
                    Dedicated Servers
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">
                      Request Call
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
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
            <Row className="align-items-center">

              {this.state.cardData.map((item, key) => (<Col key={key} lg={3} md={6} className={item.isClass ? "mt-4 pt-2" : null}>
                <Card className="border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                  <div className="icons text-center">
                    <i className={item.icon + " d-block rounded h3 mb-0"}></i>
                  </div>
                  <CardBody className="p-0 mt-4">
                    <Link to="#" className="title h5 text-dark">
                      {item.title}
                    </Link>
                    <p className="text-muted mt-2">
                      Composed in a pseudo-Latin language which more or less
                      corresponds.
                    </p>
                    <Link to="#" className="text-primary read-more">
                      Read More <i className="uil uil-angle-right-b"></i>
                    </Link>
                    <i className={item.icon + " text-primary full-img"}></i>
                  </CardBody>
                </Card>
              </Col>))}
            </Row>
          </Container>

          <Container fluid className="mt-100 mt-60">
            <div className="rounded-md bg-primary py-5 px-4">
              <Row className="py-md-5 py-4">
                <Container>
                  <Row className="justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="section-title">
                        <h6 className="text-white title-dark mb-3">
                          Powered by SSD
                        </h6>
                        <h2 className="text-white title-dark mb-0">
                          100% Faster Solid State Drive Server
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                      <ul className="list-unstyled mb-0 ms-lg-5">
                        <li className="text-white-50 my-2">
                          <i><FeatherIcon icon="arrow-right-circle" className="fea icon-ex-md me-1" /></i>{' '}
                          Ultrafast Data Read/Write Speeds
                        </li>
                        <li className="text-white-50 my-2">
                          <i><FeatherIcon icon="arrow-right-circle" className="fea icon-ex-md me-1" /></i>{' '}
                          Enterprise Grade Hardware
                        </li>
                        <li className="text-white-50 my-2">
                          <i><FeatherIcon icon="arrow-right-circle" className="fea icon-ex-md me-1" /></i>{' '}
                          Highest Data Protection Reliability
                        </li>
                      </ul>
                    </div>
                  </Row>
                </Container>
              </Row>
            </div>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Pricing Plans</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="mt-4 pt-2">
              <Col xs={12}>
                <div className="table-responsive bg-white shadow rounded">
                  <table className="table mb-0 table-center">
                    <thead>
                      <tr>
                        <th className="border-bottom">&nbsp;</th>
                        <th
                          className="text-center p-4 border-bottom"
                          style={{ minWidth: '200px', maxWidth: '200px' }}
                        >
                          <div className="h4">Starter</div>
                          <p className="text-muted fw-normal mt-3 mb-0">
                            We offers a <strong>free month</strong> of service
                            for new customers.
                          </p>
                          <div className="d-flex justify-content-center mt-3">
                            <span className="h6 text-muted mb-0 mt-2">$</span>
                            <span className="price text-primary h1 mb-0">
                              4.99
                            </span>
                            <span className="h6 text-muted align-self-end mb-1">
                              /mo
                            </span>
                          </div>
                        </th>
                        <th
                          className="text-center p-4 border-bottom"
                          style={{ minWidth: '200px', maxWidth: '200px' }}
                        >
                          <div className="h4">Business</div>
                          <p className="text-muted fw-normal mt-3 mb-0">
                            We offers a <strong>free 14 days</strong> of service
                            for new customers.
                          </p>
                          <div className="d-flex justify-content-center mt-3">
                            <span className="h6 text-muted mb-0 mt-2">$</span>
                            <span className="price text-primary h1 mb-0">
                              9.99
                            </span>
                            <span className="h6 text-muted align-self-end mb-1">
                              /mo
                            </span>
                          </div>
                        </th>
                        <th
                          className="text-center p-4 border-bottom"
                          style={{ minWidth: '200px', maxWidth: '200px' }}
                        >
                          <div className="h4">Enterprise</div>
                          <p className="text-muted fw-normal mt-3 mb-0">
                            We offers a <strong>free 7 days</strong> of service
                            for new customers.
                          </p>
                          <div className="d-flex justify-content-center mt-3">
                            <span className="h6 text-muted mb-0 mt-2">$</span>
                            <span className="price text-primary h1 mb-0">
                              14.99
                            </span>
                            <span className="h6 text-muted align-self-end mb-1">
                              /mo
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="h6 p-3">Space</td>
                        <td className="text-center p-3">1 GB</td>
                        <td className="text-center p-3">5 GB</td>
                        <td className="text-center p-3">20 GB</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">Bandwidth</td>
                        <td className="text-center p-3">10 GB</td>
                        <td className="text-center p-3">100 GB</td>
                        <td className="text-center p-3">500 GB</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">Email Accounts</td>
                        <td className="text-center p-3">100</td>
                        <td className="text-center p-3">1000</td>
                        <td className="text-center p-3">5000</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">MySQL Accounts</td>
                        <td className="text-center p-3">100</td>
                        <td className="text-center p-3">1000</td>
                        <td className="text-center p-3">5000</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">Processor</td>
                        <td className="text-center p-3">3Core</td>
                        <td className="text-center p-3">5Core</td>
                        <td className="text-center p-3">7Core</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">CPUs</td>
                        <td className="text-center p-3">3.2GHz CPU</td>
                        <td className="text-center p-3">2x3.2GHz CPU</td>
                        <td className="text-center p-3">4x3.2GHz CPU</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">Cpanel</td>
                        <td className="text-center p-3">WHM</td>
                        <td className="text-center p-3">WHM</td>
                        <td className="text-center p-3">WHM</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">Support</td>
                        <td className="text-center p-3">Free Setup</td>
                        <td className="text-center p-3">24/7 Hour</td>
                        <td className="text-center p-3">24/7 Hour</td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">SSH Access</td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            className="feather feather-x fea icon-sm text-danger"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x fea icon-sm text-danger"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check fea icon-sm text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">SMTP Management</td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x fea icon-sm text-danger"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x fea icon-sm text-danger"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check fea icon-sm text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">FTP Access</td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x fea icon-sm text-danger"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check fea icon-sm text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check fea icon-sm text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">Google Adwords Credit</td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x fea icon-sm text-danger"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check fea icon-sm text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </td>
                        <td className="text-center p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check fea icon-sm text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="h6 p-3">&nbsp;</td>
                        <td className="text-center p-3">
                          <Link to="#" className="btn btn-primary">
                            Start Now
                          </Link>
                        </td>
                        <td className="text-center p-3">
                          <Link to="#" className="btn btn-primary">
                            Buy Now
                          </Link>
                        </td>
                        <td className="text-center p-3">
                          <Link to="#" className="btn btn-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">
                    Questions regarding Dedicated Server ?
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <div className="col-lg-6 col-12 mt-0 pt-2">
                <img src={faq} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 col-12 mt-4 pt-2">
                <div className="accordion mt-0 pt-2" id="accordionExample">
                  <div className="accordion-item rounded shadow"></div>
                  <div className="accordion" id="question">
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

export default HostingDedicated;
