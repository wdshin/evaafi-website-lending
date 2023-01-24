import React, { useEffect } from 'react';
import Home from "./Home";
import Overview from './Overview';

const Index = () => {

    useEffect(() => {
        document.body.classList = "";
        document.querySelectorAll("#buyButton").forEach((navLink) => {
            navLink.classList.add("btn-light")
            navLink.classList.remove("btn-soft-primary");
            document.getElementById("top-menu").classList.add("nav-light");
        });
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn").classList.remove("btn-light");
      document.querySelector(".settingbtn").classList.remove("btn-light");
      document.querySelector(".shoppingbtn").classList.add("btn-primary");
      document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn")?.classList.remove("btn-primary");
      document.querySelector(".settingbtn")?.classList.remove("btn-soft-primary");
      document.querySelector(".shoppingbtn")?.classList.add("btn-light");
      document.querySelector(".settingbtn").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    };

    return (
        <React.Fragment>
            <Home />
            <Overview />
        </React.Fragment>
    );
}

export default Index;