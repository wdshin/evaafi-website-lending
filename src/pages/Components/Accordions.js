import React, { useEffect } from 'react';
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Accordions = () => {
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
                title="Accordions"
                breadcrumb="Accordions"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-accordion">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Accordions</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger">
                                                    <br />&lt;Accordion id="buyingquestion"&gt;
                                                    <br />&emsp;&emsp;&lt;AccordionItem className="rounded"&gt;
                                                    <br />&emsp;&emsp;&emsp;&lt;h2 className="accordion-header" id="headingOne"&gt;
                                                    <br />   &nbsp;&nbsp;&nbsp;&lt;button className="accordion-button border-0 bg-light" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    <br />   &nbsp;&nbsp;&nbsp;aria-expanded="true" aria-controls="collapseOne"&gt;
                                                    <br />   &nbsp;&nbsp;&nbsp;How does it work ?
                                                    <br />  &nbsp;&nbsp;&nbsp;&lt;/button&gt;
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;/h2&gt;
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;Collapse id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne"
                                                    <br />   &nbsp;&nbsp;&nbsp;data-bs-parent="#buyingquestion"&gt;
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;div className="accordion-body text-muted"&gt;
                                                    <br />   &nbsp;&nbsp;&nbsp;There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;/div&gt;
                                                    <br /> &nbsp;&nbsp;&lt;/Collapse&gt;
                                                    <br /> &nbsp;&lt;/AccordionItem&gt;

                                                    <br /> &nbsp;&lt;AccordionItem className="accordion-item rounded mt-2"&gt;
                                                    <br />   &nbsp;&nbsp;&lt;h2 className="accordion-header" id="headingTwo"&gt;
                                                    <br />  &nbsp;&nbsp;&nbsp;&lt;button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    <br />   &nbsp;&nbsp;&nbsp;aria-expanded="false" aria-controls="collapseTwo"&gt;
                                                    <br />   &nbsp;&nbsp;&nbsp;Do I need a designer to use Landrick ?
                                                    <br />  &nbsp;&nbsp;&nbsp;&lt;/button&gt;
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;/h2&gt;
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;Collapse id="collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="headingTwo"
                                                    <br />   &nbsp;&nbsp;&nbsp;data-bs-parent="#buyingquestion"&gt;
                                                    <br />   &nbsp;&nbsp;&nbsp;&lt;div className="accordion-body text-muted"&gt;
                                                    <br />    &nbsp;&nbsp;&nbsp;There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                                    <br /> &nbsp;&nbsp;&nbsp;&lt;/div&gt;
                                                    <br />&nbsp;&nbsp;&nbsp;&lt;/Collapse&gt;
                                                    <br />&nbsp;&lt;/AccordionItem&gt;
                                                    <br />&lt;/Accordion&gt;</code></pre>
                                            </h6>
                                            <div>
                                                <div className="accordion" id="buyingquestion">
                                                    <div className="accordion-item rounded">
                                                        <h2 className="accordion-header">
                                                            <button id="headingOne" className="accordion-button border-0 bg-light" type="button"
                                                            >
                                                                How does it work ?
                                                            </button>
                                                        </h2>
                                                        <UncontrolledCollapse defaultOpen toggler="#headingOne" className="border-0"
                                                        >
                                                            <div className="accordion-body text-muted">
                                                                There are many variations of passages of Lorem Ipsum available, but
                                                                the majority have suffered alteration in some form.
                                                            </div>
                                                        </UncontrolledCollapse>
                                                    </div>

                                                    <div className="accordion-item rounded mt-2">
                                                        <h2 className="accordion-header">
                                                            <button id="headingTwo" className="accordion-button border-0 bg-light collapsed"
                                                                type="button">
                                                                Do I need a designer to use Landrick ?
                                                            </button>
                                                        </h2>
                                                        <UncontrolledCollapse toggler="#headingTwo" className="border-0"
                                                        >
                                                            <div className="accordion-body text-muted">
                                                                There are many variations of passages of Lorem Ipsum available, but
                                                                the majority have suffered alteration in some form.
                                                            </div>
                                                        </UncontrolledCollapse>
                                                    </div>

                                                    <div className="accordion-item rounded mt-2">
                                                        <h2 className="accordion-header" >
                                                            <button id="headingThree" className="accordion-button border-0 bg-light collapsed"
                                                                type="button" >
                                                                What do I need to do to start selling ?
                                                            </button>
                                                        </h2>
                                                        <UncontrolledCollapse toggler="#headingThree" className="border-0"
                                                        >
                                                            <div className="accordion-body text-muted">
                                                                There are many variations of passages of Lorem Ipsum available, but
                                                                the majority have suffered alteration in some form.
                                                            </div>
                                                        </UncontrolledCollapse>
                                                    </div>
                                                </div>
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

export default Accordions;