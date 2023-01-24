import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Section from './Section';
import FullWidthList from "./FullWidthList";
import Footer2 from '../../PageFooterLayouts/Footer2';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopFullwidthLists extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <FullWidthList />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopFullwidthLists;