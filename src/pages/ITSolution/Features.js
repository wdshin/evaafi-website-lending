import React from "react";
import { Col, Container, Row } from "reactstrap";
import { itSolutionProgress } from "../../common/data";

const Features = () => {
  return (
    <React.Fragment>
      <section className="section pt-0">
        <Container>
          <div
            className="p-4 rounded shadow bg-primary bg-gradient position-relative"
            style={{ zIndex: "1" }}
          >
            <Row>
              <Col md={6} xs={12}>
                <div className="progress-box">
                  <h6 className="title text-light title-dark">
                    Web Designing
                  </h6>
                  <div
                    className="progress title-bg-dark"
                    style={{ height: "10px", padding: "3px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-black"
                      style={{ width: "84%" }}
                    >
                      <div className="progress-value d-block text-white-50 h6">
                        84%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-box mt-4">
                  <h6 className="title text-light title-dark">
                    Web Development
                  </h6>
                  <div
                    className="progress title-bg-dark"
                    style={{ height: "10px", padding: "3px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-black"
                      style={{ width: "75%" }}
                    >
                      <div className="progress-value d-block text-white-50 h6">
                        75%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-box mt-4">
                  <h6 className="title text-light title-dark">
                    Game Development
                  </h6>
                  <div
                    className="progress title-bg-dark"
                    style={{ height: "10px", padding: "3px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-black"
                      style={{ width: "79%" }}
                    >
                      <div className="progress-value d-block text-white-50 h6">
                        79%
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6} xs={12}>
                <div className="progress-box mt-4 mt-sm-0">
                  <h6 className="title text-light title-dark">
                    App Development
                  </h6>
                  <div
                    className="progress title-bg-dark"
                    style={{ height: "10px", padding: "3px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-black"
                      style={{ width: "84%" }}
                    >
                      <div className="progress-value d-block text-white-50 h6">
                        84%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-box mt-4">
                  <h6 className="title text-light title-dark">
                    Digital Marketing
                  </h6>
                  <div
                    className="progress title-bg-dark"
                    style={{ height: "10px", padding: "3px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-black"
                      style={{ width: "75%" }}
                    >
                      <div className="progress-value d-block text-white-50 h6">
                        75%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-box mt-4">
                  <h6 className="title text-light title-dark">
                    Full stack Development
                  </h6>
                  <div
                    className="progress title-bg-dark"
                    style={{ height: "10px", padding: "3px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-black"
                      style={{ width: "79%" }}
                    >
                      <div className="progress-value d-block text-white-50 h6">
                        79%
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row
            className="mt-4 pt-2 position-relative"
            id="counter"
            style={{ zIndex: "1" }}
          >
            {itSolutionProgress.map((progress, key) => (
              <Col md={3} xs={6} className="mt-4 pt-2" key={key}>
                <div className="counter-box text-center">
                  <img
                    src={progress.img}
                    className="avatar avatar-small"
                    alt=""
                  />
                  <h2 className="mb-0 mt-4">
                    <span className="counter-value" data-count="97">
                      {progress.count}
                    </span>
                    {progress.percentage}
                  </h2>
                  <h6 className="counter-head text-muted">
                    {progress.heading}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
          <div className="feature-posts-placeholder bg-light"></div>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Features;
