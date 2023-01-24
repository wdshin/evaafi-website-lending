import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer7 from '../PageFooterLayouts/Footer7';
import NavBar from './NavBar';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

//Import components

class HelpCenterGuides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData1: [
        { id: 1, line: 'Deciding to purchase' },
        { id: 2, line: 'List your space' },
        { id: 3, line: 'Landing an experience or adventure' },
        { id: 4, line: 'Top uses questions' },
      ],

      listData2: [
        { id: 1, line: 'Pricing & availability' },
        { id: 2, line: 'Booking settings' },
        { id: 3, line: 'Responding to enquiries & requests' },
        { id: 4, line: 'Snoozing or deactivating your listing' },
      ],

      listData3: [
        { id: 1, line: 'Updating your listing' },
        { id: 2, line: 'Neighbourhoods' },
        { id: 3, line: 'Listing photos & photography' },
        { id: 4, line: 'Landrick Plus' },
        { id: 5, line: 'API-connected software' },
      ],

      listData4: [
        { id: 1, line: 'Getting paid' },
        { id: 2, line: 'Adding payout info' },
        { id: 3, line: 'Your payout status' },
        { id: 4, line: 'Donations' },
        { id: 5, line: 'Taxes' },
      ],

      listData5: [
        { id: 1, line: 'Landrick safely' },
        { id: 2, line: 'Landrick Experiences and Adventures' },
        { id: 3, line: 'Changing a reservation' },
        { id: 4, line: 'Cancelling a reservation' },
        { id: 5, line: 'Long-term reservations' },
      ],

      listData6: [
        { id: 1, line: 'Your profile' },
        { id: 2, line: 'Account security' },
        { id: 3, line: 'Identification & verifications' },
        { id: 4, line: 'Reviews' },
        { id: 5, line: 'Superhost status' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />      
        
        <section className="bg-half-170 bg-light d-table w-100">
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col lg={12} className="text-center">
                        <div className="pages-heading">
                            <h4 className="title mb-0"> Guides & Support </h4>
                        </div>
                    </Col>
                </Row>

                <div className="position-breadcrumb">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                        <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                            <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                            <li className="breadcrumb-item"><Link to="/helpcenter-overview">Help Center</Link></li>{" "}
                            <li className="breadcrumb-item active" aria-current="page">Guides</li>
                        </ul>
                    </nav>
                </div>
            </Container> 
        </section>
        <section className="section">
          <Container>
            <Row>
              <Col lg={4} md={6} xs={12}>
                <h5>Getting started</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  {this.state.listData1.map((item, key) => (
                    <li key={key} className="mt-2">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right text-primary me-2"></i>
                        {item.line}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5>Your calendar</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  {this.state.listData2.map((item, key) => (
                    <li key={key} className="mt-2">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right text-primary me-2"></i>
                        {item.line}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg={4}
                md={6}
                xs={12}
                className="mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2"
              >
                <h5>Your listings</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  {this.state.listData3.map((item, key) => (
                    <li key={key} className="mt-2">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right text-primary me-2"></i>
                        {item.line}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>How payouts work</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  {this.state.listData4.map((item, key) => (
                    <li key={key} className="mt-2">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right text-primary me-2"></i>
                        {item.line}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>Your reservations</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  {this.state.listData5.map((item, key) => (
                    <li key={key} className="mt-2">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right text-primary me-2"></i>
                        {item.line}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>Reservation help</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Help with a reservation or guest
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Guest cancellations
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>Your account</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  {this.state.listData6.map((item, key) => (
                    <li key={key} className="mt-2">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right text-primary me-2"></i>
                        {item.line}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer7 />
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default HelpCenterGuides;
