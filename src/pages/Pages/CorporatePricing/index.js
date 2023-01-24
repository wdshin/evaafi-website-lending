import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import WhatWeAre from './WhatWeAre';
import Pricing from "./Pricing";
import Client from "../../CorporateBusiness/Cilent";
import Blog from '../../ITSolution/Blog';
import Footer5 from '../PageFooterLayouts/Footer5';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class CorporatePricing extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <div className='section'>
                    <WhatWeAre />
                    <Pricing />
                    <Client />
                    <Blog />
                </div>
                <Footer5 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default CorporatePricing;