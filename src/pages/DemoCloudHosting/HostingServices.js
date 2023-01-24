import React, { Component } from 'react';
import NavBar from './NavBar';

//import images
import hosting from '../../assets/images/hosting/pages.png';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import FeatherIcon from 'feather-icons-react';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

class HostingServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardData: [
            { title: 'Shared Hosting', icon: 'uil uil-database-alt' },
            { title: 'VPS Hosting', icon: 'uil uil-cell' },
            { title: 'Dedicated Hosting', icon: 'uil uil-webcam' },
            { title: 'Cloud Hosting', icon: 'uil uil-cloud-heart', isClass: true },
            { title: 'Reseller Hosting', icon: 'uil uil-cloud-upload', isClass: true },
            { title: 'Reseller Hosting', icon: 'uil uil-server', isClass: true },
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
                    {' '}
                    Services{' '}
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
                    Services
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
              {this.state.cardData.map((item, key) => (
                <Col key={key} lg={4} md={6} xs={12} className={item.isClass ? "mt-4 pt-2" : null}>
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
                          <FeatherIcon icon="chevron-right"  className="fea icon-sm"/>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* import images  */}
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

        <BackToTop/>
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default HostingServices;
