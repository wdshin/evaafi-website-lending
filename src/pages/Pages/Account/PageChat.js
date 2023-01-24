import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {
    Container,
    Row,
    Col,
    Progress,
    Card,
    CardBody,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import bgChat from "../../../assets/images/account/bg-chat.png";
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";
import client5 from "../../../assets/images/client/05.jpg";
import client6 from "../../../assets/images/client/06.jpg";
import client7 from "../../../assets/images/client/07.jpg";
import client8 from "../../../assets/images/client/08.jpg";

class PageChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            members: [
                {
                    id: 1,
                    img: client1,
                    title: "Calvin Carlo",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 2,
                    img: client2,
                    title: "Miriam Walya",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 3,
                    img: client3,
                    title: "Jenelia Parker",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 4,
                    img: client4,
                    title: "Jack Deo",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 5,
                    img: client5,
                    title: "Marya Joseph",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 6,
                    img: client6,
                    title: "Maninder Khan",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 7,
                    img: client7,
                    title: "Pitambar Das",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 8,
                    img: client8,
                    title: "Cristino Murfy",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
            ],
            widgets: [
                {
                    id: 1,
                    icon: "uil uil-dashboard",
                    className: "navbar-item account-menu px-0",
                    title: "Profile",
                    link: "/page-profile",
                },
                {
                    id: 2,
                    icon: "uil uil-users-alt",
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "Members",
                    link: "/page-members",
                },
                {
                    id: 3,
                    icon: "uil uil-file",
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "Portfolio",
                    link: "/page-works",
                },
                {
                    id: 4,
                    icon: "uil uil-comment",
                    className: "navbar-item account-menu px-0 mt-2 active",
                    title: "Chat",
                    link: "/page-chat",
                },
                {
                    id: 5,
                    icon: "uil uil-envelope-star",
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "Messages",
                    link: "/page-messages",
                },
                {
                    id: 6,
                    icon: "uil uil-transaction",
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "Payments",
                    link: "/page-payments",
                },
                {
                    id: 7,
                    icon: "uil uil-setting",
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "Settings",
                    link: "/page-profile-edit",
                },
                {
                    id: 8,
                    icon: "uil uil-dashboard",
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "Logout",
                    link: "/auth-login-three",
                },
            ],
            modal: false,
            selectedContacts: [],
        };
        this.togglemodal.bind(this);
        this.onChangeCheckbox.bind(this);
    }
    togglemodal = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };

    componentDidMount() {
        document.body.classList = "";
        document.querySelectorAll("#buyButton").forEach((navLink) => {
            navLink.classList.add("btn-light")
            navLink.classList.remove("btn-soft-primary");
            document.getElementById("top-menu").classList.add("nav-light");
        })
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

    onChangeCheckbox = (selected, contact) => {
        let modifiedselectedContacts = [...this.state.selectedContacts];
        if (selected) {
            modifiedselectedContacts.push(contact);
            this.setState({
                selectedContacts: modifiedselectedContacts,
            });
        } else {
            let otherContacts = modifiedselectedContacts.filter(
                (r) => r.id !== contact.id
            );
            this.setState({
                selectedContacts: otherContacts,
            });
        }
    };

    onSelectAll = (checked) => {
        if (checked) {
            this.setState({
                selectedContacts: this.state.members,
            });
        } else {
            this.setState({
                selectedContacts: [],
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <section
                    className="bg-profile d-table w-100 bg-primary"
                    style={{ background: `url(${imgbg}) center center` }}
                >
                    <Container>
                        <Row>
                            <Col lg="12">
                                <Card
                                    className="public-profile border-0 rounded shadow"
                                    style={{ zIndex: "1" }}
                                >
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col lg="2" md="3" className="text-md-start text-center">
                                                <img
                                                    src={profile}
                                                    className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                                                    alt=""
                                                />
                                            </Col>

                                            <Col lg="10" md="9">
                                                <Row className="align-items-end">
                                                    <Col
                                                        md="7"
                                                        className="text-md-start text-center mt-4 mt-sm-0"
                                                    >
                                                        <h3 className="title mb-0">Krista Joseph</h3>
                                                        <small className="text-muted h6 me-2">
                                                            Web Developer
                                                        </small>
                                                        <ul className="list-inline mb-0 mt-3">
                                                            <li className="list-inline-item me-2">
                                                                <Link
                                                                    to="#"
                                                                    className="text-muted"
                                                                    title="Linkedin"
                                                                >
                                                                    <i>
                                                                        <FeatherIcon
                                                                            icon="instagram"
                                                                            className="fea icon-sm me-2"
                                                                        />
                                                                    </i>
                                                                    krista_joseph
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item ms-1">
                                                                <Link
                                                                    to="#"
                                                                    className="text-muted"
                                                                    title="Skype"
                                                                >
                                                                    <i>
                                                                        <FeatherIcon
                                                                            icon="linkedin"
                                                                            className="fea icon-sm me-2"
                                                                        />
                                                                    </i>
                                                                    Krista Joseph
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md="5" className="text-md-end text-center">
                                                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                                                            <li className="list-inline-item">
                                                                <Link to="#" className="rounded">
                                                                <i className="uil uil-user-plus align-middle"></i>
                                                                </Link>
                                                            </li>{" "}
                                                            <li className="list-inline-item">
                                                                <Link to="#" className="rounded">
                                                                <i className="uil uil-comment align-middle"></i>
                                                                </Link>
                                                            </li>{" "}
                                                            <li className="list-inline-item">
                                                                <Link to="#" className="rounded">
                                                                <i className="uil uil-bell align-middle"></i>
                                                                </Link>
                                                            </li>{" "}
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="/page-profile-edit"
                                                                    className="rounded"
                                                                >
                                                                    <i className="uil uil-cog align-middle"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section mt-60">
                    <Container className="mt-lg-3">
                        <Row>
                            <Col lg="4" md="6" xs="12" className="d-lg-block d-none">
                                <div className="sidebar sticky-bar p-4 rounded shadow">
                                    <div className="widget">
                                        <h5 className="widget-title">Followers :</h5>
                                        <div className="row mt-4">
                                            <div className="col-6 text-center">
                                                <FeatherIcon
                                                    icon="user-plus"
                                                    className="fea icon-ex-md text-primary mb-1"
                                                />
                                                <h5 className="mb-0">2588</h5>
                                                <p className="text-muted mb-0">Followers</p>
                                            </div>

                                            <div className="col-6 text-center">
                                                <FeatherIcon
                                                    icon="users"
                                                    className="fea icon-ex-md text-primary mb-1"
                                                />
                                                <h5 className="mb-0">454</h5>
                                                <p className="text-muted mb-0">Following</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Projects :</h5>
                                        <div className="progress-box mt-4">
                                            <h6 className="title text-muted">Progress</h6>
                                            <Progress
                                                value={50}
                                                color="primary"
                                                barClassName="position-relative"
                                            >
                                                <div className="progress-value d-block text-muted h6">
                                                    24 / 48
                                                </div>
                                            </Progress>
                                        </div>
                                    </div>

                                    <div className="widget mt-4">
                                        <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                                            {this.state.widgets.map((widget, key) => (
                                                <li className={widget.className} key={key}>
                                                    <Link to={widget.link} className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                                        <span className="h4 mb-0">
                                                            <i className={widget.icon}></i>
                                                        </span>
                                                        <h6 className="mb-0 ms-2">{widget.title}</h6>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Follow me :</h5>
                                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                    
                                                        <FeatherIcon
                                                            icon="facebook"
                                                            className="fea icon-sm fea-social"
                                                        />                                                   
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                   
                                                        <FeatherIcon
                                                            icon="instagram"
                                                            className="fea icon-sm fea-social"
                                                        />                                                    
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                   
                                                        <FeatherIcon
                                                            icon="twitter"
                                                            className="fea icon-sm fea-social"
                                                        />                                                   
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                
                                                        <FeatherIcon
                                                            icon="linkedin"
                                                            className="fea icon-sm fea-social"
                                                        />                                                   
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                   
                                                        <FeatherIcon
                                                            icon="github"
                                                            className="fea icon-sm fea-social"
                                                        />                                                    
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                   
                                                        <FeatherIcon
                                                            icon="youtube"
                                                            className="fea icon-sm fea-social"
                                                        />                                                   
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">                                                   
                                                        <FeatherIcon
                                                            icon="gitlab"
                                                            className="fea icon-sm fea-social"
                                                        />                                                   
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <div className="col-lg-8 col-12">
                                <div className="card border-0 rounded shadow">
                                    <SimpleBar className="p-2 chat chat-list" data-simplebar style={{ maxHeight: "360px" }}>
                                        <Link to="#" className="d-flex chat-list active p-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Calvin</h6>
                                                    <small className="text-muted">10 Min</small>
                                                </div>
                                                <div className="text-muted text-truncate">Hello</div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Cristino</h6>
                                                    <small className="text-muted">20 Min</small>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <div className="text-dark h6 mb-0 text-truncate">Hi, How are you?</div>
                                                    <span className="badge rounded-md bg-soft-danger">2</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client3} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Faye</h6>
                                                    <small className="text-muted">30 Min</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Heyy</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client4} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Ronald</h6>
                                                    <small className="text-muted">2 Hours</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Hey, How are you sir?</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client5} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Melissa</h6>
                                                    <small className="text-muted">3 Hours</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Good Afternoon</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client6} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Elsie</h6>
                                                    <small className="text-muted">10 Hours</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Good Morning sir, how can i help you?</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client7} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Jerry</h6>
                                                    <small className="text-muted">16 Hours</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Please give me appointment</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client8} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Louis</h6>
                                                    <small className="text-muted">1 Days</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Hii</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client6} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Randall</h6>
                                                    <small className="text-muted">2 Days</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Hello Sir</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#" className="d-flex chat-list p-2 mt-2 rounded position-relative">
                                            <div className="position-relative">
                                                <img src={client8} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                            </div>
                                            <div className="overflow-hidden flex-1 ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="text-dark mb-0 d-block">Lester</h6>
                                                    <small className="text-muted">4 Days</small>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-muted text-truncate">Hello please give me answer.</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SimpleBar>
                                </div>

                                <div className="card chat chat-person border-0 shadow rounded mt-4">
                                    <div className="d-flex justify-content-between border-bottom p-4">
                                        <div className="d-flex">
                                            <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div className="overflow-hidden ms-3">
                                                <Link to="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                                                <small className="text-muted"><i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                                            </div>
                                        </div>

                                        <ul className="list-unstyled mb-0">
                                            <UncontrolledDropdown className="dropdown-primary list-inline-item">
                                                <DropdownToggle type="button" className="btn btn-icon btn-pills btn-soft-primary p-0" tag="a"><i className="uil uil-ellipsis-h "></i></DropdownToggle>
                                                <DropdownMenu className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3">
                                                    <DropdownItem className="text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-user align-middle h6"></i></span> Profile</DropdownItem>
                                                    <DropdownItem className="text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-setting align-middle h6"></i></span> Profile Settings</DropdownItem>
                                                    <DropdownItem className="text-dark" href="#"><span className="mb-0 d-inline-block me-1"><i className="uil uil-trash align-middle h6"></i></span> Delete</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ul>
                                    </div>

                                    <SimpleBar className="p-4 list-unstyled mb-0 chat"
                                        style={{ background: `url(${bgChat}) center center`, maxHeight: "500px" }}
                                    >
                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hey Calvin</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>59 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={client1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>45 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={client1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>44 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>42 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>40 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={client1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>45 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>35 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={client1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <a href="//1.envato.market/landrickreactjs" target="_blank" rel="noreferrer" className="text-primary">http://themesbrand.com//landrick/</a></p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>25 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={client2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>20 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={client1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>

                                                    <div className="chat-msg" style={{ maxHeight: "500px" }}>
                                                        <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                                        <small className="text-muted msg-time"><i className="uil uil-clock-nine me-1"></i>18 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </SimpleBar>

                                    <div className="p-2 rounded-bottom shadow">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Enter Message..." />
                                            </div>
                                            <div className="col-auto">
                                                <Link to="#" className="btn btn-icon btn-primary"><i className="uil uil-message"></i></Link>{" "}
                                                <Link to="#" className="btn btn-icon btn-primary"><i className="uil uil-smile"></i></Link>{" "}
                                                <Link to="#" className="btn btn-icon btn-primary"><i className="uil uil-paperclip"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default PageChat;
