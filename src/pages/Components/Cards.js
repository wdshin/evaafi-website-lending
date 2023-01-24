import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

// import images
import blog1 from "../../assets/images/blog/01.jpg";
import work14 from "../../assets/images/work/14.jpg";

const Cards = () => {
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
                title="Cards"
                breadcrumb="Cards"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-card">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col>
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Cards </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted pb-2">Vertical Card <br />
                                                <span>
                                                    <h6 className="text-muted mb-2 pb-2">Ex.
                                                        <pre><code className="text-danger"><br />
                                                            &lt;Card className="shadow rounded border-0 overflow-hidden"&gt; <br />
                                                            &nbsp;&nbsp; &lt;img src="assets/images/blog/01.jpg" className="img-fluid" alt=""&gt; <br />
                                                            &nbsp;&nbsp; &lt;CardBody&gt; <br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h5 className="card-title"&gt;Saas & Software : Landrick&lt;/h5&gt; <br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p className="text-muted"&gt;Due to its widespread use as filler text for layouts,
                                                            non-readability is of great importance&lt;/p&gt; <br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Link to="#" className="text-primary"&gt;Read More
                                                            &lt;i className="uil uil-angle-right-b align-middle"&gt;&lt;/i&gt;&lt;/Link&gt; <br />
                                                            &nbsp;&nbsp; &lt;/CardBody&gt; <br />
                                                            &lt;/Card&gt; <br />
                                                        </code></pre>
                                                    </h6>
                                                </span>
                                            </h6>

                                            <Row>
                                                <Col lg={6} className="col-12 mt-4 pt-2">
                                                    <Card className="shadow rounded border-0 overflow-hidden">
                                                        <img src={blog1} className="img-fluid" alt="" />
                                                        <CardBody>
                                                            <h5 className="card-title">Saas & Software : Landrick</h5>
                                                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                                                            <Link to="#" className="text-primary">Read More
                                                                <i className="uil uil-angle-right-b align-middle"></i>
                                                            </Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col lg={6} className="col-12 mt-4 pt-2">
                                                    <Card className="shadow rounded border-0 overflow-hidden">
                                                        <CardBody>
                                                            <h5 className="card-title">Saas & Software : Landrick</h5>
                                                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                                                            <Link to="#" className="text-primary">Read More
                                                                <i className="uil uil-angle-right-b align-middle"></i>
                                                            </Link>
                                                        </CardBody>
                                                        <img src={blog1} className="img-fluid" alt="" />
                                                    </Card>
                                                </Col>
                                            </Row>

                                            <div className="mt-4 pt-4 border-top">
                                                <h6 className="text-muted pb-2">Horizontal Card <br />
                                                    <span>
                                                        <h6 className="text-muted mb-2 pb-2">Ex.
                                                            <pre><code className="text-danger"> <br />
                                                                &lt;Card className="shadow rounded border-0 overflow-hidden"&gt; <br />
                                                                &nbsp;&nbsp; &lt;Row className="g-0"&gt; <br />
                                                                &nbsp;&nbsp;&nbsp; &lt;Col className="col-md-5"&gt; <br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp; &lt;img src="assets/images/work/14.jpg" className="img-fluid" alt="..."&gt; <br />
                                                                &nbsp;&nbsp;&nbsp; &lt;/Col&gt; <br />
                                                                &nbsp;&nbsp;&nbsp; &lt;div className="col-md-7"&gt; <br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp; &lt;CardBody&gt; <br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h5 className="card-title"&gt;Saas & Software : Landrick&lt;/h5&gt; <br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p className="card-text"&gt;This is a wider card with supporting text below as a natural lead-in
                                                                to additional content. This content is a little bit longer.&lt;/p&gt; <br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p className="card-text"&gt;&lt;small className="text-muted"&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt; <br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp; &lt;/CardBody&gt; <br />
                                                                &nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                                                                &nbsp;&nbsp; &lt;/Row&gt; <br />
                                                                &lt;/Card&gt;
                                                            </code></pre>
                                                        </h6>
                                                    </span>
                                                </h6>
                                            </div>
                                            <Row>
                                                <Col lg={12} className="mt-4 pt-2">
                                                    <Card className="shadow rounded border-0 overflow-hidden">
                                                        <Row className="row g-0">
                                                            <Col md={5}>
                                                                <img src={work14} className="img-fluid" alt="..." />
                                                            </Col>
                                                            <Col md={7}>
                                                                <CardBody>
                                                                    <h5 className="card-title">Saas & Software : Landrick</h5>
                                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                                </CardBody>
                                                            </Col>
                                                        </Row>
                                                    </Card>
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

export default Cards;