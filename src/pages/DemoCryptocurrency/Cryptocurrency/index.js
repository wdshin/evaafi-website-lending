import React, { Component } from "react";

//Import Components
import Section from "./Section";
import ListTable from "./ListTable";
import Process from "./Process";
import Counter from "./Counter";
import Features from "./Features";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Popup from "../../../components/Layout/popup";

class Cryptocurrency extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('active')
      document.querySelector(".shoppingbtn").classList.remove("btn-light");
    }, 200);
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {

      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
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

      // document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn").classList.add("btn-primary");
      document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
      // document.querySelector(".shoppingbtn").classList.add("btn-light");
      document.querySelector(".settingbtn").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Render NavBar */}
        <NavBar isLight={true} />

        {/* Render Section */}
        <Section />

        <section className="section border-top">
          {/* Render table */}
          <ListTable />

          {/* Process */}
          <Process />
        </section>

        {/* Counter */}
        <Counter />

        <section className="section">
          {/* Features */}
          <Features />

          {/* Faq */}
          <Faq />

          {/* testimonials */}
          <Testimonials />
        </section>

        {/* render Footer */}
        <Footer />

        <Popup/>
      </React.Fragment>
    );
  }
}

export default Cryptocurrency;
