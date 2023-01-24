import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import {travelBenefitData} from "../../common/data";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

const Benefit = () => {  
    return (
      <React.Fragment>
        <Container>
          <SectionTitle
            title="Benefit for Traveller"
            desc="that can provide everything you need to generate awareness, drive traffic, connect"
          />
          <Row>
            {travelBenefitData.map((benefit, key) => (
              <Col lg={3} md={4} className="mt-4 pt-2" key={key}>
                <Card className="features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <i className={benefit.icon}></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>{benefit.title}</h5>
                    <p className="para text-muted mb-0">
                      It is a long established fact that a reader.
                    </p>
                  </CardBody>
                  <span className="big-icon text-center">
                    <i className={benefit.icon}></i>
                  </span>
                </Card>
              </Col>
            ))}
            <Col lg={12} md={4} className="text-center mt-4 pt-2">
              <Link to="#" className="btn btn-primary">
                See more {" "}
                  <FeatherIcon icon="arrow-right" className="fea icon-sm" />
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
}; 
export default Benefit;
