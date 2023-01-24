import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "reactstrap";

// import images
import medical1 from '../../assets/images/medical/01.jpg';
import medical2 from '../../assets/images/medical/02.jpg';
import medical3 from '../../assets/images/medical/03.jpg'
import medical4 from '../../assets/images/medical/04.jpg'

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class QualifiedDoctors extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Qualified Doctors</h4>
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
              <Card className="team team-primary text-center border-0 p-4 shadow">
                <div className="position-relative">
                  <img
                    src={medical1}
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
                      Ronny Jofra
                    </Link>
                  </h5>
                  <small className="designation text-muted">Cardiologist</small>
                </div>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team team-primary text-center border-0 p-4 shadow">
                <div className="position-relative">
                  <img
                    src={medical2}
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
                  <small className="designation text-muted">Surgeon</small>
                </div>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team team-primary text-center border-0 p-4 shadow">
                <div className="position-relative">
                  <img
                    src={medical3}
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
                      Aliana Rosy
                    </Link>
                  </h5>
                  <small className="designation text-muted">Physician</small>
                </div>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team team-primary text-center border-0 p-4 shadow">
                <div className="position-relative">
                  <img
                    src={medical4}
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
                      Sofia Razaq
                    </Link>
                  </h5>
                  <small className="designation text-muted">Chemist</small>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
