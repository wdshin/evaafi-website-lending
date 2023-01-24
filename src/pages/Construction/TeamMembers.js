import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { constructionMembers } from "../../common/data";

//Import Icons
import FeatherIcon from "feather-icons-react";

const TeamMembers = () => {
  return (
    <React.Fragment>
      <Container className=" mt-100 mt-60">
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="section-title mb-4 pb-2 text-center">
              <h4 className="title mb-4">Expert Team Members</h4>
              <p className="text-muted mx-auto para-desc mb-0">
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
          {constructionMembers.map((members, key) => (
            <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
              <Card className="team text-center border-0">
                <div className="position-relative">
                  <img src={members.img} className="img-fluid" alt="" />
                  <ul className="list-unstyled mb-0 team-icon">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      {members.name}
                    </Link>
                  </h5>
                  <small className="designation text-muted">
                    {members.position}
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
export default TeamMembers;

