import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

//import Images
import online02 from "../../assets/images/course/online/ab02.jpg";
import subscribe from "../../assets/images/subscribe.png";
import cart from "../../assets/images/shop/cart.png";

//Import Icons
import FeatherIcon from 'feather-icons-react';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const Modals = () => {
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

    const [modal, setModal] = useState(false);
    function tog_modal() {
        setModal(!modal)
    };

    const [loginModal, setLoginModal] = useState(false);
    function login_modal() {
        setLoginModal(!loginModal)
    };

    const [subscribeModal, setSubscribeModal] = useState(false);
    function subscribe_modal() {
        setSubscribeModal(!subscribeModal)
    };

    const [wishlistModal, setWishlistModal] = useState(false);
    function wishlist_modal() {
        setWishlistModal(!wishlistModal)
    };

    const [emptyCartModal, setEmptyCartModal] = useState(false);
    function emptyCart_modal() {
        setEmptyCartModal(!emptyCartModal)
    };

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Please Enter Password")
        }),
        onSubmit: (values) => {
            // console.log(values)
        }
    });

    return (
        <React.Fragment>
            <ComponentHeader
                title="Modals"
                breadcrumb="Modals"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-modals">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Modal </h5>
                                        </div>

                                        <div className="p-4">
                                            <Link to="#" onClick={() => tog_modal()} className="btn btn-primary m-1"> Click Here</Link>{" "}
                                            <Link to="#" onClick={() => login_modal()} className="btn btn-primary m-1"> Login Popup</Link>{" "}
                                            <Link to="#" onClick={() => subscribe_modal()} className="btn btn-primary m-1">Subscribe Popup</Link>{" "}
                                            <Link to="#" onClick={() => wishlist_modal()} className="btn btn-primary m-1">Wishlist Popup</Link>{" "}
                                            <Link to="#" onClick={() => emptyCart_modal()} className="btn btn-primary m-1">Empty Cart Popup</Link>{" "}
                                        </div>

                                        <Modal
                                            id="LoginForm"
                                            tabIndex="-1"
                                            isOpen={modal}
                                            toggle={() => {
                                                tog_modal()
                                            }}
                                            centered
                                        >
                                            <ModalHeader
                                                toggle={tog_modal}
                                                role="dialog"
                                                autoFocus={true}
                                                className="border-bottom"
                                            >
                                                Modal title
                                            </ModalHeader>
                                            <ModalBody>
                                                <div className="bg-white p-3 rounded box-shadow">
                                                    <p className="text-muted mb-0">Dummy text is also used to demonstrate the
                                                        appearance of different typefaces and layouts, and
                                                        in general the content of dummy text is
                                                        nonsensical. Due to its widespread use as filler
                                                        text for layouts, non-readability is of great
                                                        importance: human perception is tuned to recognize
                                                        certain patterns and repetitions in texts. If the
                                                        distribution of letters and 'words' is random, the
                                                        reader will not be distracted from making a
                                                        neutral judgement on the visual impact and
                                                        readability of the typefaces (typography), or the
                                                        distribution of text on the page (layout or type area).
                                                        For this reason, dummy text usually consists of
                                                        a more or less random series of words or syllables.
                                                        This prevents repetitive patterns from impairing the
                                                        overall visual impression and facilitates the comparison
                                                        of different typefaces. Furthermore, it is advantageous
                                                        when the dummy text is relatively realistic so that the
                                                        layout impression of the final publication is not compromised.
                                                    </p>
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="secondary" onClick={tog_modal} type="button">Close</Button>
                                                <Button color="primary" type="button">Save changes</Button>
                                            </ModalFooter>

                                        </Modal>

                                        <Modal
                                            size="lg"
                                            isOpen={loginModal}
                                            toggle={() => {
                                                login_modal()
                                            }}
                                            id="login-popup"
                                            tabIndex="-1"
                                            centered

                                        >
                                            <ModalBody
                                                className="modal-lg p-0"
                                            >
                                                <Container fluid className="px-0">
                                                    <Row className="align-items-center g-0">
                                                        <Col lg={6} md={5}>
                                                            <img src={online02} className="img-fluid" alt="" />
                                                        </Col>

                                                        <Col lg={6} md={7}>
                                                            <Form
                                                                onSubmit={(e) => {
                                                                    e.preventDefault();
                                                                    validation.handleSubmit();
                                                                    return false;
                                                                }}
                                                                className="login-form p-4"
                                                            >
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <div className="mb-3">
                                                                            <Label className="form-label">Your Email <span className="text-danger">*</span></Label>
                                                                            <div className="form-icon position-relative">
                                                                                <FeatherIcon icon="user" className="fea icon-sm icons" />
                                                                                <Input
                                                                                    type="email"
                                                                                    className="form-control ps-5"
                                                                                    placeholder="Email"
                                                                                    name="email"
                                                                                    onChange={validation.handleChange}
                                                                                    onBlur={validation.handleBlur}
                                                                                    value={validation.values.email || ""}
                                                                                    invalid={
                                                                                        validation.touched.email && validation.errors.email ? true : false
                                                                                    }
                                                                                />
                                                                                {validation.touched.email && validation.errors.email ? (
                                                                                    <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                                                ) : null}
                                                                            </div>
                                                                        </div>
                                                                    </Col>

                                                                    <Col lg={12}>
                                                                        <div className="mb-3">
                                                                            <Label className="form-label">Password <span className="text-danger">*</span></Label>
                                                                            <div className="form-icon position-relative">
                                                                                <FeatherIcon icon="key" className="fea icon-sm icons" />
                                                                                <Input
                                                                                    type="password"
                                                                                    className="form-control ps-5"
                                                                                    placeholder="Password"
                                                                                    name="password"
                                                                                    onChange={validation.handleChange}
                                                                                    onBlur={validation.handleBlur}
                                                                                    value={validation.values.password || ""}
                                                                                    invalid={
                                                                                        validation.touched.password && validation.errors.password ? true : false
                                                                                    }
                                                                                />
                                                                                {validation.touched.password && validation.errors.password ? (
                                                                                    <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                                                ) : null}
                                                                            </div>
                                                                        </div>
                                                                    </Col>

                                                                    <Col lg={12}>
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="mb-3">
                                                                                <div className="form-check">
                                                                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                                                    <Label className="form-check-label" for="flexCheckDefault4">Remember me</Label>
                                                                                </div>
                                                                            </div>
                                                                            <p className="forgot-pass mb-0"><Link to="/auth-re-password" className="text-dark fw-bold">Forgot password ?</Link></p>
                                                                        </div>
                                                                    </Col>

                                                                    <Col lg={12} className="mb-0">
                                                                        <div className="d-grid">
                                                                            <Button color="primary" type="submit">Sign in</Button>
                                                                        </div>
                                                                    </Col>

                                                                    <Col className="col-12 text-center">
                                                                        <p className="mb-0 mt-3">
                                                                            <small className="text-dark me-2">Don't have an account ?</small>
                                                                            <Link to="/auth-signup" className="text-dark fw-bold">Sign Up</Link>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </Form>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </ModalBody>
                                        </Modal>

                                        <Modal
                                            size="lg"
                                            isOpen={subscribeModal}
                                            toggle={() => {
                                                subscribe_modal()
                                            }}
                                            id="subscribe-popup"
                                            tabIndex="-1"
                                            centered
                                        >
                                            <ModalBody className="p-0" style={{ background: `url(${subscribe}) no-repeat` }}>
                                                <button type="button" onClick={() => subscribe_modal(false)} className="btn-close float-end m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="clearfix"></div>
                                                <Container fluid className="px-0">
                                                    <Row className="align-items-center g-0">
                                                        <Col lg={6} className="offset-lg-6">
                                                            <div className="pb-5 pt-4 px-4">
                                                                <h6 className="text-muted">Be the first to know daily updates</h6>

                                                                <h4>Signup for daily updates</h4>
                                                                <p className="text-muted mb-0">Subscribe to the Landrick mailing list to receive updates on new arrivals, special offers and our promotions.</p>
                                                                <Form className="mt-4">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="foot-subscribe mb-3">
                                                                                <div className="form-icon position-relative">
                                                                                    <FeatherIcon icon="mail" className="fea icon-sm icons" />
                                                                                    <Input type="email" name="email" id="daily-updates" className="form-control ps-5 rounded" placeholder="Your email : " required />
                                                                                </div>
                                                                            </div>
                                                                        </Col>

                                                                        <Col lg={12}>
                                                                            <div className="d-grid">
                                                                                <Input type="submit" id="submitsubscribe" name="send" className="btn btn-primary text-center" value="Subscribe" />
                                                                            </div>
                                                                        </Col>

                                                                        <Col className="col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-0 mt-3">
                                                                                    <small className="text-dark me-2">Already have an account ?</small>
                                                                                    <Link to="#" className="text-dark fw-bold">Sign in</Link></p>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </Form>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </ModalBody>
                                        </Modal>

                                        <Modal
                                            isOpen={wishlistModal}
                                            toggle={() => {
                                                wishlist_modal()
                                            }}
                                            id="wishlist"
                                            tabIndex="-1"
                                            centered
                                        >
                                            <ModalBody className="py-5">
                                                <div className="text-center">
                                                    <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{ height: "95px", width: "95px" }}>
                                                        <h1 className="mb-0"><i className="uil uil-heart-break align-middle"></i></h1>
                                                    </div>
                                                    <div className="mt-4">
                                                        <h4>Your wishlist is empty.</h4>
                                                        <p className="text-muted">Create your first wishlist request...</p>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-outline-primary">+ Create new wishlist</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ModalBody>

                                        </Modal>

                                        <Modal
                                            isOpen={emptyCartModal}
                                            toggle={() => {
                                                emptyCart_modal()
                                            }}
                                            id="empty-cart"
                                            tabIndex="-1"
                                            centered
                                        >
                                            <ModalBody className="py-5">
                                                <div className="text-center">
                                                    <img src={cart} className="avatar avatar-medium rounded-circle shadow" alt="" />
                                                    <div className="mt-4">
                                                        <h4>Your cart is empty.</h4>
                                                        <p className="text-muted">Looks like you haven't made your choice yet...</p>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-primary">Start Shopping</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ModalBody>
                                        </Modal>
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

export default Modals;