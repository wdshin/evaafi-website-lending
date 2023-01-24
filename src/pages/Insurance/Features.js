import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import { insuranceFeaturesData } from "../../common/data";

//Import images
import marketing from "../../assets/images/illustrator/Marketing_strategy_SVG.svg";
import services from "../../assets/images/illustrator/services.svg";

const Features = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          {insuranceFeaturesData.map((feature, key) => (
            <Col lg={4} md={6} xs={12} key={key}>
              <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className={feature.icon}></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>{feature.title}</h5>
                  <p className="para text-muted mb-0">{feature.desc}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col lg={5} md={6} className="mt-4 pt-2">
            <img src={services} alt="Landrick" />
          </Col>

          <Col lg={7} md={6} className="mt-4 pt-2">
            <div className="section-title ms-lg-5">
              <h4 className="title mb-4">Health Insurance</h4>
              <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
              <ul className="list-unstyled text-muted">
                <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
              </ul>
              <div className="mt-4">
                <Link to="#" className="btn btn-primary">
                  Read More{" "}
                  <i>
                  <i className="uil uil-angle-right-b align-middle"></i>
                  </i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col
            lg={5}
            md={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className="mt-4 pt-2"
          >
            <img src={marketing} alt="Landrick" />
          </Col>

          <Col
            lg={7}
            md={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className="mt-4 pt-2"
          >
            <div className="section-title me-lg-5">
              <h4 className="title mb-4">Investment Plans</h4>
              <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
              <ul className="list-unstyled text-muted">
                <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
              </ul>
              <div className="mt-4">
                <Link to="#" className="btn btn-primary">
                  Read More{" "}
                  <i>
                  <i className="uil uil-angle-right-b align-middle"></i>
                  </i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Features;
