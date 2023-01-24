import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
// Import Img
import img1 from "../../../../assets/images/blog/travel/01.jpg"
import img2 from "../../../../assets/images/blog/travel/02.jpg"
import img3 from "../../../../assets/images/blog/travel/03.jpg"
import img4 from "../../../../assets/images/blog/travel/04.jpg"
import img5 from "../../../../assets/images/blog/travel/05.jpg"
import img6 from "../../../../assets/images/blog/travel/06.jpg"
import img7 from "../../../../assets/images/blog/travel/07.jpg"
import img8 from "../../../../assets/images/blog/travel/08.jpg"
import img9 from "../../../../assets/images/blog/travel/09.jpg"
import img10 from "../../../../assets/images/blog/travel/10.jpg"
import img11 from "../../../../assets/images/blog/travel/11.jpg"
import img12 from "../../../../assets/images/blog/travel/12.jpg"

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 1000,
    speed: 200,
    slidesToShow: 10,
    slidesToScroll: 2,
  };
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);

  const imageSliderData = [
    {
      id: 1,
      img: img1,
      imgIndex: 0,
    },
    {
      id: 2,
      img: img2,
      imgIndex: 1,
    },
    {
      id: 3,
      img: img3,
      imgIndex: 2,
    },
    {
      id: 4,
      img: img4,
      imgIndex: 3,
    },
    {
      id: 5,
      img: img5,
      imgIndex: 4,
    },
    {
      id: 6,
      img: img6,
      imgIndex: 5,
    },
    {
      id: 7,
      img: img7,
      imgIndex: 6,
    },
    {
      id: 8,
      img: img8,
      imgIndex: 7,
    },

    {
      id: 9,
      img: img9,
      imgIndex: 8,
    },
    {
      id: 10,
      img: img10,
      imgIndex: 9,
    },
    {
      id: 11,
      img: img11,
      imgIndex: 10,
    },
    {
      id: 12,
      img: img12,
      imgIndex: 11,
    },
  ]
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col className="col-12 px-0">
            <Slider {...settings} className="tiny-twelve-item">
            {imageSliderData.map((item, key) => (
              <div key={key} className="tiny-slide">
                <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden" style={{marginBottom: "-7px"}}>
                  <div className="card-img position-relative">
                    <img src={item.img} className="img-fluid" alt="" />
                    <div className="card-overlay"></div>

                    <div className="icons text-center">
                      <Link to="#" className="work-icon bg-white d-inline-block rounded-pill lightbox">
                        <i onClick={() => { setisGallery(true); setphotoIndex(item.imgIndex)}} className="uil uil-instagram"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}     
            </Slider>

            <div className="position-absolute top-50 start-50 translate-middle d-md-block d-none">
              <Link to="#" className="btn btn-sm btn-primary text-uppercase">Follow Now</Link>
            </div>
          </Col>
        </Row>
      </Container>

      {isGallery ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          enableZoom={true}
          onCloseRequest={() => {
            setisGallery(false);
          }}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % images.length);
          }}
          imageCaption={"Project " + parseFloat(photoIndex + 1)}
        />
      ) : null}
    </React.Fragment>
  )
}

export default ImageSlider;

