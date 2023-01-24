// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import client1 from "../../../assets/images/client/amazon.svg";
import client2 from "../../../assets/images/client/google.svg";
import client3 from "../../../assets/images/client/lenovo.svg";
import client4 from "../../../assets/images/client/paypal.svg";
import client5 from "../../../assets/images/client/shopify.svg";
import client6 from "../../../assets/images/client/shopify.svg";

import img01 from "../../../assets/images/client/01.jpg";
import img02 from "../../../assets/images/client/02.jpg";
import img03 from "../../../assets/images/client/03.jpg";
import img04 from "../../../assets/images/client/04.jpg";
import img05 from "../../../assets/images/client/05.jpg";
import img06 from "../../../assets/images/client/06.jpg";
import img07 from "../../../assets/images/client/07.jpg";
import img08 from "../../../assets/images/client/08.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "../../../../node_modules/swiper/swiper.scss";

class Testi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: client1,
          name: "Thomas Israel",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
        },
        {
          id: 2,
          image: client2,
          name: "Carl Oliver",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          id: 3,
          image: client3,
          name: "Barbara McIntosh",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
        },
        {
          id: 4,
          image: client4,
          name: "Jill Webb",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
        },
        {
          id: 5,
          image: client5,
          name: " Dean Tolle",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        },
        {
          id: 6,
          image: client6,
          name: "Christa Smith",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
        },
      ],
      cols: 4,
      step1: true,
      step2: false,
      creatorsData: [
        {
          badgeNo: 1,
          img: img01,
          title: "Jordan Joo",
        },
        {
          badgeNo: 2,
          img: img02,
          title: "Sofia Malik",
        },
        {
          badgeNo: 3,
          img: img03,
          title: "Cristina Murphy",
        },
        {
          badgeNo: 4,
          img: img04,
          title: "Jack Lili",
        },
        {
          badgeNo: 5,
          img: img05,
          title: "Lilia Moris",
        },
        {
          badgeNo: 6,
          img: img06,
          title: "Anderson",
        },
        {
          badgeNo: 7,
          img: img07,
          title: "Joe Moris",
        },
        {
          badgeNo: 8,
          img: img08,
          title: "John Carter",
        },
      ]
    };
    // this.updateWindowSize.bind(this);

  };


  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">
                  Best Creators
                </h4>
                <p className="text-muted para-desc mb-0 mx-auto">Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness,
                  drive traffic, connect.</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 mt-4 pt-2">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                navigation
                breakpoints=  {{
                  678: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 5,
                  }
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}                
                loop={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="tiny-five-item">
                <div className="tiny-slide">
                  {this.state.creatorsData.map((item, key) => (
                    <SwiperSlide key={key}>
                      <Card className="nft nft-primary nft-creator border-0 rounded-md shadow m-2">
                        <CardBody className="p-3">
                          <div className="pb-3 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge bg-soft rounded-pill">No. #{item.badgeNo}</span>

                              <Link to="/nft-explore" className="text-dark h5 mb-0 read-more"><i className="uil uil-arrow-circle-right"></i></Link>
                            </div>
                          </div>

                          <div className="content mt-3">
                            <div className="position-relative text-center">
                              <img src={item.img} className="avatar avatar-small rounded-pill shadow" alt="" />

                              <div className="author mt-2">
                                <Link to="account-profile" className="text-dark h6 name">{item.title}</Link>
                                <small className="d-block fw-bold mt-1">0.75<span className="text-muted">ETH</span></small>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
}

export default Testi;
