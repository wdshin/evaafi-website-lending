import React, { Component, Suspense } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import svgMap from "../../../assets/images/svg-map.svg";
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

class Footer4 extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <footer className="footer" style={{ backgroundImage: `url(${svgMap})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <Container>
              <Row className="justify-content-center">
                <Col className="col-12 py-lg-5">
                  <div className="footer-py-60 text-center">
                    <Link to="#" className="logo-footer">
                      <img src={logoLight} height="32" alt="" />
                    </Link>
                    <p className="mt-4 para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                      <li className="list-inline-item"><Link to="#" className="rounded">
                        <FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></Link></li>{" "}
                      <li className="list-inline-item"><Link to="#" className="rounded">
                        <FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></Link></li>{" "}
                      <li className="list-inline-item"><Link to="#" className="rounded">
                        <FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></Link></li>{" "}
                      <li className="list-inline-item"><Link to="#" className="rounded">
                        <FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></Link></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>

            <div className="footer-py-30 footer-bar bg-footer">
              <Container className="text-center">
                <Row className="justify-content-center">
                  <Col className="col-12">
                    <div className="text-center">
                      <p className="mb-0">© {(new Date().getFullYear())} Landrick. Design with <i className="mdi mdi-heart text-danger"></i> by {" "}
                        <Link to="//themesbrand.com//" target="_blank" className="text-reset">Themesbrand</Link>.</p>
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

export default Footer4;
