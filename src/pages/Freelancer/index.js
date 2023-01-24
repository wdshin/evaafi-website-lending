import React, { useEffect } from 'react';
import Section from './Section';
import { Col, Container, Row } from 'reactstrap';

import client1 from "../../assets/images/client/amazon.svg";
import client2 from "../../assets/images/client/google.svg";
import client3 from "../../assets/images/client/lenovo.svg";
import client4 from "../../assets/images/client/paypal.svg";
import client5 from "../../assets/images/client/shopify.svg";
import client6 from "../../assets/images/client/spotify.svg";
import bg1 from '../../assets/images/shapes/shape2.png';

import Services from './Services';
import Work from './Work';
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import Cta from './Cta';
import { reviews } from "../../common/data";
import Footer6 from '../Pages/PageFooterLayouts/Footer6';
import Popup from '../../components/Layout/popup';

const Freelancer = () => {
    const partners = [
        { image: client1 },
        { image: client2 },
        { image: client3 },
        { image: client4 },
        { image: client5 },
        { image: client6 },
    ];

    useEffect(() => {
        document.body.classList = "";
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (navBar != null) {
          if (top > 80) {
            navBar.classList.add("nav-sticky");
          } else {
            navBar.classList.remove("nav-sticky");
            document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
            document.querySelector(".shoppingbtn")?.classList.remove("btn-light");
            document.querySelector(".settingbtn")?.classList.add("btn-soft-primary");
          }
        }
      };
    return (
        <React.Fragment>
            {/* import Section */}
            <Section />
            <section className="py-4 border-bottom">
                <Container>
                    {/* partners */}
                    <Row className="justify-content-center">
                        {partners.map((partner, key) => (
                            <Col
                                lg={2}
                                md={2}
                                xs={6}
                                key={key}
                                className="text-center py-4"
                            >
                                <img
                                    src={partner.image}
                                    className="avatar avatar-ex-sm"
                                    alt="Landrick"
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Services />
                <Work />
            </section>
            <section className="section bg-light" style={{ background: `url(${bg1}) center center` }}>
                <Container>
                    <SectionTitle
                        title="How Can We Help You ?"
                        desc="that can provide everything you need to generate awareness, drive traffic, connect."
                    />
                    <ReviewsSlider reviews={reviews} colClass="mt-4" />
                </Container>
            </section>
            <Cta />

            <Footer6 />

            {/* Popup */}
            <Popup />
        </React.Fragment>
    );
};
export default Freelancer;
