import React, { Component } from 'react';
import NavBar from './NavBar';
import CommentsReletedBlog from './CommentsReletedBlog';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import slider1 from '../../../assets/images/blog/slide01.jpg';
import slider2 from '../../../assets/images/blog/slide02.jpg';
import slider3 from '../../../assets/images/blog/slide03.jpg';
import blog1 from '../../../assets/images/blog/01.jpg';
import blog2 from '../../../assets/images/blog/02.jpg';
import blog3 from '../../../assets/images/blog/03.jpg';
import client from '../../../assets/images/client/03.jpg';

// Import Image Slider
import ImageSlider from './Blog/ImageSlider';

const items = [
  {
    src: slider1,
  },
  {
    src: slider2,
  },
  {
    src: slider3,
  },
];

class BlogLeftSidebarPost extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="active">
            <img src={item.src} className="d-block w-100" alt="..." />
          </div>
        </CarouselItem>
      );
    });
    return (
      <React.Fragment>
        <NavBar />

        <section className="bg-half-170 d-table w-100">
          <Container>
            <Row>
              <Col lg={8} md={7} className="order-1 order-md-2">
                <Card className="border-0 shadow rounded overflow-hidden">
                  <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    {slides}
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={this.goToIndex}
                    />
                  </Carousel>

                  <CardBody>
                    <div className="text-center">
                      <span className="badge bg-primary">Travel</span>
                      <h4 className="mt-3">
                        A lifestyle you always being <br /> the focal point is innately unhealthy.
                      </h4>

                      <ul className="list-unstyled mt-3">
                        <li className="list-inline-item user text-muted me-2">
                          <i className="mdi mdi-account"></i> Cristina Jota
                        </li>{" "}
                        <li className="list-inline-item date text-muted">
                          <i className="mdi mdi-calendar-check"></i> 26th June,
                          2021
                        </li>
                      </ul>
                    </div>

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

                {/* import Comments and Related Blog  */}
                <CommentsReletedBlog />
              </Col>

              {/* import BlogSidebar */}
              <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                <div className="card border-0 sidebar sticky-bar me-lg-4">
                  <div className="card-body p-0">

                    <div className="text-center">
                      <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                        Author
                      </span>

                      <div className="mt-4">
                        <img src={client} className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt="" />

                        <Link to="blog-about.html" className="text-primary h5 mt-4 mb-0 d-block">Cristina Jota</Link>
                        <small className="text-muted d-block">Photographer & Blogger</small>
                      </div>
                    </div>

                    <div className="widget mt-4">
                      <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                        Recent Post
                      </span>

                      <div className="mt-4">
                        <div className="d-flex align-items-center">
                          <img src={blog1} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
                          <div className="flex-1 ms-3">
                            <Link to="#" className="d-block title text-dark">Consultant Business</Link>
                            <span className="text-muted">15th April 2021</span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                          <img src={blog2} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
                          <div className="flex-1 ms-3">
                            <Link to="#" className="d-block title text-dark">Grow Your Business</Link>
                            <span className="text-muted">15th April 2021</span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                          <img src={blog3} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
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
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            /></Link></li>{" "}

                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                          <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            /></Link></li>{" "}

                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                          <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            /></Link></li>{" "}

                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                          <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            /></Link></li>{" "}

                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                          <FeatherIcon
                              icon="github"
                              className="fea icon-sm fea-social"
                            /></Link></li>{" "}

                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                          <FeatherIcon
                              icon="youtube"
                              className="fea icon-sm fea-social"
                            /></Link></li>{" "}

                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                          <FeatherIcon
                              icon="gitlab"
                              className="fea icon-sm fea-social"
                            /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* Import ImageSlider */}
        <ImageSlider />

        {/* import Footer */}
        <Footer />

        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default BlogLeftSidebarPost;
