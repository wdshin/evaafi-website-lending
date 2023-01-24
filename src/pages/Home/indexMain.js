// React Basic and Bootstrap
import React, { Component } from 'react';

// Import Generic Components
import Section from "./section";
import Partners from "./Partners"
import HowItWorks from './HowItWorks';
import Testi from './Testi';
import Pricing from './Pricing';
import Faq from './Faq';
import Popup from '../../components/Layout/popup';

class IndexMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.scrollNavigation = this.scrollNavigation.bind(this);
    }

    componentDidMount() {
        document.body.classList = "";
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (navBar != null) {
            if (top > 80) {
                navBar.classList.add("nav-sticky");
            } else {
                navBar.classList.remove("nav-sticky");
                document.querySelector(".shoppingbtn").classList.add("btn-primary");
                document.querySelector(".shoppingbtn").classList.remove("btn-light");
                document.querySelector(".settingbtn").classList.add("btn-soft-primary");
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* Home Section */}
                <Section />

                {/* Partner */}
                <Partners />

                {/* HowItWorks */}
                <HowItWorks />

                {/* Testi */}
                <Testi />

                {/* Pricing */}
                <Pricing />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                {/* Faq */}
                <Faq />

                <div className="position-relative">
                    <div className="shape overflow-hidden text-footer">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <Popup/>

            </React.Fragment>
        );
    }
}

export default IndexMain;
