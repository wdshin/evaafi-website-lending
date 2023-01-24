import React, { Component, Suspense } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Switcher
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

//import components
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
import Footer5 from './Footer5';
import Footer6 from './Footer6';
import Footer7 from './Footer7';
import Footer8 from "./Footer8";

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class PageFooterLayouts extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
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

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <section className="bg-half-170 bg-light d-table w-100">
            <Container>
              <Row className="mt-5 justify-content-center">
                <Col lg={12} className="text-center">
                  <div className="pages-heading">
                    <h4 className="title mb-0"> Footer </h4>
                  </div>
                </Col>
              </Row>

              <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                    <li className="breadcrumb-item">
                      <Link to="/">Landrick</Link>
                    </li>{" "}
                    <li className="breadcrumb-item">
                      <Link to="#">Page</Link>
                    </li>{" "}
                    <li className="breadcrumb-item active" aria-current="page">
                      Footer
                    </li>
                  </ul>
                </nav>
              </div>
            </Container>
          </section>
          <div className="position-relative">
            <div className="shape overflow-hidden text-white">
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
          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #1</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer1 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #2</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer2 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #3</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer3 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #4</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer4 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #5</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer5 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #Light</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer6 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #7</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer7 />

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #8</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer8 />

          {/* theme switcher */}
          <ThemeSwitcher />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default PageFooterLayouts;
