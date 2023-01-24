import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const NavTabs = () => {
    useEffect(() => {
        document.getElementById("buyButton").classList.add("nav-light");
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
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

    const [navActiveTab, setNavActiveTab] = useState("1");
    const customTab = tab => {
        if (navActiveTab !== tab) {
            setNavActiveTab(tab);
        }
    };
    const [activeTab, setActiveTab] = useState("1");
    const toggle_tab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        <React.Fragment>
            <ComponentHeader
                title="Nav Tabs"
                breadcrumb="Nav Tabs"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-nav-tabs">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Nav Tabs #1 </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Row&gt;<br />
                                                    &nbsp; &lt;Col lg="12"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Nav pill justified className="flex-column flex-sm-row rounded" id="pills-tab" role="tablist"&gt;<br />
                                                    &nbsp;&nbsp;  &lt;NavItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;NavLink className="rounded active" id="pills-cloud-tab" data-bs-toggle="pill" href="#pills-cloud" role="tab" aria-controls="pills-cloud" aria-selected="false"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="text-center py-2"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;h6 className="mb-0"&gt;Home&lt;/h6&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/NavLink&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/NavItem&gt;<br /><br />

                                                    &nbsp;&nbsp;  &lt;NavItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;NavLink className="rounded" id="pills-smart-tab" data-bs-toggle="pill" href="#pills-smart" role="tab" aria-controls="pills-smart" aria-selected="false"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="text-center py-2"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;h6 className="mb-0"&gt;About&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/NavLink&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/NavItem&gt;<br /> <br />

                                                    &nbsp;&nbsp;  &lt;NavItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;NavLink className="rounded" id="pills-apps-tab" data-bs-toggle="pill" href="#pills-apps" role="tab" aria-controls="pills-apps" aria-selected="false"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="text-center py-2"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;h6 className="mb-0"&gt;Service&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/NavLink&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/NavItem&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Nav&gt;<br />
                                                    &nbsp; &lt;/Col&gt;<br />
                                                    &lt;/Row&gt;<br /><br />

                                                    &lt;Row className="pt-3"&gt;<br />
                                                    &nbsp; &lt;Col className="col-12"&gt;<br />
                                                    &nbsp;&nbsp; &lt;TabContent id="pills-tabContent"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;TabPane className="fade show active" id="pills-cloud" role="tabpanel" aria-labelledby="pills-cloud-tab"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/TabPane&gt;<br />

                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;TabPane className="fade" id="pills-smart" role="tabpanel" aria-labelledby="pills-smart-tab"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/TabPane&gt;<br />

                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;TabPane className="fade" id="pills-apps" role="tabpanel" aria-labelledby="pills-apps-tab"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/TabPane&gt;<br />
                                                    &nbsp;&nbsp; &lt;/TabContent&gt;<br />
                                                    &nbsp; &lt;/Col&gt;<br />
                                                    &lt;/Row&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <Row>
                                                <Col lg={12}>
                                                    <Nav
                                                        pills
                                                        justified
                                                        className="flex-column flex-sm-row rounded"
                                                        id="pills-tab"
                                                        role="tablist"
                                                    >
                                                        <NavItem>
                                                            <NavLink
                                                                id="pills-cloud-tab"
                                                                role="tab"
                                                                className={
                                                                    classnames({
                                                                        active: navActiveTab === "1",
                                                                    }) + " rounded"
                                                                }
                                                                onClick={() => customTab("1")}
                                                            >
                                                                <div className="text-center py-2">
                                                                    <h6 className="mb-0">Home</h6>
                                                                </div>
                                                            </NavLink>
                                                        </NavItem>

                                                        <NavItem>
                                                            <NavLink
                                                                id="pills-smart-tab"
                                                                role="tab"
                                                                className={
                                                                    classnames({
                                                                        active: navActiveTab === "2",
                                                                    }) + " rounded"
                                                                }
                                                                onClick={() => customTab("2")}
                                                            >
                                                                <div className="text-center py-2">
                                                                    <h6 className="mb-0">About</h6>
                                                                </div>
                                                            </NavLink>
                                                        </NavItem>

                                                        <NavItem>
                                                            <NavLink
                                                                id="pills-apps-tab"
                                                                role="tab"
                                                                className={
                                                                    classnames({
                                                                        active: navActiveTab === "3",
                                                                    }) + " rounded"
                                                                }
                                                                onClick={() => customTab("3")}
                                                            >
                                                                <div className="text-center py-2">
                                                                    <h6 className="mb-0">Service</h6>
                                                                </div>
                                                            </NavLink>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                            </Row>

                                            <Row className="pt-3">
                                                <Col className="col-12">
                                                    <TabContent activeTab={navActiveTab} id="pills-tabContent">
                                                        <TabPane
                                                            tabId="1"
                                                            id="pills-cloud"
                                                            role="tabpanel"
                                                        >
                                                            <p className="text-muted mb-0">
                                                                You can combine all the Landrick templates
                                                                into a single one, you can take a component
                                                                from the Application theme and use it in the
                                                                Website.</p>
                                                        </TabPane>

                                                        <TabPane
                                                            tabId="2"
                                                            id="pills-smart"
                                                            role="tabpanel"
                                                        >
                                                            <p className="text-muted mb-0">
                                                                You can combine all the Landrick templates into a
                                                                single one, you can take a component from the
                                                                Application theme and use it in the Website.</p>
                                                        </TabPane>

                                                        <TabPane
                                                            tabId="3"
                                                            id="pills-apps"
                                                            role="tabpanel"
                                                        >
                                                            <p className="text-muted mb-0">
                                                                You can combine all the Landrick templates
                                                                into a single one, you can take a component
                                                                from the Application theme and use it in the
                                                                Website.</p>
                                                        </TabPane>
                                                    </TabContent>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Nav Tabs #2 </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Row&gt;<br />
                                                    &nbsp;&nbsp; &lt;Col md="4" className="mt-4 pt-2"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Nav pills justified className="flex-column rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;NavItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;NavLink className="rounded active" id="webdeveloping" data-bs-toggle="pill" href="#developing" role="tab" aria-controls="developing" aria-selected="false"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;div className="text-center py-1"&gt;<br /> &nbsp;
                                                    &nbsp;&nbsp; &nbsp; &nbsp;  &lt;h6 className="mb-0"&gt;Home&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;/NavLink&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/NavItem&gt;<br /><br />

                                                    &nbsp;&nbsp;&nbsp;  &lt;NavItem className="mt-2"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;NavLink className="rounded" id="database" data-bs-toggle="pill" href="#data-analise" role="tab" aria-controls="data-analise" aria-selected="false"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;div className="text-center py-1"&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &nbsp;  &lt;h6 className="mb-0"&gt;About&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;/NavLink&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/NavItem&gt;<br /><br />

                                                    &nbsp;&nbsp;&nbsp;  &lt;NavItem className="mt-2"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;NavLink className="rounded" id="server" data-bs-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;div className="text-center py-1"&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &nbsp;  &lt;h6 className="mb-0"&gt;Service&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &nbsp;  &lt;/NavLink&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/NavItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;/Nav&gt;<br />
                                                    &nbsp;&lt;/Col&gt;<br /><br />

                                                    &lt;Col md="8" className="col-12 mt-4 pt-2"&gt;<br />
                                                    &nbsp; &lt;TabContent id="pills-tabContent"&gt;<br />
                                                    &nbsp; &nbsp; &lt;TabPane className="fade show active p-4 rounded shadow" id="developing" role="tabpanel" aria-labelledby="webdeveloping"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br />
                                                    &nbsp; &nbsp; &lt;/TabPane&gt;<br />

                                                    &nbsp; &nbsp; &lt;TabPane className="fade p-4 rounded shadow" id="data-analise" role="tabpanel" aria-labelledby="database"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br />
                                                    &nbsp; &nbsp; &lt;/TabPane&gt;<br />

                                                    &nbsp; &nbsp; &lt;TabPane className="fade p-4 rounded shadow" id="security" role="tabpanel" aria-labelledby="server"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br />
                                                    &nbsp; &nbsp; &lt;/TabPane&gt;<br />
                                                    &nbsp;&nbsp;&lt;/TabContent&gt;<br />
                                                    &nbsp;&lt;/Col&gt;<br />
                                                    &lt;/Row&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <Row>
                                                <Col md={4} className="mt-4 pt-2">
                                                    <Nav
                                                        pills
                                                        justified
                                                        className="flex-column rounded shadow p-3 mb-0 sticky-bar"
                                                        id="pills-tab"
                                                        role="tablist"
                                                    >
                                                        <NavItem>
                                                            <NavLink
                                                                id="webdeveloping"
                                                                role="tab"
                                                                className={
                                                                    classnames({
                                                                        active: activeTab === "1",
                                                                    }) + " rounded"
                                                                }
                                                                onClick={() => toggle_tab("1")}
                                                            >
                                                                <div className="text-center py-1">
                                                                    <h6 className="mb-0">Home</h6>
                                                                </div>
                                                            </NavLink>
                                                        </NavItem>

                                                        <NavItem className="mt-2">
                                                            <NavLink
                                                                id="database"
                                                                role="tab"
                                                                className={
                                                                    classnames({
                                                                        active: activeTab === "2",
                                                                    }) + " rounded"
                                                                }
                                                                onClick={() => toggle_tab("2")}
                                                            >
                                                                <div className="text-center py-1">
                                                                    <h6 className="mb-0">About</h6>
                                                                </div>
                                                            </NavLink>
                                                        </NavItem>

                                                        <NavItem className="mt-2">
                                                            <NavLink
                                                                id="server"
                                                                role="tab"
                                                                className={
                                                                    classnames({
                                                                        active: activeTab === "3",
                                                                    }) + " rounded"
                                                                }
                                                                onClick={() => toggle_tab("3")}
                                                            >
                                                                <div className="text-center py-1">
                                                                    <h6 className="mb-0">Service</h6>
                                                                </div>
                                                            </NavLink>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>

                                                <Col md={8} className="col-12 mt-4 pt-2">
                                                    <TabContent activeTab={activeTab} id="pills-tabContent">
                                                        <TabPane
                                                            tabId="1"
                                                            className="p-4 rounded shadow"
                                                            id="developing"
                                                            role="tabpanel"
                                                        >
                                                            <p className="text-muted mb-0">
                                                                You can combine all the Landrick templates into a single one,
                                                                you can take a component from the Application theme and use it in the
                                                                Website.</p>
                                                        </TabPane>

                                                        <TabPane
                                                            tabId="2"
                                                            className="p-4 rounded shadow"
                                                            id="data-analise"
                                                            role="tabpanel"
                                                        >
                                                            <p className="text-muted mb-0">
                                                                You can combine all the Landrick templates into a single one,
                                                                you can take a component from the Application theme and use it in the
                                                                Website.</p>
                                                        </TabPane>

                                                        <TabPane
                                                            tabId="3"
                                                            className="p-4 rounded shadow"
                                                            id="security"
                                                            role="tabpanel"
                                                        >
                                                            <p className="text-muted mb-0">
                                                                You can combine all the Landrick templates into a single one,
                                                                you can take a component from the Application theme and use it in the
                                                                Website.</p>
                                                        </TabPane>
                                                    </TabContent>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default NavTabs;