import React from "react";
import { Col, Container, Row } from "reactstrap";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

//Import images
import seo6 from "../../assets/images/seo/6.png";
import seo4 from "../../assets/images/seo/4.png";
import seo7 from "../../assets/images/seo/7.png";
import seo5 from "../../assets/images/seo/5.png";
import seo3 from "../../assets/images/seo/3.png";
import seo1 from "../../assets/images/seo/1.png";
import seo2 from "../../assets/images/seo/2.png";
import seo8 from "../../assets/images/seo/8.png";

const ImageSection = () => {
  const imageSectiondata = [
    {
      id: 1,
      img: seo8,
    },
    {
      id: 2,
      img: seo6,
    },
    {
      id: 3,
      img: seo4,
    },

    {
      id: 5,
      img: seo5,
    },
    {
      id: 4,
      img: seo7,
    },
    {
      id: 6,
      img: seo3,
    },
    {
      id: 7,
      img: seo1,
    },
    {
      id: 8,
      img: seo2,
    },
  ];
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <div className="features-absolute">
              <Row id="grid">
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                  <Masonry columnsCount={3}>
                    {imageSectiondata.map((item, key) => (
                      <Col key={key} className="col-12 spacing picture-item">
                        <img src={item.img} className="img-fluid shadow seo-hero-widget rounded-md" alt="" />
                      </Col>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ImageSection;
