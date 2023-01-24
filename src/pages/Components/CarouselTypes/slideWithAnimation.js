import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

//import Images
import img01 from "../../../assets/images/real/1.jpg";
import img02 from "../../../assets/images/real/2.jpg";
import img03 from "../../../assets/images/real/3.jpg";

const SlideWithAnimation = () => {
    return (
        <React.Fragment>
            <UncontrolledCarousel
                interval={4000}
                items={[
                    {
                        altText: " ",
                        caption: " ",
                        key: 1,
                        src: img01,
                    },
                    {
                        altText: " ",
                        caption: " ",
                        key: 2,
                        src: img02,
                    },
                    {
                        altText: " ",
                        caption: " ",
                        key: 3,
                        src: img03,
                    },
                ]}
            />
        </React.Fragment>
    );
}

export default SlideWithAnimation;