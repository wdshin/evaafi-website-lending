import React, { useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Breadcrumbs = () => {
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
                title="Breadcrumbs"
                breadcrumb="Breadcrumbs"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-breadcrumb">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Breadcrumb </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <pre><code className="text-danger"> <br />
                                                    &lt;nav aria-label="breadcrumb" className="d-inline-block"&gt;<br />
                                                    &nbsp; &lt;Breadcrumb className="rounded shadow mb-0 px-4 py-2"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;BreadcrumbItem&gt;&lt;Link to="/"&gt;Landrick&lt;/Link&gt;&lt;/BreadcrumbItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;BreadcrumbItem className="breadcrumb-item"&gt;&lt;Link to="#"&gt;Docs&lt;/Link&gt;&lt;/BreadcrumbItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;BreadcrumbItem className="breadcrumb-item active" aria-current="page"&gt;Components&lt;/BreadcrumbItem&gt;<br />
                                                    &nbsp; &lt;/Breadcrumb&gt;<br />
                                                    &lt;/nav&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <nav aria-label="breadcrumb" className="d-inline-block">
                                                <Breadcrumb listClassName="rounded shadow mb-0 px-4 py-2">
                                                    <BreadcrumbItem><Link to="/">Landrick</Link></BreadcrumbItem>
                                                    <BreadcrumbItem><Link to="#">Docs</Link></BreadcrumbItem>
                                                    <BreadcrumbItem active>Components</BreadcrumbItem>
                                                </Breadcrumb>
                                            </nav>

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

export default Breadcrumbs;