import React from "react";
import { Container } from "reactstrap";

//Import Components
import FeatureTitle from "./FeatureTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import { reviews } from "../../common/data";

const Reviews = () => {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60 pb-md-5 mb-md-5">
          {/* feature title */}
          <FeatureTitle
            maintitle="Reviews"
            title="What our users says!"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
            badgeColor="success"
          />

          {/* clients slider */}
          <ReviewsSlider reviews={reviews} colClass="mt-4" />
        </Container>
      </React.Fragment>
    );  
}

export default Reviews;
