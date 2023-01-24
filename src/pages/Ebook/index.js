import React, { Component } from "react";

//Import Components
import Section from "./Section";

//Import Components
import AboutBook from "./AboutBook";
// import AboutAuthor from "./AboutAuthor";
import Features from "./Features";
import OtherBooks from "./OtherBooks";
import UpComing from "./UpComing";
import Popup from "../../components/Layout/popup";

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
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

        <section className="section">
          <AboutBook />

          {/* <AboutAuthor /> */}

          <Features />

          <OtherBooks />
        </section>

        <UpComing />

        {/* Popup */}
        <Popup />
      </React.Fragment>
    );
  }
}

export default Index;
