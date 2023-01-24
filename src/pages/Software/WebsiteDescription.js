import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import mobile from "../../assets/images/software/mobile01.png";

class WebsiteDescription extends Component {

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="5" md="6">
              <img src={mobile} className="img-fluid" alt="" />
            </Col>

            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">Carry out Marketing Initiatives : Landrick</h4>
                <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                <ul className="list-unstyled mb-0 text-muted">
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                  <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;
