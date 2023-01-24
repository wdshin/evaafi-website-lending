import React, { Component } from "react";
import {
  Form,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

import RightSidebar from '../Layout/RightSidebar';

//React Drawer
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

export default class NavbarButtons extends Component {
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
  render() {
    return (
      <React.Fragment>
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

                <div className="search-bar">
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
          <li className="list-inline-item sidebar-icon mb-0">
            <Link to="#" onClick={this.toggleRightDrawer} disabled={this.state.open}>
              <div id="" className="btn btn-icon btn-soft-primary settingbtn">
                <FeatherIcon
                  icon="settings"
                  className="fea icon-sm"
                />
              </div>
            </Link>
          </li>{" "}
          <li className="list-inline-item button mb-0 ps-1">
            <Link to="#" className="btn btn-icon btn-primary shoppingbtn">
              <i className="uil uil-github"></i>
            </Link>
          </li>
        </ul>
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
