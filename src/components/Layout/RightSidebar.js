import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import contact from "../../assets/images/contact.svg";
import { Link } from 'react-router-dom';

class RightSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onCloseRightBar = this.onCloseRightBar.bind(this);
    }
    onCloseRightBar = () => {
        this.props.onClose();
    };   

    render() {
        return (
            <React.Fragment>
                <div className="custome-drawer offcanvas bg-white shadow show d-flex flex-column h-100">
                    <div className="offcanvas-header p-4 border-bottom">
                        <h5 id="offcanvasRightLabel" className="mb-0">
                            <img src={logodark} height="24" className="light-version" alt="" />
                            <img src={logolight} height="24" className="dark-version" alt="" />
                        </h5>
                        <button type="button" onClick={this.onCloseRightBar} className="btn-close d-flex align-items-center text-dark">
                        </button>
                    </div>
                    <div className="offcanvas-body p-4">
                        <Row>
                            <Col xs={12}>
                                <img src={contact} className="img-fluid d-block mx-auto" style={{ maxWidth: "256px" }} alt="" />
                                <Card className="border-0 mt-5" style={{ zIndex: "1" }}>
                                    <CardBody className="p-0">
                                        <form method="post" action="#" name="myForm">
                                            <p id="error-msg" className="mb-0"></p>
                                            <div id="simple-msg"></div>
                                            <Row>
                                                <Col md={6}>
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FeatherIcon
                                                                icon="user"
                                                                className="fea icon-sm icons"
                                                            />
                                                            <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :" />
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FeatherIcon
                                                                icon="mail"
                                                                className="fea icon-sm icons"
                                                            />
                                                            <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :" />
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <label className="form-label">Subject</label>
                                                        <div className="form-icon position-relative">
                                                            <FeatherIcon
                                                                icon="book"
                                                                className="fea icon-sm icons"
                                                            />
                                                            <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :" />
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FeatherIcon
                                                                icon="message-circle"
                                                                className="fea icon-sm icons clearfix"
                                                            />
                                                            <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Message :"></textarea>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <div className="d-grid">
                                                        <button type="text" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className="offcanvas-footer p-4 border-top text-center mt-auto">
                        <ul className="list-unstyled social-icon social mb-0">
                            <li className="list-inline-item"><Link to="//1.envato.market/landrickreactjs" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="//dribbble.com/Themesbrand" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="//www.behance.net/Themesbrand" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="//www.facebook.com/Themesbrand" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="//www.instagram.com/Themesbrand/" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="//twitter.com/Themesbrand" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="mailto:support@Themesbrand.in" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></Link></li>{" "}
                            <li className="list-inline-item"><Link to="//Themesbrand.in" target="_blank" rel="noreferrer" className="rounded"><i className="uil uil-globe align-middle" title="website"></i></Link></li>{" "}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

RightSidebar.propTypes = {
    onClose: PropTypes.func
};

export default RightSidebar;