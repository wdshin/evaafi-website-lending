import React, { Component } from 'react';
import NavBar from './NavBar';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import client from '../../../assets/images/client/03.jpg';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

//Import ImageSlider
import ImageSlider from './Blog/ImageSlider';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

class BlogAbout extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="bg-half-170 d-table w-100">
          <Container>
            <Row className="justify-content-center mt-5">
              <Col lg={10}>
                <div className="section-title text-center">
                  <img
                    src={client}
                    className="img-fluid avatar avatar-large rounded-pill shadow-md"
                    alt=""
                  />

                  <h4 className="title mt-4 mb-0">Cristina Jota</h4>
                  <small className="fw-bold text-primary">
                    PHOTOGRAPHER & BLOGGER
                  </small>
                </div>
              </Col>

              <Col lg={10} className="mt-4 pt-2">
                <p className="text-muted">
                  Appropriately empower dynamic leadership skills after business
                  portals. Globally myocardinate interactive supply chains with
                  distinctive quality vectors. Globally revolutionize global
                  sources through interoperable services.Quickly aggregate and
                  worldwide potentialities. spirits boom yardarm supply chains
                  with distinctive quality vectors. Globally revolutionize
                  global sources through interoperable services.
                </p>
                <p className="text-muted">
                  Dynamically reinvent market-driven opportunities, fingerstache
                  single-origin coffee Enthusiastically mesh long-term
                  high-impact infrastructures vis-a-vis efficient customer
                  service. Professionally fashion wireless leadership rather
                  than prospective experiences. Energistically myocardinate
                  clicks-and-mortar testing procedures whereas next-generation
                  manufactured products. knausgaard portland keytar pop-up.
                  Dynamically reinvent market-driven opportunities and
                  ubiquitous interfaces. Energistically fabricate an expanded
                  array of niche markets through robust products.
                </p>
                <p className="text-muted">
                  Compellingly embrace empowered e-business after user friendly
                  intellectual capital. Interactively actualize front-end
                  processes with effective convergence. Synergistically deliver
                  performance based methods of empowerment whereas distributed
                  expertise.
                </p>

                <ul className="list-unstyled text-center social-icon social mb-0 mt-4 pt-2">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map(
                    (item, key) => (
                      <li key={key} className="list-inline-item me-1">
                        <Link to="#" className="rounded-pill">
                          <FeatherIcon
                            icon={item}
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Import Image Slider */}
        <ImageSlider />

        {/* import Footer */}
        <Footer />

        <ThemeSwitcher/>
      </React.Fragment>
    );
  }
}

export default BlogAbout;
