import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Fade in effect
import FadeIn from "react-fade-in";

//Import Images
import bgImg from "../../../assets/images/2.jpg";
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/2.jpg";
import work3 from "../../../assets/images/work/3.jpg";
import work4 from "../../../assets/images/work/4.jpg";
import work5 from "../../../assets/images/work/5.jpg";
import work6 from "../../../assets/images/work/6.jpg";
import work7 from "../../../assets/images/work/7.jpg";
import work8 from "../../../assets/images/work/8.jpg";
import work9 from "../../../assets/images/work/9.jpg";

class AllCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Pages", link: "#" },
        { id: 3, name: "Work", link: "#" },
        { id: 4, name: "Classic" },
      ],
      works: [
        {
          image: work1,
          title: "200% Extended Facebook Reach",
          isBusiness: true,
          category: "Business",
        },
        {
          image: work2,
          title: "SEO Success For Insulation",
          isMarketing: true,
          category: "Marketing",
        },
        {
          image: work3,
          title: "Mobile-Friendly Campaigns",
          isFinance: true,
          category: "Finance",
        },
        {
          image: work4,
          title: "HVAC SEO Campaign",
          isHR: true,
          category: "Human Research",
        },
        {
          image: work5,
          title: "Social Media & Small Business",
          isBusiness: true,
          category: "Business",
        },
        {
          image: work6,
          title: "PPC Success For HVAC Company",
          isMarketing: true,
          category: "Marketing",
        },
        {
          image: work7,
          title: "Ecommerce PPC Case Studys",
          isFinance: true,
          category: "Finance",
        },
        {
          image: work8,
          title: "Iphone mockup",
          isHR: true,
          category: "Human Research",
        },
        {
          image: work9,
          title: "Iphone mockup",
          isHR: true,
          category: "Human Research",
        },
      ],
      displayCategory: "All",
    };
    this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  componentDidMount() {
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
      document.getElementById("top-menu").classList.add("nav-light");
    })
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn").classList.remove("btn-light");
      document.querySelector(".settingbtn").classList.remove("btn-light");
      document.querySelector(".shoppingbtn").classList.add("btn-primary");
      document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn").classList.remove("btn-primary");
      document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
      document.querySelector(".shoppingbtn").classList.add("btn-light");
      document.querySelector(".settingbtn").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <section className="bg-half-170 d-table w-100" style={{ background: `url(${bgImg}) center center` }}>
          <div className="bg-overlay"></div>
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title text-white title-dark mb-0"> All Cases </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Pages</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Cases</li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="position-relative">
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
            <Row className="justify-content-center">
              <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                  <ul
                    className="container-filter list-inline mb-0 filter-options text-center"
                    id="filter"
                  >
                    <li
                      onClick={() => this.setCategory("All")}
                      className={
                        this.state.displayCategory === "All"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      All
                    </li>
                    {" "}
                    <li
                      onClick={() => this.setCategory("Business")}
                      className={
                        this.state.displayCategory === "Business"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Business
                    </li>

                    {" "}
                    <li
                      onClick={() => this.setCategory("Marketing")}
                      className={
                        this.state.displayCategory === "Marketing"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Marketing
                    </li>
                    {" "}

                    <li
                      onClick={() => this.setCategory("Finance")}
                      className={
                        this.state.displayCategory === "Finance"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Finance
                    </li>
                    {" "}

                    <li
                      onClick={() => this.setCategory("Human Research")}
                      className={
                        this.state.displayCategory === "Human Research"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Human Research
                    </li>
                    {" "}
                  </ul>
                </div>
              </div>
            </Row>

            <Row className="projects-wrapper">
              {this.state.works
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === "All"
                )
                .map((cases, key) => (
                  <Col
                    key={key}
                    lg={4}
                    md={6}
                    xs={12}
                    className="mt-4 pt-2 business"
                  >
                    <FadeIn delay={100}>
                      <Card className="blog border-0 work-container work-primary work-classic shadow rounded-md overflow-hidden">
                        <img
                          src={cases.image}
                          className="img-fluid work-image"
                          alt="Landrick"
                        />
                        <CardBody>
                          <div className="content">
                            {cases.isBusiness && (
                              <Link to="#" className="badge badge-link bg-primary">
                                Business
                              </Link>
                            )}
                            {cases.isMarketing && (
                              <Link to="#" className="badge badge-link bg-warning">
                                Marketing
                              </Link>
                            )}
                            {cases.isFinance && (
                              <Link to="#" className="badge badge-link bg-success">Finance</Link>
                            )}
                            {cases.isHR && (
                              <Link to="#" className="badge badge-link bg-info">HR</Link>
                            )}
                            <h5 className="mt-3">
                              <Link
                                to="page-case-detail"
                                className="text-dark title"
                              >
                                {cases.title}
                              </Link>
                            </h5>
                            <p className="text-muted">
                              This is required when, for example, the final text
                              is not yet available.
                            </p>
                            <Link to="#" className="link h6">
                              Read More{" "}
                              <i className="uil uil-angle-right-b align-middle"></i>
                            </Link>
                          </div>
                        </CardBody>
                      </Card>
                    </FadeIn>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AllCases;
