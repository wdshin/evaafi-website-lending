import React, { useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Dropdowns = () => {
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
            <section className="section" id="ui-dropdown">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h4 className="title mb-0"> Dropdown </h4>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. <br />
                                                <pre><code className="text-danger">
                                                    <br />&lt;ButtonGroup className="btn-group dropdown-primary me-2 mt-2"&gt;<br/>
                                                    &lt;UncontrolledDropdown&gt;
                                                    <br />&nbsp;&nbsp;&lt;DropdownToggle color="primary" type="button"&gt;
                                                    <br />  &nbsp;&nbsp;Primary
                                                    <br />&nbsp;&nbsp;&lt;/DropdownToggle&gt;
                                                    <br />&nbsp;&nbsp;&lt;DropdownMenu&gt;
                                                    <br /> &nbsp;&nbsp;&lt;DropdownItem&gt;Home&lt;/DropdownItem&gt;
                                                    <br /> &nbsp;&nbsp;&lt;DropdownItem&gt;Services&lt;/DropdownItem&gt;
                                                    <br /> &nbsp;&nbsp;&lt;DropdownItem&gt;About us&lt;/DropdownItem&gt;
                                                    <br /> &nbsp;&nbsp;&lt;DropdownItem divider&gt;&lt;/DropdownItem&gt;
                                                    <br /> &nbsp;&nbsp;&lt;DropdownItem &gt;Contact us&lt;/DropdownItem&gt;
                                                    <br />&nbsp;&nbsp;&lt;/DropdownMenu&gt;
                                                    <br />&nbsp;&lt;/ButtonGroup&gt;
                                                    <br />&lt;/UncontrolledDropdown&gt;
                                                </code></pre>
                                            </h6>
                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="primary" type="button">
                                                        Primary<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>{" "}

                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="secondary" type="button">
                                                        Secondary<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>{" "}

                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="success" type="button">
                                                        Success<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>{" "}

                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="warning" type="button">
                                                        Warning<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>{" "}

                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="info" type="button">
                                                        Info<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>{" "}

                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="danger" type="button">
                                                        Danger<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>{" "}

                                            <ButtonGroup className="me-2 mt-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="dark" type="button">
                                                        Dark<i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Home</DropdownItem>
                                                        <DropdownItem>Services</DropdownItem>
                                                        <DropdownItem>About us</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem>Contact us</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </ButtonGroup>
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

export default Dropdowns;