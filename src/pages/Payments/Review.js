import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewSlider3 from "../../components/Shared/ReviewSlider3";
import { paymentsClientsData } from "../../common/data";

const Review = () => {
  return (
    <React.Fragment>
      <Container>
        {/* Render Section Title */}
        <SectionTitle
          title="What customers say about us"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
        />

        <Row className="justify-content-center">
          <Col lg="12" className="pt-2 mt-2 text-center">
            {/* review-slider */}
            <ReviewSlider3
              clients={paymentsClientsData}
              items={3}
              isBgWhite={true}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Review;
