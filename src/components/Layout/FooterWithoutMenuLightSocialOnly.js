import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from "feather-icons-react";

import logo from '../../assets/images/logo.svg';


class FooterWithoutMenuLightSocialOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className={"footer footer-bar " + this.props.className}>
        <div className="footer-py-30">
          <Container className="text-center">
            <Row className="align-items-center">
            <Col lg={4} md={4} className="col-12 mb-0 mb-md-4 pb-0 pb-md-2">
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
                      {/* <p
                        className={
                          this.props.isLight ? 'mt-4 text-muted' : 'mt-4'
                        }
                      >
                      The first decentralized lending protocol on TON that lets users lend or borrow assets without going to a centralized intermediary.</p>
                       */}
                    </Col>



                     <Col lg={4} md={4} className="col-12 mt-sm-0 pt-2 pt-sm-0">

                      <ul
                        className={
                          this.props.isLight
                            ? 'list-unstyled social-icon social mb-0 m t-4'
                            : 'list-unstyled social-icon foot-social-icon mb-0 mt-4'
                        }
                      >
                        <li className="list-inline-item me-1">
                          <Link to="https://github.com/evaafi/" className="rounded">
                            <FeatherIcon
                              icon="github"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="https://t.me/evaaprotocol" className="rounded">
                            <FeatherIcon
                              icon="navigation"
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







              <Col lg={4} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      
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
              {/* <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
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
              </Col> */}
            </Row>
          </Container>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterWithoutMenuLightSocialOnly;
