import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Typography = () => {
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
                title="Typography"
                breadcrumb="Typography"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-typography">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Heading </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;</code></h6>
                                            <h1>H1. Bootstrap heading</h1>
                                            <h2>H2. Bootstrap heading</h2>
                                            <h3>H3. Bootstrap heading</h3>
                                            <h4>H4. Bootstrap heading</h4>
                                            <h5>H5. Bootstrap heading</h5>
                                            <h6 className="mb-0">H6. Bootstrap heading</h6>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Display Heading </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;p className="display-1"&gt; Display 1 &lt;/p&gt;</code></h6>
                                            <p className="display-1">Display 1</p>
                                            <p className="display-2">Display 2</p>
                                            <p className="display-3">Display 3</p>
                                            <p className="display-4">Display 4</p>
                                            <p className="display-5">Display 5</p>
                                            <p className="display-6 mb-0">Display 6</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> List </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br /><code className="text-danger">
                                                &lt;ul className="list-unstyled text-muted"&gt; <br />
                                                &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;<br />
                                                &nbsp;&nbsp;&nbsp;&lt;i className="uil uil-check-circle align-middle"&gt;&lt;/i&gt; <br />
                                                &nbsp;&lt;/span&gt;
                                                Digital Marketing Solutions for Tomorrow&lt;/li&gt;<br />
                                                &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;<br />
                                                &nbsp;&nbsp;&nbsp;&lt;i className="uil uil-check-circle align-middle"&gt;&lt;/i&gt;
                                                &lt;/span&gt; <br />
                                                &nbsp;&nbsp; &nbsp;Our Talented &amp; Experienced Marketing Agency&lt;/li&gt;<br />
                                                &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt; <br />
                                                &nbsp;&nbsp;&lt;i className="uil uil-check-circle align-middle"&gt;&lt;/i&gt;&lt;/span&gt; <br />
                                                &nbsp;&nbsp;Create your own skin to match your brand&lt;/li&gt;<br />
                                                &lt;/ul&gt;
                                            </code></h6>

                                            <ul className="list-unstyled text-muted">
                                                <li className="mb-1"><span className="text-primary h5 me-2">
                                                    <i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                                <li className="mb-1"><span className="text-primary h5 me-2">
                                                    <i className="uil uil-check-circle align-middle"></i></span>Our Talented &amp; Experienced Marketing Agency</li>
                                                <li className="mb-1"><span className="text-primary h5 me-2">
                                                    <i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Blockquote </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex.
                                                <br /> <code className="text-danger">
                                                    &lt;div className="blockquote-wrapper"&gt;<br />
                                                    &nbsp;&lt;div className="blockquote p-4 p-md-5 rounded-lg position-relative"&gt;<br />
                                                    &nbsp;&nbsp;&lt;h4&gt;Launch your campaign and benefit from our expertise on designing and
                                                    managing conversion centered bootstrap v5 html page.&lt;/h4&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&lt;div className="position-absolute start-0" style="z-index: -1; top: -30px;"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;i className="mdi mdi-format-quote-open text-primary opacity-1"
                                                    style="font-size: 100px;"&gt;&lt;/i&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&lt;/div&gt;<br />
                                                    &nbsp;&lt;h6 className="author"&gt;- Themesbrand&lt;/h6&gt;<br />
                                                    &lt;/div&gt;
                                                </code></h6>

                                            <div className="blockquote-wrapper">
                                                <div className="blockquote p-4 p-md-5 rounded-lg position-relative">
                                                    <h4>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</h4>

                                                    <div className="position-absolute start-0" style={{ zIndex: -1, top: "-30px" }}>
                                                        <i className="mdi mdi-format-quote-open text-primary opacity-1" style={{ fontSize: "100px" }}></i>
                                                    </div>
                                                </div>

                                                <h6 className="author">- Themesbrand</h6>
                                            </div>

                                            <h6 className="text-muted mt-5 mb-4 pt-5 pb-2 border-top">Ex.
                                                <br /> <code className="text-danger">
                                                    &lt;blockquote className="blockquote mt-3 p-3"&gt;<br />
                                                    &nbsp;&lt;p className="text-muted mb-0 fst-italic"&gt;" There are many variations of passages of Lorem Ipsum available,
                                                    but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "&lt;/p&gt;<br />
                                                    &lt;/blockquote&gt;
                                                </code></h6>

                                            <blockquote className="blockquote mt-3 p-3">
                                                <p className="text-muted mb-0 fst-italic">" There are many variations of passages of Lorem Ipsum available,
                                                    but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                            </blockquote>
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

export default Typography;