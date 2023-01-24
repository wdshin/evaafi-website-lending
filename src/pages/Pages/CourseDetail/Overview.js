import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Images
import course01 from "../../../assets/images/course/de01.jpg";
import course02 from "../../../assets/images/course/de02.jpg";
import client05 from "../../../assets/images/client/05.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss";

const Overview = () => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="section-title">
                                <h4 className="title mb-4">Overview</h4>
                                <p className="text-muted">Ooh, name it after me! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. Why would I want to know that? What’s with you kids? Every other day it’s food, food, food. Alright, I’ll get you some stupid food.</p>
                                <p className="text-muted">It’s a T. It goes “tuh”. You seem malnourished. Are you suffering from intestinal parasites? I suppose I could part with ‘one’ and still be feared… And I’d do it again! And perhaps a third time! But that would be it.</p>
                                <p className="text-muted">I’m just glad my fat, ugly mama isn’t alive to see this day. I can explain. It’s very valuable. I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him.</p>
                                <p className="text-muted">Bender, we’re trying our best. Kif might! You can crush me but you can’t crush my spirit! Kif, I have mated with a woman. Inform the men. I’m Santa Claus!</p>
                                <p className="text-muted mb-0">What are you hacking off? Is it my torso?! ‘It is!’ My precious torso! You, a bobsleder!? That I’d like to see! And I’d do it again! And perhaps a third time! But that would be it. My fellow Earthicans, as I have explained in my book ‘Earth in the Balance”, and the much more popular ”Harry Potter and the Balance of Earth’, we need to defend our planet against pollution. Also dark wizards.</p>
                            </div>

                            <Row>
                                <Col md={6} className="mt-4 pt-2"><img src={course01} className="img-fluid rounded shadow" alt="" /></Col>
                                <Col md={6} className="mt-4 pt-2">
                                    <div className="position-relative">
                                        <img src={course02} className="rounded img-fluid mx-auto d-block" alt="" />
                                        <div className="play-icon">
                                            <Link to="#!" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="play-btn lightbox border-0">
                                                <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <ModalVideo
                                channel="youtube"
                                isOpen={open}
                                videoId="yba7hPeTSjk"
                                onClose={() => setOpen(false)}
                            />

                            <div className="section-title mt-4 pt-2">
                                <h4 className="title mb-0">Curriculum</h4>

                                <Row>
                                    <Col md={6} className="mt-4 pt-2">
                                        <h5 className="mb-0">Introductions</h5>

                                        <div className="table-responsive bg-white shadow rounded mt-4">
                                            <Table className="table mb-0 table-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ minWidth: "100px" }}>Lessons</th>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 1</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 2</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 3</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 4</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <h5 className="mb-0">Mastery</h5>

                                        <div className="table-responsive bg-white shadow rounded mt-4">
                                            <Table className="mb-0 table-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ minWidth: "100px" }}>Lessons</th>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 11</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 12</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 13</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 14</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <h5 className="mb-0">Final Thoughts</h5>

                                        <div className="table-responsive bg-white shadow rounded mt-4">
                                            <Table className="mb-0 table-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ minWidth: "100px" }}>Lessons</th>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 21</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 22</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 23</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 24</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <h5 className="mb-0">Bonus</h5>

                                        <div className="table-responsive bg-white shadow rounded mt-4">
                                            <Table className="mb-0 table-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ minWidth: "100px" }}>Lessons</th>
                                                        <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 31</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 32</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 33</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="p-3">
                                                            <div className="align-items-center">
                                                                <i className="uil uil-notes h6"></i>
                                                                <p className="mb-0 d-inline fw-normal h6 ms-1"><Link to="#" className="text-muted">Lesson 34</Link></p>
                                                            </div>
                                                        </th>
                                                        <td className="p-3 text-end"><i className="uil uil-lock"></i></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="section-title mt-4 pt-2">
                                <h4 className="title mb-0">Instructor</h4>

                                <div className="d-md-flex align-items-center mt-4 pt-2">
                                    <img src={client05} className="avatar avatar-medium rounded-pill" alt="" />

                                    <div className="ms-md-3 mt-4 mt-sm-0">
                                        <Link to="#" className="text-dark h5">Cristina Murphy</Link>
                                        <p className="text-muted mb-0 mt-2">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Overview;