import React from 'react';
import Solutions from "./Solutions";
import AboutUs from './AboutUs';
import CTA from "./CTA";
import Services from './Services';

const index = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Solutions />
                <AboutUs />
                <CTA />
                <Services />
            </section>
        </React.Fragment>
    );
}

export default index;