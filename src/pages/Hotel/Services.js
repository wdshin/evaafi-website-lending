// React Basic and Bootstrap
import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import { hotelFeaturesData } from "../../common/data";

const Services = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container className="pb-lg-4 mb-md-5 mb-4">
          {/* section title */}
          <SectionTitle
            title="Best Services for you"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect"
          />

          {/* feature box */}
          <Row>
            {hotelFeaturesData.map((item, key) => (
              <Col key={key} md={4} className="col-12 mt-5">
                <div className="features feature-primary text-center">
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
}

export default Services;
