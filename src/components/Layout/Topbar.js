import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import {
  Container,
  Form,
  Modal,
  ModalBody,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import images
import logo from '../../assets/images/logo.svg';
// import logolight from '../../assets/images/logo-light.png';
import shop1 from '../../assets/images/shop/product/s-1.jpg';
import shop2 from '../../assets/images/shop/product/s-2.jpg';
import shop3 from '../../assets/images/shop/product/s-3.jpg';

import NavbarButtons from '../Shared/NavbarButtons';
import appStore from "../../assets/images/app/app-store.png";
import playStore from "../../assets/images/app/play-store.png";

import corporate from '../../assets/images/demo/corporate.png';
import crypto from '../../assets/images/demo/crypto.png';
import shop from '../../assets/images/demo/shop.png';
import portfolio from '../../assets/images/demo/portfolio.png';
import helpCenter from '../../assets/images/demo/help-center.png';
import hosting from '../../assets/images/demo/hosting.png';
import job from '../../assets/images/demo/job.png';
import forums from '../../assets/images/demo/forums.png';
import blog from '../../assets/images/demo/blog.png';
import nft from "../../assets/images/demo/nft.png";
import RightSidebar from './RightSidebar';

// menu
// import { navLinks } from './menu';
// import { MenuItem } from './NavBarComponents';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      wishlistModal: false,
      dropdownIsOpen: false,
      open: false,
      position: 'right',
      dropdownOpen: false,
      landing: false,
      components: false,
      demo: false,
      doc: false,
      pages: false,
      company: false,
      account: false,
      email: false,
      blog: false,
      case: false,
      auth: false,
      login: false,
      signup: false,
      reset: false,
      utility: false,
      special: false,
      contact: false,
      multi: false,
      level2: false
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.toggleDropdown.bind(this);
    this.togglemodal.bind(this);
  }

  /** 
  * Right sidebar drawer 
  **/

  toggleRightDrawer = () => {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  };
  onDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };
  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

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

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  initMenu() {
    this.activateParentDropdown();
  }


  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  activateParentDropdown() {
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
        const parent = immediateParent.closest(".parent-menu-item");

        if (parent) {
          parent.classList.add('active');

          var parentMenuitem = parent.querySelector('a');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = parent.closest(".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          parentOfParent = matchingMenuItem.closest(".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
      return false;
    }
    return false;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.initMenu();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.tagline ? this.props.tagline : null}        

        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>
              {this.props.hasDarkTopBar ? (
                <Link className="logo" to="/">
                  <img
                    src={logo}
                    height="100%"
                    className="logo-light-mode"
                    alt=""
                  />
                  {/* <img
                    src={logolight}
                    height="24"
                    className="logo-dark-mode"
                    alt=""
                  /> */}
                </Link>
              ) : (
                <Link className="logo" to="/">
                  <span className="logo-light-mode">
                    {/* <img src={logodark} className="l-dark" alt="" /> */}
                    {/* <img
                      src={logolight}
                      className="l-light"
                      height="24"
                      alt=""
                    /> */}
                  </span>
                  {/* <img
                    src={logolight}
                    height="24"
                    className="logo-dark-mode"
                    alt=""
                  /> */}
                </Link>
              )}
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? 'navbar-toggle open' : 'navbar-toggle'
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            {(() => {
              if (this.props.location.pathname === '/index-developer') {
                return <NavbarButtons />;
              }
              else if (
                this.props.location.pathname === '/index-it-solution-two'
              ) {
                return (
                  <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggleDropdown}
                      >
                        <DropdownToggle
                          color="none"
                          type="button"
                          className="btn-link text-decoration-none dropdown-toggle p-0 pe-2"
                        >
                          <i className="uil uil-search text-muted"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          end
                          className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0"
                          style={{ width: "300px" }}
                        >
                          <div className='search-bar'>
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
                    <li className="list-inline-item mb-0">
                      <Link to="#" onClick={this.toggleRightDrawer}>
                        <div className="btn btn-icon btn-pills btn-primary settingbtn">
                          <FeatherIcon
                            icon="settings"
                            className="fea icon-sm"
                          />
                        </div>
                      </Link>
                    </li>{" "}
                  
                  </ul>
                );
              }
              else if (
                this.props.location.pathname === '/shop-grids' ||
                this.props.location.pathname === '/shop-lists'
              ) {
                return (
                  <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggleDropdown}
                      >
                        <DropdownToggle
                          direction="right"
                          color="none"
                          type="button"
                          className="btn btn-link text-decoration-none p-0 pe-2"
                        >
                          <i className="mdi mdi-magnify h4 text-muted"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          end
                          className="dd-menu bg-white shadow rounded border-0 mt-3 py-0"
                          style={{ width: '300px' }}
                        >
                          <Form>
                            <input
                              type="text"
                              id="text"
                              name="name"
                              className="form-control border bg-white"
                              placeholder="Search..."
                            />
                          </Form>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mb-0 pe-1">
                      <Dropdown
                        isOpen={this.state.dropdownOpenShop}
                        toggle={this.toggleDropdownShop}
                      >
                        <DropdownToggle
                          type="button"
                          className="btn btn-icon btn-soft-primary "
                        >
                          <i className="uil uil-shopping-cart align-middle icons"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          direction="left"
                          className="dd-menu bg-white shadow rounded border-0 mt-3 p-4"
                          style={{ width: '300px' }}
                        >
                          <div className="pb-4">
                            <Link to="#" className="media align-items-center">
                              <img
                                src={shop1}
                                className="shadow rounded"
                                style={{ maxWidth: '64px' }}
                                alt=""
                              />
                              <div className="flex-1 text-start ms-3">
                                <h6 className="text-dark mb-0">T-shirt (M)</h6>
                                <p className="text-muted mb-0">$320 X 2</p>
                              </div>
                              <h6 className="text-dark mb-0">$640</h6>
                            </Link>

                            <Link
                              to="#"
                              className="media align-items-center mt-4"
                            >
                              <img
                                src={shop2}
                                className="shadow rounded"
                                alt=""
                                style={{ maxWidth: '64px' }}
                              />
                              <div className="flex-1 text-start ms-3">
                                <h6 className="text-dark mb-0">Bag</h6>
                                <p className="text-muted mb-0">$50 X 5</p>
                              </div>
                              <h6 className="text-dark mb-0">$250</h6>
                            </Link>

                            <Link
                              to="#"
                              className="media align-items-center mt-4"
                            >
                              <img
                                src={shop3}
                                className="shadow rounded"
                                style={{ maxWidth: '64px' }}
                                alt=""
                              />
                              <div className="flex-1 text-start ms-3">
                                <h6 className="text-dark mb-0">Watch (Men)</h6>
                                <p className="text-muted mb-0">$800 X 1</p>
                              </div>
                              <h6 className="text-dark mb-0">$800</h6>
                            </Link>
                          </div>

                          <div className="media align-items-center justify-content-between pt-4 border-top">
                            <h6 className="text-dark mb-0">Total($):</h6>
                            <h6 className="text-dark mb-0">$1690</h6>
                          </div>

                          <div className="mt-3 text-center">
                            <Link to="#" className="btn btn-primary me-2">
                              View Cart
                            </Link>
                            <Link to="#" className="btn btn-primary">
                              Checkout
                            </Link>
                          </div>
                          <p className="text-muted text-start mt-1 mb-0">
                            *T&C Apply
                          </p>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mb-0 pe-1">
                      <Link
                        to="#"
                        className="btn btn-icon btn-soft-primary"
                        onClick={this.toggleWishlistModal}
                      >
                        <i className="uil uil-heart align-middle icons"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        color="primary"
                        isOpen={this.state.dropdownIsOpen}
                        toggle={this.toggleDropdownIsOpen}
                      >
                        <DropdownToggle
                          type="button"
                          className="btn btn-icon btn-soft-primary"
                        >
                          <i className="uil uil-user align-middle icons"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          direction="left"
                          className="dd-menu bg-white shadow rounded border-0 mt-3 py-3"
                          style={{ width: '200px' }}
                        >
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-user align-middle me-1"></i>{' '}
                            Account
                          </Link>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-clipboard-notes align-middle me-1"></i>{' '}
                            Order History
                          </Link>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-arrow-circle-down align-middle me-1"></i>{' '}
                            Download
                          </Link>
                          <div className="dropdown-divider my-3 border-top"></div>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-sign-out-alt align-middle me-1"></i>{' '}
                            Logout
                          </Link>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  </ul>
                );
              }
              else if (
                this.props.location.pathname === '/index-apps' ||
                this.props.location.pathname === '/index-classic-app' ||
                this.props.location.pathname === '/index-job'
              ) {
                return (
                  <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                      <Link to="#" className="btn btn-icon btn-light">
                        <img src={appStore} className="avatar avatar-ex-small p-1" alt="" />
                      </Link>
                    </li>{" "}

                    <li className="list-inline-item mb-0">
                      <Link to="#" className="btn btn-icon btn-light">
                        <img src={playStore} className="avatar avatar-ex-small p-1" alt="" />
                      </Link>
                    </li>
                  </ul>
                );
              }
              else {
                return (
                  <ul className="buy-button list-inline mb-0">
                   

                  <Link
                    to="#"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    App
                    <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span>
                  </Link>
                  </ul>
                );
              }
            })()}

            <div id="navigation" style={{ display: this.state.isOpen ? 'block' : 'none' }}>

              <ul className="navigation-menu nav-dark" id="top-menu">
                <li><Link to="/index" className="sub-menu-item">Home</Link></li>
                <li className="has-submenu parent-parent-menu-item">
                  {/* <Link to="#" onClick={() => this.setState({ landing: !this.state.landing })}>Landing</Link><span className="menu-arrow"></span> */}
                  <ul className={classnames("submenu megamenu", { open: this.state.landing })}>
                    <li>
                      <ul>
                        <li className="megamenu-head"><i className="uil uil-book-open fs-6 align-middle"></i> Landing Pages</li>
                        <li><Link to="/index-saas" className="sub-menu-item">Saas</Link></li>
                        <li><Link to="/index-classic-saas" className="sub-menu-item">Classic Saas</Link></li>
                        <li><Link to="/index-agency" className="sub-menu-item">Agency</Link></li>
                        <li><Link to="/index-apps" className="sub-menu-item">Application</Link></li>
                        <li><Link to="/index-classic-app" className="sub-menu-item">Classic Application</Link></li>
                        <li><Link to="/index-studio" className="sub-menu-item">Studio</Link></li>
                        <li><Link to="/index-marketing" className="sub-menu-item">Marketing</Link></li>
                        <li><Link to="/index-enterprise" className="sub-menu-item">Enterprise</Link></li>
                        <li><Link to="/index-services" className="sub-menu-item">Service</Link></li>
                        <li><Link to="/index-payments" className="sub-menu-item">Payments</Link></li>
                        <li><Link to="/index-it-solution" className="sub-menu-item">IT Solution </Link></li>
                        <li><Link to="/index-it-solution-two" className="sub-menu-item">IT Solution Two </Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        {/* <li className="megamenu-head"><i className="uil uil-book-open fs-6 align-middle"></i> Landing Pages</li> */}
                        <li><Link to="/index-developer" className="sub-menu-item">Developer</Link></li>
                        <li><Link to="/index-seo-agency" className="sub-menu-item">SEO Agency</Link></li>
                        <li><Link to="/index-hospital" className="sub-menu-item">Hospital</Link></li>
                        <li><Link to="/index-coworking" className="sub-menu-item">Coworking</Link></li>
                        <li><Link to="/index-business" className="sub-menu-item">Business</Link></li>
                        <li><Link to="/index-modern-business" className="sub-menu-item">Modern Business</Link></li>
                        <li><Link to="/index-finance" className="sub-menu-item">Finance </Link></li>
                        <li><Link to="/index-logistics" className="sub-menu-item">Delivery & Logistics </Link></li>
                        <li><Link to="/index-social-marketing" className="sub-menu-item">Social Media</Link></li>
                        <li><Link to="/index-digital-agency" className="sub-menu-item">Digital Agency</Link></li>
                        <li><Link to="/index-customer" className="sub-menu-item">Customer</Link></li>
                        <li><Link to="/index-software" className="sub-menu-item">Software</Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head"><i className="uil uil-book-open fs-6 align-middle"></i> Landing Pages</li>
                        <li><Link to="/index-hotel" className="sub-menu-item">Hotel</Link></li>
                        <li><Link to="/index-construction" className="sub-menu-item">Construction</Link></li>
                        <li><Link to="/index-real-estate" className="sub-menu-item">Real Estate</Link></li>
                        <li><Link to="/index-videocall" className="sub-menu-item">Video Conference </Link></li>
                        <li><Link to="/index-blockchain" className="sub-menu-item">Blockchain </Link></li>
                        <li><Link to="/index-crypto-two" className="sub-menu-item">Cryptocurrency Two </Link></li>
                        <li><Link to="/index-integration" className="sub-menu-item">Integration</Link></li>
                        <li><Link to="/index-task-management" className="sub-menu-item">Task Management </Link></li>
                        <li><Link to="/index-email-inbox" className="sub-menu-item">Email Inbox </Link></li>
                        <li><Link to="/index-travel" className="sub-menu-item">Travel </Link></li>
                        <li><Link to="/index-course" className="sub-menu-item">Course</Link></li>
                        <li><Link to="/index-online-learning" className="sub-menu-item">Online Learning</Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head"><i className="uil uil-book-open fs-6 align-middle"></i> Landing Pages</li>
                        <li><Link to="/index-insurance" className="sub-menu-item">Insurance</Link></li>
                        <li><Link to="/index-single-product" className="sub-menu-item">Product</Link></li>
                        <li><Link to="/index-car-riding" className="sub-menu-item">Car Ride</Link></li>
                        <li><Link to="/index-landing-one" className="sub-menu-item">Landing One </Link></li>
                        <li><Link to="/index-landing-two" className="sub-menu-item">Landing Two </Link></li>
                        <li><Link to="/index-landing-three" className="sub-menu-item">Landing Three </Link></li>
                        <li><Link to="/index-landing-four" className="sub-menu-item">Landing Four</Link></li>
                        <li><Link to="/index-personal" className="sub-menu-item">Personal</Link></li>
                        <li><Link to="/index-freelancer" className="sub-menu-item">Freelance </Link></li>
                        <li><Link to="/index-event" className="sub-menu-item">Event</Link></li>
                        <li><Link to="/index-ebook" className="sub-menu-item">E-Book</Link></li>
                        <li><Link to="/index-onepage" className="sub-menu-item">Saas <span className="badge bg-warning ms-2">Onepage</span></Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head"><i className="uil uil-cube fs-6 align-middle"></i> Full Demos</li>
                        <li><Link to="/index-corporate" className="sub-menu-item">Corporate</Link></li>
                        <li><Link to="/index-crypto" className="sub-menu-item">Cryptocurrency</Link></li>
                        <li><Link to="/index-shop" className="sub-menu-item">Shop</Link></li>
                        <li><Link to="/index-portfolio" className="sub-menu-item">Portfolio</Link></li>
                        <li><Link to="/helpcenter-overview" className="sub-menu-item">Help Center</Link></li>
                        <li><Link to="/index-hosting" className="sub-menu-item">Hosting & Domain</Link></li>
                        <li><Link to="/index-job" className="sub-menu-item">Jobs & Careers</Link></li>
                        <li><Link to="/forums" className="sub-menu-item">Forums</Link></li>
                        <li><Link to="/index-blog" className="sub-menu-item">Blog or News</Link></li>
                        <li><Link to="/index-nft" className="sub-menu-item">NFT Marketplace</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  {/* <Link to="#" onClick={() => this.setState({ pages: !this.state.pages })}>Pages</Link><span className="menu-arrow"></span> */}
                  <ul className={classnames("submenu", { open: this.state.pages })}>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ company: !this.state.company })}> Company </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.company })}>
                        <li><Link to="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                        <li><Link to="/page-aboutus-two" className="sub-menu-item"> About Us Two </Link></li>
                        <li><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                        <li><Link to="/page-history" className="sub-menu-item">History </Link></li>
                        <li><Link to="/page-team" className="sub-menu-item"> Team</Link></li>
                        <li><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ account: !this.state.account })}> Account </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.account })}>
                        <li><Link to="/page-profile" className="sub-menu-item">Profile</Link></li>
                        <li><Link to="/page-members" className="sub-menu-item">Members </Link></li>
                        <li><Link to="/page-works" className="sub-menu-item">Works </Link></li>
                        <li><Link to="/page-messages" className="sub-menu-item">Messages </Link></li>
                        <li><Link to="/page-chat" className="sub-menu-item">Chat </Link></li>
                        <li><Link to="/page-payments" className="sub-menu-item">Payments </Link></li>
                        <li><Link to="/page-profile-edit" className="sub-menu-item">Setting</Link></li>
                        <li><Link to="/page-invoice" className="sub-menu-item">Invoice</Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ email: !this.state.email })}> Email Template</Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.email })}>
                        <li><Link to="/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                        <li><Link to="/email-password-reset" className="sub-menu-item">Reset Password</Link></li>
                        <li><Link to="/email-alert" className="sub-menu-item">Alert</Link></li>
                        <li><Link to="/email-invoice" className="sub-menu-item">Invoice</Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ blog: !this.state.blog })}> Blog </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.blog })}>
                        <li><Link to="/page-blog-grid" className="sub-menu-item">Blog Grid</Link></li>
                        <li><Link to="/page-blog-sidebar" className="sub-menu-item">Blog with Sidebar</Link></li>
                        <li><Link to="/page-blog-list" className="sub-menu-item">Blog Listing</Link></li>
                        <li><Link to="/page-blog-list-sidebar" className="sub-menu-item">Blog List & Sidebar</Link></li>
                        <li><Link to="/page-blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                        <li><Link to="/page-blog-detail-two" className="sub-menu-item">Blog Detail 2 </Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ case: !this.state.case })}> Case Study </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.case })}>
                        <li><Link to="/page-all-cases" className="sub-menu-item">All Cases </Link></li>
                        <li><Link to="/page-case-detail" className="sub-menu-item">Case Detail </Link></li>
                      </ul>
                    </li>
                    <li><Link to="/page-course-detail" className="sub-menu-item">Course Detail </Link></li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ auth: !this.state.auth })}> Auth Pages </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.auth })}>
                        <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ login: !this.state.login })}> Login </Link><span className="submenu-arrow"></span>
                          <ul className={classnames("submenu", { open: this.state.login })}>
                            <li><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                            <li><Link to="/auth-cover-login" className="sub-menu-item">Login Cover</Link></li>
                            <li><Link to="/auth-login-three" className="sub-menu-item">Login Simple</Link></li>
                            <li><Link to="/auth-bs-login" className="sub-menu-item">BS5 Login</Link></li>
                            <li><Link to="/auth-login-bg-video" className="sub-menu-item">Login Five</Link></li>
                          </ul>
                        </li>

                        <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ signup: !this.state.signup })}> Signup </Link><span className="submenu-arrow"></span>
                          <ul className={classnames("submenu", { open: this.state.signup })}>
                            <li><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                            <li><Link to="/auth-cover-signup" className="sub-menu-item">Signup Cover</Link></li>
                            <li><Link to="/auth-signup-three" className="sub-menu-item">Signup Simple</Link></li>
                            <li><Link to="/auth-bs-signup" className="sub-menu-item">BS5 Singup</Link></li>
                            <li><Link to="/auth-signup-bg-video" className="sub-menu-item">Singup Five</Link></li>
                          </ul>
                        </li>

                        <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ reset: !this.state.reset })}> Reset password </Link><span className="submenu-arrow"></span>
                          <ul className={classnames("submenu", { open: this.state.reset })}>
                            <li><Link to="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                            <li><Link to="/auth-cover-re-password" className="sub-menu-item">Reset Password Cover</Link></li>
                            <li><Link to="/auth-re-password-three" className="sub-menu-item">Reset Password Simple</Link></li>
                            <li><Link to="/auth-bs-reset" className="sub-menu-item">BS5 Reset Password</Link></li>
                            <li><Link to="/auth-reset-password-bg-video" className="sub-menu-item">Reset Pass Five</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ utility: !this.state.utility })}> Utility </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.utility })}>
                        <li><Link to="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                        <li><Link to="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ special: !this.state.special })}> Special</Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.special })}>
                        <li><Link to="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                        <li><Link to="/page-comingsoon2" className="sub-menu-item">Coming Soon Two</Link></li>
                        <li><Link to="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                        <li><Link to="/page-error" className="sub-menu-item">Error</Link></li>
                        <li><Link to="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ contact: !this.state.contact })}> Contact </Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.contact })}>
                        <li><Link to="/page-contact-detail" className="sub-menu-item">Contact Detail</Link></li>
                        <li><Link to="/page-contact-one" className="sub-menu-item">Contact One</Link></li>
                        <li><Link to="/page-contact-two" className="sub-menu-item">Contact Two</Link></li>
                        <li><Link to="/page-contact-three" className="sub-menu-item">Contact Three</Link></li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ multi: !this.state.multi })}> Multi Level Menu</Link><span className="submenu-arrow"></span>
                      <ul className={classnames("submenu", { open: this.state.multi })}>
                        <li><Link to="/#" className="sub-menu-item">Level 1.0</Link></li>
                        <li className="has-submenu parent-menu-item"><Link to="#" onClick={() => this.setState({ level2: !this.state.level2 })} > Level 2.0 </Link><span className="submenu-arrow"></span>
                          <ul className={classnames("submenu", { open: this.state.level2 })}>
                            <li><Link to="/#" className="sub-menu-item">Level 2.1</Link></li>
                             <li><Link to="/#" className="sub-menu-item">Level 2.2</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><Link to="/footer-layouts" className="sub-menu-item">Footer Layouts </Link></li>
                  </ul>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  {/* <Link to="#" onClick={() => this.setState({ demo: !this.state.demo })}>Demos</Link><span className="menu-arrow"></span> */}
                  <ul className={classnames("submenu megamenu", { open: this.state.demo })}>
                    <li>
                      <ul>
                        <li>
                          <Link to="/index-corporate" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={corporate} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Corporate</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-crypto" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={crypto} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Cryptocurrency</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <Link to="/index-shop" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={shop} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Shop</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-portfolio" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={portfolio} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Portfolio</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <Link to="/helpcenter-overview" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={helpCenter} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Help Center</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-hosting" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={hosting} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Hosting & Domain</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <Link to="/index-job" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={job} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Job & Career</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-forums" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={forums} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Forums</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <Link to="/index-blog" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={blog} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">Blog</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-nft" className="sub-menu-item">
                            <div className="text-lg-center">
                              <span className="d-none d-lg-block"><img src={nft} className="img-fluid rounded shadow-md" alt="" /></span>
                              <span className="mt-lg-2 d-block">NFT Marketplace</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-menu-item">
                  <Link to="#" onClick={() => this.setState({ doc: !this.state.doc })}>Community</Link><span className="menu-arrow"></span>
               <ul className={classnames("submenu", { open: this.state.components })}>
                    <li>
                      <ul>
                        <li><Link to="#" className="sub-menu-item"> Telegram <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span></Link></li>
                        <li><Link to="#" className="sub-menu-item"> Discord <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span></Link></li>
                        <li><Link to="#" className="sub-menu-item"> Reddit <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span></Link></li>
                      </ul>
                    </li>
                    </ul>
                </li>


                <li className="has-submenu parent-parent-menu-item">
                  {/* <Link to="#" onClick={() => this.setState({ components: !this.state.components })}>Components</Link><span className="menu-arrow"></span> */}
                  <ul className={classnames("submenu megamenu", { open: this.state.components })}>
                    <li>
                      <ul>
                        <li><Link to="/ui-button" className="sub-menu-item"><i className="uil uil-cube fs-6 align-middle me-1"></i> Buttons</Link></li>
                        <li><Link to="/ui-badges" className="sub-menu-item"><i className="uil uil-award fs-6 align-middle me-1"></i> Badges</Link></li>
                        <li><Link to="/ui-alert" className="sub-menu-item"><i className="uil uil-info-circle fs-6 align-middle me-1"></i> Alert</Link></li>
                        <li><Link to="/ui-dropdown" className="sub-menu-item"><i className="uil uil-layers fs-6 align-middle me-1"></i> Dropdowns</Link></li>
                        <li><Link to="/ui-typography" className="sub-menu-item"><i className="uil uil-align-center-alt fs-6 align-middle me-1"></i> Typography</Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li><Link to="/ui-background" className="sub-menu-item"><i className="uil uil-palette fs-6 align-middle me-1"></i> Background</Link></li>
                        <li><Link to="/ui-text" className="sub-menu-item"><i className="uil uil-text fs-6 align-middle me-1"></i> Text Color</Link></li>
                        <li><Link to="/ui-accordion" className="sub-menu-item"><i className="uil uil-list-ui-alt fs-6 align-middle me-1"></i> Accordions</Link></li>
                        <li><Link to="/ui-card" className="sub-menu-item"><i className="uil uil-postcard fs-6 align-middle me-1"></i> Cards</Link></li>
                        <li><Link to="/ui-tooltip-popover" className="sub-menu-item"><i className="uil uil-backspace fs-6 align-middle me-1"></i> Tooltips & Popovers</Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li><Link to="/ui-shadow" className="sub-menu-item"><i className="uil uil-square-full fs-6 align-middle me-1"></i> Shadows</Link></li>
                        <li><Link to="/ui-border" className="sub-menu-item"><i className="uil uil-border-out fs-6 align-middle me-1"></i> Border</Link></li>
                        <li><Link to="/ui-carousel" className="sub-menu-item"><i className="uil uil-sliders-v fs-6 align-middle me-1"></i> Carousel</Link></li>
                        <li><Link to="/ui-form" className="sub-menu-item"><i className="uil uil-notes fs-6 align-middle me-1"></i> Form Elements</Link></li>
                        <li><Link to="/ui-breadcrumb" className="sub-menu-item"><i className="uil uil-sort-amount-down fs-6 align-middle me-1"></i> Breadcrumb</Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li><Link to="/ui-pagination" className="sub-menu-item"><i className="uil uil-copy fs-6 align-middle me-1"></i> Pagination</Link></li>
                        <li><Link to="/ui-avatar" className="sub-menu-item"><i className="uil uil-image fs-6 align-middle me-1"></i> Avatars</Link></li>
                        <li><Link to="/ui-nav-tabs" className="sub-menu-item"><i className="uil uil-bars fs-6 align-middle me-1"></i> Nav Tabs</Link></li>
                        <li><Link to="/ui-modals" className="sub-menu-item"><i className="uil uil-vector-square fs-6 align-middle me-1"></i> Modals</Link></li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li><Link to="/ui-tables" className="sub-menu-item"><i className="uil uil-table fs-6 align-middle me-1"></i> Tables</Link></li>
                        <li><Link to="/ui-icons" className="sub-menu-item"><i className="uil uil-shutter-alt fs-6 align-middle me-1"></i> Icons</Link></li>
                        <li><Link to="/ui-progressbar" className="sub-menu-item"><i className="uil uil-brackets-curly fs-6 align-middle me-1"></i> Progressbar</Link></li>
                        <li><Link to="/ui-lightbox" className="sub-menu-item"><i className="uil uil-play-circle fs-6 align-middle me-1"></i> Lightbox</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-menu-item">
                  <Link to="#" onClick={() => this.setState({ doc: !this.state.doc })}>Docs</Link><span className="menu-arrow"></span>
                  <ul className={classnames("submenu", { open: this.state.doc })}>
                    <li><Link to="https://github.com/evaafi/docs" className="sub-menu-item">Documentation</Link></li>
                    <li><Link to="#" className="sub-menu-item">Changelog <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span></Link></li>
                    <li><Link to="#" className="sub-menu-item">Widget <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span></Link></li>
                  </ul>
                </li>
              </ul>

              {/* <ul className="navigation-menu" id="top-menu">
                {(navLinks || []).map((item, key) => {
                  const hasChildren = item.child && item.child.length;
                  return (
                    <MenuItem
                      item={item}
                      key={key}
                      itemClassName={hasChildren ? 'parent-parent-menu-item' : ''}
                      arrowClassName="menu-arrow"
                    />
                  );
                })}
              </ul> */}
              {/* menu end */}
              
            </div>
          </Container>
        </header>

        <Modal
          isOpen={this.state.wishlistModal}
          tabIndex="-1"
          centered
          contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.toggleWishlistModal}
        >
          <ModalBody className="py-5">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                style={{ height: '95px', width: '95px' }}
              >
                <h1 className="mb-0">
                  <i className="uil uil-heart-break align-middle"></i>
                </h1>
              </div>
              <div className="mt-4">
                <h4>Your wishlist is empty.</h4>
                <p className="text-muted">
                  Create your first wishlist request...
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-outline-primary">
                    + Create new wishlist
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

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

export default withRouter(Topbar);

