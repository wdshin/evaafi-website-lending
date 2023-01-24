// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PagePrivacy extends Component { 
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
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        document.querySelector(".shoppingbtn").classList.remove("btn-light");
        document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      }
    }
  };

  render() {
    return (
      <React.Fragment>

        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100 d-print-none">
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col lg={12} className="text-center">
                        <div className="pages-heading">
                            <h4 className="title"> Privacy Policy </h4>
                            <ul className="list-unstyled mt-4 mb-0">
                                <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Last Revised :</span> 23th Sep, 2021</li>
                            </ul>
                        </div>
                    </Col>  
                </Row>
                
                <div className="position-breadcrumb">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                        <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                            <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                            <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                            <li className="breadcrumb-item"><Link to="#">Utility</Link></li>{" "}
                            <li className="breadcrumb-item active" aria-current="page">Privacy</li>
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
              <Col lg={9}>
                <Card className="card shadow rounded border-0">
                  <CardBody>
                    <h5 className="card-title">Overview :</h5>
                    <p className="text-muted">
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. One may speculate
                      that over the course of time certain letters were added or
                      deleted at various positions within the text.
                    </p>
                    <p className="text-muted">
                      In the 1960s, the text suddenly became known beyond the
                      professional circle of typesetters and layout designers
                      when it was used for Letraset sheets (adhesive letters on
                      transparent film, popular until the 1980s) Versions of the
                      text were subsequently included in DTP programmes such as
                      PageMaker etc.
                    </p>
                    <p className="text-muted">
                      There is now an abundance of readable dummy texts. These
                      are usually used when a text is required purely to fill a
                      space. These alternatives to the classic Lorem Ipsum texts
                      are often amusing and tell short, funny or nonsensical
                      stories.
                    </p>

                    <h5 className="card-title">We use your information to :</h5>
                    <ul className="list-unstyled feature-list text-muted">
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Create your own skin to match your brand
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Create your own skin to match your brand
                      </li>
                    </ul>
                    <h5 className="card-title">
                      Information Provided Voluntarily :
                    </h5>
                    <p className="text-muted">
                      In the 1960s, the text suddenly became known beyond the
                      professional circle of typesetters and layout designers
                      when it was used for Letraset sheets (adhesive letters on
                      transparent film, popular until the 1980s) Versions of the
                      text were subsequently included in DTP programmes such as
                      PageMaker etc.
                    </p>
                    <Link to="#" className="btn btn-soft-primary d-print-none">
                      Print
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PagePrivacy;
