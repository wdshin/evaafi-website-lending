import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Blog from "./Blog";
import Footer5 from '../PageFooterLayouts/Footer5';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class CorporateBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Blog />
                <Footer5 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default CorporateBlog;