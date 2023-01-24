import React, { Component } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import CommentsReletedBlog from './CommentsReletedBlog';
import BlogSidebar from './BlogSidebar';
import Footer from './Footer';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

//Import Light box
import 'react-image-lightbox/style.css';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Light box
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//import images
import work13 from '../../../assets/images/work/13.jpg';
import work21 from '../../../assets/images/work/21.jpg';
import work14 from '../../../assets/images/work/14.jpg';
import work22 from '../../../assets/images/work/22.jpg';
import work24 from '../../../assets/images/work/24.jpg';
import work23 from '../../../assets/images/work/23.jpg';
import work15 from '../../../assets/images/work/15.jpg';
import work17 from '../../../assets/images/work/17.jpg';

// Import Image Slider
import ImageSlider from './Blog/ImageSlider';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  work13,
  work21,
  work14,
  work22,
  work24,
  work15,
  work23,
  work17
];

class BlogGalleryPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 1,
      galleryImg: [

        {
          id: 2,
          img: work13,
        },
        {
          id: 3,
          img: work21,
        },
        {
          id: 4,
          img: work14,
        },
        {
          id: 5,
          img: work22,
        },
        {
          id: 6,
          img: work24,
        },
        {
          id: 8,
          img: work15,
        },
        {
          id: 7,
          img: work23,
        },

        {
          id: 8,
          img: work17,
        },
      ],
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <NavBar />

        <section className="bg-half-170 d-table w-100">
          <Container>
            <Row>
              <Col lg={8} md={7}>
                <Row id="grid">
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                  >
                    <Masonry columnsCount={4}>
                      {this.state.galleryImg.map((item, key) => (
                        <Col key={key} className="col-12 spacing picture-item">
                          <Card className="border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                            <CardBody className="p-0">
                              <img src={item.img} className="img-fluid" alt="work" />
                              <div className="overlay-work"></div>

                              <div className="icons text-center">
                                <Link to="#" onClick={() =>
                                  this.setState({ isOpen: true, photoIndex: key })
                                }
                                  className="work-icon bg-white d-inline-block rounded-pill lightbox">
                                  <i>
                                    <FeatherIcon
                                      icon="camera"
                                      className="fea icon-sm image-icon"
                                    />
                                  </i>
                                </Link>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                  {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                      }
                      imagePadding={100}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex:
                            (photoIndex + images.length - 1) % images.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length,
                        })
                      }
                    />
                  )}
                </Row>

                <Card className="border-0 shadow rounded mt-4">
                  <CardBody>
                    <div className="text-center">
                      <span className="badge bg-primary">Photography</span>
                      <h4 className="mt-3">
                        Get Ready To Up Your <br /> Creative Game With The New
                        DJI Mavic Air 2
                      </h4>

                      <ul className="list-unstyled mt-3">
                        <li className="list-inline-item user text-muted me-2">
                          <i className="mdi mdi-account"></i> Cristina Jota
                        </li>
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
              <BlogSidebar />
            </Row>
          </Container>
        </section>

        {/* Import ImageSlider */}
        <ImageSlider />

        {/* import Footer */}
        <Footer />

        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default BlogGalleryPost;
