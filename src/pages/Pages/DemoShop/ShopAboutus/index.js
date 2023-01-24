import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import FeaturedServices from './FeaturedServices';
import Section from './Section';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopAboutus extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section /> 
                <FeaturedServices />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopAboutus;