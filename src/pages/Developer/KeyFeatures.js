import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { developerKeyfeatures } from "../../common/data";

const KeyFeatures = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">Key Features</h4>
              <p className="para-desc text-muted mb-0">
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span>{" "}
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>
            </div>
          </Col>
        </Row>

        <Row className=" align-items-center">
          {developerKeyfeatures.map((keyfeatures, key) => (
            <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
              <Card className="border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                <div className="icons text-primary text-center">
                  <i className={keyfeatures.icon}></i>
                </div>
                <CardBody className="p-0 mt-4">
                  <Link to="#" className="title h5 text-dark">
                    {keyfeatures.title}
                  </Link>
                  <p className="text-muted mt-2">
                    Composed in a pseudo-Latin language which more or less
                    corresponds.
                  </p>
                  <Link to="#" className="text-primary read-more">
                    Read More <i className="uil uil-angle-right-b"></i>
                  </Link>
                  <i className={keyfeatures.hoverIcon}></i>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default KeyFeatures;

