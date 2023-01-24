import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import CheckOut from './CheckOut';
import Section from './Section';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopCheckouts extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <CheckOut />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopCheckouts;