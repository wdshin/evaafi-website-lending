import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import BlogDetails from './BlogDetails';
import Section from './Section';
import Footer5 from '../PageFooterLayouts/Footer5';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class CorporateBlogDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <BlogDetails />
                <Footer5 />
                <ThemeSwitcher/>
            </React.Fragment>
        );
    }
}

export default CorporateBlogDetail;