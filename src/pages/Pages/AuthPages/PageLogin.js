// React Basic and Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Card,
  CardBody,
  FormFeedback
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import loginImg from "../../../assets/images/user/login.svg";

const PageLogin = () => {

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required("Please Enter Password")
    }),
    onSubmit: (values) => {
      // console.log(values)
    }
  });
  return (
    <React.Fragment>
      <div className="back-to-home">
        <Link to="/" className="back-button btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <div className="me-lg-5">
                <img
                  src={loginImg}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={5} md={6}>
              <Card className="login-page bg-white shadow rounded border-0">
                <CardBody>
                  <div className="card-title text-center">
                    <h4 className="mb-4">Login</h4>
                  </div>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                    className="login-form mt-4" 
                    >
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="email">
                            Your Email <span className="text-danger">*</span>
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
                            type="text"
                            className="form-control ps-5"
                            name="email"
                            id="email"
                            placeholder="Email"
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

                      <Col lg={12}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="password">
                            Password <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="key"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            type="password"
                            className="form-control ps-5"
                            name="password"
                            id="password"
                            placeholder="Password"                            
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password || ""}
                            invalid={
                              validation.touched.password && validation.errors.password ? true : false
                            }
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                          ) : null}
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="flexCheckDefault"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Remember me
                              </Label>
                            </div>
                          </div>
                          <p className="forgot-pass mb-0">
                            <Link
                              to="auth-re-password"
                              className="text-dark fw-bold"
                            >
                              Forgot password ?
                            </Link>
                          </p>
                        </div>
                      </Col>
                      <Col lg={12} className="mb-0">
                        <div className="d-grid">
                          <Button color="primary">
                            Sign in
                          </Button>
                        </div>
                      </Col>
                      <Col lg={12} className="mt-4 text-center">
                        <h6>Or Login With</h6>
                        <Row>
                          <div className="col-6 mt-3">
                            <div className="d-grid">
                              <Link to="#" className="btn btn-light"><i className="mdi mdi-facebook text-primary"></i> Facebook</Link>
                            </div>
                          </div>

                          <div className="col-6 mt-3">
                            <div className="d-grid">
                              <Link to="#" className="btn btn-light"><i className="mdi mdi-google text-danger"></i> Google</Link>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col xs={12} className="text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Don't have an account ?
                          </small>{" "}
                          <Link
                            to="/auth-signup"
                            className="text-dark fw-bold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <ThemeSwitcher/>
    </React.Fragment>
  );

}
export default PageLogin;
