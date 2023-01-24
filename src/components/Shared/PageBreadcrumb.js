import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

class PageBreadcrumb extends Component {
  render() {
    const length = this.props.pathItems.length;
    return (
      <React.Fragment>
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg="12" className="text-center">
                {this.props.title ? (
                  <div className="pages-heading">
                    <h4 className="title"> {this.props.title}</h4>
                  </div>
                ) : null}
                {this.props.children ? this.props.children : null}
              </Col>
            </Row>
            <div className="position-breadcrumb">
              <nav className="d-inline-block">
                <Breadcrumb
                  aria-label="breadcrumb"
                  listClassName="rounded shadow mb-0 px-4 py-2"
                >
                  {this.props.pathItems.map((item, key) =>
                    item.id !== length ? (
                      <BreadcrumbItem key={key}>
                        <Link
                          to={item.link}
                          // className="text-uppercase fw-bold text-dark me-1"
                        >
                          {item.name}
                        </Link>
                      </BreadcrumbItem>
                    ) : (
                      <BreadcrumbItem
                        key={key}
                        active
                        aria-current="page"
                      >
                        {item.name}
                      </BreadcrumbItem>
                    )
                  )}
                </Breadcrumb>
              </nav>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageBreadcrumb;
