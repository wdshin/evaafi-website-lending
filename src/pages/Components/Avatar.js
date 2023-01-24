import React, { useEffect } from 'react';
import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

//import Images
import client05 from "../../assets/images/client/05.jpg";

const Avatar = () => {
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
                title="Avatar"
                breadcrumb="Avatar"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-avatar">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Default Avatars </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src="assets/images/home/01.jpg" className="avatar avatar-ex-sm rounded"&gt;</code></h6>

                                            <img
                                                src={client05}
                                                className="avatar avatar-ex-sm me-2 rounded"
                                                id="bottomTooltipExSm"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipExSm"
                                            >
                                                avatar-ex-sm
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-ex-small me-2 rounded"
                                                id="bottomTooltipExSmall"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipExSmall"
                                            >
                                                avatar-ex-small
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-md-sm me-2 rounded"
                                                id="bottomTooltipMd"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipMd"
                                            >
                                                avatar-md-sm
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-small me-2 rounded"
                                                id="bottomTooltipSmall"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipSmall"
                                            >
                                                avatar-small
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-md-md mt-sm-0 me-2 rounded"
                                                id="bottomTooltipmd"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipmd"
                                            >
                                                avatar-md-md
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-medium mt-sm-0 me-2 rounded"
                                                id="bottomTooltipMedium"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipMedium"
                                            >
                                                avatar-medium
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-large mt-sm-0 me-2 rounded"
                                                id="bottomTooltipLarge"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipLarge"
                                            >
                                                avatar-large
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-ex-large mt-sm-0 me-2 rounded"
                                                id="bottomTooltipExLarge"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipExLarge"
                                            >
                                                avatar-ex-large
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Circle Avatars </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src="assets/images/home/01.jpg" className="avatar avatar-ex-sm rounded-circle"&gt;</code></h6>

                                            <img
                                                src={client05}
                                                className="avatar avatar-ex-sm me-2 rounded-circle"
                                                id="bottomTooltipExCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipExCircle"
                                            >
                                                avatar-ex-sm
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-ex-small me-2 rounded-circle"
                                                id="bottomTooltipExSmallCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipExSmallCircle"
                                            >
                                                avatar-ex-small
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-md-sm me-2 rounded-circle"
                                                id="bottomTooltipMdCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipMdCircle"
                                            >
                                                avatar-md-sm
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-small me-2 rounded-circle"
                                                id="bottomTooltipSmallCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipSmallCircle"
                                            >
                                                avatar-small
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-md-md mt-sm-0 me-2 rounded-circle"
                                                id="bottomTooltipmdCircle"
                                                alt=""
                                            />
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipmdCircle"
                                            >{" "}
                                                avatar-md-md
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-medium mt-sm-0 me-2 rounded-circle"
                                                id="bottomTooltipMediumCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipMediumCircle"
                                            >
                                                avatar-medium
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-large mt-sm-0 me-2 rounded-circle"
                                                id="bottomTooltipLargeCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipLargeCircle"
                                            >
                                                avatar-large
                                            </UncontrolledTooltip>

                                            <img
                                                src={client05}
                                                className="avatar avatar-ex-large mt-sm-0 me-2 rounded-circle"
                                                id="bottomTooltipExLargeCircle"
                                                alt=""
                                            />{" "}
                                            <UncontrolledTooltip
                                                placement="bottom"
                                                target="bottomTooltipExLargeCircle"
                                            >
                                                avatar-ex-large
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

export default Avatar;