import React, { Component } from 'react';
import Client from '../../CorporateBusiness/Cilent';
import ExperienceTeam from '../../CorporateBusiness/ExperienceTeam';
import NavBar from '../../CorporateBusiness/NavBar';
import Pricing from '../../CorporateBusiness/Pricing';
import AboutUs from '../../Finance/AboutUs';
import Blog from '../../ITSolution/Blog';
import Footer5 from '../PageFooterLayouts/Footer5';
import Section from './Section';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class CorporateAbout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <section className="section">
                    <AboutUs />
                </section>
                <ExperienceTeam />
                <section className="section">
                    <Pricing />
                    <Client />
                    <Blog />
                </section>
                <Footer5 />
                <ThemeSwitcher />

            </React.Fragment>
        );
    }
}

export default CorporateAbout;