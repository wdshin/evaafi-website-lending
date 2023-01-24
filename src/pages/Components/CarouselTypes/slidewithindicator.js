import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

// Carousel images
import img1 from "../../../assets/images/blog/slide01.jpg";
import img2 from "../../../assets/images/blog/slide02.jpg";
import img3 from "../../../assets/images/blog/slide03.jpg";

const Slidewithindicator = () => {
  return (
    <React.Fragment>
      <UncontrolledCarousel
        interval={4000}
        items={[
          {
            altText: " ",
            caption: " ",
            key: 1,
            src: img1,
            className:"bg-home-75vh",
          },
          {
            altText: " ",
            caption: " ",
            key: 2,
            src: img2,
            className:"bg-home-75vh",
          },
          {
            altText: " ",
            caption: " ",
            key: 3,
            src: img3,
            className:"bg-home-75vh",
          },
        ]}
      />
    </React.Fragment>
  );
}

export default Slidewithindicator;