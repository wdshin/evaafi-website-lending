import React, { Component, Suspense } from "react";
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import { Link } from 'react-router-dom';

//import images
import icon from '../../../assets/images/logo-icon.png';

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

class Footer5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        { listItem: "Privacy" },
        { listItem: "Terms" },
        { listItem: "FAQs" },
        { listItem: "Contact" },
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <footer className="footer">
            <Container>
              <Row className="justify-content-center">
                <Col className="col-12">
                  <div className="footer-py-60 text-center">
                    <Row className="py-5">
                      <Col md={4}>
                        <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                          <div className="icons text-center mx-auto">
                            <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                          </div>
                          <div className="content mt-4">
                            <h5 className="footer-head">Phone</h5>
                            <p className="text-muted">Start working with Landrick that can provide everything</p>
                            <Link to="tel:+152534-468-854" className="text-foot">+152 534-468-854</Link>
                          </div>
                        </div>
                      </Col>

                      <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                          <div className="icons text-center mx-auto">
                            <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                          </div>
                          <div className="content mt-4">
                            <h5 className="footer-head">Email</h5>
                            <p className="text-muted">Start working with Landrick that can provide everything</p>
                            <Link to="mailto:contact@example.com" className="text-foot">contact@example.com</Link>
                          </div>
                        </div>
                      </Col>

                      <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                          <div className="icons text-center mx-auto">
                            <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                          </div>
                          <div className="content mt-4">
                            <h5 className="footer-head">Location</h5>
                            <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                            <Link to="//https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                              data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>

            <div className="footer-py-30 footer-bar bg-footer">
              <Container className="text-center">
                <Row className="align-items-center justify-content-between">
                  <Col lg={3} md={2} sm={3}>
                    <div className="text-sm-start">
                      <Link to="#" className="logo-footer">
                        <img src={icon} height="34" alt="" />
                      </Link>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul className="list-unstyled footer-list terms-service mb-0">
                      <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-2">Privacy</Link></li>{" "}
                      <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-2">Terms</Link></li>{" "}
                      <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-2">FAQs</Link></li>{" "}
                      <li className="list-inline-item mb-0"><Link to="#" className="text-foot">Contact</Link></li>{" "}
                    </ul>
                  </Col>

                  <Col lg={3} md={4} sm={3} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="text-sm-end">
                      <p className="mb-0 text-foot">© {(new Date().getFullYear())} {" "}
                        <Link to="//themesbrand.com//"
                          rel="noreferrer"
                          target="_blank"
                          className="text-reset">
                          Themesbrand</Link>.
                      </p>
                    </div>
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

export default Footer5;
