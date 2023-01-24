import React, { Component } from "react";

// import Component
import Section from "./Section";
import Process from "./Process";
import FeaturedItems from "./FeaturedItems";
import Client from "./Client";
import ExpertsTeam from "./ExpertsTeam";
import Blog from "./Blog";
import Categories from "./Categories";
import Popup from "../../components/Layout/popup";

export default class index extends Component {
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
        {/* Section */}
        <Section />

        <section className="section">
          <Categories />
          <Process />
          <FeaturedItems />
          <Client />
          <ExpertsTeam />
        </section>
        <Blog />
        <Popup/>
      </React.Fragment>
    );
  }
}
