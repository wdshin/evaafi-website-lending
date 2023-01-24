import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";

// Import Images
import cilent1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";

const MindPower = () => {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Mind Power</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team team-primary text-center border-0">
                <div className="position-relative">
                  <img
                    src={cilent1}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled mb-0 team-icon">
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Ronny Jofra
                    </Link>
                  </h5>
                  <small className="designation text-muted">C.E.O</small>
                </div>
              </Card>
            </Col>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team team-primary text-center border-0">
                <div className="position-relative">
                  <img
                    src={client4}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled mb-0 team-icon">
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Micheal Carlo
                    </Link>
                  </h5>
                  <small className="designation text-muted">Director</small>
                </div>
              </div>
            </div>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <div className="card team team-primary text-center border-0">
                <div className="position-relative">
                  <img
                    src={client2}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled mb-0 team-icon">
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Aliana Rosy
                    </Link>
                  </h5>
                  <small className="designation text-muted">Manager</small>
                </div>
              </div>
            </Col>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team team-primary text-center border-0">
                <div className="position-relative">
                  <img
                    src={client3}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled mb-0 team-icon">
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="icons"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Sofia Razaq
                    </Link>
                  </h5>
                  <small className="designation text-muted">Developer</small>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );  
};
export default MindPower;
