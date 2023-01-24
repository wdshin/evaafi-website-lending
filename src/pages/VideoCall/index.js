import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import Client from './Client';
import Features from './Features';
import Group from './Group';
import Section from './Section';
import SectionTitle from '../../components/Shared/SectionTitle';
import ReviewsSlider from '../../components/Shared/ReviewsSlider';
import Popup from '../../components/Layout/popup';
import { reviews } from "../../common/data";

//Import Images
import Encryption from './Encryption';

const VideoCall = () => {
    useEffect(() => {
        document.body.classList = "";
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
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
    };

    return (
        <React.Fragment>
            {/* import section */}
            <Section />
            {/* import partners */}
            <Client />
            <section className="section bg-light">
                <Features />
                <Group />
            </section>
            <section className="section">
                <Container>
                    <SectionTitle
                        title="Some of our happy customers"
                        desc=" that can provide everything you need to generate awareness, drive traffic, connect."
                    />
                    <ReviewsSlider reviews={reviews} colclassName="mt-4" />
                </Container>
                <Encryption />
            </section>
            <Popup/>
        </React.Fragment>
    );
};
export default VideoCall;
