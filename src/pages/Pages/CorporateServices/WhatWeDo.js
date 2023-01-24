import React, { Component } from 'react';
import {
    Col,
    Container,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";
import classnames from "classnames";

import work1 from "../../../assets/images/work/7.jpg";
import work2 from "../../../assets/images/work/8.jpg";
import work3 from "../../../assets/images/work/9.jpg";
import work4 from "../../../assets/images/work/12.jpg";
import { Link } from 'react-router-dom';

class WhatWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-end mb-4 pb-4">
                        <Col md={8}>
                            <div className="section-title text-center text-md-start">
                                <h6 className="text-primary">Services</h6>
                                <h4 className="title mb-4">What we do ?</h4>
                                <p className="text-muted mb-0 para-desc">
                                    Start working with{" "}
                                    <span className="text-primary fw-bold">
                                        Landrick
                                    </span>{" "}
                                    that can provide everything you need to generate awareness,
                                    drive traffic, connect.
                                </p>
                            </div>
                        </Col>

                        <Col md={4} className="mt-4 mt-sm-0">
                            <div className="text-center text-md-end">
                                <Link to="#" className="text-primary h6">
                                    See More{" "}
                                    <i className="uil uil-angle-right-b align-middle"></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="mt-4 pt-2">
                            <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                                <NavItem>
                                    <NavLink
                                        to="#"
                                        className={classnames(
                                            { active: this.state.activeTab === "1" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("1");
                                        }}
                                    >
                                        <div className="text-center py-1">
                                            <h6 className="mb-0">Web Developing</h6>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        to="#"
                                        className={classnames(
                                            { active: this.state.activeTab === "2" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("2");
                                        }}
                                    >
                                        <div className="text-center py-1">
                                            <h6 className="mb-0">Database Analysis</h6>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        to="#"
                                        className={classnames(
                                            { active: this.state.activeTab === "3" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("3");
                                        }}
                                    >
                                        <div className="text-center py-1">
                                            <h6 className="mb-0">Server Security</h6>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        to="#"
                                        className={classnames(
                                            { active: this.state.activeTab === "4" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("4");
                                        }}
                                    >
                                        <div className="text-center py-1">
                                            <h6 className="mb-0">Web Designing</h6>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Col>

                        <Col md={8} xs={12} className="mt-4 pt-2">
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane
                                    className="fade bg-white show p-4 rounded shadow"
                                    tabId="1"
                                >
                                    <img
                                        src={work1}
                                        className="img-fluid rounded shadow"
                                        alt=""
                                    />
                                    <div className="mt-4">
                                        <p className="text-muted">
                                            This is required when, for example, the final text is
                                            not yet available. Dummy text is also known as 'fill
                                            text'. It is said that song composers of the past used
                                            dummy texts as lyrics.
                                        </p>
                                        <Link to="#" className="text-primary">
                                            See More{" "}
                                            <i className="uil uil-angle-right-b align-middle"></i>
                                        </Link>
                                    </div>
                                </TabPane>

                                <TabPane
                                    className="fade bg-white p-4 show rounded shadow"
                                    tabId="2"
                                >
                                    <img
                                        src={work2}
                                        className="img-fluid rounded shadow"
                                        alt=""
                                    />
                                    <div className="mt-4">
                                        <p className="text-muted">
                                            This is required when, for example, the final text is
                                            not yet available. Dummy text is also known as 'fill
                                            text'. It is said that song composers of the past used
                                            dummy texts as lyrics.
                                        </p>
                                        <Link to="#" className="text-primary">
                                            See More{" "}
                                            <i className="uil uil-angle-right-b align-middle"></i>
                                        </Link>
                                    </div>
                                </TabPane>

                                <TabPane
                                    className="fade bg-white p-4  show rounded shadow"
                                    tabId="3"
                                >
                                    <img
                                        src={work3}
                                        className="img-fluid rounded shadow"
                                        alt=""
                                    />
                                    <div className="mt-4">
                                        <p className="text-muted">
                                            This is required when, for example, the final text is
                                            not yet available. Dummy text is also known as 'fill
                                            text'. It is said that song composers of the past used
                                            dummy texts as lyrics.
                                        </p>
                                        <Link to="#" className="text-primary">
                                            See More{" "}
                                            <i className="uil uil-angle-right-b align-middle"></i>
                                        </Link>
                                    </div>
                                </TabPane>

                                <TabPane
                                    className="fade bg-white show p-4 rounded shadow"
                                    tabId="4"
                                >
                                    <img
                                        src={work4}
                                        className="img-fluid rounded shadow"
                                        alt=""
                                    />
                                    <div className="mt-4">
                                        <p className="text-muted">
                                            This is required when, for example, the final text is
                                            not yet available. Dummy text is also known as 'fill
                                            text'. It is said that song composers of the past used
                                            dummy texts as lyrics.
                                        </p>
                                        <Link to="#" className="text-primary">
                                            See More{" "}
                                            <i className="uil uil-angle-right-b align-middle"></i>
                                        </Link>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default WhatWeDo;