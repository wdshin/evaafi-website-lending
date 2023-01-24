import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from '../../components/Layout/Footer';
import {
  Card,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import AccordianCommon from '../../components/Shared/AccordianCommon';
import { AccordianCommon2 } from '../../components/Shared/AccordianCommon';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import vps from '../../assets/images/hosting/vps.png';
import india from '../../assets/images/hosting/india.svg';
import usa from '../../assets/images/hosting/usa.svg';
import BackToTop from '../../components/Layout/backToTop';

class HostingVps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vpsDetails: [
        {
          id: 1,
          icon: 'uil uil-server-alt',
          title: 'SSD storage',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 2,
          icon: 'uil uil-data-sharing',
          title: 'Easy upgrade',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 3,
          icon: 'uil uil-cloud-database-tree',
          title: 'Multiple Linux Distros',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 4,
          icon: 'uil uil-user-check',
          title: 'Admin Support',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 5,
          icon: 'uil uil-create-dashboard',
          title: 'Guaranteed Resources',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 6,
          icon: 'uil uil-desktop',
          title: 'Full Root Access',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 7,
          icon: 'uil uil-shield-check',
          title: 'Quick Provisioning',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
        {
          id: 8,
          icon: 'uil uil-monitor-heart-rate',
          title: 'Intuitive Dashboard',
          desc: "If the distribution of letters and 'words' is random, the reader from making a neutral judgement",
        },
      ],
      activeTab: '2',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section className="bg-half-170 d-table w-100">
          <div className="bg-overlay bg-gradient-primary"></div>
          <Container>
            <Row className="align-items-center mt-5">
              <Col lg={6}>
                <div className="pages-heading title-heading">
                  <h4 className="title mb-4 text-white title-dark">
                    Reliable VPS Hosting <br /> Built for Enterprise
                  </h4>
                  <p className="text-white-50 para-desc mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <img src={vps} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Why choose VPS Hosting</h4>
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
              {(this.state.vpsDetails || []).map((item, key) => (
                <Col lg={3} md={4} xs={12} className="mt-4 pt-2" key={key}>
                  <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={item.icon}></i>
                    </span>
                    <div className="card-body p-0 content">
                      <h5>{item.title}</h5>
                      <p className="para text-muted mb-0">{item.desc}</p>
                    </div>
                    <div className="position-absolute top-0 end-0">
                      <i className={item.icon + ' display-1 opacity-05'}></i>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">VPS Hosting Plans</h4>
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
              <Col lg={4} md={5} className="mt-4 pt-2 text-center">
                <Nav pills justified className="flex-sm-row rounded px-0">
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '1' },
                        'rounded',
                      )}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      <div className="text-center py-2">
                        <img
                          src={india}
                          className="avatar avatar-md-sm"
                          alt=""
                        />
                        <h5 className="title fw-normal mt-3 mb-0">India</h5>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '2' },
                        'rounded',
                      )}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      <div className="text-center py-2">
                        <img src={usa} className="avatar avatar-md-sm" alt="" />
                        <h5 className="title fw-normal mt-3 mb-0">USA</h5>
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <div className="col-12 mt-4 pt-2">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <div className="col-12">
                        <div className="table-responsive bg-white shadow rounded">
                          <table className="table mb-0 table-center">
                            <thead>
                              <tr>
                                <th
                                  className="border-bottom py-4 px-3"
                                  style={{ minWidth: '200px' }}
                                >
                                  PLANS
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  PROCESSOR
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  RAM
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  DISK
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  BANDWIDTH{' '}
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '180px' }}
                                >
                                  PRICE
                                </th>
                                <th
                                  className="border-bottom text-end py-4 px-3"
                                  style={{ minWidth: '50px' }}
                                >
                                  #
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td className="h6 p-3">Basic</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">4 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">5 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Standard</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">4 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">5 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Elite</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">8 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">5 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Professional</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">16 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">10 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Advanced</td>
                                <td className="text-center p-3">
                                  Intel Xeon D
                                </td>
                                <td className="text-center p-3">16 GB DDR4</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">15 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Row>
                  </TabPane>

                  <TabPane tabId="2">
                    <Row>
                      <div className="col-12">
                        <div className="table-responsive bg-white shadow rounded">
                          <table className="table mb-0 table-center">
                            <thead>
                              <tr>
                                <th
                                  className="border-bottom py-4 px-3"
                                  style={{ minWidth: '200px' }}
                                >
                                  PLANS
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  PROCESSOR
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  RAM
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  DISK
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '160px' }}
                                >
                                  BANDWIDTH{' '}
                                </th>
                                <th
                                  className="border-bottom text-center py-4 px-3"
                                  style={{ minWidth: '180px' }}
                                >
                                  PRICE
                                </th>
                                <th
                                  className="border-bottom text-end py-4 px-3"
                                  style={{ minWidth: '50px' }}
                                >
                                  #
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td className="h6 p-3">Basic</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">4 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">5 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Standard</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">4 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">5 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Elite</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">8 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">5 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Professional</td>
                                <td className="text-center p-3">Intel E3</td>
                                <td className="text-center p-3">16 GB DDR3</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">10 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">Advanced</td>
                                <td className="text-center p-3">
                                  Intel Xeon D
                                </td>
                                <td className="text-center p-3">16 GB DDR4</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">15 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">
                                  Advanced{' '}
                                  <span className="text-primary">ST</span>
                                </td>
                                <td className="text-center p-3">
                                  Intel Xeon D
                                </td>
                                <td className="text-center p-3">28 GB DDR4</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">10 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">
                                  Advanced{' '}
                                  <span className="text-success">ELITE</span>
                                </td>
                                <td className="text-center p-3">
                                  Intel Xeon D
                                </td>
                                <td className="text-center p-3">28 GB DDR4</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">10 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">
                                  Advanced{' '}
                                  <span className="text-info">BUSINESS</span>
                                </td>
                                <td className="text-center p-3">
                                  Intel Xeon D
                                </td>
                                <td className="text-center p-3">60 GB DDR4</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">15 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td className="h6 p-3">
                                  Advanced{' '}
                                  <span className="text-warning">PRO</span>
                                </td>
                                <td className="text-center p-3">
                                  Intel Xeon D
                                </td>
                                <td className="text-center p-3">60 GB DDR4</td>
                                <td className="text-center p-3">1000 GB HDD</td>
                                <td className="text-center p-3">15 TB</td>
                                <td className="text-center p-3">
                                  $ 5.99/month
                                </td>
                                <td className="text-end p-3">
                                  <Link
                                    to="#"
                                    className="btn btn-icon btn-soft-warning"
                                  >
                                    <FeatherIcon
                                      icon="shopping-cart"
                                      className="icons"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Row>
                  </TabPane>

                  <div className="text-center pt-4">
                    <p className="text-muted mb-0">
                      Couldn’t find what you’re looking for ?{' '}
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#additional-requirement"
                        className="h6 text-primary"
                      >
                        Let us know <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </TabContent>
              </div>
            </Row>
          </Container>
        </section>

        {/* <!-- FAQs Start --> */}
        <section className="section bg-primary">
          <Container>
            <Row className="mb-md-4 pb-md-2 justify-content-center">
              <Col>
                <div className="section-title text-center mb-md-4 pb-md-2 pb-5 pb-sm-0">
                  <h4 className="title text-white  title-dark mb-3">
                    Frequently asked questions
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section features-absolute" id="question">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12} className="mt-3 mt-sm-0">
                <div className="me-lg-4">
                  <h4 className="text-white title-dark text-md-start text-center">
                    Technical Questions
                  </h4>
                </div>
                <div className="accordion mt-3" id="question">
                  <AccordianCommon2
                    question1="Features"
                    question2="Performance"
                    question3="Boosters"
                    question4="Semi-Managed Support"
                  />
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-3 mt-sm-0">
                <div className="me-lg-4">
                  <h4 className="text-white title-dark text-md-start text-center">
                    General Questions
                  </h4>
                </div>
                <div className="accordion mt-3" id="question">
                  <AccordianCommon
                    question1="How our Landrick work ?"
                    answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question2="What is the main process open account ?"
                    answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question3="How to make unlimited data entry ?"
                    answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question4="Is Landrick safer to use with my account ?"
                    answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question5="How can i contact your technical team ?"
                    answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* import Footer */}
        <footer className="footer">
          <Container>
            <Row className="justify-content-center">
              <Col className="col-12">
                <div className="footer-py-60 text-center">
                  <Row>
                    <Col md={4}>
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Phone</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <a href="tel:+152534-468-854" className="text-foot">+152 534-468-854</a>
                        </div>
                      </Card>
                    </Col>

                    <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Email</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <a href="mailto:contact@example.com" className="text-foot">contact@example.com</a>
                        </div>
                      </Card>
                    </Col>

                    <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Location</h5>
                          <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</a>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
        <Footer isBorderLine={true} />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default HostingVps;
