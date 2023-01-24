import React, { Component } from 'react';
import NavBar from '../NavBar';
import { Container, Row } from 'reactstrap';

import Footer from "../../../../components/Layout/Footer";
import Section from "./Section";
import Sidebar from './Sidebar';
import ListPage from './ListPage';
import SearchSection from './SearchSection';
import ThemeSwitcher from '../../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../../components/Layout/backToTop';

class JobListOne extends Component {

    componentDidMount() {
        document.body.classList = "";
        document.querySelectorAll("#buyButton").forEach((navLink) => {
            navLink.classList.add("btn-light")
            navLink.classList.remove("btn-soft-primary");
        });
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
          document.querySelector(".shoppingbtn").classList.remove("btn-light");
          document.querySelector(".settingbtn").classList.remove("btn-light");
          document.querySelector(".shoppingbtn").classList.add("btn-primary");
          document.querySelector(".settingbtn").classList.add("btn-soft-primary");
          document.getElementById("topnav").classList.add("nav-sticky");
        } else {
          document.querySelector(".shoppingbtn").classList.remove("btn-primary");
          document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
          document.querySelector(".shoppingbtn").classList.add("btn-light");
          document.querySelector(".settingbtn").classList.add("btn-light");
          document.getElementById("topnav").classList.remove("nav-sticky");
        }
      };

    render() {
        return (
            <React.Fragment>
                {/* import NavBar */}
                <NavBar />
                <Section />

                <section className="section">
                    <SearchSection />

                    <Container className="mt-5 mt-sm-0">
                        <Row>
                            <Sidebar />
                            <ListPage />
                        </Row>
                    </Container>
                </section>

                {/* import Footer */}
                <Footer />

                <BackToTop />
                <ThemeSwitcher/>
                
            </React.Fragment>
        );
    }
}

export default JobListOne;