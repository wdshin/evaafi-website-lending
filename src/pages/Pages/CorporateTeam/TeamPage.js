import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import team1 from '../../../assets/images/client/01.jpg';
import team2 from '../../../assets/images/client/02.jpg';
import team3 from '../../../assets/images/client/03.jpg';
import team4 from '../../../assets/images/client/04.jpg';
import team5 from '../../../assets/images/client/05.jpg';
import team6 from '../../../assets/images/client/06.jpg';
import team7 from '../../../assets/images/client/07.jpg';
import team8 from '../../../assets/images/client/08.jpg';

class TeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [
                {
                    id: 1, image: team1, name: "Ronny Jofra", designation: "C.E.O", salary: "2300", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 2, image: team4, name: "Micheal Carlo", designation: "Director", salary: "1950", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 3, image: team2, name: "Aliana Rosy", designation: "Manager", salary: "2540", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 4, image: team3, name: "Sofia Razaq", designation: "Developer", salary: "2190", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 5, image: team6, name: "Calvin Carlo", designation: "C.E.O", salary: "2190", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 6, image: team5, name: "Juhi Chawla", designation: "Director", salary: "2190", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 7, image: team7, name: "Arlo Walker", designation: "Manager", salary: "2190", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
                {
                    id: 8, image: team8, name: "Randeep Huda", designation: "Developer", salary: "2190", link: "",
                    socialIds: [
                        { icon: "facebook", link: "#" },
                        { icon: "instagram", link: "#" },
                        { icon: "twitter", link: "#" },
                        { icon: "linkedin", link: "#" },
                    ]
                },
            ],
        };
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Our Team</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>
                </Row>
                    <Row>
                        {
                            this.state.candidates.map((candidate, key) =>
                                <Col lg="3" md="6" key={key} className="mt-4 pt-2">
                                    <Card className="team team-primary text-center border-0">
                                        <div className="position-relative">
                                            <img src={candidate.image} className="img-fluid rounded shadow" alt="" />
                                            <ul className="list-unstyled mb-0 team-icon">
                                                {
                                                    candidate.socialIds.map((id, key) =>
                                                        <li key={key} className="list-inline-item me-1"><Link to={id.link} className="btn btn-primary btn-pills btn-sm btn-icon"><i><FeatherIcon icon={id.icon} className="fea icon-sm fea-social" /></i></Link></li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <CardBody className="py-3 px-0 content">
                                            <h5 className="mb-0"><Link to={candidate.link} className="name text-dark">{candidate.name}</Link></h5>
                                            <small className="designation text-muted">{candidate.designation}</small>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default TeamPage;