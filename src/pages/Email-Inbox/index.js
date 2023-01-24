import React, { useEffect } from "react";

// import Component
import Section from "./Section";
import Partners from "../Developer/Partners";
import Features from "./Features";
import Website from "./Website";
import Pricing from "./Pricing";
import SmartPhone from "./SmartPhone";
import Popup from "../../components/Layout/popup";

const Index = () => {

  useEffect(() => {
    document.body.classList = "";
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", scrollNavigation, true);

    var featurebox = document.getElementsByName("featurebox");
    for (var i = 0; i < featurebox.length; i++) {
      if (i !== 0) {
        featurebox[i].classList.add("mt-5");
        featurebox[i].classList.add("mt-sm-0");
      }
    }
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
      {/* Section */}
      <Section />
      {/* Partners */}
      <Partners />
      {/* Features */}
      <Features />    
        {/* Website */}
        <Website />    
      <section className="section bg-light">
        {/* Pricing */}
        <Pricing />
        <SmartPhone />
      </section>
      <Popup />
    </React.Fragment>
  );
};
export default Index;
