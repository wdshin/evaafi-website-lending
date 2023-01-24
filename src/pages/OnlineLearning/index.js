import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Courses from "./Courses";
import Partners from "../../components/Shared/Partners1";
import About from "./About";
import PopularCourses from "./PopularCourses";
import Cta from "./Cta";
import Instructors from "./Instructors";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Popup from "../../components/Layout/popup";

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("buyButton").classList.add("nav-light");
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
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

  render() {
    return (
      <React.Fragment>
        <Section />

        <Courses />

        <Partners />

        <section className="section">
          <About />

          <PopularCourses />

          <Cta />

          <Instructors />

          <Testimonials />

          <Blog />
        </section>
        <Popup />
      </React.Fragment>
    );
  }
}

export default Index;
