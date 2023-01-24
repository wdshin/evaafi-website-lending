import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

//Import Icons
import FeatherIcon from 'feather-icons-react';

const Buttons = () => {
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
                title="Buttons"
                breadcrumb="Buttons"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-button">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Buttons</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-primary"&gt;
                                                    Primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="btn btn-primary mt-2 me-2">Primary</Link>{" "}
                                            <Link to="#" className="btn btn-secondary mt-2 me-2">Secondary</Link>{" "}
                                            <Link to="#" className="btn btn-success mt-2 me-2">Success</Link>{" "}
                                            <Link to="#" className="btn btn-danger mt-2 me-2">Danger</Link>{" "}
                                            <Link to="#" className="btn btn-info mt-2 me-2">Info</Link>{" "}
                                            <Link to="#" className="btn btn-warning mt-2 me-2">Warning</Link>{" "}
                                            <Link to="#" className="btn btn-light mt-2 me-2">Light</Link>{" "}
                                            <Link to="#" className="btn btn-dark mt-2 me-2">Dark</Link>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Buttons Pill</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-pills
                                                    btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="btn btn-pills btn-primary mt-2 me-2">Primary</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-secondary mt-2 me-2">Secondary</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-success mt-2 me-2">Success</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-danger mt-2 me-2">Danger</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-info mt-2 me-2">Info</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-warning mt-2 me-2">Warning</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-light mt-2 me-2">Light</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-dark mt-2 me-2">Dark</Link>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Buttons Soft</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-soft-primary"&gt;
                                                    Primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="btn btn-soft-primary mt-2 me-2">Primary</Link>{" "}
                                            <Link to="#" className="btn btn-soft-secondary mt-2 me-2">Secondary</Link>{" "}
                                            <Link to="#" className="btn btn-soft-success mt-2 me-2">Success</Link>{" "}
                                            <Link to="#" className="btn btn-soft-danger mt-2 me-2">Danger</Link>{" "}
                                            <Link to="#" className="btn btn-soft-info mt-2 me-2">Info</Link>{" "}
                                            <Link to="#" className="btn btn-soft-warning mt-2 me-2">Warning</Link>{" "}
                                            <Link to="#" className="btn btn-soft-light mt-2 me-2">Light</Link>{" "}
                                            <Link to="#" className="btn btn-soft-dark mt-2 me-2">Dark</Link>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Buttons Pill Soft</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-pills
                                                    btn-soft-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="btn btn-pills btn-soft-primary mt-2 me-2">Primary</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-secondary mt-2 me-2">Secondary</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-success mt-2 me-2">Success</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-danger mt-2 me-2">Danger</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-info mt-2 me-2">Info</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-warning mt-2 me-2">Warning</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-light mt-2 me-2">Light</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-soft-dark mt-2 me-2">Dark</Link>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Buttons Outline</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-outline-primary"&gt;
                                                    Primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="btn btn-outline-primary mt-2 me-2">Primary</Link>{" "}
                                            <Link to="#" className="btn btn-outline-secondary mt-2 me-2">Secondary</Link>{" "}
                                            <Link to="#" className="btn btn-outline-success mt-2 me-2">Success</Link>{" "}
                                            <Link to="#" className="btn btn-outline-danger mt-2 me-2">Danger</Link>{" "}
                                            <Link to="#" className="btn btn-outline-info mt-2 me-2">Info</Link>{" "}
                                            <Link to="#" className="btn btn-outline-warning mt-2 me-2">Warning</Link>{" "}
                                            <Link to="#" className="btn btn-outline-light mt-2 me-2">Light</Link>{" "}
                                            <Link to="#" className="btn btn-outline-dark mt-2 me-2">Dark</Link>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Buttons Pill Outline</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-outline-primary"&gt;
                                                    Primary &lt;/Link&gt;</code></h6>
                                            <Link to="#" className="btn btn-pills btn-outline-primary mt-2 me-2">Primary</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-secondary mt-2 me-2">Secondary</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-success mt-2 me-2">Success</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-danger mt-2 me-2">Danger</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-info mt-2 me-2">Info</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-warning mt-2 me-2">Warning</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-light mt-2 me-2">Light</Link>{" "}
                                            <Link to="#" className="btn btn-pills btn-outline-dark mt-2 me-2">Dark</Link>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Button Icons</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2"> Ex. {" "}
                                                <code className="text-danger">
                                                    &lt;Link to="#" className="btn btn-icon btn-primary"&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;  &lt;i&gt;&lt;FeatherIcon icon="facebook" className="fea icon-sm" /&gt;&lt;/i&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Link&gt;
                                                </code>
                                            </h6>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-info mt-2">
                                                        <FeatherIcon icon="twitter" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-danger mt-2">
                                                        <FeatherIcon icon="youtube" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-success mt-2">
                                                        <FeatherIcon icon="gitlab" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-secondary mt-2">
                                                        <FeatherIcon icon="linkedin" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-warning mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-info mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-light mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-dark mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Outline Button Icons</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;Link to="#" className="btn btn-icon
                                                    btn-outline-primary"&gt;<br />
                                                    &nbsp; &nbsp; &nbsp;  &lt;i&gt;&lt;FeatherIcon icon="facebook" className="fea icon-sm" /&gt;&lt;/i&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Link&gt;
                                                </code>
                                            </h6>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-info mt-2">
                                                        <FeatherIcon icon="twitter" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-danger mt-2">
                                                        <FeatherIcon icon="youtube" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-success mt-2">
                                                        <FeatherIcon icon="gitlab" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-secondary mt-2">
                                                        <FeatherIcon icon="linkedin" className="icons" />
                                                    </Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-warning mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-info mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-light mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-outline-dark mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Button Pill Icons</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;Link to="#" className="btn btn-icon
                                                    btn-pills btn-primary"&gt;<br />
                                                    &nbsp; &nbsp; &nbsp;  &lt;i&gt;&lt;FeatherIcon icon="facebook" className="fea icon-sm" /&gt;&lt;/i&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Link&gt;
                                                </code>
                                            </h6>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-info mt-2">
                                                        <FeatherIcon icon="twitter" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-danger mt-2">
                                                        <FeatherIcon icon="youtube" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-success mt-2">
                                                        <FeatherIcon icon="gitlab" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-secondary mt-2">
                                                        <FeatherIcon icon="linkedin" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-warning mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-info mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-light mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-dark mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Outline Button Pill Icons</h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2"> Ex. {" "}
                                                <code className="text-danger">&lt;Link to="#" className="btn btn-icon
                                                    btn-pills btn-outline-primary"&gt;<br />
                                                    &nbsp; &nbsp; &nbsp;  &lt;i&gt;&lt;FeatherIcon icon="facebook" className="fea icon-sm" /&gt;&lt;/i&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Link&gt;
                                                </code>
                                            </h6>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-info mt-2">
                                                        <FeatherIcon icon="twitter" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-danger mt-2">
                                                        <FeatherIcon icon="youtube" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-success mt-2">
                                                        <FeatherIcon icon="gitlab" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-secondary mt-2">
                                                        <FeatherIcon icon="linkedin" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-warning mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-info mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-light mt-2">
                                                        <FeatherIcon icon="github" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-pills btn-outline-dark mt-2">
                                                        <FeatherIcon icon="star" className="icons" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0">Button Sizing</h5>
                                        </div>
                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-primary
                                                btn-sm"&gt; Primary &lt;/Link&gt;</code></h6>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-sm btn-primary mt-2 me-2">Small</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-sm btn-pills btn-primary mt-2 me-2">Small</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-sm btn-outline-primary mt-2 me-2">Small</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-sm btn-pills btn-outline-primary mt-2 me-2">Small</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-pills btn-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-outline-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-pills btn-outline-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                            </ul>

                                            <h6 className="text-muted mb-2 mt-4 pb-2">
                                                Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-primary
                                                    btn-lg"&gt; Primary &lt;/Link&gt;</code></h6>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-lg btn-primary mt-2 me-2">Large</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-lg btn-pills btn-primary mt-2 me-2">Large</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-lg btn-outline-primary mt-2 me-2">Large</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-lg btn-pills btn-outline-primary mt-2 me-2">Large</Link></li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-lg btn-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-lg btn-pills btn-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-lg btn-outline-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item me-1">
                                                    <Link to="#" className="btn btn-icon btn-lg btn-pills btn-outline-primary mt-2">
                                                        <FeatherIcon icon="facebook" className="icons" />
                                                    </Link>
                                                </li>
                                            </ul>
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

export default Buttons;
