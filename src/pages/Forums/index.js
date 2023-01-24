import React, { Component } from 'react';
import Forums from './Forums';
import Section from './Section';
import NavBar from './NavBar';
import Footer from "../../components/Layout/Footer";
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';

//React Drawer
import 'react-drawer/lib/react-drawer.css';

export default class index extends Component {
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
        <Section />
        <Forums />
        <Footer />
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}
