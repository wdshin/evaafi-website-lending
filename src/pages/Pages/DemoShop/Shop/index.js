import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Collection from "./Collection";
import MostViewedProducts from "./MostViewedProducts";
import TopCategories from "./TopCategories";
import PopularProducts from "./PopularProducts";
import Cta from "./Cta";
import RecentProducts from "./RecentProducts";
import NavBar from "./NavBar";
import Footer2 from "../../../Pages/PageFooterLayouts/Footer2";
import Popup from "../../../../components/Layout/popup";
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* import Section */}
        <Section />

        {/* import Collection */}
        <Collection />

        <section className="section">
          <MostViewedProducts />

          <TopCategories />

          <PopularProducts />

          <Cta />

          <RecentProducts />
        </section>
        <Footer2 />

        <Popup/>
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default Index;
