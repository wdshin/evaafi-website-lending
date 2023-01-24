import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { emailInboxFeatures } from "../../common/data";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const Features = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <section className="section border-bottom">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Features</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {emailInboxFeatures.map((features, key) => (
              <Col lg={4} md={6} className="mt-5" key={key}>
                <div className="d-flex features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <i className={features.icon}></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark title">
                        {features.title}
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      The most well-known dummy text is the, which is said to
                      have originated in the 16th century.
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center">
            <Col className="col-12 mt-5">
              <div className="text-center">
                <Link to="#" className="btn btn-primary m-1">Get Started <i className="uil uil-angle-right-b"></i></Link>
                {" "}
                <Link to="#!" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                  <FeatherIcon
                    icon="video"
                    className="icons"
                  />
                </Link><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
              </div>
            </Col>
          </Row>
        </Container>

        <ModalVideo
          channel="youtube"
          isOpen={open}
          videoId="yba7hPeTSjk"
          onClose={() => setOpen(false)}
        />
      </section>
    </React.Fragment>
  );
};
export default Features;
