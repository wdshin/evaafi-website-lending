// React Basic and Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Label,
  Card,
  CardBody,
  FormFeedback,
  Input
} from "reactstrap";

//Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
// import images
import recoveryimg from "../../../assets/images/user/recovery.svg";

const PageRecoveryPassword = () => {

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
                  src={recoveryimg}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={5} md={6}>
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
                          <Label className="form-label" for="email">
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
                            type="text"
                            className="form-control ps-5"
                            name="email"
                            id="email"
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
                            to="auth-login"
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
export default PageRecoveryPassword;
