import React, { useEffect } from 'react';
import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Background = () => {
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
                title="Background Colors"
                breadcrumb="Background"
            />
            <ComponentSvg
            />
            <section className="section" id="bg-colors">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Background Color </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.{" "}
                                                <code className="text-danger">&lt;div className="bg-primary"&gt;
                                                    Landrick Saas & Software Template &lt;/div&gt;</code></h6>
                                            <div className="d-inline-block me-1 mt-2" id="bgPrimary">
                                                <p className="avatar avatar-small bg-primary rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgPrimary" placement="top">
                                                .bg-primary
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgSecondary">
                                                <p className="avatar avatar-small bg-secondary rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip
                                                target="bgSecondary"
                                                placement="top"
                                            >
                                                .bg-secondary
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgsuccess">
                                                <p className="avatar avatar-small bg-success rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgsuccess" placement="top">
                                                .bg-success
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgdanger">
                                                <p className="avatar avatar-small bg-danger rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgdanger" placement="top">
                                                .bg-danger
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgwarning">
                                                <p className="avatar avatar-small bg-warning rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgwarning" placement="top">
                                                .bg-warning
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bginfo">
                                                <p className="avatar avatar-small bg-info rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bginfo" placement="top">
                                                .bg-info
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bglight">
                                                <p className="avatar avatar-small bg-light rounded mb-0"></p>
                                            </div>
                                            <UncontrolledTooltip target="bglight" placement="top">
                                                .bg-light
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgwhite">
                                                <p className="avatar avatar-small bg-white border rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgwhite" placement="top">
                                                .bg-white
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgdark">
                                                <p className="avatar avatar-small bg-dark rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgdark" placement="top">
                                                .bg-dark
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgmuted">
                                                <p className="avatar avatar-small bg-muted rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bgmuted" placement="top">
                                                .bg-muted
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bblack">
                                                <p className="avatar avatar-small bg-black rounded mb-0"></p>
                                            </div> {" "}
                                            <UncontrolledTooltip target="bblack" placement="top">
                                                .bg-black
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Background Gradient Color </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;div className="bg-soft-primary"&gt;
                                                    Landrick Saas & Software Template &lt;/div&gt;</code></h6>
                                            <div className="d-inline-block me-1 mt-2" id="gradientPrimary-soft">
                                                <p className="avatar avatar-small bg-soft-primary rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientPrimary-soft"
                                                placement="top"
                                            >
                                                .bg-soft-primary
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientSecondary-soft">
                                                <p className="avatar avatar-small bg-soft-secondary rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientSecondary-soft"
                                                placement="top"
                                            >
                                                .bg-soft-secondary
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientSuccess-soft">
                                                <p className="avatar avatar-small bg-soft-success rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientSuccess-soft"
                                                placement="top"
                                            >
                                                .bg-soft-success
                                            </UncontrolledTooltip>


                                            <div className="d-inline-block me-1 mt-2" id="gradientDanger-soft">
                                                <p className="avatar avatar-small bg-soft-danger rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientDanger-soft"
                                                placement="top"
                                            >
                                                .bg-soft-danger
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientWarning-soft">
                                                <p className="avatar avatar-small bg-soft-warning rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientWarning-soft"
                                                placement="top"
                                            >
                                                .bg-soft-warning
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientInfo-soft">
                                                <p className="avatar avatar-small bg-soft-info rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientInfo-soft"
                                                placement="top"
                                            >
                                                .bg-soft-info
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientlight-soft">
                                                <p className="avatar avatar-small bg-soft-light rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientlight-soft"
                                                placement="top"
                                            >
                                                .bg-soft-light
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientWhite-soft">
                                                <p className="avatar avatar-small bg-soft-white border rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientWhite-soft"
                                                placement="top"
                                            >
                                                .bg-soft-white
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientDark-soft">
                                                <p className="avatar avatar-small bg-soft-dark rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientDark-soft"
                                                placement="top"
                                            >
                                                .bg-soft-dark
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="gradientMuted-soft">
                                                <p className="avatar avatar-small bg-soft-muted rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="gradientMuted-soft"
                                                placement="top"
                                            >
                                                .bg-soft-muted
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Soft Background Color </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex. {" "}
                                                <code className="text-danger">&lt;div className="bg-soft-primary"&gt;
                                                    Landrick Saas & Software Template &lt;/div&gt;</code></h6>

                                            <div className="d-inline-block me-1 mt-2" id="bgPrimary-soft">
                                                <p className="avatar avatar-small bg-soft-primary rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgPrimary-soft"
                                                placement="top"
                                            >
                                                .bg-soft-primary
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgSecondary-soft">
                                                <p className="avatar avatar-small bg-soft-secondary rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgSecondary-soft"
                                                placement="top"
                                            >
                                                .bg-soft-secondary
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgsuccess-soft">
                                                <p className="avatar avatar-small bg-soft-success rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgsuccess-soft"
                                                placement="top"
                                            >
                                                .bg-soft-success
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgdanger-soft">
                                                <p className="avatar avatar-small bg-soft-danger rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgdanger-soft"
                                                placement="top"
                                            >
                                                .bg-soft-danger
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgwarning-soft">
                                                <p className="avatar avatar-small bg-soft-warning rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgwarning-soft"
                                                placement="top"
                                            >
                                                .bg-soft-warning
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bginfo-soft">
                                                <p className="avatar avatar-small bg-soft-info rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bginfo-soft"
                                                placement="top"
                                            >
                                                .bg-soft-info
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bglight-soft">
                                                <p className="avatar avatar-small bg-soft-light rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bglight-soft"
                                                placement="top"
                                            >
                                                .bg-soft-light
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgwhite-soft">
                                                <p className="avatar avatar-small bg-soft-white border rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgwhite-soft"
                                                placement="top"
                                            >
                                                .bg-soft-white
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgdark-soft">
                                                <p className="avatar avatar-small bg-soft-dark rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgdark-soft"
                                                placement="top"
                                            >
                                                .bg-soft-dark
                                            </UncontrolledTooltip>

                                            <div className="d-inline-block me-1 mt-2" id="bgmuted-soft">
                                                <p className="avatar avatar-small bg-soft-muted rounded mb-0"></p>
                                            </div>{" "}
                                            <UncontrolledTooltip
                                                target="bgmuted-soft"
                                                placement="top"
                                            >
                                                .bg-soft-muted
                                            </UncontrolledTooltip>
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

export default Background;