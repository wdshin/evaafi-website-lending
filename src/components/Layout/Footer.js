import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../assets/images/payments/american-ex.png';
import discover from '../../assets/images/payments/discover.png';
import masterCard from '../../assets/images/payments/master-card.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';

//Import Images
import logo from '../../assets/images/logo.svg';
// import logolight from '../../assets/images/logo-light.png';
// import logodark from '../../assets/images/logo-dark.png';

class Footer extends Component {
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
      // paymentCardData: [
      //   {
      //     img: americanEx,
      //     title: 'American Express',
      //   },
      //   {
      //     img: discover,
      //     title: 'Discover',
      //   },
      //   {
      //     img: masterCard,
      //     title: 'Master Card',
      //   },
      //   {
      //     img: paypal,
      //     title: 'Paypal',
      //   },
      //   {
      //     img: visa,
      //     title: 'Visa',
      //   },
      // ],
    };
  }

  render() {
    return (
      <React.Fragment>       

        <footer className="footer">
          <Container>
            <Row>
              <Col className="col-12">
                <div className={this.props.isBorderLine ? "footer-py-60 footer-border" : "footer-py-60" }>
                  <Row>
                    <Col lg={4} className="col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                      <Link to="#" className="logo-footer">
                        <img
                          src={this.props.isLight ? logo : logo}
                          height="24"
                          alt="" />
                          <h5 className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }>
                        EVAA Protocol
                      </h5>
                      </Link>
                      <p
                        className={
                          this.props.isLight ? 'mt-4 text-muted' : 'mt-4'
                        }
                      >
                      The first decentralized lending protocol on TON that lets users lend or borrow assets without going to a centralized intermediary.</p>
                      {/* <ul
                        className={
                          this.props.isLight
                            ? 'list-unstyled social-icon social mb-0 m t-4'
                            : 'list-unstyled social-icon foot-social-icon mb-0 mt-4'
                        }
                      >
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                      </ul> */}
                    </Col>

                    <Col lg={2} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Eco-system
                      </h5>
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

                    <Col lg={3} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Community
                      </h5>
                      <ul className="list-unstyled footer-list mt-4">
                        {this.state.grid2.map((grid, key) => (
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

                    <Col lg={3} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Newsletter
                      </h5>
                      <p className="mt-4">Sign up and receive the latest tips via email.</p>
                      <Form>
                        <Row>
                          <Col lg={12}>
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
                                Write your email {' '}
                                <span className="text-danger">*</span></Label>
                              <div className="form-icon position-relative">
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                                <Input
                                  type="email"
                                  name="email"
                                  id="emailsubscribe"
                                  className={
                                    this.props.isLight
                                      ? 'form-control ps-5 rounded bg-light border'
                                      : 'form-control ps-5 rounded'
                                  }
                                  placeholder="Your email : " required />
                              </div>
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="d-grid">
                              <input
                                type="submit"
                                id="submitsubscribe"
                                name="send"
                                className={this.props.isLight ? "btn btn-primary" : "btn btn-soft-primary"}
                                value="Subscribe" />
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
                <Col sm={6}>
                  <div className="text-sm-start">
                    <p className="mb-0">© {(new Date().getFullYear())} EVAA {" "}
                      {/* <i className="mdi mdi-heart text-danger"></i> by {" "} */}
                      <Link
                        to="#"
                        target="_blank"
                        className="text-reset"
                        rel="noopener noreferrer"
                      >
                        
                      </Link></p>
                  </div>
                </Col>

                <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  {/* <ul className="list-unstyled text-sm-end mb-0 d-flex gap-1 flex-wrap justify-content-sm-end">
                    {this.state.paymentCardData.map((item, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="#">
                          <img
                            src={item.img}
                            className="avatar avatar-ex-sm"
                            title={item.title}
                            alt=""
                          />
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
