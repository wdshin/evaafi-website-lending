// React Basic and Bootstrap
import React, { Component } from "react";
import Footer4 from "../../PageFooterLayouts/Footer4";
import NavBar from "./NavBar";

// Import Generic components
import Section from "./Section";
import Work from "./Work";
import Popup from "../../../../components/Layout/popup";
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
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
        <NavBar />
        {/* Hero Start */}
        <Section />

        {/* Work  */}
        <Work />
        <Footer4 />

        <ThemeSwitcher/>
        <Popup/>
      </React.Fragment>
    );
  }
}

export default Index;
