import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import hero from "../../assets/images/course/online/hero.jpg";

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
        <section className="bg-half-170">
          <Container>
              <Row className="mt-5">
                <Container>
                  <Row className="align-items-center">
                    <Col lg={7} md={6} xs={12}>
                      <div className="title-heading me-lg-4">
                        <Alert
                          color="primary"
                          className="alert-pills shadow"
                          role="alert"
                        >
                          <span className="content">
                            {" "}
                            Are you ready to learn online ?
                          </span>
                        </Alert>

                        <h1 className="heading mb-3">
                          Start Online Learning <br /> With{" "}
                          <span className="text-primary">: Landrick</span>
                        </h1>
                        <p className="para-desc text-muted">
                          Launch your campaign and benefit from our expertise on
                          designing and managing conversion centered bootstrap v5
                          html page.
                        </p>
                        <div className="subcribe-form mt-4 pt-2">
                          <Form className="m-0">
                            <div className="">
                              <input
                                type="text"
                                id="course"
                                name="name"
                                className="rounded shadow"
                                placeholder="Search your course"
                              />
                              <Button color="primary" type="submit">
                                Search{" "}                               
                                  <FeatherIcon
                                    icon="search"
                                    className="fea icon-sm"
                                  />                                
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </Col>

                    <Col
                      lg={5}
                      md={6}
                      xs={12}
                      className="mt-4 pt-2 mt-sm-0 pt-sm-0"
                    >
                      <div className="position-relative">
                        <img
                          src={hero}
                          className="rounded img-fluid mx-auto d-block"
                          alt="Landrick"
                        />
                        <div className="play-icon">
                          <Link
                            to="#"
                            onClick={this.openModal}
                            className="play-btn lightbox border-0"
                          >
                            <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
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
