import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import BlogSidebar from './BlogSidebar';
import CommentsReletedBlog from './CommentsReletedBlog';
import Footer from './Footer';
import NavBar from './NavBar';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

// Import Image Slider
import ImageSlider from './Blog/ImageSlider';

class BlogAudioPost extends Component {
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
                    title="iframe audio"
                    className="videoembed"
                    src="https://w.soundcloud.com/player/?visual=true&amp;url=https://soundcloud.com/teo-8/sorry-creepa-x-subsets-x-teos&amp;show_artwork=true&amp;maxwidth=1170&amp;maxheight=1000&amp;dnt=1"
                    style={{ height: '433px' }}
                  ></iframe>

                  <CardBody>
                    <div className="text-center">
                      <span className="badge bg-primary">Music</span>
                      <h4 className="mt-3">Sorry (Creepa X Subsets X TEOS)</h4>

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

export default BlogAudioPost;
