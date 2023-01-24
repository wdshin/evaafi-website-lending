// React Basic and Bootstrap
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert } from "reactstrap";

// import images
import img1 from "../../assets/images/app/classic01.png";
import img2 from "../../assets/images/app/calender.png";
import appImg from "../../assets/images/app/app.png";
import playstoreImg from "../../assets/images/app/playstore.png";

//Import Components
import Section from "./Section";
import Subscribe from "./subscribe";
import Popup from "../../components/Layout/popup";

const IndexClassicApp = () => {

  useEffect(() => {
    document.body.classList = "";
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
      }
    }
  };
  
  return (
    <React.Fragment>
      <section
        className="bg-half-170 d-table w-100 overflow-hidden"
        id="home"
      >
        <Container>
          <Row className="align-items-center">
            <Col lg="7" md="7">
              <div className="title-heading mt-4">
                <Alert
                  color="none"
                  className="alert-transparent alert-pills shadow"
                  role="alert"
                >
                  <span className="badge rounded-pill bg-primary me-2">New</span>
                  <span className="content">
                    New Added Modern and Classic App Showcase
                  </span>
                </Alert>
                <h1 className="heading mb-3">
                  We build best apps that users love
                </h1>
                <p className="para-desc text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
                <div className="mt-4">
                  <Link to="#">
                    <img src={appImg} className="m-1 me-2" height="50" alt="" />
                  </Link>

                  <Link to="#">
                    <img src={playstoreImg} className="m-1" height="50" alt="" />
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg="5" md="5" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="classic-app-image position-relative">
                <div className="bg-app-shape position-relative">
                  <img
                    src={img1}
                    className="img-fluid mover mx-auto d-block"
                    alt=""
                  />
                </div>
                <div className="app-images d-none d-md-block">
                  <img src={img2} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>        
      </section>

      {/* render Section */}
      <Section />

      {/* render subscribe */}
      <Subscribe />

      <Popup/>
    </React.Fragment>
  );
}

export default IndexClassicApp;
