import React, {useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  Form,
  Label,
  Input,
  Button,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Images
import cta from "../../assets/images/course/online/cta.jpg";

const Cta = () => {
  const [succeMsg, setSucceMsg] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Name"),
      email: Yup.string().required("Email is required"),
      number: Yup.string().required("Please Enter Phone no.")
    }),
    onSubmit: (values) => {
      setSucceMsg(true);
      // console.log(values)
    }
  });
  return (
    <React.Fragment>
      <Container fluid className="mt-100 mt-60">
        <div
          className="rounded py-md-5"
          style={{ background: `url(${cta}) center center` }}
        >
          <Row className="py-5">
            <Container>
              <Row className="align-items-center px-3 px-sm-0">
                <Col lg={8} md={6} xs={12}>
                  <div className="section-title">
                    <h4 className="display-4 h1 text-white title-dark mb-4">
                      Register Now !
                    </h4>
                    <p className="text-light title-dark para-desc">
                      Start working with Landrick that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-primary">
                        Admission Now
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col
                  lg={4}
                  md={6}
                  xs={12}
                  className="mt-4 pt-2 mt-sm-0 pt-sm-0"
                >
                  <Card className="login_page shadow rounded border-0">
                    <CardBody>
                      <h4 className="card-title">Register Now</h4>
                      <Alert
                        isOpen={succeMsg}
                        toggle={() => setSucceMsg(false)}
                        color="primary"
                      >
                        Data Submtted Successfully
                      </Alert>
                      <Form
                        className="login-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <Row>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Name :
                                <span className="text-danger">*</span>
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
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.name || ""}
                                invalid={
                                  validation.touched.name && validation.errors.name ? true : false
                                }
                              />
                              {validation.touched.name && validation.errors.name ? (
                                <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Email :
                                <span className="text-danger">*</span>
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
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.email || ""}
                                invalid={
                                  validation.touched.email && validation.errors.email ? true : false
                                }
                              />
                              {validation.touched.email && validation.errors.email ? (
                                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={12}>
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
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.number || ""}
                                invalid={
                                  validation.touched.number && validation.errors.number ? true : false
                                }
                              />
                              {validation.touched.number && validation.errors.number ? (
                                <FormFeedback type="invalid">{validation.errors.number}</FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={12}>
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
                          <Col md={12}>
                            <Button
                              color="primary"
                              type="submit"
                              className="w-100"
                            >
                              Register Now
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Cta;
