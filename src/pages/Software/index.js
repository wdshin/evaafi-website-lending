import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Features from "./Featuress";
import BlockContainer from "./BlockContainer";
import WebsiteDescription from "./WebsiteDescription";
import Price from "./Price";
import Reviews from "./Reviews";
import CTA from "./Cta";
import Popup from "../../components/Layout/popup";

class Software extends Component {
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
        {/* render section */}
        <Section />

        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section pt-md-4 pt-5">
          {/* Features */}
          <Features />

          {/* block container */}
          <BlockContainer />

          {/* wesite description */}
          <WebsiteDescription />

          {/* pricing */}
          <Price />

          {/* Reviews */}
          <Reviews />
        </section>

        {/* CTA */}
        <CTA />
        <Popup/>
      </React.Fragment>
    );
  }
}

export default Software;
