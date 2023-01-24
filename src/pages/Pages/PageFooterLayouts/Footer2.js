import React, { Component, Suspense } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../../assets/images/payments/american-ex.png';
import discover from '../../../assets/images/payments/discover.png';
import masterCard from '../../../assets/images/payments/master-card.png';
import paypal from '../../../assets/images/payments/paypal.png';
import visa from '../../../assets/images/payments/visa.png';
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

class Footer2 extends Component {

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
                      <Col lg={3} col={12} className="mb-0 mb-md-4 pb-0 pb-md-2">
                        <Link to="#" className="logo-footer">
                          <img src={logoLight} height="24" alt="" />
                        </Link>
                        <p className="mt-4">Start working with Landrick that can provide everything you.</p>
                        <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                          <li className="list-inline-item"><Link to="#" className="rounded">
                            <FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></Link></li>{" "}
                          <li className="list-inline-item"><Link to="#" className="rounded">
                            <FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></Link></li>{" "}
                          <li className="list-inline-item"><Link to="#" className="rounded">
                            <FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></Link></li>{" "}
                          <li className="list-inline-item"><Link to="#" className="rounded">
                            <FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></Link></li>{" "}
                        </ul>
                      </Col>

                      <Col lg={6}>
                        <Row>
                          <Col className="col-12 mb-4 pb-2">
                            <h5 className="footer-head mb-0">Shopping & Clothes</h5>
                          </Col>

                          <Col lg={4} md={4} className="col-12">
                            <ul className="list-unstyled footer-list">
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Men</Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Jackets & Coats </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Jeans </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i>  Loungewear </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Polo shirts </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Shirts</Link></li>
                            </ul>
                          </Col>

                          <Col lg={4} md={4} className="col-12 mt-2 mt-sm-0">
                            <ul className="list-unstyled footer-list">
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Shorts </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Suits Swimwear </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> T-shirts </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Tracksuits </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Trousers</Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Shirts</Link></li>
                            </ul>
                          </Col>

                          <Col lg={4} md={4} className="col-12 mt-2 mt-sm-0">
                            <ul className="list-unstyled footer-list">
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> My account </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Order History </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Wish List </Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Newsletter</Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Affiliate</Link></li>
                              <li><Link to="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Returns</Link></li>
                            </ul>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={3} md={6} className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <h5 className="footer-head">Newsletter</h5>
                        <p className="mt-4">Sign up and receive the latest tips via email.</p>
                        <form>
                          <Row>
                            <Col lg={12}>
                              <div className="foot-subscribe mb-3">
                                <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                <div className="form-icon position-relative">
                                  <FeatherIcon icon="mail" className="fea icon-sm icons" />
                                  <input type="email" name="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Your email : " />
                                </div>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="d-grid">
                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe" />
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col className="col-12">
                  <div className="footer-py-30 footer-border">
                    <div className="container">
                      <Row>
                        <Col lg={3}>
                          <div className="d-flex align-items-center justify-content-center">
                            <i className="uil uil-truck align-middle h5 mb-0 me-2"></i>
                            <h6 className="mb-0">Free delivery</h6>
                          </div>
                        </Col>

                        <Col lg={3}>
                          <div className="d-flex align-items-center justify-content-center">
                            <i className="uil uil-archive align-middle h5 mb-0 me-2"></i>
                            <h6 className="mb-0">Non-contact shipping</h6>
                          </div>
                        </Col>

                        <Col lg={3}>
                          <div className="d-flex align-items-center justify-content-center">
                            <i className="uil uil-transaction align-middle h5 mb-0 me-2"></i>
                            <h6 className="mb-0">Money-back quarantee</h6>
                          </div>
                        </Col>

                        <Col lg={3}>
                          <div className="d-flex align-items-center justify-content-center">
                            <i className="uil uil-shield-check align-middle h5 mb-0 me-2"></i>
                            <h6 className="mb-0">Secure payments</h6>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col className="col-12">
                  <div className="footer-py-30 footer-border">
                    <Container className="text-center">
                      <Row className="align-items-center">
                        <Col sm={6}>
                          <div className="text-sm-start">
                            <p className="mb-0">© {(new Date().getFullYear())} Landrick. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="//themesbrand.com//" target="_blank" className="text-reset">Themesbrand</Link>.</p>
                          </div>
                        </Col>

                        <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                          <ul className="list-unstyled text-sm-end mb-0 d-flex gap-1 flex-wrap justify-content-sm-end">
                            <li className="list-inline-item"><Link to="#">
                              <img src={americanEx} className="avatar avatar-ex-sm" title="American Express" alt="" /></Link></li>
                            <li className="list-inline-item"><Link to="#">
                              <img src={discover} className="avatar avatar-ex-sm" title="Discover" alt="" /></Link></li>
                            <li className="list-inline-item"><Link to="#">
                              <img src={masterCard} className="avatar avatar-ex-sm" title="Master Card" alt="" /></Link></li>
                            <li className="list-inline-item"><Link to="#">
                              <img src={paypal} className="avatar avatar-ex-sm" title="Paypal" alt="" /></Link></li>
                            <li className="list-inline-item"><Link to="#">
                              <img src={visa} className="avatar avatar-ex-sm" title="Visa" alt="" /></Link></li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>

          <BackToTop />
          {/* theme switcher */}

        </Suspense>
      </React.Fragment>
    );
  }
}

export default Footer2;
