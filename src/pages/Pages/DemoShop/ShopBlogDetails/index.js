import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import Section from './Section';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopBlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Footer2 />                     
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopBlogDetails;