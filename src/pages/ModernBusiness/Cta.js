// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import img2 from "../../assets/images/2.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Cta extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Container fluid className="mt-100 mt-60">
          <div className="bg-cta shadow rounded card overflow-hidden"
            style={{ background: `url(${img2}) center center` }}
            id="cta">
            <div className="bg-overlay"></div>
            <Container>
              <Row className="justify-content-center">
                <Col xs="12" className="text-center">
                  <div className="section-title">
                    <h4 className="title title-dark text-white mb-4">
                      We Are Creative Dreamers and Innovators
                    </h4>
                    <p className="text-white-50 para-dark para-desc mx-auto">
                      Start working with Landrick that can provide everything you
                      need to generate awareness, drive traffic, connect.
                    </p>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="play-btn border border-light mt-4 video-play-icon"
                    >
                      <i>
                        <FeatherIcon
                          icon="play"
                          className="fea icon-ex-md text-white title-dark"
                        />
                      </i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="yba7hPeTSjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default Cta;
