import React, { useEffect } from 'react';

//Render Components
import Section from "./Section";
import Process from "./Process";
import Review from "./Review";
import PricingAndPayment from "./PricingAndPayment";
import CTA from "./Cta";
import Popup from '../../components/Layout/popup';

const Payments = () => {

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

            {/* Render Section */}
            <Section />

            {/* Render Process */}
            <Process />

            <div className="position-relative">
                <div className="shape overflow-hidden text-light">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section bg-light">
                {/* Render Review */}
                <Review />

                {/* Pricing and Payment */}
                <PricingAndPayment />
            </section>

            {/* CTA */}
            <CTA />
            <Popup/>
        </React.Fragment>
    );
}

export default Payments;