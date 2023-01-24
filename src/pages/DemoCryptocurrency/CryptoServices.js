import React, { Component } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

import CountUp from 'react-countup';

//import images
import shape from '../../assets/images/shape02.png';
import logoIcon from '../../assets/images/logo-icon.png';
import cpu from '../../assets/images/crypto/cpu.svg';
import analytics from '../../assets/images/crypto/analytics.svg';
import exchange from '../../assets/images/crypto/exchange.svg';
import money from '../../assets/images/crypto/money.svg';

class CryptoServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoCardData: [
        {
          img: cpu,
          title: 'Buy & Sell Crypto',
          caption:
            'Buy or sell Bitcoin, Ethereum, and other crypto assets with your credit card, debit card, or bank account.',
          action: 'Buy Bitcoin',
        },
        {
          img: analytics,
          title: 'Trade Assets',
          caption:
            'Discover new and innovative crypto assets with over 200 spot trading pairs and 25 margin trading pairs.',
          action: ' View Exchange',
        },
        {
          img: exchange,
          title: 'Hedge with Poloniex Futures',
          caption:
            'Trade Bitcoin, Ethereum, and other perpetual with up to 100x leverage on Poloniex Futures.',
          action: 'Trade Futures',
        },
        {
          img: money,
          title: 'Earn Rewards for Trading',
          caption:
            'Never miss an opportunity for a little competition. Join our latest campaigns to earn rewards.',
          action: 'Join Competition ',
        },
      ],

      serviceCardData: [
        {
          title: 'Support',
          icon: 'uil uil-file-contract-dollar',
        },
        {
          title: 'Service Level',
          icon: 'uil uil-analytics',
        },
        {
          title: 'Take profit / Stoploss',
          icon: 'uil uil-dashboard',
        },
        {
          title: 'Trailing Stop',
          icon: 'uil uil-swatchbook',
        },
        {
          title: 'Pending Orders',
          icon: 'uil uil-exchange',
        },
        {
          title: 'Platform Fees',
          icon: 'uil uil-lock-alt',
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-170 bg-light d-table w-100"
          style={{ background: `url(${shape}) top left` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Services </h4>
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
                    <Link to="/index-crypto">Crypto</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
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
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">
                    Become a crypto trader in seconds
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    We've got everything you need to start trading.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <div className="col-lg-10">
                <Row className="justify-content-center">
                  {this.state.cryptoCardData.map((item, key) => (
                    <Col md={6} className="mt-4 pt-2" key={key}>
                      <div className="feature feature-primary position-relative ps-4 py-4 pe-5 shadow rounded overflow-hidden">
                        <div className="me-md-5">
                          <Link to="#" className="title h5 text-dark">
                            {item.title}
                          </Link>
                          <p className="text-muted mb-3 mt-4">{item.caption}</p>
                          <Link to="#" className="text-primary">
                            {item.action}{' '}
                            <i className="uil uil-arrow-right"></i>
                          </Link>
                        </div>
                        <div className="position-absolute top-50 start-100 translate-middle">
                          <img
                            src={item.img}
                            className="avatar avatar-large opacity-2"
                            alt=""
                          />
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Row>
          </Container>

          <div className="container mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Services</h4>
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
              {this.state.serviceCardData.map((item, key) => (
                <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                  <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                    <div className="icons text-primary text-center mx-auto">
                      <i className={item.icon + ' d-block rounded h3 mb-0'}></i>
                    </div>
                    <CardBody className="p-0 mt-4">
                      <Link to="#" className="title h5 text-dark">
                        {item.title}
                      </Link>
                      <p className="text-muted mt-2">
                        Composed in a pseudo-Latin language which more or less
                        corresponds.
                      </p>
                      <Link to="#" className="text-primary read-more">
                        Read More <i className="uil uil-angle-right-b"></i>
                      </Link>
                      <i className={item.icon + ' text-primary full-img'}></i>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

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
                      <CountUp start={2000} end={2021} duration={5} />{' '}
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
                      <CountUp start={0} end={10} duration={5} />
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

        {/* import Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default CryptoServices;
