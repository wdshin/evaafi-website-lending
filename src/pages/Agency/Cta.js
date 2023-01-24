// React Basic and Bootstrap
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import bgImg from "../../assets/images/1.jpg";

const Cta = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <section
        className="section bg-cta"
        style={{ background: `url(${bgImg}) center center` }}
      >
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <div className="section-title">
                <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide
                  everything you need to generate awareness, drive traffic, connect.</p>
                <Link
                  to="#!"
                  onClick={() => setOpen(true)}
                  className="play-btn mt-4 lightbox"
                >
                  <FeatherIcon
                    icon="play"
                    className="fea icon-ex-md text-white title-dark"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      />
    </React.Fragment>
  );
}

export default Cta;
