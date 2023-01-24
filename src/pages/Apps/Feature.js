// React Basic and Bootstrap
import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeatureBox from "./feature-box";
import { appsFeatures } from "../../common/data";

//import images
import featureImg from "../../assets/images/app/feature.png";

const Feature = () => {  
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="App Features"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="justify-content-center align-items-center">
              <Col lg="8" md="8">
                <Row className="mt-4 pt-2">
                  <FeatureBox appsFeatures={appsFeatures} />
                </Row>
              </Col>
              <Col
                lg="4"
                md="4"
                xs="12"
                className="mt-4 pt-2 text-center text-md-end"
              >
                <img src={featureImg} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
}

export default Feature;
