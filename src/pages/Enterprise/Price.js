// React Basic and Bootstrap
import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";
import BlogBox from "../../components/Shared/BlogBox";
import { enterpricePricings, enterpriceBlogs } from "../../common/data";

const Price = () => {  
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Charge your creative inspiration"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row id="pricing">
              {/* pricing */}
              <Pricing pricings={enterpricePricings} />
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Latest News"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* blog box */}
              <BlogBox blogs={enterpriceBlogs} />
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Schedule a demo with us"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="justify-content-center mt-4 pt-2">
              <Col lg="7" md="10">
                <div className="subcribe-form">
                  <form className="ms-0">
                    <input type="email" id="email" name="email" className="rounded-pill border" placeholder="E-mail :" />
                    <button type="submit" className="btn btn-pills btn-primary">Submit <i className="uil uil-arrow-right"></i></button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );  
}

export default Price;
