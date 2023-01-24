// React Basic and Bootstrap
import React, { Component } from "react";

// import generic component
import Section from "./section";
import Features from "./Features";
import Cta from "./Cta";
import Pricing from "./Pricing";
import News from "./News";
import Popup from "../../components/Layout/popup";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("topnav").classList.add("bg-white");
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
        {/* section */}
        <Section />

        {/* Feature */}
        <Features />

        {/* Cta */}
        <Cta />

        {/* Pricing */}
        <Pricing />

        {/* News */}
        <News />
        <Popup/>
      </React.Fragment>
    );
  }
}

export default Index;
