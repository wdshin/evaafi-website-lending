import React, { useEffect } from "react";
import { Container } from 'reactstrap';
import Section from "./Section";
import ImageSection from "./ImageSection";
import WorkProcess from "./WorkProcess";
import Feature from "./Feature";
import Website from "./Website";
import Rate from "./Rate";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import Popup from "../../components/Layout/popup";
import { reviews } from "../../common/data";

const Index = () => {
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
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        document.querySelector(".shoppingbtn").classList.remove("btn-light");
        document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      }
    }
  };
  return (
    <React.Fragment>
      {/* Section */}
      <Section />

      {/* Second section start */}
      <section className="section">
        <ImageSection />
        <WorkProcess />
        <Feature />
        <Website />
        <Rate />
        <Container className="mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Client Reviews"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* clients slider */}
          <ReviewsSlider reviews={reviews} colClass="mt-4" />
        </Container>
        {/* <Reviews /> */}
      </section>
      <Popup/>
    </React.Fragment>
  );
};
export default Index;
