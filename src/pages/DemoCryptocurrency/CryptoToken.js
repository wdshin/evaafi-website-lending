import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import NavBar from './NavBar';
import Footer from './Footer';

//Import CountUp
import Countdown from "react-countdown-now";
import CountUp from 'react-countup';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import logoIcon from '../../assets/images/logo-icon.png';

// Modal Video
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import "../../../node_modules/swiper/swiper.scss";

const infoCardData = [
  {
    title: "Verify your identity",
    icon: "uil uil-user-check"
  },
  {
    title: "Sale the Bitcoin",
    icon: "uil uil-qrcode-scan"
  },
  {
    title: "Money in your bank account",
    icon: "uil uil-university"
  }
];
const RoadmapData = [
  {
    id: 1,
    date: "January, 2021",
    title: "Planning",
    icon: "uil uil-pen",
  },
  {
    id: 2,
    date: "February, 2021",
    title: "Blockchain Starts",
    icon: "uil uil-bitcoin",
  },
  {
    id: 3,
    date: "March, 2021",
    title: "Expanded Licensing",
    icon: "uil uil-clipboard-blank",
  },
  {
    id: 4,
    date: "April, 2021",
    title: "Token Sale",
    icon: "uil uil-money-insert",
    isClass: true,
    istextColor: true,
    isDate: true,
    isTitle: true,
  },
  {
    id: 5,
    date: "May, 2021",
    title: "Project Launch",
    icon: "uil uil-airplay",
  },
  {
    id: 6,
    date: "June, 2021",
    title: "Tier 5 sold",
    icon: "uil uil-euro-circle",
  },
  {
    id: 7,
    date: "January, 2021",
    title: "Project Live",
    icon: "uil uil-desktop",
  },
];

const CryptoToken = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.getElementById("buyButton").classList.add("nav-light");
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
        document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
        document.querySelector(".settingbtn").classList.add("btn-light");

      }
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return
    } else {
      // Render a countdown
      return (
        <React.Fragment>
          <ul className="count-down list-unstyled m-0">
            <li id="days" className="count-number fw-medium mb-0 list-inline-item px-3">
              {days}
              <p className="count-head">Days</p>
            </li>
            <li id="hours" className="count-number fw-medium mb-0 list-inline-item px-3">
              {hours}
              <p className="count-head">Hours</p>
            </li>
            <li id="mins" className="count-number fw-medium mb-0 list-inline-item px-3">
              {minutes}
              <p className="count-head">Hours</p>
            </li>
            <li id="secs" className="count-number fw-medium mb-0 list-inline-item px-3">
              {seconds}
              <p className="count-head">Seconds</p>
            </li>
            <li id="end" className="h1"></li>
          </ul>

        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      {/* import NavBar */}
      <NavBar isLight={true} />

      <section className="bg-home d-flex align-items-center">
        <div className="bg-overlay bg-gradient-primary"></div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={5} xs={12}>
              <div className="title-heading">
                <span className="badge bg-soft-success rounded-md">
                  Sale tokens
                </span>
                <h4 className="display-5 fw-bold text-white title-dark mt-3 mb-4">
                  The token sale is live!
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
                <div className="mt-4">
                  <Link
                    to="#"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="btn btn-icon btn-pills btn-primary m-1 lightbox"
                    onClick={() => setOpen(true)}
                  >
                    <FeatherIcon icon="video" className="icons" />
                  </Link>
                  <small
                    onClick={() => setOpen(true)}
                    className="fw-medium text-light title-dark align-middle ms-1"
                  >
                    Watch Now
                  </small>

                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </Col>

            <Col lg={5} md={7} xs={12} className="offset-lg-1 mt-4 pt-2">
              <Card className="border-0 shadow rounded p-4 bg-light overflow-hidden ms-lg-4">
                <img
                  src={logoIcon}
                  className="avatar avatar-md-md d-block mx-auto"
                  alt=""
                />
                <h5 className="text-center mt-3">Landrick Token Sale</h5>
                <Row>
                  <div className="col-md-12 text-center">
                    <div id="token-sale">
                      <ul className="count-down list-unstyled m-0">
                        <Countdown
                          date="2023-02-23"
                          renderer={renderer}
                        />
                        <li id="end" className="h1"></li>
                      </ul>
                    </div>
                  </div>
                </Row>

                <p className="text-muted text-center">
                  Token sale ends{' '}
                  <span className="text-dark fw-medium">August 25th 2021</span>
                </p>

                <div className="progress-box mt-4">
                  <div
                    className="progress rounded-md"
                    style={{ height: '10px' }}
                  >
                    <div
                      className="progress-bar position-relative bg-primary rounded-md"
                      style={{ width: '60%' }}
                    >
                      <div className="progress-value d-block text-muted h6">
                        Funded 60% = $ 600000
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                    <h6 className="title text-muted text-end mb-0">
                      $ 1000000
                    </h6>
                  </div>
                </div>

                <ul className="list-unstyled mb-0 mt-4">
                  <li className="h6 mb-0">
                    <i className="uil uil-arrow-circle-right text-primary align-middle fs-5 me-1"></i>
                    <span className="text-muted">Soft Cap:</span> &nbsp;10000
                    USD
                  </li>
                  <li className="h6 mb-0">
                    <i className="uil uil-arrow-circle-right text-primary align-middle fs-5 me-1"></i>
                    <span className="text-muted">Min. transaction Amount:</span>{' '}
                    &nbsp;1000 USD
                  </li>
                  <li className="h6 mb-0">
                    <i className="uil uil-arrow-circle-right text-primary align-middle fs-5 me-1"></i>
                    <span className="text-muted">Target:</span> &nbsp;900000 USD
                  </li>
                </ul>

                <div className="mt-4">
                  <Link to="#" className="btn btn-primary w-100">
                    Join Now
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">It's easier than you think</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {infoCardData.map((item, key) => (<Col md={4} xs={12} className="mt-4" key={key}>
              <Card className="border-0 text-center features feature-primary feature-clean p-4">
                <div className="icons text-center mx-auto">
                  <i className={item.icon + " d-block rounded h3 mb-0"}></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <h5>{item.title}</h5>
                  <p className="text-muted mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                </CardBody>
              </Card>
            </Col>))}
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row>
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Success Roadmap</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
              </div>
            </div>
          </Row>

          <Row>
            <Col className="col-12 mt-4 pt-2">
              <Swiper
                slidesPerView={1}
                // spaceBetween={10}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                breakpoints={{
                  678: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 4,
                  }
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="roadmaps tiny-timeline">
                {RoadmapData.map((item, key) => (
                  <SwiperSlide key={key} className="tiny-slide text-center">
                    <div className={item.isClass ? "card features p-4 border-0 bg-primary item-box" : "card features feature-primary pt-4 border-0 item-box"}>
                      <div className={item.istextColor ? "icon text-center text-white title-dark rounded-pill mx-auto mb-3 fs-5" : "icon text-center text-primary rounded-pill mx-auto mb-3 fs-5"}>
                        <i className={item.icon}></i>
                      </div>
                      <p className={item.isDate ? "text-white-50 mb-0" : "text-muted mb-0"}>{item.date}</p>
                      <h6 className={item.isTitle ? "text-white-50 mb-0 mt-1" : "mb-0 mt-1"}>{item.title}</h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary">Our Vision</h6>
                <h4 className="title mb-3 mt-2">
                  Cryptocurrency in Every Wallet
                </h4>

                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center my-4 py-2">
            <Col md={6}>
              <img
                src={logoIcon}
                className="img-fluid d-block mx-auto"
                alt=""
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={3} md={6} className="mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Founded in</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value">
                    <CountUp start={2000} end={2021} duration={3} />
                  </span>
                </h2>
              </div>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Team Member</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value">
                    <CountUp start={1} end={1000} duration={5} />
                  </span>
                  +
                </h2>
              </div>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Users</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value">
                    <CountUp start={0} end={10} duration={3} />
                  </span>
                  M
                </h2>
              </div>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Insurance Coverage (USD)</h5>

                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value">
                    <CountUp start={1} end={410} duration={5} />
                  </span>
                  M
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default CryptoToken;
