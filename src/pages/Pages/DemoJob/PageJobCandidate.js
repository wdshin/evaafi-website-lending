import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Progress,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
} from 'reactstrap';

import NavBar from './NavBar';
import Footer from '../../../components/Layout/Footer';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../components/Layout/backToTop';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import bgImg from "../../../assets/images/job/bg.png";
import profile from '../../../assets/images/client/01.jpg';
import Circleci from '../../../assets/images/job/Circleci.svg';
import Codepen from '../../../assets/images/job/Codepen.svg';
import work1 from '../../../assets/images/work/1.jpg';
import work2 from '../../../assets/images/work/2.jpg';
import work3 from '../../../assets/images/work/3.jpg';
import work4 from '../../../assets/images/work/4.jpg';

class PageJobCandidate extends Component {

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
      experiences: [
        {
          title: 'Back-end Developer',
          image: Codepen,
          cmpName: 'Codepen',
          location: 'CHINA',
          duration: '2017-18',
          desc: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.',
        },
        {
          title: 'Senior Web Designer',
          image: Circleci,
          cmpName: 'CircleCi',
          location: 'SAN FRANCISCO',
          duration: '2014-17',
          desc: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.',
        },
      ],
      projects: [
        {
          image: work1,
          title: 'Iphone mockup',
          subtitle: 'Branding',
          category: 'Branding',
        },
        {
          image: work2,
          title: 'Mockup Collection',
          subtitle: 'Mockup',
          category: 'Designing',
        },
        {
          image: work3,
          title: 'Abstract images',
          subtitle: 'Abstract',
          category: 'Photography',
        },
        {
          image: work4,
          title: 'Yellow bg with Books',
          subtitle: 'Books',
          category: 'Development',
        },
      ],

      progressBar: [
        { title: 'WordPress', value: '84' },
        { title: 'PHP / MYSQL', value: '75' },
        { title: 'Angular / JavaScript', value: '79' },
        { title: 'HTML', value: '95' },
      ],

      modal: false,
      photoIndex: 0,
      isOpen: false,
    };
    this.togglemodal.bind(this);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section
          className="bg-half-260 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
        </section>

        <section className="section">
          <Container>
            <Row>
              <Col lg="4" md="5" xs="12">
                <Card className="job-profile shadow border-0">
                  <div className="text-center py-5 border-bottom rounded-top">
                    <img
                      src={profile}
                      className="avatar avatar-medium mx-auto rounded-circle shadow d-block"
                      alt="profile"
                    />
                    <h5 className="mt-3 mb-0">Thomas Brewer</h5>
                    <p className="text-muted mb-0">Senior Web Developer</p>
                  </div>

                  <CardBody>
                    <h5 className="card-title">Personal Details :</h5>

                    <ul className="list-unstyled">
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">Email :</span>{' '}
                        thomas@mail.com
                      </li>
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="gift"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">D.O.B. :</span> 31st Dec,
                        1996
                      </li>
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="home"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">Address :</span> 15 Razy
                        street
                      </li>
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="map-pin"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">City :</span> London
                      </li>
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="globe"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">Country :</span> UK
                      </li>
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="server"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">Postal Code :</span> 521452
                      </li>
                      <li className="h6">
                        <i>
                          <FeatherIcon
                            icon="phone"
                            className="fea icon-sm text-warning me-3"
                          />
                        </i>
                        <span className="text-muted">Mobile :</span> (+125)
                        1542-8452
                      </li>

                      <li>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="facebook"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>{' '}
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="instagram"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>{' '}
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="twitter"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>{' '}
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>{' '}
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="github"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>{' '}
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="youtube"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>{' '}
                          <li className="list-inline-item">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon="gitlab"
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link
                        to="#"
                        onClick={this.togglemodal}
                        className="btn btn-block btn-primary"
                      >
                        <i className="uil uil-envelope align-middle"></i>{' '}
                        Contact Me
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ms-lg-4">
                  <h4>About us :</h4>
                  <p className="text-muted">
                    Obviously I'M Web Developer. Web Developer with over 3 years
                    of experience. Experienced with all stages of the
                    development cycle for dynamic web projects. The as opposed
                    to using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <p className="text-muted mb-0">
                    Data Structures and Algorithms are the heart of programming.
                    Initially most of the developers do not realize its
                    importance but when you will start your career in software
                    development, you will find your code is either taking too
                    much time or taking too much space.
                  </p>

                  <h4 className="mt-lg-5 mt-4">Skills :</h4>

                  {this.state.progressBar.map((item, key) => (
                    <div key={key} className="progress-box mt-4">
                      <h6 className="title text-muted">{item.title}</h6>
                      <Progress
                        value={item.value}
                        color="primary"
                        barClassName="position-relative"
                      >
                        <div className="progress-value d-block text-muted h6">
                          {item.value + '%'}
                        </div>
                      </Progress>
                    </div>
                  ))}

                  <h4 className="mt-lg-5 mt-4">Experience :</h4>
                  <Row>
                    {this.state.experiences.map((exp, key) => (
                      <Col key={key} lg="12" className="mt-4 pt-2">
                        <div className="d-flex">
                          <div className="company-logo text-muted h6 me-3 text-center">
                            <img
                              src={exp.image}
                              className="avatar avatar-md-sm mx-auto d-block mb-2"
                              alt="experience"
                            />
                            {exp.duration}
                          </div>
                          <div className="flex-1">
                            <h5 className="title mb-0">{exp.title}</h5>
                            <small className="text-muted company-university">
                              {exp.cmpName} - {exp.location}
                            </small>
                            <p className="text-muted mt-2 mb-0">{exp.desc}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <h4 className="mt-lg-5 mt-4">Projects :</h4>
                  <Row>
                    {this.state.projects.map((project, key) => (
                      <Col key={key} md={6} xs={12} className="mt-4 pt-2">
                        <Card className="border-0 work-container work-primary work-classic">
                          <CardBody className="p-0">
                            <Link to="page-work-detail">
                              <img
                                src={project.image}
                                className="img-fluid rounded work-image"
                                alt="Landrick"
                              />
                            </Link>
                            <div className="content pt-3">
                              <h5 className="mb-0">
                                <Link
                                  to="page-work-detail"
                                  className="text-dark title"
                                >
                                  {project.title}
                                </Link>
                              </h5>
                              <h6 className="text-muted tag mb-0">
                                {project.subtitle}
                              </h6>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary me-2">
                      <i className="uil uil-user-check"></i> Hire me
                    </Link>
                    <Link to="#" className="btn btn-outline-primary ms-1">
                      <i className="uil uil-print"></i> Print CV
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Modal
          isOpen={this.state.modal}
          role="dialog"
          centered={true}
          id="trialform"
        >
          <ModalHeader toggle={this.togglemodal}>Apply now</ModalHeader>
          <ModalBody className="p-4">
            <div className="custom-form">
              <div id="message"></div>
              <Form name="contact-form" id="contact-form">
                <Row>
                  <Col md="6">
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Your Name <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="user"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control ps-5"
                        placeholder="First Name :"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Your Email <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control ps-5"
                        placeholder="Your email :"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="position-relative">
                      <Label className="form-label">Subject</Label>
                      <i>
                        <FeatherIcon
                          icon="book"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="subject"
                        id="subject"
                        className="form-control ps-5"
                        placeholder="Your subject :"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="position-relative">
                      <Label className="form-label">Comments</Label>
                      <i>
                        <FeatherIcon
                          icon="message-circle"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control ps-5"
                        placeholder="Your Message :"
                      ></textarea>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="text-center">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="submitBnt btn btn-primary btn-block"
                      value="Send Message"
                    />
                    <div id="simple-msg"></div>
                  </Col>
                </Row>
              </Form>
            </div>
          </ModalBody>
        </Modal>

        <Footer />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default PageJobCandidate;
