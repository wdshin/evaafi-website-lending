import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ComponentsSidebar = () => {

    const [com, setCom] = useState(0);

    useEffect(() => {
        const component = window.location.pathname.slice(4);
        setCom(component);
    },[com]);


    return (
        <React.Fragment>
            <Col lg={3} md={4} className="sticky-bar component-wrapper d-md-block d-none">
                <h5>Components</h5>
                <ul className="list-unstyled sidebar-nav mb-0">
                    <li className={com === "button" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-button"
                            className={com === "button" ? "navbar-link active" : "navbar-link"}
                        >
                            Buttons
                        </Link>
                    </li>
                    <li className={com === "alert" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-alert"
                            className={com === "alert" ? "navbar-link active" : "navbar-link"}
                        >
                            Alert
                        </Link>
                    </li>
                    <li className={com === "typography" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-typography"
                            className={com === "typography" ? "navbar-link active" : "navbar-link"}
                        >
                            Typography
                        </Link>
                    </li>
                    <li className={com === "dropdown" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-dropdown"
                            className={com === "dropdown" ? "navbar-link active" : "navbar-link"}
                        >
                            Dropdowns
                        </Link>
                    </li>
                    <li className={com === "background" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-background"
                            className={com === "background" ? "navbar-link active" : "navbar-link"}
                        >
                            Background
                        </Link>
                    </li>
                    <li className={com === "text" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-text"
                            className={com === "text" ? "navbar-link active" : "navbar-link"}
                        >
                            Text Color
                        </Link>
                    </li>
                    <li className={com === "badges" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-badges"
                            className={com === "badges" ? "navbar-link active" : "navbar-link"}
                        >
                            Badges
                        </Link>
                    </li>
                    <li className={com === "accordion" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-accordion"
                            className={com === "accordion" ? "navbar-link active" : "navbar-link"}
                        >
                            Accordions
                        </Link>
                    </li>
                    <li className={com === "card" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-card"
                            className={com === "card" ? "navbar-link active" : "navbar-link"}
                        >
                            Cards
                        </Link>
                    </li>
                    <li className={com === "shadow" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-shadow"
                            className={com === "shadow" ? "navbar-link active" : "navbar-link"}
                        >
                            Shadows
                        </Link>
                    </li>
                    <li className={com === "border" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-border"
                            className={com === "border" ? "navbar-link active" : "navbar-link"}
                        >
                            Borders
                        </Link>
                    </li>
                    <li className={com === "carousel" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-carousel"
                            className={com === "carousel" ? "navbar-link active" : "navbar-link"}
                        >
                            Carousel
                        </Link>
                    </li>
                    <li className={com === "form" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-form"
                            className={com === "form" ? "navbar-link active" : "navbar-link"}
                        >
                            Form Elements
                        </Link>
                    </li>
                    <li className={com === "breadcrumb" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-breadcrumb"
                            className={com === "breadcrumb" ? "navbar-link active" : "navbar-link"}>
                            Breadcrumb
                        </Link>
                    </li>
                    <li className={com === "pagination" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-pagination"
                            className={com === "pagination" ? "navbar-link active" : "navbar-link"}
                        >
                            Pagination
                        </Link>
                    </li>
                    <li className={com === "avatar" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-avatar"
                            className={com === "avatar" ? "navbar-link active" : "navbar-link"}
                        >
                            Avatars
                        </Link>
                    </li>
                    <li className={com === "nav-tabs" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-nav-tabs"
                            className={com === "nav-tabs" ? "navbar-link active" : "navbar-link"}
                        >
                            Nav Tabs
                        </Link>
                    </li>
                    <li className={com === "modals" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-modals"
                            className={com === "modals" ? "navbar-link active" : "navbar-link"}
                        >
                            Modals
                        </Link>
                    </li>
                    <li className={com === "tables" ? "navbar-item active" : "navbar-item"}>
                        <Link
                            to="/ui-tables"
                            className={com === "tables" ? "navbar-link active" : "navbar-link"}
                        >
                            Tables
                        </Link>
                    </li>
                    <li className={com === "icons" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-icons"
                            className={com === "icons" ? "navbar-link active" : "navbar-link"}
                        >
                            Icons
                        </Link>
                    </li>
                    <li className={com === "progressbar" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-progressbar"
                            className={com === "progressbar" ? "navbar-link active" : "navbar-link"}
                        >
                            Progressbar
                        </Link>
                    </li>
                    <li className={com === "lightbox" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-lightbox"
                            className={com === "lightbox" ? "navbar-link active" : "navbar-link"}
                        >
                            Lightbox
                        </Link>
                    </li>
                    <li className={com === "tooltip-popover" ? "navbar-item active" : "navbar-item"}>
                        <Link to="/ui-tooltip-popover"
                            className={com === "tooltip-popover" ? "navbar-link active" : "navbar-link"}
                        >
                            Tooltips & Popovers
                        </Link>
                    </li>
                </ul>
            </Col>
        </React.Fragment>
    );
};

export default ComponentsSidebar;