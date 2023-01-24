import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

//import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

//Import Icons
import FeatherIcon from "feather-icons-react";
import RightSidebar from '../../../src/components/Layout/RightSidebar';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            open: false,
            position: 'right',
        };
        this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
    }
    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
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
                    const parentOfParent = parent.closest(".parent-menu-item-sub");
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    const parentOfParent = matchingMenuItem.closest(".parent-menu-item-sub");
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
        document.querySelectorAll("#buyButton").forEach((navLink) => {
            navLink.classList.add("btn-light")
            navLink.classList.remove("btn-soft-primary");
        });
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    UNSAFE_componentWillMount() {
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

    /**
    * Toogle menu in mobile screen
    */
    isToogleMenu = () => {
        const isToggle = document.getElementById("isToggle");
        if (isToggle) {
            isToggle.classList.toggle("open");
            var isOpen = document.getElementById('navigation');
            console.log("navgiationId", isOpen);
            if (isOpen.style.display === "block") {
                isOpen.style.display = "none";
            } else {
                isOpen.style.display = "block";
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <div className="container">

                        <div>
                            <Link className="logo" to="/">
                                <span className="logo-light-mode">
                                    <img src={logoDark} className="l-dark" height="24" alt="" />
                                    <img src={logoLight} className="l-light" height="24" alt="" />
                                </span>
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                        </div>


                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link to="#" className="navbar-toggle" id="isToggle" onClick={this.isToogleMenu}>
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
                                <Link to="#" onClick={this.toggleRightDrawer} disabled={this.state.open}>
                                    <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                                        <FeatherIcon
                                            icon="settings"
                                            className="fea icon-sm"
                                        />
                                    </span></div>
                                </Link>
                                <Link to="#" onClick={this.toggleRightDrawer} disabled={this.state.open}>
                                    <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light shoppingbtn">
                                        <FeatherIcon
                                            icon="settings"
                                            className="fea icon-sm"
                                        />
                                    </span></div>
                                </Link>
                            </li>{" "}

                            <li className="list-inline-item ps-1 mb-0 shoppingbtn">
                                <Link to="//1.envato.market/landrickreactjs" target="_blank">
                                    <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-primary shoppingbtn">
                                        <FeatherIcon
                                            icon="shopping-cart"
                                            className="fea icon-sm"
                                        />

                                    </span></div>
                                    <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light">
                                        <FeatherIcon
                                            icon="shopping-cart"
                                            className="fea icon-sm"
                                        />

                                    </span></div>
                                </Link>
                            </li>
                        </ul>


                        <div id="navigation">

                            <ul className="navigation-menu nav-light">
                                <li><Link to="/index-corporate" className="sub-menu-item">Home</Link></li>
                                <li><Link to="/corporate-about" className="sub-menu-item"> About Us</Link></li>
                                <li><Link to="/corporate-services" className="sub-menu-item">Services</Link></li>
                                <li className="has-submenu parent-menu-item-sub">
                                    <Link to="#">Pages</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/corporate-team" className="sub-menu-item"> Team</Link></li>
                                        <li><Link to="/corporate-pricing" className="sub-menu-item">Pricing</Link></li>
                                        <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="/corporate-blog" className="sub-menu-item"> Blog </Link></li>
                                                <li><Link to="/corporate-blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
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