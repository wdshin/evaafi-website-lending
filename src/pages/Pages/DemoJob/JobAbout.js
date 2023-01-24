import React, { Component } from 'react';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from '../../../components/Layout/Footer';

import CountUp from 'react-countup';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../components/Layout/backToTop';

//import images
import jobBg from '../../../assets/images/job/bg.png';
import resume from '../../../assets/images/job/resume-folder.svg';
import amazon from '../../../assets/images/client/amazon.svg';
import google from '../../../assets/images/client/google.svg';
import lenovo from '../../../assets/images/client/lenovo.svg';
import paypal from '../../../assets/images/client/paypal.svg';
import shopify from '../../../assets/images/client/shopify.svg';
import spotify from '../../../assets/images/client/spotify.svg';

class JobAbout extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
    });
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn").classList.remove("btn-light");
      document.querySelector(".settingbtn").classList.remove("btn-light");
      document.querySelector(".shoppingbtn").classList.add("btn-primary");
      document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn").classList.remove("btn-primary");
      document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
      document.querySelector(".shoppingbtn").classList.add("btn-light");
      document.querySelector(".settingbtn").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      listData1: [
        { id: 1, img: amazon },
        { id: 2, img: google },
        { id: 3, img: lenovo },
        { id: 4, img: paypal },
        { id: 5, img: shopify },
        { id: 6, img: spotify },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-170 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${jobBg})` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title text-white title-dark mb-0">
                    {' '}
                    About us
                  </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Landrick</Link>
                  </li>{" "}
                  <li className="breadcrumb-item">
                    <Link to="/index-job">Careers</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
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
            <Row className="align-items-center" id="counter">
              <Col lg={6}>
                <img src={resume} className="img-fluid" alt="" />
              </Col>

              <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ms-lg-4">
                  <div className="d-flex mb-4">
                    <span className="text-primary h1 mb-0">
                      <span className="counter-value display-1 fw-bold">
                        <CountUp start={0} end={15} duration={5} />
                      </span>
                      +
                    </span>
                    <span className="h6 align-self-end ms-2">
                      Years <br /> Experience
                    </span>
                  </div>
                  <div className="section-title">
                    <h4 className="title mb-4">Who we are ?</h4>
                    <p className="text-muted">
                      Start working with{' '}
                      <span className="text-primary fw-bold">Landrick</span>{' '}
                      that can provide everything you need to generate
                      awareness, drive traffic, connect. Dummy text is text that
                      is used in the publishing industry or by web designers to
                      occupy the space which will later be filled with 'real'
                      content. This is required when, for example, the final
                      text is not yet available. Dummy texts have been in use by
                      typesetters since the 16th century.
                    </p>
                    <Link to="#" className="btn btn-primary mt-3">
                      Contact us
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-4">
            <Row className="justify-content-center">
              {this.state.listData1.map((item, key) => (
                <Col
                  key={key}
                  lg={2}
                  md={2}
                  xs={6}
                  className="text-center pt-4"
                >
                  <img src={item.img} className="avatar avatar-ex-sm" alt="" />
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h6 className="text-primary">Work Process</h6>
                  <h4 className="title mb-4">How do we works ?</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mt-4 pt-2">
                <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                  </div>

                  <CardBody>
                    <h5 className="text-dark">Resume</h5>
                    <p className="text-muted mb-0">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
                <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                  </div>

                  <CardBody>
                    <h5 className="text-dark">Interviews</h5>
                    <p className="text-muted mb-0">
                      Generators convallis odio, vel pharetra quam malesuada
                      vel. Nam porttitor malesuada.
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
                <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
                  </div>

                  <CardBody>
                    <h5 className="text-dark">Job Approval</h5>
                    <p className="text-muted mb-0">
                      Internet Proin tempus odio, vel pharetra quam malesuada
                      vel. Nam porttitor malesuada.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default JobAbout;
