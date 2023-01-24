import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import Section from './Section';
import ShopGrid from './ShopGrid';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopFullwidthGrids extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <ShopGrid />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopFullwidthGrids;