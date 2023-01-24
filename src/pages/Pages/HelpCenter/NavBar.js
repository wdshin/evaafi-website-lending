import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import RightSidebar from '../../../../src/components/Layout/RightSidebar';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            open: false,
            position: 'right',
        };
        this.isToogleMenu.bind(this);
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
        console.log('asdads');
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
        const navbar = document.getElementById("topnav");
        if (navbar != null) {
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
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

                            <ul className="navigation-menu nav-left">
                                <li><Link to="/helpcenter-overview" className="sub-menu-item">Helpcenter</Link></li>
                                <li><Link to="/helpcenter-faqs" className="sub-menu-item">FAQS</Link></li>
                                <li><Link to="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                <li><Link to="/helpcenter-support-request" className="sub-menu-item">Support</Link></li>
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