// React Basic and Bootstrap
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { reviews } from "../../common/data";

//Import Containers
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

const Client = () => {
  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">
                Whats Our Clients Said About{" "}
                <span className="text-primary">Landrick</span> Project
              </h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Start working with{" "}
                <span className="text-primary fw-bold">
                  Landrick
                </span>{" "}
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>
            </div>
          </Col>
        </Row>

        {/* clients slider */}
        <ReviewsSlider reviews={reviews} colClass="mt-4" />
      </Container>

      <Container className="pb-lg-4 mb-md-5 mb-4 mt-100 mt-60">
        <Row className="justify-content-center">
          <Col xs="12" className="text-center">
            <div className="section-title">
              <h4 className="title mb-4">
                See everything about your employee at one place.
              </h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Start working with{" "}
                <span className="text-primary fw-bold">
                  Landrick
                </span>{" "}
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>

              <div className="mt-4">
                <Link to="#" className="btn btn-primary mt-2 me-2">
                  Get Started Now
                </Link>{" "}
                <Link to="#" className="btn btn-outline-primary mt-2">
                  Free Trial
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Client;
