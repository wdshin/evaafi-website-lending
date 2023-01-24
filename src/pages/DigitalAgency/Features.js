import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg={4} md={6} xs={12}>
              <Card className="border-0 text-center features feature-primary feature-clean rounded p-4">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-flip-v d-block rounded h3 mb-0">
                  </i>
                </div>

                <CardBody className="p-0 content mt-4">
                  <Link to="#" className="title h5 text-dark">
                    High-End Anaylizing
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 mt-sm-0 pt-4 pt-sm-0">
              <Card className="border-0 text-center features feature-primary feature-clean rounded p-4">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-layer-group d-block rounded h3 mb-0">
                  </i>
                </div>

                <CardBody className="p-0 content mt-4">
                  <Link to="#" className="title h5 text-dark">
                    Excellence Track Record
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.
                  </p>

                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 mt-lg-0 pt-4 pt-lg-0">
              <Card className="border-0 text-center features feature-primary feature-clean rounded p-4">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-object-group d-block rounded h3 mb-0">
                  </i>
                </div>

                <CardBody className="p-0 content mt-4">
                  <Link to="#" className="title h5 text-dark">
                    Our Dedicated Support
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.
                  </p>

                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
