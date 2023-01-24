import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
  Modal,
  ModalBody,
} from 'reactstrap';

//import images
import logoDark from '../../../../assets/images/logo-dark.png';
import logoLight from '../../../../assets/images/logo-light.png';
import shop1 from '../../../../assets/images/shop/product/s-1.jpg';
import shop2 from '../../../../assets/images/shop/product/s-2.jpg';
import shop3 from '../../../../assets/images/shop/product/s-3.jpg';

//Import Icons
import FeatherIcon from 'feather-icons-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpenShop: false,
      wishlistModal: false,
      dropdownIsOpen: false,
      dropdownOpen: false,
      modal: false,
    };
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
    this.isToogleMenu.bind(this);
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

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  initMenu() {
    this.activateMenu();
  }

  activateMenu() {
    var menuItems = document.getElementsByClassName('sub-menu-item');
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
        const parent = matchingMenuItem.closest('.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          const parentOfParent = parent.closest('.parent-menu-item-sub');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          } else {
            const parentOfParent = parent.closest('.parent-menu-item-sub');
            if (parentOfParent) {
              parentOfParent.classList.add('active');
            }
          }
        }
      }
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.initMenu();
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  UNSAFE_componentWillMount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
      document.querySelector(".settingbtn").classList.add("btn-primary");
    } else {
      document.getElementById('topnav')?.classList.remove('nav-sticky');
      document.querySelector(".settingbtn")?.classList.add("btn-primary");
      document.querySelector(".settingbtn")?.classList.remove("btn-soft-primary");
    }
  };


  /**
   * Toogle menu in mobile screen
   */
  isToogleMenu = () => {
    const isToggle = document.getElementById('isToggle');
    isToggle.classList.toggle('open');
    var isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  };
  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <Link className="logo" to="/">
              <img
                src={logoDark}
                height="24"
                className="logo-light-mode"
                alt=""
              />
              <img
                src={logoLight}
                height="24"
                className="logo-dark-mode"
                alt=""
              />
            </Link>

            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  className="navbar-toggle"
                  id="isToggle"
                  onClick={this.isToogleMenu}
                >
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
              <li className="list-inline-item mb-0 pe-1">
                <Dropdown
                  isOpen={this.state.dropdownOpenShop}
                  toggle={this.toggleDropdownShop}
                >
                  <DropdownToggle
                    type="button"
                    id="buyButton"
                    className="btn btn-icon btn-pills dropdown-toggle shoppingbtn"
                    color="primary"
                  >
                    <FeatherIcon icon="shopping-cart" className="icons" />
                  </DropdownToggle>
                  <DropdownMenu
                    direction="end"
                    className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4"
                    style={{ width: '300px' }}
                  >
                    <div className="pb-4">
                      <Link to="#" className="d-flex align-items-center">
                        <img
                          src={shop1}
                          className="shadow rounded"
                          style={{ maxHeight: '64px' }}
                          alt=""
                        />
                        <div className="flex-1 text-start ms-3">
                          <h6 className="text-dark mb-0">T-shirt (M)</h6>
                          <p className="text-muted mb-0">$320 X 2</p>
                        </div>
                        <h6 className="text-dark mb-0">$640</h6>
                      </Link>

                      <Link to="#" className="d-flex align-items-center mt-4">
                        <img
                          src={shop2}
                          className="shadow rounded"
                          alt=""
                          style={{ maxHeight: '64px' }}
                        />
                        <div className="flex-1 text-start ms-3">
                          <h6 className="text-dark mb-0">Bag</h6>
                          <p className="text-muted mb-0">$50 X 5</p>
                        </div>
                        <h6 className="text-dark mb-0">$250</h6>
                      </Link>

                      <Link to="#" className="d-flex align-items-center mt-4">
                        <img
                          src={shop3}
                          className="shadow rounded"
                          style={{ maxHeight: '64px' }}
                          alt=""
                        />
                        <div className="flex-1 text-start ms-3">
                          <h6 className="text-dark mb-0">Watch (Men)</h6>
                          <p className="text-muted mb-0">$800 X 1</p>
                        </div>
                        <h6 className="text-dark mb-0">$800</h6>
                      </Link>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-4 border-top">
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
                  className="btn btn-icon btn-pills btn-primary"
                  color="primary"
                  onClick={this.toggleWishlistModal}
                >
                 <FeatherIcon icon="heart" className="icons" />
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
                    color="primary"
                    id="buyButton"
                    className="btn btn-icon btn-pills settingbtn"
                  >
                    <FeatherIcon icon="user" className="icons" />
                  </DropdownToggle>
                  <DropdownMenu
                    direction="start"
                    className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3"
                    style={{ width: '200px' }}
                  >
                    <Link className="dropdown-item" to="#">
                      <i className="uil uil-user align-middle me-1"></i> Account
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="uil uil-clipboard-notes align-middle me-1"></i>{' '}
                      Order History
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="uil uil-arrow-circle-down align-middle me-1"></i>{' '}
                      Download
                    </Link>
                    <div className="dropdown-divider my-3 border-top"></div>
                    <Link className="dropdown-item" to="#">
                      <i className="uil uil-sign-out-alt align-middle me-1"></i>{' '}
                      Logout
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
            <div id="navigation">
              <ul className="navigation-menu">
                <li>
                  <Link to="/index-shop" className="sub-menu-item">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/shop-aboutus" className="sub-menu-item">
                    {' '}
                    About Us
                  </Link>
                </li>

                <li className="has-submenu parent-menu-item">
                  <Link to="/#">Shop</Link>
                  <span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link
                        to="/shop-fullwidth-grids"
                        className="sub-menu-item"
                      >
                        Fullwidth Grid
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-grids" className="sub-menu-item">
                        Product Grids
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop-fullwidth-lists"
                        className="sub-menu-item"
                      >
                        Fullwidth List
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-lists" className="sub-menu-item">
                        Product List
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-product-detail" className="sub-menu-item">
                        Product Details
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-cart" className="sub-menu-item">
                        Shop Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-checkouts" className="sub-menu-item">
                        Checkouts
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-myaccount" className="sub-menu-item">
                        My Account
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-menu-item">
                  <Link to="/#">Pages</Link>
                  <span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link to="/auth-login" className="sub-menu-item">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/auth-signup" className="sub-menu-item">
                        Signup
                      </Link>
                    </li>
                    <li>
                      <Link to="/auth-re-password" className="sub-menu-item">
                        Reset Password
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-comingsoon" className="sub-menu-item">
                        Coming Soon
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-maintenance" className="sub-menu-item">
                        Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-error" className="sub-menu-item">
                        Error
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-thankyou" className="sub-menu-item">
                        Thank you
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-menu-item">
                  <Link to="/#">Blog</Link>
                  <span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link to="/shop-blog" className="sub-menu-item">
                        Blog Grid
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-blog-detail" className="sub-menu-item">
                        Blog Detail
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
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
      </React.Fragment>
    );
  }
}

export default NavBar;
