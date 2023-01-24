import React, { Component } from "react";

//Import AOS animation
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

//Import Components
import Section from "./section";
import Features from "./features";
import Support from "./support";
import Reviews from "./reviews";
import Ticket from "./ticket";
import Popup from "../../components/Layout/popup";

class Customer extends Component {
  constructor(props, context) {
    super(props, context);
    //Initilize Aos Animation
    AOS.init();
  }

  componentDidMount() {
    //Refresh Aos Animation whenever components will render
    AOS.refresh();

    document.body.classList = "";
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);

    //set AOS atttributes to section title and desc
    var elementsTitle = document.getElementsByName("sectiontitle");
    var elementsDesc = document.getElementsByName("sectiondesc");
    for (var i = 0; i < elementsTitle.length; i++) {
      elementsTitle[i].setAttribute("data-aos", "fade-up");
      elementsTitle[i].setAttribute("data-aos-duration", "1200");
      elementsDesc[i].setAttribute("data-aos", "fade-up");
      elementsDesc[i].setAttribute("data-aos-duration", "1000");
    }

    //set AOS atttributes to slider <Media> tags
    var elements = document.getElementsByName("clientsreview");
    for (var j = 0; j < elements.length; j++) {
      elements[j].setAttribute("data-aos", "fade-up");
      elements[j].setAttribute("data-aos-duration", "1600");
    }

    //set AOS atttributes to footer
    var footer = document.getElementsByName("footercolumn");
    for (var fcol = 0; fcol < footer.length; fcol++) {
      footer[fcol].setAttribute("data-aos", "fade-up");
      footer[fcol].setAttribute("data-aos-duration", "1400");
    }
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

        <section className="section">
          {/* fratures */}
          <Features />

          {/* support */}
          <Support />

          {/* Review */}
          <Reviews />

          {/* ticket */}
          <Ticket />
        </section>
        <Popup/>
      </React.Fragment>
    );
  }
}

export default Customer;
