import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Section from './Section';
import Cart from "./Cart";
import Footer2 from '../../PageFooterLayouts/Footer2';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopCart extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Cart />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopCart;