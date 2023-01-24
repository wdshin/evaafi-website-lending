// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Label,
  Button,
  Input,
  Card,
  CardBody,
  CardImg,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import CommentsBox from "../../../components/Shared/CommentsBox";

// import images
import blog01 from "../../../assets/images/blog/01.jpg";
import blog03 from "../../../assets/images/blog/03.jpg";
import blog02 from "../../../assets/images/blog/02.jpg";
// Client Images
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";

class PageBlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

      comments: [
        {
          id: 1,
          image: client1,
          name: "Lorenzo Peterson",
          date: "15th August, 2019",
          time: "01:25 pm",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        },
        {
          id: 2,
          image: client2,
          name: "Tammy Camacho",
          date: "16th August, 2019",
          time: "02:05 pm",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        },
        {
          id: 3,
          image: client3,
          name: "Tammy Camacho",
          date: "17th August, 2019",
          time: "04:03 pm",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          replies: [
            {
              id: 1,
              image: client4,
              name: "Calvin Camacho",
              date: "18th August, 2019",
              time: "05:55 pm",
              desc:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
            },
          ],
        },
      ],
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
      ],
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
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
                  <h2> Design your apps in your own way </h2>
                  <ul className="list-unstyled mt-4 mb-0">
                    <li className="list-inline-item h6 user text-muted me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>{" "}
                    <li className="list-inline-item h6 date text-muted"><i className="mdi mdi-calendar-check"></i> 25th June 2021</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Blog</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Blog Detail</li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="form-icon position-relative">
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
              <Col lg="8" md="6">
                <Card className="blog blog-detail border-0 shadow rounded">
                  <img src={blog01} className="img-fluid rounded-top" alt="" />
                  <CardBody className="content">
                    <h6>
                      <i className="mdi mdi-tag text-primary me-1"></i>
                      <Link to="#" className="text-primary">
                        Software
                      </Link>
                      ,{" "}
                      <Link to="#" className="text-primary">
                        Application
                      </Link>
                    </h6>
                    <p className="text-muted mt-3">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin. It contains a series
                      of real Latin words. This ancient dummy text is also
                      incomprehensible, but it imitates the rhythm of most
                      European languages in Latin script.{" "}
                    </p>
                    <blockquote className="blockquote mt-3 p-3">
                      <p className="text-muted mb-0 fst-italic">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. "
                      </p>
                    </blockquote>
                    <p className="text-muted">
                      The advantage of its Latin origin and the relative
                      meaninglessness of Lorum Ipsum is that the text does not
                      attract attention to itself or distract the viewer's
                      attention from the layout.
                    </p>
                    <div className="post-meta mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2">
                          <Link to="#" className="text-muted like">
                            <i className="uil uil-heart me-1"></i>33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted comments">
                            <i className="uil uil-comment me-1"></i>08
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>

                {/* comments */}
                <CommentsBox comments={this.state.comments} />

                <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Leave A Comment :</h5>
                    <Alert
                      color="primary"
                      isOpen={this.state.successMsg}
                      toggle={() => {
                        this.setState({ successMsg: !this.state.successMsg });
                      }}
                    >
                      Data sended successfully.
                    </Alert>
                    <Form onSubmit={this.handleSubmit} className="mt-3">
                      <Row>
                        <Col md="12">
                          <div className="mb-3">
                            <Label className="form-label">Your Comment</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              id="message"
                              placeholder="Your Comment"
                              rows="5"
                              name="message"
                              className="form-control ps-5"
                              required
                            ></textarea>
                          </div>
                        </Col>

                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Name <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="form-control ps-5"
                              required
                            />
                          </div>
                        </Col>

                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Email"
                              name="email"
                              className="form-control ps-5"
                              required
                            />
                          </div>
                        </Col>

                        <Col md="12">
                          <div className="send">
                            <Button
                              type="submit"
                              className="btn w-100"
                              color="primary"
                            >
                              Send Message
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Related Posts :</h5>

                    <Row>
                      {this.state.blogs.map((blog, key) => (
                        <Col lg="6" className="mt-4 pt-2" key={key} name="blog">
                          <Card className="blog rounded border-0 shadow">
                            <div className="form-icon position-relative">
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
                                <Link
                                  to="#"
                                  className="card-title title text-dark"
                                >
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
                                    <Link
                                      to="#"
                                      className="text-muted comments"
                                    >
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
                    </Row>
                  </CardBody>
                </Card>

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
                        <img src={client3} className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt="" />

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
                          <FeatherIcon icon="gitlab" className="fea icon-sm fea-social" /></Link></li>{" "}
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
export default PageBlogDetail;
