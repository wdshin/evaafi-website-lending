// React Basic and Bootstrap
import React, { useEffect } from "react";

// import generic component
import Section from "./section";
import Feature from "./Feature";
import Faqs from "./Faqs";
import Partners from "../../components/Shared/Partners1";
import Footer6 from "../../pages/Pages/PageFooterLayouts/Footer6";
import Popup from "../../components/Layout/popup";

const Index = () => {

  useEffect(() => {
    document.getElementById("buyButton").classList.add("nav-light");
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", scrollNavigation, true);
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
      {/* Hero Start */}
      <Section />

      {/* partners */}
      <Partners />

      {/* Feature */}
      <Feature />

      {/* Faqs */}
      <Faqs />
      <Footer6/>
      <Popup/>
    </React.Fragment>
  );
}

export default Index;
