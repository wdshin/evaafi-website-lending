import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import Blog from './Blog';
import Section from './Section';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Blog />
                <Footer2 />
                <ThemeSwitcher />
            </React.Fragment>
        );
    }
}

export default ShopBlog;