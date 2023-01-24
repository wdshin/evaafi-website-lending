import React, { useEffect } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Progressbar = () => {
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
                title="Progressbar"
                breadcrumb="Progressbar"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-progressbar">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Progressbar </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <pre><code className="text-danger"><br />
                                                    &lt;div className="progress-box"&gt;<br />
                                                    &nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;WordPress&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp;&lt;Progress value=&#123;84&#125; color="primary" barClassName="position-relative"&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &lt;div className="progress-value d-block text-muted h6"&gt;84%&lt;/div&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Progress&gt;<br />
                                                    &lt;/div&gt;<br /><br />

                                                    &lt;div className="progress-box mt-4"&gt;<br />
                                                    &nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;PHP / MYSQL&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp;&lt;Progress value=&#123;75&#125; color="primary" barClassName="position-relative"&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &lt;div className="progress-value d-block text-muted h6"&gt;75%&lt;/div&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Progress&gt;<br />
                                                    &lt;/div&gt;<br /><br />

                                                    &lt;div className="progress-box mt-4"&gt;<br />
                                                    &nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;Angular / JavaScript&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp;&lt;Progress value=&#123;79&#125; color="primary" barClassName="position-relative"&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &lt;div className="progress-value d-block text-muted h6"&gt;79%&lt;/div&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Progress&gt;<br />
                                                    &lt;/div&gt;<br /><br />

                                                    &lt;div className="progress-box mt-4"&gt;<br />
                                                    &nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;HTML&lt;/h6&gt;<br />
                                                    &nbsp;&nbsp;&lt;Progress value=&#123;95&#125; color="primary" barClassName="position-relative"&gt;<br />
                                                    &nbsp;&nbsp; &nbsp; &lt;div className="progress-value d-block text-muted h6"&gt;95%&lt;/div&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Progress&gt;<br />
                                                    &lt;/div&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <div className="progress-box">
                                                <h6 className="title text-muted">WordPress</h6>
                                                <Progress
                                                    value={84}
                                                    color="primary"
                                                    barClassName="position-relative"
                                                >
                                                    <div className="progress-value d-block text-muted h6">84%</div>
                                                </Progress>
                                            </div>
                                            <div className="progress-box mt-4">
                                                <h6 className="title text-muted">PHP / MYSQL</h6>
                                                <Progress
                                                    value={75}
                                                    color="primary"
                                                    barClassName="position-relative"
                                                >
                                                    <div className="progress-value d-block text-muted h6">75%</div>
                                                </Progress>
                                            </div>
                                            <div className="progress-box mt-4">
                                                <h6 className="title text-muted">Angular / JavaScript</h6>
                                                <Progress
                                                    value={79}
                                                    color="primary"
                                                    barClassName="position-relative"
                                                >
                                                    <div className="progress-value d-block text-muted h6">79%</div>
                                                </Progress>
                                            </div>
                                            <div className="progress-box mt-4">
                                                <h6 className="title text-muted">HTML</h6>
                                                <Progress
                                                    value={95}
                                                    color="primary"
                                                    barClassName="position-relative"
                                                >
                                                    <div className="progress-value d-block text-muted h6">95%</div>
                                                </Progress>
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

export default Progressbar;