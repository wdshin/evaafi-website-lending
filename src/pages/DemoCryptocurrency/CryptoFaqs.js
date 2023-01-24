import React, { Component } from 'react';
import NavBar from './NavBar';

//import images
import shape from "../../assets/images/shape02.png";
import {
    Col,
    Container,
    Row,
    Card,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';
import classnames from "classnames";
import { Link } from 'react-router-dom';
import AccordianCommon from "../../components/Shared/AccordianCommon";
import Footer from './Footer';

class CryptoFaqs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1"
        };
    }

    toggle(tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />

                <section className="bg-half-170 bg-light d-table w-100"
                    style={{ background: `url(${shape}) top left` }}>
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title mb-0">FAQs</h4>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="/index-crypto">Crypto</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                                </ul>
                            </nav>
                        </div>
                    </Container>
                </section>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={4} md={5} xs={12}>
                                <Card className="section-title p-4 shadow rounded border-0">
                                    <Nav className="nav-pills nav-justified flex-column bg-transparent mb-0" id="pills-tab" role="tablist">
                                        <NavItem>
                                            <NavLink
                                                to="#"
                                                className={classnames(
                                                    { active: this.state.activeTab === "1" },
                                                    "shadow rounded"
                                                )}
                                                onClick={() => {
                                                    this.toggle("1");
                                                }}
                                            >
                                                <div className="text-start py-1 px-3">
                                                    <h6 className="mb-0">About Landrick</h6>
                                                </div>
                                            </NavLink>
                                        </NavItem>

                                        <li className="nav-item mt-3">
                                            <NavLink
                                                to="#"
                                                className={classnames(
                                                    { active: this.state.activeTab === "2" },
                                                    "shadow rounded"
                                                )}
                                                onClick={() => {
                                                    this.toggle("2");
                                                }}
                                            >
                                                <div className="text-start py-1 px-3">
                                                    <h6 className="mb-0">Accounts</h6>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li className="nav-item mt-3">
                                            <NavLink
                                                to="#"
                                                className={classnames(
                                                    { active: this.state.activeTab === "3" },
                                                    "shadow rounded"
                                                )}
                                                onClick={() => {
                                                    this.toggle("3");
                                                }}
                                            >
                                                <div className="text-start py-1 px-3">
                                                    <h6 className="mb-0">Transactions</h6>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li className="nav-item mt-3">
                                            <NavLink
                                                to="#"
                                                className={classnames(
                                                    { active: this.state.activeTab === "4" },
                                                    "shadow rounded"
                                                )}
                                                onClick={() => {
                                                    this.toggle("4");
                                                }}
                                            >
                                                <div className="text-start py-1 px-3">
                                                    <h6 className="mb-0">Cryptocurrency Withdrawals</h6>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </Nav>
                                </Card>
                            </Col>

                            <Col lg={8} md={7} className="col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1" className="">
                                        <div className="section-title" id="tech">
                                            <h5>About Landrick</h5>
                                        </div>
                                        <div className="accordion mt-4 pt-2" id="buyingquestion">
                                            <AccordianCommon
                                                question1="How does it work ?"
                                                answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question2="Do I need a designer to use Landrick ?"
                                                answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question3="What do I need to do to start selling ?"
                                                answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question4="What happens when I receive an order ?"
                                                answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question5="How can i contact your technical team ?"
                                                answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                            />
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2" className="">
                                        <div className="section-title" id="tech">
                                            <h5>Accounts</h5>
                                        </div>
                                        <div className="accordion mt-4 pt-2" id="buyingquestion">
                                            <AccordianCommon
                                                question1="How does it work ?"
                                                answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question2="Do I need a designer to use Landrick ?"
                                                answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question3="What do I need to do to start selling ?"
                                                answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question4="What happens when I receive an order ?"
                                                answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question5="How can i contact your technical team ?"
                                                answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                            />
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3" className="">
                                        <div className="section-title" id="tech">
                                            <h5>Transactions</h5>
                                        </div>
                                        <div className="accordion mt-4 pt-2" id="buyingquestion">
                                            <AccordianCommon
                                                question1="How does it work ?"
                                                answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question2="Do I need a designer to use Landrick ?"
                                                answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question3="What do I need to do to start selling ?"
                                                answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question4="What happens when I receive an order ?"
                                                answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question5="How can i contact your technical team ?"
                                                answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                            />
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="4" className="">
                                        <div className="section-title" id="tech">
                                            <h5>Cryptocurrency Withdrawals</h5>
                                        </div>
                                        <div className="accordion mt-4 pt-2" id="buyingquestion">
                                            <AccordianCommon
                                                question1="How does it work ?"
                                                answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question2="Do I need a designer to use Landrick ?"
                                                answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question3="What do I need to do to start selling ?"
                                                answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question4="What happens when I receive an order ?"
                                                answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                                question5="How can i contact your technical team ?"
                                                answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                            />
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title text-center">
                                    <h4 className="title mb-4">Be the first to know about Crypto news everyday</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>

                                    <div className="subcribe-form mt-5">
                                        <form>
                                            <div className="mb-0">
                                                <input type="email" id="email2" name="email" className="rounded-pill border" required placeholder="Enter your email address" />
                                                <button type="submit" className="btn btn-pills btn-primary">Notify me</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* import Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default CryptoFaqs;