// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Badge,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";

class PagePricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: true,
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Pricing" },
      ],
      pricings: [
        {
          id: 1,
          title: "Free",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
        {
          id: 2,
          title: "Starter",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "Free Appointments" },
            { title: "Free Installment" },
            { title: "Enhanced Security" },
          ],
        },
        {
          id: 3,
          title: "PROFESSIONAL",
          price: 59,
          duration: "mo",
          buttonText: "Try It Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
      ],
      pricings1: [
        {
          id: 1,
          title: "Free",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [{ title: "Full Access" }, { title: "Source Files" }],
        },
        {
          id: 2,
          title: "Starter",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "Free Appointments" },
          ],
        },
        {
          id: 3,
          title: "PROFESSIONAL",
          price: 59,
          duration: "mo",
          buttonText: "Try It Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
            { title: "Enhanced Security" },
          ],
        },
        {
          id: 4,
          title: "ULTIMATE",
          price: 79,
          duration: "mo",
          buttonText: "Started Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
            { title: "Free Installment" },
          ],
        },
      ],

      monthPricing: [
        {
          id: 1,
          price: 0,
          title: 'FREE',
          action: 'Buy Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
          ],
        },
        {
          id: 2,
          price: 39,
          title: 'STARTER',
          action: 'Get Started',
          isBest: true,
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
          ],
        },
        {
          id: 3,
          price: 59,
          title: 'PROFESSIONAL',
          action: 'Try It Now',
          isBgClass: true,
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: '1 Domain Free' },
            { id: 4, subItem: 'Enhanced Security' },
          ],
        },
        {
          id: 4,
          price: 79,
          title: 'ULTIMATE',
          action: 'Started Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Enhanced Security' },
            { id: 3, subItem: 'Source Files' },
            { id: 4, subItem: '1 Domain Free' },
            { id: 5, subItem: 'Free Installment' },
          ],
        },
      ],

      yearPricing: [
        {
          id: 1,
          price: 10,
          title: 'FREE',
          action: 'Buy Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
          ],
        },
        {
          id: 2,
          price: 139,
          title: 'STARTER',
          isBest: true,
          action: 'Get Started',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
          ],
        },
        {
          id: 3,
          price: 159,
          title: 'PROFESSIONAL',
          action: 'Try It Now',
          isBgClass: true,
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: '1 Domain Free' },
            { id: 4, subItem: 'Enhanced Security' },
          ],
        },
        {
          id: 4,
          price: 179,
          title: 'ULTIMATE',
          action: 'Started Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Enhanced Security' },
            { id: 3, subItem: 'Source Files' },
            { id: 4, subItem: '1 Domain Free' },
            { id: 5, subItem: 'Free Installment' },
          ],
        },
      ],
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Thomas Israel",
          post: "C.E.O",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: "Barbara McIntosh",
          post: "M.D",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          rating: 4.5,
        },
        {
          id: 3,
          img: img3,
          name: "Carl Oliver",
          post: "P.A",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 5,
        },
        {
          id: 4,
          img: img4,
          name: "Christa Smith",
          post: "Manager",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: "Dean Tolle",
          post: "Developer",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: "ill Webb",
          post: "Designer",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          rating: 5,
        },
      ],
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
    // this.toggleTab1 = this.toggleTab1.bind(this);
    // this.toggle = this.setState(!this.state.plan);
  }

  componentDidMount() {
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggle = () => {
    this.setState({ plan: false });
    console.log(this.state.plan)
  };

  // toggleTab1(tab1) {
  //   if (this.state.activeTab1 !== tab1) {
  //     this.setState({
  //       activeTab1: tab1,
  //     });
  //   }
  // }

  scrollNavigation = () => {
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

  toggleSwitcher = (checked) => {
    const filtMonthly = document.getElementById('filt-monthly');
    const filtYearly = document.getElementById('filt-yearly');
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');

    if (checked) {
      filtYearly.classList.add('toggler--is-active');
      filtMonthly.classList.remove('toggler--is-active');
      yearly.classList.remove('hide');
      monthly.classList.add('hide');
    } else {
      filtMonthly.classList.add('toggler--is-active');
      filtYearly.classList.remove('toggler--is-active');
      monthly.classList.remove('hide');
      yearly.classList.add('hide');
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Pricing </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                </ul>
              </nav>
            </div>
          </Container>

        </section>        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Pricing #1"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="align-items-center">
              {/* pricing */}
              {this.state.pricings.map((pricing, key) => (
                <Col md={4} key={key} className="col-12 mt-4 pt-2">
                  <Card className="pricing pricing-primary business-rate shadow bg-light rounded text-center border-0">
                    {pricing.isActive && (
                      <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                        <span className="text-center d-block shadow small h6">
                          Best
                        </span>
                      </div>
                    )}
                    <CardBody className="py-5">
                      <h6
                        className={
                          pricing.isActive
                            ? "title fw-bold text-uppercase text-primary mb-4"
                            : "title fw-bold text-uppercase text-primary mb-4"
                        }
                      >
                        {pricing.title}
                      </h6>
                      <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">{pricing.price}</span>
                        <span className="h4 align-self-end mb-1">
                          /{pricing.duration}
                        </span>
                      </div>

                      <ul className="list-unstyled mb-0 ps-0">
                        {pricing.features.map((feature, key) => (
                          <li key={key} className="h6 text-muted mb-0">
                            <span className="text-primary h5 me-2">
                              <i className="uil uil-check-circle align-middle"></i>
                            </span>
                            {feature.title}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={pricing.btnLink}
                        className="btn btn-primary mt-4"
                      >
                        {pricing.buttonText}
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* Render Section Title */}
            <SectionTitle
              title="Pricing #2 (Navtab pricing)"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="align-items-center">
              <Col className="col-12 mt-4 pt-2">
                <div className="text-center">
                  <Nav
                    pills
                    className="nav-pills rounded-pill justify-content-center d-inline-block border py-1 px-2"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "px-3 rounded-pill monthly"
                        )}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>{" "}
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "2" },
                          "px-3 rounded-pill yearly"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Yearly{" "}
                        <Badge className="rounded-pill bg-success">
                          15% Off{" "}
                        </Badge>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>

                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      {/* pricing */}
                      <Pricing pricings={this.state.pricings1} />
                    </Row>
                  </TabPane>

                  <TabPane tabId="2">
                    <Row>
                      {/* pricing */}
                      <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                        <Card className="pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                          <CardBody>
                            <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">10</span>
                              <span className="h4 align-self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                        <Card className="pricing pricing-primary business-rate shadow border-0 rounded">
                          <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                          <CardBody>
                            <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">139</span>
                              <span className="h4 align-self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                        <Card className="pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                          <CardBody>
                            <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">159</span>
                              <span className="h4 align-self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>1 Domain Free</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">Try It Now</Link>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                        <Card className="pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                          <CardBody>
                            <h6 className="title name fw-bold text-uppercase mb-4">Ultimate</h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">179</span>
                              <span className="h4 align-self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>1 Domain Free</li>
                              <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Installment</li>
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">Started Now</Link>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Pricing #3 (Switcher pricing)</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">Start working with{" "}
                    <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="switcher-pricing d-flex justify-content-center align-items-center mb-4 pb-2">
                  <label
                    className="toggler text-muted toggler--is-active"
                    id="filt-monthly"
                  >
                    Monthly
                  </label>
                  <div className="form-check form-switch mx-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="switcher"
                      onChange={(e) => {
                        this.toggleSwitcher(e.target.checked);
                      }}
                    />
                  </div>
                  <label className="toggler text-muted" id="filt-yearly">
                    Yearly
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <div className="col-12">
                <div id="monthly" className="wrapper-full">
                  <Row>
                    {this.state.monthPricing.map((item, key) => (
                      <div
                        className="col-lg-3 col-md-6 col-12 mt-4 pt-2"
                        key={key}
                      >
                        <div className={item.isBgClass ?
                          "card pricing pricing-primary business-rate shadow bg-light border-0 rounded"
                          :
                          "card pricing pricing-primary business-rate shadow bg-light border-0 rounded"}>
                          {item.isBest && (
                            <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                              <span className="text-center d-block shadow small h6">
                                Best
                              </span>
                            </div>
                          )}

                          <div className="card-body">
                            <h6 className="title name fw-bold text-uppercase mb-4">
                              {item.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {item.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /mo
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {item.isChildItem.map((item, key) => (
                                <li key={key} className="h6 text-muted mb-0">
                                  <span
                                    className="text-primary h5 me-2"
                                  >
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {item.subItem}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                              {item.action}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Row>
                </div>

                <div id="yearly" className="wrapper-full hide">
                  <Row>
                    {this.state.yearPricing.map((item, key) => (
                      <div
                        className="col-lg-3 col-md-6 col-12 mt-4 pt-2"
                        key={key}
                      >
                        <div className={item.isBgClass ?
                          "card pricing pricing-primary business-rate shadow bg-light border-0 rounded"
                          :
                          "card pricing pricing-primary business-rate shadow bg-light border-0 rounded"}>
                          {item.isBest && (
                            <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                              <span className="text-center d-block shadow small h6">
                                Best
                              </span>
                            </div>
                          )}

                          <div className="card-body">
                            <h6 className="title fw-bold text-uppercase text-primary mb-4">
                              {item.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {item.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /mo
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {item.isChildItem.map((item, key) => (
                                <li key={key} className="h6 text-muted mb-0">
                                  <span
                                    className="text-primary h5 me-2"
                                  >
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {item.subItem}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                              {item.action}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Row>
                </div>
              </div>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* Render Section Title */}
            <SectionTitle
              title="Client Reviews"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            {/* clients slider */}
            <ReviewsSlider reviews={this.state.reviews} colclassName="mt-4" />
          </Container>
        </section>

        <section className="section bg-light">
          <Container>
            <Row>
              <Col md={6} xs="12">
                <div className="d-flex">
                  <i>
                    <FeatherIcon
                      icon="help-circle"
                      className="fea icon-ex-md text-primary me-2 mt-1"
                    />
                  </i>

                  <div className="flex-1">
                    <h5 className="mt-0">
                      How our <span className="text-primary">Landrick</span>{" "}
                      work ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and repetitions in
                      texts.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex">
                  <i>
                    <FeatherIcon
                      icon="help-circle"
                      className="fea icon-ex-md text-primary me-2 mt-1"
                    />
                  </i>

                  <div className="flex-1">
                    <h5 className="mt-0">
                      What is the main process open account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs="12" className="mt-4 pt-2">
                <div className="d-flex">
                  <i>
                    <FeatherIcon
                      icon="help-circle"
                      className="fea icon-ex-md text-primary me-2 mt-1"
                    />
                  </i>

                  <div className="flex-1">
                    <h5 className="mt-0">How to make unlimited data entry ?</h5>
                    <p className="answer text-muted mb-0">
                      Furthermore, it is advantageous when the dummy text is relatively
                      realistic so that the layout impression of the final publication
                      is not compromised.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs="12" className="mt-4 pt-2">
                <div className="d-flex">
                  <i>
                    <FeatherIcon
                      icon="help-circle"
                      className="fea icon-ex-md text-primary me-2 mt-1"
                    />
                  </i>

                  <div className="flex-1">
                    <h5 className="mt-0">
                      Is <span className="text-primary">Landrick</span> safer to
                      use with my account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
              <div className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="page-contact-two" className="btn btn-primary">
                      Contact us <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PagePricing;
