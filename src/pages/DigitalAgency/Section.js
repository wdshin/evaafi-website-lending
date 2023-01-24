import React, { Component } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import bg from "../../assets/images/digital/home-bg.png";
import seo from "../../assets/images/digital/seo.gif";

//Import Icons
import FeatherIcon from "feather-icons-react";

class Section extends Component {
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
        <section
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${bg}) center center` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading mt-4">
                  <Alert
                    color="light"
                    className="alert-light alert-pills shadow"
                    role="alert"
                  >
                    <span color="danger" className="badge rounded-pill bg-danger me-1">
                      v4.2
                    </span>
                    <span className="content">
                      {" "}
                      Build <span className="text-primary">anything</span> you
                      want - Landrick.
                    </span>
                  </Alert>
                  <h1 className="heading mb-3">
                    A <span className="text-primary">Digital</span> Product{" "}
                    <br /> Marketing Agency
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>                 
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-pills btn-primary m-1">Get Started</Link>{" "}
                    <Link to="#!" onClick={this.openModal} className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                    <FeatherIcon icon="video" className="icons" />
                    </Link><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <img src={seo} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
