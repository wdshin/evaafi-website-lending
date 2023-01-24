import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../../components/Shared/SectionTitle";
import FeatureBox from "./FeatureBox";

//Import Images
import portfolio from "../../../assets/images/crypto/portfolio.png";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: "uil uil-shield-check d-block rounded h3 mb-0",
        title: "Fully Secured",
        desc:
          "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        link: "",
      },
      {
        id: 2,
        icon: "uil uil-newspaper d-block rounded h3 mb-0",
        title: "Protected by insurance",
        desc:
          "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        link: "",
      },
      {
        id: 3,
        icon: "uil uil-browser d-block rounded h3 mb-0",
        title: "Industry best practices",
        desc:
          "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        link: "",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Section title */}
          <SectionTitle
            title="Create your cryptocurrency portfolio today"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            <Col xs="12" className="mt-4 pt-2">
              <img
                src={portfolio}
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </Col>

            {/* feature box */}
            <FeatureBox features={this.state.features} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
