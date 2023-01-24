// React Basic and Bootstrap
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

// Import Generic Components
import Section from "./Section";
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";
import Start from "./Start";
import Client from "./Client";
import { featureArray } from "../../common/data";

const Index = () => {
  const partners = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
  ];

  useEffect(() => {
    document.getElementById("buyButton")?.classList.add("nav-light");
    document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
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
      {/* section */}
      <Section />

      {/* Partner */}
      <section className="section bg-light mt-0 mt-md-5">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Our Trusted Clients"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* partners */}
          <Row className="justify-content-center">
            {partners.map((partner, key) => (
              <Col
                lg={2}
                md={2}
                xs={6}
                key={key}
                className="text-center mt-4 pt-2"
              >
                <img
                  src={partner.image}
                  className="avatar avatar-ex-sm"
                  alt="Landrick"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Feature */}
      <section className="section">
        <Container>
          <Feature featureArray={featureArray} isCenter={false} />
        </Container>

        {/* Start */}
        <Start />

        {/* Client */}
        <Client />
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
          <svg
            viewBox="0 0 2880 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M720 125L2160 0H2880V250H0V125H720Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
