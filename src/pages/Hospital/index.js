import React, { useEffect } from "react";
import { Container } from "reactstrap";
//Import Components
import AboutUs from "./AboutUs";
import Appointment from "./Appointment";
import Counter from "./Counter";
import QualifiedDoctors from "./QualifiedDoctors";
import Section from "./Section";
import Services from "./Services";
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import Popup from "../../components/Layout/popup";
import { reviews } from "../../common/data";

//Import Images
import BookAppointment from "./BookAppointment";

const Index = () => {

  useEffect(() => {
    document.getElementById("buyButton").classList.add("nav-light");
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
      <Section />
      <Appointment />
      <section className="section">
        <AboutUs />
        <Services />
      </section>
      <Counter />
      <section className="section">
        <QualifiedDoctors />
        <Container className=" mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="What Our Patients Says"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* clients slider */}
          <ReviewsSlider reviews={reviews} colClass="mt-4" />
        </Container>

      </section>
      <BookAppointment />
      <Popup/>
    </React.Fragment>
  );
};
export default Index;
