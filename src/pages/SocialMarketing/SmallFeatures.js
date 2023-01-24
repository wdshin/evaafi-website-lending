import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import social from "../../assets/images/illustrator/social.svg";

class SmallFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuresSmall: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={{ size: 6, order: 2 }} xs={{ size: 12, order: 1 }}>
              <img src={social} className="img-fluid" alt="Landrick" />
            </Col>            
            <Col lg={7} md={6} className="col-12 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title me-lg-4">
                <p className="text-primary h2 mb-3"><i className="uil uil-layer-group"></i></p>
                <h4 className="title mb-3">Rapidly Grow Your <br /> <span className="text-primary">Social Feeds</span></h4>
                <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented &amp; Experienced Marketing Agency</li>
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="#!"
                    className="btn btn-icon btn-pills btn-primary lightbox"
                    onClick={this.openModal}
                  >
                    <FeatherIcon
                      icon="video"
                      className="icons"
                    />
                  </Link>
                  <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                </div>
              </div>
            </Col>
          </Row>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default SmallFeatures;
