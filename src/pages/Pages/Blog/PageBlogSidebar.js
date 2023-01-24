// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardImg,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import blog01 from "../../../assets/images/blog/01.jpg";
import blog02 from "../../../assets/images/blog/02.jpg";
import blog03 from "../../../assets/images/blog/03.jpg";
import blog04 from "../../../assets/images/blog/04.jpg";
import blog05 from "../../../assets/images/blog/05.jpg";
import blog06 from "../../../assets/images/blog/06.jpg";
import client03 from "../../../assets/images/client/03.jpg";

class PageBlogSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      blogs: [
        {
          id: 1,
          image: blog01,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog02,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog03,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 4,
          image: blog04,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 5,
          image: blog05,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 6,
          image: blog06,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
    };
  }

  componentDidMount() {
    document.body.classList = "";
    document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

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

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Blog </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Blog</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">BLOG WITH SIDEBAR</li>
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
            <Row>
              <Col lg={8} md={6}>
                <Row>
                  {this.state.blogs.map((blog, key) => (
                    <Col lg={6} md={12} key={key} className="mb-4 pb-2">
                      <Card className="blog rounded border-0 shadow">
                        <div className="position-relative">
                          <CardImg
                            top
                            src={blog.image}
                            className="rounded-top"
                            alt=""
                          />
                          <div className="overlay rounded-top bg-dark"></div>
                        </div>
                        <CardBody className="content">
                          <h5>
                            <Link to="#" className="card-title title text-dark">
                              {blog.title}
                            </Link>
                          </h5>
                          <div className="post-meta d-flex justify-content-between mt-3">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item me-2  mb-0">
                                <Link to="#" className="text-muted like">
                                  <i className="uil uil-heart me-1"></i>
                                  {blog.like}
                                </Link>
                              </li>{" "}
                              <li className="list-inline-item">
                                <Link to="#" className="text-muted comments">
                                  <i className="uil uil-comment me-1"></i>
                                  {blog.comment}
                                </Link>
                              </li>
                            </ul>
                            <Link
                              to="/page-blog-detail"
                              className="text-muted readmore"
                            >
                              Read More{" "}
                              <i className="uil uil-angle-right-b align-middle"></i>
                            </Link>
                          </div>
                        </CardBody>
                        <div className="author">
                          <small className="text-light user d-block">
                            <i className="uil uil-user"></i> {blog.autor}
                          </small>
                          <small className="text-light date">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            {blog.date}
                          </small>
                        </div>
                      </Card>
                    </Col>
                  ))}
                  <Col xs="12">
                    <Pagination listClassName="justify-content-center mb-0">
                      <PaginationItem>
                        <PaginationLink to="#">
                          Prev
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink to="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink to="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink to="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink to="#">
                          Next
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
              </Col>

              {/* sidebar */}
              <Col lg={4} md={5} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 sidebar sticky-bar ms-lg-4">
                  <CardBody className="p-0">
                    <div className="text-center">
                      <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                        Author
                      </span>

                      <div className="mt-4">
                        <img src={client03} className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt="" />

                        <Link to="/blog-about" className="text-primary h5 mt-4 mb-0 d-block">Cristina Jota</Link>
                        <small className="text-muted d-block">Photographer & Blogger</small>
                      </div>
                    </div>

                    <div className="widget mt-4">
                      <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                        Recent Post
                      </span>

                      <div className="mt-4">
                        <div className="d-flex align-items-center">
                          <img src={blog01} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
                          <div className="flex-1 ms-3">
                            <Link to="#" className="d-block title text-dark">Consultant Business</Link>
                            <span className="text-muted">15th April 2021</span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                          <img src={blog02} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
                          <div className="flex-1 ms-3">
                            <Link to="#" className="d-block title text-dark">Grow Your Business</Link>
                            <span className="text-muted">15th April 2021</span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                          <img src={blog03} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
                          <div className="flex-1 ms-3">
                            <Link to="#" className="d-block title text-dark">Look On The Glorious Balance</Link>
                            <span className="text-muted">15th April 2021</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="widget mt-4">
                      <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                        Tagclouds
                      </span>

                      <div className="tagcloud text-center mt-4">
                        <Link to="#" className="rounded">Business</Link>{" "}
                        <Link to="#" className="rounded">Finance</Link>{" "}
                        <Link to="#" className="rounded">Marketing</Link>{" "}
                        <Link to="#" className="rounded">Fashion</Link>{" "}
                        <Link to="#" className="rounded">Bride</Link>{" "}
                        <Link to="#" className="rounded">Lifestyle</Link>{" "}
                        <Link to="#" className="rounded">Travel</Link>{" "}
                        <Link to="#" className="rounded">Beauty</Link>{" "}
                        <Link to="#" className="rounded">Video</Link>{" "}
                        <Link to="#" className="rounded">Audio</Link>
                      </div>
                    </div>
                    <div className="widget mt-4">
                      <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                        Social Media
                      </span>

                      <ul className="list-unstyled social-icon social text-center mb-0 mt-4">
                        <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></Link></li>{" "}
                        <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></Link></li>{" "}
                        <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></Link></li>{" "}
                          <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></Link></li>{" "}                       
                        <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="github" className="fea icon-sm fea-social" /></Link></li>{" "}
                        <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="youtube" className="fea icon-sm fea-social" /></Link></li>{" "}
                        <li className="list-inline-item"><Link to="#" className="rounded">
                          <FeatherIcon icon="gitlab" className="fea icon-sm fea-social" /></Link></li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageBlogSidebar;
