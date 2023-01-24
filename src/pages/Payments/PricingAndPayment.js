import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  Input,
  Label,
  Card,
  CardBody,
  FormFeedback
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const PricingAndPayment = () => {
  const [successMsg, setSuccessMsg] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      cardnumber: "",
      exdate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      cardnumber: Yup.string().required("Please Enter Card Number"),
      exdate: Yup.string().required("Exdate is required"),
      cvv: Yup.string().required("CVV is required")
    }),
    onSubmit: (values) => {
      // console.log(values)
      setSuccessMsg(true)
    }
  });
  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        {/* Render Section Title */}
        <SectionTitle
          title="Pricing & Add Payment Card"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
        />

        <Row className="align-items-center"> 
          <Col lg={5} md={6} className="col-12 mt-4 pt-2">
            <Card className="bg-light shadow rounded border-0">
              <div className="bg-primary bg-gradient p-4 text-center rounded-top">
                <h4 className="mb-0 card-title title-dark text-white">
                  Payment plan
                </h4>
              </div>

              <CardBody>
                <div className="d-flex justify-content-center mb-4">
                  <span className="price text-primary fw-bold display-4 mb-0">
                    2
                  </span>
                  <span className="h4 mb-0 mt-2 text-primary">%</span>
                  <span className="h6 align-self-end fw-bold text-uppercase mb-2 ms-2">
                    {" "}
                    Per Transection
                  </span>
                </div>

                <ul className="feature list-inline">
                  <li className="h6 mt-2 fw-normal">
                    <i>
                      <FeatherIcon
                        icon="check-circle"
                        className="fea icon-ex-md text-primary me-2"
                      />
                    </i>
                    Transparent payouts
                  </li>
                  <li className="h6 mt-2 fw-normal">
                    <i>
                      <FeatherIcon
                        icon="check-circle"
                        className="fea icon-ex-md text-primary me-2"
                      />
                    </i>
                    Deposit tagging
                  </li>
                  <li className="h6 mt-2 fw-normal">
                    <i>
                      <FeatherIcon
                        icon="check-circle"
                        className="fea icon-ex-md text-primary me-2"
                      />
                    </i>
                    Control payout timing
                  </li>
                  <li className="h6 mt-2 fw-normal">
                    <i>
                      <FeatherIcon
                        icon="check-circle"
                        className="fea icon-ex-md text-primary me-2"
                      />
                    </i>
                    24×7 support
                  </li>
                </ul>
                <div className="d-grid">
                  <Link to="#" className="btn btn-primary mt-4 pt-2">
                    Payment Now
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="7" md="6" xs="12" className="mt-4 pt-2">
            <Card className="rounded border-0 shadow">
              <div className="bg-light p-4 text-center rounded-top">
                <h4 className="mb-0 text-primary">Add a new card</h4>
              </div>

              <CardBody>
                <Alert
                  color="primary"
                  isOpen={successMsg}
                  toggle={() => {
                    setSuccessMsg(false)
                  }}
                >
                  Card Added successfully.
                </Alert>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}>
                  <Row>
                    <Col md="12">
                      <div className="mb-3">
                        <Label className="form-label">Name of card holder : </Label>
                        <Input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control fw-bold"
                          placeholder="Name"
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
                    <Col md="12">
                      <div className="mb-3">
                        <Label className="form-label">Card Number :</Label>
                        <Input
                          type="number"
                          min="0"
                          autoComplete="off"
                          id="cardnumber"
                          className="form-control fw-bold"
                          placeholder="0000 0000 0000 0000"
                          name="cardnumber"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.cardnumber || ""}
                          invalid={
                            validation.touched.cardnumber && validation.errors.cardnumber ? true : false
                          }
                        />
                        {validation.touched.cardnumber && validation.errors.cardnumber ? (
                          <FormFeedback type="invalid">{validation.errors.cardnumber}</FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <Label className="form-label">Expires End :</Label>
                        <Input
                          type="number"
                          min="0"
                          autoComplete="off"
                          id="exdate"
                          name="exdate"
                          className="form-control fw-bold"
                          placeholder="MM/YY"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.exdate || ""}
                          invalid={
                            validation.touched.exdate && validation.errors.exdate ? true : false
                          }
                        />
                        {validation.touched.exdate && validation.errors.exdate ? (
                          <FormFeedback type="invalid">{validation.errors.exdate}</FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <Label className="form-label">CVV :</Label>
                        <Input
                          type="number"
                          min="0"
                          autoComplete="off"
                          id="cvv"
                          name="cvv"
                          className="form-control fw-bold"
                          placeholder="CVV"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.cvv || ""}
                          invalid={
                            validation.touched.cvv && validation.errors.cvv ? true : false
                          }
                        />
                        {validation.touched.cvv && validation.errors.cvv ? (
                          <FormFeedback type="invalid">{validation.errors.cvv}</FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn btn-primary"
                        value="Add Card"
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

export default PricingAndPayment;
