// import react from "react";
import React from "react";
import { Col, Card, CardBody, CardImg, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { enterpriceBlogs } from "../../common/data";

const Blog = () => {

  return (
    <React.Fragment>    
        <Container>
          <Row className="align-items-center mb-4 pb-2">
            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <h6 className="text-primary">Blog</h6>
                <h4 className="title mb-4 mb-lg-0">
                  Reads Our Latest <br /> News & Blog
                </h4>
              </div>
            </Col>

            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <p className="text-muted mb-0 mx-auto para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {enterpriceBlogs.map((blog, key) => (
              <Col lg={4} md={6} className="mt-4 pt-2" key={key} name="blog">
                <Card className="blog blog-primary rounded border-0 shadow">
                  <div className="position-relative">
                    <CardImg
                      top
                      src={blog.image}
                      className="card-img-top rounded-top"
                      alt=""
                    />
                    <div className="overlay rounded-top"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link to="#" className="card-title title text-dark">
                        {blog.title}
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
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
                        Read More <i className="uil uil-angle-right-b align-middle"></i>
                      </Link>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="user d-block">
                      <i className="uil uil-user"></i> {blog.autor}
                    </small>
                    <small className="date">
                      <i className="uil uil-calendar-alt"></i> {blog.date}
                    </small>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>     
    </React.Fragment>
  );
};
export default Blog;
