import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import AllBlog from './AllBlog';
import Cta from './Cta';
import PopularPost from './PopularPost';
import RecentPost from './RecentPost';
import Search from './Search';
import ThemeSwitcher from '../../../../components/Layout/ThemeSwitcher';
// ImageSlider
import ImageSlider from './ImageSlider';
import Popup from '../../../../components/Layout/popup';

// Css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Component
import Section from './Section';

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Section />
        <section className="section">
          <Search />
          <PopularPost />
          <RecentPost />
          <Cta />
          <AllBlog />
        </section>
        <ImageSlider />
        <Footer />

        <ThemeSwitcher />

        <Popup/>
      </React.Fragment>
    );
  }
}
