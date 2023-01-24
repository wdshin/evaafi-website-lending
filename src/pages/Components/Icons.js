import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import Images
import email from "../../assets/images/icon/Email.svg";
import bitcoin from "../../assets/images/icon/bitcoin.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import location from "../../assets/images/icon/location.svg";

const Icons = () => {
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
                title="Icons"
                breadcrumb="Icons"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-icons">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Icons </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6>Feather Icons</h6>
                                            <p className="text-muted">There are 280+ feather icons and you can get all icons info from here: <Link to="/https://feathericons.com/" target="_blank"><code className="text-primary">https://feathericons.com/</code></Link></p>
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;i FeatherIcon  icon="user" className="fea icon-ex-md me-2" /&gt; &lt;/i&gt;</code></h6>

                                            <div className='hstack gap-2'>
                                                <i>
                                                    <FeatherIcon
                                                        icon="user"
                                                        className="fea icon-ex-md me-1"
                                                    />
                                                </i>{" "}
                                                <i>
                                                    <FeatherIcon
                                                        icon="facebook"
                                                        className="fea icon-ex-md me-1"
                                                    />
                                                </i>{" "}
                                                <i>
                                                    <FeatherIcon
                                                        icon="map-pin"
                                                        className="fea icon-ex-md me-1"
                                                    />
                                                </i>{" "}
                                                <i>
                                                    <FeatherIcon
                                                        icon="linkedin"
                                                        className="fea icon-ex-md me-1"
                                                    />
                                                </i>{" "}
                                                <i>
                                                    <FeatherIcon
                                                        icon="camera"
                                                        className="fea icon-ex-md me-1"
                                                    />
                                                </i>{" "}
                                                <i>
                                                    <FeatherIcon
                                                        icon="mail"
                                                        className="fea icon-ex-md me-1"
                                                    />
                                                </i>
                                            </div>

                                            <h6 className="mt-4">Material Design Icons</h6>
                                            <p className="text-muted">There are 4400+ Material Design icons and you can get all icons info from here: <Link to="/https://materialdesignicons.com/" target="_blank"><code className="text-primary">https://materialdesignicons.com/</code></Link></p>
                                            <h6 className="text-muted mb-4 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;i className="mdi mdi-home"&gt; &lt;/i&gt;</code></h6>
                                            <div className='hstack gap-2'>

                                                <i className="mdi mdi-home h4 me-1"></i>{" "}
                                                <i className="mdi mdi-facebook h4 me-1"></i>
                                                <i className="mdi mdi-chevron-tight h4"></i>
                                                <i className="mdi mdi-camera-image h4 me-1"></i>
                                                <i className="mdi mdi-car-light-high h4 me-1"></i>
                                                <i className="mdi mdi-silverware-fork-knife h4 me-1"></i>
                                            </div>

                                            <h6 className="mt-4">Flaticon Icons</h6>
                                            <p className="text-muted">There are Flaticon icons and you can get all icons info from here: <Link to="/https://www.flaticon.com/packs/basic-icon" target="_blank"><code className="text-primary">https://www.flaticon.com/packs/basic-icon</code></Link></p>

                                            <img src={email} height="50" className="me-3" alt="" />
                                            <img src={bitcoin} height="50" className="me-3" alt="" />
                                            <img src={calendar} height="50" className="me-3" alt="" />
                                            <img src={location} height="50" className="me-3" alt="" />

                                            <h6 className="mt-4">Iconscout (Unicons) Icons</h6>
                                            <p className="text-muted">There are 1100+ Iconscout (Unicons) Icons and you can get all icons info from here: <Link to="/https://iconscout.com/unicons" target="_blank"><code className="text-primary">https://www.flaticon.com/packs/basic-icon</code></Link></p>
                                            <h6 className="text-muted mb-4 pb-2">Ex.
                                                <code className="text-danger"><br />&lt;span className="h3 text-primary me-2"&gt;<br />&nbsp; &lt;i className="uil uil-0-plus"&gt;&lt;/i&gt;<br />&lt;/span&gt;</code></h6>

                                            <div className='hstack'>
                                                <span className="h3 text-primary me-2"><i className="uil uil-0-plus"></i></span>{" "}
                                                <span className="h3 text-primary me-2"><i className="uil uil-android"></i></span>{" "}
                                                <span className="h3 text-primary me-2"><i className="uil uil-bitcoin"></i></span>{" "}
                                                <span className="h3 text-primary me-2"><i className="uil uil-calendar-alt"></i></span>{" "}
                                                <span className="h3 text-primary"><i className="uil uil-chart-pie-alt"></i></span>
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

export default Icons;