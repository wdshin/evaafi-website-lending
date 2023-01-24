// React Basic and Bootstrap
import React from "react";
import { Container } from "reactstrap";

//Import Components
import Feature from "../../components/Shared/Feature";
import { serviceFeatures } from "../../common/data";

const Features = () => {
  return (
    <React.Fragment>
      <section className="section pt-0">
        <Container>
          {/* feature box */}
          <Feature featureArray={serviceFeatures} isCenter={true} />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
