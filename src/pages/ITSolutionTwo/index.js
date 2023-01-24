import React, { useEffect } from 'react';

import Section from './Section';
import Features from './Features';
import Aboutus from './Aboutus';
import Business from './Business';
import Cta from './Cta';
import Popup from '../../components/Layout/popup';

const ITSolutionTwo = () => {

  useEffect(() => {
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-primary")
      navLink.classList.remove("btn-soft-primary");
      document.getElementById("top-menu").classList.add("nav-light");
    });
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn")?.classList.remove("btn-light");
      document.querySelector(".settingbtn")?.classList.remove("btn-light");
      document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
      document.querySelector(".settingbtn")?.classList.add("btn-primary");
      document.getElementById("topnav")?.classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn")?.classList.remove("btn-light");
      document.querySelector(".settingbtn")?.classList.remove("btn-light");
      document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
      document.querySelector(".settingbtn")?.classList.add("btn-primary");
      document.querySelector(".settingbtn")?.classList.remove("btn-soft-primary");
      document.getElementById("topnav")?.classList.remove("nav-sticky");
    }
  };
  return (
    <React.Fragment>
      {/* import section */}
      <Section />
      {/* import Features */}
      <Features />
      <section className="section">
        <Aboutus />
        <Business />
      </section>
      <Cta />
      <Popup/>
    </React.Fragment>
  );
};
export default ITSolutionTwo;
