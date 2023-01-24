import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Components
import FeatureTitle from "./FeatureTitle";
import { classicFeatures } from "../../common/data";

const Features = () => {
  return (
    <React.Fragment>
      <Container>
        {/* render feature title */}
        <FeatureTitle
          maintitle="Features"
          title="What We Do ?"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
          badgeColor="primary"
        />
        <Row>
          {classicFeatures.map((item, key) => (
            <Col key={key} md={4} className="col-12 mt-4 pt-2">
              <Card className={item.isActive ? "text-center bg-primary bg-gradient rounded border-0" : "text-center rounded border-0"}>
                <CardBody>
                  <div className="p-3 bg-light rounded shadow d-inline-block">
                    <img src={item.img} className="avatar avatar-small" alt="" />
                  </div>
                  <div className="mt-4">
                    <h5><Link to="#" className={item.isColorText ? "text-white title-dark" : "text-dark"}>{item.title}</Link></h5>
                    <p className={item.isDescColor ? "text-white-50 mt-3 mb-0" : "text-muted mt-3 mb-0"}>{item.desc}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Features;
