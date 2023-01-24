import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

export default class CommonSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyListData: [
        { id: 1, title: 'Ameliya', caption: 'Privacy policy' },
        { id: 2, title: 'Crista', caption: 'HTML Template hosts' },
        { id: 3, title: 'John', caption: 'Specific error messages' },
        { id: 4, title: 'Jafrin', caption: 'Network administration' },
        { id: 5, title: 'Harry', caption: 'Customized template options' },
      ],

      iconListData: [
        { id: 1, icon: 'facebook' },
        { id: 2, icon: 'instagram' },
        { id: 3, icon: 'twitter' },
        { id: 4, icon: 'linkedin' },
        { id: 5, icon: 'github' },
        { id: 6, icon: 'youtube' },
        { id: 7, icon: 'gitlab' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Col lg={4} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
          <Card className="border-0 sidebar sticky-bar rounded shadow bg-light">
            <CardBody>
              <div className="widget mb-4 pb-2">
                <div className="widget">
                  <form role="search" method="get" id="searchform">
                    <div className="input-group mb-3 border rounded">
                      <input
                        type="text"
                        className="form-control border-0"
                        name="s"
                        id="s"
                        placeholder="Search Keywords..."
                      />
                      <button
                        type="submit"
                        className="input-group-text bg-white border-0"
                        id="searchsubmit"
                      >
                        <i className="uil uil-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="widget mb-4 pb-2">
                <h5 className="widget-title">Login</h5>
                <form className="login-form mt-4">
                  <div className="row">
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <FeatherIcon
                            icon="user"
                            className="fea icon-sm icons"
                          />
                          <input
                            type="email"
                            className="form-control ps-5"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-3">
                        <Label className="form-label">
                          Password <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <FeatherIcon
                            icon="lock"
                            className="fea icon-sm icons"
                          />
                          <input
                            type="password"
                            className="form-control ps-5"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="d-flex justify-content-between">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <Label
                              className="form-check-label"
                              for="customCheck1"
                            >
                              Remember me
                            </Label>
                          </div>
                        </div>
                        <p className="forgot-pass mb-0">
                          <Link
                            to="auth-re-password-three"
                            className="text-dark fw-bold"
                          >
                            Forgot password ?
                          </Link>
                        </p>
                      </div>
                    </Col>
                    <Col lg={12} className="mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                      </div>
                    </Col>
                    <Col sx={12} className="text-center">
                      <p className="mb-0 mt-4">
                        <small className="text-dark me-2">
                          Don't have an account ?
                        </small>{' '}
                        <Link
                          to="/auth-signup-three"
                          className="text-dark fw-bold"
                        >
                          Sign Up
                        </Link>
                      </p>
                    </Col>
                  </div>
                </form>
              </div>

              <div className="widget mb-4 pb-2">
                <h5 className="widget-title">Recent Replies</h5>
                <ul className="list-unstyled mb-0 mt-4">
                  {this.state.replyListData.map((item, key) => (
                    <li key={key} className="text-muted small h6">
                      <FeatherIcon icon="user" className="fea icon-sm" />
                      <Link to="#" className="text-dark ms-2">
                        {item.title}
                      </Link>{' '}
                      on{' '}
                      <Link to="#" className="text-primary">
                        {item.caption}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget">
                <h5 className="widget-title">Follow us</h5>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  {this.state.iconListData.map((item, key) => (
                    <li key={key} className="list-inline-item me-1">
                      <Link to="#" className="rounded">
                        <FeatherIcon
                          icon={item.icon}
                          className="fea icon-sm fea-social"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}
