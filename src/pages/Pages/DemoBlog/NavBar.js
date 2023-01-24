import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, DropdownToggle, DropdownMenu, Form } from 'reactstrap';

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
            dropdownOpen: false,
            modal: false,
        };
        this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.toggleDropdown.bind(this);
        this.togglemodal.bind(this);
    }

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };
    togglemodal = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };

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
                document.querySelector(".shoppingbtn").classList.add("btn-primary");
                document.querySelector(".shoppingbtn").classList.remove("btn-light");
                document.querySelector(".settingbtn").classList.add("btn-soft-primary");
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
                <header id="topnav" className="defaultscroll sticky bg-white">
                    <Container>

                        <Link className="logo" to="/">
                            <img src={logoDark} height="24" className="logo-light-mode" alt="" />
                            <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                        </Link>

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
                            <li className="list-inline-item mb-0 pe-1">
                                <Dropdown
                                    isOpen={this.state.dropdownOpen}
                                    toggle={this.toggleDropdown}
                                >
                                    <DropdownToggle
                                        color="none"
                                        type="button"
                                        className="btn btn-link text-decoration-none p-0"
                                    >
                                        <i className="uil uil-search text-dark fs-5 align-middle"></i>
                                    </DropdownToggle>
                                    <DropdownMenu
                                        end
                                        className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                                        style={{ width: "300px" }}
                                    >
                                        <div className='search-bar'>
                                            <div id="itemSearch" className="menu-search mb-0">
                                                <Form className="searchform">
                                                    <input
                                                        type="text"
                                                        id="text"
                                                        name="name"
                                                        className="form-control border rounded"
                                                        placeholder="Search..."
                                                    />
                                                </Form>
                                            </div>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>{" "}

                            <li className="list-inline-item mb-0">
                                <Link to="#" onClick={this.toggleRightDrawer} disabled={this.state.open}>
                                    <div id="buyButton" className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                                        <FeatherIcon
                                            icon="settings"
                                            className="fea icon-sm"
                                        />
                                    </div>
                                </Link>
                            </li>{" "}

                            <li className="list-inline-item ps-1 mb-0">
                                <Link to="//1.envato.market/landrickreactjs" target="_blank">
                                    <div id="buyButton" className="btn btn-icon btn-pills btn-primary shoppingbtn">
                                        <FeatherIcon
                                            icon="shopping-cart"
                                            className="fea icon-sm"
                                        />
                                    </div>
                                </Link>
                            </li>
                        </ul>


                        <div id="navigation">

                            <ul className="navigation-menu">
                                <li><Link to="/index-blog" className="sub-menu-item">Home</Link></li>

                                <li><Link to="/blog-about" className="sub-menu-item">About</Link></li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#">Post</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                        <li><Link to="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                        <li><Link to="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                                        <li><Link to="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                        <li><Link to="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                        <li><Link to="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                        <li><Link to="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                        <li><Link to="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li><Link to="#" className="sub-menu-item">Lifestyle</Link></li>

                                <li><Link to="#" className="sub-menu-item">Technology</Link></li>
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