import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Input, Label, Button } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Forms = () => {
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
                title="Forms Elements"
                breadcrumb="Forms Elements"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-form">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Forms </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Row&gt; <br />
                                                    &nbsp; &lt;Col md="6"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp; &lt;div className="mb-3"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;Label className="form-label"&gt;Your Name &lt;span className="text-danger"&gt;*&lt;/span&gt;&lt;/Label&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="form-icon position-relative"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;FeatherIcon icon="user" className="fea icon-sm icons"&gt;&lt;/FeatherIcon&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;Input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                                                    &nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                                                    &nbsp; &lt;/Col&gt;<br />
                                                    &nbsp; &lt;Col md="6"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;div className="mb-3"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;Label className="form-label"&gt;Your Email &lt;span className="text-danger"&gt;*&lt;/span&gt;&lt;/Label&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="form-icon position-relative"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;FeatherIcon icon="mail" className="fea icon-sm icons"&gt;&lt;/FeatherIcon&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;Input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp; &lt;/Col&gt;<br />
                                                    &nbsp; &lt;Col md="12"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;div className="mb-3"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;Label className="form-label"&gt;Subject&lt;/Label&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="form-icon position-relative"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;FeatherIcon icon="book" className="fea icon-sm icons"&gt;&lt;/FeatherIcon&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;Input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp; &lt;/Col&gt;<br />
                                                    &nbsp; &lt;Col md="12"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;div className="mb-3"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;Label className="form-label"&gt;Comments&lt;/Label&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="form-icon position-relative"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;FeatherIcon icon="message-circle" className="fea icon-sm icons"&gt;&lt;/FeatherIcon&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Your Message :"&gt;&lt;/textarea&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp; &lt;/Col&gt;<br />
                                                    &lt;/div&gt;<br />
                                                    &lt;Row&gt;<br />
                                                    &nbsp;&nbsp; &lt;Col sm="12"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;Input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Message"&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Col&gt;<br />
                                                    &lt;/Row&gt;<br />
                                                </code></pre>
                                            </h6>
                                            <Form>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">
                                                                Your Name
                                                                <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="form-icon position-relative">                                                                
                                                                    <FeatherIcon
                                                                        icon="user"
                                                                        className="fea icon-sm icons"
                                                                    />                                                                
                                                                <Input
                                                                    name="name"
                                                                    id="name" type="text"
                                                                    className="form-control ps-5"
                                                                    placeholder="First Name :"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">
                                                                Your Email
                                                                <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="form-icon position-relative">                                                               
                                                                    <FeatherIcon
                                                                        icon="mail"
                                                                        className="fea icon-sm icons"
                                                                    />                                                               
                                                                <Input
                                                                    name="email"
                                                                    id="email"
                                                                    type="email"
                                                                    className="form-control ps-5"
                                                                    placeholder="Your email :"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">Subject</Label>
                                                            <div className="form-icon position-relative">                                                               
                                                                    <FeatherIcon
                                                                        icon="book"
                                                                        className="fea icon-sm icons"
                                                                    />                                                                
                                                                <Input
                                                                    name="subject"
                                                                    id="subject"
                                                                    className="form-control ps-5"
                                                                    placeholder="Your subject :"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">Comments</Label>
                                                            <div className="form-icon position-relative">                                                                
                                                                    <FeatherIcon
                                                                        icon="message-circle"
                                                                        className="fea icon-sm icons"
                                                                    />                                                                
                                                                <textarea
                                                                    name="comments"
                                                                    id="comments"
                                                                    rows="4"
                                                                    className="form-control ps-5"
                                                                    placeholder="Your Message :"
                                                                >
                                                                </textarea>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <Button type="submit" id="submit" name="send" className="btn" color="primary">Send Message</Button>
                                                        {/* <Input
                                                            type="submit"
                                                            id="submit"
                                                            name="send"
                                                            className="btn btn-primary"
                                                            value="Send Message"
                                                        /> */}
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Checkboxes </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"> <br />
                                                    &lt;div className="form-check form-check-inline"&gt;<br />
                                                    &nbsp; &lt;div className="mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;div className="form-check"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" checked value="" id="flexCheckDefault1"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexCheckDefault1"&gt;One&lt;/Label&gt;<br />
                                                    &nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="form-check form-check-inline"&gt;<br />
                                                    &nbsp; &lt;div className="mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;div className="form-check"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexCheckDefault2"&gt;Two&lt;/Label&gt;<br />
                                                    &nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="form-check form-check-inline"&gt;<br />
                                                    &nbsp; &lt;div className="mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;div className="form-check"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" disabled value="" id="flexCheckDefault3"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexCheckDefault3"&gt;Disabled&lt;/Label&gt;<br />
                                                    &nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />
                                                </code></pre>
                                            </h6>
                                            <div className="form-check form-check-inline">
                                                <div className="mb-0">
                                                    <div className="form-check">
                                                        <Input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="flexCheckDefault1"
                                                            defaultChecked
                                                        />
                                                        <Label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault1"
                                                        >
                                                            One
                                                        </Label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <div className="mb-0">
                                                    <div className="form-check">
                                                        <Input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="flexCheckDefault2"
                                                        />
                                                        <Label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault2"
                                                        >
                                                            Two
                                                        </Label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <div className="mb-0">
                                                    <div className="form-check">
                                                        <Input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            disabled
                                                            value=""
                                                            id="flexCheckDefault3"
                                                        />
                                                        <Label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault3"
                                                        >
                                                            Disabled
                                                        </Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Radio Buttons </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br />
                                                    &nbsp; &lt;div className="form-check mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault1"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexRadioDefault1"&gt;Yes&lt;/Label&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br />
                                                    &nbsp; &lt;div className="form-check mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault2"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexRadioDefault2"&gt;No&lt;/Label&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br />
                                                    &nbsp; &lt;div className="form-check mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" defaultChecked type="radio" disabled name="flexRadioDefault" id="flexRadioDefault3"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexRadioDefault3"&gt;Disabled&lt;/Label&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />
                                                </code></pre>
                                            </h6>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <div className="form-check mb-0">
                                                    <Input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault1"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        Yes
                                                    </Label>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <div className="form-check mb-0">
                                                    <Input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault2"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        No
                                                    </Label>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <div className="form-check mb-0">
                                                    <Input
                                                        className="form-check-input"
                                                        type="radio"
                                                        disabled
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault3"
                                                        defaultChecked
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault3"
                                                    >
                                                        Disabled
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Switches Button </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;div className="form-check form-switch"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexSwitchCheckDefault"&gt;Default switch checkbox input&lt;/Label&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="form-check form-switch"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexSwitchCheckChecked"&gt;Checked switch checkbox input&lt;/Label&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="form-check form-switch"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexSwitchCheckDisabled"&gt;Disabled switch checkbox input&lt;/Label&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="form-check form-switch"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled&gt;<br />
                                                    &nbsp;&nbsp; &lt;Label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled"&gt;Disabled checked switch checkbox input&lt;/Label&gt;<br />
                                                    &lt;/div&gt;<br />
                                                </code></pre>
                                            </h6>
                                            <div className="form-check form-switch">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault"
                                                />
                                                <Label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckDefault"
                                                >
                                                    Default switch checkbox input
                                                </Label>
                                            </div>

                                            <div className="form-check form-switch">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckChecked"
                                                    defaultChecked
                                                />
                                                <Label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckChecked"
                                                >
                                                    Checked switch checkbox input
                                                </Label>
                                            </div>

                                            <div className="form-check form-switch">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDisabled"
                                                    disabled
                                                />
                                                <Label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckDisabled"
                                                >
                                                    Disabled switch checkbox input
                                                </Label>
                                            </div>

                                            <div className="form-check form-switch">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled"
                                                    disabled
                                                    defaultChecked
                                                />
                                                <Label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckCheckedDisabled"
                                                >
                                                    Disabled checked switch checkbox input
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Form Select Box </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"> <br />
                                                    &lt;select className="form-select form-control" aria-label="Default select example"&gt;<br />
                                                    &nbsp;&nbsp; &lt;option selected&gt;Open this select menu&lt;/option&gt;<br />
                                                    &nbsp;&nbsp; &lt;option value="1"&gt;One&lt;/option&gt;<br />
                                                    &nbsp;&nbsp; &lt;option value="2"&gt;Two&lt;/option&gt;<br />
                                                    &nbsp;&nbsp; &lt;option value="3"&gt;Three&lt;/option&gt;<br />
                                                    &lt;/select&gt;<br />
                                                </code></pre>
                                            </h6>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option defaultValue>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Subscribe Form </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;div className="subcribe-form"&gt;<br />
                                                    &nbsp;&nbsp; &lt;Form&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;Input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder="Your email :" required&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;Button type="submit" color="primary" className="btn btn-pills"&gt;Subscribe&lt;/Button&gt;<br />
                                                    &nbsp;&nbsp; &lt;/Form&gt;<br />
                                                    &lt;/div&gt;
                                                </code></pre>
                                            </h6>
                                            <div className="subcribe-form">
                                                <Form>
                                                    <Input
                                                        name="email"
                                                        id="email2"
                                                        type="email"
                                                        className="form-control rounded-pill shadow"
                                                        placeholder="Your email :"
                                                        required
                                                    />
                                                    <Button type="submit" color="primary" className="btn btn-pills">Subscribe</Button>
                                                </Form>
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

export default Forms;