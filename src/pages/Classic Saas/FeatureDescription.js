import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Images
import diamond from "../../assets/images/diamond.svg";
import mockup from "../../assets/images/mockup.svg";


class FeatureDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 4,
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
    };
    this.updateWindowSize.bind(this);
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
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="pb-5 mb-md-5 mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="saas-feature-shape-left position-relative">
                <img
                  src={mockup}
                  className="img-fluid mx-auto d-block"
                  alt=""
                />
              </div>
            </Col>

            <Col lg={5} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="section-title ms-lg-4">
                
                <div
                  id="customer-testi"
                  className="owl-carousel owl-theme owl-loaded owl-drag"
                >
                  
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                  
                    
                
                      <Row>
                        {this.state.step1 === true ? (
                          <div className="customer-testi">
                            
                            <p className="para-desc text-muted">
                Our innovative protocol allows borrowers to access capital quickly and easily, while providing lenders with a high-yield investment opportunity.
                </p>
                            <h1 className="title mb-3">
                Our innovative protocol.
                </h1>
                                          </div>
                        ) : null}
                        {this.state.step2 === true ? (
                          <div className="customer-testi">
                            
                            <p className="para-desc text-muted">
                            Our platform utilizes cutting-edge blockchain technology to ensure the safety and security of all transactions.
                </p>
                            <h1 className="title mb-3">
                            Our platform utilizes.
                </h1>
                          </div>
                        ) : null}
                        {this.state.step3 === true ? (
                          <div className="customer-testi">
                            
                            <p className="para-desc text-muted">
                            All loan agreements and repayments are recorded on the blockchain, providing an immutable and transparent record of all activity.
                </p>
                            <h1 className="title mb-3">
                            All loan agreements and repayments
                </h1>
                          </div>
                        ) : null}
                        {this.state.step4 === true ? (
                          <div className="customer-testi">
                            
                            <p className="para-desc text-muted">
                            Our platform is user-friendly and easy to navigate, making it simple for borrowers and lenders to connect and conduct business.</p>
                            <h1 className="title mb-3">
                            User-friendly and easy to navigate
                </h1>
                          </div>
                        ) : null}
                        {this.state.step5 === true ? (
                          <div className="customer-testi">
                            
                            <p className="para-desc text-muted">
                            And our dedicated customer support team is available to assist you with any questions or concerns you may have.</p>
                            <h1 className="title mb-3">
                            Customer support 
                </h1>
                          </div>
                        ) : null}
                      
                      </Row>
                    </div>
                  </div>
                  <div className="tns-nav">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: true,
                          step2: false,
                          step3: false,
                          step4: false,
                          step5: false,
                        });
                      }}
                      className={
                        this.state.step1
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: true,
                          step3: false,
                          step4: false,
                          step5: false,
                        });
                      }}
                      className={
                        this.state.step2
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: true,
                          step4: false,
                          step5: false,
                        });
                      }}
                      className={
                        this.state.step3
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: false,
                          step4: true,
                          step5: false,
                        });
                      }}
                      className={
                        this.state.step4
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: false,
                          step4: false,
                          step5: true,
                        });
                      }}
                      className={
                        this.state.step5
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                   
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={{ size: 5, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2 mt-lg-0 pt-lg-0"
            >
              <div className="section-title me-lg-4">
                <h1 className="title mb-3">Why <span>EVAA</span></h1>
                <p className="para-desc text-muted">
                   
                </p>

                <Row>
                  {this.props.facilities.map((facility, key) => (
                    <Col xs="12" key={key}>
                      <div className="d-flex align-items-center pt-4">
                        <h2>
                          <i>
                            <FeatherIcon
                              icon={facility.icon}
                              className="fea icon-m-md text-primary"
                            />
                          </i>
                        </h2>
                        <div className="ms-3">
                          <h5> {facility.title} </h5>
                          <p className="text-muted mb-0">{facility.desc}</p>
                        </div>
                      </div>
                    </Col>
                  ))}

                  <Col xs="12" className="pt-4">
                    <Link to="#" className="btn btn-outline-primary">
                      Dashboard <i className="uil uil-angle-right-b"></i>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
              <div className="saas-feature-shape-right position-relative">
                <img
                  src={diamond}
                  className="img-fluid mx-auto d-block"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FeatureDescription;
