
// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import NavBar from "./NavBar";
import Footer from "../../../components/Layout/Footer";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
import BackToTop from "../../../components/Layout/backToTop";
//Import Icons
import FeatherIcon from "feather-icons-react";

//Import images
import jobBg from "../../../assets/images/job/bg.png";

class PageJobApply extends Component {
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
      jobDetails: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ jobDetails: true });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* breadcrumb */}
        <section className="bg-half-170 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${jobBg})` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h2 className="title text-white title-dark mb-0"> Job Apply Form </h2>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="/index-job">Careers</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Job Apply</li>
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
            <Row className="justify-content-center">
              <Col lg={10} md={7}>
                <Card className="custom-form border-0">
                  <CardBody>
                    <Alert
                      color="primary"
                      isOpen={this.state.jobDetails}
                      toggle={() => {
                        this.setState({ jobDetails: !this.state.jobDetails });
                      }}
                    >
                      Job Details Send successfully.
                    </Alert>
                    <Form
                      onSubmit={this.handleSubmit}
                      className="rounded shadow p-4"
                    >
                      <Row>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Name :<span className="text-danger">*</span>
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
                              required
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email :<span className="text-danger">*</span>
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
                              required
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Phone no. :
                              <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="phone"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="number"
                              id="number"
                              type="number"
                              className="form-control ps-5"
                              placeholder="Your phone no. :"
                              required
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Job Title :</Label>
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
                              placeholder="Title :"
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Types of jobs :</Label>
                            <select
                              className="form-control custom-select"
                              id="Sortbylist-Shop"
                            >
                              <option>All Jobs</option>
                              <option>Full Time</option>
                              <option>Half Time</option>
                              <option>Remote</option>
                              <option>In Office</option>
                            </select>
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="mb-3">
                            <Label className="form-label">Description :</Label>
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
                              placeholder="Describe the job :"
                            ></textarea>
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="mb-3">
                            <Label className="form-label">Upload Your Cv / Resume :</Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="fileupload"
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="mb-3">
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck1"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="customCheck1"
                              >
                                I Accept{" "}
                                <Link to="#" className="text-primary">
                                  Terms And Condition
                                </Link>
                              </Label>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary"
                            value="Apply Now"
                          />
                        </Col>
                      </Row>
                    </Form>
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
export default PageJobApply;
