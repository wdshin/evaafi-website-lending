import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Container,
  PaginationItem,
  PaginationLink,
  Row,
} from 'reactstrap';
import NavBar from './NavBar';
import Footer from '../../components/Layout/Footer';
import ThemeSwitcher from '../../components/Layout/ThemeSwitcher';
import BackToTop from '../../components/Layout/backToTop';

//import images
import hosting from '../../assets/images/hosting/pages.png';
import hostingBlog1 from '../../assets/images/hosting/blog/01.jpg';
import hostingBlog2 from '../../assets/images/hosting/blog/02.jpg';
import hostingBlog3 from '../../assets/images/hosting/blog/03.jpg';
import hostingBlog4 from '../../assets/images/hosting/blog/04.jpg';
import hostingBlog5 from '../../assets/images/hosting/blog/05.jpg';
import hostingBlog6 from '../../assets/images/hosting/blog/06.jpg';
import hostingBlog7 from '../../assets/images/hosting/blog/07.jpg';
import hostingBlog8 from '../../assets/images/hosting/blog/08.jpg';
import hostingBlog9 from '../../assets/images/hosting/blog/09.jpg';

class HostingBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetails: [
        {
          id: 1,
          img: hostingBlog1,
          title: 'Quickly formulate backend',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 2,
          img: hostingBlog2,
          title: 'Progressively visualize enabled',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 3,
          img: hostingBlog3,
          title: 'Credibly implement maximizing',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 4,
          img: hostingBlog4,
          title: 'Quickly formulate backend',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 5,
          img: hostingBlog5,
          title: 'Progressively visualize enabled',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 6,
          img: hostingBlog6,
          title: 'Quickly formulate backend',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 7,
          img: hostingBlog7,
          title: 'Credibly implement maximizing',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 8,
          img: hostingBlog8,
          title: 'Progressively visualize enabled',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
        {
          id: 9,
          img: hostingBlog9,
          title: 'Credibly implement maximizing',
          desc: 'This is required when, for example, the final text is not yet available.',
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        {/* import NavBar */}
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
                  <h4 className="title text-white title-dark mb-4"> Blogs </h4>
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Blogs & News
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
              {(this.state.blogDetails || []).map((item, key) => (
                <Col lg={4} md={6} xs={12} className="mb-4 pb-2" key={key}>
                  <Card className="blog shadow border-0 rounded overflow-hidden">
                    <img src={item.img} className="img-fluid" alt="" />

                    <CardBody className="content">
                      <Link
                        to="/hosting-blog-detail"
                        className="title text-dark h5"
                      >
                        {item.title}
                      </Link>

                      <p className="text-muted mt-3">{item.desc}</p>

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
                          to="/hosting-blog-detail"
                          className="text-muted readmore"
                        >
                          Read More{' '}
                          <i className="uil uil-angle-right-b align-middle"></i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
              <Col xs={12}>
                <ul className="pagination justify-content-center mb-0">
                  <PaginationItem>
                    <PaginationLink to="#" aria-label="Previous">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink to="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#" aria-label="Next">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </ul>
              </Col>
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

export default HostingBlog;
