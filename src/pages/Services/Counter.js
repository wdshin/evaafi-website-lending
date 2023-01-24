// React Basic and Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {serviceCounters} from "../../common/data";

//Import Counter Box
import CounterBox from "./CounterBox";

// Import images
import saas from "../../assets/images/saas/classic01.png";

const Counter = () => {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0" >
                <div className="section-title me-lg-5">
                  <h4 className="title mb-4">
                    Get Notified About Importent Email
                  </h4>
                  <p className="text-muted">
                    This prevents repetitive patterns from impairing the overall
                    visual impression and facilitates the comparison of
                    different typefaces. Furthermore, it is advantageous when
                    the dummy text is relatively realistic.
                  </p>
                  <Link to="#" className="btn btn-outline-primary">
                    Start Now <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>

              <Col md={6} className="order-1 order-md-2">
                <img src={saas} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center" id="counter">
              <CounterBox counters={serviceCounters} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
};

export default Counter;
