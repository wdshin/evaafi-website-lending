import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Features from "./Features";
import WorkProcess from "../../ITSolution/WorkProcess";
import Cta from "../../ModernBusiness/Cta";
import WhatWeDo from './WhatWeDo';
import Footer5 from '../PageFooterLayouts/Footer5';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class CorporateServices extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <section className="section">
                    <Features />
                    <WorkProcess />
                    <Cta />
                    <WhatWeDo />
                </section>
                <Footer5 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default CorporateServices;