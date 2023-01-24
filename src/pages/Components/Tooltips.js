import React, { useEffect } from 'react';
import { Container, Row, Col, Button, UncontrolledTooltip, UncontrolledPopover, PopoverHeader } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Tooltips = () => {
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
                title="Dropdowns"
                breadcrumb="Dropdowns"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-tooltip-popover">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h4 className="title mb-0"> Tooltips </h4>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. <br />
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Top Tooltip"&gt;Top&lt;/Link&gt; <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="left" title="Left Tooltip"&gt;Left&lt;/Link&gt; <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Bottom Tooltip"&gt;Bottom&lt;/Link&gt; <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" title="Right Tooltip"&gt;Right&lt;/Link&gt;
                                                </code></pre>
                                            </h6>

                                            <Button
                                                to="#"
                                                className="me-2 mt-2"
                                                id="topTooltip"
                                                color="primary"
                                            >
                                                Top
                                            </Button>{" "}
                                            <UncontrolledTooltip
                                                placement="top"
                                                target="topTooltip"
                                            >
                                                Top Tooltip
                                            </UncontrolledTooltip>

                                            <Button
                                                to="#"
                                                className="me-2 mt-2"
                                                id="leftTooltip"
                                                color="primary"
                                            >
                                                Left
                                            </Button>{" "}
                                            <UncontrolledTooltip
                                                placement="left"
                                                target="leftTooltip"
                                            >
                                                Left Tooltip
                                            </UncontrolledTooltip>

                                            <Button
                                                to="#"
                                                className="me-2 mt-2"
                                                id="bottomTooltip"
                                                color="primary"
                                            >
                                                Bottom
                                            </Button>{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltip"
                                            >
                                                Bottom Tooltip
                                            </UncontrolledTooltip>

                                            <Button
                                                to="#"
                                                className="me-2 mt-2"
                                                id="rightTooltip"
                                                color="primary"
                                            >
                                                Right
                                            </Button>{" "}
                                            <UncontrolledTooltip
                                                placement="right"
                                                target="rightTooltip"
                                            >
                                                Right Tooltip
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h4 className="title mb-0"> Popovers </h4>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. <br />
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Top Tooltip"&gt;Top&lt;/Link&gt; <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="left" title="Left Tooltip"&gt;Left&lt;/Link&gt; <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Bottom Tooltip"&gt;Bottom&lt;/Link&gt; <br />
                                                    &lt;Link to="#" className="btn btn-primary me-2 mt-2" data-bs-toggle="tooltip"
                                                    data-bs-placement="right" title="Right Tooltip"&gt;Right&lt;/Link&gt;
                                                </code></pre>
                                            </h6>
                                            <Button to="#"
                                                className="me-2 mt-2"
                                                id="popoverTop"
                                                color="primary"
                                            >
                                                Top
                                            </Button>{" "}
                                            <UncontrolledPopover
                                                placement="top"
                                                target="popoverTop"
                                            >
                                                <PopoverHeader> Top Popover </PopoverHeader>
                                            </UncontrolledPopover>

                                            <Button
                                                className="me-2 mt-2"
                                                id="popoverLeft"
                                                color="primary"
                                            >
                                                Left
                                            </Button>{" "}
                                            <UncontrolledPopover
                                                placement="left"
                                                target="popoverLeft"
                                            >
                                                <PopoverHeader> Left Popover </PopoverHeader>
                                            </UncontrolledPopover>

                                            <Button
                                                className="me-2 mt-2"
                                                id="popoverBottom"
                                                color="primary"
                                            >
                                                Bottom
                                            </Button>{" "}
                                            <UncontrolledPopover
                                                placement="bottom"
                                                target="popoverBottom"
                                            >
                                                <PopoverHeader> Bottom Popover </PopoverHeader>
                                            </UncontrolledPopover>

                                            <Button
                                                className="me-2 mt-2"
                                                id="popoverRight"
                                                color="primary"
                                            >
                                                Right
                                            </Button>{" "}
                                            <UncontrolledPopover
                                                placement="right"
                                                target="popoverRight"
                                            >
                                                <PopoverHeader> Right Popover </PopoverHeader>
                                            </UncontrolledPopover>
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

export default Tooltips;