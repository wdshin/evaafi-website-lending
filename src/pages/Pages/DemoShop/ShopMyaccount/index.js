import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import MyAccountShop from './MyAccountShop';
import Section from './Section';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopMyaccount extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <MyAccountShop />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopMyaccount;