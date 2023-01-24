import React, { useEffect } from "react";
import Documention from "./Documention";
import KeyFeatures from "./KeyFeatures";
import LandrickTeam from "./LandrickTeam";
import Partners from "./Partners";
import Quick from "./Quick";
import Section from "./Section";
import Popup from "../../components/Layout/popup";

const Index = () => {

  useEffect(() => {
    document.body.classList = "";
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", scrollNavigation, true);
  });

  // Make sure to remove the DOM listener when the component is unmounted.

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

      {/* Partner */}
      <Partners />
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="section">
        <KeyFeatures />
        <Quick />
        <Documention />
        <LandrickTeam />
      </section>
      <Popup/>
    </React.Fragment>
  );
};
export default Index;
