// React Basic and Bootstrap
import React, { Component } from "react";

// Import Generic components
import Section from "./Section";
import Feature from "./Feature";
import Description from "./Description";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Popup from "../../components/Layout/popup";

class Index extends Component {
  componentDidMount() {
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
      }
    }
  };

  render() {
    return (
      <React.Fragment>

        {/* Hero Start */}
        <Section />

        {/* Feature */}
        <Feature />

        {/* Description */}
        <Description />

        {/* Testimonial */}
        <Testimonial />

        {/* Gallery */}
        <Gallery />

        {/* Popup */}
        <Popup />
      </React.Fragment>
    );
  }
}

export default Index;
