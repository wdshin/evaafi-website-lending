import React from "react";
import { Container } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import { reviews } from "../../common/data";

const Testimonials = () => {

  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        {/* render Section title */}
        <SectionTitle
          title="What Students say ?"
          desc=" that can provide everything you need to generate awareness, drive traffic, connect."
        />

        {/* clients slider */}
        <ReviewsSlider reviews={reviews} colClass="mt-4" />
      </Container>
    </React.Fragment>
  );
};

export default Testimonials;
