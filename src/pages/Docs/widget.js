import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Badge } from "reactstrap";

import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import client04 from "../../assets/images/client/04.jpg";
import lenovo from "../../assets/images/client/lenovo.svg";
import client05 from "../../assets/images/client/05.jpg";
import client02 from "../../assets/images/client/02.jpg";
import client01 from "../../assets/images/blog/01.jpg";
import course1 from "../../assets/images/course/1.jpg";
import product01 from "../../assets/images/shop/product/s1.jpg";
import work15 from "../../assets/images/work/15.jpg";
import work2 from "../../assets/images/work/2.jpg";
import work1 from "../../assets/images/work/1.jpg";
import work3 from "../../assets/images/work/3.jpg";
import work4 from "../../assets/images/work/4.jpg";
import hotel01 from "../../assets/images/hotel/01.jpg";
import ab02 from "../../assets/images/course/online/ab02.jpg";
import work5 from "../../assets/images/work/5.jpg";
import remote from "../../assets/images/job/remote.jpg";
import circleCi from "../../assets/images/job/Circleci.svg";
import master from "../../assets/images/payments/payment/master.png";
import blog01 from "../../assets/images/blog/01.jpg";
import cpu from "../../assets/images/crypto/cpu.svg";
import nft01 from "../../assets/images/nft/1.jpg";
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Docs", link: "#" },
        { id: 3, name: "Widget" },
      ],
    };
  }

  componentDidMount() {
    document.body.classList = "";
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        document.querySelector(".shoppingbtn").classList.remove("btn-light");
        document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Widget </h4>
                </div>
              </div>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Docs</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Widget</li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>

            <Row>
              <Col xs={12}>
                <div className="section-title">
                  <h4>Features Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    <i className="uil uil-airplay h2 text-primary"></i>
                  </div>

                  <div className="content mt-4">
                    <h5 className="title-2">Easy To Use</h5>
                    <p className="text-muted mb-0">
                      Nisi aenean vulputate eleifend tellus vitae eleifend enim
                      a Aliquam eleifend aenean elementum semper.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <div className="d-flex features pt-4 pb-4">
                  <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                    <FeatherIcon icon="monitor" className="fea icon-ex-md" />
                  </div>
                  <div className="flex-1">
                    <h4 className="title">Use On Any Device</h4>
                    <p className="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className="work-process border-0 rounded shadow">
                  <CardBody>
                    <h4 className="title">Final Approvement</h4>
                    <p className="text-muted para">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century.
                    </p>
                    <Link to="#" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </Link>
                    <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                      <li className="step h1 mb-0 fw-bold">
                        Step 03.
                      </li>
                      <li className="step-icon">
                        <i className="mdi mdi-check-all mdi-36px"></i>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card
                  className="border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow"
                >

                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-file d-block rounded h3 mb-0"></i>
                  </div>
                  <CardBody className="p-0 mt-4">
                    <Link to="#" className="title h5 text-dark">
                      {" "}
                      Unlimited Access
                    </Link>
                    <p className="text-muted mt-2">
                      It is a long established fact that a reader will be of a
                      page reader will be of a page when looking at its layout.{" "}
                    </p>
                    <Link to="#" className="text-primary read-more">
                      Read More <i className="uil uil-angle-right-b"></i>
                    </Link>
                    <i className="uil uil-file text-primary full-img"></i>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className="bg-light rounded shadow border-0">
                  <CardBody className="py-5">
                    <i className="uil uil-rupee-sign h2 text-primary"></i>
                    <div className="mt-4">
                      <h5 className="card-title">
                        <Link to="#" className="text-primary">
                          {" "}
                          Low Fees
                        </Link>
                      </h5>
                      <p className="text-muted mt-3 mb-0">
                        If the distribution of letters and 'words' is random,
                        the reader will not be distracted.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="border-0 text-center features feature-primary feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-4">
                    <h5 className="fw-bold">Phone</h5>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>
                    <Link to="tel:+152534-468-854" className="text-primary">
                      +152 534-468-854
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="features feature-primary explore-feature border-0 rounded text-center shadow">
                  <CardBody>
                    <div className="icons rounded-circle shadow-lg d-inline-block">
                      <i>
                        <FeatherIcon icon="edit" className="fea" />
                      </i>
                    </div>
                    <h5 className="mt-3 title">Perfect Design</h5>
                    <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <Card className="border-0 text-center features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-envelope-lock d-block rounded h3 mb-0"></i>
                  </div>

                  <CardBody className="p-0 mt-4">
                    <h5>Fully Secured</h5>
                    <p className="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                    <div className="mt-2">
                      <Link to="#" className="read-more">Read More <i data-feather="arrow-right" className="fea icon-sm"></i></Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <div className="d-flex features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content ms-4">
                    <h5 className="mb-1"><Link to="#" className="text-dark">Learners</Link></h5>
                    <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <Card className="features feature-primary explore-feature border-0 rounded text-center">
                  <CardBody className="py-5">
                    <div className="icons rounded-circle shadow-lg d-inline-block">
                      <i><FeatherIcon icon="monitor" className="fea" /></i>
                    </div>
                    <div className="content mt-3">
                      <h5><Link to="#" className="title text-dark">IT & Software</Link></h5>
                      <Link to="#" className="text-muted small">Learn More</Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <Card className="features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon-color">
                    <i className="uil uil-briefcase"></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>Our Vision</h5>
                    <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                  </CardBody>
                </Card>
              </Col>

              <Col md={4} className="mt-4 pt-2">
                <div className="feature feature-primary position-relative ps-4 py-4 pe-5 shadow rounded overflow-hidden">
                  <div className="me-md-5">
                    <Link to="#" className="title h5 text-dark">Buy & Sell Crypto</Link>
                    <p className="text-muted mb-3 mt-4">Buy or sell Bitcoin, Ethereum, and other crypto assets with your credit card, debit card, or bank account.</p>
                    <Link to="#" className="text-primary">Buy Bitcoin <i className="uil uil-arrow-right"></i></Link>
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle">
                    <img src={cpu} className="avatar avatar-large opacity-2" alt="" />
                  </div>
                </div>
              </Col>

              <Col md={4} className="col-12 mt-4 pt-2">
                <Card className="features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon-color">
                    <i className="uil uil-user-check"></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>Dedicated Supports</h5>
                    <p className="para text-muted mb-0">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>
                  </CardBody>
                  <div className="position-absolute top-0 end-0">
                    <i className="uil uil-user-check display-1 opacity-05"></i>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Testimonial Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex client-testi">
                  <img
                    src={client04}
                    className="avatar avatar-small client-image rounded shadow"
                    alt="Landrick"
                  />
                  <div
                    className="card flex-1 content p-3 shadow rounded position-relative"
                  >
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                    </ul>
                    <p className="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero. "
                    </p>
                    <h6 className="text-primary">
                      - Christa Smith{" "}
                      <small className="text-muted">Manager</small>
                    </h6>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className="customer-testi text-center border rounded mx-2">
                  <CardBody>
                    <img
                      src={lenovo}
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt="Landrick"
                    />
                    <p className="text-muted mt-4">
                      " One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others. "
                    </p>
                    <h6 className="text-primary">- Barbara McIntosh</h6>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" customer-testi m-2 text-center rounded shadow border-0">
                  <CardBody>
                    <p className="text-muted h6 fst-italic">
                      " It seems that only fragments of the oem Ipsum', which is
                      said to have originated in the 16th century. "
                    </p>
                    <img
                      src={client05}
                      className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt="Landrick"
                    />
                    <ul className="list-unstyled mb-0 mt-3">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>{" "}
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 className="text-primary">
                      - Dean Tolle{" "}
                      <small className="text-muted">Developer</small>
                    </h6>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" customer-testi border-0 text-center">
                  <CardBody>
                    <img
                      src={client04}
                      className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt="Landrick"
                    />
                    <p className="text-muted mt-4">
                      " Thus, Lorem Ipsum has only limited suitability as a
                      visual filler for German texts. "
                    </p>
                    <h6 className="text-primary">- Jill Webb</h6>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={8} xs={12} className="mt-4">
                <Card className=" rounded bg-light overflow-hidden border-0 m-2">
                  <Row className="align-items-center g-0">
                    <Col md={5}>
                      <img
                        src={client02}
                        className="img-fluid"
                        alt="Landrick"
                      />
                    </Col>

                    <Col md={7}>
                      <CardBody className="customer-testi">
                        <h6 className="text-primary fw-bold">
                          Barbara McIntosh{" "}
                          <small className="text-muted d-block">User</small>
                        </h6>
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>{" "}
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>{" "}
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>{" "}
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>{" "}
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted h6 mb-0 fst-italic">
                          " This seems that only fragments of the original text
                          remain in the Ipsum texts used today. The well known
                          have originated in the 16th century. "
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Blog Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" blog rounded border-0 shadow">
                  <div className="position-relative">
                    <img
                      src={blog01}
                      className="card-img-top rounded-top"
                      alt="..."
                    />
                    <div className="overlay rounded-top bg-dark"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link to="#" className="card-title title text-dark">
                        Design your apps in your own way
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart-outline me-1"></i>33
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted comments">
                            <i className="uil uil-comment me-1"></i>08
                          </Link>
                        </li>
                      </ul>
                      <Link
                        to="page-blog-detail"
                        className="text-muted readmore"
                      >
                        Read More <i className="uil uil-angle-right-b"></i>
                      </Link>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" courses-desc overflow-hidden rounded shadow border-0">
                  <div className="position-relative d-block overflow-hidden">
                    <img
                      src={course1}
                      className="img-fluid rounded-top mx-auto"
                      alt="Landrick"
                    />
                    <div className="overlay-work"></div>
                    <Link to="#" className="text-white h6 preview">
                      Preview Now <i className="uil uil-angle-right-b"></i>
                    </Link>
                  </div>

                  <CardBody>
                    <h5>
                      <Link to="#" className="title text-dark">
                        Program for Missionaries
                      </Link>
                    </h5>
                    <div className="rating">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          5 Star (3
                          <i className="mdi mdi-account text-muted"></i>)
                        </li>
                      </ul>
                    </div>
                    <div className="fees d-flex justify-content-between">
                      <ul className="list-unstyled mb-0 numbers">
                        <li>
                          <i className="mdi mdi-school text-muted"></i> 30
                          Students
                        </li>
                        <li>
                          <i className="mdi mdi-book text-muted"></i> 5 Lession
                        </li>
                      </ul>
                      <h4>
                        <span className="h6">$</span>75
                      </h4>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src={course1} className="card-img-top" alt="..." />
                    <div className="overlay bg-dark"></div>
                    <div className="teacher d-flex align-items-center">
                      <img
                        src={client01}
                        className="avatar avatar-md-sm rounded-circle shadow"
                        alt="Landrick"
                      />
                      <div className="ms-2">
                        <h6 className="mb-0">
                          <Link to="#" className="text-light user">
                            Dung Lewis
                          </Link>
                        </h6>
                        <p className="text-light small my-0">Professor</p>
                      </div>
                    </div>
                    <div className="course-fee bg-white text-center shadow-lg rounded-circle">
                      <h6 className="text-primary fw-bold fee">$11</h6>
                    </div>
                  </div>
                  <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                      <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <CardBody className="content">
                    <small>
                      <Link to="#" className="text-primary h6">
                        Design
                      </Link>
                    </small>
                    <h5 className="mt-2">
                      <Link to="#" className="title text-dark">
                        Program for Missionaries
                      </Link>
                    </h5>
                    <p className="text-muted">
                      The most well-known dummy text is the have originated in
                      the 16th century.
                    </p>
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i
                        data-feather="chevron-right"
                        className="fea icon-sm"
                      ></i>
                    </Link>
                    <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                      <li className="text-muted small">
                        <i
                          data-feather="book"
                          className="fea icon-sm text-info"
                        ></i>{" "}
                        25 Lectures
                      </li>
                      <li className="text-muted small ms-3">
                        <i
                          data-feather="clock"
                          className="fea icon-sm text-warning"
                        ></i>{" "}
                        1h 30m
                      </li>
                      <li className="text-muted small ms-3">
                        <i
                          data-feather="eye"
                          className="fea icon-sm text-primary"
                        ></i>{" "}
                        3012
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6} xs={12} className="mt-4 pt-2">
                <Card className=" blog rounded border-0 shadow overflow-hidden">
                  <Row className="align-items-center g-0">
                    <Col md={{ size: 6, order: 1 }} xs={{ order: 2 }}>
                      <CardBody className="content">
                        <h5>
                          <Link to="#" className="card-title title text-dark">
                            Design your apps in your own way
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">
                          Due to its widespread use as filler text for layouts,
                          non-readability
                        </p>
                        <div className="post-meta d-flex justify-content-between mt-3">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item me-2 mb-0">
                              <Link to="#" className="text-muted like">
                                <i className="mdi mdi-heart-outline me-1"></i>33
                              </Link>
                            </li>{" "}
                            <li className="list-inline-item">
                              <Link to="#" className="text-muted comments">
                                <i className="uil uil-comment me-1"></i>
                                08
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="page-blog-detail"
                            className="text-muted readmore"
                          >
                            Read More <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </CardBody>
                    </Col>

                    <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                      <img src={work15} className="img-fluid" alt="Landrick" />
                      <div className="overlay bg-dark"></div>
                      <div className="author">
                        <small className="text-light user d-block">
                          <i className="mdi mdi-account"></i> Calvin Carlo
                        </small>
                        <small className="text-light date">
                          <i className="mdi mdi-calendar-check"></i> 13th
                          August, 2019
                        </small>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Shop Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <Card className="shop-list border-0 position-relative">
                  <ul className="label list-unstyled mb-0">
                    <li><Link to="#" className="badge badge-link rounded-pill bg-primary">New</Link></li>
                    <li><Link to="#" className="badge badge-link rounded-pill bg-success">Featured</Link></li>
                    <li><Link to="#" className="badge badge-link rounded-pill bg-warning">Sale</Link></li>
                  </ul>
                  <div className="shop-image position-relative overflow-hidden rounded shadow">
                    <Link to="/shop-product-detail"><img src={product01} className="img-fluid" alt="" /></Link>
                    <Link to="/shop-product-detail" className="overlay-work">
                      <img src={product01} className="img-fluid" alt="" />
                    </Link>
                    <ul className="list-unstyled shop-icons">
                      <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger">
                        <i><FeatherIcon icon="heart" className="icons" /></i></Link></li>
                      <li className="mt-2"><Link to="#" data-bs-toggle="modal" data-bs-target="#productview" className="btn btn-icon btn-pills btn-soft-primary">
                        <i><FeatherIcon icon="eye" className="icons" /></i></Link></li>
                      <li className="mt-2"><Link to="/shop-cart" className="btn btn-icon btn-pills btn-soft-warning">
                        <i><FeatherIcon icon="shopping-cart" className="icons" /></i></Link></li>
                    </ul>
                  </div>
                  <CardBody className="content pt-4 p-2">
                    <Link to="/shop-product-detail" className="text-dark product-name h6">T-Shirts</Link>
                    <div className="d-flex justify-content-between mt-1">
                      <h6 className="text-dark small fst-italic mb-0 mt-1">$5.00 <span className="text-success ms-1">30% off</span> </h6>
                      <ul className="list-unstyled text-warning mb-0">
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Work, Project & Portfolio Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" border-0 work-container work-classic">
                  <CardBody className=" p-0">
                    <Link to="#">
                      <img
                        src={work2}
                        className="img-fluid rounded work-image"
                        alt="Landrick"
                      />
                    </Link>
                    <div className="content pt-3">
                      <h5 className="mb-0">
                        <Link to="#" className="text-dark title">
                          Iphone mockup
                        </Link>
                      </h5>
                      <h6 className="text-muted tag mb-0">Branding</h6>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                  <CardBody className=" p-0">
                    <Link className="mfp-image d-inline-block" to="#" title="">
                      <img src={work1} className="img-fluid" alt="work" />
                    </Link>
                    <div className="content bg-white p-3">
                      <h5 className="mb-0">
                        <Link to="#" className="text-dark title">
                          Iphone mockup
                        </Link>
                      </h5>
                      <h6 className="text-muted tag mb-0">Branding</h6>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                  <CardBody className=" p-0">
                    <img src={work3} className="img-fluid rounded" alt="work" />
                    <div className="overlay-work bg-dark"></div>
                    <div className="content">
                      <Link
                        to="#"
                        className="title text-white d-block fw-bold"
                      >
                        Spa Cosmetics
                      </Link>
                      <small className="text-light">Developing</small>
                    </div>
                    <div className="client">
                      <small className="text-light user d-block">
                        <i className="mdi mdi-account"></i> Calvin Carlo
                      </small>
                      <small className="text-light date">
                        <i className="mdi mdi-calendar-check"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className=" border-0 work-container work-modern position-relative d-block overflow-hidden rounded-0">
                  <CardBody className=" p-0">
                    <img src={work4} className="img-fluid" alt="work" />
                    <div className="overlay-work bg-dark"></div>
                    <div className="content">
                      <h5 className="mb-0">
                        <Link to="#" className="text-white title">
                          Yellow bg with Books
                        </Link>
                      </h5>
                      <h6 className="text-light tag mb-0">Books</h6>
                    </div>
                    <div className="icons text-center">
                      <Link
                        to={work4}
                        className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                      >
                        <i>
                          <i>
                            <FeatherIcon
                              icon="camera"
                              className="fea icon-sm"
                            />
                          </i>
                        </i>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className=" work-container work-modern rounded border-0 overflow-hidden">
                  <CardBody className=" p-0">
                    <img
                      src={hotel01}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                    <div className="content">
                      <Link
                        to="#"
                        className="title text-white pb-2 border-bottom"
                      >
                        Regular Room
                      </Link>
                      <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                        <li className="list-inline-item me-3">
                          <i className="mdi mdi-bed-empty mdi-24px me-2"></i>1
                          Bed
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-scale-bathroom mdi-24px me-2"></i>
                          1 Bathrooms
                        </li>
                      </ul>
                      <p className="text-white d-block mb-0">
                        Rent <span className="text-success">$350</span> /Night
                      </p>
                    </div>
                    <div className="read_more bg-primary text-center rounded-circle">
                      <Link to="#" className="text-light d-block">
                        <i>
                          <FeatherIcon
                            icon="chevron-right"
                            className="fea icon-sm title-dark"
                          />
                        </i>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className=" work-container work-modern overflow-hidden rounded border-0 shadow-lg">
                  <CardBody className=" p-0">
                    <img src={ab02} className="img-fluid" alt="work" />
                    <div className="overlay-work bg-dark"></div>
                    <div className="content">
                      <Link
                        to="#"
                        className="title text-white d-block fw-bold"
                      >
                        Michanical Engineer
                      </Link>
                      <small className="text-light">Engineering</small>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Job Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className=" catagories overflow-hidden rounded shadow border-0">
                  <img src={work5} className="img-fluid" alt="Landrick" />
                  <CardBody>
                    <ul className="list-unstyled d-flex justify-content-between mb-0">
                      <li>
                        <Link to="#" className="title h6 text-dark">
                          Communications
                        </Link>
                      </li>
                      <li className="h6 mb-0 jobs">125 Jobs</li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} xs={12} className=" mt-4 pt-2">
                <Card className="job-box job-primary rounded shadow border-0 overflow-hidden">
                  <div className="border-bottom">
                    <div className="position-relative">
                      <img src={remote} className="img-fluid" alt="Landrick" />
                    </div>
                    <h5 className="mb-0 position">
                      <Link to="page-job-detail" className="text-dark h5">
                        Python Developer
                      </Link>
                      <ul className="list-unstyled h6 mb-0 text-warning">
                        <li className="list-inline-item mb-0">
                          <i className="mdi mdi-star"></i>
                        </li>{" "}
                        <li className="list-inline-item mb-0">
                          <i className="mdi mdi-star"></i>
                        </li>{" "}
                        <li className="list-inline-item mb-0">
                          <i className="mdi mdi-star"></i>
                        </li>{" "}
                        <li className="list-inline-item mb-0">
                          <i className="mdi mdi-star"></i>
                        </li>{" "}
                        <li className="list-inline-item mb-0">
                          <i className="mdi mdi-star"></i>
                        </li>
                      </ul>
                    </h5>
                    <ul className="list-unstyled head mb-0">
                      <Badge color="danger" className="badge-danger badge-pill">Remote</Badge>
                    </ul>
                  </div>

                  <div className="card-body content position-relative">
                    <div className="firm-logo rounded-circle shadow bg-light text-center">
                      <img src={circleCi} className="avatar avatar-md-sm" alt="" />
                    </div>
                    <div className="company-detail text-center mt-3">
                      <h5 className="mb-0"><Link to="/page-job-company" className="text-dark company-name">CircleCi</Link></h5>
                      <p className="text-muted"><Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe"
                        className="video-play-icon text-muted lightbox">
                        <FeatherIcon icon="map-pin" className="fea icon-sm" /> San Francisco</Link></p>

                    </div>
                    <ul className="job-facts list-unstyled">
                      <li className="list-inline-item text-muted">
                        <FeatherIcon icon="check" className="fea icon-sm text-success me-1" /> 2 Year Expirence</li>
                      <br />
                      <li className="list-inline-item text-muted">
                        <FeatherIcon icon="check" className="fea icon-sm text-success me-1" /> Working Hours- 6hr</li>
                      <li className="list-inline-item text-muted">
                        <FeatherIcon icon="check" className="fea icon-sm text-success me-1" /> Information strategy</li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/job-detail-three" className="btn btn-soft-primary">Apply Now</Link>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <div className="job-box job-primary candidate-list card rounded border-0 shadow">
                  <CardBody>
                    <ul className="list-unstyled align-items-center">
                      <li className="list-inline-item float-end"><Link to="#" className="text-muted like"><i className="mdi mdi-heart h5 mb-0"></i></Link></li>
                      <li className="list-inline-item"><span className="badge rounded-pill bg-soft-success">Featured</span></li>
                    </ul>

                    <div className="content text-center">
                      <img src={client02} className="avatar avatar-md-md shadow-md rounded-circle" alt="" />
                      <ul className="list-unstyled mb-1 mt-2">
                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>{" "}
                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>{" "}
                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>{" "}
                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>{" "}
                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                      </ul>
                      <Link to="/job-candidate" className="text-dark h5 name">Martha Griffin</Link>
                      <p className="text-muted my-1">WordPress Developer</p>

                      <span className="text-muted"><i className="uil uil-graduation-cap h4 mb-0 me-2 icons"></i>Experience <span className="text-success">3+ years</span></span>

                      <ul className="list-unstyled mt-3">
                        <li className="list-inline-item m-1"><Link to="#" className="rounded bg-light py-1 px-2 text-muted small">PHP</Link></li>{" "}
                        <li className="list-inline-item m-1"><Link to="#" className="rounded bg-light py-1 px-2 text-muted small">WordPress</Link></li>{" "}
                        <li className="list-inline-item m-1"><Link to="#" className="rounded bg-light py-1 px-2 text-muted small">Web Design</Link></li>{" "}
                        <li className="list-inline-item m-1"><Link to="#" className="rounded bg-light py-1 px-2 text-muted small">CSS</Link></li>{" "}
                        <li className="list-inline-item m-1"><Link to="#" className="rounded bg-light py-1 px-2 text-muted small">JS</Link></li>
                      </ul>

                      <div className="d-grid">
                        <Link to="/job-candidate" className="btn btn-soft-primary">Read More {" "}
                          <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </Col>

              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="job-box job-primary company-list card border-0 rounded shadow">
                  <div className="text-center py-5 border-bottom">
                    <img src={circleCi} className="avatar avatar-small mx-auto rounded-circle d-block mb-3" alt="" />
                    <Link to="job-company" className="text-dark h5 name">CircleCi</Link>
                    <p className="text-muted mt-1 mb-0">Internet Services</p>
                  </div>

                  <div className="p-4">
                    <h5>Company Details :</h5>
                    <ul className="list-unstyled mb-4">
                      <li className="h6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin fea icon-sm text-warning me-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span className="text-muted">Location :</span> San Francisco</li>
                      <li className="h6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link fea icon-sm text-warning me-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg><span className="text-muted">Comapny :</span> circleci.com</li>
                      <li className="h6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign fea icon-sm text-warning me-2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg><span className="text-muted">Revenue :</span> $ 5M / Annual</li>
                      <li className="h6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users fea icon-sm text-warning me-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span className="text-muted">No. of employees :</span> 200</li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/job-company" className="btn btn-soft-primary">View Detail <i className="uil uil-angle-right-b align-middle"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Price Widget</h4>
                </div>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <Card className="pricing pricing-primary business-rate shadow bg-light rounded text-center border-0">
                  <CardBody className="py-5">
                    <h2 className="title name fw-bold text-uppercase mb-4">Free</h2>
                    <div className="d-flex justify-content-center mb-4">
                      <span className="h4 mb-0 mt-2">$</span>
                      <span className="price h1 mb-0">0</span>
                      <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                      <li className="h6 text-muted mb-0">
                        <span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>

                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>

                        Enhanced Security
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>

                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>

                        1 Domain Free
                      </li>
                    </ul>
                    <Link to="#" className="btn btn-primary mt-4">
                      Buy Now
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Payment Widget</h4>
                </div>
              </Col>

              <Col lg={5} md={6} className="mt-4 pt-2">
                <Card className=" rounded shadow bg-light border-0">
                  <CardBody className="py-5">
                    <img
                      src={master}
                      height="60"
                      className="text-end"
                      alt="Landrick"
                    />
                    <div className="mt-4">
                      <h5 className="">•••• •••• •••• 4559</h5>
                      <div className="d-flex justify-content-between">
                        <p className="h6 text-muted mb-0">Cristino Murfy</p>
                        <h6 className="mb-0">
                          Exp: <span className="text-muted">10/22</span>
                        </h6>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Counter Widget</h4>
                </div>
              </Col>

              <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                <Row id="counter">
                  <div className="col-12">
                    <Card className="counter-box border-0 bg-primary shadow text-center rounded">
                      <CardBody className="py-5">
                        <h2 className="mb-0 text-white">
                          <span className="counter-value" data-count="97">
                            <CountUp start={3} end={97} duration={8} />
                          </span>
                          %
                        </h2>
                        <h5 className="counter-head text-white-50 mb-0">
                          Happy Client
                        </h5>
                      </CardBody>
                    </Card>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>Event Widget</h4>
                </div>
              </Col>

              <Col lg={5} className="mt-4 pt-2">
                <Card className=" event-schedule rounded border">
                  <CardBody>
                    <div className="d-flex">
                      <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                        <li className="day fw-bold mb-2">11</li>
                        <li className="month fw-bold">OCT</li>
                      </ul>
                      <div className="flex-1 content">
                        <h4>
                          <Link to="#" className="text-dark title">
                            Digital Conference Event Intro
                          </Link>
                        </h4>
                        <p className="text-muted location-time">
                          <span className="text-dark h6">Address:</span> Hall 3,
                          Sinchang-dong, Kwangju,{" "}
                          <span className="text-danger">South Korea</span>{" "}
                          <br /> <span className="text-dark h6">Time:</span>{" "}
                          10:30AM to 11:15AM
                        </p>
                        <Link
                          to="#tickets"
                          className="btn btn-soft-primary btn-sm"
                        >
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="col-12 mt-4 pt-2">
                <div className="section-title">
                  <h4>NFTs Widget</h4>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={3} md={4} sm={6} className="col-12 mt-4 pt-2">
                <div className="card nft nft-item nft-primary rounded shadow overflow-hidden">
                  <div className="nft-image position-relative overflow-hidden">
                    <img src={nft01} className="img-fluid item-img" alt="" />
                    <div className="overlay"></div>
                    <div className="bid-btn p-3 text-center">
                      <Link to="/nft-item-detail" className="btn btn-pills"><i className="mdi mdi-gavel fs-6 me-2"></i> Bid</Link>
                    </div>
                    <div className="position-absolute top-0 start-0 m-2">
                      <Link to="#"><img src={client1} className="avatar avatar-sm-sm rounded-pill shadow-md" alt="" /></Link>
                    </div>
                    <div className="position-absolute top-0 end-0 m-2">
                      <Link to="#" className="badge rounded-md bg-light shadow"><i className="mdi mdi-heart align-middle text-danger"></i> <span className="text-dark">231</span></Link>
                    </div>
                  </div>

                  <div className="card-body p-3">
                    <Link to="/nft-item-detail" className="h5 title text-dark">#01 nft title</Link>

                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <span className="text-muted">12 in stock</span>
                      <span className="text-dark">Price: <span className="link">2.333ETH</span></span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="col-12 mt-4 pt-2">
                <div className="card nft nft-primary nft-creator border-0 rounded-md shadow">
                  <div className="card-body p-3">
                    <div className="pb-3 border-bottom">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-soft rounded-pill">No. #2</span>

                        <Link to="/nft-explore" className="text-dark h5 mb-0 read-more"><i className="uil uil-arrow-circle-right"></i></Link>
                      </div>
                    </div>

                    <div className="content mt-3">
                      <div className="position-relative text-center">
                        <img src={client2} className="avatar avatar-small rounded-pill shadow" alt="" />

                        <div className="author mt-2">
                          <Link to="account-profile" className="text-dark h6 name">Sofia Malik</Link>
                          <small className="d-block fw-bold mt-1">0.75<span className="text-muted">ETH</span></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4 pt-2">
                <div className="section-title">
                  <h4>FAQs Widget</h4>
                </div>
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <i>
                    <FeatherIcon
                      icon="help-circle"
                      className="fea icon-ex-md text-primary me-2 mt-1"
                    />
                  </i>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      How our <span className="text-primary">Landrick</span>{" "}
                      work ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and repetitions in
                      texts.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Widget;
