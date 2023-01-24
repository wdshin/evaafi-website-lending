// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//import  images
import cta from '../../assets/images/event/cta.jpg';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Icons
import FeatherIcon from "feather-icons-react";

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
          <section className="section bg-cta" id="cta" 
          style={{background : `url(${cta}) center center`}}
          >
            <div className="bg-overlay bg-primary bg-gradient" style={{ opacity : '0.85'}}></div>
            <Container>
              <Row className="justify-content-center">
                <Col xs="12" className="text-center">
                  <div className="section-title">
                    <h4 className="title title-dark text-white mb-4">
                      Digital International Conference 2019
                    </h4>
                    <p className="text-white-50 para-desc mx-auto">
                      Start working with Landrick that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="play-btn mt-4 lightbox"
                    >
                      <i>
                        <FeatherIcon
                          icon="play"
                          className="fea icon-ex-md text-white title-dark"
                        />
                      </i>
                    </Link>
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="yba7hPeTSjk"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
      </React.Fragment>
    );
  }
}

export default Cta;
