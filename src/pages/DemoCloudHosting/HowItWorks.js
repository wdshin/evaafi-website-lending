// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import hosting1 from "../../assets/images/hosting/1.png";
import hosting2 from "../../assets/images/hosting/2.png";
import dealHend from "../../assets/images/hosting/deal-hend.svg";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features1: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features2: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features3: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} md={6}>
                <img src={hosting1} className="img-fluid" alt="" />
              </Col>

              <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Get best plan for more power with cloud Hosting</h4>
                  <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-3">Get Started <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={6}
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <h4 className="title mb-4">Don't Compromise with the best web hosting solutions</h4>
                  <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-3">Get Started <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </Col>

              <Col lg={6} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <img src={dealHend} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={5} md={6}>
                <img src={hosting2} className="img-fluid" alt="" />
              </Col>

              <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Powerful Server & Web Hosting Plateform</h4>
                  <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-3">Get Started <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
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
}

export default HowItWorks;
