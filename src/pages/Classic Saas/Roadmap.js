import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import CountUp
import Countdown from "react-countdown-now";
//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import logoIcon from '../../assets/images/logo.svg';

// Modal Video
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import "../../../node_modules/swiper/swiper.scss";


const RoadmapData = [
  {
    id: 1,
    date: "December, 2022",
    title: "Planning",
    icon: "uil uil-pen",
  },
  {
    id: 2,
    date: "March, 2023",
    title: "Testnet v1 Starts",
    icon: "uil uil-bitcoin",
    isClass: true,
    istextColor: true,
    isDate: true,
    isTitle: true,
  },
  {
    id: 3,
    date: "April, 2023",
    title: "Mainnet v1 Starts",
    icon: "uil uil-clipboard-blank",
  },
  {
    id: 4,
    date: "April, 2023",
    title: "New assets",
    icon: "uil uil-money-insert",
    isClass: true,
    istextColor: true,
    isDate: true,
    isTitle: true,
  },
  {
    id: 5,
    date: "May, 2023",
    title: "Testnet v2 Starts",
    icon: "uil uil-airplay",
  },
  {
    id: 6,
    date: "June, 2023",
    title: "Mainnet v2 Starts",
    icon: "uil uil-euro-circle",
    isClass: true,
    istextColor: true,
    isDate: true,
    isTitle: true,
  },

];

const Partners = () => {
  const [isOpen, setOpen] = useState(false);


  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return
    } else {
      // Render a countdown
      return (
        <React.Fragment>
          <ul className="count-down list-unstyled m-0">
            <li id="days" className="count-number fw-medium mb-0 list-inline-item px-3">
              {days}
              <p className="count-head">Days</p>
            </li>
            <li id="hours" className="count-number fw-medium mb-0 list-inline-item px-3">
              {hours}
              <p className="count-head">Hours</p>
            </li>
            <li id="mins" className="count-number fw-medium mb-0 list-inline-item px-3">
              {minutes}
              <p className="count-head">Hours</p>
            </li>
            <li id="secs" className="count-number fw-medium mb-0 list-inline-item px-3">
              {seconds}
              <p className="count-head">Seconds</p>
            </li>
            <li id="end" className="h1"></li>
          </ul>

        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>

    

      <section className="section">

        <Container className="mt-100 mt-60">
          <Row>
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Success Roadmap</h4>
                {/* <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
              </div>
            </div>
          </Row>

          <Row>
            <Col className="col-12 mt-4 pt-2">
              <Swiper
                slidesPerView={1}
                // spaceBetween={10}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                breakpoints={{
                  678: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 4,
                  }
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="roadmaps tiny-timeline">
                {RoadmapData.map((item, key) => (
                  <SwiperSlide key={key} className="tiny-slide text-center">
                    <div className={item.isClass ? "card features p-4 border-0 bg-primary item-box" : "card features feature-primary pt-4 border-0 item-box"}>
                      <div className={item.istextColor ? "icon text-center text-white title-dark rounded-pill mx-auto mb-3 fs-5" : "icon text-center text-primary rounded-pill mx-auto mb-3 fs-5"}>
                        <i className={item.icon}></i>
                      </div>
                      <p className={item.isDate ? "text-white-50 mb-0" : "text-muted mb-0"}>{item.date}</p>
                      <h6 className={item.isTitle ? "text-white-50 mb-0 mt-1" : "mb-0 mt-1"}>{item.title}</h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>

      </section>

    </React.Fragment>
  );
};
export default Partners;
