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
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import BlogBox from "../../components/Shared/BlogBox";
import { personalBlogsData } from "../../common/data";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const Blog = () => {
  const [succemsg, setSucceMsg] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      subject: "",
      url: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter Youe Name"),
      email: Yup.string().required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      url: Yup.string().required("Url is required"),
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
          {/* section title */}
          <SectionTitle
            isLeft={true}
            title="Latest News"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* blog box */}
            <BlogBox blogs={personalBlogsData} />

            <Col xs="12" className="mt-4 pt-2">
              <Link to="page-blog-grid" className="btn btn-primary ">
                See More <i className="uil uil-angle-right-b"></i>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60" id="contact">
          {/* section title */}
          <SectionTitle
            isLeft={true}
            title="Contact Me"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            <Col lg="4" md="6" className="mt-4 pt-2">
              <Card className="rounded shadow border-0">
                <CardBody>
                  <h4>Get In Touch !</h4>
                  <div className="custom-form mt-3">
                    <div id="message"></div>
                    <Alert
                      color="primary"
                      isOpen={succemsg}
                      toggle={() => {
                        setSucceMsg(false)
                      }}
                    >
                      Contact details send successfully.
                    </Alert>
                    <Form
                      method="post"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }} name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col className="col-12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Name <span className="text-danger">*</span>
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
                              placeholder="Name :"
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
                        <Col className="col-12">
                          <div className="mb-3">
                            <Label className="form-label">
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
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email :"
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
                        <Col className="col-12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Subject{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="book"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="subject"
                              id="subject"
                              type="subject"
                              className="form-control ps-5"
                              placeholder="Subject :"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.subject || ""}
                              invalid={
                                validation.touched.subject && validation.errors.subject ? true : false
                              }
                            />
                            {validation.touched.subject && validation.errors.subject ? (
                              <FormFeedback type="invalid">{validation.errors.subject}</FormFeedback>
                            ) : null}
                          </div>
                        </Col>
                        <Col className="col-12">
                          <div className="mb-3">
                            <Label className="form-label">Comments{" "}
                            <span className="text-danger">*</span>
                            </Label>
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
                              placeholder="Message :"
                            ></textarea>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col-12">
                        <div className="d-grid">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="btn btn-primary"
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

            <Col lg="8" md="6" className="ps-md-3 pe-md-3 mt-4 pt-2">
              <Card className="border-0 shadow rounded">
                <div className="map map-height-two map-gray">
                  <iframe
                    title="Landrick"
                    src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    className="rounded"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Blog;
