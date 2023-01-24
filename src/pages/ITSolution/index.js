// import react from "react";
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

// import file
import Section from "./Section";
import WhatWeDo from './WhatWeDo';
import Features from "./Features";
import WorkProcess from "./WorkProcess";
import Blog from "./Blog";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

import MindPower from "./MindPower";
import Popup from "../../components/Layout/popup";

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
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
      document.getElementById("top-menu").classList.add("nav-light");
    });
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn")?.classList.remove("btn-light");
      document.querySelector(".settingbtn")?.classList.remove("btn-light");
      document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
      document.querySelector(".settingbtn")?.classList.add("btn-soft-primary");
      document.getElementById("topnav")?.classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn")?.classList.remove("btn-primary");
      document.querySelector(".settingbtn")?.classList.remove("btn-soft-primary");
      document.querySelector(".shoppingbtn")?.classList.add("btn-light");
      document.querySelector(".settingbtn")?.classList.add("btn-light");
      document.getElementById("topnav")?.classList.remove("nav-sticky");
    }
  };

  return (
    <React.Fragment>
      <Section />
      {/* Partner */}
      <section className="py-4 bg-light">
        <Container>
          {/* partners */}
          <Row className="justify-content-center">
            {partners.map((partner, key) => (
              <Col
                lg={2}
                md={2}
                xs={6}
                key={key}
                className="text-center py-4"
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
      {/* What we do section */}
      <WhatWeDo />
      {/* Feature */}
      <Features />
      {/* WorkProcess */}
      <section className="section">
        <WorkProcess />
        <MindPower />
      </section>
      {/* Blog */}
      <section className="section bg-light">
        <Blog />
      </section>
      <Popup />
    </React.Fragment>
  );
}

export default Index;
