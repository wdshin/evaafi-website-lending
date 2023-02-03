import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import duck from "../../assets/images/saas/duck.svg";

const Section = () => {

  return (
    <React.Fragment>
      <section
        className="bg-half-170 d-table w-100 overflow-hidden"
        id="home"
      >
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg={7} md={6}>
              <div className="title-heading main-title">
                <h1 className="heading mb-3">
                  <span>EVAA <br /> protocol </span>
                </h1>
                <p className="para-desc text-muted">
                  The first decentralized lending protocol on TON that lets users lend or borrow assets without going to a centralized intermediary.
                </p>
                <div className="mt-4 pt-2">
                  <Link
                    to=""
                    className="btn btn-primary"
                  >
                    App
                    <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="classic-saas-image position-relative">
                <div className="bg-saas-shape position-relative">
                  <img src={duck} className="mx-auto d-block" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Section;
