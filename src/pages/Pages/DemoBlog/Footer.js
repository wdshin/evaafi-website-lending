import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';
import BackToTop from '../../../components/Layout/backToTop';

//Import Images
import logolight from '../../../assets/images/logo-light.png';
import logodark from '../../../assets/images/logo-dark.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'About us', link: '/page-aboutus' },
        { title: 'Services', link: '/page-services' },
        { title: 'Team', link: '/page-team' },
        { title: 'Pricing', link: '/page-pricing' },
        { title: 'Project', link: '/page-work' },
        { title: 'Careers', link: '/page-jobs' },
        { title: 'Blog', link: '/page-blog' },
        { title: 'Login', link: '/page-cover-login' },
      ],
      grid2: [
        { title: 'Terms of Services', link: '/page-terms' },
        { title: 'Privacy Policy', link: '/page-privacy' },
        { title: 'Documentation', link: '/documentation' },
        { title: 'Changelog', link: '/changelog' },
        { title: 'Components', link: '/components' },
      ],      
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer
          className={this.props.isLight ? 'footer footer-light' : 'footer'}
        >
          <Container>
            <Row>
              <Col xs="12">
                <div className="footer-py-60">
                  <Row>
                    <Col lg={4} xs={12} className="mb-0 mb-md-4 pb-0 pb-md-2">
                      <Link to="#" className="logo-footer">
                        <img
                          src={this.props.isLight ? logodark : logolight}
                          height="24"
                          alt=""
                        />
                      </Link>
                      <p
                        className={
                          this.props.isLight ? 'mt-4 text-muted' : 'mt-4'
                        }
                      >
                        Start working with Landrick that can provide everything
                        you need to generate awareness, drive traffic, connect.
                      </p>
                      <ul
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
                      </ul>
                    </Col>

                    <Col
                      lg="2"
                      md="4"
                      xs="12"
                      className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                      name="footercolumn"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Company
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

                    <Col
                      lg="3"
                      md="4"
                      xs="12"
                      className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                      name="footercolumn"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Usefull Links
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
                              <i className="uil uil-angle-right-b me-1"></i>
                              {grid.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    <Col
                      lg="3"
                      md="4"
                      xs="12"
                      className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                      name="footercolumn"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Newsletter
                      </h5>
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
                                required
                              />
                            </div>
                          </Col>
                          <Col lg="12">
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
          <Container>
            <Row>
              <Col xs={12}>
                <div className="footer-py-30 footer-border">
                  <Container className="text-center">
                    <Row className="align-items-center">
                      <Col sm={6}>
                        <div className="text-sm-start">
                          <Link to="#" className="logo-footer">
                            <img src={logolight} height="24" alt="" />
                          </Link>
                        </div>
                      </Col>

                      <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled footer-list terms-service text-sm-end mb-0">
                          <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-2">Privacy</Link></li>{" "}
                          <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-2">Terms</Link></li>{" "}
                          <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-2">FAQs</Link></li>{" "}
                          <li className="list-inline-item mb-0"><Link to="#" className="text-foot">Contact</Link></li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
          <div
            className={
              this.props.isLight
                ? 'footer-py-30 bg-footer text-white-50 border-top'
                : 'footer-py-30 footer-bar'
            }
          >
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col sm="12">
                  <p className="mb-0">
                    © {(new Date().getFullYear())} Landrick. Design with {' '}
                    <i className="mdi mdi-heart text-danger"></i> by{' '}
                    <Link
                      to="//themesbrand.com//"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-reset"
                    >
                      Themesbrand
                    </Link>
                    .
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>

        <BackToTop />
      </React.Fragment>
    );
  }
}

export default Footer;
