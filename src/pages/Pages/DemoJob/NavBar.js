import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

//import images
import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png";

import FeatherIcon from "feather-icons-react";

//React Drawer
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import RightSidebar from '../../../components/Layout/RightSidebar';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            position: 'right',
        };
        this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
    }
    
    toggleRightDrawer = () => {
        this.setState({ position: 'right' });
        this.setState({ open: !this.state.open });
    };
    onDrawerClose = () => {
        this.setState({ open: false });
    };

    initMenu() {
        this.activateMenu();
    }
    activateMenu() {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');
                const immediateParent = matchingMenuItem.closest('li');
                if (immediateParent) {
                    immediateParent.classList.add('active');
                }
                const parent = matchingMenuItem.closest(".parent-menu-item");
                if (parent) {
                    parent.classList.add('active');
                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }
                    const parentOfParent = parent.closest(".parent-parent-menu-item");
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    const parentOfParent = matchingMenuItem.closest(".parent-parent-menu-item");
                    if (parentOfParent) {
                        parentOfParent.classList.add("active");
                    }
                }

            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.initMenu();
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    UNSAFE_componentWillMount() {
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
            }
        }
    };

    /**
    * Toogle menu in mobile screen
    */
    isToogleMenu = () => {
        const isToggle = document.getElementById("isToggle");
        isToggle.classList.toggle("open");
        var isOpen = document.getElementById('navigation');
        if (isOpen.style.display === "block") {
            isOpen.style.display = "none";
        } else {
            isOpen.style.display = "block";
        }
    };
    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <Container>
                        {this.props.isDark ?
                            <Link className="logo" to="/">
                                <img src={logoDark} height="24" className="logo-light-mode" alt="" />
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                            :
                            <Link className="logo" to="/">
                                <span className="logo-light-mode">
                                    <img src={logoDark} height="24" className="l-dark" alt="" />
                                    <img src={logoLight} height="24" className="l-light" alt="" />
                                </span>
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                        }

                        <div className="menu-extras">
                            <div className="menu-item">

                                <Link to="#" className="navbar-toggle" onClick={this.isToogleMenu} id="isToggle">
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>

                            </div>
                        </div>


                        <ul className="buy-button list-inline mb-0">
                            <li className="list-inline-item mb-0">
                                <Link
                                    to="#"
                                    onClick={this.toggleRightDrawer} disabled={this.state.open}
                                >
                                    <div
                                        id="buyButton"
                                        className="btn btn-icon btn-pills btn-soft-primary settingbtn"
                                    >
                                        <FeatherIcon
                                            icon="settings"
                                            className="fea icon-sm"
                                        />
                                    </div>
                                </Link>
                            </li>{" "}

                            <li className="list-inline-item ps-1 mb-0">
                                <Link
                                    to="//1.envato.market/landrickreactjs"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div id="buyButton" className="btn btn-icon btn-pills shoppingbtn">
                                        <FeatherIcon
                                            icon="shopping-cart"
                                            className="fea icon-sm"
                                        />
                                    </div>
                                </Link>
                            </li>
                        </ul>


                        <div id="navigation">

                            <ul className={this.props.isDark ? "navigation-menu" : "navigation-menu nav-light"}>
                                <li><Link to="/index-job" className="sub-menu-item">Home</Link></li>

                                <li className="has-submenu parent-parent-menu-item">
                                    <Link to="#">Jobs</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-list-one" className="sub-menu-item"> Job List One</Link></li>
                                        <li><Link to="/job-list-two" className="sub-menu-item"> Job List Two</Link></li>
                                        <li><Link to="/job-list-three" className="sub-menu-item"> Job List Three</Link></li>
                                        <li><Link to="/job-list-four" className="sub-menu-item"> Job List Four</Link></li>
                                        <li><Link to="/job-list-five" className="sub-menu-item"> Job List Five</Link></li>
                                        <li className="has-submenu parent-menu-item"><Link to="#"> Job Detail </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="/job-detail-one" className="sub-menu-item"> Job Detail One</Link></li>
                                                <li><Link to="/job-detail-two" className="sub-menu-item"> Job Detail Two</Link></li>
                                                <li><Link to="/job-detail-three" className="sub-menu-item"> Job Detail Three</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/job-apply" className="sub-menu-item"> Job Apply</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#">Candidate</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-candidate-list" className="sub-menu-item">Candidate Listing</Link></li>
                                        <li><Link to="/job-candidate" className="sub-menu-item">Candidate Detail</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#">Company</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-company-list" className="sub-menu-item">Company Listing</Link></li>
                                        <li><Link to="/job-company" className="sub-menu-item">Company Detail</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-parent-menu-item">
                                    <Link to="#">Pages</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-about" className="sub-menu-item">About us</Link></li>
                                        <li><Link to="/job-price" className="sub-menu-item">Pricing</Link></li>
                                        <li><Link to="/job-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li className="has-submenu parent-menu-item">
                                            <Link to="#">Authentication</Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="/auth-bs-login" className="sub-menu-item">Login</Link></li>
                                                <li><Link to="/auth-bs-signup" className="sub-menu-item">Signup</Link></li>
                                                <li><Link to="/auth-bs-reset" className="sub-menu-item">Reset Password</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </header>
                <ReactDrawer
                    open={this.state.open}
                    position={this.state.position}
                    onClose={this.onDrawerClose}
                >
                    <RightSidebar onClose={this.onDrawerClose} />
                </ReactDrawer>
            </React.Fragment>
        );
    }
}

export default NavBar;