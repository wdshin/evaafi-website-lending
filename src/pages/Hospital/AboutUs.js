import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMport Images
import about from "../../assets/images/medical/about.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Col, Container, Row } from "reactstrap";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={6}>
            <div className="position-relative">
              <img
                src={about}
                className="rounded img-fluid mx-auto d-block shadow rounded"
                alt=""
              />
              <div className="play-icon">
                <Link
                  to="#"
                  onClick={() => setOpen(true)}
                  className="play-btn video-play-icon"
                >
                  <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-lg-5">
              <span className="badge rounded-pill bg-soft-primary">About us</span>
              <h4 className="title mt-3 mb-4">A great place to receive care</h4>
              <p className="text-muted para-desc">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>
              <p className="text-muted para-desc mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>

              <div className="mt-4">
                <Link to="#" className="btn btn-primary">More Services</Link>
              </div>
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
    </React.Fragment>
  );
};
export default AboutUs;
