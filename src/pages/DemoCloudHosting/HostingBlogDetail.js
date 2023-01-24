import React, { Component } from 'react';
import NavBar from './NavBar';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import hosting from '../../assets/images/hosting/pages.png';
import blogSingle from '../../assets/images/hosting/blog/single.jpg';
import client1 from '../../assets/images/client/01.jpg';
import client2 from '../../assets/images/client/02.jpg';
import client3 from '../../assets/images/client/03.jpg';
import blog1 from '../../assets/images/blog/01.jpg';
import blog2 from '../../assets/images/blog/02.jpg';
import blog3 from '../../assets/images/blog/03.jpg';
import hosting1 from '../../assets/images/hosting/blog/01.jpg';
import hosting2 from '../../assets/images/hosting/blog/02.jpg';

class HostingBlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarCateListData: [
        {
          title: 'Cloud Hosting',
          count: '13',
        },
        {
          title: 'Email Server',
          count: "09",
        },
        {
          title: 'Wordpress Server',
          count: 18,
        },
        {
          title: 'Web Hosting',
          count: 20,
        },
        {
          title: 'Reseller Hosting',
          count: 22,
        },
      ],

      recentPostData: [
        {
          img: blog1,
          title: 'Consultant Business',
          date: '15th June, 2019',
        },
        {
          img: blog2,
          title: 'Look On The Glorious Balance',
          date: '15th June, 2019',
        },
        {
          img: blog3,
          title: 'Research Financial',
          date: '15th June, 2019',
        },
      ],

      tagCloudData: [
        { title: 'Business' },
        { title: 'Finance' },
        { title: 'Marketing' },
        { title: 'Fashion' },
        { title: 'Bride' },
        { title: 'Lifestyle' },
        { title: 'Travel' },
        { title: 'Beauty' },
        { title: 'Video' },
        { title: 'Audio' },
      ],

      iconListData: [
        { icon: 'facebook' },
        { icon: 'instagram' },
        { icon: 'twitter' },
        { icon: 'linkedin' },
        { icon: 'github' },
        { icon: 'youtube' },
        { icon: 'gitlab' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        {/* import Navbar */}
        <NavBar />

        <section
          className="bg-half-170 d-table w-100"
          style={{ backgroundImage: `url(${hosting})` }}
        >
          <div className="bg-overlay bg-gradient-primary opacity-9"></div>
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading title-heading">
                  <h4 className="title text-white title-dark mb-4">
                    {' '}
                    How to work with Web Hosting ?{' '}
                  </h4>
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Landrick</Link>
                  </li>{" "}
                  <li className="breadcrumb-item">
                    <Link to="/index-hosting">Hosting</Link>
                  </li>{" "}
                  <li className="breadcrumb-item">
                    <Link to="/hosting-blog">Blogs</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    Single Blog
                  </li>
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
                <Card className="blog blog-detail border-0 shadow rounded">
                  <img
                    src={blogSingle}
                    className="img-fluid rounded-top"
                    alt=""
                  />
                  <CardBody className="content">
                    <h6>
                      <i className="mdi mdi-tag text-primary me-1"></i>
                      <Link to="#" className="text-primary">
                        Software
                      </Link>
                      ,{' '}
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
                      European languages in Latin script.{' '}
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
                        <li className="list-inline-item me-2 mb-0">
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

                <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Comments :</h5>

                    <ul className="media-list list-unstyled mb-0">
                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Link className="pe-3" to="#">
                              <img
                                src={client1}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="text-dark media-heading"
                                >
                                  Lorenzo Peterson
                                </Link>
                              </h6>
                              <small className="text-muted">
                                15th August, 2019 at 01:25 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" className="text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>

                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Link className="pe-3" to="#">
                              <img
                                src={client2}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="media-heading text-dark"
                                >
                                  Tammy Camacho
                                </Link>
                              </h6>
                              <small className="text-muted">
                                15th August, 2019 at 05:44 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" className="text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>

                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Link className="pe-3" to="#">
                              <img
                                src={client3}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="media-heading text-dark"
                                >
                                  Tammy Camacho
                                </Link>
                              </h6>
                              <small className="text-muted">
                                16th August, 2019 at 03:44 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" className="text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>

                        <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                          <li className="mt-4">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <Link className="pe-3" to="#">
                                  <img
                                    src={client1}
                                    className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                    alt="img"
                                  />
                                </Link>
                                <div className="commentor-detail">
                                  <h6 className="mb-0">
                                    <Link
                                      to="#"
                                      className="text-dark media-heading"
                                    >
                                      Lorenzo Peterson
                                    </Link>
                                  </h6>
                                  <small className="text-muted">
                                    17th August, 2019 at 01:25 pm
                                  </small>
                                </div>
                              </div>
                              <Link to="#" className="text-muted">
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>
                            <div className="mt-3">
                              <p className="text-muted fst-italic p-3 bg-light rounded">
                                " There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour "
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </CardBody>
                </Card>

                <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Leave A Comment :</h5>

                    <form className="mt-3">
                      <Row>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Your Comment</label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="message-circle"
                                className="fea icon-sm icons"
                              />
                              <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows="5"
                                name="message"
                                className="form-control ps-5"
                                required=""
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                              <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="form-control ps-5"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
                              <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control ps-5"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="send d-grid">
                            <button type="submit" className="btn btn-primary">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </Row>
                    </form>
                  </CardBody>
                </Card>

                <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Related Posts :</h5>

                    <Row>
                      <Col lg={6} className="mt-4 pt-2">
                        <Card className="blog rounded border-0 shadow">
                          <div className="position-relative">
                            <img
                              src={hosting1}
                              className="card-img-top rounded-top"
                              alt="..."
                            />
                            <div className="overlay rounded-top bg-dark"></div>
                          </div>
                          <div className="card-body content">
                            <h5>
                              <Link
                                to="#"
                                className="card-title title text-dark"
                              >
                                Design your apps in your own way
                              </Link>
                            </h5>
                            <div className="post-meta d-flex justify-content-between mt-3">
                              <ul className="list-unstyled mb-0">
                                <li className="list-inline-item me-2 mb-0">
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
                              <Link
                                to="/blog-detail"
                                className="text-muted readmore"
                              >
                                Read More{' '}
                                <i className="uil uil-angle-right-b align-middle"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="author">
                            <small className="text-light user d-block">
                              <i className="uil uil-user"></i> Calvin Carlo
                            </small>
                            <small className="text-light date">
                              <i className="uil uil-calendar-alt"></i> 25th June
                              2021
                            </small>
                          </div>
                        </Card>
                      </Col>

                      <Col lg={6} className="mt-4 pt-2">
                        <Card className="blog rounded border-0 shadow">
                          <div className="position-relative">
                            <img
                              src={hosting2}
                              className="card-img-top rounded-top"
                              alt="..."
                            />
                            <div className="overlay rounded-top bg-dark"></div>
                          </div>
                          <div className="card-body content">
                            <h5>
                              <Link
                                to="#"
                                className="card-title title text-dark"
                              >
                                How apps is changing the IT world
                              </Link>
                            </h5>
                            <div className="post-meta d-flex justify-content-between mt-3">
                              <ul className="list-unstyled mb-0">
                                <li className="list-inline-item me-2 mb-0">
                                  <Link to="#" className="text-muted like">
                                    <i className="uil uil-heart me-1"></i>33
                                  </Link>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <Link to="#" className="text-muted comments">
                                    <i className="uil uil-comment me-1"></i>08
                                  </Link>
                                </li>
                              </ul>
                              <Link
                                to="/blog-detail"
                                className="text-muted readmore"
                              >
                                Read More{' '}
                                <i className="uil uil-angle-right-b align-middle"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="author">
                            <small className="text-light user d-block">
                              <i className="uil uil-user"></i> Calvin Carlo
                            </small>
                            <small className="text-light date">
                              <i className="uil uil-calendar-alt"></i> 25th June
                              2021
                            </small>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 sidebar sticky-bar rounded shadow">
                  <CardBody>
                    <div className="widget">
                      <form role="search" method="get">
                        <div className="input-group mb-3 border rounded">
                          <input
                            type="text"
                            id="s"
                            name="s"
                            className="form-control border-0"
                            placeholder="Search Keywords..."
                          />
                          <button
                            type="submit"
                            className="input-group-text bg-transparent border-0"
                            id="searchsubmit"
                          >
                            <i className="uil uil-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Categories</h5>
                      <ul className="list-unstyled mt-4 mb-0 blog-categories">
                        {this.state.sideBarCateListData.map((item, key) => (
                          <li key={key}>
                            <Link to="#">{item.title}</Link>{' '}
                            <span className="float-end">{item.count}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Recent Post</h5>
                      <div className="mt-4">
                        {this.state.recentPostData.map((item, key) => (
                          <div key={key} className="clearfix post-recent">
                            <div className="post-recent-thumb float-start">
                              {' '}
                              <Link to="#">
                                {' '}
                                <img
                                  alt="img"
                                  src={item.img}
                                  className="img-fluid rounded"
                                />
                              </Link>
                            </div>
                            <div className="post-recent-content float-start">
                              <Link to="#">{item.title}</Link>
                              <span className="text-muted mt-2">
                                {item.date}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Tags Cloud</h5>
                      <div className="tagcloud mt-4">
                        {this.state.tagCloudData.map((item, key) => (
                          <Link to="#" className="rounded ms-1" key={key}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="widget">
                      <h5 className="widget-title">Follow us</h5>
                      <ul className="list-unstyled social-icon social mb-0 mt-4">
                        {this.state.iconListData.map((item, key) => (
                          <li key={key} className="list-inline-item me-1">
                            <Link to="#" className="rounded">
                              <FeatherIcon
                                icon={item.icon}
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </Container>
        </section>

        {/* import Footer */}
        <footer className="footer">
          <Container>
            <Row className="justify-content-center">
              <Col className="col-12">
                <div className="footer-py-60 text-center">
                  <Row>
                    <Col md={4}>
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Phone</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <a href="tel:+152534-468-854" className="text-foot">+152 534-468-854</a>
                        </div>
                      </Card>
                    </Col>

                    <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Email</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <a href="mailto:contact@example.com" className="text-foot">contact@example.com</a>
                        </div>
                      </Card>
                    </Col>

                    <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <Card className="border-0 text-center features feature-primary feature-clean bg-transparent">
                        <div className="icons text-center mx-auto">
                          <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">Location</h5>
                          <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</a>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
        <Footer isBorderLine={true} />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default HostingBlogDetail;
