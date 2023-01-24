// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardBody,
} from 'reactstrap';

//import Components
import NavBar from './NavBar';
import Footer from '../../../components/Layout/Footer';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../components/Layout/backToTop';

// import images
import jobBg from '../../../assets/images/job/bg.png';
import client1 from '../../../assets/images/client/01.jpg';
import client2 from '../../../assets/images/client/02.jpg';
import client3 from '../../../assets/images/client/03.jpg';
import client4 from '../../../assets/images/client/04.jpg';
import client5 from '../../../assets/images/client/05.jpg';
import client6 from '../../../assets/images/client/06.jpg';
import client7 from '../../../assets/images/client/07.jpg';
import client8 from '../../../assets/images/client/08.jpg';

class PageCandidateList extends Component {
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
      candidatedetails: [
        {
          id: 1,
          img: client1,
          name: 'Calvin Carlo',
          post: 'Front-end Developer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 2,
          img: client2,
          name: 'Martha Griffin',
          post: 'WordPress Developer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 3,
          img: client3,
          name: 'Ashley Jen',
          post: 'Back-end Developer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 4,
          img: client4,
          name: 'Nicole Alan',
          post: 'UX Designer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 5,
          img: client5,
          name: 'Jennifer Pham',
          post: 'Web Designer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 6,
          img: client6,
          name: 'Alex Tom',
          post: 'UI Designer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 7,
          img: client7,
          name: 'Cristino Murphy',
          post: 'PHP Developer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
        },
        {
          id: 8,
          img: client8,
          name: 'Arlo Sons',
          post: 'React Developer',
          skill: ['PHP', 'WordPress', 'Web Design', 'CSS', 'JS'],
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
                  <h4 className="title text-white title-dark mb-0">
                    {' '}
                    Candidates{' '}
                  </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Landrick</Link>
                  </li>{" "}
                  <li className="breadcrumb-item">
                    <Link to="/index-job">Careers</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    Candidates
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
            <Row className="align-items-center">
              <Col lg={9} md={8}>
                <div className="section-title">
                  <h6 className="mb-0">Showing 1 – 8 of 10 results</h6>
                </div>
              </Col>

              <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Form className="custom-form">
                  <div className="mb-0">
                    <select
                      className="form-select form-control"
                      id="Sortbylist-job"
                    >
                      <option>Default</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>Random</option>
                    </select>
                  </div>
                </Form>
              </Col>
            </Row>

            <Row>
              {this.state.candidatedetails.map((detail, key) => (
                <Col lg={4} md={6} xs={12} className="mt-4 pt-2" key={key}>
                  <Card className="job-box job-primary candidate-list rounded border-0 shadow">
                    <CardBody>
                      <ul className="list-unstyled align-items-center">
                        <li className="list-inline-item float-end">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart h5 mb-0"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge rounded-pill bg-soft-success">
                            Featured
                          </span>
                        </li>
                      </ul>

                      <div className="content text-center">
                        <img
                          src={detail.img}
                          className="avatar avatar-md-md shadow-md rounded-circle"
                          alt=""
                        />
                        <ul className="list-unstyled mb-1 mt-2">
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
                        <Link
                          to="page-job-candidate"
                          className="text-dark h5 name"
                        >
                          {detail.name}
                        </Link>
                        <p className="text-muted my-1">{detail.post}</p>

                        <span className="text-muted">
                          <i className="uil uil-graduation-cap h4 mb-0 me-2 text-primary"></i>
                          Experience{' '}
                          <span className="text-success">3+ years</span>
                        </span>

                        <ul className="list-unstyled mt-3">
                          {detail.skill.map((item, key) => (
                            <li key={key} className="list-inline-item m-1">
                              <Link
                                to="#"
                                className="rounded bg-light py-1 px-2 text-muted small"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="d-grid">
                          <Link
                            to="job-candidate"
                            className="btn btn-soft-primary"
                          >
                            Read More{' '}
                            <i className="uil uil-angle-right-b align-middle"></i>
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}

              <Col xs={12} className="mt-4 pt-2">
                <Pagination listClassName="justify-content-center mb-0">
                  <PaginationItem>
                    <PaginationLink to="#">Prev</PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink to="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">Next</PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Container>
        </section>

        {/* import Footer  */}
        <Footer />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}
export default PageCandidateList;
