// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import team1 from '../../assets/images/client/01.jpg';
import team2 from '../../assets/images/client/02.jpg';
import team3 from '../../assets/images/client/03.jpg';
import team4 from '../../assets/images/client/04.jpg';
import team5 from '../../assets/images/client/05.jpg';
import team6 from '../../assets/images/client/06.jpg';
import team7 from '../../assets/images/client/07.jpg';
import team8 from '../../assets/images/client/08.jpg';

class PageTeam extends Component {

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
            candidates2: [
                { id: 1, image: team5, name: "Krista John", designation: "Professor" },
                { id: 2, image: team6, name: "Jack John", designation: "Professor" },
                { id: 3, image: team1, name: "Roger Jackson", designation: "Professor" },
                { id: 4, image: team2, name: "Luchhi Cina", designation: "Professor" },
                { id: 5, image: team3, name: "Sophiya Cally", designation: "Professor" },
                { id: 6, image: team4, name: "Johnny English", designation: "Professor" },
            ]
        };
    }

    componentDidMount() {
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (navBar != null) {
            if (top > 80) {
                navBar.classList.add("nav-sticky");
            } else {
                navBar.classList.remove("nav-sticky");
                document.querySelector(".shoppingbtn").classList.add("btn-primary");
                document.querySelector(".shoppingbtn").classList.remove("btn-light");
                document.querySelector(".settingbtn").classList.add("btn-soft-primary");
            }
        }
    };

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <section className="bg-half-170 bg-light d-table w-100">
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title mb-0"> Team Members </h4>
                                </div>
                            </Col> 
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">Team</li>
                                </ul>
                            </nav>
                        </div>
                    </Container> 
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <Row>
                            <Col xs={12} className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title">Team #1</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {/* teambox */}
                            {
                                this.state.candidates.map((candidate, key) =>
                                    <Col lg={3} md={6} key={key} className="mt-4 pt-2">
                                        <Card className="team text-center border-0">
                                            <div className="position-relative">
                                                <img src={candidate.image} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
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

                        <Row>
                            <Col xs={12} className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title">Team #2</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {
                                this.state.candidates2.map((candidate, key) =>
                                    <Col lg={4} md={6} xs={12} key={key} className="mt-4 pt-2">
                                        <div className="d-flex align-items-center">
                                            <img src={candidate.image} className="avatar avatar-medium rounded-circle img-thumbnail" alt="Landrick" />
                                            <div className="content ms-3">
                                                <h5 className="mb-0"><Link to="#" className="text-dark">{candidate.name}</Link></h5>
                                                <small className="position text-muted">{candidate.designation}</small>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageTeam;
