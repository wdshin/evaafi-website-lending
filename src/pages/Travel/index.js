import React, { useEffect } from "react";

// import component
import Section from "./Section";
import Benefit from "./Benefit";
import PopularDestination from "./PopularDestination";
import Luxury from "./Luxury";
import Guarantee from "./Guarantee";
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import Popup from "../../components/Layout/popup";
import { Container } from "reactstrap";
import { reviews } from "../../common/data";

const Index = () => {

  useEffect(() => {
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
      document.getElementById("top-menu").classList.add("nav-light");
    });
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn").classList.remove("btn-light");
      document.querySelector(".settingbtn").classList.remove("btn-light");
      document.querySelector(".shoppingbtn").classList.add("btn-primary");
      document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn").classList.remove("btn-primary");
      document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
      document.querySelector(".shoppingbtn").classList.add("btn-light");
      document.querySelector(".settingbtn").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Benefit />
        <PopularDestination />
      </section>
      <section className="section bg-light">
        <Luxury />
        <Guarantee />
        <Container className=" mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Whats Our Clients Said About Landrick Project"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* clients slider */}
          <ReviewsSlider reviews={reviews} colClass="mt-4" />
        </Container>
      </section>
      <Popup/>
    </React.Fragment>
  );
};
export default Index;
