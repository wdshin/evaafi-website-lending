import React, { Component } from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentsReletedBlog from './CommentsReletedBlog';
import BlogSidebar from './BlogSidebar';
import Footer from './Footer';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

// Import Image Slider
import ImageSlider from './Blog/ImageSlider';

class BlogYoutubePost extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section className="bg-half-170 d-table w-100">
          <Container>
            <Row>
              <Col lg={8} md={7}>
                <Card className="border-0 shadow rounded overflow-hidden">
                  <iframe
                    title="youtube"
                    src="https://www.youtube.com/embed/2dljZWZQLFQ?feature=oembed"
                    allow="autoplay; encrypted-media"
                    style={{ height: '433px' }}
                    allowFullScreen=""
                  ></iframe>

                  <CardBody>
                    <div className="text-center">
                      <span className="badge bg-primary">Youtube</span>
                      <h4 className="mt-3">
                        1 Hour Pine Forest In 4K Relaxing Nature Sounds
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

export default BlogYoutubePost;
