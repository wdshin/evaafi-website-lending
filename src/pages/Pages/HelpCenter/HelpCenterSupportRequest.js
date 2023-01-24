import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import NavBar from "./NavBar";
import Footer7 from "../PageFooterLayouts/Footer7";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";

class HelpCenterSupportRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <React.Fragment>
      <NavBar />        
        {/* breadcrumb */}

        <section className="bg-half-170 bg-light d-table w-100">
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col lg={12} className="text-center">
                        <div className="pages-heading">
                            <h4 className="title mb-0"> Submit your Support Request </h4>
                        </div>
                    </Col>
                </Row>

                <div className="position-breadcrumb">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                        <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                            <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                            <li className="breadcrumb-item"><Link to="/helpcenter-overview">Help Center</Link></li>{" "}
                            <li className="breadcrumb-item active" aria-current="page">Support</li>
                        </ul>
                    </nav>
                </div>
            </Container> 
        </section>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7} xs={12}>
                <div className="rounded p-4 shadow">
                  <Row>
                    <Col xs={12}>
                      <Alert
                        isOpen={this.state.isOpen}
                        toggle={() => this.setState({ isOpen: false })}
                        color="primary"
                      >
                        Data Submtted Successfully
                      </Alert>
                      <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Name <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="First Name :"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                placeholder="Your email :"
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Subject</Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="subject"
                                id="subject"
                                className="form-control ps-5"
                                placeholder="Your subject :"
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Comments</Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                className="form-control ps-5"
                                placeholder="Your Message :"
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12}>
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="btn btn-primary"
                              value="Send Request"
                            />
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer7 />
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default HelpCenterSupportRequest;
