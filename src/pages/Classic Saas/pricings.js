import React from "react";
import { Container, Row } from "reactstrap";
import { pricings } from "../../common/data";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";

const Pricings = () => { 
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Our Pricing Rates"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row id="pricing">
            <Pricing pricings={pricings} />
          </Row>
        </Container>
      </React.Fragment>
    );  
}

export default Pricings;
