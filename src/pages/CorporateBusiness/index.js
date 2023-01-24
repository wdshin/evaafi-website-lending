import React, { Component } from "react";
//Import file
import Section from "./Section";
import Feature from "./Feature";
import KeyFeature from "./KeyFeature";
import ExperienceTeam from "./ExperienceTeam";
import Pricing from "./Pricing";
import Client from "./Cilent";
import Blog from "../ITSolution/Blog";
import NavBar from "./NavBar";
import Footer5 from "../Pages/PageFooterLayouts/Footer5";
import Popup from "../../components/Layout/popup";
import ThemeSwitcher from "../../components/Layout/ThemeSwitcher";

export default class index extends Component {

  render() {
    return (
      <React.Fragment>        
        <NavBar />
        {/* import Section */}
        <Section />

        {/* import Feature */}
        <Feature />

        {/* Key Feature */}
        <KeyFeature />

        {/* ExperienceTeam */}
        <ExperienceTeam />

        {/* Pricing */}
        <section className="section">
          <Pricing />

          {/* Client */}
          <Client />

          {/* Blog */}
          <Blog />
        </section>
        <Footer5 />
        
        <ThemeSwitcher/>
        <Popup/>
      </React.Fragment>
    );
  }
}
