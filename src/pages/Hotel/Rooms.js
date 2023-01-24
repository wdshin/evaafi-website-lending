// React Basic and Bootstrap
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import { hotelRoomsData } from "../../common/data";

const Rooms = () => {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Rooms & Suits"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {hotelRoomsData.map((room, key) => (
                <Col lg="4" md="6" key={key} className="mt-4 pt-2">
                  <Card className="work-container work-modern rounded border-0 overflow-hidden">
                    <CardBody className="p-0">
                      <img
                        src={room.imageUrl}
                        className="img-fluid rounded"
                        alt="work"
                      />
                      <div className="overlay-work"></div>
                      <div className="content">
                        <Link
                          to="#"
                          className="title text-white pb-2 border-bottom"
                        >
                          {room.title}
                        </Link>
                        <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                          <li className="list-inline-item me-3">
                            <i className="mdi mdi-bed-empty mdi-24px me-2"></i>
                            {room.bed} Bed
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-scale-bathroom mdi-24px me-2"></i>
                            {room.bathrooms} Bathrooms
                          </li>
                        </ul>
                        <p className="text-white d-block mb-0">
                          Rent{" "}
                          <span className="text-success">${room.rent}</span> /
                          {room.type}
                        </p>
                      </div>
                      <div className="read_more bg-primary text-center rounded-circle">
                        <Link to="#" className="text-light d-block">
                          <i>
                            <FeatherIcon
                              icon="chevron-right"
                              className="fea icon-sm title-dark"
                            />
                          </i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center">
              <Col xs="12" className="text-center mt-4 pt-2">
                <Link to="#" className="btn btn-primary">
                  See More <i className="uil uil-angle-right-b"></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
};

export default Rooms;
