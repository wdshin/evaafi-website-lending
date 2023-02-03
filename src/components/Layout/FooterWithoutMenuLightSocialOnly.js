import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';
import SubscribeFrom from 'react-mailchimp-subscribe';

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
            <Row className="align-items-center justify-center d-flex">
            <Col lg={4} md={4} className="col-12">
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
                          <a href="https://github.com/evaafi/" className="rounded">
                            <FeatherIcon
                              icon="github"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                        <li className="list-inline-item me-1">
                        <a href="https://t.me/evaaprotocol" className="rounded">
                            <FeatherIcon
                              icon="navigation"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                        {/* <li className="list-inline-item me-1">
                        <a href="#" className="rounded">
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                        <li className="list-inline-item me-1">
                        <a href="#" className="rounded">
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li> */}
                      </ul>

                      </Col>


              <Col lg={4} md={4} className="col-12 mt-sm-0 pt-sm-0">
             
                  <div className="subcribe-form">
                    <div className="ps-5 rounded border input-mailchimp mailchimp-btn subscribe-form">

                              <div className="form-icon">
                    <FeatherIcon
                                  icon="mail"
                                  className="fea icon-l icons"
                                />
                                </div>
                      <SubscribeFrom
                      
                        url="https://finance.us21.list-manage.com/subscribe/post?u=3c66105a77fffeeac355f1887&id=9320d74d2e&f_id=0032dbe1f0"
                      />
                      
                    </div>
                  </div>
                      
                    </Col>
            </Row>
          </Container>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterWithoutMenuLightSocialOnly;
