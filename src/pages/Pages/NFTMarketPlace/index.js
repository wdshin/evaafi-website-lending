import React from 'react';
import NavBar from './Navbar';
import Section from "./Section";
import Categories from "./Categories";
import CTA from "./CTA";
import Footer3 from "../../../pages/Pages/PageFooterLayouts/Footer3";
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

const Index = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Section />
            <Categories />
            <CTA/>
            <Footer3/>
            <ThemeSwitcher/>
        </React.Fragment>
    );
}

export default Index;