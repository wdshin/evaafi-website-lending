import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import blogBg from '../../../assets/images/blog/bg2.jpg';
import client1 from '../../../assets/images/client/01.jpg';
import client2 from '../../../assets/images/client/02.jpg';
import client3 from '../../../assets/images/client/03.jpg';
import blog1 from '../../../assets/images/blog/01.jpg';
import blog2 from '../../../assets/images/blog/07.jpg';
import blog3 from '../../../assets/images/blog/08.jpg';

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarCateListData: [
        {
          title: 'Finance',
          count: '13',
        },
        {
          title: 'Business',
          count: 9,
        },
        {
          title: 'Blog',
          count: 18,
        },
        {
          title: 'Corporate',
          count: 20,
        },
        {
          title: 'Investment',
          count: 22,
        },
      ],

      recentPostData: [
        {
          img: blog2,
          title: 'Consultant Business',
          date: '15th June, 2019',
        },
        {
          img: blog3,
          title: 'Look On The Glorious Balance',
          date: '15th June, 2019',
        },
        {
          img: blog1,
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
        <section className="section">
          <Container>
            <Row>
              <Col lg={8} md={6}>
                <div className="me-lg-5">
                  <p className="text-muted">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics when writing melodies in order to have a 'ready-made'
                    text to sing with the melody.
                  </p>

                  <ul className="list-unstyled d-flex justify-content-between mt-4">
                    <li className="list-inline-item user me-2">
                      <Link to="#" className="text-muted">
                        <i className="uil uil-user text-dark"></i> Calvin Carlo
                      </Link>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <i className="uil uil-calendar-alt text-dark"></i> 25th
                      June 2021
                    </li>
                  </ul>

                  <img
                    src={blogBg}
                    className="img-fluid rounded-md shadow"
                    alt=""
                  />

                  <h5 className="mt-4">
                    Mornings contain the secret to an extraordinarily successful
                    life
                  </h5>

                  <p className="text-muted">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts. If the distribution of letters and 'words' is random,
                    the reader will not be distracted from making a neutral
                    judgement on the visual impact and readability of the
                    typefaces (typography), or the distribution of text on the
                    page (layout or type area).
                  </p>

                  <h5 className="mt-4">Comments :</h5>

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
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <Link to="#" className="text-dark media-heading">
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
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
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
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <Link to="#" className="media-heading text-dark">
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
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
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
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <Link to="#" className="media-heading text-dark">
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
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
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
                              <div className="flex-1 commentor-detail">
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

                  <h5 className="mt-4">Leave A Comment :</h5>

                  <form className="mt-3">
                    <div className="row">
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
                              id="name2"
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
                              id="email2"
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
                    </div>
                  </form>
                </div>
              </Col>

              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 sidebar sticky-bar rounded shadow">
                  <div className="card-body">
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

export default BlogDetails;
