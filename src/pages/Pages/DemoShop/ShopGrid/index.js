import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import Grid from './Grid';
import Section from './Section';
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Grid />
                <Footer2 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default ShopGrid;