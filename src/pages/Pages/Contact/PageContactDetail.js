// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
// import images
import contactDetail from "../../../assets/images/contact-detail.jpg";
import Topbar from "../../../components/Layout/Topbar";

class PageContactDetail extends Component {
  constructor(props) {
    super(props);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

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
  
  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    return (
      <React.Fragment>       
        <Topbar hasDarkTopBar={true} />

        <section
          className="vh-100 d-flex align-items-center"
          style={{ background: `url(${contactDetail}) center center` }}
        >
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={{ size: 6, offset: 6 }} md={{ size: 7, offset: 5 }}>
                <div className="title-heading mt-5 pt-4">
                  <h1 className="heading">Let's talk about your portfolio</h1>
                  <p className="text-dark">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                     
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-m-md text-dark me-3"
                        />
                     
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Email</h5>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary"
                      >
                        contact@example.com
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                     
                        <FeatherIcon
                          icon="phone"
                          className="fea icon-m-md text-dark me-3"
                        />
                     
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Phone</h5>
                      <Link
                        to="#"
                        onClick={this.callNumber}
                        className="text-primary"
                      >
                        +152 534-468-854
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                     
                        <FeatherIcon
                          icon="map-pin"
                          className="fea icon-m-md text-dark me-3"
                        />
                     
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Location</h5>
                      <Link to="#" className="video-play-icon text-primary">
                        View on Google map
                      </Link>
                    </div>
                  </div>

                  <ul className="list-unstyled social-icon mb-0 mt-4">
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="github"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="youtube"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        
                          <FeatherIcon
                            icon="gitlab"
                            className="fea icon-sm fea-social"
                          />
                       
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}
export default PageContactDetail;
