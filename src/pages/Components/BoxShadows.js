import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const BoxShadows = () => {
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
                title="Box Shadows"
                breadcrumb="Shadows"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-shadow">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Box Shadows </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"> <br />
                                                    &lt;div className="shadow-none p-3 mb-5 bg-light rounded"&gt;No shadow&lt;/div&gt; <br />
                                                    &lt;div className="shadow-sm p-3 mb-5 bg-body rounded"&gt;shadow-sm&lt;/div&gt; <br />
                                                    &lt;div className="shadow p-3 mb-5 bg-body rounded"&gt;shadow&lt;/div&gt;<br />
                                                    &lt;div className="shadow-md p-3 mb-5 bg-body rounded"&gt;shadow-md&lt;/div&gt;<br />
                                                    &lt;div className="shadow-lg p-3 mb-5 bg-body rounded"&gt;shadow-lg&lt;/div&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
                                            <div className="shadow-sm p-3 mb-5 bg-body rounded">shadow-sm</div>
                                            <div className="shadow p-3 mb-5 bg-body rounded">shadow</div>
                                            <div className="shadow-md p-3 mb-5 bg-body rounded">shadow-md</div>
                                            <div className="shadow-lg p-3 mb-5 bg-body rounded">shadow-lg</div>
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

export default BoxShadows;