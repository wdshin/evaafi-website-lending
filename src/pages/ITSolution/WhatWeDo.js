import React, { useState } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { itSolutionWhatwedo } from "../../common/data";

// import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import image
import ab01 from "../../assets/images/course/online/ab01.jpg";
import ab02 from "../../assets/images/course/online/ab02.jpg";
import ab03 from "../../assets/images/course/online/ab03.jpg";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <div className="col-12 text-center">
              {/* render Section title */}
              <SectionTitle
                title="What we do ?"
                desc=" that can provide everything you need to generate awareness, drive traffic, connect"
              />
            </div>
          </Row>
          <Row>
            {itSolutionWhatwedo.map((items, key) => (
              <Col lg={3} md={4} className="mt-4 pt-2" key={key}>
                <div className="card features feature-primary feature-full-bg rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                  <span className="h1 icon-color">
                    <i className={items.icon}></i>
                  </span>
                  <div className="card-body p-0 content">
                    <h5>{items.heading}</h5>
                    <p className="para text-muted mb-0">{items.desc}</p>
                  </div>
                  <span className="big-icon text-center">
                    <i className={items.icon}></i>
                  </span>
                </div>
              </Col>
            ))}
            <Col lg={12} md={4} className="text-center mt-4 pt-2">
              <Link to="#" className="btn btn-primary">
                See more{" "}
                <i>
                  <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                </i>
              </Link>
            </Col>
            <Container className="mt-100 mt-60">
              <Row className="align-items-center">
                <Col lg={6} md={6}>
                  <Row className="align-items-center">
                    <Col lg={6} className="col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img src={ab01} className="img-fluid" alt="" />
                          <div className="overlay-work bg-dark"></div>
                          <div className="content">
                            <Link
                              to="#"
                              className="title text-white d-block fw-bold"
                            >
                              Web Development
                            </Link>
                            <small className="text-light">
                              IT & Software
                            </small>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={6} className="col-6">
                      <Row>
                        <Col lg={12} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                            <div className="card-body p-0">
                              <img src={ab02} className="img-fluid" alt="" />
                              <div className="overlay-work bg-dark"></div>
                              <div className="content">
                                <Link
                                  to="#"
                                  className="title text-white d-block fw-bold"
                                >
                                  Michanical Engineer
                                </Link>
                                <small className="text-light">
                                  Engineering
                                </small>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col lg={12} md={12} className="mt-4 pt-2">
                          <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                            <div className="card-body p-0">
                              <img src={ab03} className="img-fluid" alt="" />
                              <div className="overlay-work bg-dark"></div>
                              <div className="content">
                                <Link
                                  to="#"
                                  className="title text-white d-block fw-bold"
                                >
                                  Chartered Accountant
                                </Link>
                                <small className="text-light">C.A.</small>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col lg={6} md={6} className="mt-4 mt-lg-0 pt- pt-lg-0">
                  <div className="ms-lg-4">
                    <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">About Our Story</h4>
                      <p className="text-muted para-desc">
                        Start working with{" "}
                        <span className="text-primary fw-bold">
                          Landrick
                        </span>{" "}
                        that can provide everything you need to generate
                        awareness, drive traffic, connect.
                      </p>
                      <p className="text-muted para-desc mb-0">
                        The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated in the 16th century.
                        Lorem Ipsum is composed in a pseudo-Latin language
                        which more or less corresponds to 'proper' Latin. It
                        contains a series of real Latin words.
                      </p>
                    </div>

                    <ul className="list-unstyled text-muted">
                      <li className="mb-0">
                        <span className="text-primary h4 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Fully Responsive
                      </li>
                      <li className="mb-0">
                        <span className="text-primary h4 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Multiple Layouts
                      </li>
                      <li className="mb-0">
                        <span className="text-primary h4 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Suits Your Style
                      </li>
                    </ul>

                    <div className="watch-video mt-4 pt-2">
                      <Link
                        to="//1.envato.market/landrickreactjs"
                        target="_blank"
                        className="btn btn-primary m-1"
                      >
                        Read More{" "}                       
                        <i className="uil uil-angle-right-b align-middle"></i>                     
                      </Link>{" "}
                      <Link
                        to="#"
                        onClick={() => setOpen(true)}
                        className="btn btn-icon btn-pills btn-primary m-1 lightbox"
                      >                        
                          <FeatherIcon icon="video" className="icons" />                        
                      </Link>
                      <span className="fw-bold text-uppercase small align-middle ms-1">
                        Watch Now
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
          <ModalVideo
            channel="youtube"
            isOpen={open}
            videoId="yba7hPeTSjk"
            onClose={() => setOpen(false)}
          />
        </Container>
      </section>
    </React.Fragment>
  );
};
export default WhatWeDo;
