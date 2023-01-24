import React, { Component, Suspense } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../../assets/images/payments/american-ex.png';
import discover from '../../../assets/images/payments/discover.png';
import masterCard from '../../../assets/images/payments/master-card.png';
import paypal from '../../../assets/images/payments/paypal.png';
import visa from '../../../assets/images/payments/visa.png';
import icon from '../../../assets/images/logo-icon.png';

//Import Images
import logoLight from '../../../assets/images/logo-light.png';

//Import Switcher
import BackToTop from "../../../components/Layout/backToTop";

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Footer3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'About us', link: '#' },
        { title: 'Services', link: '#' },
        { title: 'Team', link: '#' },
        { title: 'Pricing', link: '#' },
        { title: 'Project', link: '#' },
        { title: 'Careers', link: '#' },
        { title: 'Blog', link: '#' },
        { title: 'Login', link: '#' },
      ],
      grid2: [
        { title: 'Terms of Services', link: '#' },
        { title: 'Privacy Policy', link: '#' },
        { title: 'Documentation', link: '#' },
        { title: 'Changelog', link: '#' },
        { title: 'Components', link: '#' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <footer className="footer">
            <div className="py-5">
              <Container>
                <Row className="align-items-center">
                  <Col md={8}>
                    <div className="section-title">
                      <div className="d-flex">
                        <i className="uil uil-envelope-star display-4 text-white title-dark"></i>
                        <div className="flex-1 ms-md-4 ms-3">
                          <h4 className="fw-bold text-light title-dark mb-1">
                            Subscribe to our newsletters
                          </h4>
                          <p className="text-white-50 mb-0">
                            Sign up and receive the latest tips via email.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <div className="col-md-4 mt-4 mt-sm-0">
                    <div className="text-md-end ms-5 ms-sm-0">
                      <Link to="#" className="btn btn-primary">
                        Subscribe Now
                      </Link>
                    </div>
                  </div>
                </Row>
              </Container>
            </div>
            <Container>
              <Row>
                <Col xs="12">
                  <div className="footer-py-60 footer-border">
                    <Row>
                      <Col lg={4} xs={12} className="mb-0 mb-md-4 pb-0 pb-md-2">
                        <Link to="#" className="logo-footer">
                          <img src={logoLight} height="24" alt="" />
                        </Link>
                        <p className="mt-4">
                          Start working with Landrick that can provide everything
                          you need to generate awareness, drive traffic, connect.
                        </p>
                        <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                          <li className="list-inline-item">
                            <Link to="#" className="rounded me-1">
                              <FeatherIcon icon="facebook" className="fea icon-sm fea-social" />

                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#" className="rounded me-1">
                              <FeatherIcon
                                icon="instagram"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#" className="rounded me-1">
                              <FeatherIcon
                                icon="twitter"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#" className="rounded me-1">
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                        </ul>
                      </Col>

                      <Col
                        lg="2"
                        md="4"
                        xs="12"
                        className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                        name="footercolumn"
                      >
                        <h5 className="footer-head">Company</h5>
                        <ul className="list-unstyled footer-list mt-4">
                          {this.state.grid1.map((grid, key) => (
                            <li key={key}>
                              <Link to={grid.link} className="text-foot">
                                <i className="uil uil-angle-right-b me-1"></i>{' '}
                                {grid.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Col>

                      <Col
                        lg="2"
                        md="4"
                        xs="12"
                        className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                        name="footercolumn"
                      >
                        <h5 className="footer-head">Usefull Links</h5>
                        <ul className="list-unstyled footer-list mt-4">
                          {this.state.grid2.map((grid, key) => (
                            <li key={key}>
                              <Link to={grid.link} className="text-foot">
                                <i className="uil uil-angle-right-b me-1"></i>{" "}
                                {grid.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Col>

                      <Col
                        lg={4}
                        md={4}
                        xs={12}
                        className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                      >
                        <h5 className="text-light footer-head">
                          Start project with Landrick
                        </h5>

                        <ul className="list-unstyled footer-list mt-4 mb-2">
                          <li className="list-inline-item mx-1">
                            <Link to="#" className="btn btn-soft-primary">
                              Signin
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item mx-1">
                            <Link to="#" className="btn btn-primary">
                              Signup
                            </Link>
                          </li>
                        </ul>
                        <small className="d-block">
                          Are you developer ?{' '}
                          <Link to="#" className="text-foot fw-medium">
                            Learn More <i className="uil uil-arrow-right"></i>
                          </Link>
                        </small>

                        <img
                          src={icon}
                          className="avatar avatar-small mt-4"
                          alt=""
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>

            <div className="footer-py-30 footer-bar">
              <Container className="text-center">
                <Row className="align-items-center">
                  <Col sm="6">
                    <div className="text-sm-start">
                      <p className="mb-0">© {(new Date().getFullYear())} Landrick. Design with <i className="mdi mdi-heart text-danger "></i> by {" "}
                        <Link to="//themesbrand.com//" target="_blank" className="text-reset">Themesbrand</Link>.</p>
                    </div>
                  </Col>
                  <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul className="list-unstyled text-sm-end mb-0 d-flex gap-1 flex-wrap justify-content-sm-end">
                      <li className="list-inline-item">
                        <Link to="#">
                          <img
                            src={americanEx}
                            className="avatar avatar-ex-sm"
                            title="American Express"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <img
                            src={discover}
                            className="avatar avatar-ex-sm"
                            title="Discover"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <img
                            src={masterCard}
                            className="avatar avatar-ex-sm"
                            title="Master Card"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <img
                            src={paypal}
                            className="avatar avatar-ex-sm"
                            title="Paypal"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <img
                            src={visa}
                            className="avatar avatar-ex-sm"
                            title="Visa"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </footer>

          <BackToTop />
          {/* theme switcher */}
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Footer3;
