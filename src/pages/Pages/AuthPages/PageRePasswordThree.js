import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  CardBody,
  Label,
  Button,
  FormFeedback,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";

//Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
//Import Icons
import FeatherIcon from "feather-icons-react";

const PageRePasswordThree = () => {

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      // console.log(values)
    }
  });

  return (
    <React.Fragment>
      <div className="back-to-home">
        <Link to="index" className="back-button btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>

      <section className="bg-home bg-circle-gradiant d-flex align-items-center">
        <div className="bg-overlay bg-overlay-white"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={5} md={8}>
              <Card className="shadow rounded border-0">
                <CardBody>
                  <h4 className="card-title text-center">Recover Account</h4>

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
                        <p className="text-muted">
                          Please enter your email address. You will receive a
                          link to create a new password via email.
                        </p>
                        <div className="mb-3">
                          <Label className="form-label">
                            Email address{" "}
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
                            type="email"
                            className="form-control ps-5"
                            placeholder="Enter Your Email Address"
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
                        <div className="d-grid">
                          <Button color="primary">
                            Send
                          </Button>
                        </div>
                      </Col>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Remember your password ?
                          </small>{" "}
                          <Link
                            to="auth-login-three"
                            className="text-dark fw-bold"
                          >
                            Sign in
                          </Link>
                        </p>
                      </div>
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
};

export default PageRePasswordThree;
