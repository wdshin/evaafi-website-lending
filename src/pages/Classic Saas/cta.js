import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";

import CountUp from "react-countup";

const CTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Container className="pt-4 mt-100 mt-60">
        <Row className="justify-content-center" id="counter">
          <Col xs="12" className="text-center">
            <div className="section-title">
              <h4 className="title mb-4">
                Join our DeFi service with potential {" "}
                <span className="text-primary">
                  <span className="counter-value">
                    <CountUp end={700} delay={1} />
                  </span>
                  m+
                </span>{" "}
                users
              </h4>
              <p className="text-muted para-desc mx-auto mb-0">
              Join the Evaa Lending Protocol today and experience the future of lending.
              </p>

              <div className="mt-4">
                <a href="https://www.youtube.com/watch?v=JNHID5Pq-sI&ab_channel=TONANADeFiHUB" className="btn btn-primary m-1">
                  Tokenomics <i className="uil uil-angle-right-b"></i>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=JNHID5Pq-sI&ab_channel=TONANADeFiHUB"
                  className="btn btn-icon btn-pills btn-primary m-1 lightbox"
                >
                  <FeatherIcon
                    icon="video"
                    className="icons"
                  />
                </a>
                <span className="fw-bold text-uppercase small align-middle">Pitch</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CTA;
