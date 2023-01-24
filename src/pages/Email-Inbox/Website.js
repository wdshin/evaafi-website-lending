import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// import images
import classic from "../../assets/images/saas/classic01.png";
import inbox from "../../assets/images/illustrator/inbox-cleanup.svg";
import { Link } from "react-router-dom";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import { reviews } from "../../common/data";

export default class Website extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img src={classic} className="img-fluid" alt="" />
              </Col>

              <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    Make your website <br /> growth with next level visitors
                  </h4>
                  <p className="text-muted">
                    You can combine all the Landrick templates into a single
                    one, you can take a component from the Application theme and
                    use it in the Website.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col md={6} className="order-1 order-md-2">
                <img src={inbox} alt="" />
              </Col>

              <Col md={6} className="order-2 order-md-1">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    Meet our business <br /> partner who work behind the scene
                  </h4>
                  <p className="text-muted">
                    You can combine all the Landrick templates into a single
                    one, you can take a component from the Application theme and
                    use it in the Website.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-100 mt-60">
          {/* section title */}
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Whats Our Clients Said About <span className="text-primary">Landrick</span> Project</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
              </div>
            </Col>
          </Row>

          {/* clients slider */}
          <ReviewsSlider reviews={reviews} colClassName="mt-4" />
        </Container>
        </section>
      </React.Fragment>
    );
  }
}
