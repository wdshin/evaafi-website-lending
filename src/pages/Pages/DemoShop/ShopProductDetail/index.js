import React, { Component } from 'react';
import NavBar from "../Shop/NavBar";
import Footer2 from '../../PageFooterLayouts/Footer2';
import ProductDetails from './ProductDetails';
import Section from './Section';
import Cta from "./Cta";
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

class ShopProductDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <section className="section pb-0">
                <ProductDetails />
                <Cta />
                </section>
                <Footer2 />   
                <ThemeSwitcher/>            
            </React.Fragment>
        );
    }
}

export default ShopProductDetail;