import React, { Component, Suspense } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../../assets/images/payments/american-ex.png';
import discover from '../../../assets/images/payments/discover.png';
import masterCard from '../../../assets/images/payments/master-card.png';
import paypal from '../../../assets/images/payments/paypal.png';
import visa from '../../../assets/images/payments/visa.png';


//Import Images
import logolight from '../../../assets/images/logo-light.png';

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

class Footer1 extends Component {
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
            <Container>
              <Row>
                <Col className="col-12">
                  <div className="footer-py-60">
                    <Row>
                      <Col lg={4} className="col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <Link to="#" className="logo-footer">
                          <img src={logolight} height="24" alt="" />
                        </Link>
                        <p className="mt-4">
                          Start working with Landrick that can provide everything
                          you need to generate awareness, drive traffic, connect.
                        </p>
                        <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                          <li className="list-inline-item">
                            <Link to="#" className="rounded me-1">
                              <FeatherIcon
                                icon="facebook"
                                className="fea icon-sm fea-social"
                              />
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
                        lg={2}
                        md={4}
                        className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                        name="footercolumn"
                      >
                        <h5 className="footer-head">Company</h5>
                        <ul className="list-unstyled footer-list mt-4">
                          {this.state.grid1.map((grid, key) => (
                            <li key={key}>
                              <Link
                                to={grid.link}
                                className={
                                  this.props.isLight ? 'text-muted' : 'text-foot'
                                }
                              >
                                <i className="uil uil-angle-right-b me-1"></i>{' '}
                                {grid.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Col>

                      <Col
                        lg={3}
                        md={4}
                        className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                        name="footercolumn"
                      >
                        <h5 className="footer-head">Usefull Links</h5>
                        <ul className="list-unstyled footer-list mt-4">
                          {this.state.grid2.map((grid, key) => (
                            <li key={key}>
                              <Link
                                to={grid.link}
                                className={
                                  this.props.isLight ? 'text-muted' : 'text-foot'
                                }
                              >
                                <i className="uil uil-angle-right-b me-1"></i>{" "}
                                {grid.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Col>

                      <Col
                        lg={3}
                        md={4}
                        className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                        name="footercolumn"
                      >
                        <h5 className="footer-head">Newsletter</h5>
                        <p className="mt-4">
                          Sign up and receive the latest tips via email.
                        </p>
                        <Form>
                          <Row>
                            <Col lg="12">
                              <div
                                className={
                                  this.props.isLight
                                    ? 'foot-subscribe mb-3 foot-white'
                                    : 'foot-subscribe mb-3'
                                }
                              >
                                <Label
                                  className={
                                    this.props.isLight
                                      ? 'form-label text-muted'
                                      : 'form-label'
                                  }
                                >
                                  Write your email{' '}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </div>
                                <Input
                                  type="email"
                                  name="email"
                                  id="emailsubscribe"
                                  className={
                                    this.props.isLight
                                      ? 'ps-5 rounded bg-light border'
                                      : 'ps-5 rounded'
                                  }
                                  placeholder="Your email : "
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="d-grid">
                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe" />
                              </div>
                            </Col>
                          </Row>
                        </Form>
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
                      <p className="mb-0">© {(new Date().getFullYear())} Landrick. Design with <i className="mdi mdi-heart text-danger"></i> {" "}
                        by <Link to="//themesbrand.com//" target="_blank" className="text-reset">Themesbrand</Link>.</p>
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
       
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Footer1;
