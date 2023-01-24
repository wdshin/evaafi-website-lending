// React Basic and Bootstrap
import React from "react";

import { Container, Row, Col } from "reactstrap";

// Import images
import bg05 from "../../assets/images/hotel/bg05.jpg";

// Import components
import ReviewSlider4 from "./ReviewSlider4";
import {hotelClientsData} from "../../common/data";

const Client = () => {
    return (
      <React.Fragment>
        <section
          className="section"
          style={{ background: `url(${bg05}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="7" className="text-center">
                {/* review-slider */}
                <ReviewSlider4 clients={hotelClientsData} items={1} />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
}

export default Client;
