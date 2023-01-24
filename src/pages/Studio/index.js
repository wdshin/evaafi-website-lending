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

// import generic component
import WorkProcess from "./WorkProcess";
import Section from "./Section";
import Popup from "../../components/Layout/popup";

const Index = () => {

  const partners = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];

  useEffect(() => {
    document.body.classList = "";
    document.getElementById("topnav").classList.add("bg-white");
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
        navBar.classList.remove("nav-sticky");
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        document.querySelector(".shoppingbtn").classList.remove("btn-light");
        document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      }
    }
  };

  return (
    <React.Fragment>
      {/* section */}
      <Section />

      {/* partner */}
      <section className="py-4 bg-light">
        <Container>
          <Row className="justify-content-center">
            {partners.map((partner, key) => (
              <Col key={key} lg={2} md={2} className="col-6 text-center py-4" >
                <img
                  src={partner.img}
                  className="avatar avatar-ex-sm"
                  alt="Landrick"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WorkProcess */}
      <WorkProcess />

      <Popup/>
    </React.Fragment>
  );
}

export default Index;
