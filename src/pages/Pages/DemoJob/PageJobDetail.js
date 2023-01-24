// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import components
import Footer from '../../../components/Layout/Footer';

//Import Images
import jobBg from '../../../assets/images/job/bg.png';
import gradle from '../../../assets/images/job/Gradle.svg';
import NavBar from './NavBar';
import BackToTop from '../../../components/Layout/backToTop';

class PageJobDetail extends Component {
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
      jobInfo: [
        {
          title: 'Employee Type',
          caption: ' Full Time',
          icon: 'user-check',
        },
        {
          title: 'Location',
          caption: ' Beijing, China',
          icon: 'map-pin',
        },
        {
          title: 'Job Type',
          caption: ' Back-end Developer',
          icon: 'monitor',
        },
        {
          title: 'Experience',
          caption: ' +2 Year',
          icon: 'briefcase',
        },
        {
          title: 'Qualifications',
          caption: ' MSCIT',
          icon: 'book',
        },
        {
          title: 'Salary',
          caption: ' +50k to 70k',
          icon: 'dollar-sign',
        },
        {
          title: 'Date posted',
          caption: ' 5th Sep, 2021',
          icon: 'clock',
        },
      ],

      dutyList: [
        { id: 1, line: 'Participate in requirements analysis' },
        {
          id: 2,
          line: 'Write clean, scalable code using C# and .NET frameworks',
        },
        { id: 3, line: 'Test and deploy applications and systems' },
        { id: 4, line: 'Revise, update, refactor and debug code' },
        { id: 5, line: 'Improve existing software' },
        {
          id: 6,
          line: 'Develop documentation throughout the software development life cycle (SDLC)',
        },
        {
          id: 7,
          line: 'Serve as an expert on applications and provide technical support',
        },
      ],

      skillsList: [
        {
          id: 1,
          line: 'Proven experience as a .NET Developer or Application Developer',
        },
        {
          id: 2,
          line: 'Good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.',
        },
        {
          id: 3,
          line: 'Experience designing, developing and creating RESTful web services and APIs',
        },
        { id: 4, line: 'Basic know how of Agile process and practices' },
        { id: 5, line: 'Good understanding of object-oriented programming.' },
        { id: 6, line: 'Good understanding of concurrent programming.' },
        {
          id: 7,
          line: 'Sound knowledge of application architecture and design',
        },
        { id: 8, line: 'Excellent problem solving and analytical skills' },
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
                  <img
                    src={gradle}
                    className="avatar avatar-md-md rounded-pill bg-white p-3"
                    alt=""
                  />
                  <h4 className="title text-white title-dark mt-4 mb-3">
                    {' '}
                    Back-End Developer{' '}
                  </h4>
                  <p className="para-desc mx-auto text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="list-inline-item text-white-50 me-3">
                      <i className="mdi mdi-map-marker text-warning me-2"></i>
                      Beijing, China
                    </li>{" "}
                    <li className="list-inline-item text-white-50">
                      <i className="mdi mdi-office-building text-warning me-2"></i>
                      Gradle
                    </li>
                  </ul>
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
                    Job Details
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
            <Row>
              <Col lg="4" md="5" xs="12">
                <Card className="sidebar sticky-bar rounded shadow border-0">
                  <CardBody className="widget border-bottom">
                    <h5 className="mb-0">Job Information</h5>
                  </CardBody>

                  <CardBody>
                    {this.state.jobInfo.map((item, key) => (
                      <div
                        key={key}
                        className="d-flex widget align-items-center mb-3"
                      >
                        <FeatherIcon
                          icon={item.icon}
                          className="fea icon-ex-md me-3"
                        />

                        <div className="flex-1">
                          <h6 className="widget-title mb-0">{item.title}:</h6>
                          <small className="text-primary mb-0">{item.caption}</small>
                        </div>
                      </div>
                    ))}
                  </CardBody>
                </Card>
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ms-lg-4">
                  <h5>Job Description: </h5>
                  <p className="text-muted">
                    One disadvantage of Lorum Ipsum is that in Latin certain
                    letters appear more frequently than others - which creates a
                    distinct visual impression. Moreover, in Latin only words at
                    the beginning of sentences are capitalized.
                  </p>
                  <p className="text-muted">
                    This means that Lorem Ipsum cannot accurately represent, for
                    example, German, in which all nouns are capitalized. Thus,
                    Lorem Ipsum has only limited suitability as a visual filler
                    for German texts. If the fill text is intended to illustrate
                    the characteristics of different typefaces.
                  </p>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>

                  <h5 className="mt-4">Responsibilities and Duties: </h5>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>
                  <ul className="list-unstyled">
                    {this.state.dutyList.map((item, key) => (
                      <li key={key} className="text-muted">
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm text-success me-2"
                          />
                        </i>
                        {item.line}
                      </li>
                    ))}
                  </ul>

                  <h5 className="mt-4">
                    Required Experience, Skills and Qualifications:{' '}
                  </h5>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>
                  <ul className="list-unstyled">
                    {this.state.skillsList.map((item, key) => (
                      <li key={key} className="text-muted">
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm text-success me-2"
                          />
                        </i>
                        {item.line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link to="job-apply" className="btn btn-outline-primary">
                      Apply Now <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* import Footer */}
        <Footer />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}
export default PageJobDetail;
