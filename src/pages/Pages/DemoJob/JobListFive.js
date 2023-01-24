import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

import NavBar from './NavBar';
import Footer from '../../../components/Layout/Footer';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../components/Layout/backToTop';

//import images
import Circleci from '../../../assets/images/job/Circleci.svg';
import Mg from '../../../assets/images/job/Mg.svg';
import Codepen from '../../../assets/images/job/Codepen.svg';
import Discord from '../../../assets/images/job/Discord.svg';
import Eslint from '../../../assets/images/job/Eslint.svg';
import Gitlab from '../../../assets/images/job/Gitlab.svg';
import Gradle from '../../../assets/images/job/Gradle.svg';
import Twilio from '../../../assets/images/job/Twilio.svg';
import Udemy from '../../../assets/images/job/Udemy.svg';
import Webhooks from '../../../assets/images/job/Webhooks.svg';
import Sketch from '../../../assets/images/job/Sketch.svg';
import full from '../../../assets/images/job/full.jpg';
import part from '../../../assets/images/job/part.jpg';
import remote from '../../../assets/images/job/remote.jpg';

//Import images
import jobBg from '../../../assets/images/job/bg.png';

class JobListFive extends Component {
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
      jobList: [
        {
          id: 1,
          img: Circleci,
          bgImage: full,
          designation: 'Web Designer',
          location: 'Circleci',
          country: 'San Francisco',
          name: "CircleCi",
          time: "Full Time",
          color: "success",
        },
        {
          id: 2,
          img: Codepen,
          bgImage: full,
          designation: 'Web Developer',
          location: 'Codepen',
          country: 'San Francisco',
          name: "Codepen",
          time: "Full Time",
          color: "success",
        },
        {
          id: 3,
          img: Discord,
          bgImage: part,
          designation: 'UX Designer',
          location: 'Discord',
          country: 'San Francisco',
          name: "Discord",
          time: "Part Time",
          color: "warning",
        },
        {
          id: 4,
          img: Eslint,
          bgImage: full,
          designation: 'UI Designer',
          location: 'Eslint',
          country: 'San Francisco',
          name: "Eslint",
          time: "Full Time",
          color: "success",
        },
        {
          id: 5,
          img: Gitlab,
          bgImage: remote,
          designation: 'Back-End Developer',
          location: 'Gitlab',
          country: 'San Francisco',
          name: "Gitlab",
          time: "Remote",
          color: "danger",
        },
        {
          id: 6,
          img: Gradle,
          bgImage: part,
          designation: 'Photographer',
          location: 'Gradle',
          country: 'San Francisco',
          name: "Gradle",
          time: "Part Time",
          color: "warning",
        },
        {
          id: 7,
          img: Mg,
          bgImage: full,
          designation: 'Mechanic',
          location: 'Mg',
          country: 'San Francisco',
          name: "Mg",
          time: "Full Time",
          color: "success",
        },
        {
          id: 8,
          img: Sketch,
          bgImage: part,
          designation: 'Frontend Developer',
          location: 'Sketch',
          country: 'San Francisco',
          name: "Sketch",
          time: "Part Time",
          color: "warning",
        },
        {
          id: 9,
          img: Twilio,
          bgImage: remote,
          designation: 'Web Designer',
          location: 'Twilio',
          country: 'San Francisco',
          name: "Twilio",
          time: "Remote",
          color: "danger",
        },
        {
          id: 10,
          img: Udemy,
          bgImage: part,
          designation: 'Php Developer',
          location: 'Udemy',
          country: 'San Francisco',
          name: "Udemy",
          time: "Part Time",
          color: "warning",
        },
        {
          id: 11,
          img: Webhooks,
          bgImage: full,
          designation: 'Web Designer',
          location: 'Webhooks',
          country: 'San Francisco',
          name: "Webhooks",
          time: "Full Time",
          color: "success",
        },
        {
          id: 12,
          img: Circleci,
          bgImage: remote,
          designation: 'Python Developer',
          location: 'CircleCi',
          country: 'San Francisco',
          name: "CircleCi",
          time: "Remote",
          color: "danger",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* breadcrumb */}
        <section
          className="bg-half-170 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${jobBg})` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h2 className="title text-white title-dark mb-0">
                    {' '}
                    Jobs / Careers{' '}
                  </h2>
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
                    Jobs
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="form-icon position-relative">
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
              {/* import Sidebar */}
              <Col lg={4} md={6} className="col-12">
                <div className="sidebar sticky-bar p-4 rounded shadow">

                  <div className="widget">
                    <form role="search" method="get">
                      <div className="input-group mb-3 border rounded">
                        <input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..." />
                        <button type="submit" className="input-group-text bg-transparent border-0" id="searchsubmit"><i className="uil uil-search"></i></button>
                      </div>
                    </form>
                  </div>

                  <div className="widget mb-4 pb-4 border-bottom">
                    <h5 className="widget-title">Categories</h5>
                    <div className="mt-4 mb-0">
                      <select className="form-select form-control" aria-label="Default select example">
                        <option defaultValue>All Jobs</option>
                        <option>Digital & Creative</option>
                        <option>Accountancy</option>
                        <option>Banking</option>
                        <option>IT Contractor</option>
                        <option>Graduate</option>
                        <option>Estate Agency</option>
                      </select>
                    </div>
                  </div>

                  <div className="widget mb-4 pb-4 border-bottom">
                    <h5 className="widget-title">Date Posted</h5>
                    <div className="mt-4">
                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="lasthour" />
                        <label className="form-check-label" htmlFor="lasthour">Last Hour</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="oneday" />
                        <label className="form-check-label" htmlFor="oneday">Last 24 hours</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="sevenday" />
                        <label className="form-check-label" htmlFor="sevenday">Last 7 days</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="fourteenhour" />
                        <label className="form-check-label" htmlFor="fourteenhour">Last 14 days</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="onemonth" />
                        <label className="form-check-label" htmlFor="onemonth">Last 30 days</label>
                      </div>
                    </div>
                  </div>

                  <div className="widget mb-4 pb-4 border-bottom">
                    <h5 className="widget-title">Job Type</h5>
                    <div className="mt-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="contract" />
                        <label className="form-check-label" htmlFor="contract">Contract Base</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="freelancer" />
                        <label className="form-check-label" htmlFor="freelancer">Freelancer</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="fulltime" />
                        <label className="form-check-label" htmlFor="fulltime">Full Time</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="parttime" />
                        <label className="form-check-label" htmlFor="parttime">Part Time</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="remote" />
                        <label className="form-check-label" htmlFor="remote">Remote</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="intern" />
                        <label className="form-check-label" htmlFor="intern">Intership</label>
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <h5 className="widget-title">Experience</h5>
                    <div className="mt-4">
                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="fresher" />
                        <label className="form-check-label" htmlFor="fresher">Fresher</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="oneyear" />
                        <label className="form-check-label" htmlFor="oneyear">+1 Year</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="twoyear" />
                        <label className="form-check-label" htmlFor="twoyear">+2 Year</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="3year" />
                        <label className="form-check-label" htmlFor="3year">+3 Year</label>
                      </div>

                      <div className="form-check mb-0">
                        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="fiveyear" />
                        <label className="form-check-label" htmlFor="fiveyear">+5 Year</label>
                      </div>
                    </div>
                  </div>

                </div>
              </Col>
              <Col lg={8} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Row>
                  {(this.state.jobList || []).map((item, key) => (
                    <Col lg={6} xs={12} className="mb-4 pb-2" key={key}>
                      <Card className="job-box job-primary rounded shadow border-0 overflow-hidden">
                        <div className="border-bottom">
                          <div className="position-relative">
                            <img
                              src={item.bgImage}
                              className="img-fluid"
                              alt=""
                            />

                          </div>
                          <div className="mb-0 position">
                            <Link to="/job-detail-one" className="text-dark h5">
                              {item.designation}
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
                          </div>
                          <ul className="list-unstyled head mb-0">
                            <li className={"badge rounded-pill bg-" + item.color}>
                              {item.time}
                            </li>
                          </ul>
                        </div>

                        <CardBody className="content position-relative">
                          <div className="firm-logo rounded-circle shadow bg-light text-center">
                            <img
                              src={item.img}
                              className="avatar avatar-md-sm"
                              alt=""
                            />
                          </div>
                          <div className="company-detail text-center mt-3">
                            <h5 className="mb-0">
                              <Link
                                to="/job-company"
                                className="text-dark company-name"
                              >
                                {item.name}
                              </Link>
                            </h5>
                            <p className="text-muted">
                              <Link to="#" className="text-muted">
                                <FeatherIcon
                                  icon="map-pin"
                                  className="fea icon-sm"
                                />{" "}
                                San Francisco
                              </Link>
                            </p>
                          </div>
                          <ul className="job-facts list-unstyled">
                            <li className="list-inline-item text-muted">
                              <FeatherIcon
                                icon="check"
                                className="fea icon-sm text-success me-1"
                              />{" "}
                              2 Year Expirence
                            </li><br />
                            <li className="list-inline-item text-muted">
                              <FeatherIcon
                                icon="check"
                                className="fea icon-sm text-success me-1"
                              />{" "}
                              Working Hours- 6hr
                            </li>
                            <li className="list-inline-item text-muted">
                              <FeatherIcon
                                icon="check"
                                className="fea icon-sm text-success me-1"
                              />{" "}
                              Information strategy
                            </li>
                          </ul>
                          <div className="d-grid">
                            <Link
                              to="/job-detail-one"
                              className="btn btn-soft-primary"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col className="col-12">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                      <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                    </ul>
                  </Col>
                </Row>
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

export default JobListFive;
