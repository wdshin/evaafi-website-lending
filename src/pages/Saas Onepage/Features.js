import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import { onepageFeaturesData } from "../../common/data";

const Features = () => {
  return (
    <React.Fragment>
      <Container>
        {/* section title */}
        <SectionTitle
          title="Great Features"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
        />

        {/* feature box */}
        <Row>
          {onepageFeaturesData.map((item, key) => (
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
    </React.Fragment>
  );
};

export default Features;
