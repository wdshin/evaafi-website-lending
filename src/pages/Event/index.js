// React Basic and Bootstrap
import React, { Component } from "react";

// Import Generic components
import Section from "./section";
import About from "./About";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Cta from "./Cta";
import Price from "./Price";
import News from "./News";
import Popup from "../../components/Layout/popup";

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
      document.getElementById("top-menu").classList.add("nav-light");
    });
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
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

  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* About */}
        <About />

        {/* Speakers */}
        <Speakers />

        {/* Schedule */}
        <Schedule />

        {/* Cta */}
        <Cta />

        {/* Price */}
        <Price />

        {/* News */}
        <News />

        {/* Popup */}
        <Popup />
      </React.Fragment>
    );
  }
}

export default Index;
