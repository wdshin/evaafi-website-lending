// React Basic and Bootstrap
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Popup from "../../components/Layout/popup";

// Feature Images
import saas2 from "../../assets/images/saas/2.png";

// Import Generic Components
import Feature from "../../components/Shared/Feature";
import Section from "./section";
import Cta from "./Cta";
import KeyFeature from "./KeyFeature";
import Testi from "./Testi";
import { agencyFeatureArray } from "../../common/data";

const IndexAgency = () => {
  useEffect(() => {
    document.getElementById("buyButton").classList.add("nav-light");
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar?.classList.remove("nav-sticky");
        document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
        document.querySelector(".shoppingbtn")?.classList.remove("btn-light");
        document.querySelector(".settingbtn")?.classList.add("btn-soft-primary");
      }
    }
  };
  return (
    <React.Fragment>
      {/* Home Section */}
      <Section />

      {/* Feature */}
      <section className="section">
        <Container>
          <Feature featureArray={agencyFeatureArray} isCenter={true} />
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img src={saas2} className="img-fluid" alt="" />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-3">
                <h4 className="title mb-4">
                  Great Product Analytics With Real Problem
                </h4>
                <p className="text-muted">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in
                  texts. If the distribution of letters visual impact.
                </p>
                <Link to="#" className="mt-3 h6 text-primary">
                  Find Out More <i className="uil uil-angle-right-b align-middle"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cta */}
      <Cta />

      {/* KeyFeature */}
      <KeyFeature />
      <div className="position-relative">
        <div className="shape overflow-hidden text-light">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* Testi */}
      <Testi />
      <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <Popup/>
    </React.Fragment>
  );
}

export default IndexAgency;
