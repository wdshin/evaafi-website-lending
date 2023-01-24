import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.features.map((feature, key) => (
          <Col md="4" xs="12" key={key} className="mt-4">
            <Card className="border-0 text-center features feature-primary feature-clean p-4">
              <div className="icons text-center mx-auto">
              <i className={feature.icon}></i>
              </div>

              <CardBody className="p-0 mt-4">
                <h5>{feature.title}</h5>
                <p className="text-muted mb-0">{feature.desc}</p>
                <div className="mt-2">
                <Link to={feature.link} className="read-more">
                  Learn More{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  className="feather feather-arrow-right fea icon-sm">
                  <line x1="5" y1="12" x2="19" y2="12">

                  </line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeatureBox;
