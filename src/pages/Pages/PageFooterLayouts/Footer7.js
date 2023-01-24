import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Switcher
import BackToTop from '../../../components/Layout/backToTop';

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

class Footer7 extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <footer className="footer footer-bar">
            <div className="footer-py-30">
              <Container className="text-center">
                <Row className="align-items-center">
                  <Col sm={6}>
                    <div className="text-sm-start">
                      <p className="mb-0">
                        © {new Date().getFullYear()} Landrick. Design with{' '}
                        <i className="mdi mdi-heart text-danger"></i> by{' '}
                        <Link
                          to="//themesbrand.com//"
                          target="_blank"
                          rel="noreferrer"
                          className="text-reset"
                        >
                          Themesbrand
                        </Link>
                        .
                      </p>
                    </div>
                  </Col>

                  <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                      <li className="list-inline-item mb-0">
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>{" "}
                      <li className="list-inline-item mb-0">
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>{" "}
                      <li className="list-inline-item mb-0">
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>{" "}
                      <li className="list-inline-item mb-0">
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
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

export default Footer7;
