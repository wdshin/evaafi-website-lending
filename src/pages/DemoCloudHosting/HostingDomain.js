import React, { Component } from 'react';
import NavBar from './NavBar';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

//import images
import domain from '../../assets/images/hosting/domain.png';
import amazon from '../../assets/images/client/amazon.svg';
import google from '../../assets/images/client/google.svg';
import lenovo from '../../assets/images/client/lenovo.svg';
import paypal from '../../assets/images/client/paypal.svg';
import spotify from '../../assets/images/client/spotify.svg';
import shopify from '../../assets/images/client/shopify.svg';

class HostingDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: amazon,
          name: 'Thomas Israel',
          desc: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.',
        },
        {
          id: 2,
          image: google,
          name: 'Carl Oliver',
          desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          id: 3,
          image: lenovo,
          name: 'Barbara McIntosh',
          desc: 'One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.',
        },
        {
          id: 4,
          image: paypal,
          name: 'Jill Webb',
          desc: 'Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.',
        },
        {
          id: 5,
          image: shopify,
          name: ' Dean Tolle',
          desc: 'There is now an abundance of readable dummy texts. These are usually used when a text is required.',
        },
        {
          id: 6,
          image: spotify,
          name: 'Christa Smith',
          desc: 'According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.',
        },
      ],
      cols: 4,
      step1: true,
      step2: false,
      successMsg: false,

      domainData: [
        {
          domain: '.in',
          price: '$4.99',
        },
        {
          domain: '.com',
          price: '$5.99',
        },
        {
          domain: '.org',
          price: '$6.99',
        },
        {
          domain: '.net',
          price: '$7.99',
        },
        {
          domain: '.info',
          price: '$3.99',
        },
        {
          domain: '.me',
          price: '$2.99',
        },
      ],

      cardData: [
        {
          title: 'Safe & Secured',
          icon: 'uil uil-shield-check',
        },
        {
          title: 'Money Back Guarentee',
          icon: 'uil uil-invoice',
        },
        {
          title: 'Dedicated Supports',
          icon: 'uil uil-user-check',
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateWindowSize.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-170 d-table bg-primary w-100"
          style={{ backgroundImage: `url(${domain})` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col>
                <div className="pages-heading title-heading text-center">
                  <h4 className="display-6 text-white title-dark mb-4 fw-bold">
                    Find a Great Domain
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="text-center subcribe-form mt-4 pt-2">
                    <form>
                      <input
                        type="text"
                        id="text"
                        name="text"
                        className="rounded-pill bg-white-50"
                        placeholder="Search your domain name..."
                      />
                      <button
                        type="submit"
                        className="btn btn-pills btn-primary"
                      >
                        Search <i className="uil uil-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section pt-4">
          <Container>
            <Row className="justify-content-center">
              <div className="col-lg-10">
                <Row>
                  {this.state.domainData.map((item, key) => (
                    <Col key={key} lg={2} md={4} xs={6}>
                      <Link to="#" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            {item.domain} <br />
                            <span className="text-primary">{item.price}</span>
                            /year
                          </h6>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Why choose Landrick ?</h4>
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
              {this.state.cardData.map((item, key) => (
                <Col key={key} md={4} xs={12} className="mt-4 pt-2">
                  <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={item.icon}></i>
                    </span>
                    <div className="card-body p-0 content">
                      <h5>{item.title}</h5>
                      <p className="para text-muted mb-0">
                        If the distribution of letters and 'words' is random,
                        the reader from making a neutral judgement
                      </p>
                    </div>
                    <div className="position-absolute top-0 end-0">
                      <i className={item.icon + ' display-1 opacity-05'}></i>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="section bg-primary">
          <Container>
            <Row className="mb-md-4 pb-md-2 justify-content-center">
              <div className="col-12">
                <div className="section-title text-center pb-md-5">
                  <h4 className="title text-white title-dark mb-3">
                    Pricing Rates or Tables
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="section" id="price">
          <Container>
            <Row className="justify-content-center">
              <div className="col-lg-12 mt-md-5 pt-md-3 mt-lg-0 pt-lg-0">
                <div className="table-responsive bg-white shadow rounded features-absolute">
                  <table className="table mb-0 table-center">
                    <thead>
                      <tr className="bg-light">
                        <th
                          scope="col"
                          className="border-bottom py-4 px-3"
                          style={{ minWidth: '250px' }}
                        >
                          Domain Name
                        </th>
                        <th
                          scope="col"
                          className="border-bottom py-4 px-3 text-center"
                          style={{ minWidth: '80px' }}
                        >
                          Registration
                        </th>
                        <th
                          scope="col"
                          className="border-bottom py-4 px-3 text-center"
                          style={{ minWidth: '80px' }}
                        >
                          2 Year
                        </th>
                        <th
                          scope="col"
                          className="border-bottom py-4 px-3 text-center"
                          style={{ minWidth: '80px' }}
                        >
                          Renew
                        </th>
                        <th
                          scope="col"
                          className="border-bottom py-4 px-3 text-end"
                          style={{ minWidth: '100px' }}
                        >
                          Click Here
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="p-3">.com</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.in</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.online</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.net</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.co</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.live</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.xyz</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.org</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.club</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.me</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.today</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.life</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.shop</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.store</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th className="p-3">.solution</th>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-center">$ 3.99</td>
                        <td className="p-3 text-end">
                          <Link to="#" className="btn btn-sm btn-soft-primary">
                            Buy Now
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h6>We believe in building each other and hence</h6>
                  <h4 className="title mb-4">
                    Work with some amazing partners
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </Row>

            <Row>
              <Col xs="12" className="mt-4">
                <div
                  id="customer-testi"
                  className="owl-carousel owl-theme owl-loaded owl-drag"
                >
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <Row>
                        {this.state.step1 === true
                          ? this.state.clients.map((client, key) =>
                            key >= 0 && key <= 2 ? (
                              <Col
                                key={key}
                                md={this.state.cols}
                                className="mb-1"
                              >
                                <Card className="customer-testi text-center border-0 shadow rounded">
                                  <CardBody>
                                    <img
                                      src={client.image}
                                      className="img-fluid avatar avatar-ex-sm mx-auto"
                                      alt=""
                                    />
                                    <p className="text-muted mt-4">
                                      " {client.desc} "
                                    </p>
                                    <h6 className="text-primary">
                                      - {client.name}
                                    </h6>
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null,
                          )
                          : this.state.clients.map((client, key) =>
                            key >= 3 && key <= 5 ? (
                              <Col
                                key={key}
                                md={this.state.cols}
                                className="mb-1"
                              >
                                <Card className="customer-testi text-center border-0 shadow rounded">
                                  <CardBody>
                                    <img
                                      src={client.image}
                                      className="img-fluid avatar avatar-ex-sm mx-auto"
                                      alt=""
                                    />
                                    <p className="text-muted mt-4">
                                      " {client.desc} "
                                    </p>
                                    <h6 className="text-primary">
                                      - {client.name}
                                    </h6>
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null,
                          )}
                      </Row>
                    </div>
                  </div>
                  <div className="tns-nav">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ step1: true, step2: false });
                      }}
                      className={
                        this.state.step1 ? 'tns-nav-active' : 'tns-nav-inactive'
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ step1: false, step2: true });
                      }}
                      className={
                        this.state.step2 ? 'tns-nav-active' : 'tns-nav-inactive'
                      }
                    ></button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center mb-4 pb-2">
              <div className="col-md-6">
                <div className="section-title">
                  <h4 className="title mb-md-0 mb-4">
                    Frequently asked <br /> questions
                  </h4>
                </div>
              </div>

              <div className="col-md-6">
                <div className="section-title">
                  <p className="text-muted para-desc mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </Row>

            <Row>
              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      How our <span className="text-primary">Landrick</span>{' '}
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

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      What is the main process open account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      How to make unlimited data entry ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Furthermore, it is advantageous when the dummy text is
                      relatively realistic so that the layout impression of the
                      final publication is not compromised.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-help-circle fea icon-ex-md text-primary me-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      Is <span className="text-primary">Landrick</span> safer to
                      use with my account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </p>
                  </div>
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

export default HostingDomain;
