// React Basic and Bootstrap
import React from "react";
import { Container, Row, Card, Col, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import { appsPricings } from "../../common/data";

const Pricing = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          {/* section title */}
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Choose The Pricing Plan</h4>
                <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            {appsPricings.map((item, key) => (
              <Col key={key} md={4} className="col-12 mt-4 pt-2">
                <Card className={item.isActive ? "card pricing pricing-primary starter-plan bg-light py-5 border-0 rounded text-center" :
                  "card pricing pricing-primary bg-light py-5 border-0 rounded text-center"}>
                  <CardBody>
                    <h6 className="title name fw-bold text-uppercase mb-4">{item.title}</h6>
                    <div className="d-flex justify-content-center mb-4">
                      <span className="h4 mb-0 mt-2">$</span>
                      <span className="price h1 mb-0">{item.price}</span>
                      <span className="h4 align-self-end mb-1">/{item.duration}</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                      {item.features.map((items, key) => (
                        <li key={key} className="h6 text-muted mb-0">
                          <span className="icon h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          {items.title}
                        </li>
                      ))}
                    </ul>
                    <Link to="#" className="btn btn-primary mt-4">{item.buttonText}</Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Pricing;
