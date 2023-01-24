import React, { useEffect } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Badges = () => {
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
    return (
        <React.Fragment>
            <ComponentHeader
                title="Badges"
                breadcrumb="Badges"
            />
            <ComponentSvg
            />

            <section className="section" id="ui-badges">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Badges </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Badge color="primary"&gt;
                                                    primary &lt;/Badge&gt;</code></h6>
                                            <Badge color="primary" className="me-2 mt-2">Primary</Badge>{" "}
                                            <Badge color="secondary" className="me-2 mt-2">Secondary</Badge>{" "}
                                            <Badge color="success" className="me-2 mt-2">Success</Badge>{" "}
                                            <Badge color="danger" className="me-2 mt-2">Danger</Badge>{" "}
                                            <Badge color="warning" className="me-2 mt-2">Warning</Badge>{" "}
                                            <Badge color="info" className="me-2 mt-2">Info</Badge>{" "}
                                            <Badge color="light" className="text-dark me-2 mt-2">Light</Badge>{" "}
                                            <Badge color="dark" className="me-2 mt-2">Dark</Badge>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Pill Badges </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Badge color="primary" pill
                                                    bg-primary"&gt; primary &lt;/Badge&gt;</code></h6>
                                            <Badge pill color="primary" className="me-2 mt-2">Primary</Badge>{" "}
                                            <Badge pill color="secondary" className="me-2 mt-2">Secondary</Badge>{" "}
                                            <Badge pill color="success" className="me-2 mt-2">Success</Badge>{" "}
                                            <Badge pill color="danger" className="me-2 mt-2">Danger</Badge>{" "}
                                            <Badge pill color="warning" className="me-2 mt-2">Warning</Badge>{" "}
                                            <Badge pill color="info" className="me-2 mt-2">Info</Badge>{" "}
                                            <Badge pill color="light" className="text-dark me-2 mt-2">Light</Badge>{" "}
                                            <Badge pill color="primary" className="me-2 mt-2">Dark</Badge>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Soft Badges </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Badge
                                                    className="bg-soft-primary"&gt; primary &lt;/Badge&gt;</code></h6>
                                            <span className="badge bg-soft-primary me-2 mt-2">Primary</span>{" "}
                                            <span className="badge bg-soft-secondary me-2 mt-2">Secondary</span>{" "}
                                            <span className="badge bg-soft-success me-2 mt-2">Success</span>{" "}
                                            <span className="badge bg-soft-danger me-2 mt-2">Danger</span>{" "}
                                            <span className="badge bg-soft-warning me-2 mt-2">Warning</span>{" "}
                                            <span className="badge bg-soft-info me-2 mt-2">Info</span>{" "}
                                            <span className="badge bg-soft-light text-dark me-2 mt-2">Light</span>{" "}
                                            <span className="badge bg-soft-dark me-2 mt-2">Dark</span>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Soft Pill Badges </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Badge className="rounded-pill
                                                    bg-soft-primary"&gt; primary &lt;/Badge&gt;</code></h6>
                                            <span className="badge rounded-pill bg-soft-primary me-2 mt-2">Primary</span>{" "}
                                            <span className="badge rounded-pill bg-soft-secondary me-2 mt-2">Secondary</span>{" "}
                                            <span className="badge rounded-pill bg-soft-success me-2 mt-2">Success</span>{" "}
                                            <span className="badge rounded-pill bg-soft-danger me-2 mt-2">Danger</span>{" "}
                                            <span className="badge rounded-pill bg-soft-warning me-2 mt-2">Warning</span>{" "}
                                            <span className="badge rounded-pill bg-soft-info me-2 mt-2">Info</span>{" "}
                                            <span className="badge rounded-pill bg-soft-light text-dark me-2 mt-2">Light</span>{" "}
                                            <span className="badge rounded-pill bg-soft-dark me-2 mt-2">Dark</span>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Link Badges </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="badge
                                                    bg-primary"&gt; primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="badge badge-link bg-primary me-2 mt-2">Primary</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-secondary me-2 mt-2">Secondary</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-success me-2 mt-2">Success</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-danger me-2 mt-2">Danger</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-warning me-2 mt-2">Warning</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-info me-2 mt-2">Info</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-light text-dark me-2 mt-2">Light</Link>{" "}
                                            <Link to="#" className="badge badge-link bg-dark me-2 mt-2">Dark</Link>{" "}
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

export default Badges;