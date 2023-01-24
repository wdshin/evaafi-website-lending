// React Basic and Bootstrap
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
  FormFeedback
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const Contact = () => {
  const [succeMsg, setSucceMsg] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Name"),
      email: Yup.string().required("Email is required"),
    }),
    onSubmit: (values) => {
      // console.log(values)
      setSucceMsg(true)
    }
  });

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg="8" md="6" className="p-0 ps-md-3 pe-md-3">
              <div className="map map-height-two rounded map-gray border-0">
                <iframe
                  title="myFrame"
                  src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  className="rounded"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>

            <Col lg="4" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <Card className="rounded shadow border-0">
                <CardBody className="py-5">
                  <h5 className="card-title">Get In Touch !</h5>
                  <div className="custom-form mt-4">
                    <div id="message"></div>
                    <Alert
                      color="primary"
                      isOpen={succeMsg}
                      toggle={() => {
                        setSucceMsg(false)
                      }}
                    >
                      Contact details send successfully.
                    </Alert>
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Name <span className="text-danger">*</span>{" "}
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
                              Your Email{" "}
                              <span className="text-danger">*</span>{" "}
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
                            <Label className="form-label">Comments </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Your Message :"
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary"
                              value="Send Message"
                            />
                            <div id="simple-msg"></div>
                          </div>
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
};

export default Contact;
