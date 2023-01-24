import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, Form } from 'reactstrap';

//import images
import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            modal: false,
        };
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

    componentDidMount() {
        window.scrollTo(0, 0);
        this.initMenu();
        document.body.classList = "";
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        document.querySelector(".shoppingbtn").classList.remove("btn-light");
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
    initMenu() {
        this.activateMenu();
    }

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
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

    /**
   * Toogle menu in mobile screen
   */
    isToogleMenu = () => {
        const isToggle = document.getElementById("isToggle");
        if (isToggle) {
            isToggle.classList.toggle("open");
            var isOpen = document.getElementById('navigation');
            // var navgiationId = isOpen.closest(".submenu");
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
                            <li className="list-inline-item mb-0" id="buyButton">
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
                                        <div className='search-bar settingbtn'>
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
                                    </DropdownMenu>
                                </Dropdown>
                            </li>{" "}

                            <li className="list-inline-item ps-1 mb-0">
                                <Link to="https://1.envato.market/landrick" target="_blank" className="btn btn-icon btn-pills btn-primary shoppingbtn">
                                    <i className="uil uil-wallet"></i></Link>
                            </li>
                        </ul>

                        <div id="navigation">
                            <ul className="navigation-menu">
                                <li><Link to="/index-nft" className="sub-menu-item">Home</Link></li>

                                <li><Link to="/nft-explore" className="sub-menu-item">Explore</Link></li>
                                <li><Link to="/nft-creators" className="sub-menu-item">Creators</Link></li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#">Pages</Link><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/auth-login-bg-video" className="sub-menu-item">Login</Link></li>
                                        <li><Link to="/auth-signup-bg-video" className="sub-menu-item">Signup</Link></li>
                                        <li><Link to="/auth-reset-password-bg-video" className="sub-menu-item">Reset Password</Link></li>
                                        <li><Link to="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li><Link to="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/page-error" className="sub-menu-item">Error</Link></li>
                                        <li><Link to="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                    </ul>
                                </li>

                                <li><Link to="/helpcenter-overview" className="sub-menu-item">Help Center</Link></li>

                                <li><Link to="/page-contact-one" className="sub-menu-item">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default NavBar;