import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import shared from '../../assets/images/hosting/shared.png';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class HostingShared extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

      cardData: [
        { title: 'Speedy', icon: 'uil uil-tachometer-fast-alt' },
        { title: 'Reliable', icon: 'uil uil-compact-disc' },
        { title: 'Scalable', icon: 'uil uil-weight' },
        { title: 'Supported', icon: 'uil uil-envelope-question' },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-260 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${shared})` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col xs={12}>
                <div className="pages-heading title-heading text-center">
                  <h4 className="title text-white title-dark mb-4">
                    Shared Web Hosting
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
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
          <div className="features-absolute">
            <Container>
              <Row>
                {this.state.pricingData.map((item, key) => (
                  <Col
                    key={key}
                    lg={3}
                    md={6}
                    xs={12}
                    className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                  >
                    <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
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
              <Col xs={12} className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Why Shared Hosting ?</h4>
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
              {this.state.cardData.map((item, key) => (
                <Col key={key} lg={3} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={item.icon}></i>
                    </span>
                    <CardBody className="p-0 content">
                      <h5>{item.title}</h5>
                      <p className="para text-muted mb-0">
                        It is a long established fact that a reader will be of
                        at its layout.
                      </p>
                    </CardBody>

                    <div className="position-absolute top-0 end-0">
                      <i className={item.icon + ' display-1 opacity-05'}></i>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col md={6} xs={12}>
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
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
              </Col>

              <Col md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
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
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
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
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
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

export default HostingShared;
