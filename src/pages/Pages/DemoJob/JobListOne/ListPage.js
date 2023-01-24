import React, { Component } from 'react';

//import images
import Circleci from "../../../../assets/images/job/Circleci.svg";
import Mg from "../../../../assets/images/job/Mg.svg";
import Codepen from "../../../../assets/images/job/Codepen.svg";
import Discord from "../../../../assets/images/job/Discord.svg";
import Eslint from "../../../../assets/images/job/Eslint.svg";
import Gitlab from "../../../../assets/images/job/Gitlab.svg";
import Udemy from "../../../../assets/images/job/Udemy.svg";
import Webhooks from "../../../../assets/images/job/Webhooks.svg";
import Sketch from "../../../../assets/images/job/Sketch.svg";
import Pagination from "./Pagination";
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobList: [
                {
                    id: 1,
                    img: Circleci,
                    designation: "Web Developer",
                    location: "CircleCI",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 2,
                    img: Mg,
                    designation: "Web Designer",
                    location: "MG",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 3,
                    img: Codepen,
                    designation: "Web Developer",
                    location: "Codepen",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 4,
                    img: Discord,
                    designation: "Web Developer",
                    location: "Discord",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 5,
                    img: Eslint,
                    designation: "Web Developer",
                    location: "Eslint",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 6,
                    img: Gitlab,
                    designation: "Web Developer",
                    location: "Gitlab",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 7,
                    img: Udemy,
                    designation: "Web Developer",
                    location: "Udemy",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 8,
                    img: Webhooks,
                    designation: "Web Developer",
                    location: "Webhooks",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
                {
                    id: 9,
                    img: Sketch,
                    designation: "Web Developer",
                    location: "Sketch",
                    country: "San Francisco",
                    time: "8hr/ Day",
                    salary: "30k-35k"
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <Col lg={8} md={6} xs={12}>
                    <Row className="align-items-center">
                        <Col lg={9} md={8}>
                            <div className="section-title">
                                <span className="text-muted me-3">Showing 1 - 15 out of 452</span>
                            </div>
                        </Col>

                        <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="form custom-form">
                                <select className="form-select form-control" aria-label="Default select example" id="Sortbylist-job">
                                    <option defaultValue>All Jobs</option>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Remote</option>
                                    <option>Work From Home</option>
                                </select>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                    {(this.state.jobList || []).map((item ,key) => (
                        <Col xs={12} className="mt-4 pt-2" key={key}>
                            <div className="job-box d-md-flex align-items-center border-0 shadow rounded p-4 position-relative">
                                <img src={item.img} className="avatar avatar-md-sm" alt="" />

                                <div className="ms-md-4 mt-4 mt-sm-0">
                                    <Link to="/job-detail-one" className="text-dark h5">{item.designation}</Link>

                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><i className="uil uil-map-marker text-primary"></i> <Link to="#" className="text-dark">{item.location}</Link>, {item.country}</li>{" "}
                                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><i className="uil uil-clock text-primary"></i> {item.time}</li>{" "}
                                        <li className="d-lg-inline text-muted h6 mb-0"><i className="uil uil-bill text-primary"></i> {item.salary}</li>
                                    </ul>

                                    <div className="mt-2">
                                        <span className="badge bg-soft-primary me-1">Fulltime</span>
                                        <span className="badge bg-soft-warning">Office</span>
                                    </div>
                                </div>

                                <div className="position-absolute top-0 end-0 mt-3 me-3">
                                    <Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><i className="uil uil-bookmark align-middle"></i></Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                        
                    </Row>
                    <Pagination />
                </Col>

            </React.Fragment>
        );
    }
}

export default ListPage;