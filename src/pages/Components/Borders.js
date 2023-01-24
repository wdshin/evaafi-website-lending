import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Borders = () => {
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
                title="Borders"
                breadcrumb="Borders"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-border">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Borders </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;span className="border"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border-top"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border-end"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border-bottom"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border-start"&gt;&lt;/span&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border-top bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border-end bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border-bottom bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border-start bg-light rounded mb-0"></p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Border Width </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;span className="border border-1"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-2"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-3"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-4"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-5"&gt;&lt;/span&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-1 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-2 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-3 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-4 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-5 bg-light rounded mb-0"></p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Border Subtractive </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;span className="border-0"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-top-0"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-end-0"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-bottom-0"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-start-0"&gt;&lt;/span&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border-0 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-top-0 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-end-0 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-bottom-0 bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-start-0 bg-light rounded mb-0"></p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Border Color </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;span className="border border-primary"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-secondary"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-success"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-danger"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-warning"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-info"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-light"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-dark"&gt;&lt;/span&gt;<br />
                                                    &lt;span className="border border-white"&gt;&lt;/span&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-primary bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-secondary bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-success bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-danger bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-warning bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-info bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-dark bg-light rounded mb-0"></p>
                                            </div>
                                            {" "}
                                            <div className="d-inline-block me-1 mt-2">
                                                <p className="avatar avatar-small border border-white bg-light rounded mb-0"></p>
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

export default Borders;