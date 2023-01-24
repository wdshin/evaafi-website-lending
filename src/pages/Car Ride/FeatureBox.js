import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.features.map((feature, key) => (
          <Col lg="4" md="6" xs="12" key={key} className="mt-5">
            <div className="features feature-primary text-center p-4">
              <div className="ride-image">
                <img
                  src={feature.image}
                  className="avatar avatar-large shadow"
                  alt=""
                />
              </div>
              <div className="content mt-5 pt-3">
                <h5 className="text-dark title-2">
                  <Link to={feature.link} className="text-dark">
                    {feature.title}
                  </Link>
                </h5>
                <p className="text-muted mb-0">{feature.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeatureBox;
