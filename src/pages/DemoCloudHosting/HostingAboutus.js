import React, { Component } from 'react';
import NavBar from './NavBar';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import hosting from '../../assets/images/hosting/pages.png';
import hosting2 from '../../assets/images/hosting/2.png';
import client1 from '../../assets/images/client/01.jpg';
import client4 from '../../assets/images/client/04.jpg';
import client2 from '../../assets/images/client/02.jpg';
import client3 from '../../assets/images/client/03.jpg';
import Footer from '../../components/Layout/Footer';


class HostingAboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostingCardData: [
        {
          icon: 'uil uil-server-alt',
          title: 'SSD storage',
        },
        {
          icon: 'uil uil-data-sharing',
          title: 'Easy upgrade',
        },
        {
          icon: 'uil uil-cloud-database-tree',
          title: 'Multiple Linux Distros',
        },
        {
          icon: 'uil uil-user-check',
          title: 'Admin Support',
        },
        {
          icon: 'uil uil-create-dashboard',
          title: 'Guaranteed Resources',
        },
        {
          icon: 'uil uil-desktop',
          title: 'Full Root Access',
        },
        {
          icon: 'uil uil-shield-check',
          title: 'Quick Provisioning',
        },
        {
          icon: 'uil uil-monitor-heart-rate',
          title: 'Intuitive Dashboard',
        },
      ],
      teamCardData: [
        {
          src: client1,
          clientName: 'Ronny Jofra',
          designation: 'C.E.O',
          IsIcon: [
            { icon: 'facebook' },
            { icon: 'instagram' },
            { icon: 'twitter' },
            { icon: 'linkedin' },
          ],
        },
        {
          src: client4,
          clientName: 'Micheal Carlo',
          designation: 'Director',
          IsIcon: [
            { icon: 'facebook' },
            { icon: 'instagram' },
            { icon: 'twitter' },
            { icon: 'linkedin' },
          ],
        },
        {
          src: client2,
          clientName: 'Aliana Rosy',
          designation: 'Manager',
          IsIcon: [
            { icon: 'facebook' },
            { icon: 'instagram' },
            { icon: 'twitter' },
            { icon: 'linkedin' },
          ],
        },
        {
          src: client3,
          clientName: 'Sofia Razaq',
          designation: 'Developer',
          IsIcon: [
            { icon: 'facebook' },
            { icon: 'instagram' },
            { icon: 'twitter' },
            { icon: 'linkedin' },
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
          className="bg-half-170 d-table w-100"
          style={{ backgroundImage: `url(${hosting})` }}
        >
          <div className="bg-overlay bg-gradient-primary opacity-9"></div>
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading title-heading">
                  <h4 className="title text-white title-dark mb-4">
                    Company Story{' '}
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
                    About us
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
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="me-lg-4">
                  <img src={hosting2} className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title">
                  <h6 className="text-primary">Company Story</h6>
                  <h4 className="title mb-4">Landrick Hosting</h4>
                  <p className="text-muted para-desc">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                  <p className="text-muted para-desc mb-0">
                    Lorem Ipsum is composed in a pseudo-Latin language which
                    more or less corresponds to 'proper' Latin. It contains a
                    series of real Latin words. This ancient dummy text is also
                    incomprehensible, but it imitates the rhythm of most
                    European languages in Latin script. The advantage of its
                    Latin origin and the relative meaninglessness of Lorum Ipsum
                    is that the text does not attract attention to itself or
                    distract the viewer's attention from the layout.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-soft-primary">
                      Get Started <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Why choose Hosting ?</h4>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </div>

            <Row>
              {this.state.hostingCardData.map((item, key) => (
                <Col key={key} lg={3} md={4} xs={12} className="mt-4 pt-2">
                  <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={item.icon}></i>
                    </span>
                    <CardBody className="p-0 content">
                      <h5>{item.title}</h5>
                      <p className="para text-muted mb-0">
                        If the distribution of letters and 'words' is random,
                        the reader from making a neutral judgement
                      </p>
                    </CardBody>
                    <div className="position-absolute top-0 end-0">
                      <i className={`${item.icon} +  display-1 opacity-05`}></i>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <Container fluid className="mt-100 mt-60">
            <div className="rounded-md bg-primary py-5 px-4">
              <Row className="py-md-5 py-4">
                <div className="container">
                  <Row className="justify-content-center align-items-center">
                    <Col lg={6} md={6} xs={12}>
                      <div className="section-title">
                        <h6 className="text-white title-dark mb-3">
                          Powered by SSD
                        </h6>
                        <h2 className="text-white title-dark mb-0">
                          100% Faster Solid State Drive Server
                        </h2>
                      </div>
                    </Col>

                    <Col
                      lg={6}
                      md={6}
                      xs={12}
                      className="mt-4 pt-2 mt-sm-0 pt-sm-0"
                    >
                      <ul className="list-unstyled mb-0 ms-lg-5">
                        <li className="text-white-50 my-2">
                          <FeatherIcon
                            icon="arrow-right-circle"
                            className="fea icon-ex-md me-1"
                          />{" "}
                          Ultrafast Data Read/Write Speeds
                        </li>
                        <li className="text-white-50 my-2">
                          <FeatherIcon
                            icon="arrow-right-circle"
                            className="fea icon-ex-md me-1"
                          />{" "}
                          Enterprise Grade Hardware
                        </li>
                        <li className="text-white-50 my-2">
                          <FeatherIcon
                            icon="arrow-right-circle"
                            className="fea icon-ex-md me-1"
                          />{" "}
                          Highest Data Protection Reliability
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Row>
            </div>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Team Members</h4>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.teamCardData.map((item, key) => (
                <Col key={key} lg={3} md={6} className="mt-4 pt-2">
                  <Card className="team team-primary text-center border-0">
                    <div className="position-relative">
                      <img
                        src={item.src}
                        className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                        alt=""
                      />
                      <ul className="list-unstyled mb-0 team-icon">
                        {item.IsIcon.map((subItem, key) => (
                          <li key={key} className="list-inline-item me-1">
                            <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                              <FeatherIcon
                                icon={subItem.icon}
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-body py-3 px-0 content">
                      <h5 className="mb-0">
                        <Link to="#" className="name text-dark">
                          {item.clientName}
                        </Link>
                      </h5>
                      <small className="designation text-muted">
                        {item.designation}
                      </small>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <div className="container mt-100 mt-60">
            <div className="row align-items-center mb-4 pb-2">
              <div className="col-md-6">
                <div className="section-title">
                  <h4 className="title mb-md-0 mb-4">
                    Frequently asked <br /> questions
                  </h4>
                </div>
              </div>

              <div className="col-md-6">
                <div className="section-title">
                  <p className="text-muted para-desc mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </div>

            <Row>
              <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="d-flex">
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
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      How our <span className="text-primary">Landrick</span>{' '}
                      work ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and repetitions in
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="d-flex">
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
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      What is the main process open account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="d-flex">
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
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      How to make unlimited data entry ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Furthermore, it is advantageous when the dummy text is
                      relatively realistic so that the layout impression of the
                      final publication is not compromised.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="d-flex">
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
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      Is <span className="text-primary">Landrick</span> safer to
                      use with my account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </p>
                  </div>
                </div>
              </div>
            </Row>

            <div className="row mt-5 pt-4 justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title">
                  <h4 className="title mb-3">Have Question ? Get in touch!</h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                  <Link to="#" className="btn btn-primary mt-4">
                    <i className="mdi mdi-phone"></i> Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-md-4 py-5 bg-primary">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
                <h4 className="text-white title-dark mb-0">
                  Start Building Your Website Today!
                </h4>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 text-center">
                <div className="d-flex justify-content-center">
                  <span className="h6 text-white-50 mb-0 mt-2">$</span>
                  <span className="price text-light title-dark h1 mb-0">
                    9.99
                  </span>
                  <span className="h6 text-white-50 align-self-end mb-1">
                    /month
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 text-center text-md-end">
                <Link to="#" className="btn btn-warning">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
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

export default HostingAboutus;
