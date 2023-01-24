import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";
class CourseBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.courses.map((course, key) => (
          <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
            <Card className="blog blog-primary overflow-hidden rounded shadow border-0">
              <div className="position-relative d-block overflow-hidden">
                <img
                  src={course.image}
                  className="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div className="overlay-work bg-dark"></div>
                <Link to="/page-course-detail" className="h6 preview bottom-0 end-0 me-4 mb-3">
                  Preview Now <i className="uil uil-angle-right-b align-middle"></i>
                </Link>
              </div>
              <CardBody className="content">
                <h5>
                  <Link to="/page-course-detail" className="title text-dark h5">
                    {course.title}
                  </Link>
                </h5>
                <div className="rating mt-2">
                  <ul className="list-unstyled mb-0">
                      <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>{" "}
                      <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>{" "}
                      <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>{" "}
                      <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>{" "}
                      <li className="list-inline-item"><i className={"mdi h6 mb-0 text-warning mdi-" + course.isStarClass}></i></li>{" "}
                      <li className="list-inline-item">{course.rating} Star (3 <i className="uil uil-user text-muted small"></i>)</li>
                  </ul>
                </div>
                <div className="fees d-flex justify-content-between">
                  <ul className="list-unstyled mb-0 numbers">
                    <li>
                      <i className="uil uil-graduation-cap text-muted"></i>{" "}
                      {course.students} Students
                    </li>
                    <li>
                      <i className="uil uil-notebooks text-muted"></i>{" "}
                      {course.lession} Lession
                    </li>
                  </ul>
                  <h4>
                    <span className="h6">$</span>
                    {course.price}
                  </h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default CourseBox;
