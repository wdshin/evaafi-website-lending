import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

//import Images
import blog1 from "../../../assets/images/blog/bg1.jpg";
import blog2 from "../../../assets/images/blog/bg2.jpg";
import blog3 from "../../../assets/images/blog/bg3.jpg";

const Slidewithcaption = () => {
    return (
        <React.Fragment>
            <UncontrolledCarousel
                interval={4000}
                indicators={false}
                items={[
                    {
                        altText: "First slide label ",
                        caption: "Your Content",
                        key: 1,
                        src: blog1,
                        className:"bg-home-75vh",
                    },
                    {
                        altText: "Second slide label",
                        caption: "Your Content",
                        key: 2,
                        src: blog2,
                        className:"bg-home-75vh",
                    },
                    {
                        altText: "Third slide label",
                        caption: "Your Content",
                        key: 3,
                        src: blog3,
                        className:"bg-home-75vh",
                    },
                ]}
            />
        </React.Fragment>
    );
}

export default Slidewithcaption;