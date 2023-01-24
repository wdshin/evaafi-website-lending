import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  CardHeader,
} from "reactstrap";

//Import components
import NavBar from "./NavBar";
import Footer7 from "../PageFooterLayouts/Footer7";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";

class HelpCenterOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Help Center", link: "#" },
        { id: 3, name: "Overview" },
      ],
      features: [
        {
          icon: "uil uil-question-circle",
          link: "/helpcenter-faqs",
          title: "FAQs",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
        },
        {
          icon: "uil uil-file-bookmark-alt",
          link: "/helpcenter-guides",
          title: "Guides / Support",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
        },
        {
          icon: "uil uil-cog",
          link: "/helpcenter-support-request",
          title: "Support Request",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
        },
      ],
      col1: true,
      col2: false,
      col3: false,
      col4: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />       
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title"> Hello! <br /> How can we help you? </h4>

                  <div className="subcribe-form mt-4 pt-2">
                    <form>
                      <div className="mb-0">
                        <input type="text" id="help" name="name" className="border bg-white rounded-pill" required="" placeholder="Search your questions or topic..." />
                        <button type="submit" className="btn btn-pills btn-primary">Search</button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="/helpcenter-overview">Help Center</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Overview</li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Find the help you need</h4>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              {this.state.features.map((feature, key) => (
                <Col key={key} lg={4} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="features feature-primary explore-feature border-0 rounded text-center">
                    <CardBody>
                      <div className="icons rounded-circle shadow-lg d-inline-block mb-2 h3">
                        <i className={feature.icon}></i>
                      </div>
                      <div className="content mt-4">
                        <Link to={feature.link} className="title h5 text-dark">
                          {feature.title}
                        </Link>
                        <p className="text-muted mt-3 mb-0">{feature.desc}</p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Get Started</h4>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={9} className="mt-4 pt-2">
                <div className="faq-content">
                  <div className="accordion" id="accordionExample">
                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col1}
                        className={
                          this.state.col1
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingOne"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How does it work ?
                            <i
                              className={
                                this.state.col1
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col1}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col2}
                        className={
                          this.state.col2
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingTwo"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            Do I need a designer to use Landrick ?
                            <i
                              className={
                                this.state.col2
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col2}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col3}
                        className={
                          this.state.col3
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            What do I need to do to start selling ?
                            <i
                              className={
                                this.state.col3
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col3}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-0">
                      <Link
                        to="#"
                        onClick={this.t_col4}
                        className={
                          this.state.col4
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            What happens when I receive an order ?
                            <i
                              className={
                                this.state.col4
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col4}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>
                  </div>
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

export default HelpCenterOverview;
