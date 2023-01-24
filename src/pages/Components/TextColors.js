import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const TextColors = () => {
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
                title="Text Colors"
                breadcrumb="Text Colors"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-text">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12" id="text-colors">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Text Color </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex.{" "}
                                                <code className="text-danger">&lt;div className="text-primary"&gt;
                                                    Landrick Saas & Software Template &lt;/div&gt;</code></h6>
                                            <h6 className="text-primary">.text-primary</h6>
                                            <h6 className="text-secondary">.text-secondary</h6>
                                            <h6 className="text-success">.text-success</h6>
                                            <h6 className="text-danger">.text-danger</h6>
                                            <h6 className="text-warning">.text-warning</h6>
                                            <h6 className="text-info">.text-info</h6>
                                            <h6 className="text-light bg-dark">.text-light</h6>
                                            <h6 className="text-white bg-dark">.text-white</h6>
                                            <h6 className="text-white-50 bg-dark">.text-white-50</h6>
                                            <h6 className="text-dark mb-0">.text-dark</h6>
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

export default TextColors;