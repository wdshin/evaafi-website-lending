// React Basic and Bootstrap
import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import { businessFeatures } from "../../common/data";

const Features = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          {/* section title */}
          <Col className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">What We Do ?</h4>
              <p className="text-muted para-desc mx-auto mb-0">Start working with {" "}
              <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
          </Col>

          {/* feature box */}
          <Row>
            {businessFeatures.map((item, key) => (
              <Col key={key} md={4} className="col-12 mt-5">
                <div className="features feature-primary">
                  <div className="image position-relative d-inline-block">
                    <i className={item.icon}></i>
                  </div>

                  <div className="content mt-4">
                    <h5>{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
