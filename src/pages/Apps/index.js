// React Basic and Bootstrap
import React, { useEffect } from "react";

// import generic component
import Section from "./Section";
import Feature from "./Feature";
import ShowCase from "./ShowCase";
import Pricing from "./Pricing";
import Testi from "./Testi";
import Popup from "../../components/Layout/popup";

const Index = () => {
  useEffect(() => {
    document.body.classList = "";
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
      }
    }
  };

  return (
    <React.Fragment>
      {/* section */}
      <Section />

      <div className="position-relative">
        <div className="shape overflow-hidden text-light">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* Feature */}
      <Feature />

      {/* ShowCase */}
      <ShowCase />
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* Pricing */}
      <Pricing />

      {/* Testi */}
      <Testi />
      <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <Popup/>
    </React.Fragment>
  );
}

export default Index;
