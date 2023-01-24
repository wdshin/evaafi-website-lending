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
  FormFeedback,
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
// import images
import user02 from "../../../assets/images/user/02.jpg";

const PageCoverSignup = () => {

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter First Name"),
      lastname: Yup.string().required("Please Enter Last Name"),
      email: Yup.string("Please Enter email").email("Enter a valid email").required("Email is required"),
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
        <Link to="/" className="btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section className="cover-user">
        <Container fluid className="px-0">
          <Row className="g-0 position-relative">
            <Col lg={4} xs={{ order: 2 }} className="cover-my-30 ">
              <div className="cover-user-img d-flex align-items-center">
                <Row>
                  <Col xs={12}>
                    <Card
                      className="login_page border-0"
                      style={{ zIndex: 1 }}
                    >
                      <CardBody className="p-0">
                        <h4 className="card-title text-center">Signup</h4>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                          className="login-form mt-4"
                        >
                          <Row>
                            <Col md={6}>
                              <div className="mb-3">
                                <Label className="form-label" for="firstname">
                                  First name{" "}
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
                                  type="text"
                                  className="form-control ps-5"
                                  name="firstname"
                                  id="firstname"
                                  placeholder="First Name"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.firstname || ""}
                                  invalid={
                                    validation.touched.firstname && validation.errors.firstname ? true : false
                                  }
                                />
                                {validation.touched.firstname && validation.errors.firstname ? (
                                  <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="mb-3">
                                <Label className="form-label" for="lastname">
                                  Last name{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="user-check"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="text"
                                  className="form-control ps-5"
                                  name="lastname"
                                  id="lastname"
                                  placeholder="Last Name"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.lastname || ""}
                                  invalid={
                                    validation.touched.lastname && validation.errors.lastname ? true : false
                                  }
                                />
                                {validation.touched.lastname && validation.errors.lastname ? (
                                  <FormFeedback type="invalid">{validation.errors.lastname}</FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col md={12}>
                              <div className="mb-3">
                                <Label className="form-label" for="email">
                                  Your Email{" "}
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

                            <Col md={12}>
                              <div className="mb-3">
                                <Label className="form-label" for="password">
                                  Password{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="lock"
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
                                    for="customCheck1"
                                  >
                                    I Accept{" "}
                                    <Link to="#" className="text-primary">
                                      Terms And Condition
                                    </Link>
                                  </Label>
                                </div>
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="d-grid">
                                <Button color="primary">
                                  Register
                                </Button>
                              </div>
                            </Col>
                            <Col lg="12" className="mt-4 text-center">
                              <h6>Or Signup With</h6>
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
                            <div className="mx-auto">
                              <p className="mb-0 mt-3">
                                <small className="text-dark me-2">
                                  Already have an account ?
                                </small>{" "}
                                <Link
                                  to="/auth-cover-login"
                                  className="text-dark fw-bold"
                                >
                                  Sign In
                                </Link>
                              </p>
                            </div>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={8}
              className="offset-lg-4 padding-less img order-1"
              style={{ backgroundImage: `url(${user02})` }}
            ></Col>
          </Row>
        </Container>
      </section>

      <ThemeSwitcher/>
    </React.Fragment>
  );
}
export default PageCoverSignup;
