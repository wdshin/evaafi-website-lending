import React from "react";
import { Container } from "reactstrap";

//Import Containers
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import { reviews } from "../../common/data";

const Testimonials = () => {
  return (
    <React.Fragment>
      <Container>
        {/* section title */}
        <SectionTitle
          title="Our Testimonial"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
        />

        {/* clients slider */}
        <ReviewsSlider reviews={reviews} colClass="mt-4" />
      </Container>
    </React.Fragment>
  );
};

export default Testimonials;
