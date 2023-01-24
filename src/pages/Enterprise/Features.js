// React Basic and Bootstrap
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  FormFeedback
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import { enterpriceFeatures } from "../../common/data";

// Import images;
import MobileNotificationSVG from "../../assets/images/illustrator/Mobile_notification_SVG.svg";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";


const Features = () => {
  const [show, setShow] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Please Enter Password")
    }),
    onSubmit: (values) => {
      // console.log(values)
      setShow(true)
    }
  });
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          {/* section title */}
          <SectionTitle
            title="What We Do ?"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect"
          />
          <Row>
            {enterpriceFeatures.map((item, key) => (
              <Col key={key} md={4} className="col-12 mt-5">
                <div className="features feature-primary text-center">
                  <div className="image position-relative d-inline-block">
                    <i className={"h2 text-primary " + item.icon}></i>
                  </div>

                  <div className="content mt-4">
                    <h5>{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">Speed up your development <br /> with <span className="text-primary">Landrick.</span></h4>
                <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                </ul>
                <Link to="#" className="mt-3 h6 text-primary">Find Out More {" "}
                <i className="uil uil-angle-right-b align-middle"></i></Link>
              </div>
            </Col>

            <Col lg={5} md={6} className="order-1 order-md-2">
              <Card className="rounded border-0 shadow ms-lg-5">
                <CardBody>
                  <img src={MobileNotificationSVG} alt="" />

                  <div className="content mt-4 pt-2">
                    <Alert
                      color="primary"
                      isOpen={show}
                      toggle={() => {
                        setShow(false)
                      }}
                    >
                      Contact details send successfully.
                    </Alert>
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}>
                      <Row>
                        <Col lg="12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Name : <span className="text-danger">*</span>
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
                              placeholder="Name"
                              name="name"
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

                        <Col lg="12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Email : <span className="text-danger">*</span>
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
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email"
                              name="email"
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

                        <Col lg="12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Password :{" "}
                              <span className="text-danger">*</span>
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
                              placeholder="Password"
                              name="password"
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

export default Features;
