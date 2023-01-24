import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  Alert,
  Card,
  CardBody,
  FormFeedback
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Containers
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import customer from "../../assets/images/customer/customer.svg";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const Ticket = () => {
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
      <Container className="mt-100 mt-60">
        {/* section title */}
        <SectionTitle
          title="Submit A Ticket"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
        />

        <Row className="align-items-center">
          <Col lg="6" md="5" xs="12" className="mt-4 pt-2">
            <img
              src={customer}
              data-aos="fade-up"
              data-aos-duration="1400"
              className="img-fluid"
              alt=""
            />
          </Col>

          <Col lg="6" md="7" xs="12" className="mt-4 pt-2">
            <Alert
              color="primary"
              isOpen={succemsg}
              toggle={() => {
                setSucceMsg(false)
              }}
            >
              Ticket details send successfully.
            </Alert>
            <Card className="rounded shadow border-0 ms-lg-4">
              <CardBody className="p-4">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label className="form-label">Your Name :</Label>
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
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <div className="mb-3">
                        <Label className="form-label">Your Email :</Label>
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

                    <Col md="12">
                      <div className="mb-3">
                        <Label className="form-label">Reasons / Catagories :</Label>
                        <select
                          className="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Catagories</option>
                          <option>General Question</option>
                          <option>Bugs</option>
                          <option>Remote</option>
                        </select>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="mb-3">
                        <Label className="form-label">Subject :</Label>

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
                          className="form-control ps-5"
                          placeholder="Your subject :"
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
                    <Col md="6">
                      <div className="mb-3">
                        <Label className="form-label">Url :</Label>

                        <div className="form-icon position-relative">
                          <i>
                            <FeatherIcon
                              icon="globe"
                              className="fea icon-sm icons"
                            />
                          </i>
                        </div>
                        <Input
                          name="url"
                          id="url"
                          type="url"
                          className="form-control ps-5"
                          placeholder="Url :"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.url || ""}
                          invalid={
                            validation.touched.url && validation.errors.url ? true : false
                          }
                        />
                        {validation.touched.url && validation.errors.url ? (
                          <FormFeedback type="invalid">{validation.errors.url}</FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="mb-3">
                        <Label className="form-label">Description :</Label>

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
                          placeholder="Describe your problem :"
                        ></textarea>
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
                  </Row>

                  <Row>
                    <Col sm="12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="btn btn-primary"
                        value="Submit"
                      />
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Ticket;
