import React, { useEffect } from 'react';
import { Container, Col, Row, Alert, UncontrolledAlert, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Alerts = () => {
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
                title="Alerts"
                breadcrumb="Alerts"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-alert">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Alert </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">
                                                    &lt;Alert color="primary"
                                                    &gt; A simple primary alert—check it out! &lt;/Alert&gt;
                                                </code>
                                            </h6>
                                            <Alert color="primary"> A simple primary alert—check it out!</Alert>
                                            <Alert color="secondary"> A simple secondary alert—check it out!</Alert>
                                            <Alert color="success"> A simple success alert—check it out!</Alert>
                                            <Alert color="danger"> A simple danger alert—check it out!</Alert>
                                            <Alert color="warning"> A simple warning alert—check it out!</Alert>
                                            <Alert color="info"> A simple info alert—check it out!</Alert>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Alert with Icons </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">
                                                    &nbsp;&lt;Alert className="bg-soft-primary fw-medium"&gt; <br />
                                                    &nbsp;&nbsp; &nbsp;  &lt;i className="uil uil-info-circle fs-5 align-middle me-1"&gt;&lt;/i&gt; <br />
                                                    &nbsp;&nbsp; &nbsp;  An example alert with an icon <br />
                                                    &nbsp;&nbsp; &nbsp;&lt;/Alert&gt;</code></h6>
                                            <Alert className="bg-soft-primary fw-medium">
                                                <i className="uil uil-info-circle fs-5 align-middle me-1"></i>
                                                {" "} An example alert with an icon
                                            </Alert>
                                            <Alert className="bg-soft-success fw-medium">
                                                <i className="uil uil-check-circle fs-5 align-middle me-1"></i>
                                                {" "} An example success alert with an icon
                                            </Alert>
                                            <Alert className="bg-soft-warning fw-medium">
                                                <i className="uil uil-exclamation-triangle fs-5 align-middle me-1"></i>
                                                {" "}  An example warning alert with an icon
                                            </Alert>
                                            <Alert className="bg-soft-danger fw-medium">
                                                <i className="uil uil-exclamation-octagon fs-5 align-middle me-1"></i>
                                                {" "} An example danger alert with an icon
                                            </Alert>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Alert Links </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">&nbsp;&lt;Alert color="primary"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A simple primary alert with &lt;Link to="#" className="alert-link"&gt;&lt;/Link&gt;. <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Alert&gt;</code></h6>
                                            <Alert color="primary">A simple primary alert with
                                                <Link to="#" className="alert-link">an link</Link>.
                                            </Alert>
                                            <Alert color="secondary">A simple secondary alert with{" "}
                                                <Link to="#" className="alert-link">an link</Link>.
                                            </Alert>
                                            <Alert color="success">A simple success alert with{" "}
                                                <Link to="#" className="alert-link">an link</Link>.
                                            </Alert>
                                            <Alert color="danger">A simple danger alert with{" "}
                                                <Link to="#" className="alert-link">an link</Link>.
                                            </Alert>
                                            <Alert color="warning">A simple warning alert with{" "}
                                                <Link to="#" className="alert-link">an link</Link>.
                                            </Alert>
                                            <Alert color="info">A simple info alert with{" "}
                                                <Link to="#" className="alert-link">an link</Link>.
                                            </Alert>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Additional Content </h5>
                                        </div>

                                        <div className="p-4">
                                            <div className="alert alert-success mb-0">
                                                <h4 className="alert-heading">Well done!</h4>
                                                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                                <p className="mb-0 border-top pt-3">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Dismissing Alert </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">
                                                    &nbsp;&lt;UncontrolledAlert color="success&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;Well done!&lt;/strong&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You successfully read this important alert message. <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button type="button" className="btn-close" &gt; &lt;/Button&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&lt;/UncontrolledAlert&gt;
                                                </code>
                                            </h6>

                                            <UncontrolledAlert color="success" className="alert-dismissible fade show">
                                                <strong>Well done!</strong> You successfully read this important alert message.
                                            </UncontrolledAlert>

                                            <UncontrolledAlert color="info" className=" alert-dismissible fade show">
                                                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                            </UncontrolledAlert>

                                            <UncontrolledAlert color="warning" className="alert-dismissible fade show">
                                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                            </UncontrolledAlert>

                                            <UncontrolledAlert color="danger" className="alert-dismissible fade show mb-0">
                                                <strong>Oh snap! </strong> Change a few things up and try submitting again.
                                            </UncontrolledAlert>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Advanced Alert </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <code className="text-danger">&lt;Alert color="primary" className="alert-pills"
                                                    &gt; <br />&nbsp;&nbsp;
                                                    &lt;badge color="danger" pill className="me-1"&gt;
                                                    New &lt;/badge&gt; <br />&nbsp;&nbsp;
                                                    &lt;span className="alert-content"&gt;
                                                    A Modern primary alert—check it out! &lt;/span&gt; <br />
                                                    &lt;/Alert&gt;
                                                </code>
                                            </h6>

                                            <div className="d-block">
                                                <Alert color="primary" className="alert-pills">
                                                    <Badge color="info" pill className="me-1">New</Badge>
                                                    <span className="content">
                                                        {" "}
                                                        A Modern primary alert—check it out!{" "}
                                                        <i className="uil uil-angle-right-b"></i>
                                                    </span>
                                                </Alert>
                                            </div>

                                            <div className="d-block">
                                                <Alert color="danger" className="alert-pills mb-0">
                                                    <Badge color="success" pill className="me-1"> New </Badge>
                                                    <span className="content">
                                                        {" "}
                                                        A Modern danger alert—check it out!{" "}
                                                        <i className="uil uil-angle-right-b"></i>
                                                    </span>
                                                </Alert>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Advanced Outline Alert </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <code className="text-danger">
                                                    &lt;Alert color="none" className="alert-outline-primary alert-pills"&gt;
                                                    <br />&nbsp;&nbsp;
                                                    &lt;Badge color="danger" pill className="me-1"&gt;
                                                    New &lt;/Badge&gt; <br />&nbsp;&nbsp;
                                                    &lt;span className="alert-content"&gt; A Modern primary
                                                    alert—check it out! &lt;/span&gt; <br />
                                                    &lt;/Alert&gt;
                                                </code>
                                            </h6>

                                            <div className="d-block">
                                                <Alert color="none" className="alert-outline-primary alert-pills">
                                                    <Badge color="primary" pill className="me-1">New</Badge>
                                                    <span className="content">
                                                        {" "}
                                                        A Modern primary alert—check it out!{" "}
                                                        <i className="uil uil-angle-right-b"></i>
                                                    </span>
                                                </Alert>
                                            </div>

                                            <div className="d-block">
                                                <Alert color="none" className="alert-outline-danger alert-pills mb-0">
                                                    <Badge color="danger" pill className="me-1"> New </Badge>
                                                    <span className="content">
                                                        {" "}
                                                        A Modern danger alert—check it out!{" "}
                                                        <i className="uil uil-angle-right-b"></i>
                                                    </span>
                                                </Alert>
                                            </div>
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

export default Alerts;