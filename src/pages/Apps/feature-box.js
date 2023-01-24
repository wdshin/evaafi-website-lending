import React from "react";
import { Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { appsFeatures } from "../../common/data";

const FeatureBox = () => {
  return (
    <React.Fragment>
      {appsFeatures.map((feature, key) => (
        <Col key={key} md="6" xs="12">
          <div className="d-flex features feature-primary pt-4 pb-4">
            <div className="icon text-center rounded-circle text-primary me-3 mt-2">             
                <FeatherIcon
                  icon={feature.icon}
                  className="fea icon-ex-md text-primary"
                />              
            </div>
            <div className="flex-1">
              <h4 className="title">{feature.title}</h4>
              <p className="text-muted para mb-0">{feature.desc}</p>
            </div>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
}

export default FeatureBox;
