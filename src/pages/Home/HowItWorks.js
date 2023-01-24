// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Button,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

// Import Images
import seoSVG from "../../assets/images/illustrator/SEO_SVG.svg";
import mobileNotificationSVG from "../../assets/images/illustrator/Mobile_notification_SVG.svg";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features1: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light border-bottom">
          <Container>
            {/* render Section title */}
            <SectionTitle
              title="How It Work ?"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="align-items-center">
              <Col lg="5" md="6" className="mt-4 pt-2">
                <img src={seoSVG} alt="" />
              </Col>

              <Col lg="7" md="6" className="mt-4 pt-2">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Change the way you build websites</h4>
                  <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg="7"
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <h4 className="title mb-4">Speed up your development <br /> with <span className="text-primary">Landrick.</span></h4>
                  <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div>
              </Col>

              <Col lg={5} md={6} className="order-1 order-md-2">
                <Card className="rounded border-0 shadow ms-lg-5">
                  <CardBody>
                    <img src={mobileNotificationSVG} alt="" />

                    <div className="content mt-4 pt-2">
                      <Alert
                        color="info"
                        isOpen={this.state.Contactvisible}
                        toggle={() => {
                          this.setState({
                            Contactvisible: !this.state.Contactvisible,
                          });
                        }}
                      >
                        Download Successfully.
                      </Alert>
                      <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col lg="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Name : <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </div>
                              <Input
                                type="text"
                                className="form-control ps-5"
                                placeholder="Name"
                                name="name"
                                required=""
                              />
                            </div>
                          </Col>

                          <Col lg="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Email : <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </div>
                              <Input
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email"
                                name="email"
                                required
                              />
                            </div>
                          </Col>

                          <Col lg="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Password :{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <FeatherIcon
                                  icon="key"
                                  className="fea icon-sm icons"
                                />
                              </div>
                              <Input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Password"
                                required
                              />
                            </div>
                          </Col>
                          <Col lg="12" className="mt-2 mb-0">
                            <Button
                              color="primary"
                              type="submit"
                              className="w-100"
                            >
                              Download
                            </Button>
                          </Col>
                        </Row>
                      </Form>                      
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
