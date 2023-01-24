import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

//React Drawer
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import FeatherIcon from "feather-icons-react";
import RightSidebar from '../../components/Layout/RightSidebar';

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

    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
    }

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
        setTimeout(() => {           
            document.querySelector(".shoppingbtn").classList.remove("btn-light");
          }, 200);
        this.initMenu();
        document.body.classList = "";
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
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
    
          // document.getElementById("topnav").classList.add("nav-sticky");
        } else {
          document.querySelector(".shoppingbtn").classList.add("btn-primary");
          document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
          // document.querySelector(".shoppingbtn").classList.add("btn-light");
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

                        {this.props.isLight ?
                            <Link className="logo" to="/">
                                <span className="logo-light-mode">
                                    <img src={logoDark} height="24" className="l-dark" alt="" />
                                    <img src={logoLight} height="24" className="l-light" alt="" />
                                </span>
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                            :
                            <Link className="logo" to="/">
                                <img src={logoDark} height="24" className="logo-light-mode" alt="" />
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                        }
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
                                <Link to="#" onClick={this.toggleRightDrawer}>
                                    <div id="buyButton" className="btn btn-icon btn-pills btn-light settingbtn">
                                        <FeatherIcon
                                            icon="settings"
                                            className="fea icon-sm"
                                        /></div>
                                </Link>
                            </li>{" "}

                            <li className="list-inline-item ps-1 mb-0">
                                <Link to="//1.envato.market/landrickreactjs" target="_blank">
                                    <div id="buyButton" className="btn btn-icon btn-pills btn-primary shoppingbtn">
                                        <FeatherIcon
                                            icon="user"
                                            className="fea icon-sm"
                                        /></div>
                                </Link>
                            </li>
                        </ul>

                        <div id="navigation">
                            <ul className={this.props.isLight ? "navigation-menu  nav-light nav-right" : "navigation-menu nav-right"}>
                                <li><Link to="/index-crypto" className="sub-menu-item">Home</Link></li>
                                <li><Link to="/crypto-about" className="sub-menu-item"> About Us</Link></li>
                                <li><Link to="/crypto-market" className="sub-menu-item">Market</Link></li>
                                <li><Link to="/crypto-token" className="sub-menu-item"> Token</Link></li>
                                <li className="has-submenu parent-parent-menu-item">
                                    <Link to="#">Pages</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/crypto-services" className="sub-menu-item"> Features</Link></li>
                                        <li><Link to="/crypto-faqs" className="sub-menu-item">FAQs </Link></li>
                                        <li><Link to="/crypto-whitepaper" className="sub-menu-item">Whitepaper </Link></li>
                                        <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="/crypto-blog" className="sub-menu-item"> Blog </Link></li>
                                                <li><Link to="/crypto-blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu parent-menu-item"><Link to="#"> Auth pages </Link><span className="submenu-arrow"></span>
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