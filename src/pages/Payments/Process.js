import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ProcessBox from "./ProcessBox";
import { paymentsProcess } from "../../common/data";

//Import Images
import discover from "../../assets/images/payments/payment/discover.jpg";
import maestro from "../../assets/images/payments/payment/maestro.jpg";
import paypal from "../../assets/images/payments/payment/paypal.jpg";
import mastercard from "../../assets/images/payments/payment/master-card.jpg";
import visa from "../../assets/images/payments/payment/visa.jpg";
import amaricanExpress from "../../assets/images/payments/payment/american-express.jpg";
import sellerOrder from "../../assets/images/payments/payment/seller-order.png";

const Process = () => {

  return (
    <React.Fragment>
      <section className="section pb-0">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">
                  Easy payment processing for your business
                </h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>

              <div className="mt-4">
                <Link to="#">
                  <img src={maestro} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" id="maestro" alt="" /></Link>
                <Link to="#">{" "}
                  <img src={paypal} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" id="paypal" alt="" /></Link>
                <Link to="#">{" "}
                  <img src={mastercard} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" id="mastercard" alt="" /></Link>
                <Link to="#">{" "}
                  <img src={visa} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" id="visa" alt="" /></Link>
                <Link to="#">{" "}
                  <img src={amaricanExpress} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" id="amaricanExpress" alt="" /></Link>
                <Link to="#">{" "}
                  <img src={discover} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" id="discover" alt="" /></Link>
                <UncontrolledTooltip
                  placement="top"
                  target="maestro"
                >
                  Maestro
                </UncontrolledTooltip>

                <UncontrolledTooltip
                  placement="top"
                  target="paypal"
                >
                  Paypal
                </UncontrolledTooltip>

                <UncontrolledTooltip
                  placement="top"
                  target="mastercard"
                >
                  Master Card
                </UncontrolledTooltip>

                <UncontrolledTooltip
                  placement="top"
                  target="visa"
                >
                  Visa
                </UncontrolledTooltip>

                <UncontrolledTooltip
                  placement="top"
                  target="amaricanExpress"
                >
                  American Express
                </UncontrolledTooltip>

                <UncontrolledTooltip
                  placement="top"
                  target="discover"
                >
                  Discover
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <SectionTitle
            title="Payments Great Features"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* Render Process Box */}
            <ProcessBox data={paymentsProcess} />
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs="12" className="text-center">
              <div className="section-title mb-5 pb-2">
                <h4 className="title mb-4">
                  Transection Between Buyers and Seller
                </h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
              <img
                src={sellerOrder}
                alt=""
                className="position-relative img-fluid mx-auto d-block"
                style={{ zIndex: "1" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Process;
