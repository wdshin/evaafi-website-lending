import React, { Component } from 'react';
import NavBar from './NavBar';
import Masonry from 'react-responsive-masonry';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import about1 from '../../../../assets/images/work/about/1.jpg';
import about2 from '../../../../assets/images/work/about/2.jpg';
import about3 from '../../../../assets/images/work/about/3.jpg';
import about4 from '../../../../assets/images/work/about/4.jpg';
import about5 from '../../../../assets/images/work/about/5.jpg';
import about6 from '../../../../assets/images/work/about/6.jpg';
import about7 from '../../../../assets/images/work/about/7.jpg';
import about8 from '../../../../assets/images/work/about/8.jpg';
import client1 from '../../../../assets/images/client/01.jpg';
import client2 from '../../../../assets/images/client/02.jpg';
import client3 from '../../../../assets/images/client/03.jpg';
import client4 from '../../../../assets/images/client/04.jpg';

import { Card, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer4 from '../../PageFooterLayouts/Footer4';
import ThemeSwitcher from '../../../../components/Layout/ThemeSwitcher';

class PortfolioAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutItem: [
        { id: 1, image: about1 },
        { id: 2, image: about2 },
        { id: 3, image: about3 },
        { id: 4, image: about4 },
        { id: 5, image: about8 },
        { id: 6, image: about5 },
        { id: 7, image: about6 },
        { id: 8, image: about7 },
      ],

      featData: [
        { id: 1, icon: 'monitor', title: 'Fully Responsive' },
        { id: 2, icon: 'heart', title: 'Browser Compatibility' },
        { id: 3, icon: 'eye', title: 'Retina Ready' },
        { id: 4, icon: 'bold', title: 'Based On Bootstrap 5' },
        { id: 5, icon: 'feather', title: 'Feather Icons' },
        { id: 6, icon: 'code', title: 'Built With SASS' },
        { id: 7, icon: 'user-check', title: 'W3c Valid Code' },
        { id: 8, icon: 'git-merge', title: 'Flaticon Icons' },
        { id: 9, icon: 'settings', title: 'Easy to customize' },
      ],

      teamData: [
        {
          id: 1,
          clientName: 'Ronny Jofra',
          designation: 'C.E.O',
          img: client1,
          isChild: [
            { id: 1, icon: 'facebook' },
            { id: 2, icon: 'instagram' },
            { id: 3, icon: 'twitter' },
            { id: 4, icon: 'linkedin' },
          ],
        },
        {
          id: 2,
          clientName: 'Micheal Carlo',
          designation: 'Director',
          img: client4,
          isChild: [
            { id: 1, icon: 'facebook' },
            { id: 2, icon: 'instagram' },
            { id: 3, icon: 'twitter' },
            { id: 4, icon: 'linkedin' },
          ],
        },
        {
          id: 3,
          clientName: 'Aliana Rosy',
          designation: 'Manager',
          img: client2,
          isChild: [
            { id: 1, icon: 'facebook' },
            { id: 2, icon: 'instagram' },
            { id: 3, icon: 'twitter' },
            { id: 4, icon: 'linkedin' },
          ],
        },
        {
          id: 4,
          clientName: 'Sofia Razaq',
          designation: 'Developer',
          img: client3,
          isChild: [
            { id: 1, icon: 'facebook' },
            { id: 2, icon: 'instagram' },
            { id: 3, icon: 'twitter' },
            { id: 4, icon: 'linkedin' },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="bg-half" style={{padding: "200px 0 100px"}}>
          <Container>
            <Row>
              <Col lg={10}>
                <div className="pages-heading">
                  <h4 className="title mb-0">
                    We Are Landrick. <br />
                    Switzerland based art & design studio
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row id="grid" className="mt-5">
              <Masonry columnsCount={4} gutter="10px">
                {this.state.aboutItem.map((image, i) => (
                  <img
                    key={i}
                    src={image.image}
                    alt=""
                    style={{ width: '100%', display: 'block', borderRadius:'6px' }}
                  />
                ))}
              </Masonry>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Key Features</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </div>

            <Row>
              {this.state.featData.map((item, key) => (
                <Col key={key} lg={4} md={6} className="mt-4 pt-2">
                  <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                    <div className="icon text-center rounded-circle me-3">
                      <FeatherIcon
                        icon={item.icon}
                        className="fea icon-ex-md text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="title mb-0">{item.title}</h4>
                    </div>
                  </div>
                </Col>
              ))}

              <div className="col-12 mt-4 pt-2 text-center">
                <Link to="#" className="btn btn-primary">
                  See More <i className="mdi mdi-arrow-right"></i>
                </Link>
              </div>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Our Team</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {/*  */}
              {this.state.teamData.map((item, key) => (
                <Col key={key} lg={3} md={6} className="mt-4 pt-2">
                  <Card className="team team-primary text-center border-0">
                    <div className="position-relative">
                      <img
                        src={item.img}
                        className="img-fluid rounded shadow"
                        alt=""
                      />
                      <ul className="list-unstyled mb-0 team-icon">
                        {item.isChild.map((subitem, key) => (
                          <li key={key} className="list-inline-item me-1 me-1">
                            <Link to="#" className="btn btn-primary btn-pills btn-sm btn-icon">
                              <FeatherIcon
                                icon={subitem.icon}
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-body py-3 px-0 content">
                      <h5 className="mb-0">
                        <Link to="#" className="name text-dark">
                          {item.clientName}
                        </Link>
                      </h5>
                      <small className="designation text-muted">
                        {item.designation}
                      </small>
                    </div>
                  </Card>
                </Col>
              ))}
              {/*  */}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">
                    Let's talk about your portfolio
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>

                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary">
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer4 />
        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default PortfolioAbout;
